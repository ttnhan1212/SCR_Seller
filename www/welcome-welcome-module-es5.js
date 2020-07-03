function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSlidesSlidesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t<ion-slide>\n\t\t<h2>Hello</h2>\n\t\t<p>Slide 1</p>\n\t</ion-slide>\n\t<ion-slide>\n\t\t<h2>Hello there</h2>\n\t\t<p>Slide 2</p>\n\t</ion-slide>\n\t<ion-slide>\n\t\t<h2>Hello Agian</h2>\n\t\t<p>Slide 3</p>\n\t</ion-slide>\n</ion-slides>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button expand=\"block\" color=\"warning\" (click)=\"navigateToLogin()\"\n\t>Start</ion-button\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/welcome/welcome.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/welcome/welcome.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesIndexWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n\t<app-slides></app-slides>\n\t<app-start></app-start>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _slides_slides_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./slides/slides.component */
    "./src/app/components/slides/slides.component.ts");
    /* harmony import */


    var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./start/start.component */
    "./src/app/components/start/start.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"], _slides_slides_component__WEBPACK_IMPORTED_MODULE_1__["SlidesComponent"]],
      exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"], _slides_slides_component__WEBPACK_IMPORTED_MODULE_1__["SlidesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/slides/slides.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/slides/slides.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSlidesSlidesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slide {\n  padding: 160px 20px;\n  display: block;\n}\nion-slide h2 {\n  font-size: 36px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBQ0Q7QUFBQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcblx0cGFkZGluZzogMTYwcHggMjBweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGgyIHtcblx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/slides/slides.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/slides/slides.component.ts ***!
    \*******************************************************/

  /*! exports provided: SlidesComponent */

  /***/
  function srcAppComponentsSlidesSlidesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesComponent", function () {
      return SlidesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SlidesComponent = /*#__PURE__*/function () {
      function SlidesComponent() {
        _classCallCheck(this, SlidesComponent);

        this.slideOpts = {
          initialSlide: 1,
          speed: 400
        };
      }

      _createClass(SlidesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SlidesComponent;
    }();

    SlidesComponent.ctorParameters = function () {
      return [];
    };

    SlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slides',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./slides.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./slides.component.scss */
      "./src/app/components/slides/slides.component.scss"))["default"]]
    })], SlidesComponent);
    /***/
  },

  /***/
  "./src/app/components/start/start.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/start/start.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsStartStartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/start/start.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/start/start.component.ts ***!
    \*****************************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppComponentsStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
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

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent(router) {
        _classCallCheck(this, StartComponent);

        this.router = router;
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
          this.router.navigate(['login']);
        }
      }]);

      return StartComponent;
    }();

    StartComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./start.component.scss */
      "./src/app/components/start/start.component.scss"))["default"]]
    })], StartComponent);
    /***/
  },

  /***/
  "./src/app/pages/index/welcome/welcome-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/index/welcome/welcome-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: WelcomePageRoutingModule */

  /***/
  function srcAppPagesIndexWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
      return WelcomePageRoutingModule;
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


    var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/pages/index/welcome/welcome.page.ts");

    var routes = [{
      path: '',
      component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }];

    var WelcomePageRoutingModule = function WelcomePageRoutingModule() {
      _classCallCheck(this, WelcomePageRoutingModule);
    };

    WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WelcomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/index/welcome/welcome.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/index/welcome/welcome.module.ts ***!
    \*******************************************************/

  /*! exports provided: WelcomePageModule */

  /***/
  function srcAppPagesIndexWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
      return WelcomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcome-routing.module */
    "./src/app/pages/index/welcome/welcome-routing.module.ts");
    /* harmony import */


    var _welcome_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/pages/index/welcome/welcome.page.ts");

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_6__["WelcomePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_7__["WelcomePage"]]
    })], WelcomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/index/welcome/welcome.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/index/welcome/welcome.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesIndexWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/index/welcome/welcome.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/index/welcome/welcome.page.ts ***!
    \*****************************************************/

  /*! exports provided: WelcomePage */

  /***/
  function srcAppPagesIndexWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
      return WelcomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomePage = /*#__PURE__*/function () {
      function WelcomePage() {
        _classCallCheck(this, WelcomePage);
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomePage;
    }();

    WelcomePage.ctorParameters = function () {
      return [];
    };

    WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/welcome/welcome.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./welcome.page.scss */
      "./src/app/pages/index/welcome/welcome.page.scss"))["default"]]
    })], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=welcome-welcome-module-es5.js.map