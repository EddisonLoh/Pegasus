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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);
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
/* harmony import */ var C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 2124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_country_flag_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/country-flag.service */ 699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);



















function LoginPage_img_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function LoginPage_img_26_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r6.onFlagLoadError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.flag, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}

function LoginPage_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.flagEmoji);
  }
}

function LoginPage_div_34_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "MOBILE_REQUIRED"), " ");
  }
}

function LoginPage_div_34_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "MOBILE_INVALID"), " ");
  }
}

function LoginPage_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 39)(1, "ion-text", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, LoginPage_div_34_small_2_Template, 3, 3, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, LoginPage_div_34_small_3_Template, 3, 3, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.form.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.form.get("phone").hasError("minlength") && !ctx_r2.form.get("phone").hasError("required"));
  }
}

function LoginPage_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "CONTINUE"));
  }
}

function LoginPage_ion_icon_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ion-icon", 41);
  }
}

function LoginPage_ion_spinner_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ion-spinner", 42);
  }
}

const _c0 = function () {
  return {
    clickable: true
  };
};

const _c1 = function () {
  return {
    delay: 3000,
    disableOnInteraction: false
  };
};

class LoginPage {
  constructor(modalCtrl, auth, router, avatar, overlay, alertController, platform, translate, countryFlagService) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.avatar = avatar;
    this.overlay = overlay;
    this.alertController = alertController;
    this.platform = platform;
    this.translate = translate;
    this.countryFlagService = countryFlagService;
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/my.svg";
    this.flagEmoji = '🇲🇾';
    this.flagLoadError = false;
    this.filteredCountries = [];
    this.userCountry = 'MY'; // Default to Malaysia

    this.isInTestMode = false; // Flag to track if we're in test mode
    // Set Malaysia as default - no auto-detection

