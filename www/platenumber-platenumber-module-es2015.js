(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["platenumber-platenumber-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/platenumber/platenumber.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/platenumber/platenumber.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Request</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"p-1\">\n\t<ion-card class=\"p-2\">\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\">Plate Number</ion-label>\n\t\t\t<ion-input\n\t\t\t\ttype=\"text\"\n\t\t\t\tplaceholder=\"Your Plate Number\"\n\t\t\t\trequired\n\t\t\t></ion-input>\n\t\t</ion-item>\n\t\t<ion-item-group>\n\t\t\t<ion-item>\n\t\t\t\t<ion-checkbox slot=\"start\" color=\"primary\"></ion-checkbox>\n\t\t\t\t<ion-label>Privacy Policy</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-checkbox slot=\"start\" color=\"primary\"></ion-checkbox>\n\t\t\t\t<ion-label>Term & Condition</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-checkbox slot=\"start\" color=\"primary\"></ion-checkbox>\n\t\t\t\t<ion-label>Privacy info usage</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-checkbox slot=\"start\" color=\"primary\"></ion-checkbox>\n\t\t\t\t<ion-label>Select All</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-item-group>\n\t\t<ion-button expand=\"block\">\n\t\t\tConfirm\n\t\t</ion-button>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/navigation/platenumber/platenumber-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/navigation/platenumber/platenumber-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PlatenumberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatenumberPageRoutingModule", function() { return PlatenumberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _platenumber_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platenumber.page */ "./src/app/pages/navigation/platenumber/platenumber.page.ts");




const routes = [
    {
        path: '',
        component: _platenumber_page__WEBPACK_IMPORTED_MODULE_3__["PlatenumberPage"]
    }
];
let PlatenumberPageRoutingModule = class PlatenumberPageRoutingModule {
};
PlatenumberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlatenumberPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/platenumber/platenumber.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/navigation/platenumber/platenumber.module.ts ***!
  \********************************************************************/
/*! exports provided: PlatenumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatenumberPageModule", function() { return PlatenumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _platenumber_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platenumber-routing.module */ "./src/app/pages/navigation/platenumber/platenumber-routing.module.ts");
/* harmony import */ var _platenumber_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./platenumber.page */ "./src/app/pages/navigation/platenumber/platenumber.page.ts");







let PlatenumberPageModule = class PlatenumberPageModule {
};
PlatenumberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _platenumber_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlatenumberPageRoutingModule"]
        ],
        declarations: [_platenumber_page__WEBPACK_IMPORTED_MODULE_6__["PlatenumberPage"]]
    })
], PlatenumberPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/platenumber/platenumber.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/navigation/platenumber/platenumber.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 160px 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9wbGF0ZW51bWJlci9wbGF0ZW51bWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLGNBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vcGxhdGVudW1iZXIvcGxhdGVudW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuXHRtYXJnaW46IDE2MHB4IDIwcHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/navigation/platenumber/platenumber.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/navigation/platenumber/platenumber.page.ts ***!
  \******************************************************************/
/*! exports provided: PlatenumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatenumberPage", function() { return PlatenumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PlatenumberPage = class PlatenumberPage {
    constructor() { }
    ngOnInit() {
    }
};
PlatenumberPage.ctorParameters = () => [];
PlatenumberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-platenumber',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./platenumber.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/platenumber/platenumber.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./platenumber.page.scss */ "./src/app/pages/navigation/platenumber/platenumber.page.scss")).default]
    })
], PlatenumberPage);



/***/ })

}]);
//# sourceMappingURL=platenumber-platenumber-module-es2015.js.map