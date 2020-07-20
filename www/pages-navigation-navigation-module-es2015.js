(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-navigation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/export/export.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/export/export.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<ion-img [src]=\"logo\" class=\"smllogo__img p-1\" alt=\"logo\"></ion-img>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\tfill=\"clear\"\n\t\t\tslot=\"end\"\n\t\t\t[routerLink]=\"['/','home','notifications']\"\n\t\t>\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<p class=\"mt-6 p-4 fs-25 text-center\">\n\t\t<strong>{{name}},{{data.year}}</strong> 는(은) 수출차 입니다\n\t</p>\n\t<p class=\"p-4 fs-20 mt-2\">\n\t\t“이 차는 이집트에서 인기 있는 차종으로 보통 이렇고 저렇습니다.”\n\t</p>\n\n\t<ion-card class=\"request\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t\t<ion-button class=\"request__button\" [routerLink]=\"['/','request','plate']\">\n\t\t\tRequest Quote\n\t\t</ion-button>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/navigation.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/navigation.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-router-outlet></ion-router-outlet>\n<ion-tabs>\n\t<ion-tab-bar slot=\"bottom\">\n\t\t<ion-tab-button tab=\"seller\">\n\t\t\t<ion-icon name=\"car-outline\"></ion-icon>\n\t\t\t<ion-label>Home</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"ongoing\">\n\t\t\t<ion-icon name=\"logo-stackoverflow\"></ion-icon>\n\t\t\t<ion-label>On-going</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"setting\">\n\t\t\t<ion-icon name=\"settings-outline\"></ion-icon>\n\t\t\t<ion-label>Menu</ion-label>\n\t\t</ion-tab-button>\n\t</ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/pages/navigation/export/export.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/navigation/export/export.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("P {\n  line-height: 2rem;\n}\n\n.smllogo__img {\n  height: 2.6rem;\n  width: 45%;\n}\n\n.request {\n  margin-top: 6rem;\n}\n\n.request__button {\n  position: absolute;\n  top: 85%;\n  /* position the top  edge of the element at the middle of the parent */\n  left: 50%;\n  /* position the left edge of the element at the middle of the parent */\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 80vw;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9leHBvcnQvZXhwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0FBQ0Q7O0FBR0M7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUlBO0VBQ0MsZ0JBQUE7QUFERDs7QUFFQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLHNFQUFBO0VBQ1YsU0FBQTtFQUFXLHNFQUFBO0VBQ1gsZ0NBQUE7RUFFQSxrQkFBQTtFQUVBLFdBQUE7RUFFQSxVQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXZpZ2F0aW9uL2V4cG9ydC9leHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiUCB7XG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4uc21sbG9nbyB7XG5cdCZfX2ltZyB7XG5cdFx0aGVpZ2h0OiAyLjZyZW07XG5cdFx0d2lkdGg6IDQ1JTtcblx0fVxufVxuXG4ucmVxdWVzdCB7XG5cdG1hcmdpbi10b3A6IDZyZW07XG5cdCZfX2J1dHRvbiB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogODUlOyAvKiBwb3NpdGlvbiB0aGUgdG9wICBlZGdlIG9mIHRoZSBlbGVtZW50IGF0IHRoZSBtaWRkbGUgb2YgdGhlIHBhcmVudCAqL1xuXHRcdGxlZnQ6IDUwJTsgLyogcG9zaXRpb24gdGhlIGxlZnQgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdHdpZHRoOiA4MHZ3O1xuXG5cdFx0ei1pbmRleDogMTtcblx0fVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/navigation/export/export.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/navigation/export/export.page.ts ***!
  \********************************************************/
/*! exports provided: ExportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPage", function() { return ExportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/model.service */ "./src/app/services/model.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





let ExportPage = class ExportPage {
    constructor(route, router, modelService) {
        this.route = route;
        this.router = router;
        this.modelService = modelService;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
        this.logo = '../../../assets/images/logo/scroadslight.svg';
        this.image = '../../../../assets/images/banners/banner2.jpg';
        this.dataSub = this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.export;
            }
        });
    }
    ngOnInit() {
        this.modelSub = this.modelService
            .getModelById(this.data.model)
            .subscribe((val) => {
            this.name = val.payload.data()['name'];
        });
    }
    ngOnDestroy() {
        if (this.dataSub && this.modelSub) {
            this.dataSub.unsubscribe();
            this.modelSub.unsubscribe();
        }
    }
};
ExportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"] }
];
ExportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-export',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./export.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/export/export.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./export.page.scss */ "./src/app/pages/navigation/export/export.page.scss")).default]
    })
], ExportPage);



