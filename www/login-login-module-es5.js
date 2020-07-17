(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/login/login.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/login/login.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesIndexLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<ion-img [src]=\"logo\" class=\"smllogo__img p-1\" alt=\"logo\"></ion-img>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Header/Banner section -->\n\t<ion-item>\n\t\t<div class=\"bannerimg cover-image bg-background3\">\n\t\t\t<div class=\"header-text\">\n\t\t\t\t<div class=\"text-center text-white\">\n\t\t\t\t\t<h1 class=\"\">Welcome to SCRoads</h1>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-item>\n\t<!-- End of Header/Banner section -->\n\n\t<!-- Login content section -->\n\t<ion-card class=\"m-5\">\n\t\t<div class=\"container customerpage\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"single-page\">\n\t\t\t\t\t<div class=\"col-lg-5 col-xl-4 col-md-6 d-block mx-auto\">\n\t\t\t\t\t\t<div class=\"wrapper wrapper2\">\n\t\t\t\t\t\t\t<form id=\"login\" class=\"card-body\" tabindex=\"500\">\n\t\t\t\t\t\t\t\t<h3>Continue as:</h3>\n\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\texpand=\"block\"\n\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t(click)=\"anonyLogin()\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tSeller\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t<hr class=\"divider\" />\n\t\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t\t<ion-text class=\"text-body text-center\">\n\t\t\t\t\t\t\t\t\tContinue using Social Accounts\n\t\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\t\tfill=\"outline\"\n\t\t\t\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t\t\t\t\t\t\thref=\"https://www.facebook.com/\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-left\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/svgs/facebook.svg\"\n\t\t\t\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\t\tfill=\"outline\"\n\t\t\t\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t\t\t\t\t\t\thref=\"https://www.google.com/gmail/\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-left\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/svgs/search.svg\"\n\t\t\t\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\tGoogle\n\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-card>\n\t<!-- End of Login content section -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/index/login/login-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/index/login/login-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesIndexLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/index/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/index/login/login.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/index/login/login.module.ts ***!
      \***************************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesIndexLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/index/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/index/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/index/login/login.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/index/login/login.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesIndexLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".horizontal-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 4rem;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n  background-color: #f1f5fd;\n}\n\n.smllogo__img {\n  height: 2.6rem;\n}\n\n.bannerimg {\n  padding: 2rem 0 2rem 0;\n  background-size: cover;\n}\n\n.container {\n  width: 100%;\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.cover-image {\n  background-size: cover !important;\n  width: 100%;\n  background-image: url('banner2.jpg');\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(141, 11, 183, 0.8), rgba(33, 63, 148, 0.8));\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8));\n}\n\n.bg-background3 .header-text {\n  position: relative;\n  z-index: 10;\n}\n\n.single-page .wrapper.wrapper2 {\n  background: #fff;\n  width: 100%;\n  background: #fff;\n  transition: all 0.5s;\n  color: #fff;\n  overflow: hidden;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.sptb {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  width: 200%;\n}\n\n.header-md::after {\n  width: 0 !important;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxzQ0FBQTtFQUVBLHlCQUFBO0FBRkQ7O0FBTUM7RUFDQyxjQUFBO0FBSEY7O0FBT0E7RUFDQyxzQkFBQTtFQUNBLHNCQUFBO0FBSkQ7O0FBT0E7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKRDs7QUFPQTtFQUNDLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FBSkQ7O0FBT0E7RUFDQyxzRkFBQTtBQUpEOztBQVdBO0VBQ0MsdUZBQUE7QUFSRDs7QUFnQkE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUFiRDs7QUFnQkE7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWJEOztBQWdCQTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBYkQ7O0FBZ0JBO0VBQ0MsbUJBQUE7QUFiRDs7QUFnQkE7RUFDQyx3QkFBQTtFQUNBLG9CQUFBO0FBYkQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9yaXpvbnRhbC1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdGhlaWdodDogNHJlbTtcblxuXHRib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWZkO1xufVxuXG4uc21sbG9nbyB7XG5cdCZfX2ltZyB7XG5cdFx0aGVpZ2h0OiAyLjZyZW07XG5cdH1cbn1cblxuLmJhbm5lcmltZyB7XG5cdHBhZGRpbmc6IDJyZW0gMCAycmVtIDA7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jb250YWluZXIge1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZy1yaWdodDogMC43NXJlbTtcblx0cGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uY292ZXItaW1hZ2Uge1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVycy9iYW5uZXIyLmpwZycpO1xufVxuXG4uYmctYmFja2dyb3VuZDM6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHJnYmEoMTQxLCAxMSwgMTgzLCAwLjgpLFxuXHRcdHJnYmEoMzMsIDYzLCAxNDgsIDAuOClcblx0KTtcbn1cblxuLmJnLWJhY2tncm91bmQzOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHRyZ2JhKDEwNiwgMTcsIDIwMywgMC44KSxcblx0XHRyZ2JhKDM3LCAxMTcsIDI1MiwgMC44KVxuXHQpO1xuXHQvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAlKTtcbn1cblxuLmJnLWJhY2tncm91bmQzIC5oZWFkZXItdGV4dCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTA7XG59XG5cbi5zaW5nbGUtcGFnZSAud3JhcHBlci53cmFwcGVyMiB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcblx0Y29sb3I6ICNmZmY7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3B0YiB7XG5cdHBhZGRpbmctdG9wOiAzcmVtO1xuXHRwYWRkaW5nLWJvdHRvbTogM3JlbTtcblx0d2lkdGg6IDIwMCU7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcblx0d2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuXHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/index/login/login.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/index/login/login.page.ts ***!
      \*************************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesIndexLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(loadingController, toast, authService) {
          _classCallCheck(this, LoginPage);

          this.loadingController = loadingController;
          this.toast = toast;
          this.authService = authService;
          this.logo = "../../../assets/images/banners/logo/scroadslight.svg";
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "anonyLogin",
          value: function anonyLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: "Please wait...",
                        showBackdrop: true
                      });

                    case 2:
                      loading = _context.sent;
                      _context.prev = 3;
                      _context.next = 6;
                      return loading.present();

                    case 6:
                      this.authService.loginAny();
                      _context.next = 9;
                      return loading.dismiss();

                    case 9:
                      _context.next = 16;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](3);
                      this.toast.showToast(_context.t0.message);
                      _context.next = 16;
                      return loading.dismiss();

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 11]]);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/index/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map