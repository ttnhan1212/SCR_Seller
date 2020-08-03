(function () {
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


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n\t<ion-title class=\"text-center title\">Welcome to SCRoads</ion-title>\n\t<ion-title class=\"text-center subtitle\">Before you start:</ion-title>\n\t<ion-list class=\"ion-padding\">\n\t\t<ion-item *ngFor=\"let item of checkBoxList\" lines=\"none\">\n\t\t\t<ion-label>{{item.value}}</ion-label>\n\t\t\t<ion-checkbox\n\t\t\t\tslot=\"start\"\n\t\t\t\t#checkBoxList\n\t\t\t\tname=\"itemoption\"\n\t\t\t\t(click)=\"modalNavigate(item.id)\"\n\t\t\t\t[(ngModel)]=\"item.isChecked\"\n\t\t\t\t[attr.data-id]=\"item.id\"\n\t\t\t\t(ionChange)=\"checkEvent()\"\n\t\t\t></ion-checkbox>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label><strong>Agree All</strong></ion-label>\n\t\t\t<ion-checkbox\n\t\t\t\tslot=\"start\"\n\t\t\t\tname=\"selectallcheck\"\n\t\t\t\t[(ngModel)]=\"masterCheck\"\n\t\t\t\t[indeterminate]=\"isIndeterminate\"\n\t\t\t\t(click)=\"checkMaster($event)\"\n\t\t\t></ion-checkbox>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-button\n\t\texpand=\"block\"\n\t\tcolor=\"warning\"\n\t\t(click)=\"anonyLogin()\"\n\t\t[disabled]=\"!masterCheck\"\n\t>\n\t\tStart\n\t</ion-button>\n</ion-content>\n";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_1__["SlidesComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_1__["SlidesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
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


      __webpack_exports__["default"] = ".title {\n  margin-top: 8rem;\n  height: 20vh;\n  font-size: 32px;\n  line-height: normal;\n}\n\n.subtitle {\n  height: 4vh;\n  color: gray;\n  font-size: 20px;\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtBQUFEOztBQUdBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7QUFERCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuXHRtYXJnaW4tdG9wOiA4cmVtO1xuXHRoZWlnaHQ6IDIwdmg7XG5cblx0Zm9udC1zaXplOiAzMnB4O1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uc3VidGl0bGUge1xuXHRoZWlnaHQ6IDR2aDtcblx0Y29sb3I6IGdyYXk7XG5cblx0Zm9udC1zaXplOiAyMHB4O1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuIl19 */";
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


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _components_modals_privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/modals/privacypolicy/privacypolicy.page */
      "./src/app/components/modals/privacypolicy/privacypolicy.page.ts");
      /* harmony import */


      var _components_modals_puagreement_puagreement_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../components/modals/puagreement/puagreement.page */
      "./src/app/components/modals/puagreement/puagreement.page.ts");
      /* harmony import */


      var _components_modals_termcondition_termcondition_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../components/modals/termcondition/termcondition.page */
      "./src/app/components/modals/termcondition/termcondition.page.ts");

      var WelcomePage = /*#__PURE__*/function () {
        function WelcomePage(modalController, loadingController, toast, authService, afAuth, sellerService) {
          _classCallCheck(this, WelcomePage);

          this.modalController = modalController;
          this.loadingController = loadingController;
          this.toast = toast;
          this.authService = authService;
          this.afAuth = afAuth;
          this.sellerService = sellerService;
          this.createDate = Math.floor(new Date().getTime() / 1000.0);
          this.checkBoxList = [{
            id: 1,
            value: 'Privacy Policy',
            isChecked: false
          }, {
            id: 2,
            value: 'Terms & Condition',
            isChecked: false
          }, {
            id: 3,
            value: 'Privacy Usage Agreement',
            isChecked: false
          }];
        }

        _createClass(WelcomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "privatePolicyModal",
          value: function privatePolicyModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _components_modals_privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_7__["PrivacypolicyPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "termConditionModal",
          value: function termConditionModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _components_modals_termcondition_termcondition_page__WEBPACK_IMPORTED_MODULE_9__["TermconditionPage"]
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "PuaModal",
          value: function PuaModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _components_modals_puagreement_puagreement_page__WEBPACK_IMPORTED_MODULE_8__["PuagreementPage"]
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "checkMaster",
          value: function checkMaster() {
            var _this = this;

            setTimeout(function () {
              _this.checkBoxList.forEach(function (obj) {
                obj.isChecked = _this.masterCheck;
              });
            });
          }
        }, {
          key: "checkEvent",
          value: function checkEvent() {
            var totalItems = this.checkBoxList.length;
            var checked = 0;
            this.checkBoxList.map(function (obj) {
              if (obj.isChecked) checked++; // console.log(obj.isChecked);
            });

            if (checked > 0 && checked < totalItems) {
              //If even one item is checked but not all
              this.isIndeterminate = true;
              this.masterCheck = false;
            } else if (checked == totalItems) {
              //If all are checked
              this.masterCheck = true;
              this.isIndeterminate = false;
            } else {
              //If none is checked
              this.isIndeterminate = false;
              this.masterCheck = false;
            }
          }
        }, {
          key: "modalNavigate",
          value: function modalNavigate(id) {
            var checkboxId = id; //let messageId = el.dataset.messageId;

            if (checkboxId === 1) {
              this.privatePolicyModal();
            } else {
              if (checkboxId === 2) {
                this.termConditionModal();
              } else if (checkboxId === 3) {
                this.PuaModal();
              }
            }
          }
        }, {
          key: "anonyLogin",
          value: function anonyLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        showBackdrop: true
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.prev = 3;
                      _context4.next = 6;
                      return loading.present();

                    case 6:
                      _context4.next = 8;
                      return this.authService.loginAny();

                    case 8:
                      _context4.next = 10;
                      return this.afAuth.onAuthStateChanged(function (user) {
                        if (user) {
                          _this2.sellerService.createSeller(user.uid, {
                            uid: user.uid,
                            create_date: _this2.createDate
                          });
                        }
                      });

                    case 10:
                      _context4.next = 12;
                      return loading.dismiss();

                    case 12:
                      _context4.next = 19;
                      break;

                    case 14:
                      _context4.prev = 14;
                      _context4.t0 = _context4["catch"](3);
                      this.toast.showToast(_context4.t0.message);
                      _context4.next = 19;
                      return loading.dismiss();

                    case 19:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[3, 14]]);
            }));
          }
        }]);

        return WelcomePage;
      }();

      WelcomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _services_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"]
        }];
      };

      WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
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
})();
//# sourceMappingURL=welcome-welcome-module-es5.js.map