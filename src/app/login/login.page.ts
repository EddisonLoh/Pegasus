import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { OtpComponent } from '../otp/otp.component';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
import { OverlayService } from '../services/overlay.service';
import { StatusBar } from '@capacitor/status-bar';
import { AvatarService } from '../services/avatar.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { CountrySearchModalComponent } from '../country-search-modal/country-search-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { Preferences } from '@capacitor/preferences';
import { CountryFlagService } from '../services/country-flag.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  form: FormGroup;
  CountryCode: any;
  CountryJson = environment.CountryJson;
  flag: any = "https://cdn.kcak11.com/CountryFlags/countries/my.svg";
  flagEmoji: string = '🇲🇾';
  flagLoadError: boolean = false;
  filteredCountries = [];
  user: any;
  approve: boolean;
  approve2: boolean;
  userCountry: string = 'MY'; // Default to Malaysia
  isInTestMode: boolean = false; // Flag to track if we're in test mode


  numberT: string;
  backButtonSubscription: any;

  constructor(
    private modalCtrl: ModalController,
    private auth: AuthService,
    private router: Router,
    private avatar: AvatarService,
    private overlay: OverlayService,
    private alertController: AlertController,
    private platform: Platform,
    private translate: TranslateService,
    private countryFlagService: CountryFlagService
  ) {
    // Set Malaysia as default - no auto-detection
    this.CountryCode = '+60';
    this.numberT = '+60';
    this.updateFlag('MY');
  }

  async ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
    });

    this.filteredCountries = this.CountryJson;

    // Load saved language from Preferences
    await this.loadLanguage();
    // Initialize reCAPTCHA after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.auth.recaptcha();
    }, 500);

    this.initializeBackButtonCustomHandler(); // Initialize back button handler
  }

  ngOnDestroy() {
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
    }
    // Clean up reCAPTCHA
    this.auth.clearRecaptcha();
  }

  async loadLanguage() {
    try {
      const { value } = await Preferences.get({ key: 'user-lang' });
      const lang = value || 'en';
      console.log('Loading language:', lang);

      // Set default language first
      this.translate.setDefaultLang(lang);

      // Then use it
      await this.translate.use(lang).toPromise();

      console.log('Current language:', this.translate.currentLang);
      console.log('Default language:', this.translate.getDefaultLang());

      // Test if translations are loaded
      const testKey = await this.translate.get('APP_NAME').toPromise();
      console.log('APP_NAME translation:', testKey);

    } catch (error) {
      console.error('Error loading language:', error);
      this.translate.setDefaultLang('en');
      await this.translate.use('en').toPromise();
    }
  }

  getFlag(lang: string) {
    let isoCode = 'US';
    if (lang === 'ms') isoCode = 'MY';
    if (lang === 'ar') isoCode = 'SA';
    
    const country = this.CountryJson.find(c => c.isoCode === isoCode);
    return country ? country.flag : '';
  }

  async HideSplash() {
    await SplashScreen.hide();
  }

  async openCountrySearchModal() {
    const modal = await this.modalCtrl.create({
      component: CountrySearchModalComponent
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log('Selected country:', data);
      this.CountryCode = data.dialCode;
      this.numberT = data.dialCode;
      this.userCountry = data.isoCode;
      this.updateFlag(data.isoCode);
    }
  }

  filterCountries(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country =>
      country.name.toLowerCase().includes(searchTerm) ||
      country.dialCode.includes(searchTerm)
    );
  }

  countryCodeChange($event: any) {
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  async Show() {
    await StatusBar.setOverlaysWebView({ overlay: false });
  }

  async Hide() {
    await StatusBar.setOverlaysWebView({ overlay: true });
  }

  async signIn() {
    try {
      if (!this.form.valid) {
        const errorMessage = this.form.get('phone').hasError('required')
          ? await this.translate.get('MOBILE_REQUIRED').toPromise()
          : await this.translate.get('MOBILE_INVALID').toPromise();
        this.overlay.showAlert(
          await this.translate.get('ERROR').toPromise(),
          errorMessage
        );
        return;
      }

      this.overlay.showLoader('');
      const fullPhoneNumber = this.numberT + this.form.value.phone;

      let confirmationResult;

      // Check if we're in test mode - bypass Firebase
      if (this.isInTestMode) {
        console.log('🧪 Test mode active - bypassing Firebase');
        this.overlay.hideLoader();
        const testOTP = localStorage.getItem('defaultOTP') || '123456';
        // Reset test mode flag for next attempt
        this.isInTestMode = false;
        return this.proceedWithTestMode(this.form.value.phone, testOTP);
      }
      console.log('📱 Signing in with phone number:', fullPhoneNumber);
      try {
        confirmationResult = await this.auth.signInWithPhoneNumber(fullPhoneNumber);
      } catch (authError) {
        console.error('Firebase authentication error:', authError);
        this.overlay.hideLoader();

        // For ANY Firebase error, offer test mode - simpler approach
        const wantsTestMode = await this.showErrorWithTestModeOption(authError.code);

        if (wantsTestMode) {
          return this.switchToTestMode();
        } else {
          return; // User declined test mode
        }
      }

      let storedOTP = localStorage.getItem('defaultOTP') || '';
      this.overlay.hideLoader();

      const modal = await this.modalCtrl.create({
        component: OtpComponent,
        componentProps: {
          defaultOtp: storedOTP,
          phone: this.form.value.phone,
          countryCode: this.numberT,
          confirmationResult: confirmationResult,
          isTestMode: false
        },
        canDismiss: true
      });

      await modal.present();
      const { data } = await modal.onWillDismiss();

      if (!data?.user) return;

      await this.navigateAfterLogin(data.user);

    } catch (e) {
      console.error('Unexpected sign-in error:', e);
      this.overlay.hideLoader();
      await this.handleAuthError(e);
    }
  }

  async showErrorWithTestModeOption(errorCode: string): Promise<boolean> {
    let errorTitle = '';
    let errorMessage = '';
    let errorDetails = '';

    // Get the specific error information
    switch (errorCode) {
      case 'auth/too-many-requests':
        errorTitle = await this.translate.get('TOO_MANY_REQUESTS_TITLE').toPromise();
        errorMessage = await this.translate.get('TOO_MANY_REQUESTS_DETAIL').toPromise();
        errorDetails = await this.translate.get('TOO_MANY_REQUESTS_CAUSE').toPromise();
        break;
      case 'auth/quota-exceeded':
      case 'auth/invalid-app-credential':
        errorTitle = await this.translate.get('SMS_QUOTA_TITLE').toPromise();
        errorMessage = await this.translate.get('SMS_QUOTA_DETAIL').toPromise();
        errorDetails = await this.translate.get('SMS_QUOTA_CAUSE').toPromise();
        break;
      case 'auth/captcha-check-failed':
        errorTitle = await this.translate.get('CAPTCHA_FAILED_TITLE').toPromise();
        errorMessage = await this.translate.get('CAPTCHA_FAILED_DETAIL').toPromise();
        errorDetails = await this.translate.get('CAPTCHA_FAILED_CAUSE').toPromise();
        break;
      case 'auth/internal-error':
        errorTitle = await this.translate.get('INTERNAL_ERROR_TITLE').toPromise();
        errorMessage = await this.translate.get('INTERNAL_ERROR_DETAIL').toPromise();
        errorDetails = await this.translate.get('INTERNAL_ERROR_CAUSE').toPromise();
        break;
      default:
        // For unknown errors, show the actual error code
        errorTitle = '❌ Authentication Error';
        errorMessage = `Firebase authentication failed with error code:\n\n${errorCode}`;
        errorDetails = '📋 Possible Causes:\n• Firebase configuration issue\n• Network connectivity problem\n• Service temporarily unavailable\n• Billing or quota limits\n\n💡 You can use Test Mode to continue development.';
    }

    // Combine error with test mode offer
    const fullMessage = errorDetails
      ? `${errorMessage}\n\n${errorDetails}\n\n━━━━━━━━━━━━━━━━━━━━\n\n${await this.translate.get('TEST_MODE_OFFER').toPromise()}`
      : `${errorMessage}\n\n━━━━━━━━━━━━━━━━━━━━\n\n${await this.translate.get('TEST_MODE_OFFER').toPromise()}`;

    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: errorTitle,
        message: fullMessage,
        cssClass: 'error-alert',
        buttons: [
          {
            text: await this.translate.get('CLOSE').toPromise(),
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('User clicked Close');
              resolve(false);
            }
          },
          {
            text: await this.translate.get('USE_TEST_MODE').toPromise(),
            cssClass: 'primary',
            handler: () => {
              console.log('User clicked Use Test Mode');
              resolve(true);
            }
          }
        ]
      });

      await alert.present();
      console.log('Alert presented');
    });
  }

  async switchToTestMode() {
    // Make sure loader is hidden
    this.overlay.hideLoader();

    // Set test credentials
    this.CountryCode = '+60';
    this.numberT = '+60';
    const defaultNumbers = ['1234567856'];
    const randomDefaultNumber = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];
    this.form.controls['phone'].setValue(randomDefaultNumber);
    const testOTP = '123456';
    localStorage.setItem('defaultOTP', testOTP);

    // Set test mode flag so next signIn() call bypasses Firebase
    this.isInTestMode = true;

    // Show instructions about what was filled
    const alert = await this.alertController.create({
      header: await this.translate.get('TEST_MODE_ACTIVATED_TITLE').toPromise(),
      message: await this.translate.get('TEST_MODE_ACTIVATED_MESSAGE').toPromise() +
        `\n\n📱 ${await this.translate.get('PHONE').toPromise()}: +60${randomDefaultNumber}\n🔐 OTP: ${testOTP}\n\n` +
        await this.translate.get('TEST_MODE_NEXT_STEP').toPromise(),
      buttons: [
        {
          text: await this.translate.get('GOT_IT').toPromise(),
          handler: () => {
            // User can now see the filled form and click Continue button themselves
            // When they click Continue, isInTestMode flag will bypass Firebase
          }
        }
      ]
    });
    await alert.present();
  }

  async proceedWithTestMode(phoneNumber: string, testOTP: string) {
    // Use the correct test phone number
    const testPhoneNumber = '1234567856';

    // Create a PURE MOCK confirmation result - NO FIREBASE CALLS
    const mockConfirmationResult = {
      confirm: async (otp: string) => {
        console.log('🧪 Test mode: Verifying OTP:', otp);
        if (otp === testOTP) {
          // IMPORTANT: Don't call Firebase at all in test mode
          // Return a mock user structure that matches Firebase user
          console.log('✅ Test mode: OTP verified successfully');
          
          // For test mode, we need to actually authenticate with Firebase
          // but only ONCE when OTP is verified, not during initial SMS request
          try {
            this.overlay.showLoader('Signing in...');
            const fullPhoneNumber = '+60' + testPhoneNumber;
            // This is the ONLY Firebase call in test mode - when OTP is verified
            const realConfirmationResult = await this.auth.signInWithPhoneNumber(fullPhoneNumber);
            const result = await realConfirmationResult.confirm(otp);
            this.overlay.hideLoader();
            console.log('✅ Test mode: Firebase authentication completed');
            return result;
          } catch (error) {
            this.overlay.hideLoader();
            console.error('❌ Test mode: Firebase authentication failed:', error);
            throw error;
          }
        } else {
          throw new Error('Invalid OTP');
        }
      }
    };

    // Open OTP modal with test credentials pre-filled
    const modal = await this.modalCtrl.create({
      component: OtpComponent,
      componentProps: {
        defaultOtp: testOTP,
        phone: testPhoneNumber,
        countryCode: '+60',
        confirmationResult: mockConfirmationResult,
        isTestMode: true
      },
      canDismiss: true
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (!data?.user) return;

    await this.navigateAfterLogin(data.user);
  }

  async handleAuthError(error: any) {
    let errorTitle = await this.translate.get('ERROR').toPromise();
    let errorMessage = '';

    switch (error.code) {
      case 'auth/invalid-phone-number':
        errorMessage = await this.translate.get('MOBILE_INVALID').toPromise();
        break;

      case 'auth/missing-phone-number':
        errorMessage = await this.translate.get('MOBILE_REQUIRED').toPromise();
        break;

      case 'auth/network-request-failed':
        errorMessage = await this.translate.get('NETWORK_ERROR').toPromise();
        break;

      case 'auth/too-many-requests':
        errorTitle = await this.translate.get('TOO_MANY_REQUESTS_TITLE').toPromise();
        errorMessage = await this.translate.get('TOO_MANY_REQUESTS').toPromise();
        break;

      case 'auth/invalid-app-credential':
      case 'auth/quota-exceeded':
        errorTitle = await this.translate.get('SMS_QUOTA_TITLE').toPromise();
        errorMessage = await this.translate.get('SMS_QUOTA_MESSAGE').toPromise();
        break;

      case 'auth/captcha-check-failed':
        errorTitle = await this.translate.get('CAPTCHA_FAILED_TITLE').toPromise();
        errorMessage = await this.translate.get('CAPTCHA_FAILED_MESSAGE').toPromise();
        break;

      default:
        errorMessage = `${await this.translate.get('SIGN_IN_ERROR').toPromise()} ${error.code || error.message || 'Unknown error'}`;
        break;
    }

    await this.overlay.showAlert(errorTitle, errorMessage);
  }

  async navigateAfterLogin(user: any) {
    try {
      // Check if user has a rider profile
      const hasRiderProfile = await this.avatar.checkRiderProfile(user.uid);

      if (hasRiderProfile) {
        // Existing rider - go to home
        this.router.navigateByUrl('/home', { replaceUrl: true });
      } else {
        // New user - complete profile
        this.router.navigateByUrl('/details', { replaceUrl: true });
      }
    } catch (error) {
      console.error('Error checking user profile:', error);
      // If error occurs, assume new user and redirect to details
      this.router.navigateByUrl('/details', { replaceUrl: true });
    }
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  async handleBackButton() {
    try {
      await this.showExitConfirmation();
    } catch (error) {
      console.error('Error handling back button:', error);
    }
  }

  async showExitConfirmation() {
    const alert = await this.alertController.create({
      header: await this.translate.get('EXIT_APP').toPromise(),
      message: await this.translate.get('EXIT_CONFIRM').toPromise(),
      buttons: [
        {
          text: await this.translate.get('CANCEL').toPromise(),
          role: 'cancel'
        },
        {
          text: await this.translate.get('EXIT').toPromise(),
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  async changeLanguage(lang: string) {
    console.log('Changing language to:', lang);
    try {
      // Set the language immediately
      this.translate.setDefaultLang(lang);

      // Use the translation service to switch language and wait for it
      await this.translate.use(lang).toPromise();

      console.log('Language successfully changed to:', lang);
      console.log('Current language:', this.translate.currentLang);

      // Save to preferences
      await Preferences.set({ key: 'user-lang', value: lang });

      // Force reload translations by getting a test key
      const testTranslation = await this.translate.get('APP_NAME').toPromise();
      console.log('Test translation:', testTranslation);

    } catch (error) {
      console.error('Error changing language:', error);
    }
  }

  updateFlag(countryCode: string) {
    const flagData = this.countryFlagService.getFlagWithFallback(countryCode);
    this.flag = flagData.url;
    this.flagEmoji = flagData.emoji;
    this.flagLoadError = false;
  }

  onFlagLoadError() {
    console.log('Flag image failed to load, using emoji fallback');
    this.flagLoadError = true;
  }

  async detectUserCountry() {
    try {
      // Use native HTTP for better Android compatibility
      const response = await fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      const countryCode = data.country;
      const matchingCountry = this.CountryJson.find(
        country => country.isoCode === countryCode
      );
      if (matchingCountry) {
        this.CountryCode = matchingCountry.dialCode;
        this.numberT = matchingCountry.dialCode;
        this.userCountry = countryCode;
        this.updateFlag(countryCode);
      } else {
        // If country not found, keep Malaysia as default
        this.CountryCode = '+60';
        this.numberT = '+60';
        this.userCountry = 'MY';
        this.updateFlag('MY');
      }
    } catch (error) {
      console.error('Error detecting country:', error);
      // On error, ensure Malaysia defaults are set
      this.CountryCode = '+60';
      this.numberT = '+60';
      this.userCountry = 'MY';
      this.updateFlag('MY');
    }
  }
}