/***/ }),

/***/ "./src/app/pages/navigation/navigation-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/navigation/navigation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NavigationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPageRoutingModule", function() { return NavigationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navigation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.page */ "./src/app/pages/navigation/navigation.page.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var _export_export_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./export/export.page */ "./src/app/pages/navigation/export/export.page.ts");

// import { ErrorsPage } from './../errors/errors.page';





const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectUnauthorizedTo"])(['login']);
const routes = [
    Object.assign({ path: '', component: _navigation_page__WEBPACK_IMPORTED_MODULE_3__["NavigationPage"], children: [
            {
                path: 'seller',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/pages/navigation/home/home.module.ts")).then((m) => m.HomePageModule),
            },
            {
                path: 'ongoing',
                loadChildren: () => Promise.all(/*! import() | ongoing-ongoing-module */[__webpack_require__.e("common"), __webpack_require__.e("ongoing-ongoing-module")]).then(__webpack_require__.bind(null, /*! ./ongoing/ongoing.module */ "./src/app/pages/navigation/ongoing/ongoing.module.ts")).then((m) => m.OngoingPageModule),
            },
            {
                path: 'setting',
                loadChildren: () => Promise.all(/*! import() | settings-settings-module */[__webpack_require__.e("default~infor-infor-module~settings-settings-module"), __webpack_require__.e("common"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/pages/navigation/settings/settings.module.ts")).then((m) => m.SettingsPageModule),
            },
            {
                path: 'infor',
                loadChildren: () => Promise.all(/*! import() | infor-infor-module */[__webpack_require__.e("default~infor-infor-module~settings-settings-module"), __webpack_require__.e("infor-infor-module")]).then(__webpack_require__.bind(null, /*! ./infor/infor.module */ "./src/app/pages/navigation/infor/infor.module.ts")).then((m) => m.InforPageModule),
            },
            {
                path: 'notifications',
                loadChildren: () => Promise.all(/*! import() | notifications-notifications-module */[__webpack_require__.e("common"), __webpack_require__.e("notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ./notifications/notifications.module */ "./src/app/pages/navigation/notifications/notifications.module.ts")).then((m) => m.NotificationsPageModule),
            },
            {
                path: 'export',
                component: _export_export_page__WEBPACK_IMPORTED_MODULE_5__["ExportPage"],
                loadChildren: () => __webpack_require__.e(/*! import() | export-export-module */ "export-export-module").then(__webpack_require__.bind(null, /*! ./export/export.module */ "./src/app/pages/navigation/export/export.module.ts")).then((m) => m.ExportPageModule),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["canActivate"])(redirectUnauthorizedToLogin)),
];
let NavigationPageRoutingModule = class NavigationPageRoutingModule {
};
NavigationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NavigationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/navigation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/navigation/navigation.module.ts ***!
  \*******************************************************/
/*! exports provided: NavigationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPageModule", function() { return NavigationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-routing.module */ "./src/app/pages/navigation/navigation-routing.module.ts");
/* harmony import */ var _navigation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation.page */ "./src/app/pages/navigation/navigation.page.ts");







let NavigationPageModule = class NavigationPageModule {
};
NavigationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__["NavigationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_navigation_page__WEBPACK_IMPORTED_MODULE_6__["NavigationPage"]],
    })
], NavigationPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/navigation.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/navigation/navigation.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/navigation/navigation.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/navigation/navigation.page.ts ***!
  \*****************************************************/
/*! exports provided: NavigationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPage", function() { return NavigationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NavigationPage = class NavigationPage {
    constructor() { }
    ngOnInit() { }
};
NavigationPage.ctorParameters = () => [];
NavigationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navigation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/navigation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navigation.page.scss */ "./src/app/pages/navigation/navigation.page.scss")).default]
    })
], NavigationPage);



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
    getModelById(id) {
        return this.firestore.collection('models').doc(id).snapshotChanges();
    }
    getModelYear(id) {
        return this.firestore
            .collection('models')
            .doc(id)
            .collection('years')
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
//# sourceMappingURL=pages-navigation-navigation-module-es2015.js.map