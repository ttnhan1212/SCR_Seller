(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adspage-adspage-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adspage/adspage.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adspage/adspage.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAdspageAdspagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-img [src]=\"logo\" class=\"smllogo__img ml-3\" alt=\"logo\"></ion-img>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','seller']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<h1 class=\"text-center p-5 mt-5\">\n\t\t죄송합니다. 고객님의 vehicle은 수출차 대상이 아닙니다\n\t</h1>\n\t<ion-item-group>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card href=\"tel:0772714016\">\n\t\t\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-img [src]=\"image\"></ion-img>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-item-group>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/adspage/adspage-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/adspage/adspage-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AdspagePageRoutingModule */

    /***/
    function srcAppPagesAdspageAdspageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdspagePageRoutingModule", function () {
        return AdspagePageRoutingModule;
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


      var _adspage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./adspage.page */
      "./src/app/pages/adspage/adspage.page.ts");

      var routes = [{
        path: '',
        component: _adspage_page__WEBPACK_IMPORTED_MODULE_3__["AdspagePage"]
      }];

      var AdspagePageRoutingModule = function AdspagePageRoutingModule() {
        _classCallCheck(this, AdspagePageRoutingModule);
      };

      AdspagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdspagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/adspage/adspage.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/adspage/adspage.module.ts ***!
      \*************************************************/

    /*! exports provided: AdspagePageModule */

    /***/
    function srcAppPagesAdspageAdspageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdspagePageModule", function () {
        return AdspagePageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _adspage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./adspage-routing.module */
      "./src/app/pages/adspage/adspage-routing.module.ts");
      /* harmony import */


      var _adspage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adspage.page */
      "./src/app/pages/adspage/adspage.page.ts");

      var AdspagePageModule = function AdspagePageModule() {
        _classCallCheck(this, AdspagePageModule);
      };

      AdspagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _adspage_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdspagePageRoutingModule"]],
        declarations: [_adspage_page__WEBPACK_IMPORTED_MODULE_6__["AdspagePage"]]
      })], AdspagePageModule);
      /***/
    },

    /***/
    "./src/app/pages/adspage/adspage.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/adspage/adspage.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAdspageAdspagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: \"Noto Sans KR\", sans-serif !important;\n}\n\n.smllogo__img {\n  height: 2.5rem;\n  width: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRzcGFnZS9hZHNwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtEQUFBO0FBQ0Q7O0FBR0M7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRzcGFnZS9hZHNwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuXHRmb250LWZhbWlseTogXCJOb3RvIFNhbnMgS1JcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uc21sbG9nbyB7XG5cdCZfX2ltZyB7XG5cdFx0aGVpZ2h0OiAyLjVyZW07XG5cdFx0d2lkdGg6IDM1JTtcblx0fVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/adspage/adspage.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/adspage/adspage.page.ts ***!
      \***********************************************/

    /*! exports provided: AdspagePage */

    /***/
    function srcAppPagesAdspageAdspagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdspagePage", function () {
        return AdspagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AdspagePage = /*#__PURE__*/function () {
        function AdspagePage() {
          _classCallCheck(this, AdspagePage);

          this.logo = '../../../assets/images/logo/scroadslight.svg';
          this.image = '../../../../assets/images/photos/OBC8OG0.jpg';
        }

        _createClass(AdspagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdspagePage;
      }();

      AdspagePage.ctorParameters = function () {
        return [];
      };

      AdspagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adspage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./adspage.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adspage/adspage.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./adspage.page.scss */
        "./src/app/pages/adspage/adspage.page.scss"))["default"]]
      })], AdspagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-adspage-adspage-module-es5.js.map