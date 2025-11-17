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
/* harmony import */ var C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label", 26)(1, "h1");
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

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-toolbar", 18)(1, "ion-buttons", 19)(2, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_toolbar_1_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r18.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "ion-buttons", 22)(7, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, HomePage_ion_toolbar_1_ion_label_9_Template, 3, 1, "ion-label", 25);
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

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_item_2_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-label", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 29)(1, "ion-fab-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-menu-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_fab_4_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r22.GotoSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-fab-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_fab_5_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r24.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-fab-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_toolbar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-toolbar", 35)(1, "ion-title");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-toolbar", 35)(1, "ion-title");
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

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 36)(1, "ion-fab-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_fab_11_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r26.resetLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-fab", 39)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_17_ion_chip_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-chip", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_17_ion_chip_2_Template_ion_chip_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r32);
      const p_r29 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r31.selectPreset(p_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_17_ion_chip_2_Template_ion_icon_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r32);
      const i_r30 = restoredCtx.index;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      ctx_r33.deletePreset(i_r30);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const p_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](p_r29.name);
  }
}

function HomePage_ion_list_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, HomePage_ion_list_17_ion_chip_2_Template, 4, 1, "ion-chip", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_17_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r34.addCurrentAsPreset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "ion-item-group", 14)(6, "ion-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_17_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r36.showAutocompleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r11.presets);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r11.locationAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r11.locationAddress ? "Where To?" : "Waiting for address...");
  }
}

function HomePage_ion_list_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 50)(1, "ion-list-header")(2, "ion-item", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-item-group", 14)(5, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_24_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r37.ReturnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, " No Drivers Here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
}

function HomePage_ion_list_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_25_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r45.ShowDriverInfoPop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 73)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "ion-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p", 75)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 78)(16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "p", 79)(19, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r39.carname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r39.D_duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r39.driver_number_of_seats, " seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("$", ctx_r39.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("$", ctx_r39.price * 2, "");
  }
}

function HomePage_ion_list_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-skeleton-text", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 73)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "ion-skeleton-text", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "ion-skeleton-text", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 78)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "ion-skeleton-text", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "ion-skeleton-text", 84);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-select-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "ion-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const card_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", card_r47.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" \u2022\u2022\u2022\u2022 ", card_r47.last4, " ");
  }
}

function HomePage_ion_list_25_ion_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ion-icon", 87);
  }
}

