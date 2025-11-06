"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule] }); })();


/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autocomplete/autocomplete.component */ 5860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enroute-chat/enroute-chat.component */ 5635);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/app */ 3253);
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-card/add-card.component */ 671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trip-summary/trip-summary.component */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/network.service */ 2982);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/map.service */ 9947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/geocode.service */ 8793);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/payment.service */ 1863);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 4666);



























const _c0 = ["map"];
const _c1 = ["topBar"];
const _c2 = ["bottomBar"];
const _c3 = ["mapElement"];

function HomePage_ion_toolbar_1_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label", 27)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r17.duration);
  }
}

function HomePage_ion_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-toolbar", 19)(1, "ion-buttons", 20)(2, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_toolbar_1_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r18.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "ion-buttons", 23)(7, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, HomePage_ion_toolbar_1_ion_label_9_Template, 3, 1, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.duration);
  }
}

function HomePage_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_item_2_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.destinationAddress);
  }
}

function HomePage_ion_fab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 30)(1, "ion-fab-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-menu-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_fab_4_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r22.GotoSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-fab-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_fab_5_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r24.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-fab-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_toolbar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-toolbar", 36)(1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Driver Arrives in ", ctx_r5.duration, "");
  }
}

function HomePage_ion_toolbar_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-toolbar", 36)(1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Arrival in ", ctx_r6.duration, "");
  }
}

function HomePage_ion_fab_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 37)(1, "ion-fab-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_fab_11_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r26.resetLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 40)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 42)(1, "ion-item-group", 15)(2, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_17_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r28.showAutocompleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r11.locationAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r11.locationAddress ? "Where To?" : "Waiting for address...");
  }
}

function HomePage_ion_list_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 45)(1, "ion-list-header")(2, "ion-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-item-group", 15)(5, "ion-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_24_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r30.ReturnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, " No Drivers Here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
}

function HomePage_ion_list_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 65)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_25_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r38.ShowDriverInfoPop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 68)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "ion-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p", 70)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "ion-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "ion-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 73)(16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "p", 74)(19, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r32.carname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r32.D_duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r32.driver_number_of_seats, " seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("$", ctx_r32.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("$", ctx_r32.price * 2, "");
  }
}

function HomePage_ion_list_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-skeleton-text", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 68)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "ion-skeleton-text", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "ion-skeleton-text", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 73)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "ion-skeleton-text", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "ion-skeleton-text", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("animated", true);
  }
}

function HomePage_ion_list_25_ion_select_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-select-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const card_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", card_r40.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" \u2022\u2022\u2022\u2022 ", card_r40.last4, " ");
  }
}

function HomePage_ion_list_25_ion_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ion-icon", 82);
  }
}

function HomePage_ion_list_25_ion_progress_bar_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ion-progress-bar", 83);
  }
}

function HomePage_ion_list_25_ion_label_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Book Ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}

function HomePage_ion_list_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 45)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, HomePage_ion_list_25_div_2_Template, 21, 5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, HomePage_ion_list_25_div_3_Template, 14, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 53)(5, "ion-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "ion-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ionChange", function HomePage_ion_list_25_Template_ion_select_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r41.chooseCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "ion-select-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, " Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, HomePage_ion_list_25_ion_select_option_13_Template, 3, 2, "ion-select-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 60)(15, "ion-button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_25_Template_ion_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r43.StartRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, HomePage_ion_list_25_ion_icon_16_Template, 1, 0, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, HomePage_ion_list_25_ion_progress_bar_17_Template, 1, 0, "ion-progress-bar", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, HomePage_ion_list_25_ion_label_18_Template, 2, 0, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r13.selectedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r13.savedPaymentMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r13.price);
  }
}

function HomePage_ion_list_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 45)(1, "ion-list-header")(2, "ion-item")(3, "ion-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "ion-label")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "ion-item-group", 15)(11, "ion-button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_26_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r44.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ion-label")(13, "ion-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "ion-progress-bar", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r14.currentDriver.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r14.currentDriver.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Arrives In ", ctx_r14.duration, "");
  }
}

function HomePage_ion_list_27_ion_label_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_27_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 45)(1, "div", 88)(2, "ion-item", 89)(3, "ion-label")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 90)(9, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "ion-img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "ion-item", 89)(16, "ion-label")(17, "ion-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "ion-item", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, HomePage_ion_list_27_ion_label_22_Template, 4, 0, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, HomePage_ion_list_27_ion_label_23_Template, 4, 0, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 93)(25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "ion-accordion-group", 94)(28, "ion-accordion", 95)(29, "ion-item", 96)(30, "ion-label")(31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 97)(34, "ion-button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r48.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "ion-button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r50.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](39, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "ion-button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r49);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r51.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](43, "ion-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45, "Cancel ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r15.driverInfo.Driver_car, ".", ctx_r15.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r15.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r15.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r15.driverInfo.Driver_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r15.driverInfo.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r15.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r15.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("$", ctx_r15.price, "");
  }
}

function HomePage_ion_list_28_ion_label_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_28_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 45)(1, "div", 88)(2, "ion-item", 89)(3, "ion-label")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 90)(9, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "ion-img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ion-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "ion-item", 89)(16, "ion-label")(17, "ion-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "ion-item", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, HomePage_ion_list_28_ion_label_22_Template, 4, 0, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, HomePage_ion_list_28_ion_label_23_Template, 4, 0, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 93)(25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "ion-accordion-group", 94)(28, "ion-accordion", 95)(29, "ion-item", 96)(30, "ion-label")(31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 97)(34, "ion-button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_28_Template_ion_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r54.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "ion-button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_28_Template_ion_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r56.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](39, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r16.driverInfo.Driver_car, ".", ctx_r16.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r16.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r16.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r16.driverInfo.Driver_rating || 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r16.driverInfo.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r16.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r16.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("$", ctx_r16.price, "");
  }
}

class HomePage {
  constructor(auth, authService, router, networkService, map, nav, platform, firestore, database, ngZone, geocode, overlay, modalCtrl, alert, payME, toastController, actionSheetController) {
    this.auth = auth;
    this.authService = authService;
    this.router = router;
    this.networkService = networkService;
    this.map = map;
    this.nav = nav;
    this.platform = platform;
    this.firestore = firestore;
    this.database = database;
    this.ngZone = ngZone;
    this.geocode = geocode;
    this.overlay = overlay;
    this.modalCtrl = modalCtrl;
    this.alert = alert;
    this.payME = payME;
    this.toastController = toastController;
    this.actionSheetController = actionSheetController;
    this.profile = null;
    this.address = 'Unknown';
    this.cash = false;
    this.state = [];
    this.showResetLocationButton = false;
    this.destinationAddress = 'Drag To Pick Destination';
    this.locationAddress = null;
    this.price = 0;
    this.current_Request_Number = -1;
    this.countdownActive = false;
    this.duration = null;
    this._carmarkers = [];
    this.networkStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(true);
    this.driverLocation = null;
    this.stopPolling = false;
    this.RIDE_STATE_KEY = 'activeRideState';
    this.isLoadingDriver = false; // Add these stage constants at the class level

    this.STAGES = {
      BOOKING: 'booking',
      CONFIRM: 'confirm',
      TRACKING: 'tracking',
      SEARCHING: 'searching',
      DRIVING: 'driving',
      NO_DRIVER: 'noDriver',
      MAP_PIN: 'mapPin',
      NO_DRIVERS: 'noDrivers'
    }; // Add this to your class properties

    this.lastHandledState = null; // Add this property to the class

    this.isRideStopProcessed = false; // Interval in milliseconds for updating the route

    this.UPDATE_INTERVAL = 10000; // Update every 10 seconds

    this.initializeApp();
  }

  ngOnDestroy() {
    var _this = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.unsubscribe) {
        _this.unsubscribe();
      }

      window.removeEventListener('resize', _this.setMapHeight.bind(_this));

      _this.clearSubscriptions();

