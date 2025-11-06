import { Injectable } from '@angular/core';
import {
  Auth,
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  linkWithCredential,
  unlink,
  fetchSignInMethodsForEmail,
} from '@angular/fire/auth';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  appVerifier: RecaptchaVerifier;
  confirmationResult: any;
  user$: Observable<User | null>;
  private isRecaptchaInitialized = false;

  constructor(private auth: Auth) {
    this.user$ = new Observable<User | null>((subscriber) => {
      this.auth.onAuthStateChanged(subscriber);
    });
  }

  // Initialize RecaptchaVerifier
  recaptcha() {
    try {
      // Clear existing verifier if it exists
      if (this.appVerifier) {
        this.appVerifier.clear();
        this.appVerifier = null;
        this.isRecaptchaInitialized = false;
      }

      // Check if the container exists
      const container = document.getElementById('sign-in-button');
      if (!container) {
        console.error('reCAPTCHA container not found');
        return;
      }

      // Clear the container
      container.innerHTML = '';

      this.appVerifier = new RecaptchaVerifier('sign-in-button', {
        size: 'invisible',
        callback: (response) => {
          console.log('reCAPTCHA verified:', response);
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired, reinitializing...');
          this.isRecaptchaInitialized = false;
          this.recaptcha();
        }
      }, this.auth);

      this.appVerifier.render().then(() => {
        this.isRecaptchaInitialized = true;
        console.log('reCAPTCHA initialized successfully');
      }).catch((error) => {
        console.error('reCAPTCHA render error:', error);
        this.isRecaptchaInitialized = false;
      });
    } catch (error) {
      console.error('reCAPTCHA initialization error:', error);
      this.isRecaptchaInitialized = false;
    }
  }

  async signInWithPhoneNumber(phoneNumber: string) {
    try {
      // Ensure reCAPTCHA is initialized
      if (!this.appVerifier || !this.isRecaptchaInitialized) {
        this.recaptcha();
        // Wait a bit for initialization
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      if (!this.appVerifier) {
        throw new Error('reCAPTCHA not initialized');
      }

      const confirmationResult = await signInWithPhoneNumber(this.auth, phoneNumber, this.appVerifier);
      this.confirmationResult = confirmationResult;
      return confirmationResult;
    } catch (e) {
      console.error('Sign in with phone number error:', e);
      // Reset reCAPTCHA on error
      this.isRecaptchaInitialized = false;
      throw(e);
    }
  }

  clearRecaptcha() {
    if (this.appVerifier) {
      try {
        this.appVerifier.clear();
      } catch (error) {
        console.error('Error clearing reCAPTCHA:', error);
      }
      this.appVerifier = null;
      this.isRecaptchaInitialized = false;
    }
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider);
  }

  async linkGoogleAccount(user: User) {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        await linkWithCredential(user, credential);
      }
    } catch (error) {
      if (error.code === 'auth/credential-already-in-use') {
        console.error('Error during Google sign-in: ', error);

        if (error.customData && error.customData.email) {
          const existingSignInMethods = await fetchSignInMethodsForEmail(this.auth, error.customData.email);
          if (existingSignInMethods.includes(GoogleAuthProvider.PROVIDER_ID)) {
            await unlink(this.auth.currentUser, GoogleAuthProvider.PROVIDER_ID);
            const result = await signInWithPopup(this.auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential) {
              await linkWithCredential(user, credential);
            }
          }
        } else {
          console.error('Missing email in error details: ', error);
        }
      } else {
        throw error;
      }
    }
  }

  async verifyOtp(otp: string) {
    try {
      if (!this.appVerifier) this.recaptcha();
      const result = await this.confirmationResult.confirm(otp);
      console.log(result);
      const user = result?.user;
      console.log(user);
    } catch (e) {
      throw(e?.message);
    }
  }

  logout() {
    return signOut(this.auth);
  }
}