(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-splash-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/splash/splash.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/splash/splash.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesIndexSplashSplashPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<ion-img [src]=\"logo\" class=\"smllogo__img p-1\" alt=\"logo\"></ion-img>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-img [src]=\"image\" class=\"m-4 ads_img\"></ion-img>\n\t<ion-grid class=\"ion-no-padding\">\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-card class=\"text-center\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\tTotal Request Count (Monthly)\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content class=\"fs-30\">345,343</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-card class=\"text-center\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\tTotal Request Count (Daily)\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content class=\"fs-30\">\n\t\t\t\t\t\t234,222\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/index/splash/splash-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/index/splash/splash-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: SplashPageRoutingModule */

    /***/
    function srcAppPagesIndexSplashSplashRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function () {
        return SplashPageRoutingModule;
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


      var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./splash.page */
      "./src/app/pages/index/splash/splash.page.ts");

      var routes = [{
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
      }];

      var SplashPageRoutingModule = function SplashPageRoutingModule() {
        _classCallCheck(this, SplashPageRoutingModule);
      };

      SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SplashPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/index/splash/splash.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/index/splash/splash.module.ts ***!
      \*****************************************************/

    /*! exports provided: SplashPageModule */

    /***/
    function srcAppPagesIndexSplashSplashModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageModule", function () {
        return SplashPageModule;
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


      var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./splash-routing.module */
      "./src/app/pages/index/splash/splash-routing.module.ts");
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./splash.page */
      "./src/app/pages/index/splash/splash.page.ts");

      var SplashPageModule = function SplashPageModule() {
        _classCallCheck(this, SplashPageModule);
      };

      SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
      })], SplashPageModule);
      /***/
    },

    /***/
    "./src/app/pages/index/splash/splash.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/index/splash/splash.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesIndexSplashSplashPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".smllogo__img {\n  height: 4rem;\n  width: 35%;\n}\n\n.ads_img {\n  margin-top: 2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvc3BsYXNoL3NwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxZQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUlBO0VBQ0MsMkJBQUE7QUFERCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L3NwbGFzaC9zcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtbGxvZ28ge1xuXHQmX19pbWcge1xuXHRcdGhlaWdodDogNHJlbTtcblx0XHR3aWR0aDogMzUlO1xuXHR9XG59XG5cbi5hZHNfaW1nIHtcblx0bWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/index/splash/splash.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/index/splash/splash.page.ts ***!
      \***************************************************/

    /*! exports provided: SplashPage */

    /***/
    function srcAppPagesIndexSplashSplashPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPage", function () {
        return SplashPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SplashPage = /*#__PURE__*/function () {
        function SplashPage(router) {
          _classCallCheck(this, SplashPage);

          this.router = router;
          this.logo = '../../../assets/images/logo/scroadslight.svg';
          this.image = '../../../../assets/images/photos/OBC8OG0.jpg';
        }

        _createClass(SplashPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.router.navigate(['welcome']);
            }, 3000);
          }
        }]);

        return SplashPage;
      }();

      SplashPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-splash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./splash.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/splash/splash.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./splash.page.scss */
        "./src/app/pages/index/splash/splash.page.scss"))["default"]]
      })], SplashPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=splash-splash-module-es5.js.map