      yield _this.clearPrevMarkers();
      yield _this.clearAllPolylines();
    })();
  }

  ngAfterViewInit() {
    var _this2 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // First check location permissions
        const hasPermission = yield _this2.checkAndRequestLocationPermissions();

        if (!hasPermission) {
          return;
        } // Initialize profile first


        yield _this2.initializeProfile(); // Then proceed with other initializations

        yield _this2.initializeApp();
        yield _this2.initializeNetworkMonitoring();
        yield _this2.fetchSavedPaymentMethods();

        _this2.EnterBookingStage();

        yield _this2.initializeGeolocation();
        yield _this2.initializeMap(); // Set up real-time listener for ride state

        _this2.initializeRideStateListener();
      } catch (e) {
        console.error('Error in ngAfterViewInit:', e);

        _this2.overlay.hideLoader();

        _this2.overlay.showAlert('Error', 'An error occurred during initialization. Please try again.');
      }
    })();
  } // Add this new method


  initializeProfile() {
    var _this3 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Show loader while initializing profile
        // await this.overlay.showLoader('Loading profile...');
        // Wait for auth state to be ready
        const user = yield new Promise(resolve => {
          const unsubscribe = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.onAuthStateChanged)(_this3.auth, user => {
            unsubscribe();
            resolve(user);
          });
        });

        if (!user) {
          throw new Error('User not authenticated');
        } // Get profile data


        _this3.profile = yield _this3.database.getUserProfile();

        if (!_this3.profile) {
          console.log('Creating new profile...'); // If profile doesn't exist, create it with default values

          _this3.profile = {
            userId: user.uid,
            email: user.email,
            createdAt: new Date().toISOString() // Add any other default profile fields you need

          };
          yield _this3.database.createUserProfile(_this3.profile);
        }

        console.log('Profile initialized:', _this3.profile);

        _this3.overlay.hideLoader();
      } catch (error) {
        console.error('Error initializing profile:', error);

        _this3.overlay.hideLoader();

        yield _this3.overlay.showAlert('Profile Error', 'Unable to initialize user profile. Please try again or contact support.');
        throw error;
      }
    })();
  } // Add this method to check profile before any ride-related action


  ensureProfileInitialized() {
    var _this4 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.profile) {
        try {
          yield _this4.initializeProfile();
          return true;
        } catch (error) {
          console.error('Error ensuring profile is initialized:', error);
          return false;
        }
      }

      return true;
    })();
  }

  initializeRideStateListener() {
    var _this5 = this;

    console.log('Initializing ride state listener'); // Reset lastHandledState on initialization to ensure proper state restoration

    this.lastHandledState = null;
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.onAuthStateChanged)(this.auth, user => {
      if (!user) return; // Listen to the Request collection for active rides for this user

      const requestsQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.collection)(this.firestore, 'Request'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.where)('Rider_id', '==', user.uid), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.where)('status', 'in', ['pending', 'confirmed', 'started']));
      this.unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.onSnapshot)(requestsQuery, /*#__PURE__*/function () {
        var _ref = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (snapshot) {
          try {
            // If no active rides found, go to booking stage
            if (snapshot.empty) {
              console.log('No active rides found');

              _this5.setStage(_this5.STAGES.BOOKING);

              return;
            } // Get the most recent active ride


            const activeRides = snapshot.docs;
            const currentRide = activeRides[0];
            const rideData = currentRide.data();
            _this5.requestID = currentRide.id; // Restore price information

            _this5.price = rideData.price || 0;
            console.log('Restored ride price:', _this5.price);
            console.log('Current ride status:', rideData.status); // IMPORTANT: On app initialization, always restore ride state regardless of lastHandledState

            const isAppInitialization = !_this5.lastHandledState; // Only skip if we've already handled this state AND it's not initial app load

            if (_this5.lastHandledState === rideData.status && !isAppInitialization) {
              console.log('State already properly handled:', rideData.status);
              return;
            } // Store location data for later use


            if (rideData.Loc_lat && rideData.Loc_lng) {
              _this5.LatLng = {
                lat: rideData.Loc_lat,
                lng: rideData.Loc_lng
              };
            }

            if (rideData.Des_lat && rideData.Des_lng) {
              _this5.D_LatLng = {
                lat: rideData.Des_lat,
                lng: rideData.Des_lng
              };
            } // Store addresses


            _this5.locationAddress = rideData.Rider_Location || 'Unknown location';
            _this5.destinationAddress = rideData.Rider_Destination || 'Unknown destination';
            console.log('Restoring ride state:', rideData.status); // Handle different ride states

            switch (rideData.status) {
              case 'pending':
                yield _this5.handlePendingState();
                break;

              case 'confirmed':
                console.log('Handling confirmed state on restore...');
                yield _this5.handleRideConfirmation(rideData);
                break;

              case 'started':
                yield _this5.handleRideStart(currentRide);
                break;

              case 'cancelled':
                yield _this5.handleRideCancellation(rideData);
                break;

              default:
                console.log('Unknown ride status:', rideData.status);

                _this5.setStage(_this5.STAGES.BOOKING);

            } // Only update lastHandledState AFTER successful handling


            _this5.lastHandledState = rideData.status;
          } catch (error) {
            console.error('Error handling ride state:', error);

            if (error.code === 'permission-denied' || error.code === 'not-found') {
              _this5.overlay.showAlert('Error', 'Failed to restore ride state. Please try again.');

              _this5.setStage(_this5.STAGES.BOOKING);
            }
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {
        console.error('Error in ride state listener:', error);
        this.setStage(this.STAGES.BOOKING);
      });
    });
  }

  handleRemovedRide() {
    console.log('Ride was removed');
    this.clearRideData();
    this.setStage(this.STAGES.BOOKING);
  }

  clearRideData() {
    this.requestID = null;
    this.driverInfo = null;
    this.rideHasStarted = false;
    this.lastHandledState = null; // Clear any other ride-specific data
  }

  checkAndRequestLocationPermissions() {
    var _this6 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if running on web platform
        if (_this6.platform.is('capacitor')) {
          const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();

          if (permissionStatus.location === 'granted') {
            _this6.overlay.hideLoader();

            return true;
          }

          const alert = yield _this6.alert.create({
            header: 'Location Permission Required',
            message: 'This app needs access to your location to function properly.',
            buttons: [{
              text: 'Enable Location',
              handler: function () {
                var _ref2 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  const newStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();

                  _this6.overlay.hideLoader();

                  if (newStatus.location !== 'granted') {
                    yield _this6.showLocationRequiredAlert();
                    return false;
                  }

                  return true;
                });

                return function handler() {
                  return _ref2.apply(this, arguments);
                };
              }()
            }],
            backdropDismiss: false
          });
          yield alert.present();
          const {
            role
          } = yield alert.onDidDismiss();

          if (role === 'backdrop') {
            _this6.overlay.hideLoader();

            yield _this6.showLocationRequiredAlert();
            return false;
          }
        } else {
          // Web platform - use browser's geolocation API
          if ('geolocation' in navigator) {
            return new Promise(resolve => {
              navigator.permissions.query({
                name: 'geolocation'
              }).then(result => {
                if (result.state === 'granted') {
                  _this6.overlay.hideLoader();

                  resolve(true);
                } else {
                  _this6.overlay.hideLoader();

                  resolve(_this6.showWebLocationPrompt());
                }
              });
            });
          } else {
            _this6.overlay.hideLoader();

            yield _this6.overlay.showAlert('Error', 'Geolocation is not supported in this browser.');
            return false;
          }
        }

        return true;
      } catch (error) {
        console.error('Error checking/requesting location permissions:', error);

        _this6.overlay.hideLoader();

        throw error;
      }
    })();
  }

  showWebLocationPrompt() {
    var _this7 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alert.create({
        header: 'Location Access',
        message: 'This app needs your location. Please allow location access when prompted by your browser.',
        buttons: [{
          text: 'OK',
          handler: () => {
            return new Promise(resolve => {
              navigator.geolocation.getCurrentPosition(() => resolve(true), () => {
                _this7.showLocationRequiredAlert();

                resolve(false);
              });
            });
          }
        }]
      });
      yield alert.present();
      return true;
    })();
  }

  showLocationRequiredAlert() {
    var _this8 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alert.create({
        header: 'Location Required',
        message: 'Location permission is required to use this app. Please enable location services in your device settings.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  fetchSavedPaymentMethods() {
    var _this9 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this9.savedPaymentMethods = yield _this9.database.getSavedPaymentMethods();
        console.log('Saved Payment Methods:', _this9.savedPaymentMethods); // Set default payment method to cash if no cards are saved

        if (_this9.savedPaymentMethods.length === 0) {
          _this9.selectedCard = 'cash';
          _this9.cash = true;
        } else {
          _this9.selectedCard = _this9.savedPaymentMethods[0].cardId;
          _this9.cash = false;
        }
      } catch (error) {
        console.error('Error fetching saved payment methods:', error);
      }
    })();
  }

  chooseCard(event) {
    this.selectedCard = event.detail.value;
    this.cash = this.selectedCard === 'cash';

    if (!this.cash) {// this.processPayment(this.authService.user.email, this.defaultAmount, this.selectedCard);
    }
  }

  processPayment(email, amount, cardId) {
    var _this10 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.overlay.showLoader('Processing payment...');

      try {
        const paymentResult = yield _this10.payME.processPaymentWithCardId(email, amount, cardId).toPromise();
        console.log('Payment successful:', paymentResult);
        yield _this10.overlay.showAlert('Success', 'Payment successful!');
      } catch (error) {
        console.error('Error during payment:', error);
        const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
        yield _this10.showPaymentErrorModal(errorMessage);
      } finally {
        _this10.overlay.hideLoader();
      }
    })();
  }

  showPaymentErrorModal(errorMessage) {
    var _this11 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alert.create({
        header: 'Payment Error',
        message: errorMessage,
        buttons: [{
          text: 'Add New Card',
          handler: function () {
            var _ref3 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              const modal = yield _this11.modalCtrl.create({
                component: _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_6__.AddCardComponent // Create this component to handle adding a new card

              });
              yield modal.present();
              const {
                data
              } = yield modal.onWillDismiss();

              if (data && data.newCardId) {
                _this11.selectedCard = data.newCardId;
                _this11.cash = false;
              }
            });

            return function handler() {
              return _ref3.apply(this, arguments);
            };
          }()
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield alert.present();
    })();
  } // Add this single unified method for all map height calculations


  setMapContainerHeight(extraPadding = 0) {
    if (!this.mapRef || !this.topBar || !this.bottomBar) return; // Get proper measurements of the bars

    const topHeight = this.topBar.nativeElement.offsetHeight || 0;
    const bottomHeight = this.bottomBar.nativeElement.offsetHeight || 0; // Calculate available height properly

    const availableHeight = window.innerHeight - topHeight - bottomHeight + extraPadding; // Set map height

    this.mapRef.nativeElement.style.height = `${availableHeight}px`; // Ensure map container is positioned properly

    this.mapRef.nativeElement.style.top = `${topHeight}px`;
    this.mapRef.nativeElement.style.position = 'absolute';
    this.mapRef.nativeElement.style.zIndex = '1'; // Lower than UI elements

    this.mapRef.nativeElement.style.left = '0';
    this.mapRef.nativeElement.style.right = '0';
    console.log(`Map container height set to: ${availableHeight}px (top: ${topHeight}px, bottom: ${bottomHeight}px)`);
  } // Update these methods to use the unified approach


  setMapHeight() {
    this.setMapContainerHeight(0);
  }

  setMapHeightCreateAndAddMarkers() {
    this.setMapContainerHeight(40); // Add some padding if needed
  }

  setMapHeightHandleDrivertoRider() {
    this.setMapContainerHeight(20);
  }

  setMapHeightHandleDrivertoDestination() {
    this.setMapContainerHeight(0);
  }

  ResetMapHeight() {
    this.setMapContainerHeight(0);
  }

  initializeNetworkMonitoring() {
    var _this12 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();
      _this12.isConnected = status.connected;

      _this12.networkStatus$.next(_this12.isConnected);

      console.log('Network monitoring initialized. Initial status:', _this12.isConnected);
      _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.addListener('networkStatusChange', status => {
        console.log('Network status changed:', status);
        _this12.isConnected = status.connected;

        _this12.networkStatus$.next(_this12.isConnected);
      });

      _this12.networkStatus$.subscribe(isConnected => {
        if (isConnected) {
          _this12.router.navigate(['home']);
        } else {
          _this12.router.navigate(['network']);
        }
      });
    })();
  }

  initializeApp() {
    var _this13 = this;

    this.platform.ready().then( /*#__PURE__*/(0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this13.initializeRideStateListener();
      } catch (error) {
        console.error('Error initializing app:', error);

        _this13.setStage(_this13.STAGES.BOOKING);
      }
    }));
  }

  initializeGeolocation() {
    var _this14 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let coordinates;

        if (_this14.platform.is('capacitor')) {
          coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
            timeout: 10000
          });
        } else {
          // Web fallback
          coordinates = yield new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
              resolve({
                coords: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  accuracy: position.coords.accuracy,
                  altitude: position.coords.altitude,
                  altitudeAccuracy: position.coords.altitudeAccuracy,
                  heading: position.coords.heading,
                  speed: position.coords.speed
                },
                timestamp: position.timestamp
              });
            }, error => reject(error), {
              timeout: 10000
            });
          });
        }

        _this14.coordinates = coordinates;
        _this14.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        yield _this14.database.updateLocation(_this14.LatLng);
        console.log('Geolocation initialized:', _this14.LatLng);

        _this14.startPollingPosition();
      } catch (error) {
        console.error('Error initializing geolocation:', error);

        _this14.overlay.hideLoader();

        yield _this14.overlay.showAlert('Location Error', 'Unable to get your location. Please check your device settings and try again.');
      }
    })();
  }

  startPermissionPolling() {
    var _this15 = this;

    this.permissionCheckInterval = setInterval( /*#__PURE__*/(0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();

      if (permissionStatus.location === 'granted') {
        _this15.overlay.hideLoader();

        clearInterval(_this15.permissionCheckInterval); // Try to get the current position again if permissions are granted

        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        _this15.coordinates = coordinates;
        _this15.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        console.log('Geolocation initialized:', _this15.LatLng); // Start polling the user's position

        _this15.startPollingPosition();
      }
    }), 1000); // Check every second
  }

  startPollingPosition() {
    var _this16 = this;

    let lastLatLng = {
      lat: null,
      lng: null
    };
    let lastAddress = null;
    this.pollingInterval = setInterval( /*#__PURE__*/(0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let position;

        if (_this16.platform.is('capacitor')) {
          position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        } else {
          // Web fallback
          position = yield new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        }

        const newLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        yield _this16.database.updateLocation(newLatLng);

        if (_this16.hasSignificantLocationChange(lastLatLng, newLatLng, 50)) {
          // Check if moved at least 50 meters
          lastLatLng = newLatLng;
          const address = yield _this16.map.getAddress(newLatLng.lat, newLatLng.lng);

          if (address && address.results && address.results.length > 1) {
            const components = address.results[1].address_components;

            if (components.length >= 2) {
              _this16.locationAddress = components[0].long_name + ' ' + components[1].long_name;
              _this16.actualLocation = address.results[0].formatted_address;

              if (_this16.locationAddress !== lastAddress) {
                console.log('Updated Location Address:', _this16.locationAddress);
                lastAddress = _this16.locationAddress;
              }
            }
          } else {
            console.log('Unable to update location address');
          }
        }

        if (_this16.networkService.isConnected() && !_this16.stopPolling) {
          const center = [newLatLng.lat, newLatLng.lng];
          const radiusInM = 5000; // Example radius in meters

          yield _this16.fetchAndDisplayDrivers(center, radiusInM);
        } else {
          console.log('No network connection.', _this16.stopPolling);
        }
      } catch (err) {
        console.error('Error getting position:', err); // Reduce error alerts by not showing specific errors repeatedly
      }
    }), 5000); // Poll every 10 seconds
  }

  hasSignificantLocationChange(oldLatLng, newLatLng, minDistance) {
    if (!oldLatLng.lat || !oldLatLng.lng) return true;
    const R = 6371e3; // Earth radius in meters

    const φ1 = oldLatLng.lat * Math.PI / 180;
    const φ2 = newLatLng.lat * Math.PI / 180;
    const Δφ = (newLatLng.lat - oldLatLng.lat) * Math.PI / 180;
    const Δλ = (newLatLng.lng - oldLatLng.lng) * Math.PI / 180;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters

    return distance >= minDistance;
  }

  stopPollingPosition() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
      console.log('Stopped polling position.');
    } else {
      console.log('No polling to stop.');
    }
  }

  initializeMap() {
    var _this17 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Ensure coordinates are available before creating map
        if (!_this17.coordinates || !_this17.coordinates.coords) {
          console.warn('Coordinates not available, using default location'); // Use default coordinates (Kuala Lumpur, Malaysia)

          _this17.coordinates = {
            coords: {
              latitude: 3.1390,
              longitude: 101.6869,
              accuracy: 0,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null
            },
            timestamp: Date.now()
          };
        }

        yield _this17.map.createMap(_this17.mapRef.nativeElement, _this17.coordinates);
        _this17.mapy = true;
        _this17.actualLocation = _this17.map.actualLocation; // console.log('Map initialized:', this.actualLocation, this.locationAddress);
      } catch (error) {
        console.error('Error initializing map:', error);
        throw new Error('Map initialization failed');
      }
    })();
  }

  initializeDatabaseSubscriptions() {
    this.database.getKnownPlaces().subscribe(d => {
      console.log('Received data:', d);
      this.places = d.slice(0, 3);
    });
  }

  initializeBackButtonCustomHandler() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back button pressed');
    });
    _capacitor_app__WEBPACK_IMPORTED_MODULE_5__.App.addListener('backButton', ({
      canGoBack
    }) => {
      if (!canGoBack) {
        // Show a confirmation dialog before exiting the app
        if (confirm('Are you sure you want to exit the app?')) {
          _capacitor_app__WEBPACK_IMPORTED_MODULE_5__.App.exitApp();
        }
      } else {
        console.log("back clicked"); // Use Ionic's NavController to navigate back
        // Replace 'NavController' with your specific navigation method
        // this.navCtrl.pop();

        window.history.back();
      }
    }); // App.addListener('appStateChange', (state) => {
    //   if (!state.isActive) {
    //     this.stopPollingPosition();
    //   } else {
    //     this.startPollingPosition();
    //   }
    // });
  }

  setupMapListeners() {
    var _this18 = this;

    this.map.newMap.setOnCameraIdleListener( /*#__PURE__*/function () {
      var _ref7 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (g) {
        _this18.ngZone.run( /*#__PURE__*/(0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this18.showResetLocationButton = true;

          if (_this18.mapPinStage) {
            const addressResponse = yield _this18.geocode.getAddress(g.latitude, g.longitude).toPromise();

            _this18.processAddressResponse(addressResponse);
          }
        }));
      });

      return function (_x2) {
        return _ref7.apply(this, arguments);
      };
    }());
  }

  logout() {
    var _this19 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this19.authService.logout();
    })();
  }

  fetchAndDisplayDrivers(center, radiusInM) {
    var _this20 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const drivers = yield _this20.database.checkDriversWithin(center, radiusInM);
        console.log('Fetched drivers:', drivers);
        yield _this20.handleDrivers(drivers);

        if (_this20.drivers_Requested.length > 0) {
          _this20.current_Request_Number = 0; // Set to the first available driver

          yield _this20.UpdateCarMarker(_this20.drivers_Requested);
          _this20.NoDrivers = false;
        } else {
          _this20.current_Request_Number = -1; // No valid driver

          yield _this20.UpdateCarMarker([]); // Clear all markers if no drivers are requested

          _this20.NoDrivers = true;
        }
      } catch (error) {
        console.error('Error fetching drivers:', error);
        _this20.current_Request_Number = -1; // Reset the request number

        yield _this20.UpdateCarMarker([]); // Clear all markers if there's an error

        _this20.NoDrivers = true;
      }
    })();
  }

  handleDrivers(drivers) {
    var _this21 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this21.drivers_Requested = [];
      _this21.closeDrivers = null;
      console.log('Handling drivers:', drivers);

      if (drivers.length === 0) {
        _this21.NoDrivers = true;
        console.log('No drivers found.');
        return;
      }

      drivers.forEach(driver => {
        if (driver) {
          console.log('Processing driver:', driver);

          if (driver.duration <= 1000 && driver.onlineState) {
            _this21.drivers_Requested.push(driver);

            _this21.updateDriverInfo(driver);
          }

          if (!_this21.closeDrivers || driver.duration < _this21.closeDrivers.duration) {
            _this21.closeDrivers = driver;
          }
        } else {
          console.error('Driver is null or undefined:', driver);
        }
      });

      if (_this21.drivers_Requested.length === 0) {
        _this21.NoDrivers = true;
      } else {
        // Ensuring current_Request_Number is within the bounds
        _this21.current_Request_Number = Math.min(_this21.current_Request_Number, _this21.drivers_Requested.length - 1);
      }

      console.log('Final requested drivers list:', _this21.drivers_Requested);
    })();
  } // Unsubscribe from all active listeners (for cleanup)


  cleanupListeners() {
    Object.values(this.database.activeListeners).forEach(unsubscribe => unsubscribe());
    this.database.activeListeners = {};
  }

  updateDriverInfo(driver) {
    console.log(this.drivers_Requested);
    this.carname = driver.Driver_car;
    this.driverImage = driver.Driver_imgUrl, this.driver_duration_apart = Math.ceil(driver.duration / 60000);
    this.driver_ID = driver.Driver_id;
    this.driver_number_of_seats = driver.seats;
    this.DriverLatLng = {
      lat: driver.Driver_lat,
      lng: driver.Driver_lng
    };
  }

  StartRide() {
    var _this22 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.isLoadingDriver) {
        console.log('Ride request already in progress...');
        return;
      }

      _this22.isLoadingDriver = true;

      _this22.overlay.showLoader('Preparing your ride...');

      try {
        // Group operations that can be done concurrently
        yield Promise.all([_this22.clearPrevMarkers(), _this22.clearAllPolylines()]);

        _this22.map.newMap.enableTouch();

        yield _this22.BookRide();
      } catch (error) {
        console.error('Error starting ride:', error);
        yield _this22.overlay.showAlert('Starting Ride Error', error.message || 'Failed to start ride');
      } finally {
        // Ensure we always hide the loader and reset the loading state
        _this22.isLoadingDriver = false;

        _this22.overlay.hideLoader();
      }
    })();
  }

  clearMarkers() {
    var _this23 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this23.marker1) {
        yield _this23.map.newMap.removeMarker(_this23.marker1);
        _this23.marker1 = null;
      }

      if (_this23.marker2) {
        yield _this23.map.newMap.removeMarker(_this23.marker2.toString());
        _this23.marker2 = null;
      }

      if (_this23._carmarkers) {
        for (const {
          marker
        } of _this23._carmarkers) {
          yield _this23.map.newMap.removeMarker(marker); // Assuming marker is the instance
        }

        _this23._carmarkers = []; // Clear the array after removing markers
      }
    })();
  }

  BookRide() {
    var _this24 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!(yield _this24.ensureProfileInitialized())) {
          throw new Error('Profile not initialized');
        }

        if (!_this24.hasValidDriver()) {
          _this24.showNoDriversAlert();

          return;
        }

        const driver = _this24.drivers_Requested[_this24.current_Request_Number];
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.doc)(_this24.firestore, `Drivers`, driver.Driver_id);
        const docSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.getDoc)(userDocRef);

        if (!docSnapshot.exists()) {
          throw new Error('Driver document not found');
        }

        const data = docSnapshot.data();

        if (!data?.onlineState) {
          yield _this24.handleNoAvailableDriver();
          return;
        }

        _this24.driverInfo = data;
        yield _this24.requestRideWithDriverDetails(driver, userDocRef);

        _this24.updateDriverInfo(driver);
      } catch (error) {
        console.error('Error in BookRide:', error);

        _this24.overlay.showAlert('Error', 'Unable to book ride. Please try again.');
      }
    })();
  }

  hasValidDriver() {
    return this.drivers_Requested?.[this.current_Request_Number]?.Driver_id != null;
  }

  requestRideWithDriverDetails(driver, userDocRef) {
    var _this25 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!(yield _this25.ensureProfileInitialized())) {
          throw new Error('Profile not initialized');
        }

        const requestDetails = {
          latLng: _this25.LatLng,
          destinationAddress: _this25.destinationAddress,
          locationAddress: _this25.locationAddress,
          dLatLng: _this25.D_LatLng,
          driverId: driver.Driver_id,
          price: _this25.price,
          cash: _this25.cash
        };
        _this25.requestID = yield _this25.database.RequestRideWithRiderDetails(requestDetails);

        if (_this25.requestID) {
          _this25.currentDriver = driver; // Set up listener before handling pending state

          const rideRequestDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.doc)(_this25.firestore, `Request`, _this25.requestID);
          const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.onSnapshot)(rideRequestDocRef, /*#__PURE__*/function () {
            var _ref9 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
              if (doc.exists()) {
                yield _this25.handleRideUpdates(doc);
              } else {
                console.error('Ride request document does not exist.');
              }
            });

            return function (_x3) {
              return _ref9.apply(this, arguments);
            };
          }());
          _this25.unsubscribe = unsub; // Now handle the pending state

          yield _this25.handlePendingState();
        } else {
          throw new Error('Failed to generate requestID');
        }
      } catch (error) {
        console.error('Error in requestRideWithDriverDetails:', error);

        _this25.overlay.showAlert('Error', 'Unable to request ride. Please try again.');
      }
    })();
  }

  showNoDriversAlert() {
    console.error('No valid driver available to book a ride.');
    this.overlay.showAlert('No Drivers ', 'No available drivers found. Please try again later.');
  }

  handleNoAvailableDriver() {
    var _this26 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Driver is not available, moving to next.');
      _this26.current_Request_Number++;

      if (_this26.hasValidDriver()) {
        yield _this26.BookRide();
      } else {
        _this26.showNoDriversAlert();
      }
    })();
  } // Make sure to clear the subscription when it's no longer needed


  clearSubscriptions() {
    console.log('Clearing all subscriptions'); // Clear routeUpdateSubscription first as it's the main culprit

    if (this.routeUpdateSubscription) {
      this.routeUpdateSubscription.unsubscribe();
      this.routeUpdateSubscription = null;
    } // Clear other subscriptions


    if (this.numCalls) {
      this.numCalls.unsubscribe();
      this.numCalls = null;
    }

    if (this.countDown) {
      this.countDown.unsubscribe();
      this.countDown = null;
    }

    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    } // Stop any polling interval


    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    } // Reset any animation state


    this.animatedMarker = null;
  }

  handleRideUpdates(doc) {
    var _this27 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = doc.data();
      if (!data) return;

      try {
        switch (data.status) {
          case 'confirmed':
            yield _this27.handleRideConfirmation(doc);
            break;

          case 'started':
            yield _this27.handleRideStart(doc);
            break;

          case 'stopped':
            yield _this27.handleRideStop(doc);
            break;

          case 'cancelled':
            yield _this27.handleRideCancellation(data);
            break;
        }
      } catch (error) {
        console.error('Error handling ride updates:', error);

        if (error.code === 'permission-denied' || error.code === 'not-found') {
          yield _this27.ReturnHome();
        }
      }
    })();
  }

  handlePendingState() {
    var _this28 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Don't show another loader here since BookRide is already showing one
        if (!_this28.currentDriver?.Driver_id) {
          throw new Error('No valid driver ID found');
        } // Get driver location with timeout


        const locationPromise = _this28.getDriverLocation(_this28.currentDriver.Driver_id);

        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Location fetch timeout')), 10000));
        yield Promise.race([locationPromise, timeoutPromise]);

        if (!_this28.DriverLatLng) {
          throw new Error('Failed to get driver location');
        } // Group all map operations


        yield Promise.all([_this28.clearPrevMarkers(), _this28.clearPolyline(_this28.newPoly), _this28.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this28.DriverLatLng
        })]); // Update map height properly instead of using fixed positioning

        _this28.ngZone.run(() => {
          _this28.setMapHeightHandleDrivertoRider();
        });

        yield _this28.handleDriverToRider(_this28.DriverLatLng, _this28.LatLng);

        _this28.EnterSearchingStage();

        yield _this28.startCountdown(20, _this28.requestID);
      } catch (error) {
        console.error('Error in handlePendingState:', error);
        throw error; // Let BookRide handle the error and cleanup
      }
    })();
  }

  presentCancelRideActionSheet() {
    var _this29 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this29.actionSheetController.create({
        header: 'Cancel Ride',
        buttons: [{
          text: 'Changed my mind',
          handler: () => {
            _this29.cancelRide('Changed my mind');
          }
        }, {
          text: 'Driver took too long',
          handler: () => {
            _this29.cancelRide('Driver took too long');
          }
        }, {
          text: 'Found another ride',
          handler: () => {
            _this29.cancelRide('Found another ride');
          }
        }, {
          text: 'Other',
          handler: () => {
            _this29.cancelRide('Other');
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }

  cancelRide(reason) {
    var _this30 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.doc)(_this30.firestore, 'Request', _this30.requestID);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.updateDoc)(rideRef, {
        status: 'cancelled',
        cancellationReason: reason,
        canceledBy: 'rider'
      });
      const toast = yield _this30.toastController.create({
        message: 'Ride has been cancelled.',
        duration: 2000
      });
      yield toast.present();
    })();
  }

  handleRideCancellation(data) {
    var _this31 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this31.stopCountdown();

      yield _this31.clearPrevMarkers();

      _this31.unsubscribe();

      _this31.clearSubscriptions();

      if (_this31.drivers_Requested[_this31.current_Request_Number + 1] && !_this31.rideHasStarted) {
        _this31.current_Request_Number++;
        yield _this31.BookRide();
      } else {
        if (data.canceledBy == 'driver') {
          _this31.overlay.showAlert('Cancelled', 'Driver cancelled');
        }

        _this31.ClearRide();

        _this31.ReturnHome();
      }
    })();
  }

  handleRideStart(doc) {
    var _this32 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Starting ride tracking setup...'); // Clear previous visual elements

        yield _this32.clearPrevMarkers();
        yield _this32.clearPolyline(_this32.newPoly); // Get ride data and validate

        const data = doc.data();

        if (!data) {
          console.warn('handleRideStart: No data found in document');
          throw new Error('No ride data available');
        }

        console.log('handleRideStart data:', data); // Set ride state flag first to prevent race conditions

        _this32.rideHasStarted = true; // Set current driver from document data with fallback options

        if (data.driverDetails) {
          _this32.currentDriver = data.driverDetails;
          _this32.driverInfo = data.driverDetails;
        } else if (data.driverId) {
          console.log('Driver details missing, attempting to fetch from driver ID');

          try {
            const driverDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.getDoc)(doc(_this32.firestore, 'Drivers', data.driverId));

            if (driverDoc.exists()) {
              _this32.driverInfo = driverDoc.data();
              _this32.currentDriver = _this32.driverInfo;
            }
          } catch (error) {
            console.warn('Failed to fetch driver details:', error); // Continue with limited driver info
          }
        } // Adjust map height before adding markers


        _this32.setMapHeightHandleDrivertoDestination();

        window.addEventListener('resize', _this32.setMapHeightHandleDrivertoDestination.bind(_this32)); // Initialize locations with fallbacks

        _this32.LatLng = {
          lat: data.Loc_lat || _this32.LatLng?.lat || 0,
          lng: data.Loc_lng || _this32.LatLng?.lng || 0
        };
        _this32.D_LatLng = {
          lat: data.Des_lat || _this32.D_LatLng?.lat || 0,
          lng: data.Des_lng || _this32.D_LatLng?.lng || 0
        }; // Ensure map is initialized

        if (!_this32.map.newMap) {
          console.log('Map not initialized in handleRideStart, initializing now...');

          try {
            yield _this32.initializeMap();
          } catch (mapError) {
            console.error('Failed to initialize map:', mapError); // Allow continuation with limited functionality
          }
        } // Get driver location with better error handling


        let driverLocationFetched = false;

        if (data.driverId) {
          try {
            console.log('Fetching driver location for ID:', data.driverId); // Use Promise.race with a timeout to prevent hanging

            const locationPromise = _this32.database.getDriverLocation(data.driverId);

            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Driver location fetch timeout')), 5000));
            const driverLocation = yield Promise.race([locationPromise, timeoutPromise]);

            if (driverLocation && typeof driverLocation === 'object' && 'lat' in driverLocation && 'lng' in driverLocation) {
              console.log('Got real-time driver location:', driverLocation);
              _this32.DriverLatLng = {
                lat: driverLocation.lat,
                lng: driverLocation.lng
              };
              driverLocationFetched = true;
            }
          } catch (locationError) {
            console.warn('Error getting real-time driver location:', locationError); // Will use fallback below
          }
        } // Fallback to location in document if real-time fetch failed


        if (!driverLocationFetched) {
          console.log('Using driver location from document data');
          _this32.DriverLatLng = {
            lat: data.driverDetails?.Driver_lat || data.driver_lat || _this32.LatLng.lat,
            lng: data.driverDetails?.Driver_lng || data.driver_lng || _this32.LatLng.lng
          };
        } // Setup UI state even if visualization might fail


        _this32.EnterDrivingToDestinationStage();

        _this32.canCheck = true; // Proceed with visualization if we have valid coordinates

        if (_this32.DriverLatLng?.lat && _this32.D_LatLng?.lat) {
          console.log('Calling handleRiderToDestination with locations:', 'Driver:', _this32.DriverLatLng, 'Destination:', _this32.D_LatLng);

          try {
            yield _this32.handleRiderToDestination(_this32.DriverLatLng, _this32.D_LatLng);
          } catch (visualError) {
            console.warn('Failed to visualize route, but ride is still active:', visualError); // Show a non-blocking toast or notification

            const toast = yield _this32.toastController.create({
              message: 'Route visualization failed, but your ride is still active',
              duration: 3000
            });
            toast.present();
          }
        } else {
          console.warn('Invalid coordinates for visualization:', _this32.DriverLatLng, _this32.D_LatLng);
          const toast = yield _this32.toastController.create({
            message: 'Location data incomplete. Your ride is active but not fully visualized.',
            duration: 3000
          });
          toast.present();
        }

        console.log('Ride tracking setup completed successfully');
      } catch (error) {
        console.error('Error in handleRideStart:', error); // Still enter driving stage so user can see at least some UI

        _this32.EnterDrivingToDestinationStage();

        _this32.canCheck = true; // Show a less alarming message to the user

        const toast = yield _this32.toastController.create({
          message: 'Some ride details couldn\'t be loaded. Your ride is still active.',
          duration: 3000
        });
        toast.present();
      }
    })();
  } // Improve handleRideStop to better handle map errors


  handleRideStop(docSnapshot) {
    var _this33 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Handling ride stop...'); // If already processed, exit immediately

        if (_this33.isRideStopProcessed) {
          console.log('Ride stop already processed, exiting function');
          return;
        } // Set flag immediately to prevent re-processing


        _this33.isRideStopProcessed = true; // Stop all location polling and mapping activities immediately

        _this33.stopPolling = true; // Unsubscribe from route updates first

        if (_this33.routeUpdateSubscription) {
          _this33.routeUpdateSubscription.unsubscribe();

          _this33.routeUpdateSubscription = null;
        } // Then clear other subscriptions


        _this33.clearSubscriptions(); // Force removal of all map elements with multiple attempts if needed


        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            yield _this33.clearPrevMarkers();
            yield _this33.clearAllPolylines();
            break; // Exit loop if successful
          } catch (e) {
            console.error(`Map cleanup attempt ${attempt + 1} failed:`, e); // Short delay before retry

            yield new Promise(resolve => setTimeout(resolve, 100));
          }
        } // Prepare ride data with proper fallbacks for required fields


        const docData = docSnapshot.data ? docSnapshot.data() : docSnapshot;
        const tripId = docSnapshot.id || _this33.requestID;
        const rideData = {
          tripId: tripId || '',
          driverId: docData?.driverDetails?.Driver_id || _this33.driverInfo?.Driver_id || '',
          driverName: docData?.driverDetails?.Driver_name || _this33.driverInfo?.Driver_name || 'Unknown Driver',
          driverImage: docData?.driverDetails?.Driver_imgUrl || _this33.driverInfo?.Driver_imgUrl || '',
          driverCar: docData?.driverDetails?.Driver_car || _this33.driverInfo?.Driver_car || '',
          driverPlate: docData?.driverDetails?.Driver_plate || _this33.driverInfo?.Driver_plate || '',
          pickup: docData?.Rider_Location || _this33.locationAddress || 'Unknown pickup',
          destination: docData?.Rider_Destination || _this33.destinationAddress || 'Unknown destination',
          price: docData?.price || _this33.price || 0,
          distance: docData?.distance || _this33.distance || 0,
          duration: docData?.duration || _this33.duration || '',
          rating: docData?.driverDetails?.Driver_rating || _this33.driverInfo?.Driver_rating || 0,
          completed: true,
          completedAt: new Date()
        }; // CRITICAL: Clear ride state from storage BEFORE showing modal

        try {
          yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__.Preferences.remove({
            key: _this33.RIDE_STATE_KEY
          });
          console.log('Cleared ride state from storage');
        } catch (e) {
          console.warn('Error clearing storage:', e);
        } // Reset ride properties BEFORE showing modal


        _this33.rideHasStarted = false;
        _this33.driverLocation = null;
        _this33.lastHandledState = null;
        console.log('Showing trip summary with data:', rideData); // Show the trip summary

        const modal = yield _this33.modalCtrl.create({
          component: _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_8__.TripSummaryComponent,
          componentProps: {
            rideData
          }
        });
        yield modal.present(); // Clean up once modal is dismissed

        modal.onDidDismiss().then(() => {
          console.log('Trip summary dismissed, resetting state');
          _this33.isRideStopProcessed = false; // Reset the flag

          _this33.clearRideState(); // Additional cleanup


          _this33.ReturnHome(); // Return to booking view

        });
      } catch (error) {
        console.error('Error in handleRideStop:', error);
        _this33.isRideStopProcessed = false;

        _this33.ReturnHome();
      }
    })();
  } // Add this method for more thorough ride state cleanup


  clearRideState() {
    console.log('Clearing ride state completely'); // First clear all subscriptions

    this.clearSubscriptions(); // Reset all ride-related properties

    this.requestID = null;
    this.driverInfo = null;
    this.currentDriver = null;
    this.driver_marker = null;
    this.rider_marker = null;
    this.destinationMarker = null;
    this.routePolyline = null;
    this.routePath = null;
    this.newPoly = null;
    this.animatedMarker = null;
    this.driverLocation = null;
    this.isRideStopProcessed = false; // Reset stage-related properties

    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.drivingToDestinationStage = false;
    this.mapPinStage = false; // Set default stage

    this.EnterBookingStage(); // Stop polling

    this.stopPolling = false; // Re-enable map interactions if needed

    if (this.map && this.map.newMap) {
      this.map.newMap.enableCurrentLocation(true);
      this.map.newMap.enableTouch();
    }
  }

  handleRideConfirmation(docOrData) {
    var _this34 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Starting ride confirmation handling...', docOrData);

        _this34.stopCountdown(); // Clear existing markers and polylines


        yield Promise.all([_this34.clearPrevMarkers(), _this34.clearPolyline(_this34.newPoly)]); // Get the ride data

        let rideData;
        let docId;

        if (!docOrData) {
          throw new Error('Invalid input: null or undefined');
        } // Handle different input types


        if (typeof docOrData.data === 'function') {
          // It's a Firebase DocumentSnapshot
          rideData = docOrData.data();
          docId = docOrData.id;
        } else {
          // It's already a data object from currentRide.data()
          rideData = docOrData;
          docId = _this34.requestID; // Use the current requestID if available
        }

        if (!rideData) {
          throw new Error('No ride data found');
        } // Update ride information


        _this34.requestID = docId || rideData.requestId;
        _this34.driverInfo = rideData.driverDetails; // Set driver information for UI display to avoid template errors

        if (_this34.driverInfo) {
          _this34.carname = _this34.driverInfo.Driver_car || 'Unknown Car';
          _this34.driverImage = _this34.driverInfo.Driver_imgUrl || 'assets/icon/profile.png';
          _this34.driver_ID = _this34.driverInfo.Driver_id;
          _this34.driver_number_of_seats = _this34.driverInfo.seats || 4;
          _this34.driver_duration_apart = _this34.driverInfo.duration ? Math.ceil(_this34.driverInfo.duration / 60000) : 0;
        } // Set locations


        _this34.LatLng = {
          lat: rideData.Loc_lat,
          lng: rideData.Loc_lng
        };
        _this34.D_LatLng = {
          lat: rideData.Des_lat,
          lng: rideData.Des_lng
        }; // Initialize map if not already initialized

        if (!_this34.map.newMap) {
          yield _this34.initializeMap();
        } // Get and wait for driver location


        if (!_this34.driverInfo?.Driver_id) {
          console.warn('Driver ID not found in driver details, using fallback location'); // Use fallback location from driver details

          _this34.driverLocation = {
            lat: _this34.driverInfo?.Driver_lat || _this34.driverInfo?.driver_lat,
            lng: _this34.driverInfo?.Driver_lng || _this34.driverInfo?.driver_lng
          };
        } else {
          try {
            yield _this34.getDriverLocation(_this34.driverInfo.Driver_id);
          } catch (locationError) {
            console.warn('Error getting real-time driver location, using fallback:', locationError); // Use fallback location from driver details

            _this34.driverLocation = {
              lat: _this34.driverInfo?.Driver_lat || _this34.driverInfo?.driver_lat,
              lng: _this34.driverInfo?.Driver_lng || _this34.driverInfo?.driver_lng
            };
          }
        }

        if (!_this34.driverLocation?.lat || !_this34.driverLocation?.lng) {
          throw new Error('Unable to determine driver location');
        }

        _this34.DriverLatLng = {
          lat: _this34.driverLocation.lat,
          lng: _this34.driverLocation.lng
        };
        console.log('Driver location set:', _this34.DriverLatLng); // Set map height and add event listener

        _this34.setMapHeightHandleDrivertoRider();

        window.addEventListener('resize', _this34.setMapHeightHandleDrivertoRider.bind(_this34)); // Initialize the map view with driver and rider markers

        yield _this34.handleDriverToRider(_this34.DriverLatLng, _this34.LatLng); // Update UI state

        _this34.EnterTrackingStage(); // Save ride state to local storage


        yield _this34.saveRideStateToStorage();
        console.log('Ride confirmation handled successfully');
        return true;
      } catch (error) {
        console.error('Error handling ride confirmation:', error);
        return false;
      }
    })();
  } // Add this method to save ride state to storage


  saveRideStateToStorage() {
    var _this35 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const rideState = {
          requestID: _this35.requestID,
          driverInfo: _this35.driverInfo,
          LatLng: _this35.LatLng,
          D_LatLng: _this35.D_LatLng,
          DriverLatLng: _this35.DriverLatLng,
          stage: _this35.getCurrentStage()
        };
        yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__.Preferences.set({
          key: 'RIDE_STATE',
          value: JSON.stringify(rideState)
        });
        console.log('Ride state saved successfully');
      } catch (error) {
        console.error('Error saving ride state:', error); // Don't throw the error as this is not critical
      }
    })();
  } // Update getDriverLocation to return a Promise<void> and handle errors better


  getDriverLocation(driverId) {
    if (!driverId) {
      return Promise.reject(new Error('No driver ID provided'));
    }

    console.log('Getting driver location for:', driverId);
    return this.database.getDriverLocation(driverId).then(location => {
      if (!location || !location.lat || !location.lng) {
        throw new Error('Invalid location data received');
      }

      console.log('Driver location received:', location);
      this.driverLocation = location;
    }).catch(error => {
      console.error('Error getting driver location:', error);
      throw error;
    });
  }

  EnterChat() {
    var _this36 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__.EnrouteChatComponent,
        componentProps: {
          userId: _this36.requestID,
          message: ""
        },
        swipeToClose: true
      };
      const modal = yield _this36.modalCtrl.create(options);
      return yield modal.present();
    })();
  }

  startCountdown(initialTime, requestId) {
    var _this37 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this37.countdownActive = true;
      let timeRemaining = initialTime;

      const updateCountdown = /*#__PURE__*/function () {
        var _ref10 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (!_this37.countdownActive) {
            console.log('Countdown stopped');
            return;
          }

          if (timeRemaining > 0) {
            try {
              yield _this37.database.UpdateCountDown(timeRemaining, requestId);
              timeRemaining--;
              setTimeout(updateCountdown, 1000);
            } catch (error) {
              console.error('Error updating countdown:', error); // Retry after a short delay

              setTimeout(updateCountdown, 2000);
            }
          } else {
            yield _this37.handleCountdownEnd(requestId);
            console.log('Countdown ended');
          }
        });

        return function updateCountdown() {
          return _ref10.apply(this, arguments);
        };
      }();

      updateCountdown();
    })();
  }

  handleCountdownEnd(requestId) {
    var _this38 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Implement a grace period to account for any delays
        setTimeout( /*#__PURE__*/(0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this38.clearPrevMarkers();
          yield _this38.requestNextDriver();
        }), 5000); // 5-second grace period
      } catch (error) {
        console.error('Error handling countdown end:', error); // Optionally, retry the operation or notify the user
      }
    })();
  }

  stopCountdown() {
    this.countdownActive = false;
  }

  goBackToAutoComplete() {
    var _this39 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this39.stopPolling = false; // Enable current location and set the camera to the initial position

        yield _this39.map.newMap.enableCurrentLocation(true);
        yield _this39.ResetState();
        yield _this39.showAutocompleteModal();
        console.log('Game state reset successfully');
      } catch (error) {
        console.error('Error resetting game state:', error);
      }
    })();
  }

  clearPrevMarkers() {
    var _this40 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if map is initialized
        if (!_this40.map || !_this40.map.newMap) {
          console.warn('Map not initialized when clearing markers');
          return; // Exit early if map is not available
        }

        console.log('Clearing all markers...'); // Clear individual markers with proper error handling

        const markers = [_this40.rider_marker, _this40.driver_marker, _this40.destinationMarker, _this40.marker1, _this40.marker2, _this40.animatedMarker];
        const clearPromises = markers.filter(marker => marker !== null && marker !== undefined).map(marker => _this40.clearMarker(marker).catch(e => {
          console.error('Error clearing specific marker:', e); // Continue despite error

          return null;
        }));
        yield Promise.all(clearPromises); // Reset all marker references

        _this40.rider_marker = null;
        _this40.driver_marker = null;
        _this40.destinationMarker = null;
        _this40.marker1 = null;
        _this40.marker2 = null;
        _this40.animatedMarker = null;
        console.log('All markers cleared successfully');
      } catch (e) {
        console.error('Error in clearPrevMarkers:', e); // Just log the error but don't throw, allowing the process to continue
      }
    })();
  } // Add this helper method for individual marker clearing


  clearMarker(marker) {
    var _this41 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!marker || !_this41.map?.newMap) return Promise.resolve();

      try {
        console.log('Clearing marker:', marker);
        yield _this41.map.newMap.removeMarker(marker);
        return true;
      } catch (error) {
        console.error('Error clearing marker:', error);
        return false;
      }
    })();
  } // Modify clearAllPolylines for safer handling


  clearAllPolylines() {
    var _this42 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this42.map || !_this42.map.newMap) {
          console.warn('Map not initialized when clearing polylines');
          return;
        }

        console.log('Clearing all polylines...'); // Try to clear specific polyline first

        if (_this42.newPoly) {
          try {
            yield _this42.map.newMap.removePolylines(_this42.newPoly);
            console.log('Specific polyline cleared');
          } catch (error) {
            console.error('Error clearing specific polyline:', error);
          }
        } // Reset reference


        _this42.newPoly = null;
      } catch (error) {
        console.error('Error in clearAllPolylines:', error); // Just log the error but don't throw
      }
    })();
  }

  ResetState() {
    var _this43 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Clear previous markers
        yield _this43.clearPrevMarkers(); // Clear any existing polylines

        yield _this43.clearPolyline(_this43.newPoly);
        yield _this43.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this43.LatLng
        });

        _this43.ResetMapHeight();

        window.addEventListener('resize', _this43.ResetMapHeight.bind(_this43));

        _this43.map.newMap.enableTouch(); // Ensure the map respects the boundaries of the top and bottom bars


        _this43.current_Request_Number = 0;
        _this43.price = null;
        _this43.actualDestination = null;
        _this43.D_LatLng = {
          lat: null,
          lng: null
        };
        _this43.destinationAddress = 'Unknown location';
        yield _this43.map.newMap.enableCurrentLocation(true);
      } catch (e) {
        throw new Error(e);
      }
    })();
  }

  showAutocompleteModal() {
    var _this44 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent,
        componentProps: {
          LatLng: _this44.LatLng,
          locationAddress: _this44.locationAddress
        },
        swipeToClose: true
      };
      const modal = yield _this44.modalCtrl.create(options);
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log('Modal dismissed with data:', data);
      _this44.data = data;

      if (data.pinOnMap) {
        _this44.EnterMapPinStage();

        _this44.mapPinDrag = true;
        _this44.stopPolling = true;
      }

      if (data.home) {
        console.log("Entering Booking Stage...");

        _this44.EnterBookingStage();

        _this44.stopPolling = false;

        _this44.ResetState();
      }

      if (data.searching) {
        _this44.database.AddKnownPlace(data);

        _this44.destinationAddress = data.full;
        _this44.actualDestination = data.whole.full;

        try {
          const latLng = yield _this44.geocode.getLatLng(data.whole.description).toPromise();
          _this44.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          console.log("Destination LatLng:", _this44.D_LatLng);
          yield _this44.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);

          _this44.overlay.showAlert('Error in geocoding:', error.message);
        }
      }
    })();
  }

  RequestRide(dat) {
    var _this45 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this45.NoDrivers) {
        _this45.destinationAddress = dat.place.full;
        _this45.actualDestination = dat.place.whole.full;

        try {
          const latLng = yield _this45.geocode.getLatLng(dat.place.whole.description).toPromise();
          _this45.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          yield _this45.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);

          _this45.overlay.showAlert('Check Your Network', error.message);
        }
      } else {
        _this45.EnterNoDriverStage();

        console.log("No drivers available");
      }
    })();
  }

  getDistanceAndDirections() {
    var _this46 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirections called");
      _this46.duration = null;
      yield _this46.clearMarkers();

      _this46.cleanupListeners();

      _this46.stopPolling = true;

      if (_this46.D_LatLng && _this46.D_LatLng.lat) {
        console.log("D_LatLng is set:", _this46.D_LatLng);

        if (!_this46.NoDrivers) {
          _this46.EnterConfirmStage();
        } else {
          _this46.EnterNoDriverStage();

          console.log("No drivers available");
          return;
        }

        const origin1 = new google.maps.LatLng(_this46.LatLng.lat, _this46.LatLng.lng);
        const origin2 = new google.maps.LatLng(_this46.D_LatLng.lat, _this46.D_LatLng.lng);
        const request = {
          origin: origin1,
          destination: origin2,
          travelMode: google.maps.TravelMode.DRIVING
        };

        _this46.geocode.directions.route(request, /*#__PURE__*/function () {
          var _ref12 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
            if (status === 'OK') {
              _this46.direction = response;
              _this46.distance = response.routes[0].legs[0].distance.value;
              _this46.bounds = response.routes[0].bounds;
              _this46.price = yield _this46.database.getPriceEstimate(_this46.distance);
              _this46.duration = response.routes[0].legs[0].duration.text;
              yield _this46.createAndAddMarkers(_this46.LatLng, _this46.D_LatLng); // Call getDistanceAndDirectionsDriver after this part is successful

              yield _this46.getDistanceAndDirectionsDriver();
            } else {
              console.error('Direction ERROR:', response);

              _this46.overlay.showAlert('Check Your Network', JSON.stringify(response));
            }
          });

          return function (_x4, _x5) {
            return _ref12.apply(this, arguments);
          };
        }());
      } else {
        _this46.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');

        console.error('D_LatLng or D_LatLng.lat is undefined');
      }
    })();
  }

  getDistanceAndDirectionsDriver() {
    var _this47 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirectionsDriver called");

      if (!_this47.NoDrivers) {
        console.log("Driver LatLng:", _this47.DriverLatLng);

        if (_this47.DriverLatLng) {
          const origin1 = new google.maps.LatLng(_this47.LatLng.lat, _this47.LatLng.lng);
          const origin2 = new google.maps.LatLng(_this47.DriverLatLng.lat, _this47.DriverLatLng.lng);
          const request = {
            origin: origin1,
            destination: origin2,
            travelMode: google.maps.TravelMode.DRIVING
          };

          _this47.geocode.directions.route(request, (response, status) => {
            if (status === 'OK') {
              _this47.D_duration = response.routes[0].legs[0].duration.text;
              console.log("Driver duration:", _this47.D_duration);
            } else {
              console.error('Direction ERROR:', response);

              _this47.overlay.showAlert('Direction ERROR:', JSON.stringify(response));
            }
          });
        } else {
          console.log("DriverLatLng is undefined");
        }
      } else {
        console.log("No drivers available");
      }
    })();
  }

  resetLocation() {
    var _this48 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this48.LatLng);
      yield _this48.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this48.LatLng
      });
      _this48.showResetLocationButton = false;
    })();
  }

  processAddressResponse(addressResponse) {
    console.log("processAddressResponse : " + addressResponse);

    if (addressResponse) {
      console.log(addressResponse);
      this.actualDestination = this.map.actualLocation;
      const results = addressResponse.results;

      if (results && results.length > 1 && results[1].geometry && results[1].geometry.location) {
        this.D_LatLng = {
          lat: results[1].geometry.location.lat,
          lng: results[1].geometry.location.lng
        };
        const addressComponents = results[1].address_components;

        if (addressComponents && addressComponents.length > 1) {
          this.destinationAddress = `${addressComponents[0].long_name} ${addressComponents[1].long_name}`;
          console.log("this is it " + this.destinationAddress);
        } else {
          console.log('Address components are missing or incomplete.');
          this.destinationAddress = 'Unknown address';
        }
      } else {
        console.log('Results are missing or incomplete.');
        this.D_LatLng = {
          lat: null,
          lng: null
        };
        this.destinationAddress = 'Unknown location';
      }
    } else {
      console.log('Failed to fetch address.');
      this.D_LatLng = {
        lat: null,
        lng: null
      };
      this.destinationAddress = 'Failed to fetch address';
    }
  }

  UpdateCarMarker(elements) {
    var _this49 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Elements to update car markers:', elements);
      const bounds = new google.maps.LatLngBounds(); // Create a map of driver IDs to driver elements for quick lookup

      const driverMap = new Map(elements.map(element => [element.Driver_id, element])); // Track markers to keep and update

      const updatedMarkers = []; // Remove markers that are not needed and update positions

      for (const {
        id,
        marker
      } of _this49._carmarkers) {
        const driver = driverMap.get(id);

        if (!driver || !driver.onlineState) {
          console.log(`Removing marker for driver ID: ${id}`);
          yield _this49.map.newMap.removeMarker(marker); // Remove the marker from the map
        } else if (driver.Driver_lat !== undefined && driver.Driver_lng !== undefined) {
          const latlng = {
            lat: driver.Driver_lat,
            lng: driver.Driver_lng
          }; // Remove old marker and add a new one with updated position

          yield _this49.map.newMap.removeMarker(marker); // updatedMarkers.push({ id, marker: newMarker });

          bounds.extend(latlng);
          console.log(`Updated marker for driver ID: ${id}`);
        } else {
          console.error('Invalid driver coordinates:', driver);
        }
      } // Add new markers for drivers that are online and not in the existing markers


      for (const element of elements) {
        if (element.onlineState) {
          const existingMarkerIndex = updatedMarkers.findIndex(({
            id
          }) => id === element.Driver_id);

          if (existingMarkerIndex === -1 && element.Driver_lat !== undefined && element.Driver_lng !== undefined) {
            const latlng = {
              lat: element.Driver_lat,
              lng: element.Driver_lng
            };
            console.log(`Adding new marker for driver ID: ${element.Driver_id} at`, latlng);

            try {// const marker = await this.map.newMap.addMarker({
              //   coordinate: latlng,
              //   iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
              //   title: 'Driver',
              //   iconSize: { width: 30, height: 30 }
              // });
              // if (marker) {
              //   updatedMarkers.push({ id: element.Driver_id, marker });
              //   bounds.extend(latlng);
              // }
            } catch (error) {
              console.error('Error adding marker:', error);
            }
          }
        }
      } // Update the _carmarkers array with the updated markers


      _this49._carmarkers = updatedMarkers; // Center the map around the car markers if there are any markers

      if (updatedMarkers.length > 0) {
        const mapDim = {
          height: _this49.mapRef.nativeElement.offsetHeight,
          width: _this49.mapRef.nativeElement.offsetWidth
        };
        const minZoom = 5; // Define your minimum zoom level

        const maxZoom = 18; // Define your maximum zoom level

        let zoomLevel = yield _this49.map.getBoundsZoomLevel(bounds, mapDim); // Constrain the zoom level within the min and max range

        zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));
        console.log('Setting camera with zoom level:', zoomLevel);
        yield _this49.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: zoomLevel,
          coordinate: bounds.getCenter()
        });

        _this49.map.newMap.fitBounds(bounds);
      } else {
        console.log('No markers to display on the map.');
      }
    })();
  }

  GoHome() {
    var _this50 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this50.map.newMap.enableCurrentLocation(true);
      _this50.current_Request_Number = 0;
      _this50.stopPolling = false;
      _this50.price = null;

      _this50.EnterBookingStage();

      yield _this50.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this50.LatLng
      });
    })();
  }

  GotoSupport() {
    var _this51 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this51.nav.navigateForward('support');
    })();
  }

  ReturnHome() {
    var _this52 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this52.ResetState();

      _this52.EnterBookingStage();

      _this52.stopPolling = false;
      yield _this52.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this52.LatLng
      });
    })();
  }

  CancelRide() {
    var _this53 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this53.overlay.showLoader('Cancelling your ride...');

        yield _this53.clearPrevMarkers();
        yield _this53.clearPolyline(_this53.newPoly);

        _this53.unsubscribe();

        _this53.numCalls.unsubscribe();

        _this53.riderCleared = true;
        yield _this53.database.cancelRide(_this53.requestID);
        yield _this53.map.newMap.enableCurrentLocation(true);
        _this53.current_Request_Number = 0;
        _this53.price = null;

        _this53.EnterBookingStage();

        _this53.overlay.hideLoader();

        yield _this53.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this53.LatLng
        });
        yield _this53.clearRideState();
      } catch (error) {
        _this53.overlay.hideLoader();

        console.error('Error cancelling ride:', error);

        _this53.overlay.showAlert('Error', 'Failed to cancel ride. Please try again.');
      }
    })();
  }

  ClearRide() {
    var _this54 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = _this54.auth.currentUser;

        if (user) {
          const riderDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.doc)(_this54.firestore, 'Riders', user.uid);
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.updateDoc)(riderDocRef, {
            currentRequestId: null
          });
        }
      } catch (error) {
        console.error('Error clearing ride state:', error);
      }

      _this54.EnterBookingStage();

      yield _this54.clearPrevMarkers();
      yield _this54.clearPolyline(_this54.newPoly);
      _this54.newPoly = null;
      yield _this54.map.newMap.enableCurrentLocation(true);
      _this54.current_Request_Number = 0;
      _this54.price = null;
      yield _this54.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this54.LatLng,
        bearing: 0
      });
    })();
  }

  CallDriver() {// Implement CallDriver logic

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  handleDriverToRider(driverLatLng, riderLatLng) {
    var _this55 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 15,
        y: 30
      }; // Center bottom of the icon

      try {
        // Cancel any existing route update subscription first
        if (_this55.routeUpdateSubscription) {
          _this55.routeUpdateSubscription.unsubscribe();

          _this55.routeUpdateSubscription = null;
        } // Check if map is initialized, if not initialize it


        if (!_this55.map.newMap) {
          console.log('Map not initialized, initializing now...');
          yield _this55.initializeMap();
        } // Thoroughly clean up previous visual elements


        yield _this55.clearPrevMarkers();
        yield _this55.clearAllPolylines(); // Use the unified height method and ensure proper positioning

        _this55.setMapContainerHeight(20); // Add driver marker at the starting position with adjusted z-index


        const driverMarker = yield _this55.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          zIndex: 10 // Ensure marker appears above polylines

        });
        _this55.driver_marker = driverMarker; // Add rider marker with higher z-index

        const riderMarker = yield _this55.map.newMap.addMarker({
          coordinate: riderLatLng,
          iconUrl: _this55.database.user?.photoURL || 'assets/icon/person.png',
          title: 'Rider',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          zIndex: 11 // Higher than driver marker

        });
        _this55.rider_marker = riderMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref13 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: riderLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this55.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref14 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this55.duration = response.routes[0].legs[0].duration.text;
                  _this55.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this55.duration}, Distance: ${_this55.distance}`);
                  const locs = [{
                    geoCode: {
                      latitude: driverLatLng.lat,
                      longitude: driverLatLng.lng
                    }
                  }, {
                    geoCode: {
                      latitude: riderLatLng.lat,
                      longitude: riderLatLng.lng
                    }
                  }];

                  const center = _this55.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(riderLatLng.lat, riderLatLng.lng));
                  const availableHeight = _this55.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this55.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level

                  const zoomLevel = _this55.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

                  yield _this55.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this55.map.calculateBearing(driverLatLng, riderLatLng)); // Clear existing polyline before drawing a new one

                  yield _this55.clearAllPolylines();
                  yield _this55.addPolyline(driverLatLng, riderLatLng); // Clear any existing animated marker before starting a new animation

                  if (_this55.animatedMarker) {
                    yield _this55.map.newMap.removeMarker(_this55.animatedMarker);
                    _this55.animatedMarker = null;
                  } // Animate the driver marker along the path to the rider


                  yield _this55.animateMarker(_this55.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);

                  _this55.overlay.showAlert('Direction ERROR', JSON.stringify(response));
                }
              });

              return function (_x6, _x7) {
                return _ref14.apply(this, arguments);
              };
            }());
          });

          return function updateRoute() {
            return _ref13.apply(this, arguments);
          };
        }(); // Start updating the route periodically


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.interval)(_this55.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this55.routeUpdateSubscription = routeUpdate$.subscribe();
      } catch (error) {
        console.error('Error handling driver to rider:', error);
      }
    })();
  } // Update clearPolyline to handle null map


  clearPolyline(polylineId) {
    var _this56 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!polylineId || !_this56.map?.newMap) return;

      try {
        yield _this56.map.newMap.removePolylines(polylineId);
      } catch (error) {
        console.error('Error clearing polyline:', error);
      }
    })();
  }

  handleRiderToDestination(driverLatLng, destinationLatLng) {
    var _this57 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon

      try {
        // Cancel any existing route update subscription first
        if (_this57.routeUpdateSubscription) {
          _this57.routeUpdateSubscription.unsubscribe();

          _this57.routeUpdateSubscription = null;
        } // Check if map is initialized, if not initialize it


        if (!_this57.map.newMap) {
          console.log('Map not initialized, initializing now...');
          yield _this57.initializeMap();
        } // Reset map position and apply proper height first


        _this57.mapRef.nativeElement.style.top = '0';

        _this57.setMapHeightHandleDrivertoDestination(); // Thoroughly clean up previous visual elements


        yield _this57.clearPrevMarkers();
        yield _this57.clearAllPolylines(); // Update driver marker to driver's current position

        const driverMarker = yield _this57.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          },
          zIndex: 10 // Higher z-index to appear above polyline

        });
        _this57.driver_marker = driverMarker; // Add destination marker

        const destinationMarker = yield _this57.map.newMap.addMarker({
          coordinate: destinationLatLng,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          },
          zIndex: 11 // Higher z-index than driver marker

        });
        _this57.destinationMarker = destinationMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref15 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: destinationLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this57.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref16 = (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this57.duration = response.routes[0].legs[0].duration.text;
                  _this57.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this57.duration}, Distance: ${_this57.distance}`);
                  const locs = [{
                    geoCode: {
                      latitude: driverLatLng.lat,
                      longitude: driverLatLng.lng
                    }
                  }, {
                    geoCode: {
                      latitude: destinationLatLng.lat,
                      longitude: destinationLatLng.lng
                    }
                  }];

                  const center = _this57.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng));
                  const availableHeight = _this57.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this57.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level

                  const zoomLevel = _this57.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
                  // Set the camera to focus on the center point with appropriate zoom level

                  yield _this57.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this57.map.calculateBearing(driverLatLng, destinationLatLng)); // Clear existing polyline before drawing a new one

                  yield _this57.clearAllPolylines();
                  yield _this57.addPolyline(driverLatLng, destinationLatLng); // Clear any existing animated marker before starting a new animation

                  if (_this57.animatedMarker) {
                    yield _this57.map.newMap.removeMarker(_this57.animatedMarker);
                    _this57.animatedMarker = null;
                  } // Animate the driver marker along the path to the destination


                  yield _this57.animateMarker(_this57.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);

                  _this57.overlay.showAlert('Direction ERROR', JSON.stringify(response));
                }
              });

              return function (_x8, _x9) {
                return _ref16.apply(this, arguments);
              };
            }());
          });

          return function updateRoute() {
            return _ref15.apply(this, arguments);
          };
        }(); // Start updating the route periodically


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.interval)(_this57.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this57.routeUpdateSubscription = routeUpdate$.subscribe();
      } catch (error) {
        console.error('Error handling rider to destination:', error);
      }
    })();
  }

  addPolyline(loc, des) {
    var _this58 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const polylineColor = "#007bff";
        const polylines = [{
          path: [{
            lat: loc.lat,
            lng: loc.lng
          }, {
            lat: des.lat,
            lng: des.lng
          }],
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }];
        const addedPolylines = yield _this58.map.newMap.addPolylines(polylines);

        if (Array.isArray(addedPolylines) && addedPolylines.length > 0) {
          _this58.newPoly = addedPolylines; // Change to assign the entire array

          console.log('Polylines added:', _this58.newPoly);
          return _this58.newPoly;
        } else {
          throw new Error('Failed to add polyline: Unexpected response format');
        }
      } catch (e) {
        console.error('Error Adding Polyline: ', e);
        throw e; // Re-throw the error to be handled by the caller
      }
    })();
  }

  createAndAddMarkers(loc, des) {
    var _this59 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon

      try {
        _this59.map.newMap.disableTouch(); // Add start marker


        _this59.marker1 = yield _this59.map.newMap.addMarker({
          coordinate: loc,
          iconUrl: 'assets/icon/point.png',
          title: 'Start',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        }); // Add destination marker

        _this59.marker2 = yield _this59.map.newMap.addMarker({
          coordinate: des,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        }); // Calculate the center point between the start and destination

        const locs = [{
          geoCode: {
            latitude: loc.lat,
            longitude: loc.lng
          }
        }, {
          geoCode: {
            latitude: des.lat,
            longitude: des.lng
          }
        }];

        const center = _this59.map.calculateCenter(locs); // Calculate the bounds


        const bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
        bounds.extend(new google.maps.LatLng(des.lat, des.lng)); // Set map height before calculating zoom level

        _this59.setMapHeight();

        const availableHeight = _this59.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

        const mapDim = {
          height: availableHeight,
          width: _this59.mapRef.nativeElement.offsetWidth
        }; // Calculate zoom level

        const zoomLevel = _this59.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


        const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
        // Set the camera to focus on the center point with appropriate zoom level

        yield _this59.map.setCameraToLocation({
          lat: center.latitude,
          lng: center.longitude
        }, adjustedZoomLevel, _this59.map.calculateBearing(loc, des)); // Add polyline for the route

        const polylineColor = "#007bff";
        const polylines = [{
          path: [{
            lat: loc.lat,
            lng: loc.lng
          }, {
            lat: des.lat,
            lng: des.lng
          }],
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }]; // Add polyline to the map

        _this59.newPoly = yield _this59.map.newMap.addPolylines(polylines);
      } catch (error) {
        console.error('Error creating and adding markers:', error);
      }
    })();
  } // Update the animateMarker method to properly handle cleanup


  animateMarker(marker, path, iconUrl) {
    var _this60 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 50,
        height: 50
      };
      const iconAnchor = {
        x: 25,
        y: 50
      }; // Center bottom of the icon
      // Remove any existing animated marker

      if (_this60.animatedMarker) {
        yield _this60.map.newMap.removeMarker(_this60.animatedMarker);
        _this60.animatedMarker = null;
      }

      let lastMarker = null;

      for (let i = 0; i < path.length; i++) {
        // Remove previous animation step marker if it exists
        if (lastMarker) {
          yield _this60.map.newMap.removeMarker(lastMarker);
        } // Remove the original marker for the first frame of animation


        if (i === 0) {
          yield _this60.map.newMap.removeMarker(marker);
        }

        const coordinate = path[i] instanceof google.maps.LatLng ? {
          lat: path[i].lat(),
          lng: path[i].lng()
        } : {
          lat: path[i].lat,
          lng: path[i].lng
        };
        lastMarker = yield _this60.map.newMap.addMarker({
          coordinate: coordinate,
          iconUrl: iconUrl,
          title: 'Moving Marker',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          },
          zIndex: 20 // Higher than other markers

        });
        yield new Promise(resolve => setTimeout(resolve, 100)); // Adjust the interval as needed
      } // Store the last position of the animated marker


      _this60.animatedMarker = lastMarker;
    })();
  }

  ShowDriverInfoPop() {
    var _this61 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this61.alert.create({
        header: 'Driver Information',
        message: `
      <div style="text-align: center;">
        <h2 style="font-size: 1.2em; margin-bottom: 0.5em;">Car Name: ${_this61.carname}</h2>
        <div style="margin: 10px 0;">
          <img src="${_this61.driverImage}" alt="Driver Image" style="width: 60px; height: 60px; border-radius: 50%;">
        </div>
        <p><strong>Duration Apart:</strong> ${_this61.driver_duration_apart} minutes</p>
        <p><strong>Driver ID:</strong> ${_this61.driver_ID}</p>
        <p><strong>Number of Seats:</strong> ${_this61.driver_number_of_seats}</p>
        <p><strong>Driver Location:</strong> (${_this61.DriverLatLng.lat}, ${_this61.DriverLatLng.lng})</p>
      </div>
    `,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  } // State management methods


  EnterBookingStage() {
    this.setStage(this.STAGES.BOOKING);
  }

  EnterMapPinStage() {
    this.setStage(this.STAGES.MAP_PIN);
  }

  EnterConfirmStage() {
    this.setStage(this.STAGES.CONFIRM);
  }

  EnterSearchingStage() {
    this.setStage(this.STAGES.SEARCHING);
  }

  EnterNoDriverStage() {
    this.setStage(this.STAGES.NO_DRIVER);
  }

  EnterTrackingStage() {
    this.setStage(this.STAGES.TRACKING);
  }

  EnterDrivingToDestinationStage() {
    this.setStage(this.STAGES.DRIVING);
  }

  setStage(stage) {
    // Reset all stages first
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.drivingToDestinationStage = false;
    this.noDriverStage = false;
    this.mapPinStage = false; // Set the appropriate stage without calling Enter methods

    switch (stage) {
      case this.STAGES.BOOKING:
        this.bookingStage = true;
        break;

      case this.STAGES.CONFIRM:
        this.confirmStage = true;
        break;

      case this.STAGES.TRACKING:
        this.trackingStage = true;
        break;

      case this.STAGES.SEARCHING:
        this.searchingStage = true;
        break;

      case this.STAGES.DRIVING:
        this.drivingToDestinationStage = true;
        break;

      case this.STAGES.NO_DRIVER:
        this.noDriverStage = true;
        break;

      case this.STAGES.MAP_PIN:
        this.mapPinStage = true;
        break;
    }
  }

  getCurrentStage() {
    if (this.bookingStage) return this.STAGES.BOOKING;
    if (this.confirmStage) return this.STAGES.CONFIRM;
    if (this.trackingStage) return this.STAGES.TRACKING;
    if (this.searchingStage) return this.STAGES.SEARCHING;
    if (this.drivingToDestinationStage) return this.STAGES.DRIVING;
    if (this.noDriverStage) return this.STAGES.NO_DRIVER;
    if (this.mapPinStage) return this.STAGES.MAP_PIN;
    return this.STAGES.BOOKING; // default
  }

  ngOnInit() {
    // ... existing code ...
    // Check for "book again" navigation state
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras.state) {
      const state = navigation.extras.state;
      console.log('Navigation state received:', state);

      if (state['bookAgain']) {
        // Wait for the map to be ready
        this.mapLoadedSubscription = this.mapLoadedSubject.subscribe(loaded => {
          if (loaded) {
            setTimeout(() => {
              console.log('Processing book again data:', state);
              this.processBookAgainData(state);
            }, 1000); // Small delay to ensure map is fully ready
          }
        });
      }
    } // ... existing code ...

  }

  processBookAgainData(state) {
    var _this62 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Setting up rebooking with data:', state); // Set pickup location

        if (state.pickup && state.pickup.address) {
          _this62.locationAddress = state.pickup.address;

          if (state.pickup.lat && state.pickup.lng) {
            _this62.LatLng = {
              lat: state.pickup.lat,
              lng: state.pickup.lng
            }; // Add location marker

            yield _this62.addLocationMarker(_this62.LatLng);
          } else {
            // If no coordinates, geocode the address
            const coords = yield _this62.geocodeService.geocodeAddress(state.pickup.address);

            if (coords) {
              _this62.LatLng = coords;
              yield _this62.addLocationMarker(coords);
            }
          }
        } // Set destination


        if (state.destination && state.destination.address) {
          _this62.destinationAddress = state.destination.address;

          if (state.destination.lat && state.destination.lng) {
            _this62.D_LatLng = {
              lat: state.destination.lat,
              lng: state.destination.lng
            }; // Add destination marker

            yield _this62.addDestinationMarker(_this62.D_LatLng);
          } else {
            // If no coordinates, geocode the address
            const coords = yield _this62.geocodeService.geocodeAddress(state.destination.address);

            if (coords) {
              _this62.D_LatLng = coords;
              yield _this62.addDestinationMarker(coords);
            }
          }
        } // If both locations are set, calculate route


        if (_this62.LatLng && _this62.D_LatLng) {
          yield _this62.drawRoute();
          yield _this62.calculatePrice();

          _this62.EnterConfirmStage();
        }
      } catch (error) {
        console.error('Error processing book again data:', error); // Show error toast

        const toast = yield _this62.toastCtrl.create({
          message: 'Could not load previous ride data. Please try again.',
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        toast.present();
      }
    })();
  }

}

HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_network_service__WEBPACK_IMPORTED_MODULE_10__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_11__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_12__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_geocode_service__WEBPACK_IMPORTED_MODULE_13__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_14__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_15__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ActionSheetController));
};

HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["app-home"]],
  viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c3, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.mapRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.topBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.bottomBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    }
  },
  decls: 29,
  vars: 20,
  consts: [[1, "ion-no-border", 2, "position", "relative", "z-index", "1000", 3, "translucent"], ["class", "ion-padding", 4, "ngIf"], ["lines", "none", "color", "light", "class", "main-buttons ion-no-padding", "class", "top_bar", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "top: 35px;", 4, "ngIf"], ["vertical", "top", "horizontal", "end", "style", "top: 35px;", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "top: 35px;", 3, "click", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], ["scroll-y", "false", 3, "fullscreen"], [2, "z-index", "1"], ["map", ""], ["vertical", "bottom", "horizontal", "end", "style", "bottom: 130px;", 4, "ngIf"], ["class", "centerPin", "vertical", "center", "horizontal", "center", "style", "z-index: 1000;", 4, "ngIf"], ["bottomBar", ""], ["class", "bottomItems shadow-top", "lines", "full", 4, "ngIf"], ["lines", "full", 1, "bottomItems", "shadow-top", 3, "hidden"], [1, "ion-margin-horizontal", "ion-margin-bottom"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "end", "name", "arrow-forward"], ["class", "bottomItems shadow-top", "lines", "none", 4, "ngIf"], [1, "ion-padding"], ["slot", "start"], ["shape", "round", 3, "click"], ["slot", "icon-only", "name", "arrow-back", "color", "tertiary"], ["slot", "end"], ["fill", "outline", "color", "primary", "lines", "none", 1, "duration"], ["slot", "icon-only", "name", "flag", "color", "primary"], ["color", "primary", 4, "ngIf"], ["color", "primary"], ["lines", "none", "color", "light", 1, "top_bar", 3, "click"], ["slot", "start", "color", "primary", "name", "pencil"], ["vertical", "top", "horizontal", "start", 2, "top", "35px"], ["color", "light"], ["vertical", "top", "horizontal", "end", 2, "top", "35px", 3, "click"], ["color", "primary", "name", "chatbubble-ellipses"], ["vertical", "top", "horizontal", "start", 2, "top", "35px", 3, "click"], ["name", "arrow-back", "color", "primary"], [1, "ion-text-center"], ["vertical", "bottom", "horizontal", "end", 2, "bottom", "130px"], ["color", "light", 3, "click"], ["name", "locate"], ["vertical", "center", "horizontal", "center", 1, "centerPin", 2, "z-index", "1000"], ["src", "../../assets/icon/pin.png"], ["lines", "full", 1, "bottomItems", "shadow-top"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "disabled", "click"], ["slot", "start", "name", "search", "color", "primary"], ["lines", "none", 1, "bottomItems", "shadow-top"], [2, "margin", "0 auto"], ["src", "../../assets/imgs/No connection-pana.svg"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "arrow-back"], [1, "ride-confirmation-card"], ["class", "ride-details", 4, "ngIf"], ["class", "ride-details skeleton", 4, "ngIf"], [1, "payment-selector"], ["lines", "none"], ["name", "wallet-outline", "slot", "start", "color", "primary"], ["interface", "popover", 3, "value", "ionChange"], ["value", "cash"], ["name", "cash-outline"], [3, "value", 4, "ngFor", "ngForOf"], [1, "book-button-container"], ["shape", "round", "color", "primary", "size", "large", "expand", "block", 1, "book-ride-btn", 3, "click"], ["slot", "start", "name", "checkmark-sharp", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], [4, "ngIf"], [1, "ride-details"], [1, "vehicle-info", 3, "click"], ["src", "../../assets/icon/hatchback.png"], [1, "vehicle-details"], ["name", "information-circle", "color", "primary"], [1, "vehicle-stats"], ["name", "time", "color", "primary"], ["name", "person", "color", "primary"], [1, "price-tag"], [1, "original-price"], [1, "ride-details", "skeleton"], [1, "vehicle-info"], [3, "animated"], [2, "width", "130px", 3, "animated"], [2, "width", "60px", 3, "animated"], [3, "value"], ["name", "card-outline"], ["slot", "start", "name", "checkmark-sharp"], ["color", "light", "type", "indeterminate"], [3, "src"], ["fill", "outline", "shape", "round", "color", "danger", "size", "small", "type", "submit", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "slot", "icon-only", "name", "close-sharp", "color", "danger"], ["color", "primary", "type", "indeterminate", 1, "ion-padding"], [1, "card"], ["lines", "none", 1, "driver-card-item"], ["slot", "end", 1, "driver-avatar-container"], [1, "driver-rating"], ["color", "warning", "name", "star"], ["slot", "end", 1, "price-container"], [1, "driver-actions-accordion"], ["value", "first"], ["slot", "header", 1, "accordion-header"], ["slot", "content", 1, "accordion-content"], ["shape", "round", "size", "large", "expand", "block", 1, "main-button", 3, "click"], ["color", "primary", "slot", "start", "name", "person"], ["color", "primary", "slot", "start", "name", "chatbubbles"], ["color", "primary", "slot", "start", "name", "close"], ["color", "primary", "name", "cash"], ["color", "primary", "name", "card"], ["color", "secondary", "name", "star"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, HomePage_ion_toolbar_1_Template, 10, 1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, HomePage_ion_item_2_Template, 4, 1, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, HomePage_ion_fab_3_Template, 3, 0, "ion-fab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, HomePage_ion_fab_4_Template, 3, 0, "ion-fab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, HomePage_ion_fab_5_Template, 3, 0, "ion-fab", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, HomePage_ion_toolbar_6_Template, 3, 1, "ion-toolbar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, HomePage_ion_toolbar_7_Template, 3, 1, "ion-toolbar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "ion-content", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "capacitor-google-maps", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, HomePage_ion_fab_11_Template, 3, 0, "ion-fab", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, HomePage_ion_fab_12_Template, 3, 0, "ion-fab", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "ion-footer", 0)(14, "div", null, 12)(16, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, HomePage_ion_list_17_Template, 6, 2, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "ion-list", 14)(19, "ion-item-group", 15)(20, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_20_listener() {
        return ctx.getDistanceAndDirections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, HomePage_ion_list_24_Template, 9, 0, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, HomePage_ion_list_25_Template, 19, 7, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, HomePage_ion_list_26_Template, 15, 3, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, HomePage_ion_list_27_Template, 46, 9, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](28, HomePage_ion_list_28_Template, 42, 9, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.trackingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.drivingToDestinationStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.bookingStage && ctx.showResetLocationButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", !ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.destinationAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.noDriverStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.searchingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.trackingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.drivingToDestinationStage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.SelectValueAccessor],
  styles: ["capacitor-google-maps[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.8s;\n}\n\n.bottomItems[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-header[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 0vh;\n  background: transparent;\n  display: block;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 20px 20px;\n  padding-bottom: 0vh;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n  --inner-padding-bottom: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  position: relative;\n  --background: transparent;\n  margin-top: 20px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  background: transparent;\n  display: block;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0 0;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  --background: transparent !important;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-padding-bottom: 1px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: transparent !important;\n}\n\n.centerElem[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: 0.5;\n}\n\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.top_bar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.main-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%] {\n  min-height: 150px;\n  height: auto;\n  max-height: 80vh;\n  overflow-y: auto;\n  transition: height 0.3s ease;\n  padding: 16px;\n  margin-bottom: env(safe-area-inset-bottom, 0px);\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 24px 24px 0 0;\n}\n\n.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%], .bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 200px;\n}\n\n.bottomItems.shadow-top[ngIf=searchingStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 180px;\n}\n\n.bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 250px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-radius: 16px;\n  margin-bottom: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  margin: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-radius: 16px;\n  background: var(--ion-color-light);\n  overflow: hidden;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: transparent;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  --padding-start: 0;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 16px;\n  --border-radius: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\nion-progress-bar[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 4px;\n  margin: 8px 0;\n}\n\nion-progress-bar[type=indeterminate][_ngcontent-%COMP%] {\n  --progress-background: var(--ion-color-primary);\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --border-radius: 8px;\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --border-radius: 20px;\n  height: 40px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border: 2px solid var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border: 2px solid var(--ion-color-primary);\n  position: relative;\n  overflow: visible;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 14px;\n  height: 14px;\n  background: var(--ion-color-success);\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child) {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  border-radius: 12px;\n  margin: 8px 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child)   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child)   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash]), .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card]) {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  border-radius: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header.ion-margin-bottom[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-radius: 16px;\n  margin-bottom: 16px !important;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header.ion-margin-bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  overflow: hidden;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  --border-radius: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 0;\n  --border-width: 1px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child {\n  --background: rgba(var(--ion-color-danger-rgb), 0.1);\n  --color: var(--ion-color-danger);\n  --border-color: var(--ion-color-danger);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger) !important;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(var(--ion-color-primary-rgb), 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(var(--ion-color-primary-rgb), 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(var(--ion-color-primary-rgb), 0);\n  }\n}\n\n.bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=searchingStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], .bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=trackingStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], .bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  animation: pulse 2s infinite;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%] {\n  max-height: calc(40vh - 20px);\n  overflow-y: auto;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-radius: 16px;\n  background: var(--ion-color-light);\n  overflow: hidden;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --min-height: 48px;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --min-height: 42px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 2px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  padding: 8px;\n  min-height: unset;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%]   .ion-margin-bottom[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   .ion-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\nion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n\nion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin-bottom: 4px;\n  height: auto;\n}\n\n.driver-card-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0;\n  margin-bottom: 8px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 60px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 4px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   .driver-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   .driver-rating[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n\n.price-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  min-width: 70px;\n}\n\n.price-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-content[_ngcontent-%COMP%] {\n  padding: 8px 16px 16px;\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin: 0 16px 16px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.bottomItems[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px 16px 0 0;\n  padding: 16px;\n  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .ride-details[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .ride-details.skeleton[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]:active {\n  background: #eef0f2;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 4px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 18px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  font-size: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-left: 8px;\n  flex-shrink: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 2px;\n  color: var(--ion-color-primary);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  color: var(--ion-color-medium);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  text-decoration-color: var(--ion-color-danger);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n  --padding-start: 12px;\n  --padding-end: 8px;\n  --min-height: 54px;\n  border-radius: 12px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  min-width: 130px;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n  --padding-end: 12px;\n  --placeholder-opacity: 1;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  margin: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n\nion-footer[_ngcontent-%COMP%]   .bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  max-height: unset;\n}\n\nion-footer[_ngcontent-%COMP%]   .bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%]   .ride-confirmation-card[_ngcontent-%COMP%] {\n  animation: slide-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@keyframes pulse-bg {\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.6;\n  }\n}\n\n.ride-details.skeleton[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%] {\n  animation: pulse-bg 1.5s infinite;\n  --border-radius: 8px;\n  --background: rgba(var(--ion-color-primary-rgb), 0.12);\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%] {\n  --width: 240px;\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%]   .select-interface-option[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%]   .select-interface-option[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 18px;\n}\n\n.map-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% - var(--bottom-bar-height, 0px));\n  top: var(--header-height, 0px);\n  left: 0;\n  z-index: 10;\n  transition: height 0.3s ease;\n}\n\n.map-container.with-tracking[_ngcontent-%COMP%] {\n  height: calc(100% - 210px);\n  top: 56px;\n}\n\n.map-container.with-booking[_ngcontent-%COMP%] {\n  height: calc(100% - 100px);\n  top: 0;\n}\n\n.map-container.with-confirm[_ngcontent-%COMP%] {\n  height: calc(100% - 260px);\n  top: 120px;\n}\n\n.map-container.with-searching[_ngcontent-%COMP%] {\n  height: calc(100% - 180px);\n  top: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUFBO0VBQ0Y7RUFDQTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNDLG1FQUFBO0FBQUQ7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQ0FBQTtBQUFGOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBR0k7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FBRFI7O0FBRVE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFBVjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBUUU7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUxKOztBQU1JO0VBQ0ksbUJBQUE7QUFKUjs7QUFNSTtFQUNJLDRCQUFBO0FBSlI7O0FBT1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBTGhCOztBQVVFO0VBQ0UsaUJBQUE7QUFSSjs7QUFXSztFQUNDLGdCQUFBO0VBRUMsb0NBQUE7QUFWUDs7QUFXTztFQUNDLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFUUjs7QUFvQkE7RUFFRSx1QkFBQTtFQUNBLG1CQUFBO0FBbEJGOztBQXFCQTtFQUVFLGlCQUFBO0VBQ0EsU0FBQTtBQW5CRjs7QUFzQkM7RUFFRyx1REFBQTtBQXBCSjs7QUF1QkU7RUFDRSxzREFBQTtBQXBCSjs7QUF1QkU7RUFDRSx1REFBQTtBQXBCSjs7QUF1QkE7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0FBcEJGOztBQXdCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBckJGOztBQXdCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQXRCRjs7QUEyQkU7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFHQSxhQUFBO0VBQ0EsK0NBQUE7RUFtQkEscUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsNEJBQUE7QUE3Q0o7O0FBMkJJO0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FBMUJOOztBQTZCSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQTNCTjs7QUE4Qkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUE1Qk47O0FBbUNJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFqQ047O0FBbUNNO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFqQ1I7O0FBbUNRO0VBQ0UsZ0JBQUE7QUFqQ1Y7O0FBb0NRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWxDVjs7QUFzQ1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFwQ1o7O0FBc0NZO0VBQ0UsZUFBQTtBQXBDZDs7QUF3Q1U7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBdENaOztBQXdDWTtFQUNFLGVBQUE7QUF0Q2Q7O0FBNENNO0VBQ0UsaUJBQUE7QUExQ1I7O0FBNENRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0FBMUNWOztBQTZDUTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQTNDVjs7QUFpREU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQS9DSjs7QUFpREk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUEvQ047O0FBaURNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQS9DUjs7QUFtREk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBakROOztBQW1ETTtFQUNFLGlCQUFBO0FBakRSOztBQW9ETTtFQUNFLFlBQUE7QUFsRFI7O0FBeURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQXRERjs7QUF3REU7RUFDRSwrQ0FBQTtBQXRESjs7QUEyREE7RUFDRSxvQkFBQTtFQUNBLHFEQUFBO0FBeERGOztBQWtFTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUEvRFI7O0FBaUVRO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBL0RWOztBQWlFVTtFQUNFLGVBQUE7QUEvRFo7O0FBb0VNO0VBQ0UsVUFBQTtBQWxFUjs7QUFvRVE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBbEVWOztBQW9FVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFsRVo7O0FBcUVVO0VBQ0UsaUJBQUE7QUFuRVo7O0FBcUVZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuRWQ7O0FBc0VZO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBcEVkOztBQWdGTTtFQUVFLGtCQUFBO0FBL0VSOztBQWlGUTtFQUNFLGdCQUFBO0FBL0VWOztBQWtGUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBaEZWOztBQWtGVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFoRlo7O0FBb0ZRO0VBQ0UsdUJBQUE7QUFsRlY7O0FBcUZZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFuRmQ7O0FBeUZRO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUF2RlY7O0FBMEZZO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUF4RmQ7O0FBMkZZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF6RmQ7O0FBK0ZRO0VBRUUsbURBQUE7RUFDQSxtQkFBQTtBQTlGVjs7QUFnR1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBOUZaOztBQWdHWTtFQUNFLGVBQUE7QUE5RmQ7O0FBc0dJO0VBQ0Usa0JBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFwR047O0FBc0dNO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQXBHUjs7QUF5R0k7RUFDRSxnQkFBQTtBQXZHTjs7QUF5R007RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBdkdSOztBQXlHUTtFQUNFLG1EQUFBO0VBQ0EscUJBQUE7QUF2R1Y7O0FBeUdVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUF2R1o7O0FBMkdRO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUF6R1Y7O0FBMkdVO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FBekdaOztBQTJHWTtFQUNFLG9EQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtBQXpHZDs7QUEyR2M7RUFDRSx5Q0FBQTtBQXpHaEI7O0FBb0hBO0VBQ0U7SUFDRSwyREFBQTtFQWpIRjtFQW1IQTtJQUNFLDREQUFBO0VBakhGO0VBbUhBO0lBQ0UseURBQUE7RUFqSEY7QUFDRjs7QUFvSEE7OztFQUdFLDRCQUFBO0FBbEhGOztBQXVIRTtFQUVFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFySEo7O0FBd0hJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUF0SE47O0FBeUhNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQXZIUjs7QUEwSFE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBeEhWOztBQTRIUTtFQUNFLGtCQUFBO0FBMUhWOztBQTRIVTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTFIWjs7QUE0SFk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBMUhkOztBQTZIWTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUEzSGQ7O0FBaUlRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEvSFY7O0FBcUlJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBbklOOztBQXFJTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFuSVI7O0FBd0lJOztFQUVFLDZCQUFBO0FBdElOOztBQXlJSTs7RUFFRSxlQUFBO0FBdklOOztBQTZJQTtFQUNFLHVCQUFBO0FBMUlGOztBQTRJRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUExSUo7O0FBK0lBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE1SUY7O0FBZ0pBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBN0lGOztBQStJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE3SUo7O0FBZ0pFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUE5SUo7O0FBZ0pJO0VBQ0UsaUJBQUE7QUE5SU47O0FBb0pBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQWpKRjs7QUFtSkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBakpKOztBQXNKQTtFQUNFLGVBQUE7RUFDQSxrREFBQTtBQW5KRjs7QUFxSkU7RUFDRSxvQ0FBQTtBQW5KSjs7QUFzSkU7RUFDRSxzQkFBQTtBQXBKSjs7QUFzSkk7RUFDRSxnQkFBQTtBQXBKTjs7QUEwSkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBdkpGOztBQTJKQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUF4SkY7O0FBNEpBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXpKRjs7QUE2SkE7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBMUpGOztBQTRKRTtFQUNFLG1CQUFBO0FBMUpKOztBQTRKSTtFQUNFLFlBQUE7QUExSk47O0FBOEpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUE1Sko7O0FBOEpJO0VBQ0UsbUJBQUE7QUE1Sk47O0FBK0pJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE3Sk47O0FBZ0tJO0VBQ0UsT0FBQTtBQTlKTjs7QUFnS007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBOUpSOztBQWdLUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTlKVjs7QUFrS007RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFoS1I7O0FBa0tRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBaEtWOztBQWtLVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQWhLWjs7QUFzS0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXBLTjs7QUFzS007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFwS1I7O0FBdUtNO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQXJLUjs7QUF1S1E7RUFDRSw4Q0FBQTtBQXJLVjs7QUEyS0U7RUFDRSxjQUFBO0FBektKOztBQTJLSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF6S047O0FBMktNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBektSOztBQTRLTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTFLUjs7QUE2S007RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBM0tSOztBQWdMRTtFQUNFLGdCQUFBO0FBOUtKOztBQWdMSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUE5S047O0FBZ0xNO0VBQ0UsaUJBQUE7QUE5S1I7O0FBaUxNO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUEvS1I7O0FBa0xNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBaExSOztBQXVMQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBcExGOztBQXNMRTtFQUNFLG1FQUFBO0FBcExKOztBQXlMQTtFQUNFO0lBQ0UsWUFBQTtFQXRMRjtFQXdMQTtJQUNFLFVBQUE7RUF0TEY7RUF3TEE7SUFDRSxZQUFBO0VBdExGO0FBQ0Y7O0FBMkxJO0VBQ0UsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLHNEQUFBO0FBekxOOztBQWlNRTtFQUNFLGNBQUE7QUE5TEo7O0FBZ01JO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQTlMTjs7QUFnTU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUE5TFI7O0FBdU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFwTUY7O0FBdU1FO0VBQ0UsMEJBQUE7RUFDQSxTQUFBO0FBck1KOztBQXdNRTtFQUNFLDBCQUFBO0VBQ0EsTUFBQTtBQXRNSjs7QUF5TUU7RUFDRSwwQkFBQTtFQUNBLFVBQUE7QUF2TUo7O0FBME1FO0VBQ0UsMEJBQUE7RUFDQSxTQUFBO0FBeE1KIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FwYWNpdG9yLWdvb2dsZS1tYXBzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5zbGlkZS10b3Age1xuXHRhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuLmNlbnRlclBpbntcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xufVxuXG4uYm90dG9tSXRlbXN7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxuaW9uLXNrZWxldG9uLXRleHQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgOTgsIDI1NSwgMC42MjUpO1xufVxuXG5pb24taGVhZGVye1xuICAgXG4gIGlvbi1mYWJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBpb24tcm93IHtcbiAgICBwYWRkaW5nLXRvcDogMHZoO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwdmg7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiAgXG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1mb290ZXJ7XG4gIGlvbi1yb3cge1xuICAgIHBhZGRpbmctdG9wOiA1dmg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA2dmg7XG4gICAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuICBpb24tZmFie1xuICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICB9XG4gICBpb24tbGlzdHtcbiAgICAgLnBheW1lbnR7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgLy8gIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgaW9uLWl0ZW17XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDFweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgIFxuICAgICAgIH1cbiAgICAgICBcbiAgICAgIFxuICAgICAgIFxuICAgICB9XG5cbiAgfVxufVxuXG4uY2VudGVyRWxlbVxue1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByaWNlXG4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZmxleDogMC41O1xuIH1cbiBcbiAuc2hhZG93LXRvcFxuICB7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgfVxuXG4gIC50b3BfYmFye1xuICAgIGJveC1zaGFkb3c6IDBweCAxLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgfVxuXG4gIC5jYXJke1xuICAgIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG4gIH1cblxuLm1haW4tYnV0dG9ue1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOyBcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucHJldmlldyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmFsbGJhY2sge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCVcbn1cblxuLy8gTW9kZXJuIENhcmQgU3R5bGluZyBmb3IgU2VsZWN0aW9uIEJhclxuLmJvdHRvbUl0ZW1zIHtcbiAgJi5zaGFkb3ctdG9wIHtcbiAgICAvLyBSZW1vdmUgZml4ZWQgbWF4LWhlaWdodFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4OyAvLyBNaW5pbXVtIGhlaWdodCB0byBlbnN1cmUgdmlzaWJpbGl0eVxuICAgIGhlaWdodDogYXV0bzsgLy8gTGV0IGl0IGdyb3cgYmFzZWQgb24gY29udGVudFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7IC8vIE1heGltdW0gaGVpZ2h0IGFzIHBlcmNlbnRhZ2Ugb2Ygdmlld3BvcnQgaGVpZ2h0XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLy8gS2VlcCBzY3JvbGxpbmcgaWYgY29udGVudCBpcyB0b28gbG9uZ1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7IC8vIFNtb290aCBoZWlnaHQgdHJhbnNpdGlvbnNcbiAgICBcbiAgICAvLyBFbnN1cmUgcHJvcGVyIHBhZGRpbmcgYW5kIHNwYWNpbmdcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tLCAwcHgpOyAvLyBBY2NvdW50IGZvciBub3RjaGVzL2hvbWUgaW5kaWNhdG9yc1xuICAgIFxuICAgIC8vIFdoZW4gaW4gZGlmZmVyZW50IHN0YWdlcywgYWRqdXN0IGhlaWdodCBhY2NvcmRpbmdseVxuICAgICZbbmdJZj1cInRyYWNraW5nU3RhZ2VcIl0sXG4gICAgJltuZ0lmPVwiZHJpdmluZ1RvRGVzdGluYXRpb25TdGFnZVwiXSB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDsgLy8gU2xpZ2h0bHkgdGFsbGVyIGZvciB0aGVzZSBzdGFnZXNcbiAgICB9XG4gICAgXG4gICAgJltuZ0lmPVwic2VhcmNoaW5nU3RhZ2VcIl0ge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWluLWhlaWdodDogMTgwcHg7XG4gICAgfVxuICAgIFxuICAgICZbbmdJZj1cImNvbmZpcm1TdGFnZVwiXSB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICB9XG4gICAgXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDAgMDtcbiAgICBcbiAgICAucGF5bWVudCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICBcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnByaWNlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHAgZGVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICBpb24taXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIFxuICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1vZGVybiBQcm9ncmVzcyBCYXJcbmlvbi1wcm9ncmVzcy1iYXIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBcbiAgJlt0eXBlPVwiaW5kZXRlcm1pbmF0ZVwiXSB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuLy8gU2tlbGV0b24gTG9hZGluZyBBbmltYXRpb25cbmlvbi1za2VsZXRvbi10ZXh0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xufVxuXG4vLyBTaGFyZWQgc3R5bGVzIGZvciBhbGwgdHJhY2tpbmcgYmFyc1xuLmJvdHRvbUl0ZW1zIHtcbiAgJi5zaGFkb3ctdG9wIHtcbiAgICAvLyAuLi4gZXhpc3Rpbmcgc3R5bGVzIC4uLlxuICAgIFxuICAgIC8vIENvbm5lY3RpbmcgdG8gZHJpdmVyIGJhciAoc2VhcmNoaW5nU3RhZ2UpXG4gICAgJjpoYXMoaW9uLXByb2dyZXNzLWJhclt0eXBlPVwiaW5kZXRlcm1pbmF0ZVwiXSkge1xuICAgICAgLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gRHJpdmVyIHRyYWNraW5nIHN0eWxlcyAodHJhY2tpbmdTdGFnZSAmIGRyaXZpbmdUb0Rlc3RpbmF0aW9uU3RhZ2UpXG4gICAgLmNhcmQge1xuICAgICAgLy8gLi4uIGV4aXN0aW5nIHN0eWxlcyAuLi5cbiAgICAgIFxuICAgICAgLy8gRW5oYW5jZWQgZHJpdmVyIGluZm8gbGF5b3V0XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIC8vIC4uLiBleGlzdGluZyBzdHlsZXMgLi4uXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC0ycHg7XG4gICAgICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLnByaWNlIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBEcml2ZXIgY2FyIGluZm9cbiAgICAgICAgJjpoYXMoaW9uLWxhYmVsIHA6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuNSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBQYXltZW50IG1ldGhvZCBpdGVtXG4gICAgICAgICY6aGFzKGlvbi1pY29uW25hbWU9XCJjYXNoXCJdKSwgXG4gICAgICAgICY6aGFzKGlvbi1pY29uW25hbWU9XCJjYXJkXCJdKSB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWxhYmVsIGgxIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBBcnJpdmFsIHRpbWUgaGVhZGVyXG4gICAgaW9uLWxpc3QtaGVhZGVyLmlvbi1tYXJnaW4tYm90dG9tIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICAgIGgxIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBBY2NvcmRpb24gZ3JvdXAgc3R5bGluZ1xuICAgIGlvbi1hY2NvcmRpb24tZ3JvdXAge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIFxuICAgICAgaW9uLWFjY29yZGlvbiB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC41KTtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWxhYmVsIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGl2W3Nsb3Q9XCJjb250ZW50XCJdIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjEpO1xuICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFuaW1hdGlvbiBmb3IgZHJpdmVyIGF2YXRhclxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC40KTtcbiAgfVxuICA3MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMCk7XG4gIH1cbn1cblxuLmJvdHRvbUl0ZW1zIGlvbi1saXN0W25nSWY9XCJzZWFyY2hpbmdTdGFnZVwiXSBpb24tYXZhdGFyLFxuLmJvdHRvbUl0ZW1zIGlvbi1saXN0W25nSWY9XCJ0cmFja2luZ1N0YWdlXCJdIGlvbi1hdmF0YXIsXG4uYm90dG9tSXRlbXMgaW9uLWxpc3RbbmdJZj1cImRyaXZpbmdUb0Rlc3RpbmF0aW9uU3RhZ2VcIl0gaW9uLWF2YXRhciB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG59XG5cbi8vIENvbnNpc3RlbnQgaGVpZ2h0IGZvciBhbGwgYm90dG9tIGJhcnNcbi5ib3R0b21JdGVtcyB7XG4gICYuc2hhZG93LXRvcCB7XG4gICAgLy8gQ29tbW9uIHNldHRpbmdzIGZvciBhbGwgYm90dG9tIGJhcnNcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDQwdmggLSAyMHB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIFxuICAgIC8vIENvbnNpc3RlbnQgY2FyZCBzdHlsaW5nIGFjcm9zcyBhbGwgYm90dG9tIGJhcnNcbiAgICAuY2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgXG4gICAgICAvLyBNb3JlIGNvbXBhY3QgaXRlbSBzcGFjaW5nIGZvciB0cmFja2luZy9kZXN0aW5hdGlvbiBzdGFnZXNcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1taW4taGVpZ2h0OiA0OHB4OyAvLyBSZWR1Y2UgZGVmYXVsdCBpdGVtIGhlaWdodFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyAvLyBSZW1vdmUgbWFyZ2luIGJldHdlZW4gaXRlbXNcbiAgICAgICAgXG4gICAgICAgIC8vIFJlZHVjZSBwYWRkaW5nIGluc2lkZSBpdGVtc1xuICAgICAgICAmLnByaWNlIGlvbi1sYWJlbCBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4OyAvLyBTbGlnaHRseSBzbWFsbGVyIHByaWNlIGZvbnRcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIE1ha2UgbmVzdGVkIGl0ZW1zIG1vcmUgY29tcGFjdFxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgLS1taW4taGVpZ2h0OiA0MnB4O1xuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBNYWtlIGF2YXRhcnMgc21hbGxlciBhbmQgY29uc2lzdGVudFxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gTW9yZSBjb21wYWN0IGhlYWRlclxuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gU3BlY2lmaWNhbGx5IGZvciB0cmFja2luZyBzdGFnZXMsIG1ha2UgdGhlbSBtb3JlIGNvbXBhY3RcbiAgICBpb24tbGlzdC5ib3R0b21JdGVtcy5zaGFkb3ctdG9wW25nSWY9XCJ0cmFja2luZ1N0YWdlXCJdIC5pb24tbWFyZ2luLWJvdHRvbSxcbiAgICBpb24tbGlzdC5ib3R0b21JdGVtcy5zaGFkb3ctdG9wW25nSWY9XCJkcml2aW5nVG9EZXN0aW5hdGlvblN0YWdlXCJdIC5pb24tbWFyZ2luLWJvdHRvbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tbGlzdC5ib3R0b21JdGVtcy5zaGFkb3ctdG9wW25nSWY9XCJ0cmFja2luZ1N0YWdlXCJdIGlvbi1hY2NvcmRpb24tZ3JvdXAsXG4gICAgaW9uLWxpc3QuYm90dG9tSXRlbXMuc2hhZG93LXRvcFtuZ0lmPVwiZHJpdmluZ1RvRGVzdGluYXRpb25TdGFnZVwiXSBpb24tYWNjb3JkaW9uLWdyb3VwIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWFrZSBhY2NvcmRpb24gbW9yZSBjb21wYWN0IGZvciBhY3Rpb24gYnV0dG9uc1xuaW9uLWFjY29yZGlvbiBkaXZbc2xvdD1cImNvbnRlbnRcIl0ge1xuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgXG4gIGlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy10b3A6IDhweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4vLyBCZXR0ZXIgbGF5b3V0IGZvciBkcml2ZXIgY2FyZFxuLmRyaXZlci1jYXJkLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLy8gQ29udGFpbmVyIGZvciBkcml2ZXIgYXZhdGFyIGFuZCByYXRpbmdcbi5kcml2ZXItYXZhdGFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgXG4gIGlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgXG4gIC5kcml2ZXItcmF0aW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgfVxuICB9XG59XG5cbi8vIFByaWNlIGNvbnRhaW5lciBzdHlsaW5nXG4ucHJpY2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLy8gQmV0dGVyIGFjY29yZGlvbiBzdHlsaW5nXG4uZHJpdmVyLWFjdGlvbnMtYWNjb3JkaW9uIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgXG4gIC5hY2NvcmRpb24taGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cbiAgXG4gIC5hY2NvcmRpb24tY29udGVudCB7XG4gICAgcGFkZGluZzogOHB4IDE2cHggMTZweDtcbiAgICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi8vIEdlbmVyYWwgY2FyZCBzdHlsZXNcbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIDE2cHggMTZweDtcbn1cblxuLy8gRml4IG5lc3RlZCBpdGVtcyBpc3N1ZVxuaW9uLWl0ZW0gaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi8vIE1ha2Ugc3VyZSBib3R0b20gaXRlbXMgYXJlIHRhbGwgZW5vdWdoIHRvIGJlIHNjcm9sbGFibGUvdmlzaWJsZVxuLmJvdHRvbUl0ZW1zIHtcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLy8gTW9kZXJuIHJpZGUgY29uZmlybWF0aW9uIGNhcmQgc3R5bGVzXG4ucmlkZS1jb25maXJtYXRpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIC00cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIFxuICAucmlkZS1kZXRhaWxzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIFxuICAgICYuc2tlbGV0b24ge1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgfVxuICBcbiAgLnZlaGljbGUtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIFxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlZWYwZjI7XG4gICAgfVxuICAgIFxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG4gICAgXG4gICAgLnZlaGljbGUtZGV0YWlscyB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC52ZWhpY2xlLXN0YXRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucHJpY2UtdGFnIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAub3JpZ2luYWwtcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBcbiAgICAgICAgZGVsIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAucGF5bWVudC1zZWxlY3RvciB7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgLS1taW4taGVpZ2h0OiA1NHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmJvb2stYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBcbiAgICAuYm9vay1yaWRlLWJ0biB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLXByb2dyZXNzLWJhciB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVwZGF0ZXMgdG8gbWFrZSBzdXJlIHRoZSBjYXJkIHN0aWNrcyBwcm9wZXJseSBhdCB0aGUgYm90dG9tXG5pb24tZm9vdGVyIC5ib3R0b21JdGVtcy5zaGFkb3ctdG9wW25nSWY9XCJjb25maXJtU3RhZ2VcIl0ge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWF4LWhlaWdodDogdW5zZXQ7XG4gIFxuICAucmlkZS1jb25maXJtYXRpb24tY2FyZCB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC40cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4gIH1cbn1cblxuLy8gSW1wcm92ZSBhbmltYXRpb24gZm9yIHNrZWxldG9uIGxvYWRpbmcgYXBwZWFyYW5jZVxuQGtleWZyYW1lcyBwdWxzZS1iZyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuXG4ucmlkZS1kZXRhaWxzLnNrZWxldG9uIHtcbiAgLnZlaGljbGUtaW5mbyB7XG4gICAgaW9uLXNrZWxldG9uLXRleHQge1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZS1iZyAxLjVzIGluZmluaXRlO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xMik7XG4gICAgfVxuICB9XG59XG5cbi8vIEltcHJvdmUgc2VsZWN0IHBvcG92ZXIgYXBwZWFyYW5jZVxuLy8gTm90ZTogVGhpcyByZXF1aXJlcyA6cm9vdCBzdHlsaW5nIGZvciBnbG9iYWwgaW1wYWN0IG9uIGlvbi1zZWxlY3RzXG46cm9vdCB7XG4gIGlvbi1zZWxlY3QtcG9wb3ZlciB7XG4gICAgLS13aWR0aDogMjQwcHg7XG4gICAgXG4gICAgLnNlbGVjdC1pbnRlcmZhY2Utb3B0aW9uIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIERhcmsgbW9kZSBkaXNhYmxlZCAtIGFwcCB1c2VzIGxpZ2h0IG1vZGUgb25seVxuXG4vLyBGaXggbWFwIHNpemluZyBhbmQgcG9zaXRpb25pbmdcbi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1ib3R0b20tYmFyLWhlaWdodCwgMHB4KSk7XG4gIHRvcDogdmFyKC0taGVhZGVyLWhlaWdodCwgMHB4KTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XG4gIFxuICAvLyBBZGp1c3QgbWFwIGhlaWdodCBiYXNlZCBvbiBhY3RpdmUgVUkgc3RhZ2VzXG4gICYud2l0aC10cmFja2luZyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMTBweCk7XG4gICAgdG9wOiA1NnB4OyAvLyBBZGp1c3QgZm9yIGhlYWRlciBoZWlnaHRcbiAgfVxuICBcbiAgJi53aXRoLWJvb2tpbmcge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIHRvcDogMDtcbiAgfVxuICBcbiAgJi53aXRoLWNvbmZpcm0ge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjYwcHgpO1xuICAgIHRvcDogMTIwcHg7IC8vIEFkanVzdCBmb3IgaGVhZGVyIGhlaWdodFxuICB9XG4gIFxuICAmLndpdGgtc2VhcmNoaW5nIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE4MHB4KTtcbiAgICB0b3A6IDU2cHg7IC8vIEFkanVzdCBmb3IgaGVhZGVyIGhlaWdodFxuICB9XG59XG5cblxuIl19 */"]
});

/***/ }),

