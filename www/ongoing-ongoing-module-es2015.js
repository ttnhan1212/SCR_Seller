(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ongoing-ongoing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>ongoing</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-item-group>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Seller</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Phone</ion-label>\n\t\t\t<ion-input type=\"number\" [(ngModel)]=\"phone\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Location</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"location\"></ion-input>\n\t\t</ion-item>\n\t</ion-item-group>\n\t<ion-button\n\t\texpand=\"block\"\n\t\t[disabled]=\"!name || !phone || !location\"\n\t\t(click)=\"createRequest()\"\n\t>\n\t\tCreate Request\n\t</ion-button>\n\n\t<ion-card>\n\t\t<ion-item *ngFor=\"let request of requests\">\n\t\t\t<ion-label>Name: {{request.sellerName}}</ion-label>\n\t\t\t<ion-label>EffDate: {{request.effectedTime}}</ion-label>\n\t\t\t<ion-label>ExpDate: {{request.expireDate}}</ion-label>\n\t\t</ion-item>\n\t</ion-card>\n</ion-content>\n");

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
        component: _ongoing_page__WEBPACK_IMPORTED_MODULE_3__["OngoingPage"]
    }
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9vbmdvaW5nLnBhZ2Uuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");



let OngoingPage = class OngoingPage {
    constructor(requestService) {
        this.requestService = requestService;
        this.effDate = Math.floor(new Date().getTime() / 1000.0);
        this.expDate = Math.floor(new Date().getTime() / 1000.0 + 7200);
    }
    ngOnInit() {
        this.requestService.getRequest().subscribe((data) => {
            this.requests = data.map((e) => {
                const effectedTime = new Date(e.payload.doc.data()['effectedTime'] * 1000).toLocaleString();
                const expireDate = new Date(e.payload.doc.data()['expireDate'] * 1000).toLocaleString();
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        });
    }
    createRequest() {
        const Request = {};
        Request['sellerName'] = this.name;
        Request['phone'] = this.phone;
        Request['location'] = this.location;
        Request['effectedTime'] = this.effDate;
        Request['expireDate'] = this.expDate;
        this.requestService
            .createRequest(Request)
            .then((res) => {
            this.name = '';
            this.phone = '';
            this.location = '';
            console.log(res);
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
OngoingPage.ctorParameters = () => [
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] }
];
OngoingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ongoing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ongoing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ongoing.page.scss */ "./src/app/pages/navigation/ongoing/ongoing.page.scss")).default]
    })
], OngoingPage);



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let RequestService = class RequestService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getRequest() {
        return this.firestore.collection('requests').snapshotChanges();
    }
    createRequest(request) {
        return this.firestore.collection('requests').add(request);
    }
    updateRequest(request) {
        delete request.id;
        this.firestore.doc('requests/' + request.id).update(request);
    }
    deleteRequest(requestId) {
        this.firestore.doc('requests/' + requestId).delete();
    }
};
RequestService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], RequestService);



/***/ })

}]);
//# sourceMappingURL=ongoing-ongoing-module-es2015.js.map