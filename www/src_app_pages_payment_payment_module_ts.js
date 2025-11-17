"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment_payment_module_ts"],{

/***/ 4018:
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 8622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
class PaymentPageRoutingModule {
}
PaymentPageRoutingModule.ɵfac = function PaymentPageRoutingModule_Factory(t) { return new (t || PaymentPageRoutingModule)(); };
PaymentPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaymentPageRoutingModule });
PaymentPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4923:
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 4018);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 8622);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);








class PaymentPageModule {
}
PaymentPageModule.ɵfac = function PaymentPageModule_Factory(t) { return new (t || PaymentPageModule)(); };
PaymentPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaymentPageModule });
PaymentPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentPageModule, { declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 8622:
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/payment.service */ 1863);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/avatar.service */ 5083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










const _c0 = ["cardElement"];

function PaymentPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 17, 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PaymentPage_ion_card_17_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ion-radio", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentPage_ion_card_17_ion_item_7_Template_ion_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const method_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.deletePaymentMethod(method_r4.cardId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const method_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](method_r4.brand ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, method_r4.brand) : "Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("**** **** **** ", method_r4.last4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", method_r4.cardId);
  }
}

function PaymentPage_ion_card_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card", 5)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-card-content", 5)(6, "ion-radio-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PaymentPage_ion_card_17_Template_ion_radio_group_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.selectedCardId = $event);
    })("ionChange", function PaymentPage_ion_card_17_Template_ion_radio_group_ionChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.setActiveCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PaymentPage_ion_card_17_ion_item_7_Template, 11, 5, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "PAYMENT.SAVED_METHODS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.selectedCardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.savedPaymentMethods);
  }
}

const _c1 = function (a0) {
  return {
    "slide-down": a0
  };
};

class PaymentPage {
  constructor(fb, alertController, loadingController, paymentService, avatarService, translate) {
    this.fb = fb;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.paymentService = paymentService;
    this.avatarService = avatarService;
    this.translate = translate;
    this.approve = false;
    this.cardInitialized = false;
    this.selectedProvider = '';
    this.savedPaymentMethods = [];
    this.selectedCardId = '';
    this.defaultAmount = 1000;
    this.isCardComplete = false; // New state for card completion

    this.paymentForm = this.fb.group({
      provider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      cardId: [''],
      authCode: ['']
    });
  }

  ngOnInit() {
    this.fetchSavedPaymentMethods();
    this.onPaymentProviderChange('stripe');
    this.getActiveCard();
  }

  ngAfterViewInit() {} // Ensure Stripe card is initialized


  initializeStripeCard() {
    if (this.cardElement && this.cardElement.nativeElement) {
      this.stripe = Stripe('pk_test_51SShK5PRgzt7CIyewdombVyUyoBjYRQGrw8uBfWOF58l49mTcKZzWoeeyeBrjcsLT8NzCDKKjbwZQfDnNnpFzoxn00ivj0cGEe');
      this.elements = this.stripe.elements();

      if (!this.card) {
        this.card = this.elements.create('card');
        this.card.mount(this.cardElement.nativeElement); // Listen for changes on the card input

        this.card.on('change', event => {
          this.isCardComplete = event.complete;
        });
      }

      this.cardInitialized = true;
    }
  }

  onPaymentProviderChange(provider) {
    this.selectedProvider = provider;
    this.paymentForm.patchValue({
      provider
    });

    if (provider === 'stripe') {
      setTimeout(() => {
        this.initializeStripeCard();
      }, 0);
    }
  }