/***/ 8793:
/*!*********************************************!*\
  !*** ./src/app/services/geocode.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeocodeService": () => (/* binding */ GeocodeService)
/* harmony export */ });
/* harmony import */ var C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 5596);









class GeocodeService {
  constructor(client, overlay, http) {
    this.client = client;
    this.overlay = overlay;
    this.http = http;
    this.service = new google.maps.DistanceMatrixService();
    this.directions = new google.maps.DirectionsService();
    this.apiUrl = 'https://maps.googleapis.com/maps/api';
  }

  getAddress(lat, lng) {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('latlng', `${lat},${lng}`).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey);
    return this.http.get(url, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error in reverse geocoding:', error);
      this.overlay.showAlert('GeoError', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  } // Convert the address to lat and lng


  getLatLng(address) {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('address', address).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey);
    return this.http.get(url, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error in geocoding:', error);
      this.overlay.showAlert('GeoError', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  } // Get the distance between the origin and destination


  getDirections(from, to) {
    var _this = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {// You can implement the directions request here using google.maps.DirectionsService
      } catch (e) {
        _this.overlay.showAlert('GeoError', e);

        console.log(e);
      }
    })();
  }

  getDistanceMatrix(origin, destination) {
    const distanceMatrixService = new google.maps.DistanceMatrixService();
    return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
      distanceMatrixService.getDistanceMatrix({
        origins: [new google.maps.LatLng(origin.lat, origin.lng)],
        destinations: [new google.maps.LatLng(destination.lat, destination.lng)],
        travelMode: google.maps.TravelMode.DRIVING
      }, (response, status) => {
        if (status === 'OK') {
          observer.next(response);
        } else {
          observer.error(status);
        }

        observer.complete();
      });
    });
  }

}