function HomePage_ion_list_25_ion_progress_bar_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ion-progress-bar", 88);
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
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 50)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, HomePage_ion_list_25_div_2_Template, 21, 5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, HomePage_ion_list_25_div_3_Template, 14, 5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 58)(5, "ion-item", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "ion-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ionChange", function HomePage_ion_list_25_Template_ion_select_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r48.chooseCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, " Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, HomePage_ion_list_25_ion_select_option_13_Template, 3, 2, "ion-select-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 65)(15, "ion-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_25_Template_ion_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r50.StartRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, HomePage_ion_list_25_ion_icon_16_Template, 1, 0, "ion-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, HomePage_ion_list_25_ion_progress_bar_17_Template, 1, 0, "ion-progress-bar", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, HomePage_ion_list_25_ion_label_18_Template, 2, 0, "ion-label", 69);
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
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 50)(1, "ion-list-header")(2, "ion-item")(3, "ion-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "ion-label")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "ion-item-group", 14)(11, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_26_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r51.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ion-label")(13, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "ion-progress-bar", 92);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_27_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 50)(1, "div", 93)(2, "ion-item", 94)(3, "ion-label")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 95)(9, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "ion-img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ion-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "ion-item", 94)(16, "ion-label")(17, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "ion-item", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, HomePage_ion_list_27_ion_label_22_Template, 4, 0, "ion-label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, HomePage_ion_list_27_ion_label_23_Template, 4, 0, "ion-label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 98)(25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "ion-accordion-group", 99)(28, "ion-accordion", 100)(29, "ion-item", 101)(30, "ion-label")(31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 102)(34, "ion-button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r55.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "ion-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "ion-button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r57.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](39, "ion-icon", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "ion-button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r56);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r58.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](43, "ion-icon", 106);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_28_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ion-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-list", 50)(1, "div", 93)(2, "ion-item", 94)(3, "ion-label")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 95)(9, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "ion-img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ion-icon", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "ion-item", 94)(16, "ion-label")(17, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "ion-item", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, HomePage_ion_list_28_ion_label_22_Template, 4, 0, "ion-label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, HomePage_ion_list_28_ion_label_23_Template, 4, 0, "ion-label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 98)(25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "ion-accordion-group", 99)(28, "ion-accordion", 100)(29, "ion-item", 101)(30, "ion-label")(31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 102)(34, "ion-button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_28_Template_ion_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "ion-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "ion-button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_ion_list_28_Template_ion_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r63.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](39, "ion-icon", 105);
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
    this.presets = [];
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // First check location permissions
        const hasPermission = yield _this2.checkAndRequestLocationPermissions();

        if (!hasPermission) {
          return;
        } // Initialize profile first


        yield _this2.initializeProfile(); // Then proceed with other initializations

        yield _this2.initializeApp();
        yield _this2.initializeNetworkMonitoring();
        yield _this2.fetchSavedPaymentMethods(); // load user preset places (localStorage-backed)

        yield _this2.loadPresets();

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
  } // Preset places management (localStorage)


  loadPresets() {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const raw = localStorage.getItem('presetPlaces');

        if (raw) {
          _this3.presets = JSON.parse(raw);
        } else {
          // default presets
          _this3.presets = [{
            name: 'Queensbay Mall, Penang',
            address: 'Queensbay Mall, Bayan Lepas, Penang',
            lat: 5.2939,
            lng: 100.2719
          }, {
            name: 'George Town Ferry Terminal',
            address: 'Weld Quay, George Town, Penang',
            lat: 5.4141,
            lng: 100.3294
          }];
          localStorage.setItem('presetPlaces', JSON.stringify(_this3.presets));
        }
      } catch (e) {
        console.error('Failed to load presets', e);
        _this3.presets = [];
      }
    })();
  }

  savePresets() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        localStorage.setItem('presetPlaces', JSON.stringify(_this4.presets));
      } catch (e) {
        console.error('Failed to save presets', e);
      }
    })();
  } // Add current destination as preset


  addCurrentAsPreset() {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this5.destinationAddress || !_this5.D_LatLng || !_this5.D_LatLng.lat) {
          const alert = yield _this5.alert.create({
            header: 'Add preset',
            message: 'Please choose a destination on the map first (pin or search).',
            buttons: ['OK']
          });
          yield alert.present();
          return;
        }

        const name = _this5.destinationAddress || 'New Place';

        _this5.presets.unshift({
          name,
          address: name,
          lat: _this5.D_LatLng.lat,
          lng: _this5.D_LatLng.lng
        }); // keep only latest 10


        if (_this5.presets.length > 10) _this5.presets.length = 10;
        yield _this5.savePresets();
      } catch (e) {
        console.error('Error adding preset', e);
      }
    })();
  } // Delete preset by index


  deletePreset(i) {
    var _this6 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.presets.splice(i, 1);

      yield _this6.savePresets();
    })();
  } // Select a preset: set destination and trigger directions


  selectPreset(preset) {
    var _this7 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this7.destinationAddress = preset.name || preset.address || '';

        if (preset.lat && preset.lng) {
          _this7.D_LatLng = {
            lat: preset.lat,
            lng: preset.lng
          }; // trigger distance/directions calculation

          yield _this7.getDistanceAndDirections();
        } else {
          // fallback: if no coords, open autocomplete modal with address prefilled
          // set data for modal then open it
          yield _this7.showAutocompleteModal();
        }
      } catch (e) {
        console.error('Failed to select preset', e);
      }
    })();
  } // Add this new method


  initializeProfile() {
    var _this8 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Show loader while initializing profile
        // await this.overlay.showLoader('Loading profile...');
        // Wait for auth state to be ready
        const user = yield new Promise(resolve => {
          const unsubscribe = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.onAuthStateChanged)(_this8.auth, user => {
            unsubscribe();
            resolve(user);
          });
        });

        if (!user) {
          throw new Error('User not authenticated');
        } // Get profile data


        _this8.profile = yield _this8.database.getUserProfile();

        if (!_this8.profile) {
          console.log('Creating new profile...'); // If profile doesn't exist, create it with default values

          _this8.profile = {
            userId: user.uid,
            email: user.email,
            createdAt: new Date().toISOString() // Add any other default profile fields you need

          };
          yield _this8.database.createUserProfile(_this8.profile);
        }

        console.log('Profile initialized:', _this8.profile);

        _this8.overlay.hideLoader();
      } catch (error) {
        console.error('Error initializing profile:', error);

        _this8.overlay.hideLoader();

        yield _this8.overlay.showAlert('Profile Error', 'Unable to initialize user profile. Please try again or contact support.');
        throw error;
      }
    })();
  } // Add this method to check profile before any ride-related action


  ensureProfileInitialized() {
    var _this9 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this9.profile) {
        try {
          yield _this9.initializeProfile();
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
    var _this10 = this;

    console.log('Initializing ride state listener'); // Reset lastHandledState on initialization to ensure proper state restoration

    this.lastHandledState = null;
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.onAuthStateChanged)(this.auth, user => {
      if (!user) return; // Listen to the Request collection for active rides for this user

      const requestsQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.collection)(this.firestore, 'Request'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.where)('Rider_id', '==', user.uid), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.where)('status', 'in', ['pending', 'confirmed', 'started']));
      this.unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.onSnapshot)(requestsQuery, /*#__PURE__*/function () {
        var _ref = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (snapshot) {
          try {
            // If no active rides found, go to booking stage
            if (snapshot.empty) {
              console.log('No active rides found');

              _this10.setStage(_this10.STAGES.BOOKING);

              return;
            } // Get the most recent active ride


            const activeRides = snapshot.docs;
            const currentRide = activeRides[0];
            const rideData = currentRide.data();
            _this10.requestID = currentRide.id; // Restore price information

            _this10.price = rideData.price || 0;
            console.log('Restored ride price:', _this10.price);
            console.log('Current ride status:', rideData.status); // IMPORTANT: On app initialization, always restore ride state regardless of lastHandledState

            const isAppInitialization = !_this10.lastHandledState; // Only skip if we've already handled this state AND it's not initial app load

            if (_this10.lastHandledState === rideData.status && !isAppInitialization) {
              console.log('State already properly handled:', rideData.status);
              return;
            } // Store location data for later use


            if (rideData.Loc_lat && rideData.Loc_lng) {
              _this10.LatLng = {
                lat: rideData.Loc_lat,
                lng: rideData.Loc_lng
              };
            }

            if (rideData.Des_lat && rideData.Des_lng) {
              _this10.D_LatLng = {
                lat: rideData.Des_lat,
                lng: rideData.Des_lng
              };
            } // Store addresses


            _this10.locationAddress = rideData.Rider_Location || 'Unknown location';
            _this10.destinationAddress = rideData.Rider_Destination || 'Unknown destination';
            console.log('Restoring ride state:', rideData.status); // Handle different ride states

            switch (rideData.status) {
              case 'pending':
                yield _this10.handlePendingState();
                break;

              case 'confirmed':
                console.log('Handling confirmed state on restore...');
                yield _this10.handleRideConfirmation(rideData);
                break;

              case 'started':
                yield _this10.handleRideStart(currentRide);
                break;

              case 'cancelled':
                yield _this10.handleRideCancellation(rideData);
                break;

              default:
                console.log('Unknown ride status:', rideData.status);

                _this10.setStage(_this10.STAGES.BOOKING);

            } // Only update lastHandledState AFTER successful handling


            _this10.lastHandledState = rideData.status;
          } catch (error) {
            console.error('Error handling ride state:', error);

            if (error.code === 'permission-denied' || error.code === 'not-found') {
              _this10.overlay.showAlert('Error', 'Failed to restore ride state. Please try again.');

              _this10.setStage(_this10.STAGES.BOOKING);
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
    var _this11 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if running on web platform
        if (_this11.platform.is('capacitor')) {
          const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();

          if (permissionStatus.location === 'granted') {
            _this11.overlay.hideLoader();

            return true;
          }

          const alert = yield _this11.alert.create({
            header: 'Location Permission Required',
            message: 'This app needs access to your location to function properly.',
            buttons: [{
              text: 'Enable Location',
              handler: function () {
                var _ref2 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  const newStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();

                  _this11.overlay.hideLoader();

                  if (newStatus.location !== 'granted') {
                    yield _this11.showLocationRequiredAlert();
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
            _this11.overlay.hideLoader();

            yield _this11.showLocationRequiredAlert();
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
                  _this11.overlay.hideLoader();

                  resolve(true);
                } else {
                  _this11.overlay.hideLoader();

                  resolve(_this11.showWebLocationPrompt());
                }
              });
            });
          } else {
            _this11.overlay.hideLoader();

            yield _this11.overlay.showAlert('Error', 'Geolocation is not supported in this browser.');
            return false;
          }
        }

        return true;
      } catch (error) {
        console.error('Error checking/requesting location permissions:', error);

        _this11.overlay.hideLoader();

        throw error;
      }
    })();
  }

  showWebLocationPrompt() {
    var _this12 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alert.create({
        header: 'Location Access',
        message: 'This app needs your location. Please allow location access when prompted by your browser.',
        buttons: [{
          text: 'OK',
          handler: () => {
            return new Promise(resolve => {
              navigator.geolocation.getCurrentPosition(() => resolve(true), () => {
                _this12.showLocationRequiredAlert();

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
    var _this13 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alert.create({
        header: 'Location Required',
        message: 'Location permission is required to use this app. Please enable location services in your device settings.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  fetchSavedPaymentMethods() {
    var _this14 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this14.savedPaymentMethods = yield _this14.database.getSavedPaymentMethods();
        console.log('Saved Payment Methods:', _this14.savedPaymentMethods); // Set default payment method to cash if no cards are saved

        if (_this14.savedPaymentMethods.length === 0) {
          _this14.selectedCard = 'cash';
          _this14.cash = true;
        } else {
          _this14.selectedCard = _this14.savedPaymentMethods[0].cardId;
          _this14.cash = false;
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
    var _this15 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.overlay.showLoader('Processing payment...');

      try {
        const paymentResult = yield _this15.payME.processPaymentWithCardId(email, amount, cardId).toPromise();
        console.log('Payment successful:', paymentResult);
        yield _this15.overlay.showAlert('Success', 'Payment successful!');
      } catch (error) {
        console.error('Error during payment:', error);
        const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
        yield _this15.showPaymentErrorModal(errorMessage);
      } finally {
        _this15.overlay.hideLoader();
      }
    })();
  }

  showPaymentErrorModal(errorMessage) {
    var _this16 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this16.alert.create({
        header: 'Payment Error',
        message: errorMessage,
        buttons: [{
          text: 'Add New Card',
          handler: function () {
            var _ref3 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              const modal = yield _this16.modalCtrl.create({
                component: _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_6__.AddCardComponent // Create this component to handle adding a new card

              });
              yield modal.present();
              const {
                data
              } = yield modal.onWillDismiss();

              if (data && data.newCardId) {
                _this16.selectedCard = data.newCardId;
                _this16.cash = false;
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
    var _this17 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();
      _this17.isConnected = status.connected;

      _this17.networkStatus$.next(_this17.isConnected);

      console.log('Network monitoring initialized. Initial status:', _this17.isConnected);
      _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.addListener('networkStatusChange', status => {
        console.log('Network status changed:', status);
        _this17.isConnected = status.connected;

        _this17.networkStatus$.next(_this17.isConnected);
      });

      _this17.networkStatus$.subscribe(isConnected => {
        if (isConnected) {
          _this17.router.navigate(['home']);
        } else {
          _this17.router.navigate(['network']);
        }
      });
    })();
  }

  initializeApp() {
    var _this18 = this;

    this.platform.ready().then( /*#__PURE__*/(0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this18.initializeRideStateListener();
      } catch (error) {
        console.error('Error initializing app:', error);

        _this18.setStage(_this18.STAGES.BOOKING);
      }
    }));
  }

  initializeGeolocation() {
    var _this19 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let coordinates;

        if (_this19.platform.is('capacitor')) {
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

        _this19.coordinates = coordinates;
        _this19.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        yield _this19.database.updateLocation(_this19.LatLng);
        console.log('Geolocation initialized:', _this19.LatLng);

        _this19.startPollingPosition();
      } catch (error) {
        console.error('Error initializing geolocation:', error);

        _this19.overlay.hideLoader();

        yield _this19.overlay.showAlert('Location Error', 'Unable to get your location. Please check your device settings and try again.');
      }
    })();
  }

  startPermissionPolling() {
    var _this20 = this;

    this.permissionCheckInterval = setInterval( /*#__PURE__*/(0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();

      if (permissionStatus.location === 'granted') {
        _this20.overlay.hideLoader();

        clearInterval(_this20.permissionCheckInterval); // Try to get the current position again if permissions are granted

        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        _this20.coordinates = coordinates;
        _this20.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        console.log('Geolocation initialized:', _this20.LatLng); // Start polling the user's position

        _this20.startPollingPosition();
      }
    }), 1000); // Check every second
  }

  startPollingPosition() {
    var _this21 = this;

    let lastLatLng = {
      lat: null,
      lng: null
    };
    let lastAddress = null;
    this.pollingInterval = setInterval( /*#__PURE__*/(0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let position;

        if (_this21.platform.is('capacitor')) {
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
        yield _this21.database.updateLocation(newLatLng);

        if (_this21.hasSignificantLocationChange(lastLatLng, newLatLng, 50)) {
          // Check if moved at least 50 meters
          lastLatLng = newLatLng;
          const address = yield _this21.map.getAddress(newLatLng.lat, newLatLng.lng);

          if (address && address.results && address.results.length > 1) {
            const components = address.results[1].address_components;

            if (components.length >= 2) {
              _this21.locationAddress = components[0].long_name + ' ' + components[1].long_name;
              _this21.actualLocation = address.results[0].formatted_address;

              if (_this21.locationAddress !== lastAddress) {
                console.log('Updated Location Address:', _this21.locationAddress);
                lastAddress = _this21.locationAddress;
              }
            }
          } else {
            console.log('Unable to update location address');
          }
        }

        if (_this21.networkService.isConnected() && !_this21.stopPolling) {
          const center = [newLatLng.lat, newLatLng.lng];
          const radiusInM = 8000; // Example radius in meters

          yield _this21.fetchAndDisplayDrivers(center, radiusInM);
        } else {
          console.log('No network connection.', _this21.stopPolling);
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
    var _this22 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Ensure coordinates are available before creating map
        if (!_this22.coordinates || !_this22.coordinates.coords) {
          yield _this22.overlay.showAlert('Coordinates not available, using default location', '');
          console.warn('Coordinates not available, using default location'); // Use default coordinates (Kuala Lumpur, Malaysia)

          _this22.coordinates = {
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

        yield _this22.map.createMap(_this22.mapRef.nativeElement, _this22.coordinates);
        _this22.mapy = true;
        _this22.actualLocation = _this22.map.actualLocation; // console.log('Map initialized:', this.actualLocation, this.locationAddress);
      } catch (error) {
        _this22.overlay.showAlert('Error initializing map:', error);

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
    var _this23 = this;

    this.map.newMap.setOnCameraIdleListener( /*#__PURE__*/function () {
      var _ref7 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (g) {
        _this23.ngZone.run( /*#__PURE__*/(0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this23.showResetLocationButton = true;

          if (_this23.mapPinStage) {
            const addressResponse = yield _this23.geocode.getAddress(g.latitude, g.longitude).toPromise();

            _this23.processAddressResponse(addressResponse);
          }
        }));
      });

      return function (_x2) {
        return _ref7.apply(this, arguments);
      };
    }());
  }

  logout() {
    var _this24 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this24.authService.logout();
    })();
  }

  fetchAndDisplayDrivers(center, radiusInM) {
    var _this25 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const drivers = yield _this25.database.checkDriversWithin(center, radiusInM);
        console.log('Fetched drivers:', drivers);
        yield _this25.handleDrivers(drivers);

        if (_this25.drivers_Requested.length > 0) {
          _this25.current_Request_Number = 0; // Set to the first available driver

          yield _this25.UpdateCarMarker(_this25.drivers_Requested);
          _this25.NoDrivers = false;
        } else {
          _this25.current_Request_Number = -1; // No valid driver

          yield _this25.UpdateCarMarker([]); // Clear all markers if no drivers are requested

          _this25.NoDrivers = true;
        }
      } catch (error) {
        console.error('Error fetching drivers:', error);
        _this25.current_Request_Number = -1; // Reset the request number

        yield _this25.UpdateCarMarker([]); // Clear all markers if there's an error

        _this25.NoDrivers = true;
      }
    })();
  }

  handleDrivers(drivers) {
    var _this26 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this26.drivers_Requested = [];
      _this26.closeDrivers = null;
      console.log('Handling drivers:', drivers);

      if (drivers.length === 0) {
        _this26.NoDrivers = true;
        console.log('No drivers found.');
        return;
      }

      drivers.forEach(driver => {
        if (driver) {
          console.log('Processing driver:', driver);

          if (driver.duration <= 1000 && driver.onlineState) {
            _this26.drivers_Requested.push(driver);

            _this26.updateDriverInfo(driver);
          }

          if (!_this26.closeDrivers || driver.duration < _this26.closeDrivers.duration) {
            _this26.closeDrivers = driver;
          }
        } else {
          console.error('Driver is null or undefined:', driver);
        }
      });

      if (_this26.drivers_Requested.length === 0) {
        _this26.NoDrivers = true;
      } else {
        // Ensuring current_Request_Number is within the bounds
        _this26.current_Request_Number = Math.min(_this26.current_Request_Number, _this26.drivers_Requested.length - 1);
      }

      console.log('Final requested drivers list:', _this26.drivers_Requested);
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
    var _this27 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.isLoadingDriver) {
        console.log('Ride request already in progress...');
        return;
      }

      _this27.isLoadingDriver = true;

      _this27.overlay.showLoader('Preparing your ride...');

      try {
        // Group operations that can be done concurrently
        yield Promise.all([_this27.clearPrevMarkers(), _this27.clearAllPolylines()]);

        _this27.map.newMap.enableTouch();

        yield _this27.BookRide();
      } catch (error) {
        console.error('Error starting ride:', error);
        yield _this27.overlay.showAlert('Starting Ride Error', error.message || 'Failed to start ride');
      } finally {
        // Ensure we always hide the loader and reset the loading state
        _this27.isLoadingDriver = false;

        _this27.overlay.hideLoader();
      }
    })();
  }

  clearMarkers() {
    var _this28 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.marker1) {
        yield _this28.map.newMap.removeMarker(_this28.marker1);
        _this28.marker1 = null;
      }

      if (_this28.marker2) {
        yield _this28.map.newMap.removeMarker(_this28.marker2.toString());
        _this28.marker2 = null;
      }

      if (_this28._carmarkers) {
        for (const {
          marker
        } of _this28._carmarkers) {
          yield _this28.map.newMap.removeMarker(marker); // Assuming marker is the instance
        }

        _this28._carmarkers = []; // Clear the array after removing markers
      }
    })();
  }

  BookRide() {
    var _this29 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!(yield _this29.ensureProfileInitialized())) {
          throw new Error('Profile not initialized');
        }

        if (!_this29.hasValidDriver()) {
          _this29.showNoDriversAlert();

          return;
        }

        const driver = _this29.drivers_Requested[_this29.current_Request_Number];
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.doc)(_this29.firestore, `Drivers`, driver.Driver_id);
        const docSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.getDoc)(userDocRef);

        if (!docSnapshot.exists()) {
          throw new Error('Driver document not found');
        }

        const data = docSnapshot.data();

        if (!data?.onlineState) {
          yield _this29.handleNoAvailableDriver();
          return;
        }

        _this29.driverInfo = data;
        yield _this29.requestRideWithDriverDetails(driver, userDocRef);

        _this29.updateDriverInfo(driver);
      } catch (error) {
        console.error('Error in BookRide:', error);

        _this29.overlay.showAlert('Error', 'Unable to book ride. Please try again.');
      }
    })();
  }

  hasValidDriver() {
    return this.drivers_Requested?.[this.current_Request_Number]?.Driver_id != null;
  }

  requestRideWithDriverDetails(driver, userDocRef) {
    var _this30 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!(yield _this30.ensureProfileInitialized())) {
          throw new Error('Profile not initialized');
        }

        const requestDetails = {
          latLng: _this30.LatLng,
          destinationAddress: _this30.destinationAddress,
          locationAddress: _this30.locationAddress,
          dLatLng: _this30.D_LatLng,
          driverId: driver.Driver_id,
          price: _this30.price,
          cash: _this30.cash
        };
        _this30.requestID = yield _this30.database.RequestRideWithRiderDetails(requestDetails);

        if (_this30.requestID) {
          _this30.currentDriver = driver; // Set up listener before handling pending state

          const rideRequestDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.doc)(_this30.firestore, `Request`, _this30.requestID);
          const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.onSnapshot)(rideRequestDocRef, /*#__PURE__*/function () {
            var _ref9 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
              if (doc.exists()) {
                yield _this30.handleRideUpdates(doc);
              } else {
                console.error('Ride request document does not exist.');
              }
            });

            return function (_x3) {
              return _ref9.apply(this, arguments);
            };
          }());
          _this30.unsubscribe = unsub; // Now handle the pending state

          yield _this30.handlePendingState();
        } else {
          throw new Error('Failed to generate requestID');
        }
      } catch (error) {
        console.error('Error in requestRideWithDriverDetails:', error);

        _this30.overlay.showAlert('Error', 'Unable to request ride. Please try again.');
      }
    })();
  }

  showNoDriversAlert() {
    console.error('No valid driver available to book a ride.');
    this.overlay.showAlert('No Drivers ', 'No available drivers found. Please try again later.');
  }

  handleNoAvailableDriver() {
    var _this31 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Driver is not available, moving to next.');
      _this31.current_Request_Number++;

      if (_this31.hasValidDriver()) {
        yield _this31.BookRide();
      } else {
        _this31.showNoDriversAlert();
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
    var _this32 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = doc.data();
      if (!data) return;

      try {
        switch (data.status) {
          case 'confirmed':
            yield _this32.handleRideConfirmation(doc);
            break;

          case 'started':
            yield _this32.handleRideStart(doc);
            break;

          case 'stopped':
            yield _this32.handleRideStop(doc);
            break;

          case 'cancelled':
            yield _this32.handleRideCancellation(data);
            break;
        }
      } catch (error) {
        console.error('Error handling ride updates:', error);

        if (error.code === 'permission-denied' || error.code === 'not-found') {
          yield _this32.ReturnHome();
        }
      }
    })();
  }

  handlePendingState() {
    var _this33 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Don't show another loader here since BookRide is already showing one
        if (!_this33.currentDriver?.Driver_id) {
          throw new Error('No valid driver ID found');
        } // Get driver location with timeout


        const locationPromise = _this33.getDriverLocation(_this33.currentDriver.Driver_id);

        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Location fetch timeout')), 10000));
        yield Promise.race([locationPromise, timeoutPromise]);

        if (!_this33.DriverLatLng) {
          throw new Error('Failed to get driver location');
        } // Group all map operations


        yield Promise.all([_this33.clearPrevMarkers(), _this33.clearPolyline(_this33.newPoly), _this33.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this33.DriverLatLng
        })]); // Update map height properly instead of using fixed positioning

        _this33.ngZone.run(() => {
          _this33.setMapHeightHandleDrivertoRider();
        });

        yield _this33.handleDriverToRider(_this33.DriverLatLng, _this33.LatLng);

        _this33.EnterSearchingStage();

        yield _this33.startCountdown(20, _this33.requestID);
      } catch (error) {
        console.error('Error in handlePendingState:', error);
        throw error; // Let BookRide handle the error and cleanup
      }
    })();
  }

  presentCancelRideActionSheet() {
    var _this34 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this34.actionSheetController.create({
        header: 'Cancel Ride',
        buttons: [{
          text: 'Changed my mind',
          handler: () => {
            _this34.cancelRide('Changed my mind');
          }
        }, {
          text: 'Driver took too long',
          handler: () => {
            _this34.cancelRide('Driver took too long');
          }
        }, {
          text: 'Found another ride',
          handler: () => {
            _this34.cancelRide('Found another ride');
          }
        }, {
          text: 'Other',
          handler: () => {
            _this34.cancelRide('Other');
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
    var _this35 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.doc)(_this35.firestore, 'Request', _this35.requestID);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.updateDoc)(rideRef, {
        status: 'cancelled',
        cancellationReason: reason,
        canceledBy: 'rider'
      });
      const toast = yield _this35.toastController.create({
        message: 'Ride has been cancelled.',
        duration: 2000
      });
      yield toast.present();
    })();
  }

  handleRideCancellation(data) {
    var _this36 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this36.stopCountdown();

      yield _this36.clearPrevMarkers();

      _this36.unsubscribe();

      _this36.clearSubscriptions();

      if (_this36.drivers_Requested[_this36.current_Request_Number + 1] && !_this36.rideHasStarted) {
        _this36.current_Request_Number++;
        yield _this36.BookRide();
      } else {
        if (data.canceledBy == 'driver') {
          _this36.overlay.showAlert('Cancelled', 'Driver cancelled');
        }

        _this36.ClearRide();

        _this36.ReturnHome();
      }
    })();
  }

  handleRideStart(doc) {
    var _this37 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Starting ride tracking setup...'); // Clear previous visual elements

        yield _this37.clearPrevMarkers();
        yield _this37.clearPolyline(_this37.newPoly); // Get ride data and validate

        const data = doc.data();

        if (!data) {
          console.warn('handleRideStart: No data found in document');
          throw new Error('No ride data available');
        }

        console.log('handleRideStart data:', data); // Set ride state flag first to prevent race conditions

        _this37.rideHasStarted = true; // Set current driver from document data with fallback options

        if (data.driverDetails) {
          _this37.currentDriver = data.driverDetails;
          _this37.driverInfo = data.driverDetails;
        } else if (data.driverId) {
          console.log('Driver details missing, attempting to fetch from driver ID');

          try {
            const driverDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.getDoc)(doc(_this37.firestore, 'Drivers', data.driverId));

            if (driverDoc.exists()) {
              _this37.driverInfo = driverDoc.data();
              _this37.currentDriver = _this37.driverInfo;
            }
          } catch (error) {
            console.warn('Failed to fetch driver details:', error); // Continue with limited driver info
          }
        } // Adjust map height before adding markers


        _this37.setMapHeightHandleDrivertoDestination();

        window.addEventListener('resize', _this37.setMapHeightHandleDrivertoDestination.bind(_this37)); // Initialize locations with fallbacks

        _this37.LatLng = {
          lat: data.Loc_lat || _this37.LatLng?.lat || 0,
          lng: data.Loc_lng || _this37.LatLng?.lng || 0
        };
        _this37.D_LatLng = {
          lat: data.Des_lat || _this37.D_LatLng?.lat || 0,
          lng: data.Des_lng || _this37.D_LatLng?.lng || 0
        }; // Ensure map is initialized

        if (!_this37.map.newMap) {
          console.log('Map not initialized in handleRideStart, initializing now...');

          try {
            yield _this37.initializeMap();
          } catch (mapError) {
            console.error('Failed to initialize map:', mapError); // Allow continuation with limited functionality
          }
        } // Get driver location with better error handling


        let driverLocationFetched = false;

        if (data.driverId) {
          try {
            console.log('Fetching driver location for ID:', data.driverId); // Use Promise.race with a timeout to prevent hanging

            const locationPromise = _this37.database.getDriverLocation(data.driverId);

            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Driver location fetch timeout')), 5000));
            const driverLocation = yield Promise.race([locationPromise, timeoutPromise]);

            if (driverLocation && typeof driverLocation === 'object' && 'lat' in driverLocation && 'lng' in driverLocation) {
              console.log('Got real-time driver location:', driverLocation);
              _this37.DriverLatLng = {
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
          _this37.DriverLatLng = {
            lat: data.driverDetails?.Driver_lat || data.driver_lat || _this37.LatLng.lat,
            lng: data.driverDetails?.Driver_lng || data.driver_lng || _this37.LatLng.lng
          };
        } // Setup UI state even if visualization might fail


        _this37.EnterDrivingToDestinationStage();

        _this37.canCheck = true; // Proceed with visualization if we have valid coordinates

        if (_this37.DriverLatLng?.lat && _this37.D_LatLng?.lat) {
          console.log('Calling handleRiderToDestination with locations:', 'Driver:', _this37.DriverLatLng, 'Destination:', _this37.D_LatLng);

          try {
            yield _this37.handleRiderToDestination(_this37.DriverLatLng, _this37.D_LatLng);
          } catch (visualError) {
            console.warn('Failed to visualize route, but ride is still active:', visualError); // Show a non-blocking toast or notification

            const toast = yield _this37.toastController.create({
              message: 'Route visualization failed, but your ride is still active',
              duration: 3000
            });
            toast.present();
          }
        } else {
          console.warn('Invalid coordinates for visualization:', _this37.DriverLatLng, _this37.D_LatLng);
          const toast = yield _this37.toastController.create({
            message: 'Location data incomplete. Your ride is active but not fully visualized.',
            duration: 3000
          });
          toast.present();
        }

        console.log('Ride tracking setup completed successfully');
      } catch (error) {
        console.error('Error in handleRideStart:', error); // Still enter driving stage so user can see at least some UI

        _this37.EnterDrivingToDestinationStage();

        _this37.canCheck = true; // Show a less alarming message to the user

        const toast = yield _this37.toastController.create({
          message: 'Some ride details couldn\'t be loaded. Your ride is still active.',
          duration: 3000
        });
        toast.present();
      }
    })();
  } // Improve handleRideStop to better handle map errors


  handleRideStop(docSnapshot) {
    var _this38 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Handling ride stop...'); // If already processed, exit immediately

        if (_this38.isRideStopProcessed) {
          console.log('Ride stop already processed, exiting function');
          return;
        } // Set flag immediately to prevent re-processing


        _this38.isRideStopProcessed = true; // Stop all location polling and mapping activities immediately

        _this38.stopPolling = true; // Unsubscribe from route updates first

        if (_this38.routeUpdateSubscription) {
          _this38.routeUpdateSubscription.unsubscribe();

          _this38.routeUpdateSubscription = null;
        } // Then clear other subscriptions


        _this38.clearSubscriptions(); // Force removal of all map elements with multiple attempts if needed


        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            yield _this38.clearPrevMarkers();
            yield _this38.clearAllPolylines();
            break; // Exit loop if successful
          } catch (e) {
            console.error(`Map cleanup attempt ${attempt + 1} failed:`, e); // Short delay before retry

            yield new Promise(resolve => setTimeout(resolve, 100));
          }
        } // Prepare ride data with proper fallbacks for required fields


        const docData = docSnapshot.data ? docSnapshot.data() : docSnapshot;
        const tripId = docSnapshot.id || _this38.requestID;
        const rideData = {
          tripId: tripId || '',
          driverId: docData?.driverDetails?.Driver_id || _this38.driverInfo?.Driver_id || '',
          driverName: docData?.driverDetails?.Driver_name || _this38.driverInfo?.Driver_name || 'Unknown Driver',
          driverImage: docData?.driverDetails?.Driver_imgUrl || _this38.driverInfo?.Driver_imgUrl || '',
          driverCar: docData?.driverDetails?.Driver_car || _this38.driverInfo?.Driver_car || '',
          driverPlate: docData?.driverDetails?.Driver_plate || _this38.driverInfo?.Driver_plate || '',
          pickup: docData?.Rider_Location || _this38.locationAddress || 'Unknown pickup',
          destination: docData?.Rider_Destination || _this38.destinationAddress || 'Unknown destination',
          price: docData?.price || _this38.price || 0,
          distance: docData?.distance || _this38.distance || 0,
          duration: docData?.duration || _this38.duration || '',
          rating: docData?.driverDetails?.Driver_rating || _this38.driverInfo?.Driver_rating || 0,
          completed: true,
          completedAt: new Date()
        }; // CRITICAL: Clear ride state from storage BEFORE showing modal

        try {
          yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__.Preferences.remove({
            key: _this38.RIDE_STATE_KEY
          });
          console.log('Cleared ride state from storage');
        } catch (e) {
          console.warn('Error clearing storage:', e);
        } // Reset ride properties BEFORE showing modal


        _this38.rideHasStarted = false;
        _this38.driverLocation = null;
        _this38.lastHandledState = null;
        console.log('Showing trip summary with data:', rideData); // Show the trip summary

        const modal = yield _this38.modalCtrl.create({
          component: _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_8__.TripSummaryComponent,
          componentProps: {
            rideData
          }
        });
        yield modal.present(); // Clean up once modal is dismissed

        modal.onDidDismiss().then(() => {
          console.log('Trip summary dismissed, resetting state');
          _this38.isRideStopProcessed = false; // Reset the flag

          _this38.clearRideState(); // Additional cleanup


          _this38.ReturnHome(); // Return to booking view

        });
      } catch (error) {
        console.error('Error in handleRideStop:', error);
        _this38.isRideStopProcessed = false;

        _this38.ReturnHome();
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
    var _this39 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Starting ride confirmation handling...', docOrData);

        _this39.stopCountdown(); // Clear existing markers and polylines


        yield Promise.all([_this39.clearPrevMarkers(), _this39.clearPolyline(_this39.newPoly)]); // Get the ride data

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
          docId = _this39.requestID; // Use the current requestID if available
        }

        if (!rideData) {
          throw new Error('No ride data found');
        } // Update ride information


        _this39.requestID = docId || rideData.requestId;
        _this39.driverInfo = rideData.driverDetails; // Set driver information for UI display to avoid template errors

        if (_this39.driverInfo) {
          _this39.carname = _this39.driverInfo.Driver_car || 'Unknown Car';
          _this39.driverImage = _this39.driverInfo.Driver_imgUrl || 'assets/icon/profile.png';
          _this39.driver_ID = _this39.driverInfo.Driver_id;
          _this39.driver_number_of_seats = _this39.driverInfo.seats || 4;
          _this39.driver_duration_apart = _this39.driverInfo.duration ? Math.ceil(_this39.driverInfo.duration / 60000) : 0;
        } // Set locations


        _this39.LatLng = {
          lat: rideData.Loc_lat,
          lng: rideData.Loc_lng
        };
        _this39.D_LatLng = {
          lat: rideData.Des_lat,
          lng: rideData.Des_lng
        }; // Initialize map if not already initialized

        if (!_this39.map.newMap) {
          yield _this39.initializeMap();
        } // Get and wait for driver location


        if (!_this39.driverInfo?.Driver_id) {
          console.warn('Driver ID not found in driver details, using fallback location'); // Use fallback location from driver details

          _this39.driverLocation = {
            lat: _this39.driverInfo?.Driver_lat || _this39.driverInfo?.driver_lat,
            lng: _this39.driverInfo?.Driver_lng || _this39.driverInfo?.driver_lng
          };
        } else {
          try {
            yield _this39.getDriverLocation(_this39.driverInfo.Driver_id);
          } catch (locationError) {
            console.warn('Error getting real-time driver location, using fallback:', locationError); // Use fallback location from driver details

            _this39.driverLocation = {
              lat: _this39.driverInfo?.Driver_lat || _this39.driverInfo?.driver_lat,
              lng: _this39.driverInfo?.Driver_lng || _this39.driverInfo?.driver_lng
            };
          }
        }

        if (!_this39.driverLocation?.lat || !_this39.driverLocation?.lng) {
          throw new Error('Unable to determine driver location');
        }

        _this39.DriverLatLng = {
          lat: _this39.driverLocation.lat,
          lng: _this39.driverLocation.lng
        };
        console.log('Driver location set:', _this39.DriverLatLng); // Set map height and add event listener

        _this39.setMapHeightHandleDrivertoRider();

        window.addEventListener('resize', _this39.setMapHeightHandleDrivertoRider.bind(_this39)); // Initialize the map view with driver and rider markers

        yield _this39.handleDriverToRider(_this39.DriverLatLng, _this39.LatLng); // Update UI state

        _this39.EnterTrackingStage(); // Save ride state to local storage


        yield _this39.saveRideStateToStorage();
        console.log('Ride confirmation handled successfully');
        return true;
      } catch (error) {
        console.error('Error handling ride confirmation:', error);
        return false;
      }
    })();
  } // Add this method to save ride state to storage


  saveRideStateToStorage() {
    var _this40 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const rideState = {
          requestID: _this40.requestID,
          driverInfo: _this40.driverInfo,
          LatLng: _this40.LatLng,
          D_LatLng: _this40.D_LatLng,
          DriverLatLng: _this40.DriverLatLng,
          stage: _this40.getCurrentStage()
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
    var _this41 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__.EnrouteChatComponent,
        componentProps: {
          userId: _this41.requestID,
          message: ""
        },
        swipeToClose: true
      };
      const modal = yield _this41.modalCtrl.create(options);
      return yield modal.present();
    })();
  }

  startCountdown(initialTime, requestId) {
    var _this42 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this42.countdownActive = true;
      let timeRemaining = initialTime;

      const updateCountdown = /*#__PURE__*/function () {
        var _ref10 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (!_this42.countdownActive) {
            console.log('Countdown stopped');
            return;
          }

          if (timeRemaining > 0) {
            try {
              yield _this42.database.UpdateCountDown(timeRemaining, requestId);
              timeRemaining--;
              setTimeout(updateCountdown, 1000);
            } catch (error) {
              console.error('Error updating countdown:', error); // Retry after a short delay

              setTimeout(updateCountdown, 2000);
            }
          } else {
            yield _this42.handleCountdownEnd(requestId);
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
    var _this43 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Implement a grace period to account for any delays
        setTimeout( /*#__PURE__*/(0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this43.clearPrevMarkers();
          yield _this43.requestNextDriver();
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
    var _this44 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this44.stopPolling = false; // Enable current location and set the camera to the initial position

        yield _this44.map.newMap.enableCurrentLocation(true);
        yield _this44.ResetState();
        yield _this44.showAutocompleteModal();
        console.log('Game state reset successfully');
      } catch (error) {
        console.error('Error resetting game state:', error);
      }
    })();
  }

  clearPrevMarkers() {
    var _this45 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if map is initialized
        if (!_this45.map || !_this45.map.newMap) {
          console.warn('Map not initialized when clearing markers');
          return; // Exit early if map is not available
        }

        console.log('Clearing all markers...'); // Clear individual markers with proper error handling

        const markers = [_this45.rider_marker, _this45.driver_marker, _this45.destinationMarker, _this45.marker1, _this45.marker2, _this45.animatedMarker];
        const clearPromises = markers.filter(marker => marker !== null && marker !== undefined).map(marker => _this45.clearMarker(marker).catch(e => {
          console.error('Error clearing specific marker:', e); // Continue despite error

          return null;
        }));
        yield Promise.all(clearPromises); // Reset all marker references

        _this45.rider_marker = null;
        _this45.driver_marker = null;
        _this45.destinationMarker = null;
        _this45.marker1 = null;
        _this45.marker2 = null;
        _this45.animatedMarker = null;
        console.log('All markers cleared successfully');
      } catch (e) {
        console.error('Error in clearPrevMarkers:', e); // Just log the error but don't throw, allowing the process to continue
      }
    })();
  } // Add this helper method for individual marker clearing


  clearMarker(marker) {
    var _this46 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!marker || !_this46.map?.newMap) return Promise.resolve();

      try {
        console.log('Clearing marker:', marker);
        yield _this46.map.newMap.removeMarker(marker);
        return true;
      } catch (error) {
        console.error('Error clearing marker:', error);
        return false;
      }
    })();
  } // Modify clearAllPolylines for safer handling


  clearAllPolylines() {
    var _this47 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this47.map || !_this47.map.newMap) {
          console.warn('Map not initialized when clearing polylines');
          return;
        }

        console.log('Clearing all polylines...'); // Try to clear specific polyline first

        if (_this47.newPoly) {
          try {
            yield _this47.map.newMap.removePolylines(_this47.newPoly);
            console.log('Specific polyline cleared');
          } catch (error) {
            console.error('Error clearing specific polyline:', error);
          }
        } // Reset reference


        _this47.newPoly = null;
      } catch (error) {
        console.error('Error in clearAllPolylines:', error); // Just log the error but don't throw
      }
    })();
  }

  ResetState() {
    var _this48 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Clear previous markers
        yield _this48.clearPrevMarkers(); // Clear any existing polylines

        yield _this48.clearPolyline(_this48.newPoly);
        yield _this48.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this48.LatLng
        });

        _this48.ResetMapHeight();

        window.addEventListener('resize', _this48.ResetMapHeight.bind(_this48));

        _this48.map.newMap.enableTouch(); // Ensure the map respects the boundaries of the top and bottom bars


        _this48.current_Request_Number = 0;
        _this48.price = null;
        _this48.actualDestination = null;
        _this48.D_LatLng = {
          lat: null,
          lng: null
        };
        _this48.destinationAddress = 'Unknown location';
        yield _this48.map.newMap.enableCurrentLocation(true);
      } catch (e) {
        throw new Error(e);
      }
    })();
  }

  showAutocompleteModal() {
    var _this49 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent,
        componentProps: {
          LatLng: _this49.LatLng,
          locationAddress: _this49.locationAddress
        },
        swipeToClose: true
      };
      const modal = yield _this49.modalCtrl.create(options);
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log('Modal dismissed with data:', data);
      _this49.data = data;

      if (data.pinOnMap) {
        _this49.EnterMapPinStage();

        _this49.mapPinDrag = true;
        _this49.stopPolling = true;
      }

      if (data.home) {
        console.log("Entering Booking Stage...");

        _this49.EnterBookingStage();

        _this49.stopPolling = false;

        _this49.ResetState();
      }

      if (data.searching) {
        _this49.database.AddKnownPlace(data);

        _this49.destinationAddress = data.full;
        _this49.actualDestination = data.whole.full;

        try {
          const latLng = yield _this49.geocode.getLatLng(data.whole.description).toPromise();
          _this49.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          console.log("Destination LatLng:", _this49.D_LatLng);
          yield _this49.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);

          _this49.overlay.showAlert('Error in geocoding:', error.message);
        }
      }
    })();
  }

  RequestRide(dat) {
    var _this50 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this50.NoDrivers) {
        _this50.destinationAddress = dat.place.full;
        _this50.actualDestination = dat.place.whole.full;

        try {
          const latLng = yield _this50.geocode.getLatLng(dat.place.whole.description).toPromise();
          _this50.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          yield _this50.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);

          _this50.overlay.showAlert('Check Your Network', error.message);
        }
      } else {
        _this50.EnterNoDriverStage();

        console.log("No drivers available");
      }
    })();
  }

  getDistanceAndDirections() {
    var _this51 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirections called");
      _this51.duration = null;
      yield _this51.clearMarkers();

      _this51.cleanupListeners();

      _this51.stopPolling = true;

      if (_this51.D_LatLng && _this51.D_LatLng.lat) {
        console.log("D_LatLng is set:", _this51.D_LatLng);

        if (!_this51.NoDrivers) {
          _this51.EnterConfirmStage();
        } else {
          _this51.EnterNoDriverStage();

          console.log("No drivers available");
          return;
        }

        const origin1 = new google.maps.LatLng(_this51.LatLng.lat, _this51.LatLng.lng);
        const origin2 = new google.maps.LatLng(_this51.D_LatLng.lat, _this51.D_LatLng.lng);
        const request = {
          origin: origin1,
          destination: origin2,
          travelMode: google.maps.TravelMode.DRIVING
        };

        _this51.geocode.directions.route(request, /*#__PURE__*/function () {
          var _ref12 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
            if (status === 'OK') {
              _this51.direction = response;
              _this51.distance = response.routes[0].legs[0].distance.value;
              _this51.bounds = response.routes[0].bounds;
              _this51.price = yield _this51.database.getPriceEstimate(_this51.distance);
              _this51.duration = response.routes[0].legs[0].duration.text; // Build full path from the directions response so polyline follows the route

              const path = response.routes[0].overview_path.map(latlng => ({
                lat: latlng.lat(),
                lng: latlng.lng()
              }));
              yield _this51.createAndAddMarkers(_this51.LatLng, _this51.D_LatLng, path); // Call getDistanceAndDirectionsDriver after this part is successful

              yield _this51.getDistanceAndDirectionsDriver();
            } else {
              console.error('Direction ERROR:', response);

              _this51.overlay.showAlert('Check Your Network', JSON.stringify(response));
            }
          });

          return function (_x4, _x5) {
            return _ref12.apply(this, arguments);
          };
        }());
      } else {
        _this51.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');

        console.error('D_LatLng or D_LatLng.lat is undefined');
      }
    })();
  }

  getDistanceAndDirectionsDriver() {
    var _this52 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirectionsDriver called");

      if (!_this52.NoDrivers) {
        console.log("Driver LatLng:", _this52.DriverLatLng);

        if (_this52.DriverLatLng) {
          const origin1 = new google.maps.LatLng(_this52.LatLng.lat, _this52.LatLng.lng);
          const origin2 = new google.maps.LatLng(_this52.DriverLatLng.lat, _this52.DriverLatLng.lng);
          const request = {
            origin: origin1,
            destination: origin2,
            travelMode: google.maps.TravelMode.DRIVING
          };

          _this52.geocode.directions.route(request, (response, status) => {
            if (status === 'OK') {
              _this52.D_duration = response.routes[0].legs[0].duration.text;
              console.log("Driver duration:", _this52.D_duration);
            } else {
              console.error('Direction ERROR:', response);

              _this52.overlay.showAlert('Direction ERROR:', JSON.stringify(response));
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
    var _this53 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this53.LatLng);
      yield _this53.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this53.LatLng
      });
      _this53.showResetLocationButton = false;
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
    var _this54 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Elements to update car markers:', elements);
      const bounds = new google.maps.LatLngBounds(); // Create a map of driver IDs to driver elements for quick lookup

      const driverMap = new Map(elements.map(element => [element.Driver_id, element])); // Track markers to keep and update

      const updatedMarkers = []; // Remove markers that are not needed and update positions

      for (const {
        id,
        marker
      } of _this54._carmarkers) {
        const driver = driverMap.get(id);

        if (!driver || !driver.onlineState) {
          console.log(`Removing marker for driver ID: ${id}`);
          yield _this54.map.newMap.removeMarker(marker); // Remove the marker from the map
        } else if (driver.Driver_lat !== undefined && driver.Driver_lng !== undefined) {
          const latlng = {
            lat: driver.Driver_lat,
            lng: driver.Driver_lng
          }; // Remove old marker and add a new one with updated position

          yield _this54.map.newMap.removeMarker(marker); // updatedMarkers.push({ id, marker: newMarker });

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


      _this54._carmarkers = updatedMarkers; // Center the map around the car markers if there are any markers

      if (updatedMarkers.length > 0) {
        const mapDim = {
          height: _this54.mapRef.nativeElement.offsetHeight,
          width: _this54.mapRef.nativeElement.offsetWidth
        };
        const minZoom = 5; // Define your minimum zoom level

        const maxZoom = 18; // Define your maximum zoom level

        let zoomLevel = yield _this54.map.getBoundsZoomLevel(bounds, mapDim); // Constrain the zoom level within the min and max range

        zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));
        console.log('Setting camera with zoom level:', zoomLevel);
        yield _this54.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: zoomLevel,
          coordinate: bounds.getCenter()
        });

        _this54.map.newMap.fitBounds(bounds);
      } else {
        console.log('No markers to display on the map.');
      }
    })();
  }

  GoHome() {
    var _this55 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this55.map.newMap.enableCurrentLocation(true);
      _this55.current_Request_Number = 0;
      _this55.stopPolling = false;
      _this55.price = null;

      _this55.EnterBookingStage();

      yield _this55.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this55.LatLng
      });
    })();
  }

  GotoSupport() {
    var _this56 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this56.nav.navigateForward('support');
    })();
  }

  ReturnHome() {
    var _this57 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this57.ResetState();

      _this57.EnterBookingStage();

      _this57.stopPolling = false;
      yield _this57.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this57.LatLng
      });
    })();
  }

  CancelRide() {
    var _this58 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this58.overlay.showLoader('Cancelling your ride...');

        yield _this58.clearPrevMarkers();
        yield _this58.clearPolyline(_this58.newPoly);

        _this58.unsubscribe();

        _this58.numCalls.unsubscribe();

        _this58.riderCleared = true;
        yield _this58.database.cancelRide(_this58.requestID);
        yield _this58.map.newMap.enableCurrentLocation(true);
        _this58.current_Request_Number = 0;
        _this58.price = null;

        _this58.EnterBookingStage();

        _this58.overlay.hideLoader();

        yield _this58.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this58.LatLng
        });
        yield _this58.clearRideState();
      } catch (error) {
        _this58.overlay.hideLoader();

        console.error('Error cancelling ride:', error);

        _this58.overlay.showAlert('Error', 'Failed to cancel ride. Please try again.');
      }
    })();
  }

  ClearRide() {
    var _this59 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = _this59.auth.currentUser;

        if (user) {
          const riderDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.doc)(_this59.firestore, 'Riders', user.uid);
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.updateDoc)(riderDocRef, {
            currentRequestId: null
          });
        }
      } catch (error) {
        console.error('Error clearing ride state:', error);
      }

      _this59.EnterBookingStage();

      yield _this59.clearPrevMarkers();
      yield _this59.clearPolyline(_this59.newPoly);
      _this59.newPoly = null;
      yield _this59.map.newMap.enableCurrentLocation(true);
      _this59.current_Request_Number = 0;
      _this59.price = null;
      yield _this59.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this59.LatLng,
        bearing: 0
      });
    })();
  }

  CallDriver() {// Implement CallDriver logic

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  handleDriverToRider(driverLatLng, riderLatLng) {
    var _this60 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        if (_this60.routeUpdateSubscription) {
          _this60.routeUpdateSubscription.unsubscribe();

          _this60.routeUpdateSubscription = null;
        } // Check if map is initialized, if not initialize it


        if (!_this60.map.newMap) {
          console.log('Map not initialized, initializing now...');
          yield _this60.initializeMap();
        } // Thoroughly clean up previous visual elements


        yield _this60.clearPrevMarkers();
        yield _this60.clearAllPolylines(); // Use the unified height method and ensure proper positioning

        _this60.setMapContainerHeight(20); // Add driver marker at the starting position with adjusted z-index


        const driverMarker = yield _this60.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          zIndex: 10 // Ensure marker appears above polylines

        });
        _this60.driver_marker = driverMarker; // Add rider marker with higher z-index

        const riderMarker = yield _this60.map.newMap.addMarker({
          coordinate: riderLatLng,
          iconUrl: _this60.database.user?.photoURL || 'assets/icon/person.png',
          title: 'Rider',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          zIndex: 11 // Higher than driver marker

        });
        _this60.rider_marker = riderMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref13 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: riderLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this60.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref14 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this60.duration = response.routes[0].legs[0].duration.text;
                  _this60.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this60.duration}, Distance: ${_this60.distance}`);
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

                  const center = _this60.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(riderLatLng.lat, riderLatLng.lng));
                  const availableHeight = _this60.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this60.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level

                  const zoomLevel = _this60.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

                  yield _this60.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this60.map.calculateBearing(driverLatLng, riderLatLng)); // Clear existing polyline before drawing a new one

                  yield _this60.clearAllPolylines(); // Draw full route polyline (use overview_path)

                  yield _this60.addPolyline(driverLatLng, riderLatLng, path); // Clear any existing animated marker before starting a new animation

                  if (_this60.animatedMarker) {
                    yield _this60.map.newMap.removeMarker(_this60.animatedMarker);
                    _this60.animatedMarker = null;
                  } // Animate the driver marker along the path to the rider


                  yield _this60.animateMarker(_this60.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);

                  _this60.overlay.showAlert('Direction ERROR', JSON.stringify(response));
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


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.interval)(_this60.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this60.routeUpdateSubscription = routeUpdate$.subscribe();
      } catch (error) {
        console.error('Error handling driver to rider:', error);
      }
    })();
  } // Update clearPolyline to handle null map


  clearPolyline(polylineId) {
    var _this61 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!polylineId || !_this61.map?.newMap) return;

      try {
        yield _this61.map.newMap.removePolylines(polylineId);
      } catch (error) {
        console.error('Error clearing polyline:', error);
      }
    })();
  }

  handleRiderToDestination(driverLatLng, destinationLatLng) {
    var _this62 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        if (_this62.routeUpdateSubscription) {
          _this62.routeUpdateSubscription.unsubscribe();

          _this62.routeUpdateSubscription = null;
        } // Check if map is initialized, if not initialize it


        if (!_this62.map.newMap) {
          console.log('Map not initialized, initializing now...');
          yield _this62.initializeMap();
        } // Reset map position and apply proper height first


        _this62.mapRef.nativeElement.style.top = '0';

        _this62.setMapHeightHandleDrivertoDestination(); // Thoroughly clean up previous visual elements


        yield _this62.clearPrevMarkers();
        yield _this62.clearAllPolylines(); // Update driver marker to driver's current position

        const driverMarker = yield _this62.map.newMap.addMarker({
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
        _this62.driver_marker = driverMarker; // Add destination marker

        const destinationMarker = yield _this62.map.newMap.addMarker({
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
        _this62.destinationMarker = destinationMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref15 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: destinationLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this62.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref16 = (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this62.duration = response.routes[0].legs[0].duration.text;
                  _this62.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this62.duration}, Distance: ${_this62.distance}`);
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

                  const center = _this62.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng));
                  const availableHeight = _this62.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this62.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level

                  const zoomLevel = _this62.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
                  // Set the camera to focus on the center point with appropriate zoom level

                  yield _this62.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this62.map.calculateBearing(driverLatLng, destinationLatLng)); // Clear existing polyline before drawing a new one

                  yield _this62.clearAllPolylines(); // Draw full route polyline (use overview_path)

                  yield _this62.addPolyline(driverLatLng, destinationLatLng, path); // Clear any existing animated marker before starting a new animation

                  if (_this62.animatedMarker) {
                    yield _this62.map.newMap.removeMarker(_this62.animatedMarker);
                    _this62.animatedMarker = null;
                  } // Animate the driver marker along the path to the destination


                  yield _this62.animateMarker(_this62.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);

                  _this62.overlay.showAlert('Direction ERROR', JSON.stringify(response));
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


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.interval)(_this62.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this62.routeUpdateSubscription = routeUpdate$.subscribe();
      } catch (error) {
        console.error('Error handling rider to destination:', error);
      }
    })();
  } // Add polyline using either a full route path or fallback to start/end


  addPolyline(loc, des, routePath) {
    var _this63 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const polylineColor = "#007bff";
        const pathPoints = Array.isArray(routePath) && routePath.length > 0 ? routePath : [{
          lat: loc.lat,
          lng: loc.lng
        }, {
          lat: des.lat,
          lng: des.lng
        }];
        const polylines = [{
          path: pathPoints,
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }];
        const addedPolylines = yield _this63.map.newMap.addPolylines(polylines);

        if (Array.isArray(addedPolylines) && addedPolylines.length > 0) {
          _this63.newPoly = addedPolylines; // assign the returned ids

          console.log('Polylines added:', _this63.newPoly);
          return _this63.newPoly;
        } else {
          throw new Error('Failed to add polyline: Unexpected response format');
        }
      } catch (e) {
        console.error('Error Adding Polyline: ', e);
        throw e;
      }
    })();
  } // create markers and optionally draw a full route if provided


  createAndAddMarkers(loc, des, routePath) {
    var _this64 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon

      try {
        _this64.map.newMap.disableTouch(); // Add start marker


        _this64.marker1 = yield _this64.map.newMap.addMarker({
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

        _this64.marker2 = yield _this64.map.newMap.addMarker({
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

        const center = _this64.map.calculateCenter(locs); // Calculate the bounds


        const bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
        bounds.extend(new google.maps.LatLng(des.lat, des.lng)); // Set map height before calculating zoom level

        _this64.setMapHeight();

        const availableHeight = _this64.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

        const mapDim = {
          height: availableHeight,
          width: _this64.mapRef.nativeElement.offsetWidth
        }; // Calculate zoom level

        const zoomLevel = _this64.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


        const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
        // Set the camera to focus on the center point with appropriate zoom level

        yield _this64.map.setCameraToLocation({
          lat: center.latitude,
          lng: center.longitude
        }, adjustedZoomLevel, _this64.map.calculateBearing(loc, des)); // Add polyline for the route. Prefer full routePath when provided.

        const polylineColor = "#007bff";
        const pathPoints = Array.isArray(routePath) && routePath.length > 0 ? routePath : [{
          lat: loc.lat,
          lng: loc.lng
        }, {
          lat: des.lat,
          lng: des.lng
        }];
        const polylines = [{
          path: pathPoints,
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }]; // Add polyline to the map

        _this64.newPoly = yield _this64.map.newMap.addPolylines(polylines);
      } catch (error) {
        console.error('Error creating and adding markers:', error);
      }
    })();
  } // Update the animateMarker method to properly handle cleanup


  animateMarker(marker, path, iconUrl) {
    var _this65 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 50,
        height: 50
      };
      const iconAnchor = {
        x: 25,
        y: 50
      }; // Center bottom of the icon
      // Remove any existing animated marker

      if (_this65.animatedMarker) {
        yield _this65.map.newMap.removeMarker(_this65.animatedMarker);
        _this65.animatedMarker = null;
      }

      let lastMarker = null;

      for (let i = 0; i < path.length; i++) {
        // Remove previous animation step marker if it exists
        if (lastMarker) {
          yield _this65.map.newMap.removeMarker(lastMarker);
        } // Remove the original marker for the first frame of animation


        if (i === 0) {
          yield _this65.map.newMap.removeMarker(marker);
        }

        const coordinate = path[i] instanceof google.maps.LatLng ? {
          lat: path[i].lat(),
          lng: path[i].lng()
        } : {
          lat: path[i].lat,
          lng: path[i].lng
        };
        lastMarker = yield _this65.map.newMap.addMarker({
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


      _this65.animatedMarker = lastMarker;
    })();
  }

  ShowDriverInfoPop() {
    var _this66 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this66.alert.create({
        header: 'Driver Information',
        message: `
      <div style="text-align: center;">
        <h2 style="font-size: 1.2em; margin-bottom: 0.5em;">Car Name: ${_this66.carname}</h2>
        <div style="margin: 10px 0;">
          <img src="${_this66.driverImage}" alt="Driver Image" style="width: 60px; height: 60px; border-radius: 50%;">
        </div>
        <p><strong>Duration Apart:</strong> ${_this66.driver_duration_apart} minutes</p>
        <p><strong>Driver ID:</strong> ${_this66.driver_ID}</p>
        <p><strong>Number of Seats:</strong> ${_this66.driver_number_of_seats}</p>
        <p><strong>Driver Location:</strong> (${_this66.DriverLatLng.lat}, ${_this66.DriverLatLng.lng})</p>
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
    var _this67 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Setting up rebooking with data:', state); // Set pickup location

        if (state.pickup && state.pickup.address) {
          _this67.locationAddress = state.pickup.address;

          if (state.pickup.lat && state.pickup.lng) {
            _this67.LatLng = {
              lat: state.pickup.lat,
              lng: state.pickup.lng
            }; // Add location marker

            yield _this67.addLocationMarker(_this67.LatLng);
          } else {
            // If no coordinates, geocode the address
            const coords = yield _this67.geocodeService.geocodeAddress(state.pickup.address);

            if (coords) {
              _this67.LatLng = coords;
              yield _this67.addLocationMarker(coords);
            }
          }
        } // Set destination


        if (state.destination && state.destination.address) {
          _this67.destinationAddress = state.destination.address;

          if (state.destination.lat && state.destination.lng) {
            _this67.D_LatLng = {
              lat: state.destination.lat,
              lng: state.destination.lng
            }; // Add destination marker

            yield _this67.addDestinationMarker(_this67.D_LatLng);
          } else {
            // If no coordinates, geocode the address
            const coords = yield _this67.geocodeService.geocodeAddress(state.destination.address);

            if (coords) {
              _this67.D_LatLng = coords;
              yield _this67.addDestinationMarker(coords);
            }
          }
        } // If both locations are set, calculate route


        if (_this67.LatLng && _this67.D_LatLng) {
          yield _this67.drawRoute();
          yield _this67.calculatePrice();

          _this67.EnterConfirmStage();
        }
      } catch (error) {
        console.error('Error processing book again data:', error); // Show error toast

        const toast = yield _this67.toastCtrl.create({
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
  consts: [[1, "ion-no-border", 2, "position", "relative", "z-index", "1000", 3, "translucent"], ["class", "ion-padding", 4, "ngIf"], ["lines", "none", "color", "light", "class", "main-buttons ion-no-padding", "class", "top_bar", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "top: 35px;", 4, "ngIf"], ["vertical", "top", "horizontal", "end", "style", "top: 35px;", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "top: 35px;", 3, "click", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], ["scroll-y", "false", 3, "fullscreen"], ["map", ""], ["vertical", "bottom", "horizontal", "end", "style", "bottom: 130px;", 4, "ngIf"], ["class", "centerPin", "vertical", "center", "horizontal", "center", "style", "z-index: 1000;", 4, "ngIf"], ["bottomBar", ""], ["class", "bottomItems shadow-top", "lines", "full", 4, "ngIf"], ["lines", "full", 1, "bottomItems", "shadow-top", 3, "hidden"], [1, "ion-margin-horizontal", "ion-margin-bottom"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "end", "name", "arrow-forward"], ["class", "bottomItems shadow-top", "lines", "none", 4, "ngIf"], [1, "ion-padding"], ["slot", "start"], ["shape", "round", 3, "click"], ["slot", "icon-only", "name", "arrow-back", "color", "tertiary"], ["slot", "end"], ["fill", "outline", "color", "primary", "lines", "none", 1, "duration"], ["slot", "icon-only", "name", "flag", "color", "primary"], ["color", "primary", 4, "ngIf"], ["color", "primary"], ["lines", "none", "color", "light", 1, "top_bar", 3, "click"], ["slot", "start", "color", "primary", "name", "pencil"], ["vertical", "top", "horizontal", "start", 2, "top", "35px"], ["color", "light"], ["vertical", "top", "horizontal", "end", 2, "top", "35px", 3, "click"], ["color", "primary", "name", "chatbubble-ellipses"], ["vertical", "top", "horizontal", "start", 2, "top", "35px", 3, "click"], ["name", "arrow-back", "color", "primary"], [1, "ion-text-center"], ["vertical", "bottom", "horizontal", "end", 2, "bottom", "130px"], ["color", "light", 3, "click"], ["name", "locate"], ["vertical", "center", "horizontal", "center", 1, "centerPin", 2, "z-index", "1000"], ["src", "../../assets/icon/pin.png"], ["lines", "full", 1, "bottomItems", "shadow-top"], [1, "preset-row", "ion-padding-horizontal"], ["outline", "true", 3, "click", 4, "ngFor", "ngForOf"], ["fill", "clear", "size", "small", 3, "click"], ["slot", "icon-only", "name", "add-circle"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "disabled", "click"], ["slot", "start", "name", "search", "color", "primary"], ["outline", "true", 3, "click"], ["name", "close-circle", "slot", "end", 3, "click"], ["lines", "none", 1, "bottomItems", "shadow-top"], [2, "margin", "0 auto"], ["src", "../../assets/imgs/No connection-pana.svg"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "arrow-back"], [1, "ride-confirmation-card"], ["class", "ride-details", 4, "ngIf"], ["class", "ride-details skeleton", 4, "ngIf"], [1, "payment-selector"], ["lines", "none"], ["name", "wallet-outline", "slot", "start", "color", "primary"], ["interface", "popover", 3, "value", "ionChange"], ["value", "cash"], ["name", "cash-outline"], [3, "value", 4, "ngFor", "ngForOf"], [1, "book-button-container"], ["shape", "round", "color", "primary", "size", "large", "expand", "block", 1, "book-ride-btn", 3, "click"], ["slot", "start", "name", "checkmark-sharp", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], [4, "ngIf"], [1, "ride-details"], [1, "vehicle-info", 3, "click"], ["src", "../../assets/icon/hatchback.png"], [1, "vehicle-details"], ["name", "information-circle", "color", "primary"], [1, "vehicle-stats"], ["name", "time", "color", "primary"], ["name", "person", "color", "primary"], [1, "price-tag"], [1, "original-price"], [1, "ride-details", "skeleton"], [1, "vehicle-info"], [3, "animated"], [2, "width", "130px", 3, "animated"], [2, "width", "60px", 3, "animated"], [3, "value"], ["name", "card-outline"], ["slot", "start", "name", "checkmark-sharp"], ["color", "light", "type", "indeterminate"], [3, "src"], ["fill", "outline", "shape", "round", "color", "danger", "size", "small", "type", "submit", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "slot", "icon-only", "name", "close-sharp", "color", "danger"], ["color", "primary", "type", "indeterminate", 1, "ion-padding"], [1, "card"], ["lines", "none", 1, "driver-card-item"], ["slot", "end", 1, "driver-avatar-container"], [1, "driver-rating"], ["color", "warning", "name", "star"], ["slot", "end", 1, "price-container"], [1, "driver-actions-accordion"], ["value", "first"], ["slot", "header", 1, "accordion-header"], ["slot", "content", 1, "accordion-content"], ["shape", "round", "size", "large", "expand", "block", 1, "main-button", 3, "click"], ["color", "primary", "slot", "start", "name", "person"], ["color", "primary", "slot", "start", "name", "chatbubbles"], ["color", "primary", "slot", "start", "name", "close"], ["color", "primary", "name", "cash"], ["color", "primary", "name", "card"], ["color", "secondary", "name", "star"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "capacitor-google-maps", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, HomePage_ion_fab_11_Template, 3, 0, "ion-fab", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, HomePage_ion_fab_12_Template, 3, 0, "ion-fab", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "ion-footer", 0)(14, "div", null, 11)(16, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, HomePage_ion_list_17_Template, 10, 3, "ion-list", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "ion-list", 13)(19, "ion-item-group", 14)(20, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_20_listener() {
        return ctx.getDistanceAndDirections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, HomePage_ion_list_24_Template, 9, 0, "ion-list", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, HomePage_ion_list_25_Template, 19, 7, "ion-list", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, HomePage_ion_list_26_Template, 15, 3, "ion-list", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, HomePage_ion_list_27_Template, 46, 9, "ion-list", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](28, HomePage_ion_list_28_Template, 42, 9, "ion-list", 17);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.SelectValueAccessor],
  styles: ["capacitor-google-maps[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100vh;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.8s;\n}\n\n.bottomItems[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-header[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 0vh;\n  background: transparent;\n  display: block;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 20px 20px;\n  padding-bottom: 0vh;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n  --inner-padding-bottom: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  position: relative;\n  --background: transparent;\n  margin-top: 20px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  background: transparent;\n  display: block;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0 0;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  --background: transparent !important;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-padding-bottom: 1px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: transparent !important;\n}\n\n.centerElem[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: 0.5;\n}\n\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.top_bar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.main-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%] {\n  min-height: 150px;\n  height: auto;\n  max-height: 80vh;\n  overflow-y: auto;\n  transition: height 0.3s ease;\n  padding: 16px;\n  margin-bottom: env(safe-area-inset-bottom, 0px);\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 24px 24px 0 0;\n}\n\n.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%], .bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 200px;\n}\n\n.bottomItems.shadow-top[ngIf=searchingStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 180px;\n}\n\n.bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 250px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-radius: 16px;\n  margin-bottom: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  margin: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-radius: 16px;\n  background: var(--ion-color-light);\n  overflow: hidden;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: transparent;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  --padding-start: 0;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 16px;\n  --border-radius: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\nion-progress-bar[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 4px;\n  margin: 8px 0;\n}\n\nion-progress-bar[type=indeterminate][_ngcontent-%COMP%] {\n  --progress-background: var(--ion-color-primary);\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --border-radius: 8px;\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --border-radius: 20px;\n  height: 40px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border: 2px solid var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border: 2px solid var(--ion-color-primary);\n  position: relative;\n  overflow: visible;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 14px;\n  height: 14px;\n  background: var(--ion-color-success);\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child) {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  border-radius: 12px;\n  margin: 8px 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child)   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child)   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash]), .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card]) {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  border-radius: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header.ion-margin-bottom[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-radius: 16px;\n  margin-bottom: 16px !important;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header.ion-margin-bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  overflow: hidden;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  --border-radius: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 0;\n  --border-width: 1px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child {\n  --background: rgba(var(--ion-color-danger-rgb), 0.1);\n  --color: var(--ion-color-danger);\n  --border-color: var(--ion-color-danger);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger) !important;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(var(--ion-color-primary-rgb), 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(var(--ion-color-primary-rgb), 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(var(--ion-color-primary-rgb), 0);\n  }\n}\n\n.bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=searchingStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], .bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=trackingStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], .bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  animation: pulse 2s infinite;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%] {\n  max-height: calc(40vh - 20px);\n  overflow-y: auto;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-radius: 16px;\n  background: var(--ion-color-light);\n  overflow: hidden;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --min-height: 48px;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --min-height: 42px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 2px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  padding: 8px;\n  min-height: unset;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%]   .ion-margin-bottom[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   .ion-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\nion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n\nion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin-bottom: 4px;\n  height: auto;\n}\n\n.driver-card-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0;\n  margin-bottom: 8px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 60px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 4px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   .driver-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   .driver-rating[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n\n.price-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  min-width: 70px;\n}\n\n.price-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-content[_ngcontent-%COMP%] {\n  padding: 8px 16px 16px;\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin: 0 16px 16px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.bottomItems[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px 16px 0 0;\n  padding: 16px;\n  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .ride-details[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .ride-details.skeleton[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]:active {\n  background: #eef0f2;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 4px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 18px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  font-size: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-left: 8px;\n  flex-shrink: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 2px;\n  color: var(--ion-color-primary);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  color: var(--ion-color-medium);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  text-decoration-color: var(--ion-color-danger);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n  --padding-start: 12px;\n  --padding-end: 8px;\n  --min-height: 54px;\n  border-radius: 12px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  min-width: 130px;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n  --padding-end: 12px;\n  --placeholder-opacity: 1;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  margin: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n\nion-footer[_ngcontent-%COMP%]   .bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  max-height: unset;\n}\n\nion-footer[_ngcontent-%COMP%]   .bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%]   .ride-confirmation-card[_ngcontent-%COMP%] {\n  animation: slide-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@keyframes pulse-bg {\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.6;\n  }\n}\n\n.ride-details.skeleton[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%] {\n  animation: pulse-bg 1.5s infinite;\n  --border-radius: 8px;\n  --background: rgba(var(--ion-color-primary-rgb), 0.12);\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%] {\n  --width: 240px;\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%]   .select-interface-option[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%]   .select-interface-option[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 18px;\n}\n\n.map-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% - var(--bottom-bar-height, 0px));\n  top: var(--header-height, 0px);\n  left: 0;\n  z-index: 10;\n  transition: height 0.3s ease;\n}\n\n.map-container.with-tracking[_ngcontent-%COMP%] {\n  height: calc(100% - 210px);\n  top: 56px;\n}\n\n.map-container.with-booking[_ngcontent-%COMP%] {\n  height: calc(100% - 100px);\n  top: 0;\n}\n\n.map-container.with-confirm[_ngcontent-%COMP%] {\n  height: calc(100% - 260px);\n  top: 120px;\n}\n\n.map-container.with-searching[_ngcontent-%COMP%] {\n  height: calc(100% - 180px);\n  top: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkJBQUE7RUFDRjtFQUNBO0lBQ0UseUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0MsbUVBQUE7QUFBRDs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFDQUFBO0FBQUY7O0FBS0U7RUFDRSxnQkFBQTtBQUZKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFHSTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFFUTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQUFWOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBTUk7RUFDSSxtQkFBQTtBQUpSOztBQU1JO0VBQ0ksNEJBQUE7QUFKUjs7QUFPWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFMaEI7O0FBVUU7RUFDRSxpQkFBQTtBQVJKOztBQVdLO0VBQ0MsZ0JBQUE7RUFFQyxvQ0FBQTtBQVZQOztBQVdPO0VBQ0MsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQVRSOztBQW9CQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7QUFsQkY7O0FBcUJBO0VBRUUsaUJBQUE7RUFDQSxTQUFBO0FBbkJGOztBQXNCQztFQUVHLHVEQUFBO0FBcEJKOztBQXVCRTtFQUNFLHNEQUFBO0FBcEJKOztBQXVCRTtFQUNFLHVEQUFBO0FBcEJKOztBQXVCQTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7QUFwQkY7O0FBd0JBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBdEJGOztBQTJCRTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUdBLGFBQUE7RUFDQSwrQ0FBQTtFQW1CQSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw0QkFBQTtBQTdDSjs7QUEyQkk7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7QUExQk47O0FBNkJJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBM0JOOztBQThCSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQTVCTjs7QUFtQ0k7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQWpDTjs7QUFtQ007RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWpDUjs7QUFtQ1E7RUFDRSxnQkFBQTtBQWpDVjs7QUFvQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbENWOztBQXNDVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXBDWjs7QUFzQ1k7RUFDRSxlQUFBO0FBcENkOztBQXdDVTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUF0Q1o7O0FBd0NZO0VBQ0UsZUFBQTtBQXRDZDs7QUE0Q007RUFDRSxpQkFBQTtBQTFDUjs7QUE0Q1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7QUExQ1Y7O0FBNkNRO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FBM0NWOztBQWlERTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBL0NKOztBQWlESTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQS9DTjs7QUFpRE07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBL0NSOztBQW1ESTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFqRE47O0FBbURNO0VBQ0UsaUJBQUE7QUFqRFI7O0FBb0RNO0VBQ0UsWUFBQTtBQWxEUjs7QUF5REE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBdERGOztBQXdERTtFQUNFLCtDQUFBO0FBdERKOztBQTJEQTtFQUNFLG9CQUFBO0VBQ0EscURBQUE7QUF4REY7O0FBa0VNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQS9EUjs7QUFpRVE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUEvRFY7O0FBaUVVO0VBQ0UsZUFBQTtBQS9EWjs7QUFvRU07RUFDRSxVQUFBO0FBbEVSOztBQW9FUTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFsRVY7O0FBb0VVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQWxFWjs7QUFxRVU7RUFDRSxpQkFBQTtBQW5FWjs7QUFxRVk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW5FZDs7QUFzRVk7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFwRWQ7O0FBZ0ZNO0VBRUUsa0JBQUE7QUEvRVI7O0FBaUZRO0VBQ0UsZ0JBQUE7QUEvRVY7O0FBa0ZRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFoRlY7O0FBa0ZVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQWhGWjs7QUFvRlE7RUFDRSx1QkFBQTtBQWxGVjs7QUFxRlk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQW5GZDs7QUF5RlE7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXZGVjs7QUEwRlk7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQXhGZDs7QUEyRlk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXpGZDs7QUErRlE7RUFFRSxtREFBQTtFQUNBLG1CQUFBO0FBOUZWOztBQWdHVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE5Rlo7O0FBZ0dZO0VBQ0UsZUFBQTtBQTlGZDs7QUFzR0k7RUFDRSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXBHTjs7QUFzR007RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBcEdSOztBQXlHSTtFQUNFLGdCQUFBO0FBdkdOOztBQXlHTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUF2R1I7O0FBeUdRO0VBQ0UsbURBQUE7RUFDQSxxQkFBQTtBQXZHVjs7QUF5R1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQXZHWjs7QUEyR1E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXpHVjs7QUEyR1U7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7QUF6R1o7O0FBMkdZO0VBQ0Usb0RBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0FBekdkOztBQTJHYztFQUNFLHlDQUFBO0FBekdoQjs7QUFvSEE7RUFDRTtJQUNFLDJEQUFBO0VBakhGO0VBbUhBO0lBQ0UsNERBQUE7RUFqSEY7RUFtSEE7SUFDRSx5REFBQTtFQWpIRjtBQUNGOztBQW9IQTs7O0VBR0UsNEJBQUE7QUFsSEY7O0FBdUhFO0VBRUUsNkJBQUE7RUFDQSxnQkFBQTtBQXJISjs7QUF3SEk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQXRITjs7QUF5SE07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBdkhSOztBQTBIUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUF4SFY7O0FBNEhRO0VBQ0Usa0JBQUE7QUExSFY7O0FBNEhVO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBMUhaOztBQTRIWTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUExSGQ7O0FBNkhZO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQTNIZDs7QUFpSVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQS9IVjs7QUFxSUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFuSU47O0FBcUlNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQW5JUjs7QUF3SUk7O0VBRUUsNkJBQUE7QUF0SU47O0FBeUlJOztFQUVFLGVBQUE7QUF2SU47O0FBNklBO0VBQ0UsdUJBQUE7QUExSUY7O0FBNElFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQTFJSjs7QUErSUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQTVJRjs7QUFnSkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUE3SUY7O0FBK0lFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTdJSjs7QUFnSkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTlJSjs7QUFnSkk7RUFDRSxpQkFBQTtBQTlJTjs7QUFvSkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBakpGOztBQW1KRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFqSko7O0FBc0pBO0VBQ0UsZUFBQTtFQUNBLGtEQUFBO0FBbkpGOztBQXFKRTtFQUNFLG9DQUFBO0FBbkpKOztBQXNKRTtFQUNFLHNCQUFBO0FBcEpKOztBQXNKSTtFQUNFLGdCQUFBO0FBcEpOOztBQTBKQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF2SkY7O0FBMkpBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQXhKRjs7QUE0SkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBekpGOztBQTZKQTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7QUExSkY7O0FBNEpFO0VBQ0UsbUJBQUE7QUExSko7O0FBNEpJO0VBQ0UsWUFBQTtBQTFKTjs7QUE4SkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQTVKSjs7QUE4Skk7RUFDRSxtQkFBQTtBQTVKTjs7QUErSkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQTdKTjs7QUFnS0k7RUFDRSxPQUFBO0FBOUpOOztBQWdLTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUE5SlI7O0FBZ0tRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBOUpWOztBQWtLTTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQWhLUjs7QUFrS1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFoS1Y7O0FBa0tVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBaEtaOztBQXNLSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBcEtOOztBQXNLTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQXBLUjs7QUF1S007RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBcktSOztBQXVLUTtFQUNFLDhDQUFBO0FBcktWOztBQTJLRTtFQUNFLGNBQUE7QUF6S0o7O0FBMktJO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXpLTjs7QUEyS007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUF6S1I7O0FBNEtNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBMUtSOztBQTZLTTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUEzS1I7O0FBZ0xFO0VBQ0UsZ0JBQUE7QUE5S0o7O0FBZ0xJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQTlLTjs7QUFnTE07RUFDRSxpQkFBQTtBQTlLUjs7QUFpTE07RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQS9LUjs7QUFrTE07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFoTFI7O0FBdUxBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFwTEY7O0FBc0xFO0VBQ0UsbUVBQUE7QUFwTEo7O0FBeUxBO0VBQ0U7SUFDRSxZQUFBO0VBdExGO0VBd0xBO0lBQ0UsVUFBQTtFQXRMRjtFQXdMQTtJQUNFLFlBQUE7RUF0TEY7QUFDRjs7QUEyTEk7RUFDRSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0RBQUE7QUF6TE47O0FBaU1FO0VBQ0UsY0FBQTtBQTlMSjs7QUFnTUk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBOUxOOztBQWdNTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQTlMUjs7QUF1TUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrREFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQXBNRjs7QUF1TUU7RUFDRSwwQkFBQTtFQUNBLFNBQUE7QUFyTUo7O0FBd01FO0VBQ0UsMEJBQUE7RUFDQSxNQUFBO0FBdE1KOztBQXlNRTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtBQXZNSjs7QUEwTUU7RUFDRSwwQkFBQTtFQUNBLFNBQUE7QUF4TUoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYXBhY2l0b3ItZ29vZ2xlLW1hcHMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlLXRvcCB7XHJcblx0YW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbi5jZW50ZXJQaW57XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XHJcbn1cclxuXHJcbi5ib3R0b21JdGVtc3tcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG5cclxuaW9uLXNrZWxldG9uLXRleHQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjYyNSk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgIFxyXG4gIGlvbi1mYWJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBpb24tcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwdmg7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICBcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gIGlvbi1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDV2aDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjV2aDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA2dmg7XHJcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICBpb24tZmFie1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgfVxyXG4gICBpb24tbGlzdHtcclxuICAgICAucGF5bWVudHtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgLy8gIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICBcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG4uY2VudGVyRWxlbVxyXG57XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByaWNlXHJcbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZmxleDogMC41O1xyXG4gfVxyXG4gXHJcbiAuc2hhZG93LXRvcFxyXG4gIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XHJcbiAgfVxyXG5cclxuICAudG9wX2JhcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAxLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcclxuICB9XHJcblxyXG4gIC5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcclxuICB9XHJcblxyXG4ubWFpbi1idXR0b257XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsgXHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5wcmV2aWV3IHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYWxsYmFjayB7XHJcbiAgd2lkdGg6IDEyOHB4O1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMjRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwJVxyXG59XHJcblxyXG4vLyBNb2Rlcm4gQ2FyZCBTdHlsaW5nIGZvciBTZWxlY3Rpb24gQmFyXHJcbi5ib3R0b21JdGVtcyB7XHJcbiAgJi5zaGFkb3ctdG9wIHtcclxuICAgIC8vIFJlbW92ZSBmaXhlZCBtYXgtaGVpZ2h0XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDsgLy8gTWluaW11bSBoZWlnaHQgdG8gZW5zdXJlIHZpc2liaWxpdHlcclxuICAgIGhlaWdodDogYXV0bzsgLy8gTGV0IGl0IGdyb3cgYmFzZWQgb24gY29udGVudFxyXG4gICAgbWF4LWhlaWdodDogODB2aDsgLy8gTWF4aW11bSBoZWlnaHQgYXMgcGVyY2VudGFnZSBvZiB2aWV3cG9ydCBoZWlnaHRcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8vIEtlZXAgc2Nyb2xsaW5nIGlmIGNvbnRlbnQgaXMgdG9vIGxvbmdcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7IC8vIFNtb290aCBoZWlnaHQgdHJhbnNpdGlvbnNcclxuICAgIFxyXG4gICAgLy8gRW5zdXJlIHByb3BlciBwYWRkaW5nIGFuZCBzcGFjaW5nXHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20sIDBweCk7IC8vIEFjY291bnQgZm9yIG5vdGNoZXMvaG9tZSBpbmRpY2F0b3JzXHJcbiAgICBcclxuICAgIC8vIFdoZW4gaW4gZGlmZmVyZW50IHN0YWdlcywgYWRqdXN0IGhlaWdodCBhY2NvcmRpbmdseVxyXG4gICAgJltuZ0lmPVwidHJhY2tpbmdTdGFnZVwiXSxcclxuICAgICZbbmdJZj1cImRyaXZpbmdUb0Rlc3RpbmF0aW9uU3RhZ2VcIl0ge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4OyAvLyBTbGlnaHRseSB0YWxsZXIgZm9yIHRoZXNlIHN0YWdlc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmW25nSWY9XCJzZWFyY2hpbmdTdGFnZVwiXSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZbbmdJZj1cImNvbmZpcm1TdGFnZVwiXSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMCAwO1xyXG4gICAgXHJcbiAgICAucGF5bWVudCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByaWNlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCBkZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgXHJcbiAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMTZweDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNb2Rlcm4gUHJvZ3Jlc3MgQmFyXHJcbmlvbi1wcm9ncmVzcy1iYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIFxyXG4gICZbdHlwZT1cImluZGV0ZXJtaW5hdGVcIl0ge1xyXG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTa2VsZXRvbiBMb2FkaW5nIEFuaW1hdGlvblxyXG5pb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XHJcbn1cclxuXHJcbi8vIFNoYXJlZCBzdHlsZXMgZm9yIGFsbCB0cmFja2luZyBiYXJzXHJcbi5ib3R0b21JdGVtcyB7XHJcbiAgJi5zaGFkb3ctdG9wIHtcclxuICAgIC8vIC4uLiBleGlzdGluZyBzdHlsZXMgLi4uXHJcbiAgICBcclxuICAgIC8vIENvbm5lY3RpbmcgdG8gZHJpdmVyIGJhciAoc2VhcmNoaW5nU3RhZ2UpXHJcbiAgICAmOmhhcyhpb24tcHJvZ3Jlc3MtYmFyW3R5cGU9XCJpbmRldGVybWluYXRlXCJdKSB7XHJcbiAgICAgIC5pb24tbWFyZ2luLWhvcml6b250YWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRHJpdmVyIHRyYWNraW5nIHN0eWxlcyAodHJhY2tpbmdTdGFnZSAmIGRyaXZpbmdUb0Rlc3RpbmF0aW9uU3RhZ2UpXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIC8vIC4uLiBleGlzdGluZyBzdHlsZXMgLi4uXHJcbiAgICAgIFxyXG4gICAgICAvLyBFbmhhbmNlZCBkcml2ZXIgaW5mbyBsYXlvdXRcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC8vIC4uLiBleGlzdGluZyBzdHlsZXMgLi4uXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgICAgICByaWdodDogLTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLnByaWNlIHtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBEcml2ZXIgY2FyIGluZm9cclxuICAgICAgICAmOmhhcyhpb24tbGFiZWwgcDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQYXltZW50IG1ldGhvZCBpdGVtXHJcbiAgICAgICAgJjpoYXMoaW9uLWljb25bbmFtZT1cImNhc2hcIl0pLCBcclxuICAgICAgICAmOmhhcyhpb24taWNvbltuYW1lPVwiY2FyZFwiXSkge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIGgxIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFycml2YWwgdGltZSBoZWFkZXJcclxuICAgIGlvbi1saXN0LWhlYWRlci5pb24tbWFyZ2luLWJvdHRvbSB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWNjb3JkaW9uIGdyb3VwIHN0eWxpbmdcclxuICAgIGlvbi1hY2NvcmRpb24tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWFjY29yZGlvbiB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuNSk7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbCBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGl2W3Nsb3Q9XCJjb250ZW50XCJdIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4xKTtcclxuICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbmltYXRpb24gZm9yIGRyaXZlciBhdmF0YXJcclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuNCk7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdHRvbUl0ZW1zIGlvbi1saXN0W25nSWY9XCJzZWFyY2hpbmdTdGFnZVwiXSBpb24tYXZhdGFyLFxyXG4uYm90dG9tSXRlbXMgaW9uLWxpc3RbbmdJZj1cInRyYWNraW5nU3RhZ2VcIl0gaW9uLWF2YXRhcixcclxuLmJvdHRvbUl0ZW1zIGlvbi1saXN0W25nSWY9XCJkcml2aW5nVG9EZXN0aW5hdGlvblN0YWdlXCJdIGlvbi1hdmF0YXIge1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8vIENvbnNpc3RlbnQgaGVpZ2h0IGZvciBhbGwgYm90dG9tIGJhcnNcclxuLmJvdHRvbUl0ZW1zIHtcclxuICAmLnNoYWRvdy10b3Age1xyXG4gICAgLy8gQ29tbW9uIHNldHRpbmdzIGZvciBhbGwgYm90dG9tIGJhcnNcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoNDB2aCAtIDIwcHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIFxyXG4gICAgLy8gQ29uc2lzdGVudCBjYXJkIHN0eWxpbmcgYWNyb3NzIGFsbCBib3R0b20gYmFyc1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBcclxuICAgICAgLy8gTW9yZSBjb21wYWN0IGl0ZW0gc3BhY2luZyBmb3IgdHJhY2tpbmcvZGVzdGluYXRpb24gc3RhZ2VzXHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IDQ4cHg7IC8vIFJlZHVjZSBkZWZhdWx0IGl0ZW0gaGVpZ2h0XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgLy8gUmVtb3ZlIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVkdWNlIHBhZGRpbmcgaW5zaWRlIGl0ZW1zXHJcbiAgICAgICAgJi5wcmljZSBpb24tbGFiZWwgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4OyAvLyBTbGlnaHRseSBzbWFsbGVyIHByaWNlIGZvbnRcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBNYWtlIG5lc3RlZCBpdGVtcyBtb3JlIGNvbXBhY3RcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBNYWtlIGF2YXRhcnMgc21hbGxlciBhbmQgY29uc2lzdGVudFxyXG4gICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE1vcmUgY29tcGFjdCBoZWFkZXJcclxuICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgICAgIFxyXG4gICAgICBpb24tbGFiZWwgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNwZWNpZmljYWxseSBmb3IgdHJhY2tpbmcgc3RhZ2VzLCBtYWtlIHRoZW0gbW9yZSBjb21wYWN0XHJcbiAgICBpb24tbGlzdC5ib3R0b21JdGVtcy5zaGFkb3ctdG9wW25nSWY9XCJ0cmFja2luZ1N0YWdlXCJdIC5pb24tbWFyZ2luLWJvdHRvbSxcclxuICAgIGlvbi1saXN0LmJvdHRvbUl0ZW1zLnNoYWRvdy10b3BbbmdJZj1cImRyaXZpbmdUb0Rlc3RpbmF0aW9uU3RhZ2VcIl0gLmlvbi1tYXJnaW4tYm90dG9tIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3QuYm90dG9tSXRlbXMuc2hhZG93LXRvcFtuZ0lmPVwidHJhY2tpbmdTdGFnZVwiXSBpb24tYWNjb3JkaW9uLWdyb3VwLFxyXG4gICAgaW9uLWxpc3QuYm90dG9tSXRlbXMuc2hhZG93LXRvcFtuZ0lmPVwiZHJpdmluZ1RvRGVzdGluYXRpb25TdGFnZVwiXSBpb24tYWNjb3JkaW9uLWdyb3VwIHtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWFrZSBhY2NvcmRpb24gbW9yZSBjb21wYWN0IGZvciBhY3Rpb24gYnV0dG9uc1xyXG5pb24tYWNjb3JkaW9uIGRpdltzbG90PVwiY29udGVudFwiXSB7XHJcbiAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCZXR0ZXIgbGF5b3V0IGZvciBkcml2ZXIgY2FyZFxyXG4uZHJpdmVyLWNhcmQtaXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi8vIENvbnRhaW5lciBmb3IgZHJpdmVyIGF2YXRhciBhbmQgcmF0aW5nXHJcbi5kcml2ZXItYXZhdGFyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIFxyXG4gIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcml2ZXItcmF0aW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQcmljZSBjb250YWluZXIgc3R5bGluZ1xyXG4ucHJpY2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWluLXdpZHRoOiA3MHB4O1xyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQmV0dGVyIGFjY29yZGlvbiBzdHlsaW5nXHJcbi5kcml2ZXItYWN0aW9ucy1hY2NvcmRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICBcclxuICAuYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweCAxNnB4O1xyXG4gICAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEdlbmVyYWwgY2FyZCBzdHlsZXNcclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIDE2cHggMTZweDtcclxufVxyXG5cclxuLy8gRml4IG5lc3RlZCBpdGVtcyBpc3N1ZVxyXG5pb24taXRlbSBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbi8vIE1ha2Ugc3VyZSBib3R0b20gaXRlbXMgYXJlIHRhbGwgZW5vdWdoIHRvIGJlIHNjcm9sbGFibGUvdmlzaWJsZVxyXG4uYm90dG9tSXRlbXMge1xyXG4gIG1heC1oZWlnaHQ6IDYwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLy8gTW9kZXJuIHJpZGUgY29uZmlybWF0aW9uIGNhcmQgc3R5bGVzXHJcbi5yaWRlLWNvbmZpcm1hdGlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAtNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIFxyXG4gIC5yaWRlLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIFxyXG4gICAgJi5za2VsZXRvbiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnZlaGljbGUtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2VlZjBmMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52ZWhpY2xlLWRldGFpbHMge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC52ZWhpY2xlLXN0YXRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICBcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcmljZS10YWcge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5vcmlnaW5hbC1wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVsIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXltZW50LXNlbGVjdG9yIHtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAgIC0tbWluLWhlaWdodDogNTRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm9vay1idXR0b24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBcclxuICAgIC5ib29rLXJpZGUtYnRuIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIFxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFVwZGF0ZXMgdG8gbWFrZSBzdXJlIHRoZSBjYXJkIHN0aWNrcyBwcm9wZXJseSBhdCB0aGUgYm90dG9tXHJcbmlvbi1mb290ZXIgLmJvdHRvbUl0ZW1zLnNoYWRvdy10b3BbbmdJZj1cImNvbmZpcm1TdGFnZVwiXSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXgtaGVpZ2h0OiB1bnNldDtcclxuICBcclxuICAucmlkZS1jb25maXJtYXRpb24tY2FyZCB7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjRzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEltcHJvdmUgYW5pbWF0aW9uIGZvciBza2VsZXRvbiBsb2FkaW5nIGFwcGVhcmFuY2VcclxuQGtleWZyYW1lcyBwdWxzZS1iZyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlkZS1kZXRhaWxzLnNrZWxldG9uIHtcclxuICAudmVoaWNsZS1pbmZvIHtcclxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgYW5pbWF0aW9uOiBwdWxzZS1iZyAxLjVzIGluZmluaXRlO1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gSW1wcm92ZSBzZWxlY3QgcG9wb3ZlciBhcHBlYXJhbmNlXHJcbi8vIE5vdGU6IFRoaXMgcmVxdWlyZXMgOnJvb3Qgc3R5bGluZyBmb3IgZ2xvYmFsIGltcGFjdCBvbiBpb24tc2VsZWN0c1xyXG46cm9vdCB7XHJcbiAgaW9uLXNlbGVjdC1wb3BvdmVyIHtcclxuICAgIC0td2lkdGg6IDI0MHB4O1xyXG4gICAgXHJcbiAgICAuc2VsZWN0LWludGVyZmFjZS1vcHRpb24ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgIFxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRGFyayBtb2RlIGRpc2FibGVkIC0gYXBwIHVzZXMgbGlnaHQgbW9kZSBvbmx5XHJcblxyXG4vLyBGaXggbWFwIHNpemluZyBhbmQgcG9zaXRpb25pbmdcclxuLm1hcC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLWJvdHRvbS1iYXItaGVpZ2h0LCAwcHgpKTtcclxuICB0b3A6IHZhcigtLWhlYWRlci1oZWlnaHQsIDBweCk7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xyXG4gIFxyXG4gIC8vIEFkanVzdCBtYXAgaGVpZ2h0IGJhc2VkIG9uIGFjdGl2ZSBVSSBzdGFnZXNcclxuICAmLndpdGgtdHJhY2tpbmcge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMTBweCk7XHJcbiAgICB0b3A6IDU2cHg7IC8vIEFkanVzdCBmb3IgaGVhZGVyIGhlaWdodFxyXG4gIH1cclxuICBcclxuICAmLndpdGgtYm9va2luZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgJi53aXRoLWNvbmZpcm0ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiAgICB0b3A6IDEyMHB4OyAvLyBBZGp1c3QgZm9yIGhlYWRlciBoZWlnaHRcclxuICB9XHJcbiAgXHJcbiAgJi53aXRoLXNlYXJjaGluZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE4MHB4KTtcclxuICAgIHRvcDogNTZweDsgLy8gQWRqdXN0IGZvciBoZWFkZXIgaGVpZ2h0XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"]
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
/* harmony import */ var C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
/* harmony import */ var C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
/* harmony import */ var C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    try {
      _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener('networkStatusChange', status => {
        console.log('Network status changed', status);
        this.networkStatus.next(status.connected);

        if (status.connected) {
          this.handleReconnect();
        } else {
          this.handleDisconnect();
        }
      });
    } catch (error) {
      console.warn('Failed to add network listener:', error);
    }

    this.checkInitialNetworkStatus();
  }

  checkInitialNetworkStatus() {
    var _this = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();
        console.log('Initial network status:', status);

        _this.networkStatus.next(status.connected);

        if (!status.connected) {
          _this.handleDisconnect();
        }
      } catch (error) {
        console.warn('Network status check failed, performing fallback check:', error); // Fallback: try to make a simple network request with timeout

        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

          yield fetch('https://www.google.com/favicon.ico', {
            method: 'HEAD',
            mode: 'no-cors',
            cache: 'no-cache',
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          _this.networkStatus.next(true);

          console.log('Fallback network check: connected');
        } catch (fetchError) {
          console.warn('Fallback network check failed:', fetchError); // Be more conservative - assume connected if we can't determine

          _this.networkStatus.next(true);

          console.log('Network status uncertain, assuming connected');
        }
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
/* harmony import */ var C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation */ 1819);


class LatLngBounds {
  constructor(bounds) {
    this.southwest = bounds.southwest;
    this.center = bounds.center;
    this.northeast = bounds.northeast;
  }

  contains(point) {
    var _this = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsContains({
        bounds: _this,
        point
      });
      return result['contains'];
    })();
  }

  extend(point) {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
/* harmony import */ var C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        setTimeout( /*#__PURE__*/(0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarkers({
        id: _this8.id,
        markerIds: ids
      });
    })();
  }

  addPolygons(polygons) {
    var _this9 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolygons({
        id: _this9.id,
        polygons
      });
      return res.ids;
    })();
  }

  addPolylines(polylines) {
    var _this10 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolylines({
        id: _this10.id,
        polylines
      });
      return res.ids;
    })();
  }

  removePolygons(ids) {
    var _this11 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolygons({
        id: _this11.id,
        polygonIds: ids
      });
    })();
  }

  addCircles(circles) {
    var _this12 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addCircles({
        id: _this12.id,
        circles
      });
      return res.ids;
    })();
  }

  removeCircles(ids) {
    var _this13 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeCircles({
        id: _this13.id,
        circleIds: ids
      });
    })();
  }

  removePolylines(ids) {
    var _this14 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setCamera({
        id: _this16.id,
        config
      });
    })();
  }

  getMapType() {
    var _this17 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new _definitions__WEBPACK_IMPORTED_MODULE_2__.LatLngBounds(yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapBounds({
        id: _this24.id
      }));
    })();
  }

  fitBounds(bounds, padding) {
    var _this25 = this;

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_user_Pegasus_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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