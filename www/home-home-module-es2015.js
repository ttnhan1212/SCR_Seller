(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/home/home.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/home/home.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<ion-img [src]=\"logo\" class=\"smllogo__img p-1\" alt=\"logo\"></ion-img>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\tfill=\"clear\"\n\t\t\tslot=\"end\"\n\t\t\t[routerLink]=\"['/','home','notifications']\"\n\t\t>\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\t<form [formGroup]=\"exportForm\" (ngSubmit)=\"exportSubmit()\">\n\t\t<ion-item class=\"ion-margin-bottom\">\n\t\t\t<ion-label position=\"stacked\">Model</ion-label>\n\t\t\t<ion-select\n\t\t\t\tinterface=\"action-sheet\"\n\t\t\t\tplaceholder=\"Select your car model...\"\n\t\t\t\t(ionChange)=\"fetchYear($event)\"\n\t\t\t\t[formControl]=\"model\"\n\t\t\t>\n\t\t\t\t<ion-select-option *ngFor=\"let model of models\" [value]=\"model.id\">\n\t\t\t\t\t{{model.name}}\n\t\t\t\t</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-margin-bottom\">\n\t\t\t<ion-label position=\"stacked\">Year</ion-label>\n\t\t\t<ion-select\n\t\t\t\tinterface=\"action-sheet\"\n\t\t\t\tplaceholder=\"Select your car year...\"\n\t\t\t\t[formControl]=\"year\"\n\t\t\t>\n\t\t\t\t<ion-select-option *ngFor=\"let year of years\">\n\t\t\t\t\t{{year.year}}\n\t\t\t\t</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-button\n\t\t\tclass=\"ion-margin-bottom export__button\"\n\t\t\texpand=\"block\"\n\t\t\ttype=\"submit\"\n\t\t\t[disabled]=\"!exportForm.valid\"\n\t\t>\n\t\t\tCheck export availability\n\t\t</ion-button>\n\t</form>\n\t<ion-card class=\"m-0\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t\t<ion-button class=\"request__button\" [routerLink]=\"['/','request','plate']\">\n\t\t\tRequest Quote\n\t\t</ion-button>\n\t</ion-card>\n\t<ion-item-divider></ion-item-divider>\n\t<ion-grid class=\"p-0\">\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-subtitle>Rating</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/navigation/home/home-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/navigation/home/home-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/navigation/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/home/home.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/navigation/home/home.module.ts ***!
  \******************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/navigation/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/navigation/home/home.page.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/navigation/home/home.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/navigation/home/home.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smllogo__img {\n  height: 2.6rem;\n  width: 45%;\n}\n\n.item {\n  display: flex !important;\n  flex-direction: column !important;\n  justify-content: center;\n}\n\n.item__image {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.export__button {\n  margin-bottom: 3rem !important;\n}\n\n.request__button {\n  position: absolute;\n  top: 85%;\n  /* position the top  edge of the element at the middle of the parent */\n  left: 50%;\n  /* position the left edge of the element at the middle of the parent */\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 80vw;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsY0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFhQTtFQUNDLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQVZEOztBQVdDO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQVRGOztBQWFBO0VBQ0MsOEJBQUE7QUFWRDs7QUFhQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLHNFQUFBO0VBQ1YsU0FBQTtFQUFXLHNFQUFBO0VBQ1gsZ0NBQUE7RUFFQSxrQkFBQTtFQUVBLFdBQUE7RUFFQSxVQUFBO0FBWEQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXZpZ2F0aW9uL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21sbG9nbyB7XG5cdCZfX2ltZyB7XG5cdFx0aGVpZ2h0OiAyLjZyZW07XG5cdFx0d2lkdGg6IDQ1JTtcblx0fVxufVxuXG4vLyAuc2Nyb2xsX19ob3Jpem9udGFsIHtcbi8vIFx0b3ZlcmZsb3c6IGF1dG87XG4vLyBcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyBcdCYgaW9uLWNhcmQge1xuLy8gXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIFx0XHR3aWR0aDogMTByZW0gIWltcG9ydGFudDtcbi8vIFx0fVxuLy8gfVxuXG4uaXRlbSB7XG5cdGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Jl9faW1hZ2Uge1xuXHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0fVxufVxuXG4uZXhwb3J0X19idXR0b24ge1xuXHRtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yZXF1ZXN0X19idXR0b24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogODUlOyAvKiBwb3NpdGlvbiB0aGUgdG9wICBlZGdlIG9mIHRoZSBlbGVtZW50IGF0IHRoZSBtaWRkbGUgb2YgdGhlIHBhcmVudCAqL1xuXHRsZWZ0OiA1MCU7IC8qIHBvc2l0aW9uIHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIGVsZW1lbnQgYXQgdGhlIG1pZGRsZSBvZiB0aGUgcGFyZW50ICovXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHR3aWR0aDogODB2dztcblxuXHR6LWluZGV4OiAxO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/navigation/home/home.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/navigation/home/home.page.ts ***!
  \****************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/model.service */ "./src/app/services/model.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let HomePage = class HomePage {
    constructor(modelService, router, fb) {
        this.modelService = modelService;
        this.router = router;
        this.fb = fb;
        this.years = [];
        this.model = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.year = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
        this.logo = '../../../assets/images/logo/scroadslight.svg';
        this.image = '../../../../assets/images/banners/banner2.jpg';
        this.exportForm = this.fb.group({
            model: this.model,
            year: this.year,
        });
    }
    ngOnInit() {
        this.modelSub = this.modelService.getModel().subscribe((data) => {
            this.models = data.map((e) => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        }, (error) => {
            console.log(error);
        });
    }
    ngOnDestroy() {
        if (this.modelSub && this.yearSub) {
            this.modelSub.unsubscribe();
            this.yearSub.unsubscribe();
        }
    }
    fetchYear(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modelService.getModelYear(e.target.value).subscribe((data) => {
                this.years = data.map((m) => {
                    return Object.assign({}, m.payload.doc.data());
                });
            }, (err) => {
                console.log(err);
            });
        });
    }
    exportSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const exportState = {
                state: {
                    export: this.exportForm.value,
                },
            };
            // Do useful stuff with the gathered data
            this.router.navigate(['/', 'home', 'export'], exportState);
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.router.navigate(['home', 'seller']);
            event.target.complete();
        }, 2000);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-request',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/navigation/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map