(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-router-outlet></ion-router-outlet>\n");

/***/ }),

/***/ "./src/app/pages/index/index-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/index/index-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IndexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoutingModule", function() { return IndexRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/index/index.page.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");





const redirectLoggedInToRequest = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectLoggedInTo"])(['home/seller']);
const routes = [
    Object.assign({ path: '', component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"], children: [
            {
                path: 'welcome',
                loadChildren: () => Promise.all(/*! import() | welcome-welcome-module */[__webpack_require__.e("common"), __webpack_require__.e("welcome-welcome-module")]).then(__webpack_require__.bind(null, /*! ./welcome/welcome.module */ "./src/app/pages/index/welcome/welcome.module.ts")).then((m) => m.WelcomePageModule),
            },
            {
                path: 'privatepolicy',
                loadChildren: () => Promise.all(/*! import() | components-modals-privacypolicy-privacypolicy-module */[__webpack_require__.e("common"), __webpack_require__.e("components-modals-privacypolicy-privacypolicy-module")]).then(__webpack_require__.bind(null, /*! ../../components/modals/privacypolicy/privacypolicy.module */ "./src/app/components/modals/privacypolicy/privacypolicy.module.ts")).then((m) => m.PrivacypolicyPageModule),
            },
            {
                path: 'termcondition',
                loadChildren: () => Promise.all(/*! import() | components-modals-termcondition-termcondition-module */[__webpack_require__.e("common"), __webpack_require__.e("components-modals-termcondition-termcondition-module")]).then(__webpack_require__.bind(null, /*! ../../components/modals/termcondition/termcondition.module */ "./src/app/components/modals/termcondition/termcondition.module.ts")).then((m) => m.TermconditionPageModule),
            },
            {
                path: 'puagreement',
                loadChildren: () => Promise.all(/*! import() | components-modals-puagreement-puagreement-module */[__webpack_require__.e("common"), __webpack_require__.e("components-modals-puagreement-puagreement-module")]).then(__webpack_require__.bind(null, /*! ../../components/modals/puagreement/puagreement.module */ "./src/app/components/modals/puagreement/puagreement.module.ts")).then((m) => m.PuagreementPageModule),
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full',
            },
        ] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["canActivate"])(redirectLoggedInToRequest)),
];
let IndexRoutingModule = class IndexRoutingModule {
};
IndexRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexRoutingModule);



/***/ }),

/***/ "./src/app/pages/index/index.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.module.ts ***!
  \*********************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/index/index-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/index/index.page.ts");







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_1__["IndexRoutingModule"]],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]],
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/pages/index/index.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/index/index.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/index/index.page.ts ***!
  \*******************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IndexPage = class IndexPage {
    constructor() { }
    ngOnInit() { }
};
IndexPage.ctorParameters = () => [];
IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.page.scss */ "./src/app/pages/index/index.page.scss")).default]
    })
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=pages-index-index-module-es2015.js.map