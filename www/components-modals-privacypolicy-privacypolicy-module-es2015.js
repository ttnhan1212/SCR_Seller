(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-modals-privacypolicy-privacypolicy-module"],{

/***/ "./src/app/components/modals/privacypolicy/privacypolicy-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/modals/privacypolicy/privacypolicy-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PrivacypolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPageRoutingModule", function() { return PrivacypolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacypolicy.page */ "./src/app/components/modals/privacypolicy/privacypolicy.page.ts");




const routes = [
    {
        path: '',
        component: _privacypolicy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacypolicyPage"]
    }
];
let PrivacypolicyPageRoutingModule = class PrivacypolicyPageRoutingModule {
};
PrivacypolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivacypolicyPageRoutingModule);



/***/ }),

/***/ "./src/app/components/modals/privacypolicy/privacypolicy.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/modals/privacypolicy/privacypolicy.module.ts ***!
  \*************************************************************************/
/*! exports provided: PrivacypolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPageModule", function() { return PrivacypolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _privacypolicy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacypolicy-routing.module */ "./src/app/components/modals/privacypolicy/privacypolicy-routing.module.ts");
/* harmony import */ var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacypolicy.page */ "./src/app/components/modals/privacypolicy/privacypolicy.page.ts");







let PrivacypolicyPageModule = class PrivacypolicyPageModule {
};
PrivacypolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _privacypolicy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacypolicyPageRoutingModule"]
        ],
        declarations: [_privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacypolicyPage"]]
    })
], PrivacypolicyPageModule);



/***/ })

}]);
//# sourceMappingURL=components-modals-privacypolicy-privacypolicy-module-es2015.js.map