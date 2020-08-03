(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t<ion-slide>\n\t\t<h2>Hello</h2>\n\t\t<p>Slide 1</p>\n\t</ion-slide>\n\t<ion-slide>\n\t\t<h2>Hello there</h2>\n\t\t<p>Slide 2</p>\n\t</ion-slide>\n\t<ion-slide>\n\t\t<h2>Hello Agian</h2>\n\t\t<p>Slide 3</p>\n\t</ion-slide>\n</ion-slides>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/welcome/welcome.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/welcome/welcome.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n\t<ion-title class=\"text-center title\">Welcome to SCRoads</ion-title>\n\t<ion-title class=\"text-center subtitle\">Before you start:</ion-title>\n\t<ion-list class=\"ion-padding\">\n\t\t<ion-item *ngFor=\"let item of checkBoxList\" lines=\"none\">\n\t\t\t<ion-label>{{item.value}}</ion-label>\n\t\t\t<ion-checkbox\n\t\t\t\tslot=\"start\"\n\t\t\t\t#checkBoxList\n\t\t\t\tname=\"itemoption\"\n\t\t\t\t(click)=\"modalNavigate(item.id)\"\n\t\t\t\t[(ngModel)]=\"item.isChecked\"\n\t\t\t\t[attr.data-id]=\"item.id\"\n\t\t\t\t(ionChange)=\"checkEvent()\"\n\t\t\t></ion-checkbox>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label><strong>Agree All</strong></ion-label>\n\t\t\t<ion-checkbox\n\t\t\t\tslot=\"start\"\n\t\t\t\tname=\"selectallcheck\"\n\t\t\t\t[(ngModel)]=\"masterCheck\"\n\t\t\t\t[indeterminate]=\"isIndeterminate\"\n\t\t\t\t(click)=\"checkMaster($event)\"\n\t\t\t></ion-checkbox>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-button\n\t\texpand=\"block\"\n\t\tcolor=\"warning\"\n\t\t(click)=\"anonyLogin()\"\n\t\t[disabled]=\"!masterCheck\"\n\t>\n\t\tStart\n\t</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/components/slides/slides.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_1__["SlidesComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_1__["SlidesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/slides/slides.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slides/slides.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  padding: 160px 20px;\n  display: block;\n}\nion-slide h2 {\n  font-size: 36px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBQ0Q7QUFBQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcblx0cGFkZGluZzogMTYwcHggMjBweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGgyIHtcblx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/slides/slides.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slides/slides.component.ts ***!
  \*******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SlidesComponent = class SlidesComponent {
    constructor() {
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
    }
    ngOnInit() { }
};
SlidesComponent.ctorParameters = () => [];
SlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slides',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./slides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./slides.component.scss */ "./src/app/components/slides/slides.component.scss")).default]
    })
], SlidesComponent);



/***/ }),

/***/ "./src/app/pages/index/welcome/welcome-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/index/welcome/welcome-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/index/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/index/welcome/welcome.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/index/welcome/welcome.module.ts ***!
  \*******************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/pages/index/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/index/welcome/welcome.page.ts");








let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_6__["WelcomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_7__["WelcomePage"]],
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/pages/index/welcome/welcome.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/index/welcome/welcome.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  margin-top: 8rem;\n  height: 20vh;\n  font-size: 32px;\n  line-height: normal;\n}\n\n.subtitle {\n  height: 4vh;\n  color: gray;\n  font-size: 20px;\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtBQUFEOztBQUdBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7QUFERCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuXHRtYXJnaW4tdG9wOiA4cmVtO1xuXHRoZWlnaHQ6IDIwdmg7XG5cblx0Zm9udC1zaXplOiAzMnB4O1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uc3VidGl0bGUge1xuXHRoZWlnaHQ6IDR2aDtcblx0Y29sb3I6IGdyYXk7XG5cblx0Zm9udC1zaXplOiAyMHB4O1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/index/welcome/welcome.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/index/welcome/welcome.page.ts ***!
  \*****************************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_modals_privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/privacypolicy/privacypolicy.page */ "./src/app/components/modals/privacypolicy/privacypolicy.page.ts");
/* harmony import */ var _components_modals_puagreement_puagreement_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/modals/puagreement/puagreement.page */ "./src/app/components/modals/puagreement/puagreement.page.ts");
/* harmony import */ var _components_modals_termcondition_termcondition_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/modals/termcondition/termcondition.page */ "./src/app/components/modals/termcondition/termcondition.page.ts");










let WelcomePage = class WelcomePage {
    constructor(modalController, loadingController, toast, authService, afAuth, sellerService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toast = toast;
        this.authService = authService;
        this.afAuth = afAuth;
        this.sellerService = sellerService;
        this.createDate = Math.floor(new Date().getTime() / 1000.0);
        this.checkBoxList = [
            {
                id: 1,
                value: 'Privacy Policy',
                isChecked: false,
            },
            {
                id: 2,
                value: 'Terms & Condition',
                isChecked: false,
            },
            {
                id: 3,
                value: 'Privacy Usage Agreement',
                isChecked: false,
            },
        ];
    }
    ngOnInit() { }
    privatePolicyModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_7__["PrivacypolicyPage"],
            });
            return yield modal.present();
        });
    }
    termConditionModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_termcondition_termcondition_page__WEBPACK_IMPORTED_MODULE_9__["TermconditionPage"],
            });
            return yield modal.present();
        });
    }
    PuaModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_puagreement_puagreement_page__WEBPACK_IMPORTED_MODULE_8__["PuagreementPage"],
            });
            return yield modal.present();
        });
    }
    checkMaster() {
        setTimeout(() => {
            this.checkBoxList.forEach((obj) => {
                obj.isChecked = this.masterCheck;
            });
        });
    }
    checkEvent() {
        const totalItems = this.checkBoxList.length;
        let checked = 0;
        this.checkBoxList.map((obj) => {
            if (obj.isChecked)
                checked++;
            // console.log(obj.isChecked);
        });
        if (checked > 0 && checked < totalItems) {
            //If even one item is checked but not all
            this.isIndeterminate = true;
            this.masterCheck = false;
        }
        else if (checked == totalItems) {
            //If all are checked
            this.masterCheck = true;
            this.isIndeterminate = false;
        }
        else {
            //If none is checked
            this.isIndeterminate = false;
            this.masterCheck = false;
        }
    }
    modalNavigate(id) {
        let checkboxId = id;
        //let messageId = el.dataset.messageId;
        if (checkboxId === 1) {
            this.privatePolicyModal();
        }
        else {
            if (checkboxId === 2) {
                this.termConditionModal();
            }
            else if (checkboxId === 3) {
                this.PuaModal();
            }
        }
    }
    anonyLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                showBackdrop: true,
            });
            try {
                yield loading.present();
                yield this.authService.loginAny();
                yield this.afAuth.onAuthStateChanged((user) => {
                    if (user) {
                        this.sellerService.createSeller(user.uid, {
                            uid: user.uid,
                            create_date: this.createDate,
                        });
                    }
                });
                yield loading.dismiss();
            }
            catch (error) {
                this.toast.showToast(error.message);
                yield loading.dismiss();
            }
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _services_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"] }
];
WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/welcome/welcome.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/index/welcome/welcome.page.scss")).default]
    })
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map