  fetchSavedPaymentMethods() {
    var _this = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.savedPaymentMethods = yield _this.avatarService.getSavedPaymentMethods();
        console.log('Saved Payment Methods:', _this.savedPaymentMethods);

        if (_this.savedPaymentMethods.length > 0) {
          _this.selectedCardId = _this.savedPaymentMethods[0].cardId; // Set default selected card
        }
      } catch (error) {
        console.error('Error fetching saved payment methods:', error);
      }
    })();
  }

  getActiveCard() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const email = _this2.avatarService.user.email;

      _this2.avatarService.getActiveCard(email).subscribe(data => {
        if (data && data.activeCardId) {
          _this2.selectedCardId = data.activeCardId;
        }
      });
    })();
  }

  setActiveCard(event) {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cardId = event.detail.value;

      if (cardId) {
        try {
          const email = _this3.avatarService.user.email;
          yield _this3.avatarService.setActiveCard(email, cardId);
          _this3.selectedCardId = cardId;
        } catch (error) {
          console.error('Error setting active card:', error);
        }
      }
    })();
  }

  processPayment() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.paymentForm.valid) {
        const formValues = _this4.paymentForm.value;
        formValues.email = _this4.avatarService.user.email; // Use email from avatarService

        _this4.showLoading();

        try {
          const cardData = yield _this4.processStripePayment(formValues);
          console.log('Card added successfully:', cardData);
          yield _this4.showAlert('Success', 'Card added successfully!'); // Refresh the saved payment methods list to show the new card

          yield _this4.fetchSavedPaymentMethods(); // Clear the card input after successful addition

          if (_this4.card) {
            _this4.card.clear();
          }
        } catch (error) {
          console.error('Error adding card:', error);
          const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
          yield _this4.showAlert('Error', `Failed to add card: ${errorMessage}`);
        } finally {
          _this4.hideLoading();

          _this4.approve = false;
        }
      } else {
        _this4.showAlert('Form Error', 'Please fill out all required fields.');
      }
    })();
  }

  processStripePayment(formValues) {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Starting processStripePayment with formValues:', formValues);

      try {
        const setupIntentResponse = yield _this5.paymentService.createSetupIntent(formValues.email).toPromise();
        console.log('Setup Intent raw response:', setupIntentResponse);
        const resp = setupIntentResponse;
        const clientSecret = resp && (resp.client_secret || resp.clientSecret || resp.clientSecretValue || resp.secret);
        console.log('Resolved clientSecret:', clientSecret); // Validate clientSecret looks like a client secret (contains the secret part)

        if (!clientSecret) {
          console.error('No client_secret returned from server. Response:', setupIntentResponse);
          throw new Error('No client_secret returned from server for SetupIntent.');
        } // A client secret normally contains "_secret_"; if we only received an ID like 'seti_...'
        // that's likely the server returned the SetupIntent id instead of the client_secret.


        if (String(clientSecret).startsWith('seti_') && !String(clientSecret).includes('_secret_')) {
          console.error('Client secret looks like a SetupIntent ID (missing secret). Did the server return the ID instead of the client_secret?),', clientSecret);
          throw new Error('Invalid client_secret returned from server (looks like an ID). Ensure server returns the full client_secret.');
        }

        const {
          setupIntent,
          error
        } = yield _this5.stripe.confirmCardSetup(clientSecret, {
          payment_method: {
            card: _this5.card,
            billing_details: {
              email: formValues.email
            }
          }
        });

        if (error) {
          console.error('Stripe confirmCardSetup returned error object:', error);
          const errorElement = document.getElementById('card-errors');

          if (errorElement) {
            errorElement.textContent = error.message;
          }

          yield _this5.showAlert('Payment Error', error.message);
          _this5.approve = false;
          console.error('Error confirming card setup:', error);
          throw new Error(error.message);
        }

        console.log('Card setup confirmed:', setupIntent);
        const paymentMethodId = setupIntent.payment_method; // Fetch the payment method details from your server (which will call Stripe)

        const paymentMethod = yield _this5.paymentService.retrievePaymentMethod(paymentMethodId).toPromise();
        console.log('Payment method retrieved:', paymentMethod);
        const cardDetails = paymentMethod.card;
        const last4 = cardDetails.last4;
        const brand = cardDetails.brand; // Get card brand (visa, mastercard, etc.)

        console.log('Checking if card exists with email:', formValues.email, ' and last4:', last4);
        const cardExists = yield _this5.avatarService.checkCardExistsStripe(formValues.email, last4);

        if (cardExists) {
          throw new Error('This card is already saved to your account.');
        } // Save card to Firestore using the correct method


        const cardData = {
          cardId: paymentMethodId,
          email: formValues.email,
          last4: last4,
          brand: brand || 'unknown'
        };
        yield _this5.avatarService.saveCard(cardData);
        console.log('Card saved to Firestore:', cardData); // Also save to backend if needed

        yield _this5.paymentService.savePaymentMethod(formValues.email, paymentMethodId).toPromise();
        return cardData;
      } catch (error) {
        console.error('Error in processStripePayment:', error);
        throw error;
      }
    })();
  }

  deletePaymentMethod(cardId) {
    var _this6 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.avatarService.deleteSavedPaymentMethod(cardId);

      _this6.fetchSavedPaymentMethods(); // Refresh the list of saved payment methods

    })();
  }

  showLoading() {
    var _this7 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.loading = yield _this7.loadingController.create({
        message: yield _this7.translate.get('PAYMENT.PROCESSING').toPromise()
      });
      yield _this7.loading.present();
    })();
  }

  hideLoading() {
    var _this8 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.loading) {
        yield _this8.loading.dismiss();
      }
    })();
  }

  showAlert(header, message) {
    var _this9 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        header: yield _this9.translate.get(header).toPromise(),
        message: yield _this9.translate.get(message).toPromise(),
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

}

