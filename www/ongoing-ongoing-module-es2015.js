(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ongoing-ongoing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<ion-img [src]=\"logo\" class=\"smllogo__img p-1\" alt=\"logo\"></ion-img>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\tfill=\"clear\"\n\t\t\tslot=\"end\"\n\t\t\t[routerLink]=\"['/','home','notifications']\"\n\t\t>\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-card *ngFor=\"let request of requests\">\n\t\t<ion-item [routerLink]=\"[request.id]\">\n\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t<img src=\"../../../../assets/images/photos/8627.jpg\" />\n\t\t\t</ion-avatar>\n\t\t\t<ion-label>\n\t\t\t\t<h2>{{request.name}}</h2>\n\t\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<p>{{request.location}}</p>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t\t<p>{{request.phone}}</p>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t\t<p>{{request.status}}</p>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-grid>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: OngoingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingPageRoutingModule", function() { return OngoingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ongoing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ongoing.page */ "./src/app/pages/navigation/ongoing/ongoing.page.ts");




const routes = [
    {
        path: '',
        component: _ongoing_page__WEBPACK_IMPORTED_MODULE_3__["OngoingPage"],
    },
];
let OngoingPageRoutingModule = class OngoingPageRoutingModule {
};
OngoingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OngoingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing.module.ts ***!
  \************************************************************/
/*! exports provided: OngoingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingPageModule", function() { return OngoingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ongoing-routing.module */ "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts");
/* harmony import */ var _ongoing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ongoing.page */ "./src/app/pages/navigation/ongoing/ongoing.page.ts");







let OngoingPageModule = class OngoingPageModule {
};
OngoingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_5__["OngoingPageRoutingModule"]
        ],
        declarations: [_ongoing_page__WEBPACK_IMPORTED_MODULE_6__["OngoingPage"]]
    })
], OngoingPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smllogo__img {\n  height: 2.6rem;\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9vbmdvaW5nL29uZ29pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsY0FBQTtFQUNBLFVBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9vbmdvaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWxsb2dvIHtcblx0Jl9faW1nIHtcblx0XHRoZWlnaHQ6IDIuNnJlbTtcblx0XHR3aWR0aDogNDUlO1xuXHR9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing.page.ts ***!
  \**********************************************************/
/*! exports provided: OngoingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingPage", function() { return OngoingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");







let OngoingPage = class OngoingPage {
    constructor(requestService, afAuth, authService, loadingController, toast) {
        this.requestService = requestService;
        this.afAuth = afAuth;
        this.authService = authService;
        this.loadingController = loadingController;
        this.toast = toast;
        // this.sellerId = JSON.parse(localStorage.getItem("user")).uid;
        this.logo = '../../../assets/images/logo/scroadslight.svg';
    }
    ngOnInit() {
        this.requestSub = this.requestService.getRequest().subscribe((data) => {
            this.requests = data.map((e) => {
                const effectedTime = new Date(e.payload.doc.data()['effectedTime'] * 1000).toLocaleString();
                const expireDate = new Date(e.payload.doc.data()['expireDate'] * 1000).toLocaleString();
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        });
    }
    ngOnDestroy() {
        if (this.requestSub) {
            this.requestSub.unsubscribe();
        }
    }
};
OngoingPage.ctorParameters = () => [
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }
];
OngoingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-ongoing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ongoing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ongoing.page.scss */ "./src/app/pages/navigation/ongoing/ongoing.page.scss")).default]
    })
], OngoingPage);



/***/ })

}]);
//# sourceMappingURL=ongoing-ongoing-module-es2015.js.map