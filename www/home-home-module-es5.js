(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/home/home.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/home/home.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<ion-img [src]=\"logo\" class=\"smllogo__img p-1\" alt=\"logo\"></ion-img>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\tfill=\"clear\"\n\t\t\tslot=\"end\"\n\t\t\t[routerLink]=\"['/','home','notifications']\"\n\t\t>\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\t<form [formGroup]=\"exportForm\" (ngSubmit)=\"exportSubmit()\">\n\t\t<ion-item class=\"ion-margin-bottom\">\n\t\t\t<ion-label position=\"stacked\">Model</ion-label>\n\t\t\t<ion-select\n\t\t\t\tinterface=\"action-sheet\"\n\t\t\t\tplaceholder=\"Select your car model...\"\n\t\t\t\t(ionChange)=\"fetchYear($event)\"\n\t\t\t\t[formControl]=\"model\"\n\t\t\t>\n\t\t\t\t<ion-select-option *ngFor=\"let model of models\" [value]=\"model.id\">\n\t\t\t\t\t{{model.name}}\n\t\t\t\t</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-margin-bottom\">\n\t\t\t<ion-label position=\"stacked\">Year</ion-label>\n\t\t\t<ion-select\n\t\t\t\tinterface=\"action-sheet\"\n\t\t\t\tplaceholder=\"Select your car year...\"\n\t\t\t\t[formControl]=\"year\"\n\t\t\t>\n\t\t\t\t<ion-select-option *ngFor=\"let year of years\">\n\t\t\t\t\t{{year.year}}\n\t\t\t\t</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-button\n\t\t\tclass=\"ion-margin-bottom export__button\"\n\t\t\texpand=\"block\"\n\t\t\ttype=\"submit\"\n\t\t\t[disabled]=\"!exportForm.valid\"\n\t\t\tcolor=\"tertiary\"\n\t\t>\n\t\t\tCheck export availability\n\t\t</ion-button>\n\t</form>\n\t<ion-card class=\"m-0\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t\t<ion-button\n\t\t\tclass=\"request__button\"\n\t\t\t[routerLink]=\"['/','request','plate']\"\n\t\t\tcolor=\"tertiary\"\n\t\t>\n\t\t\tRequest Quote\n\t\t</ion-button>\n\t</ion-card>\n\t<ion-item-divider></ion-item-divider>\n\t<ion-grid class=\"p-0\">\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t\t<div class=\"item-overly-trans\">\n\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\t\t\t\tclass=\"rating-value star\"\n\t\t\t\t\t\t\t\tname=\"rating-stars-value\"\n\t\t\t\t\t\t\t\tvalue=\"3\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<div class=\"rating-stars-container\">\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t\t<div class=\"item-overly-trans\">\n\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\t\t\t\tclass=\"rating-value star\"\n\t\t\t\t\t\t\t\tname=\"rating-stars-value\"\n\t\t\t\t\t\t\t\tvalue=\"3\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<div class=\"rating-stars-container\">\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t\t<div class=\"item-overly-trans\">\n\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\t\t\t\tclass=\"rating-value star\"\n\t\t\t\t\t\t\t\tname=\"rating-stars-value\"\n\t\t\t\t\t\t\t\tvalue=\"3\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<div class=\"rating-stars-container\">\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t\t<div class=\"item-overly-trans\">\n\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\t\t\t\tclass=\"rating-value star\"\n\t\t\t\t\t\t\t\tname=\"rating-stars-value\"\n\t\t\t\t\t\t\t\tvalue=\"3\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<div class=\"rating-stars-container\">\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t\t<div class=\"item-overly-trans\">\n\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\t\t\t\tclass=\"rating-value star\"\n\t\t\t\t\t\t\t\tname=\"rating-stars-value\"\n\t\t\t\t\t\t\t\tvalue=\"3\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<div class=\"rating-stars-container\">\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t<ion-card [routerLink]=\"['/','home','setting']\">\n\t\t\t\t\t<ion-img class=\"item__image\" [src]=\"image\"></ion-img>\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Name</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>Descriptions</ion-card-content>\n\t\t\t\t\t<div class=\"item-overly-trans\">\n\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\t\t\t\tclass=\"rating-value star\"\n\t\t\t\t\t\t\t\tname=\"rating-stars-value\"\n\t\t\t\t\t\t\t\tvalue=\"3\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<div class=\"rating-stars-container\">\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/navigation/home/home-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/navigation/home/home-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesNavigationHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/navigation/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/home/home.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/navigation/home/home.module.ts ***!
      \******************************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesNavigationHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/navigation/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/navigation/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/home/home.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/navigation/home/home.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".smllogo__img {\n  height: 2.6rem;\n  width: 45%;\n}\n\n.item {\n  display: flex !important;\n  flex-direction: column !important;\n  justify-content: center;\n}\n\n.item__image {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.export__button {\n  margin-bottom: 3rem !important;\n}\n\n.request__button {\n  position: absolute;\n  top: 75%;\n  /* position the top  edge of the element at the middle of the parent */\n  left: 50%;\n  /* position the left edge of the element at the middle of the parent */\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 80vw;\n  z-index: 1;\n}\n\nion-ripple-effect {\n  color: #5260ff;\n}\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.item-overly-trans .rating-stars .rating-stars-container .rating-star.sm {\n  color: #f1c40f !important;\n}\n\n.rating-stars .rating-stars-container .rating-star.sm {\n  font-size: 13px;\n}\n\n.item-overly-trans .rating-stars {\n  position: unset;\n  display: table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsY0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFJQTtFQUNDLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQUREOztBQUVDO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUlBO0VBQ0MsOEJBQUE7QUFERDs7QUFJQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLHNFQUFBO0VBQ1YsU0FBQTtFQUFXLHNFQUFBO0VBQ1gsZ0NBQUE7RUFFQSxrQkFBQTtFQUVBLFdBQUE7RUFFQSxVQUFBO0FBRkQ7O0FBS0E7RUFDQyxjQUFBO0FBRkQ7O0FBS0E7RUFDQyxxQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFGRDs7QUFLQTtFQUNDLHlCQUFBO0FBRkQ7O0FBS0E7RUFDQyxlQUFBO0FBRkQ7O0FBS0E7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQUZEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtbGxvZ28ge1xuXHQmX19pbWcge1xuXHRcdGhlaWdodDogMi42cmVtO1xuXHRcdHdpZHRoOiA0NSU7XG5cdH1cbn1cblxuLml0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdCZfX2ltYWdlIHtcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdH1cbn1cblxuLmV4cG9ydF9fYnV0dG9uIHtcblx0bWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWVzdF9fYnV0dG9uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDc1JTsgLyogcG9zaXRpb24gdGhlIHRvcCAgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cblx0bGVmdDogNTAlOyAvKiBwb3NpdGlvbiB0aGUgbGVmdCBlZGdlIG9mIHRoZSBlbGVtZW50IGF0IHRoZSBtaWRkbGUgb2YgdGhlIHBhcmVudCAqL1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0d2lkdGg6IDgwdnc7XG5cblx0ei1pbmRleDogMTtcbn1cblxuaW9uLXJpcHBsZS1lZmZlY3Qge1xuXHRjb2xvcjogIzUyNjBmZjtcbn1cblxuLmZhIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcblx0dGV4dC1yZW5kZXJpbmc6IGF1dG87XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uaXRlbS1vdmVybHktdHJhbnMgLnJhdGluZy1zdGFycyAucmF0aW5nLXN0YXJzLWNvbnRhaW5lciAucmF0aW5nLXN0YXIuc20ge1xuXHRjb2xvcjogI2YxYzQwZiAhaW1wb3J0YW50O1xufVxuXG4ucmF0aW5nLXN0YXJzIC5yYXRpbmctc3RhcnMtY29udGFpbmVyIC5yYXRpbmctc3Rhci5zbSB7XG5cdGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLml0ZW0tb3Zlcmx5LXRyYW5zIC5yYXRpbmctc3RhcnMge1xuXHRwb3NpdGlvbjogdW5zZXQ7XG5cdGRpc3BsYXk6IHRhYmxlO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/home/home.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/navigation/home/home.page.ts ***!
      \****************************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesNavigationHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/model.service */
      "./src/app/services/model.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(modelService, router, fb) {
          _classCallCheck(this, HomePage);

          this.modelService = modelService;
          this.router = router;
          this.fb = fb;
          this.years = [];
          this.model = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
          this.year = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
          this.logo = '../../../assets/images/logo/scroadslight.svg';
          this.image = '../../../../assets/images/banners/banner2.jpg';
          this.exportForm = this.fb.group({
            model: this.model,
            year: this.year
          });
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getModel();
          }
        }, {
          key: "getModel",
          value: function getModel() {
            var _this = this;

            this.modelSub = this.modelService.getModel().subscribe(function (data) {
              _this.models = data.map(function (e) {
                return Object.assign({
                  id: e.payload.doc.id
                }, e.payload.doc.data());
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modelSub && this.yearSub) {
              this.modelSub.unsubscribe();
              this.yearSub.unsubscribe();
            }
          }
        }, {
          key: "fetchYear",
          value: function fetchYear(e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.modelService.getModelYear(e.target.value).subscribe(function (data) {
                        _this2.years = data.map(function (m) {
                          return Object.assign({}, m.payload.doc.data());
                        });
                      }, function (err) {
                        console.log(err);
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "exportSubmit",
          value: function exportSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var exportState;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      exportState = {
                        state: {
                          "export": this.exportForm.value
                        }
                      }; // Do useful stuff with the gathered data

                      this.router.navigate(['/', 'home', 'export'], exportState);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this3 = this;

            setTimeout(function () {
              _this3.router.navigate(['home', 'seller']);

              event.target.complete();
            }, 2000);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-request',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/navigation/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map