PaymentPage.ɵfac = function PaymentPage_Factory(t) {
  return new (t || PaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_1__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
};

PaymentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PaymentPage,
  selectors: [["app-payment"]],
  viewQuery: function PaymentPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cardElement = _t.first);
    }
  },
  decls: 26,
  vars: 14,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], ["color", "primary"], [1, "ion-text-center", "ion-padding"], [1, "ion-no-border", "no-shadow"], [1, "no-shadow"], [1, "payment-details", 3, "ngClass"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], ["color", "success", "shape", "round", "expand", "block", "size", "large", "type", "submit", 3, "disabled"], ["class", "no-shadow", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "globe"], ["side", "top"], [3, "click"], ["src", "https://cdn.kcak11.com/CountryFlags/countries/us.svg", 2, "width", "24px", "height", "24px"], ["src", "https://cdn.kcak11.com/CountryFlags/countries/sa.svg", 2, "width", "24px", "height", "24px"], [1, "stripe-element"], ["cardElement", ""], ["id", "card-errors", "role", "alert"], [3, "ngModel", "ngModelChange", "ionChange"], [4, "ngFor", "ngForOf"], ["name", "card-outline", "slot", "start", "color", "primary"], ["slot", "end", 3, "value"], ["slot", "end", "fill", "clear", "color", "danger", 3, "click"], ["name", "trash-outline"]],
  template: function PaymentPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content", 3)(9, "ion-card", 4)(10, "ion-card-content", 5)(11, "div", 6)(12, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PaymentPage_Template_form_ngSubmit_12_listener() {
        return ctx.processPayment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PaymentPage_div_13_Template, 4, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PaymentPage_ion_card_17_Template, 8, 5, "ion-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-fab", 11)(19, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-fab-list", 13)(22, "ion-fab-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentPage_Template_ion_fab_button_click_22_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ion-img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-fab-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentPage_Template_ion_fab_button_click_24_listener() {
        return ctx.changeLanguage("ar");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ion-img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, "PAYMENT.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, ctx.selectedProvider !== ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.paymentForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedProvider === "stripe");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.paymentForm.valid || !ctx.isCardComplete);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 10, "PAYMENT.ADD_CARD"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.savedPaymentMethods.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-item[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n.payment-details[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.5s ease-in-out;\n}\n.payment-details.slide-down[_ngcontent-%COMP%] {\n  max-height: 500px; \n}\n.stripe-element[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n.payment-methods[_ngcontent-%COMP%]   ion-button.selected[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary) !important;\n  color: #fff;\n}\n.no-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.provider-logo[_ngcontent-%COMP%] {\n  height: 24px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwyQkFBQTtFQUNGO0VBQ0E7SUFDRSx5QkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLG1FQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUEsRUFBQSx3Q0FBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLHFEQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDRSwyQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS10b3Age1xyXG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuLnBheW1lbnQtZGV0YWlscyB7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnBheW1lbnQtZGV0YWlscy5zbGlkZS1kb3duIHtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCB0byBmaXQgdGhlIGNvbnRlbnQgKi9cclxufVxyXG5cclxuLnN0cmlwZS1lbGVtZW50IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50LW1ldGhvZHMgaW9uLWJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uby1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb3ZpZGVyLWxvZ28ge1xyXG4gIGhlaWdodDogMjRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment_payment_module_ts.js.map