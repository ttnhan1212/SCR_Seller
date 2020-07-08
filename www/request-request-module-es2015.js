(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-request-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/request/request.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/request/request.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<ion-img [src]=\"logo\" class=\"smllogo__img p-1\" alt=\"logo\"></ion-img>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\t<ion-item class=\"ion-margin-bottom\">\n\t\t<ion-label position=\"stacked\">Brands</ion-label>\n\t\t<ion-select\n\t\t\tinterface=\"action-sheet\"\n\t\t\tplaceholder=\"Select your car year...\"\n\t\t\t[(ngModel)]=\"brands\"\n\t\t\t(ionChange)=\"onBrandChange($event)\"\n\t\t>\n\t\t\t<ion-select-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\t\t\t\t{{brand.name}}\n\t\t\t</ion-select-option>\n\t\t</ion-select>\n\t</ion-item>\n\t<ion-item class=\"ion-margin-bottom\">\n\t\t<ion-label position=\"stacked\">Model</ion-label>\n\t\t<ion-select\n\t\t\tinterface=\"action-sheet\"\n\t\t\tplaceholder=\"Select your car model...\"\n\t\t\t[(ngModel)]=\"models\"\n\t\t>\n\t\t\t<ion-select-option *ngFor=\"let model of models\">\n\t\t\t\t{{model.name}}\n\t\t\t</ion-select-option>\n\t\t</ion-select>\n\t</ion-item>\n\t<ion-item class=\"ion-margin-bottom\">\n\t\t<ion-label position=\"stacked\">Year</ion-label>\n\t\t<ion-select\n\t\t\tinterface=\"action-sheet\"\n\t\t\tplaceholder=\"Select your car year...\"\n\t\t\t[(ngModel)]=\"year\"\n\t\t>\n\t\t\t<ion-select-option>2010</ion-select-option>\n\t\t\t<ion-select-option>2010</ion-select-option>\n\t\t\t<ion-select-option>2010</ion-select-option>\n\t\t\t<ion-select-option>2010</ion-select-option>\n\t\t</ion-select>\n\t</ion-item>\n\t<ion-button\n\t\tclass=\"ion-margin-bottom export__button\"\n\t\texpand=\"block\"\n\t\t(click)=\"exportAvai()\"\n\t>\n\t\tCheck export availability\n\t</ion-button>\n\t<ion-card class=\"m-0\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t\t<ion-button class=\"request__button\" [routerLink]=\"['plate']\">\n\t\t\tRequest Quote\n\t\t</ion-button>\n\t</ion-card>\n\t<ion-item-divider></ion-item-divider>\n\t<ion-list class=\"scroll__horizontal\">\n\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card routerLink=\"/home/menu\">\n\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card routerLink=\"/home/menu\">\n\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card routerLink=\"/home/menu\">\n\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card routerLink=\"/home/menu\">\n\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t</ion-card>\n\t</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/navigation/request/request-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/navigation/request/request-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: RequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageRoutingModule", function() { return RequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request.page */ "./src/app/pages/navigation/request/request.page.ts");




const routes = [
    {
        path: '',
        component: _request_page__WEBPACK_IMPORTED_MODULE_3__["RequestPage"],
    },
];
let RequestPageRoutingModule = class RequestPageRoutingModule {
};
RequestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/request/request.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/request/request.module.ts ***!
  \************************************************************/
/*! exports provided: RequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _request_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-routing.module */ "./src/app/pages/navigation/request/request-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request.page */ "./src/app/pages/navigation/request/request.page.ts");







let RequestPageModule = class RequestPageModule {
};
RequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _request_routing_module__WEBPACK_IMPORTED_MODULE_1__["RequestPageRoutingModule"]],
        declarations: [_request_page__WEBPACK_IMPORTED_MODULE_6__["RequestPage"]],
    })
], RequestPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/request/request.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/request/request.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smllogo__img {\n  height: 2.6rem;\n}\n\n.scroll__horizontal {\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.scroll__horizontal ion-card {\n  display: inline-block;\n  width: 10rem !important;\n}\n\n.item {\n  display: flex !important;\n  flex-direction: column !important;\n  justify-content: center;\n}\n\n.item__image {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.export__button {\n  margin-bottom: 3rem !important;\n}\n\n.request__button {\n  position: absolute;\n  top: 85%;\n  /* position the top  edge of the element at the middle of the parent */\n  left: 50%;\n  /* position the left edge of the element at the middle of the parent */\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 80vw;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9yZXF1ZXN0L3JlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsY0FBQTtBQUFGOztBQUlBO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0FBREQ7O0FBRUM7RUFDQyxxQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBSUE7RUFDQyx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7QUFERDs7QUFFQztFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFJQTtFQUNDLDhCQUFBO0FBREQ7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFBVSxzRUFBQTtFQUNWLFNBQUE7RUFBVyxzRUFBQTtFQUNYLGdDQUFBO0VBRUEsa0JBQUE7RUFFQSxXQUFBO0VBRUEsVUFBQTtBQUZEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9yZXF1ZXN0L3JlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtbGxvZ28ge1xuXHQmX19pbWcge1xuXHRcdGhlaWdodDogMi42cmVtO1xuXHR9XG59XG5cbi5zY3JvbGxfX2hvcml6b250YWwge1xuXHRvdmVyZmxvdzogYXV0bztcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0JiBpb24tY2FyZCB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHdpZHRoOiAxMHJlbSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5pdGVtIHtcblx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQmX19pbWFnZSB7XG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHR9XG59XG5cbi5leHBvcnRfX2J1dHRvbiB7XG5cdG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnJlcXVlc3RfX2J1dHRvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA4NSU7IC8qIHBvc2l0aW9uIHRoZSB0b3AgIGVkZ2Ugb2YgdGhlIGVsZW1lbnQgYXQgdGhlIG1pZGRsZSBvZiB0aGUgcGFyZW50ICovXG5cdGxlZnQ6IDUwJTsgLyogcG9zaXRpb24gdGhlIGxlZnQgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdHdpZHRoOiA4MHZ3O1xuXG5cdHotaW5kZXg6IDE7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/navigation/request/request.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/navigation/request/request.page.ts ***!
  \**********************************************************/
/*! exports provided: RequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPage", function() { return RequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/brands.service */ "./src/app/services/brands.service.ts");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/model.service */ "./src/app/services/model.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let RequestPage = class RequestPage {
    constructor(brandService, modelService, router) {
        this.brandService = brandService;
        this.modelService = modelService;
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
        this.logo = '../../../assets/images/logo/scroadslight.svg';
        this.image = '../../../../assets/images/banners/banner2.jpg';
    }
    ngOnInit() {
        this.brandService.getBrands().subscribe((data) => {
            this.brands = data.map((e) => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        });
    }
    exportAvai() {
        console.log(this.name, this.year);
    }
    doRefresh(event) {
        setTimeout(() => {
            this.router.navigate(['home', 'request']);
            event.target.complete();
        }, 2000);
    }
    onBrandChange(e) {
        this.modelService.getModelByBrand(e.target.value).subscribe((data) => {
            this.models = data.map((e) => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        });
    }
};
RequestPage.ctorParameters = () => [
    { type: _services_brands_service__WEBPACK_IMPORTED_MODULE_1__["BrandService"] },
    { type: _services_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-request',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./request.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/request/request.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./request.page.scss */ "./src/app/pages/navigation/request/request.page.scss")).default]
    })
], RequestPage);



/***/ }),

/***/ "./src/app/services/brands.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/brands.service.ts ***!
  \********************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let BrandService = class BrandService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getBrands() {
        return this.firestore.collection('brands').snapshotChanges();
    }
};
BrandService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
BrandService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], BrandService);



/***/ }),

/***/ "./src/app/services/model.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/model.service.ts ***!
  \*******************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ModelService = class ModelService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getModel() {
        return this.firestore.collection('models').snapshotChanges();
    }
    getModelByBrand(brand) {
        return this.firestore
            .collection('models', (ref) => ref.where('brandsId', '==', brand))
            .snapshotChanges();
    }
};
ModelService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
ModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ModelService);



/***/ })

}]);
//# sourceMappingURL=request-request-module-es2015.js.map