    this.CountryCode = '+60';
    this.numberT = '+60';
    this.updateFlag('MY');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(10)]
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

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          value
        } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.get({
          key: 'user-lang'
        });
        const lang = value || 'en';
        console.log('Loading language:', lang); // Set default language first

        _this2.translate.setDefaultLang(lang); // Then use it


        yield _this2.translate.use(lang).toPromise();
        console.log('Current language:', _this2.translate.currentLang);
        console.log('Default language:', _this2.translate.getDefaultLang()); // Test if translations are loaded

        const testKey = yield _this2.translate.get('APP_NAME').toPromise();
        console.log('APP_NAME translation:', testKey);
      } catch (error) {
        console.error('Error loading language:', error);

        _this2.translate.setDefaultLang('en');

        yield _this2.translate.use('en').toPromise();
      }
    })();
  }

  getFlag(lang) {
    let isoCode = 'US';
    if (lang === 'ms') isoCode = 'MY';
    if (lang === 'ar') isoCode = 'SA';
    const country = this.CountryJson.find(c => c.isoCode === isoCode);
    return country ? country.flag : '';
  }

  HideSplash() {
    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();
    })();
  }

  openCountrySearchModal() {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        _this3.userCountry = data.isoCode;

        _this3.updateFlag(data.isoCode);
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
    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }

  Hide() {
    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  signIn() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this4.form.valid) {
          const errorMessage = _this4.form.get('phone').hasError('required') ? yield _this4.translate.get('MOBILE_REQUIRED').toPromise() : yield _this4.translate.get('MOBILE_INVALID').toPromise();

          _this4.overlay.showAlert(yield _this4.translate.get('ERROR').toPromise(), errorMessage);

          return;
        }

        _this4.overlay.showLoader('');

        const fullPhoneNumber = _this4.numberT + _this4.form.value.phone;
        let confirmationResult; // Check if we're in test mode - bypass Firebase

        if (_this4.isInTestMode) {
          console.log('🧪 Test mode active - bypassing Firebase');

          _this4.overlay.hideLoader();

          const testOTP = localStorage.getItem('defaultOTP') || '123456'; // Reset test mode flag for next attempt

          _this4.isInTestMode = false;
          return _this4.proceedWithTestMode(_this4.form.value.phone, testOTP);
        }

        console.log('📱 Signing in with phone number:', fullPhoneNumber);

        try {
          confirmationResult = yield _this4.auth.signInWithPhoneNumber(fullPhoneNumber);
        } catch (authError) {
          console.error('Firebase authentication error:', authError);

          _this4.overlay.hideLoader(); // For ANY Firebase error, offer test mode - simpler approach


          const wantsTestMode = yield _this4.showErrorWithTestModeOption(authError.code);

          if (wantsTestMode) {
            return _this4.switchToTestMode();
          } else {
            return; // User declined test mode
          }
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
            isTestMode: false
          },
          canDismiss: true
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

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
          // For unknown errors, show the actual error code
          errorTitle = '❌ Authentication Error';
          errorMessage = `Firebase authentication failed with error code:\n\n${errorCode}`;
          errorDetails = '📋 Possible Causes:\n• Firebase configuration issue\n• Network connectivity problem\n• Service temporarily unavailable\n• Billing or quota limits\n\n💡 You can use Test Mode to continue development.';
      } // Combine error with test mode offer


      const fullMessage = errorDetails ? `${errorMessage}\n\n${errorDetails}\n\n━━━━━━━━━━━━━━━━━━━━\n\n${yield _this5.translate.get('TEST_MODE_OFFER').toPromise()}` : `${errorMessage}\n\n━━━━━━━━━━━━━━━━━━━━\n\n${yield _this5.translate.get('TEST_MODE_OFFER').toPromise()}`;
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const alert = yield _this5.alertController.create({
            header: errorTitle,
            message: fullMessage,
            cssClass: 'error-alert',
            buttons: [{
              text: yield _this5.translate.get('CLOSE').toPromise(),
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('User clicked Close');
                resolve(false);
              }
            }, {
              text: yield _this5.translate.get('USE_TEST_MODE').toPromise(),
              cssClass: 'primary',
              handler: () => {
                console.log('User clicked Use Test Mode');
                resolve(true);
              }
            }]
          });
          yield alert.present();
          console.log('Alert presented');
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  switchToTestMode() {
    var _this6 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Make sure loader is hidden
      _this6.overlay.hideLoader(); // Set test credentials


      _this6.CountryCode = '+60';
      _this6.numberT = '+60';
      const defaultNumbers = ['1234567856'];
      const randomDefaultNumber = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];

      _this6.form.controls['phone'].setValue(randomDefaultNumber);

      const testOTP = '123456';
      localStorage.setItem('defaultOTP', testOTP); // Set test mode flag so next signIn() call bypasses Firebase

      _this6.isInTestMode = true; // Show instructions about what was filled

      const alert = yield _this6.alertController.create({
        header: yield _this6.translate.get('TEST_MODE_ACTIVATED_TITLE').toPromise(),
        message: (yield _this6.translate.get('TEST_MODE_ACTIVATED_MESSAGE').toPromise()) + `\n\n📱 ${yield _this6.translate.get('PHONE').toPromise()}: +60${randomDefaultNumber}\n🔐 OTP: ${testOTP}\n\n` + (yield _this6.translate.get('TEST_MODE_NEXT_STEP').toPromise()),
        buttons: [{
          text: yield _this6.translate.get('GOT_IT').toPromise(),
          handler: () => {// User can now see the filled form and click Continue button themselves
            // When they click Continue, isInTestMode flag will bypass Firebase
          }
        }]
      });
      yield alert.present();
    })();
  }

  proceedWithTestMode(phoneNumber, testOTP) {
    var _this7 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Use the correct test phone number
      const testPhoneNumber = '1234567856'; // Create a PURE MOCK confirmation result - NO FIREBASE CALLS

      const mockConfirmationResult = {
        confirm: function () {
          var _ref2 = (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (otp) {
            console.log('🧪 Test mode: Verifying OTP:', otp);

            if (otp === testOTP) {
              // IMPORTANT: Don't call Firebase at all in test mode
              // Return a mock user structure that matches Firebase user
              console.log('✅ Test mode: OTP verified successfully'); // For test mode, we need to actually authenticate with Firebase
              // but only ONCE when OTP is verified, not during initial SMS request

              try {
                _this7.overlay.showLoader('Signing in...');

                const fullPhoneNumber = '+60' + testPhoneNumber; // This is the ONLY Firebase call in test mode - when OTP is verified

                const realConfirmationResult = yield _this7.auth.signInWithPhoneNumber(fullPhoneNumber);
                const result = yield realConfirmationResult.confirm(otp);

                _this7.overlay.hideLoader();

                console.log('✅ Test mode: Firebase authentication completed');
                return result;
              } catch (error) {
                _this7.overlay.hideLoader();

                console.error('❌ Test mode: Firebase authentication failed:', error);
                throw error;
              }
            } else {
              throw new Error('Invalid OTP');
            }
          });

          return function confirm(_x2) {
            return _ref2.apply(this, arguments);
          };
        }()
      }; // Open OTP modal with test credentials pre-filled

      const modal = yield _this7.modalCtrl.create({
        component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent,
        componentProps: {
          defaultOtp: testOTP,
          phone: testPhoneNumber,
          countryCode: '+60',
          confirmationResult: mockConfirmationResult,
          isTestMode: true
        },
        canDismiss: true
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      if (!data?.user) return;
      yield _this7.navigateAfterLogin(data.user);
    })();
  }

  handleAuthError(error) {
    var _this8 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let errorTitle = yield _this8.translate.get('ERROR').toPromise();
      let errorMessage = '';

      switch (error.code) {
        case 'auth/invalid-phone-number':
          errorMessage = yield _this8.translate.get('MOBILE_INVALID').toPromise();
          break;

        case 'auth/missing-phone-number':
          errorMessage = yield _this8.translate.get('MOBILE_REQUIRED').toPromise();
          break;

        case 'auth/network-request-failed':
          errorMessage = yield _this8.translate.get('NETWORK_ERROR').toPromise();
          break;

        case 'auth/too-many-requests':
          errorTitle = yield _this8.translate.get('TOO_MANY_REQUESTS_TITLE').toPromise();
          errorMessage = yield _this8.translate.get('TOO_MANY_REQUESTS').toPromise();
          break;

        case 'auth/invalid-app-credential':
        case 'auth/quota-exceeded':
          errorTitle = yield _this8.translate.get('SMS_QUOTA_TITLE').toPromise();
          errorMessage = yield _this8.translate.get('SMS_QUOTA_MESSAGE').toPromise();
          break;

        case 'auth/captcha-check-failed':
          errorTitle = yield _this8.translate.get('CAPTCHA_FAILED_TITLE').toPromise();
          errorMessage = yield _this8.translate.get('CAPTCHA_FAILED_MESSAGE').toPromise();
          break;

        default:
          errorMessage = `${yield _this8.translate.get('SIGN_IN_ERROR').toPromise()} ${error.code || error.message || 'Unknown error'}`;
          break;
      }

      yield _this8.overlay.showAlert(errorTitle, errorMessage);
    })();
  }

  navigateAfterLogin(user) {
    var _this9 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if user has a rider profile
        const hasRiderProfile = yield _this9.avatar.checkRiderProfile(user.uid);

        if (hasRiderProfile) {
          // Existing rider - go to home
          _this9.router.navigateByUrl('/home', {
            replaceUrl: true
          });
        } else {
          // New user - complete profile
          _this9.router.navigateByUrl('/details', {
            replaceUrl: true
          });
        }
      } catch (error) {
        console.error('Error checking user profile:', error); // If error occurs, assume new user and redirect to details

        _this9.router.navigateByUrl('/details', {
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
    var _this0 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this0.showExitConfirmation();
      } catch (error) {
        console.error('Error handling back button:', error);
      }
    })();
  }

  showExitConfirmation() {
    var _this1 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this1.alertController.create({
        header: yield _this1.translate.get('EXIT_APP').toPromise(),
        message: yield _this1.translate.get('EXIT_CONFIRM').toPromise(),
        buttons: [{
          text: yield _this1.translate.get('CANCEL').toPromise(),
          role: 'cancel'
        }, {
          text: yield _this1.translate.get('EXIT').toPromise(),
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  changeLanguage(lang) {
    var _this10 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Changing language to:', lang);

      try {
        // Set the language immediately
        _this10.translate.setDefaultLang(lang); // Use the translation service to switch language and wait for it


        yield _this10.translate.use(lang).toPromise();
        console.log('Language successfully changed to:', lang);
        console.log('Current language:', _this10.translate.currentLang); // Save to preferences

        yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.set({
          key: 'user-lang',
          value: lang
        }); // Force reload translations by getting a test key

        const testTranslation = yield _this10.translate.get('APP_NAME').toPromise();
        console.log('Test translation:', testTranslation);
      } catch (error) {
        console.error('Error changing language:', error);
      }
    })();
  }

  updateFlag(countryCode) {
    const flagData = this.countryFlagService.getFlagWithFallback(countryCode);
    this.flag = flagData.url;
    this.flagEmoji = flagData.emoji;
    this.flagLoadError = false;
  }

  onFlagLoadError() {
    console.log('Flag image failed to load, using emoji fallback');
    this.flagLoadError = true;
  }

  detectUserCountry() {
    var _this11 = this;

    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Use native HTTP for better Android compatibility
        const response = yield fetch('https://ipapi.co/json/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = yield response.json();
        const countryCode = data.country;

        const matchingCountry = _this11.CountryJson.find(country => country.isoCode === countryCode);

        if (matchingCountry) {
          _this11.CountryCode = matchingCountry.dialCode;
          _this11.numberT = matchingCountry.dialCode;
          _this11.userCountry = countryCode;

          _this11.updateFlag(countryCode);
        } else {
          // If country not found, keep Malaysia as default
          _this11.CountryCode = '+60';
          _this11.numberT = '+60';
          _this11.userCountry = 'MY';

          _this11.updateFlag('MY');
        }
      } catch (error) {
        console.error('Error detecting country:', error); // On error, ensure Malaysia defaults are set

        _this11.CountryCode = '+60';
        _this11.numberT = '+60';
        _this11.userCountry = 'MY';

        _this11.updateFlag('MY');
      }
    })();
  }

}

LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_8__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_9__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_country_flag_service__WEBPACK_IMPORTED_MODULE_10__.CountryFlagService));
};

LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 49,
  vars: 27,
  consts: [[1, "ion-no-border", 3, "translucent"], [1, "header-toolbar"], [1, "app-title"], [1, "tagline"], [1, "login-content"], [1, "content-wrapper", 2, "padding-top", "10px"], [1, "slider-container"], [3, "pagination", "autoplay", "initialSlide", "speed"], ["src", "../assets/imgs/main.svg"], ["src", "../assets/imgs/main1.svg"], ["src", "../assets/imgs/main2.svg"], [1, "form-container"], [3, "formGroup"], ["id", "sign-in-button"], [1, "phone-input-card"], [1, "card-content"], [1, "input-wrapper"], ["type", "button", 1, "country-select-btn", 3, "click"], ["class", "country-flag", "alt", "country flag", 3, "src", "error", 4, "ngIf"], ["class", "country-flag-emoji", 4, "ngIf"], [1, "country-code"], ["name", "chevron-down-outline", 1, "dropdown-icon"], [1, "phone-input-wrapper"], ["type", "tel", "formControlName", "phone", "clearInput", "", "minlength", "10", "maxlength", "10", 1, "phone-input", 3, "placeholder", "ionFocus", "ionBlur"], ["class", "validation-error", 4, "ngIf"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 1, "submit-btn", 3, "disabled", "click"], [4, "ngIf"], ["slot", "end", "name", "arrow-forward-outline", 4, "ngIf"], ["name", "crescent", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "medium", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"], [2, "width", "24px", "height", "24px", "border-radius", "50%", "object-fit", "cover", 3, "src"], [1, "ion-no-border"], ["id", "recaptcha-container"], ["alt", "country flag", 1, "country-flag", 3, "src", "error"], [1, "country-flag-emoji"], [1, "validation-error"], ["color", "danger"], ["slot", "end", "name", "arrow-forward-outline"], ["name", "crescent"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-content", 4)(10, "div", 5)(11, "div", 6)(12, "swiper-container", 7)(13, "swiper-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "ion-img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "swiper-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "ion-img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "swiper-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "ion-img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 11)(20, "form", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "ion-card", 14)(23, "ion-card-content", 15)(24, "div", 16)(25, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginPage_Template_button_click_25_listener() {
        return ctx.openCountrySearchModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, LoginPage_img_26_Template, 1, 1, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, LoginPage_span_27_Template, 2, 1, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "ion-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 22)(32, "ion-input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionFocus", function LoginPage_Template_ion_input_ionFocus_32_listener() {
        return ctx.Show();
      })("ionBlur", function LoginPage_Template_ion_input_ionBlur_32_listener() {
        return ctx.Hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, LoginPage_div_34_Template, 4, 2, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "ion-button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_35_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, LoginPage_span_36_Template, 3, 3, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, LoginPage_ion_icon_37_Template, 1, 0, "ion-icon", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, LoginPage_ion_spinner_38_Template, 1, 0, "ion-spinner", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-fab", 29)(40, "ion-fab-button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "ion-icon", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "ion-fab-list", 32)(43, "ion-fab-button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginPage_Template_ion_fab_button_click_43_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](44, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "ion-fab-button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginPage_Template_ion_fab_button_click_45_listener() {
        return ctx.changeLanguage("ms");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](46, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "ion-footer", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 19, "PEGASUS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 21, "APP_TAGLINE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](25, _c0))("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](26, _c1))("initialSlide", 0)("speed", 400);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.flagLoadError);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.flagLoadError);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.CountryCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](33, 23, "MOBILE_NUMBER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.form.get("phone").valid && ctx.form.get("phone").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.form.get("phone").valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx.getFlag("en"), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx.getFlag("ms"), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: [".header-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --border-width: 0;\n  padding-top: 20px;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.app-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n  color: var(--ion-color-primary);\n}\n\n.app-title[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  margin: 4px 0 0 0;\n  font-weight: 400;\n}\n\n.login-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0 24px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 20px 0;\n}\n\n.slider-container[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%] {\n  height: 280px;\n}\n\n.slider-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-bottom: 80px;\n}\n\n.phone-input-card[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.phone-input-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  padding: 4px;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n}\n\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--ion-color-primary);\n  background: var(--ion-color-light-tint);\n}\n\n.country-select-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 110px;\n}\n\n.country-select-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ion-color-light-shade);\n}\n\n.country-select-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n\n.country-select-btn[_ngcontent-%COMP%]   .country-flag[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 4px;\n  object-fit: cover;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.country-select-btn[_ngcontent-%COMP%]   .country-code[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.country-select-btn[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n}\n\n.phone-input-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.phone-input-wrapper[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%] {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --background: transparent;\n  --placeholder-color: var(--ion-color-medium);\n  --placeholder-opacity: 0.7;\n  font-size: 16px;\n  font-weight: 500;\n  height: 48px;\n}\n\n.validation-error[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 0 4px;\n}\n\n.validation-error[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: block;\n  margin: 0;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  height: 56px;\n  --border-radius: 14px;\n  font-weight: 600;\n  font-size: 17px;\n  text-transform: none;\n  letter-spacing: 0.3px;\n  box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n\n.submit-btn[_ngcontent-%COMP%]:not([disabled]):hover {\n  --box-shadow: 0 6px 16px rgba(var(--ion-color-primary-rgb), 0.4);\n}\n\n.submit-btn[_ngcontent-%COMP%]:not([disabled]):active {\n  transform: scale(0.98);\n}\n\n.submit-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-left: 8px;\n}\n\n.submit-btn[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.language-fab[_ngcontent-%COMP%] {\n  margin: 0 16px 16px 0;\n}\n\n.language-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.language-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.language-fab[_ngcontent-%COMP%]   ion-fab-list[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin: 8px 0;\n}\n\n.language-fab[_ngcontent-%COMP%]   ion-fab-list[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 4px;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-footer[_ngcontent-%COMP%]   #recaptcha-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  z-index: 1000;\n}\n\n@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .country-select-btn[_ngcontent-%COMP%]   .country-flag[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  margin-left: 0;\n  transform: rotate(180deg);\n}\n\n@media (max-width: 360px) {\n  .app-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .slider-container[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n  .country-select-btn[_ngcontent-%COMP%] {\n    min-width: 95px;\n    padding: 10px 12px;\n  }\n  .country-select-btn[_ngcontent-%COMP%]   .country-flag[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n}\n\n@media (min-width: 768px) {\n  .content-wrapper[_ngcontent-%COMP%] {\n    max-width: 500px;\n    margin: 0 auto;\n  }\n}\n\n.country-flag-emoji[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 24px;\n  height: 18px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n}\n\n.lang-flag[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.country-flag[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 18px;\n  object-fit: cover;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFNQTtFQUNFLHlDQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFKRjs7QUFNRTtFQUNFLGFBQUE7QUFKSjs7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFVQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBUEY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFSRjs7QUFVRTtFQUNFLGFBQUE7QUFSSjs7QUFhQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFWRjs7QUFZRTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7QUFWSjs7QUFlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFjRTtFQUNFLHdDQUFBO0FBWko7O0FBZUU7RUFDRSxzQkFBQTtBQWJKOztBQWdCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FBZEo7O0FBaUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFmSjs7QUFrQkU7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFoQko7O0FBcUJBO0VBQ0UsT0FBQTtBQWxCRjs7QUFvQkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWxCSjs7QUF1QkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFwQkY7O0FBc0JFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBcEJKOztBQXlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOERBQUE7QUF0QkY7O0FBeUJJO0VBQ0UsZ0VBQUE7QUF2Qk47O0FBMEJJO0VBQ0Usc0JBQUE7QUF4Qk47O0FBNEJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBMUJKOztBQTZCRTtFQUNFLGNBQUE7QUEzQko7O0FBZ0NBO0VBQ0UscUJBQUE7QUE3QkY7O0FBK0JFO0VBQ0UsNENBQUE7QUE3Qko7O0FBK0JJO0VBQ0UsZUFBQTtBQTdCTjs7QUFrQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFoQ047O0FBa0NNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWhDUjs7QUF1Q0E7RUFDRSx1QkFBQTtBQXBDRjs7QUFzQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBcENKOztBQXlDQTtFQUNFO0lBQ0Usd0JBQUE7RUF0Q0Y7RUF3Q0E7SUFDRSw2QkFBQTtFQXRDRjtBQUNGOztBQXlDQTtFQUNFO0lBQ0Usd0JBQUE7RUF2Q0Y7RUF5Q0E7SUFDRSw0QkFBQTtFQXZDRjtBQUNGOztBQTBDQTtFQUNFLG9FQUFBO0FBeENGOztBQTJDQTtFQUNFLHFFQUFBO0FBeENGOztBQTZDRTtFQUNFLDJCQUFBO0FBMUNKOztBQThDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTVDTjs7QUFpREk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQS9DTjs7QUFxREE7RUFDRTtJQUNFLGVBQUE7RUFsREY7RUFzREE7SUFDRSxhQUFBO0VBcERGO0VBdURBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBckRGO0VBdURFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFyREo7QUFDRjs7QUF5REE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFQXZERjtBQUNGOztBQTJEQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBekRGOztBQTREQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6REY7O0FBNkRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUExREYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIFN0eWxlc1xyXG4uaGVhZGVyLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hcHAtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICAudGFnbGluZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBtYXJnaW46IDRweCAwIDAgMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb250ZW50IFN0eWxlc1xyXG4ubG9naW4tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG59XHJcblxyXG4vLyBTbGlkZXIgU3R5bGVzXHJcbi5zbGlkZXItY29udGFpbmVyIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBcclxuICBzd2lwZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRm9ybSBDb250YWluZXJcclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi8vIFBob25lIElucHV0IENhcmRcclxuLnBob25lLWlucHV0LWNhcmQge1xyXG4gIG1hcmdpbjogMCAwIDI0cHggMDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIFxyXG4gIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIElucHV0IFdyYXBwZXJcclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6Zm9jdXMtd2l0aGluIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ291bnRyeSBTZWxlY3QgQnV0dG9uXHJcbi5jb3VudHJ5LXNlbGVjdC1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgbWluLXdpZHRoOiAxMTBweDtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3VudHJ5LWZsYWcge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3VudHJ5LWNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFBob25lIElucHV0IFdyYXBwZXJcclxuLnBob25lLWlucHV0LXdyYXBwZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgXHJcbiAgLnBob25lLWlucHV0IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBWYWxpZGF0aW9uIEVycm9yXHJcbi52YWxpZGF0aW9uLWVycm9yIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG4gIFxyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU3VibWl0IEJ1dHRvblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjMpO1xyXG4gIFxyXG4gICY6bm90KFtkaXNhYmxlZF0pIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAtLWJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zcGlubmVyIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGFuZ3VhZ2UgRkFCXHJcbi5sYW5ndWFnZS1mYWIge1xyXG4gIG1hcmdpbjogMCAxNnB4IDE2cHggMDtcclxuICBcclxuICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1mYWItbGlzdCB7XHJcbiAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgIFxyXG4gICAgICBpb24taW1nIHtcclxuICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGb290ZXJcclxuaW9uLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgI3JlY2FwdGNoYS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlLWxlZnQge1xyXG4gIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxufVxyXG5cclxuLnNsaWRlLXJpZ2h0IHtcclxuICBhbmltYXRpb246IHNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG4vLyBSVEwgU3VwcG9ydFxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3VudHJ5LXNlbGVjdC1idG4ge1xyXG4gICAgLmNvdW50cnktZmxhZyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdC1idG4ge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIERlc2lnblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAuYXBwLXRpdGxlIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXItY29udGFpbmVyIHN3aXBlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvdW50cnktc2VsZWN0LWJ0biB7XHJcbiAgICBtaW4td2lkdGg6IDk1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBcclxuICAgIC5jb3VudHJ5LWZsYWcge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGbGFnIGVtb2ppIHN0eWxlc1xyXG4uY291bnRyeS1mbGFnLWVtb2ppIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5sYW5nLWZsYWcge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vLyBFbnN1cmUgY291bnRyeSBmbGFnIGltZyBoYXMgY29uc2lzdGVudCBzaXppbmdcclxuLmNvdW50cnktZmxhZyB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 699:
/*!**************************************************!*\
  !*** ./src/app/services/country-flag.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryFlagService": () => (/* binding */ CountryFlagService)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CountryFlagService {
  constructor() {
    // Map of country codes to flag emojis as fallback
    this.flagEmojis = {
      'MY': '🇲🇾',
      'US': '🇺🇸',
      'SA': '🇸🇦',
      'AE': '🇦🇪',
      'IN': '🇮🇳',
      'PK': '🇵🇰',
      'BD': '🇧🇩',
      'SG': '🇸🇬',
      'TH': '🇹🇭',
      'ID': '🇮🇩',
      'PH': '🇵🇭',
      'VN': '🇻🇳',
      'GB': '🇬🇧',
      'AU': '🇦🇺',
      'CA': '🇨🇦',
      'DE': '🇩🇪',
      'FR': '🇫🇷',
      'IT': '🇮🇹',
      'ES': '🇪🇸',
      'NL': '🇳🇱',
      'BE': '🇧🇪',
      'CH': '🇨🇭',
      'AT': '🇦🇹',
      'SE': '🇸🇪',
      'NO': '🇳🇴',
      'DK': '🇩🇰',
      'FI': '🇫🇮',
      'JP': '🇯🇵',
      'KR': '🇰🇷',
      'CN': '🇨🇳',
      'HK': '🇭🇰',
      'TW': '🇹🇼',
      'BR': '🇧🇷',
      'MX': '🇲🇽',
      'AR': '🇦🇷',
      'CL': '🇨🇱',
      'CO': '🇨🇴',
      'PE': '🇵🇪',
      'ZA': '🇿🇦',
      'EG': '🇪🇬',
      'NG': '🇳🇬',
      'KE': '🇰🇪',
      'GH': '🇬🇭',
      'RU': '🇷🇺',
      'TR': '🇹🇷',
      'IL': '🇮🇱',
      'JO': '🇯🇴',
      'LB': '🇱🇧',
      'KW': '🇰🇼',
      'QA': '🇶🇦',
      'BH': '🇧🇭',
      'OM': '🇴🇲',
      'IQ': '🇮🇶',
      'IR': '🇮🇷',
      'AF': '🇦🇫',
      'LK': '🇱🇰',
      'NP': '🇳🇵',
      'BT': '🇧🇹',
      'MM': '🇲🇲',
      'KH': '🇰🇭',
      'LA': '🇱🇦',
      'BN': '🇧🇳',
      'MV': '🇲🇻'
    };
  }
  /**
   * Get flag for country code - tries CDN first, falls back to emoji
   */


  getFlagUrl(countryCode) {
    const code = countryCode.toUpperCase(); // Try CDN first (might work on some devices/networks)

    const cdnUrl = `https://cdn.kcak11.com/CountryFlags/countries/${code.toLowerCase()}.svg`; // Return CDN URL - if it fails to load, the img tag can handle fallback

    return cdnUrl;
  }
  /**
   * Get flag emoji as fallback
   */


  getFlagEmoji(countryCode) {
    const code = countryCode.toUpperCase();
    return this.flagEmojis[code] || '🏳️';
  }
  /**
   * Get flag with fallback handling
   */


  getFlagWithFallback(countryCode) {
    return {
      url: this.getFlagUrl(countryCode),
      emoji: this.getFlagEmoji(countryCode)
    };
  }
  /**
   * Check if CDN is accessible (for testing)
   */


  testCdnAccess() {
    return (0,C_Users_user_Pegasus_1_BU29_11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Try to access the CDN with a simple HEAD request
        const response = yield fetch('https://cdn.kcak11.com/CountryFlags/countries/my.svg', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        return true;
      } catch (error) {
        console.log('CDN not accessible, will use emoji fallbacks');
        return false;
      }
    })();
  }

}

CountryFlagService.ɵfac = function CountryFlagService_Factory(t) {
  return new (t || CountryFlagService)();
};

CountryFlagService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CountryFlagService,
  factory: CountryFlagService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map