"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
class LoginPageRoutingModule {
}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) { return new (t || LoginPageRoutingModule)(); };
LoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageRoutingModule });
LoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);








class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);


















function LoginPage_div_33_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "MOBILE_REQUIRED"), " ");
  }
}

function LoginPage_div_33_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "MOBILE_INVALID"), " ");
  }
}

function LoginPage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 38)(1, "ion-text", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LoginPage_div_33_small_2_Template, 3, 3, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LoginPage_div_33_small_3_Template, 3, 3, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("minlength") && !ctx_r0.form.get("phone").hasError("required"));
  }
}

function LoginPage_ion_label_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "CONTINUE"));
  }
}

function LoginPage_ion_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 40);
  }
}

function LoginPage_ion_spinner_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-spinner", 41);
  }
}

class LoginPage {
  constructor(modalCtrl, auth, router, avatar, overlay, alertController, platform, translate) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.avatar = avatar;
    this.overlay = overlay;
    this.alertController = alertController;
    this.platform = platform;
    this.translate = translate;
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/my.svg";
    this.filteredCountries = [];
    this.userCountry = 'MY'; // Default to Malaysia

    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        clickable: true
      }
    }; // Set Malaysia as default - no auto-detection

    this.CountryCode = '+60';
    this.numberT = '+60';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(10)]
        })
      });
      _this.filteredCountries = _this.CountryJson; // Load saved language from Preferences

      yield _this.loadLanguage(); // Initialize reCAPTCHA after a short delay to ensure DOM is ready

      setTimeout(() => {
        _this.auth.recaptcha();
      }, 500);

      _this.initializeBackButtonCustomHandler(); // Initialize back button handler

    })();
  }

  ngOnDestroy() {
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
    } // Clean up reCAPTCHA


    this.auth.clearRecaptcha();
  }

  loadLanguage() {
    var _this2 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          value
        } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.get({
          key: 'user-lang'
        });
        const lang = value || 'ms';
        console.log('Loading language:', lang); // Set default language first

        _this2.translate.setDefaultLang(lang); // Then use it


        yield _this2.translate.use(lang).toPromise();
        console.log('Current language:', _this2.translate.currentLang);
        console.log('Default language:', _this2.translate.getDefaultLang()); // Test if translations are loaded

        const testKey = yield _this2.translate.get('APP_NAME').toPromise();
        console.log('APP_NAME translation:', testKey);
      } catch (error) {
        console.error('Error loading language:', error);

        _this2.translate.setDefaultLang('ms');

        yield _this2.translate.use('ms').toPromise();
      }
    })();
  }

  HideSplash() {
    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();
    })();
  }

  openCountrySearchModal() {
    var _this3 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_5__.CountrySearchModalComponent
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();

      if (data) {
        console.log('Selected country:', data);
        _this3.CountryCode = data.dialCode;
        _this3.numberT = data.dialCode;
        _this3.flag = data.flag;
        _this3.userCountry = data.isoCode;
      }
    })();
  }

  filterCountries(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country => country.name.toLowerCase().includes(searchTerm) || country.dialCode.includes(searchTerm));
  }

  countryCodeChange($event) {
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  Show() {
    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }

  Hide() {
    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  signIn() {
    var _this4 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this4.form.valid) {
          const errorMessage = _this4.form.get('phone').hasError('required') ? yield _this4.translate.get('MOBILE_REQUIRED').toPromise() : yield _this4.translate.get('MOBILE_INVALID').toPromise();

          _this4.overlay.showAlert(yield _this4.translate.get('ERROR').toPromise(), errorMessage);

          return;
        }

        _this4.overlay.showLoader('');

        const fullPhoneNumber = _this4.numberT + _this4.form.value.phone;
        let confirmationResult;
        let isTestMode = false;

        try {
          confirmationResult = yield _this4.auth.signInWithPhoneNumber(fullPhoneNumber);
        } catch (authError) {
          console.error('Authentication error:', authError);

          _this4.overlay.hideLoader(); // Errors that can use test mode fallback


          const fallbackEligibleErrors = ['auth/too-many-requests', 'auth/invalid-app-credential', 'auth/quota-exceeded', 'auth/captcha-check-failed', 'auth/internal-error'];

          if (fallbackEligibleErrors.includes(authError.code)) {
            // First, show the actual error to the user
            const shouldOfferTestMode = yield _this4.showErrorWithTestModeOption(authError.code);

            if (shouldOfferTestMode) {
              return _this4.switchToTestMode();
            } else {
              return; // User chose not to use test mode
            }
          } // For other errors, show specific message without test mode option


          yield _this4.handleAuthError(authError);
          return;
        }

        let storedOTP = localStorage.getItem('defaultOTP') || '';

        _this4.overlay.hideLoader();

        const modal = yield _this4.modalCtrl.create({
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent,
          componentProps: {
            defaultOtp: storedOTP,
            phone: _this4.form.value.phone,
            countryCode: _this4.numberT,
            confirmationResult: confirmationResult,
            isTestMode: isTestMode
          },
          swipeToClose: true
        });
        yield modal.present();
        const {
          data
        } = yield modal.onWillDismiss();
        if (!data?.user) return;
        yield _this4.navigateAfterLogin(data.user);
      } catch (e) {
        console.error('Unexpected sign-in error:', e);

        _this4.overlay.hideLoader();

        yield _this4.handleAuthError(e);
      }
    })();
  }

  showErrorWithTestModeOption(errorCode) {
    var _this5 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let errorTitle = '';
      let errorMessage = '';
      let errorDetails = ''; // Get the specific error information

      switch (errorCode) {
        case 'auth/too-many-requests':
          errorTitle = yield _this5.translate.get('TOO_MANY_REQUESTS_TITLE').toPromise();
          errorMessage = yield _this5.translate.get('TOO_MANY_REQUESTS_DETAIL').toPromise();
          errorDetails = yield _this5.translate.get('TOO_MANY_REQUESTS_CAUSE').toPromise();
          break;

        case 'auth/quota-exceeded':
        case 'auth/invalid-app-credential':
          errorTitle = yield _this5.translate.get('SMS_QUOTA_TITLE').toPromise();
          errorMessage = yield _this5.translate.get('SMS_QUOTA_DETAIL').toPromise();
          errorDetails = yield _this5.translate.get('SMS_QUOTA_CAUSE').toPromise();
          break;

        case 'auth/captcha-check-failed':
          errorTitle = yield _this5.translate.get('CAPTCHA_FAILED_TITLE').toPromise();
          errorMessage = yield _this5.translate.get('CAPTCHA_FAILED_DETAIL').toPromise();
          errorDetails = yield _this5.translate.get('CAPTCHA_FAILED_CAUSE').toPromise();
          break;

        case 'auth/internal-error':
          errorTitle = yield _this5.translate.get('INTERNAL_ERROR_TITLE').toPromise();
          errorMessage = yield _this5.translate.get('INTERNAL_ERROR_DETAIL').toPromise();
          errorDetails = yield _this5.translate.get('INTERNAL_ERROR_CAUSE').toPromise();
          break;

        default:
          errorTitle = yield _this5.translate.get('AUTH_UNAVAILABLE_TITLE').toPromise();
          errorMessage = yield _this5.translate.get('AUTH_UNAVAILABLE_DETAIL').toPromise();
          errorDetails = '';
      } // Combine the error message with details


      const fullMessage = errorDetails ? `${errorMessage}\n\n${errorDetails}\n\n${yield _this5.translate.get('TEST_MODE_OFFER').toPromise()}` : `${errorMessage}\n\n${yield _this5.translate.get('TEST_MODE_OFFER').toPromise()}`;
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const alert = yield _this5.alertController.create({
            header: errorTitle,
            message: fullMessage,
            cssClass: 'error-alert',
            buttons: [{
              text: yield _this5.translate.get('CLOSE').toPromise(),
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => resolve(false)
            }, {
              text: yield _this5.translate.get('USE_TEST_MODE').toPromise(),
              cssClass: 'primary',
              handler: () => resolve(true)
            }]
          });
          yield alert.present();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  switchToTestMode() {
    var _this6 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.CountryCode = '+60';
      _this6.numberT = '+60';
      const defaultNumbers = ['123456789', '987654321'];
      const randomDefaultNumber = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];

      _this6.form.controls['phone'].setValue(randomDefaultNumber);

      localStorage.setItem('defaultOTP', '123456'); // Show info about test mode

      yield _this6.overlay.showAlert(yield _this6.translate.get('TEST_MODE_TITLE').toPromise(), (yield _this6.translate.get('TEST_MODE_MESSAGE').toPromise()) + `\n\n📱 ${yield _this6.translate.get('PHONE').toPromise()}: +60${randomDefaultNumber}\n🔐 OTP: 123456`);
    })();
  }

  handleAuthError(error) {
    var _this7 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let errorTitle = yield _this7.translate.get('ERROR').toPromise();
      let errorMessage = '';

      switch (error.code) {
        case 'auth/invalid-phone-number':
          errorMessage = yield _this7.translate.get('MOBILE_INVALID').toPromise();
          break;

        case 'auth/missing-phone-number':
          errorMessage = yield _this7.translate.get('MOBILE_REQUIRED').toPromise();
          break;

        case 'auth/network-request-failed':
          errorMessage = yield _this7.translate.get('NETWORK_ERROR').toPromise();
          break;

        case 'auth/too-many-requests':
          errorTitle = yield _this7.translate.get('TOO_MANY_REQUESTS_TITLE').toPromise();
          errorMessage = yield _this7.translate.get('TOO_MANY_REQUESTS').toPromise();
          break;

        case 'auth/invalid-app-credential':
        case 'auth/quota-exceeded':
          errorTitle = yield _this7.translate.get('SMS_QUOTA_TITLE').toPromise();
          errorMessage = yield _this7.translate.get('SMS_QUOTA_MESSAGE').toPromise();
          break;

        case 'auth/captcha-check-failed':
          errorTitle = yield _this7.translate.get('CAPTCHA_FAILED_TITLE').toPromise();
          errorMessage = yield _this7.translate.get('CAPTCHA_FAILED_MESSAGE').toPromise();
          break;

        default:
          errorMessage = `${yield _this7.translate.get('SIGN_IN_ERROR').toPromise()} ${error.code || error.message || 'Unknown error'}`;
          break;
      }

      yield _this7.overlay.showAlert(errorTitle, errorMessage);
    })();
  }

  navigateAfterLogin(user) {
    var _this8 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if user has a rider profile
        const hasRiderProfile = yield _this8.avatar.checkRiderProfile(user.uid);

        if (hasRiderProfile) {
          // Existing rider - go to home
          _this8.router.navigateByUrl('/home', {
            replaceUrl: true
          });
        } else {
          // New user - complete profile
          _this8.router.navigateByUrl('/details', {
            replaceUrl: true
          });
        }
      } catch (error) {
        console.error('Error checking user profile:', error); // If error occurs, assume new user and redirect to details

        _this8.router.navigateByUrl('/details', {
          replaceUrl: true
        });
      }
    })();
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    var _this9 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this9.showExitConfirmation();
      } catch (error) {
        console.error('Error handling back button:', error);
      }
    })();
  }

  showExitConfirmation() {
    var _this10 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
        header: yield _this10.translate.get('EXIT_APP').toPromise(),
        message: yield _this10.translate.get('EXIT_CONFIRM').toPromise(),
        buttons: [{
          text: yield _this10.translate.get('CANCEL').toPromise(),
          role: 'cancel'
        }, {
          text: yield _this10.translate.get('EXIT').toPromise(),
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  changeLanguage(lang) {
    var _this11 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Changing language to:', lang);

      try {
        // Set the language immediately
        _this11.translate.setDefaultLang(lang); // Use the translation service to switch language and wait for it


        yield _this11.translate.use(lang).toPromise();
        console.log('Language successfully changed to:', lang);
        console.log('Current language:', _this11.translate.currentLang); // Save to preferences

        yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.set({
          key: 'user-lang',
          value: lang
        }); // Force reload translations by getting a test key

        const testTranslation = yield _this11.translate.get('APP_NAME').toPromise();
        console.log('Test translation:', testTranslation);
      } catch (error) {
        console.error('Error changing language:', error);
      }
    })();
  }

  detectUserCountry() {
    var _this12 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield fetch('https://ipapi.co/json/');
        const data = yield response.json();
        const countryCode = data.country;

        const matchingCountry = _this12.CountryJson.find(country => country.isoCode === countryCode);

        if (matchingCountry) {
          _this12.CountryCode = matchingCountry.dialCode;
          _this12.numberT = matchingCountry.dialCode;
          _this12.userCountry = countryCode;
          _this12.flag = `https://cdn.kcak11.com/CountryFlags/countries/${countryCode.toLowerCase()}.svg`;
        } else {
          // If country not found, keep Malaysia as default
          _this12.CountryCode = '+60';
          _this12.numberT = '+60';
          _this12.userCountry = 'MY';
          _this12.flag = 'https://cdn.kcak11.com/CountryFlags/countries/my.svg';
        }
      } catch (error) {
        console.error('Error detecting country:', error); // On error, ensure Malaysia defaults are set

        _this12.CountryCode = '+60';
        _this12.numberT = '+60';
        _this12.userCountry = 'MY';
        _this12.flag = 'https://cdn.kcak11.com/CountryFlags/countries/my.svg';
      }
    })();
  }

}

LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_8__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_9__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
};

LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 50,
  vars: 19,
  consts: [[1, "ion-no-border", 3, "translucent"], [1, "header-toolbar"], [1, "app-title"], [1, "tagline"], [1, "login-content"], [1, "content-wrapper"], [1, "slider-container"], ["pager", "true", 3, "options"], ["src", "../assets/imgs/main.svg"], ["src", "../assets/imgs/main1.svg"], ["src", "../assets/imgs/main2.svg"], [1, "form-container"], [3, "formGroup"], ["id", "sign-in-button"], [1, "phone-input-card"], [1, "card-content"], [1, "input-wrapper"], ["type", "button", 1, "country-select-btn", 3, "click"], ["alt", "country flag", 1, "country-flag", 3, "src"], [1, "country-code"], ["name", "chevron-down-outline", 1, "dropdown-icon"], [1, "phone-input-wrapper"], ["type", "tel", "formControlName", "phone", "clearInput", "", "minlength", "10", "maxlength", "10", 1, "phone-input", 3, "placeholder", "ionFocus", "ionBlur"], ["class", "validation-error", 4, "ngIf"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 1, "submit-btn", 3, "disabled", "click"], [4, "ngIf"], ["slot", "end", "name", "arrow-forward-outline", 4, "ngIf"], ["name", "crescent", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "small", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"], ["src", "https://cdn.kcak11.com/CountryFlags/countries/us.svg"], ["src", "https://cdn.kcak11.com/CountryFlags/countries/my.svg"], ["src", "https://cdn.kcak11.com/CountryFlags/countries/sa.svg"], [1, "ion-no-border"], ["id", "recaptcha-container"], [1, "validation-error"], ["color", "danger"], ["slot", "end", "name", "arrow-forward-outline"], ["name", "crescent"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-content", 4)(10, "div", 5)(11, "div", 6)(12, "ion-slides", 7)(13, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "ion-img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "ion-img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "ion-img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 11)(20, "form", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-card", 14)(23, "ion-card-content", 15)(24, "div", 16)(25, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_button_click_25_listener() {
        return ctx.openCountrySearchModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "ion-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 21)(31, "ion-input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionFocus", function LoginPage_Template_ion_input_ionFocus_31_listener() {
        return ctx.Show();
      })("ionBlur", function LoginPage_Template_ion_input_ionBlur_31_listener() {
        return ctx.Hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, LoginPage_div_33_Template, 4, 2, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "ion-button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_34_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, LoginPage_ion_label_35_Template, 3, 3, "ion-label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, LoginPage_ion_icon_36_Template, 1, 0, "ion-icon", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, LoginPage_ion_spinner_37_Template, 1, 0, "ion-spinner", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "ion-fab", 28)(39, "ion-fab-button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "ion-icon", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "ion-fab-list", 31)(42, "ion-fab-button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_fab_button_click_42_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "ion-img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "ion-fab-button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_fab_button_click_44_listener() {
        return ctx.changeLanguage("ms");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](45, "ion-img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "ion-fab-button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_fab_button_click_46_listener() {
        return ctx.changeLanguage("ar");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "ion-img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "ion-footer", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 13, "APP_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 15, "APP_TAGLINE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.slideOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.flag, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.CountryCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](32, 17, "MOBILE_NUMBER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.form.get("phone").valid && ctx.form.get("phone").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.form.get("phone").valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".header-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --border-width: 0;\n  padding-top: 20px;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.app-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--ion-color-primary);\n}\n\n.app-title[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  margin: 4px 0 0 0;\n  font-weight: 400;\n}\n\n.login-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0 24px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 20px 0;\n}\n\n.slider-container[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 280px;\n}\n\n.slider-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-bottom: 80px;\n}\n\n.phone-input-card[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.phone-input-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  padding: 4px;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n}\n\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--ion-color-primary);\n  background: var(--ion-color-light-tint);\n}\n\n.country-select-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 110px;\n}\n\n.country-select-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ion-color-light-shade);\n}\n\n.country-select-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n\n.country-select-btn[_ngcontent-%COMP%]   .country-flag[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 4px;\n  object-fit: cover;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.country-select-btn[_ngcontent-%COMP%]   .country-code[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.country-select-btn[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n}\n\n.phone-input-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.phone-input-wrapper[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%] {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --background: transparent;\n  --placeholder-color: var(--ion-color-medium);\n  --placeholder-opacity: 0.7;\n  font-size: 16px;\n  font-weight: 500;\n  height: 48px;\n}\n\n.validation-error[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 0 4px;\n}\n\n.validation-error[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: block;\n  margin: 0;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  height: 56px;\n  --border-radius: 14px;\n  font-weight: 600;\n  font-size: 17px;\n  text-transform: none;\n  letter-spacing: 0.3px;\n  box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n\n.submit-btn[_ngcontent-%COMP%]:not([disabled]):hover {\n  --box-shadow: 0 6px 16px rgba(var(--ion-color-primary-rgb), 0.4);\n}\n\n.submit-btn[_ngcontent-%COMP%]:not([disabled]):active {\n  transform: scale(0.98);\n}\n\n.submit-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-left: 8px;\n}\n\n.submit-btn[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.language-fab[_ngcontent-%COMP%] {\n  margin: 0 16px 16px 0;\n}\n\n.language-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.language-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.language-fab[_ngcontent-%COMP%]   ion-fab-list[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin: 8px 0;\n}\n\n.language-fab[_ngcontent-%COMP%]   ion-fab-list[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 4px;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-footer[_ngcontent-%COMP%]   #recaptcha-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  z-index: 1000;\n}\n\n@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .country-select-btn[_ngcontent-%COMP%]   .country-flag[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  margin-left: 0;\n  transform: rotate(180deg);\n}\n\n@media (max-width: 360px) {\n  .app-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .slider-container[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n  .country-select-btn[_ngcontent-%COMP%] {\n    min-width: 95px;\n    padding: 10px 12px;\n  }\n  .country-select-btn[_ngcontent-%COMP%]   .country-flag[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n}\n\n@media (min-width: 768px) {\n  .content-wrapper[_ngcontent-%COMP%] {\n    max-width: 500px;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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Q0UsZ0JBQUE7RUFDQSxlQUFBO0FBNUNOOztBQWlESTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBL0NOOztBQXFEQTtFQUNFO0lBQ0UsZUFBQTtFQWxERjtFQXFEQTtJQUNFLGFBQUE7RUFuREY7RUFzREE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFwREY7RUFzREU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQXBESjtBQUNGOztBQXdEQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VBdERGO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIFN0eWxlc1xyXG4uaGVhZGVyLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hcHAtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgLnRhZ2xpbmUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgbWFyZ2luOiA0cHggMCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29udGVudCBTdHlsZXNcclxuLmxvZ2luLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxufVxyXG5cclxuLy8gU2xpZGVyIFN0eWxlc1xyXG4uc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgXHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gIH1cclxuICBcclxuICBpb24taW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZvcm0gQ29udGFpbmVyXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4vLyBQaG9uZSBJbnB1dCBDYXJkXHJcbi5waG9uZS1pbnB1dC1jYXJkIHtcclxuICBtYXJnaW46IDAgMCAyNHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBcclxuICAuY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbnB1dCBXcmFwcGVyXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvdW50cnkgU2VsZWN0IEJ1dHRvblxyXG4uY291bnRyeS1zZWxlY3QtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gIH1cclxuICBcclxuICAuY291bnRyeS1mbGFnIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuY291bnRyeS1jb2RlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQaG9uZSBJbnB1dCBXcmFwcGVyXHJcbi5waG9uZS1pbnB1dC13cmFwcGVyIHtcclxuICBmbGV4OiAxO1xyXG4gIFxyXG4gIC5waG9uZS1pbnB1dCB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjc7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gVmFsaWRhdGlvbiBFcnJvclxyXG4udmFsaWRhdGlvbi1lcnJvciB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBwYWRkaW5nOiAwIDRweDtcclxuICBcclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFN1Ym1pdCBCdXR0b25cclxuLnN1Ym1pdC1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4zKTtcclxuICBcclxuICAmOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLS1ib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC40KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhbmd1YWdlIEZBQlxyXG4ubGFuZ3VhZ2UtZmFiIHtcclxuICBtYXJnaW46IDAgMTZweCAxNnB4IDA7XHJcbiAgXHJcbiAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tZmFiLWxpc3Qge1xyXG4gICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBcclxuICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRm9vdGVyXHJcbmlvbi1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICNyZWNhcHRjaGEtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS1sZWZ0IHtcclxuICBhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbi5zbGlkZS1yaWdodCB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxufVxyXG5cclxuLy8gUlRMIFN1cHBvcnRcclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLmlucHV0LXdyYXBwZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIH1cclxuICBcclxuICAuY291bnRyeS1zZWxlY3QtYnRuIHtcclxuICAgIC5jb3VudHJ5LWZsYWcge1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXQtYnRuIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgLmFwcC10aXRsZSBoMSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXItY29udGFpbmVyIGlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvdW50cnktc2VsZWN0LWJ0biB7XHJcbiAgICBtaW4td2lkdGg6IDk1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBcclxuICAgIC5jb3VudHJ5LWZsYWcge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map