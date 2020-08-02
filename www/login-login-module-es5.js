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


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<ion-img [src]=\"logo\" class=\"smllogo__img p-1\" alt=\"logo\"></ion-img>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Header/Banner section -->\n\t<ion-item>\n\t\t<div class=\"bannerimg cover-image bg-background3\">\n\t\t\t<div class=\"header-text\">\n\t\t\t\t<div class=\"text-center text-white\">\n\t\t\t\t\t<h1 class=\"\">Welcome to SCRoads</h1>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-item>\n\t<!-- End of Header/Banner section -->\n\n\t<!-- Login content section -->\n\t<ion-card class=\"m-5\">\n\t\t<div class=\"container customerpage\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"single-page\">\n\t\t\t\t\t<div class=\"col-lg-5 col-xl-4 col-md-6 d-block mx-auto\">\n\t\t\t\t\t\t<div class=\"wrapper wrapper2\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h3>Continue as:</h3>\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" style=\"color: black;\" [(ngModel)]=\"name\"></ion-input>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t<ion-button expand=\"block\" color=\"tertiary\" (click)=\"anonyLogin()\">\n\t\t\t\t\t\t\t\t\tProceed\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t<!-- </form> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <form id=\"login\" class=\"card-body\" tabindex=\"500\"> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-card>\n\t<!-- End of Login content section -->\n</ion-content>";
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

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
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


      __webpack_exports__["default"] = ".horizontal-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 4rem;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n  background-color: #f1f5fd;\n}\n\n.smllogo__img {\n  height: 2.6rem;\n  width: 7rem;\n}\n\n.bannerimg {\n  padding: 2rem 0 2rem 0;\n  background-size: cover;\n}\n\n.container {\n  width: 100%;\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.cover-image {\n  background-size: cover !important;\n  width: 100%;\n  background-image: url('banner2.jpg');\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(141, 11, 183, 0.8), rgba(33, 63, 148, 0.8));\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8));\n}\n\n.bg-background3 .header-text {\n  position: relative;\n  z-index: 10;\n}\n\n.single-page .wrapper.wrapper2 {\n  background: #fff;\n  width: 100%;\n  background: #fff;\n  transition: all 0.5s;\n  color: #fff;\n  overflow: hidden;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.sptb {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  width: 200%;\n}\n\n.header-md::after {\n  width: 0 !important;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxzQ0FBQTtFQUVBLHlCQUFBO0FBRkQ7O0FBTUM7RUFDQyxjQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU9BO0VBQ0Msc0JBQUE7RUFDQSxzQkFBQTtBQUpEOztBQU9BO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSkQ7O0FBT0E7RUFDQyxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQUpEOztBQU9BO0VBQ0Msc0ZBQUE7QUFKRDs7QUFXQTtFQUNDLHVGQUFBO0FBUkQ7O0FBZ0JBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FBYkQ7O0FBZ0JBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFiRDs7QUFnQkE7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQWJEOztBQWdCQTtFQUNDLG1CQUFBO0FBYkQ7O0FBZ0JBO0VBQ0Msd0JBQUE7RUFDQSxvQkFBQTtBQWJEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwtaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRoZWlnaHQ6IDRyZW07XG5cblx0Ym94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjVmZDtcbn1cblxuLnNtbGxvZ28ge1xuXHQmX19pbWcge1xuXHRcdGhlaWdodDogMi42cmVtO1xuXHRcdHdpZHRoOiA3cmVtO1xuXHR9XG59XG5cbi5iYW5uZXJpbWcge1xuXHRwYWRkaW5nOiAycmVtIDAgMnJlbSAwO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG5cdHBhZGRpbmctbGVmdDogMC43NXJlbTtcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmNvdmVyLWltYWdlIHtcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lcnMvYmFubmVyMi5qcGcnKTtcbn1cblxuLmJnLWJhY2tncm91bmQzOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHRyZ2JhKDE0MSwgMTEsIDE4MywgMC44KSxcblx0XHRyZ2JhKDMzLCA2MywgMTQ4LCAwLjgpXG5cdCk7XG59XG5cbi5iZy1iYWNrZ3JvdW5kMzpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gcmlnaHQsXG5cdFx0cmdiYSgxMDYsIDE3LCAyMDMsIDAuOCksXG5cdFx0cmdiYSgzNywgMTE3LCAyNTIsIDAuOClcblx0KTtcblx0Ly9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwJSk7XG59XG5cbi5iZy1iYWNrZ3JvdW5kMyAuaGVhZGVyLXRleHQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDEwO1xufVxuXG4uc2luZ2xlLXBhZ2UgLndyYXBwZXIud3JhcHBlcjIge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cdGNvbG9yOiAjZmZmO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwdGIge1xuXHRwYWRkaW5nLXRvcDogM3JlbTtcblx0cGFkZGluZy1ib3R0b206IDNyZW07XG5cdHdpZHRoOiAyMDAlO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG5cdHdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbiJdfQ== */";
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


      var _services_seller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/seller.service */
      "./src/app/services/seller.service.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(loadingController, toast, authService, afAuth, sellerService) {
          _classCallCheck(this, LoginPage);

          this.loadingController = loadingController;
          this.toast = toast;
          this.authService = authService;
          this.afAuth = afAuth;
          this.sellerService = sellerService;
          this.createDate = Math.floor(new Date().getTime() / 1000.0);
          this.logo = '../../../assets/images/banners/logo/scroadslight.svg';
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "anonyLogin",
          value: function anonyLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        showBackdrop: true
                      });

                    case 2:
                      loading = _context.sent;
                      _context.prev = 3;
                      _context.next = 6;
                      return loading.present();

                    case 6:
                      _context.next = 8;
                      return this.authService.loginAny();

                    case 8:
                      _context.next = 10;
                      return this.afAuth.onAuthStateChanged(function (user) {
                        if (user) {
                          _this.sellerService.createSeller(user.uid, {
                            seller_name: _this.name,
                            uid: user.uid,
                            create_date: _this.createDate
                          });
                        }
                      });

                    case 10:
                      _context.next = 12;
                      return loading.dismiss();

                    case 12:
                      _context.next = 19;
                      break;

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](3);
                      this.toast.showToast(_context.t0.message);
                      _context.next = 19;
                      return loading.dismiss();

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 14]]);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _services_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
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