GeocodeService.ɵfac = function GeocodeService_Factory(t) {
  return new (t || GeocodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__.Client), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

GeocodeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: GeocodeService,
  factory: GeocodeService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9947:
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/google-maps */ 4822);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 5596);
/* harmony import */ var _geocode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geocode.service */ 8793);








class MapService {
  constructor(overlay, geocode, http) {
    this.overlay = overlay;
    this.geocode = geocode;
    this.http = http;
    this._map = null;
    this.locationAddress = 'Loading..';
  }

  get newMap() {
    if (!this._map) {
      throw new Error('Map not initialized');
    }

    return this._map;
  }

  set newMap(map) {
    this._map = map;
  }

  createMap(ref, coords) {
    var _this = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Validate coords before using
        const lat = coords?.coords?.latitude || 3.1390; // Default to Kuala Lumpur, Malaysia

        const lng = coords?.coords?.longitude || 101.6869; // Destroy existing map if it exists

        _this._map = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__.GoogleMap.create({
          id: 'my-cool-map',
          element: ref,
          apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey,
          config: {
            center: {
              lat: lat,
              lng: lng
            },
            zoom: 15,
            styles: [],
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }
        });
        _this.LatLng = {
          lat: lat,
          lng: lng
        };
        yield Promise.all([_this._map.enableTrafficLayer(true), _this._map.enableCurrentLocation(true), _this._map.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this.LatLng
        })]);
        const address = yield _this.getAddress(_this.LatLng.lat, _this.LatLng.lng);

        _this.processAddressResponse(address);
      } catch (error) {
        console.error('Error creating map:', error);
        throw error;
      }
    })();
  }

  destroyMap() {
    var _this2 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2._map) {
        try {
          yield _this2._map.destroy();
          _this2._map = null;
        } catch (error) {
          console.error('Error destroying map:', error);
        }
      }
    })();
  }

  processAddressResponse(address) {
    if (address?.results?.length > 0) {
      this.actualLocation = address.results[0].formatted_address;

      if (address.results.length > 1) {
        const components = address.results[1].address_components;

        if (components?.length >= 2) {
          this.locationAddress = `${components[0].long_name} ${components[1].long_name}`;
        }
      }
    }
  }

  calculateCenter(points) {
    const latitudes = points.map(p => p.geoCode.latitude);
    const longitudes = points.map(p => p.geoCode.longitude);
    const avgLat = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
    const avgLng = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;
    return {
      latitude: avgLat,
      longitude: avgLng
    };
  }

  setCameraToLocation(coordinate, zoom, bearing) {
    var _this3 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3._map) {
        console.error('Map not initialized');
        return;
      }

      try {
        yield _this3._map.setCamera({
          animate: true,
          animationDuration: 500,
          zoom,
          coordinate,
          bearing
        });
      } catch (error) {
        console.error('Error setting camera:', error);
      }
    })();
  } // Add other necessary methods like getAddress here


  getBoundsZoomLevel(bounds, mapDim) {
    const WORLD_DIM = {
      height: 256,
      width: 256
    };
    const ZOOM_MAX = 21;

    const latRad = lat => {
      const sin = Math.sin(lat * Math.PI / 180);
      const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
      return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    };

    const zoom = (mapPx, worldPx, fraction) => Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
    const lngDiff = ne.lng() - sw.lng();
    const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;
    const latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
    const lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
    return Math.min(latZoom, lngZoom, ZOOM_MAX);
  }

  calculateBearing(start, end) {
    const startLat = start.lat * (Math.PI / 180);
    const startLng = start.lng * (Math.PI / 180);
    const endLat = end.lat * (Math.PI / 180);
    const endLng = end.lng * (Math.PI / 180);
    const dLng = endLng - startLng;
    const y = Math.sin(dLng) * Math.cos(endLat);
    const x = Math.cos(startLat) * Math.sin(endLat) - Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);
    const bearing = Math.atan2(y, x) * (180 / Math.PI);
    return (bearing + 360) % 360;
  }

  getDirections(from, to) {
    var _this4 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey}`;
        const response = yield _this4.http.get(url).toPromise();
        return response;
      } catch (error) {
        console.error('Error in getting directions:', error);
        return null;
      }
    })();
  }

  getAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams().set('latlng', `${lat},${lng}`).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey);
    return this.http.get(url, {
      params
    }).toPromise();
  } // Add the addMarker method to the MapService class


  addMarker(lat, lng, title) {
    var _this5 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const marker = {
          coordinate: {
            lat,
            lng
          },
          title
        };
        yield _this5._map.addMarker(marker);
        return marker;
      } catch (error) {
        console.error('Error adding marker:', error);
        return null;
      }
    })();
  }

}

MapService.ɵfac = function MapService_Factory(t) {
  return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_geocode_service__WEBPACK_IMPORTED_MODULE_4__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

MapService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MapService,
  factory: MapService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2982:
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class NetworkService {
  constructor() {
    this.networkStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
    this.networkStatus$ = this.networkStatus.asObservable();
    this.initializeNetworkListener();
  }

  initializeNetworkListener() {
    _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.networkStatus.next(status.connected);

      if (status.connected) {
        this.handleReconnect();
      } else {
        this.handleDisconnect();
      }
    });
    this.checkInitialNetworkStatus();
  }

  checkInitialNetworkStatus() {
    var _this = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();

      _this.networkStatus.next(status.connected);

      if (!status.connected) {
        _this.handleDisconnect();
      }
    })();
  }

  handleDisconnect() {
    console.log('Disconnected from network'); // Handle the UI or logic when the network is disconnected
  }

  handleReconnect() {
    console.log('Reconnected to network'); // Handle the UI or logic when the network is reconnected
  }

  isConnected() {
    return this.networkStatus.value;
  }

}

NetworkService.ɵfac = function NetworkService_Factory(t) {
  return new (t || NetworkService)();
};

NetworkService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NetworkService,
  factory: NetworkService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5203:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/definitions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3253:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5203);

const App = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('App', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 731)).then(m => new m.AppWeb())
});



/***/ }),

/***/ 591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 5325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatLngBounds": () => (/* binding */ LatLngBounds),
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
/* harmony import */ var C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation */ 1819);


class LatLngBounds {
  constructor(bounds) {
    this.southwest = bounds.southwest;
    this.center = bounds.center;
    this.northeast = bounds.northeast;
  }

  contains(point) {
    var _this = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsContains({
        bounds: _this,
        point
      });
      return result['contains'];
    })();
  }

  extend(point) {
    var _this2 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsExtend({
        bounds: _this2,
        point
      });
      _this2.southwest = result['bounds']['southwest'];
      _this2.center = result['bounds']['center'];
      _this2.northeast = result['bounds']['northeast'];
      return _this2;
    })();
  }

}
var MapType;

(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */

  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */

  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */

  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */

  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 1819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;

  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "LatLngBounds": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.LatLngBounds),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 8968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 8968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./implementation */ 1819);





class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = '';

    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }

}

customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;
    this.resizeObserver = null;

    this.handleScrollEvent = () => this.updateMapBounds();

    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */


  static create(options, callback) {
    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);

      if (!options.element) {
        throw new Error('container element is required');
      }

      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }

      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = yield GoogleMap.getElementBounds(options.element);
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};

        const getMapBounds = () => {
          var _a, _b;

          const mapRect = (_b = (_a = newMap.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {};
          return {
            x: mapRect.x,
            y: mapRect.y,
            width: mapRect.width,
            height: mapRect.height
          };
        };

        const onDisplay = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onDisplay({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };

        const onResize = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onResize({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };

        const ionicPage = newMap.element.closest('.ion-page');

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && ionicPage) {
          ionicPage.addEventListener('ionViewWillEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
          ionicPage.addEventListener('ionViewDidEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
        }

        const lastState = {
          width: elementBounds.width,
          height: elementBounds.height,
          isHidden: false
        };
        newMap.resizeObserver = new ResizeObserver(() => {
          if (newMap.element != null) {
            const mapRect = newMap.element.getBoundingClientRect();
            const isHidden = mapRect.width === 0 && mapRect.height === 0;

            if (!isHidden) {
              if (lastState.isHidden) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && !ionicPage) {
                  onDisplay();
                }
              } else if (lastState.width !== mapRect.width || lastState.height !== mapRect.height) {
                onResize();
              }
            }

            lastState.width = mapRect.width;
            lastState.height = mapRect.height;
            lastState.isHidden = isHidden;
          }
        });
        newMap.resizeObserver.observe(newMap.element);
      } // small delay to allow for iOS WKWebView to setup corresponding element sub-scroll views ???


      yield new Promise((resolve, reject) => {
        setTimeout( /*#__PURE__*/(0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.create(options);
            resolve(undefined);
          } catch (err) {
            reject(err);
          }
        }), 200);
      });

      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }

      return newMap;
    })();
  }

  static getElementBounds(element) {
    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        let elementBounds = element.getBoundingClientRect();

        if (elementBounds.width == 0) {
          let retries = 0;
          const boundsInterval = setInterval(function () {
            if (elementBounds.width == 0 && retries < 30) {
              elementBounds = element.getBoundingClientRect();
              retries++;
            } else {
              if (retries == 30) {
                console.warn('Map size could not be determined');
              }

              clearInterval(boundsInterval);
              resolve(elementBounds);
            }
          }, 100);
        } else {
          resolve(elementBounds);
        }
      });
    })();
  }
  /**
   * Enable touch events on native map
   *
   * @returns void
   */


  enableTouch() {
    var _this = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTouch({
        id: _this.id
      });
    })();
  }
  /**
   * Disable touch events on native map
   *
   * @returns void
   */


  disableTouch() {
    var _this2 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableTouch({
        id: _this2.id
      });
    })();
  }
  /**
   * Enable marker clustering
   *
   * @param minClusterSize - The minimum number of markers that can be clustered together.
   * @defaultValue 4
   *
   * @returns void
   */


  enableClustering(minClusterSize) {
    var _this3 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableClustering({
        id: _this3.id,
        minClusterSize
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */


  disableClustering() {
    var _this4 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableClustering({
        id: _this4.id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */


  addMarker(marker) {
    var _this5 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarker({
        id: _this5.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */


  addMarkers(markers) {
    var _this6 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarkers({
        id: _this6.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */


  removeMarker(id) {
    var _this7 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarker({
        id: _this7.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */


  removeMarkers(ids) {
    var _this8 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarkers({
        id: _this8.id,
        markerIds: ids
      });
    })();
  }

  addPolygons(polygons) {
    var _this9 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolygons({
        id: _this9.id,
        polygons
      });
      return res.ids;
    })();
  }

  addPolylines(polylines) {
    var _this10 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolylines({
        id: _this10.id,
        polylines
      });
      return res.ids;
    })();
  }

  removePolygons(ids) {
    var _this11 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolygons({
        id: _this11.id,
        polygonIds: ids
      });
    })();
  }

  addCircles(circles) {
    var _this12 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addCircles({
        id: _this12.id,
        circles
      });
      return res.ids;
    })();
  }

  removeCircles(ids) {
    var _this13 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeCircles({
        id: _this13.id,
        circleIds: ids
      });
    })();
  }

  removePolylines(ids) {
    var _this14 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolylines({
        id: _this14.id,
        polylineIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */


  destroy() {
    var _this15 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this15.disableScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        (_a = _this15.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      }

      _this15.removeAllMapListeners();

      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.destroy({
        id: _this15.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */


  setCamera(config) {
    var _this16 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setCamera({
        id: _this16.id,
        config
      });
    })();
  }

  getMapType() {
    var _this17 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        type
      } = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapType({
        id: _this17.id
      });
      return _definitions__WEBPACK_IMPORTED_MODULE_2__.MapType[type];
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */


  setMapType(mapType) {
    var _this18 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setMapType({
        id: _this18.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */


  enableIndoorMaps(enabled) {
    var _this19 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this19.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */


  enableTrafficLayer(enabled) {
    var _this20 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this20.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */


  enableAccessibilityElements(enabled) {
    var _this21 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this21.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */


  enableCurrentLocation(enabled) {
    var _this22 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this22.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */


  setPadding(padding) {
    var _this23 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setPadding({
        id: _this23.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */


  getMapBounds() {
    var _this24 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new _definitions__WEBPACK_IMPORTED_MODULE_2__.LatLngBounds(yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapBounds({
        id: _this24.id
      }));
    })();
  }

  fitBounds(bounds, padding) {
    var _this25 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.fitBounds({
        id: _this25.id,
        bounds,
        padding
      });
    })();
  }

  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content'); // eslint-disable-next-line @typescript-eslint/prefer-for-of

    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }

    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }

  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }

  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */

  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraIdleListener(callback) {
    var _this26 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onCameraIdleListener) {
        _this26.onCameraIdleListener.remove();
      }

      if (callback) {
        _this26.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraIdle', _this26.generateCallback(callback));
      } else {
        _this26.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */


  setOnBoundsChangedListener(callback) {
    var _this27 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.onBoundsChangedListener) {
        _this27.onBoundsChangedListener.remove();
      }

      if (callback) {
        _this27.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this27.generateCallback(callback));
      } else {
        _this27.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraMoveStartedListener(callback) {
    var _this28 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.onCameraMoveStartedListener) {
        _this28.onCameraMoveStartedListener.remove();
      }

      if (callback) {
        _this28.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this28.generateCallback(callback));
      } else {
        _this28.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterClickListener(callback) {
    var _this29 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this29.onClusterClickListener) {
        _this29.onClusterClickListener.remove();
      }

      if (callback) {
        _this29.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterClick', _this29.generateCallback(callback));
      } else {
        _this29.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterInfoWindowClickListener(callback) {
    var _this30 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this30.onClusterInfoWindowClickListener) {
        _this30.onClusterInfoWindowClickListener.remove();
      }

      if (callback) {
        _this30.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this30.generateCallback(callback));
      } else {
        _this30.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnInfoWindowClickListener(callback) {
    var _this31 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this31.onInfoWindowClickListener) {
        _this31.onInfoWindowClickListener.remove();
      }

      if (callback) {
        _this31.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this31.generateCallback(callback));
      } else {
        _this31.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMapClickListener(callback) {
    var _this32 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this32.onMapClickListener) {
        _this32.onMapClickListener.remove();
      }

      if (callback) {
        _this32.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapClick', _this32.generateCallback(callback));
      } else {
        _this32.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolygonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnPolygonClickListener(callback) {
    var _this33 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this33.onPolygonClickListener) {
        _this33.onPolygonClickListener.remove();
      }

      if (callback) {
        _this33.onPolygonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolygonClick', _this33.generateCallback(callback));
      } else {
        _this33.onPolygonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCircleClick' events.
   *
   * @param callback
   * @returns
   */


  setOnCircleClickListener(callback) {
    var _this34 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this34.onCircleClickListener) [_this34.onCircleClickListener.remove()];

      if (callback) {
        _this34.onCircleClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCircleClick', _this34.generateCallback(callback));
      } else {
        _this34.onCircleClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerClickListener(callback) {
    var _this35 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this35.onMarkerClickListener) {
        _this35.onMarkerClickListener.remove();
      }

      if (callback) {
        _this35.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerClick', _this35.generateCallback(callback));
      } else {
        _this35.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolylineClick' events.
   *
   * @param callback
   * @returns
   */


  setOnPolylineClickListener(callback) {
    var _this36 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this36.onPolylineClickListener) {
        _this36.onPolylineClickListener.remove();
      }

      if (callback) {
        _this36.onPolylineClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolylineClick', _this36.generateCallback(callback));
      } else {
        _this36.onPolylineClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragStartListener(callback) {
    var _this37 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this37.onMarkerDragStartListener) {
        _this37.onMarkerDragStartListener.remove();
      }

      if (callback) {
        _this37.onMarkerDragStartListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragStart', _this37.generateCallback(callback));
      } else {
        _this37.onMarkerDragStartListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragListener(callback) {
    var _this38 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this38.onMarkerDragListener) {
        _this38.onMarkerDragListener.remove();
      }

      if (callback) {
        _this38.onMarkerDragListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDrag', _this38.generateCallback(callback));
      } else {
        _this38.onMarkerDragListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragEndListener(callback) {
    var _this39 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this39.onMarkerDragEndListener) {
        _this39.onMarkerDragEndListener.remove();
      }

      if (callback) {
        _this39.onMarkerDragEndListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragEnd', _this39.generateCallback(callback));
      } else {
        _this39.onMarkerDragEndListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationButtonClickListener(callback) {
    var _this40 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this40.onMyLocationButtonClickListener) {
        _this40.onMyLocationButtonClickListener.remove();
      }

      if (callback) {
        _this40.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this40.generateCallback(callback));
      } else {
        _this40.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationClickListener(callback) {
    var _this41 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this41.onMyLocationClickListener) {
        _this41.onMyLocationClickListener.remove();
      }

      if (callback) {
        _this41.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this41.generateCallback(callback));
      } else {
        _this41.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */


  removeAllMapListeners() {
    var _this42 = this;

    return (0,C_Users_USER_NewRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this42.onBoundsChangedListener) {
        _this42.onBoundsChangedListener.remove();

        _this42.onBoundsChangedListener = undefined;
      }

      if (_this42.onCameraIdleListener) {
        _this42.onCameraIdleListener.remove();

        _this42.onCameraIdleListener = undefined;
      }

      if (_this42.onCameraMoveStartedListener) {
        _this42.onCameraMoveStartedListener.remove();

        _this42.onCameraMoveStartedListener = undefined;
      }

      if (_this42.onClusterClickListener) {
        _this42.onClusterClickListener.remove();

        _this42.onClusterClickListener = undefined;
      }

      if (_this42.onClusterInfoWindowClickListener) {
        _this42.onClusterInfoWindowClickListener.remove();

        _this42.onClusterInfoWindowClickListener = undefined;
      }

      if (_this42.onInfoWindowClickListener) {
        _this42.onInfoWindowClickListener.remove();

        _this42.onInfoWindowClickListener = undefined;
      }

      if (_this42.onMapClickListener) {
        _this42.onMapClickListener.remove();

        _this42.onMapClickListener = undefined;
      }

      if (_this42.onPolylineClickListener) {
        _this42.onPolylineClickListener.remove();

        _this42.onPolylineClickListener = undefined;
      }

      if (_this42.onMarkerClickListener) {
        _this42.onMarkerClickListener.remove();

        _this42.onMarkerClickListener = undefined;
      }

      if (_this42.onPolygonClickListener) {
        _this42.onPolygonClickListener.remove();

        _this42.onPolygonClickListener = undefined;
      }

      if (_this42.onCircleClickListener) {
        _this42.onCircleClickListener.remove();

        _this42.onCircleClickListener = undefined;
      }

      if (_this42.onMarkerDragStartListener) {
        _this42.onMarkerDragStartListener.remove();

        _this42.onMarkerDragStartListener = undefined;
      }

      if (_this42.onMarkerDragListener) {
        _this42.onMarkerDragListener.remove();

        _this42.onMarkerDragListener = undefined;
      }

      if (_this42.onMarkerDragEndListener) {
        _this42.onMarkerDragEndListener.remove();

        _this42.onMarkerDragEndListener = undefined;
      }

      if (_this42.onMyLocationButtonClickListener) {
        _this42.onMyLocationButtonClickListener.remove();

        _this42.onMyLocationButtonClickListener = undefined;
      }

      if (_this42.onMyLocationClickListener) {
        _this42.onMyLocationClickListener.remove();

        _this42.onMyLocationClickListener = undefined;
      }
    })();
  }

  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }

}

/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map