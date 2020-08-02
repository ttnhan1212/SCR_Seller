(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-request-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/request-detail/request-detail.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/request-detail/request-detail.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRequestRequestDetailRequestDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>Request Detail</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-grid class=\"mb-5\">\n\t\t<ion-row class=\"mt-4 mb-4\">\n\t\t\t<ion-col>\n\t\t\t\t<ion-label class=\"pl-2 pr-2 fs-35\">2009</ion-label>\n\t\t\t\t<ion-label class=\"pl-2 pr-2 fs-35\">K-5</ion-label>\n\t\t\t\t<ion-label class=\"pl-2 pr-2\">12K1234</ion-label>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-label>Please upload car images</ion-label>\n\t\t<ion-row class=\"mb-4 p-5\">\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-label class=\"label fs-25\">Front</ion-label>\n\t\t\t\t<ion-img [src]=\"sample\"></ion-img>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-label class=\"label fs-25\">Back</ion-label>\n\t\t\t\t<ion-img [src]=\"sample\"></ion-img>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-label class=\"label fs-25\">Left</ion-label>\n\t\t\t\t<ion-img [src]=\"sample\"></ion-img>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-label class=\"label fs-25\">Right</ion-label>\n\t\t\t\t<ion-img [src]=\"sample\"></ion-img>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-img [src]=\"sample\"></ion-img>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col class=\"text-center\">\n\t\t\t\t<ion-button expand=\"block\">See Insurance history</ion-button>\n\t\t\t\t<ion-label>Please upload at least 4 images</ion-label>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<form [formGroup]=\"detailForm\">\n\t\t<ion-item-group class=\"mb-5\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Name</ion-label>\n\t\t\t\t<ion-input type=\"text\" [formControl]=\"name\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Phone</ion-label>\n\t\t\t\t<ion-input type=\"number\" [formControl]=\"phone\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Location</ion-label>\n\t\t\t\t<ion-select\n\t\t\t\t\tinterface=\"action-sheet\"\n\t\t\t\t\tplaceholder=\"Select your car year...\"\n\t\t\t\t\t[formControl]=\"location\"\n\t\t\t\t>\n\t\t\t\t\t<ion-select-option *ngFor=\"let item of locations\">\n\t\t\t\t\t\t{{item.city}}\n\t\t\t\t\t</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Mileages</ion-label>\n\t\t\t\t<ion-input type=\"text\" [formControl]=\"miles\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Other</ion-label>\n\t\t\t\t<ion-textarea type=\"text\" [formControl]=\"other\"></ion-textarea>\n\t\t\t</ion-item>\n\t\t</ion-item-group>\n\t\t<ion-button\n\t\t\texpand=\"block\"\n\t\t\t(click)=\"updateRequest()\"\n\t\t\t[disabled]=\"!detailForm.valid\"\n\t\t>\n\t\t\tRequest Quote\n\t\t</ion-button>\n\t</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/request.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/request.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRequestRequestPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-router-outlet></ion-router-outlet>\n";
      /***/
    },

    /***/
    "./src/app/pages/request/request-detail/request-detail.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/request/request-detail/request-detail.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRequestRequestDetailRequestDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC9yZXF1ZXN0LWRldGFpbC9yZXF1ZXN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUFBRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcXVlc3QvcmVxdWVzdC1kZXRhaWwvcmVxdWVzdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/request/request-detail/request-detail.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/request/request-detail/request-detail.page.ts ***!
      \*********************************************************************/

    /*! exports provided: RequestDetailPage */

    /***/
    function srcAppPagesRequestRequestDetailRequestDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestDetailPage", function () {
        return RequestDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/location.service */
      "./src/app/services/location.service.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/request.service */
      "./src/app/services/request.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var RequestDetailPage = /*#__PURE__*/function () {
        function RequestDetailPage(router, route, requestService, afAuth, authService, loadingController, toast, formBuilder, locationService) {
          var _this = this;

          _classCallCheck(this, RequestDetailPage);

          this.router = router;
          this.route = route;
          this.requestService = requestService;
          this.afAuth = afAuth;
          this.authService = authService;
          this.loadingController = loadingController;
          this.toast = toast;
          this.formBuilder = formBuilder;
          this.locationService = locationService;
          this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required)]));
          this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]));
          this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required);
          this.miles = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required);
          this.other = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required);
          this.effDate = Math.floor(new Date().getTime() / 1000.0);
          this.expDate = Math.floor(new Date().getTime() / 1000.0 + 7200);
          this.locations = [];
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

          this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
          this.sample = '../../../../assets/images/png/spares/1.png';
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.request = _this.router.getCurrentNavigation().extras.state.requestSellerId;
            }
          });
          this.detailForm = this.formBuilder.group({
            name: this.name,
            phone: this.phone,
            location: this.location,
            effectedTime: this.effDate,
            expiredTime: this.expDate,
            sellerId: this.sellerId,
            miles: this.miles,
            other: this.other,
            status: 'ongoing',
            participants: []
          });
        }

        _createClass(RequestDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.locationService.getLocation().subscribe(function (data) {
              _this2.locations = data.map(function (val) {
                return {
                  city: val.payload.doc.data()['city']
                };
              });
            });
          }
        }, {
          key: "updateRequest",
          value: function updateRequest() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                      return this.requestService.updateRequestBySeller(this.detailForm.value, this.sellerId, this.request);

                    case 8:
                      _context.next = 10;
                      return this.requestService.updateRequest(this.detailForm.value, this.id);

                    case 10:
                      _context.next = 12;
                      return this.toast.showToast('Your request is successfully uploaded!');

                    case 12:
                      _context.next = 14;
                      return loading.dismiss();

                    case 14:
                      _context.next = 16;
                      return this.router.navigate(['/', 'home', 'ongoing']);

                    case 16:
                      _context.next = 23;
                      break;

                    case 18:
                      _context.prev = 18;
                      _context.t0 = _context["catch"](3);
                      this.toast.showToast(_context.t0.message);
                      _context.next = 23;
                      return loading.dismiss();

                    case 23:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 18]]);
            }));
          }
        }]);

        return RequestDetailPage;
      }();

      RequestDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]
        }];
      };

      RequestDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-request-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./request-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/request-detail/request-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./request-detail.page.scss */
        "./src/app/pages/request/request-detail/request-detail.page.scss"))["default"]]
      })], RequestDetailPage);
      /***/
    },

    /***/
    "./src/app/pages/request/request-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/request/request-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: RequestPageRoutingModule */

    /***/
    function srcAppPagesRequestRequestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestPageRoutingModule", function () {
        return RequestPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _request_detail_request_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./request-detail/request-detail.page */
      "./src/app/pages/request/request-detail/request-detail.page.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _request_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./request.page */
      "./src/app/pages/request/request.page.ts");

      var routes = [{
        path: '',
        component: _request_page__WEBPACK_IMPORTED_MODULE_4__["RequestPage"],
        children: [{
          path: 'plate',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | platenumber-platenumber-module */
            [__webpack_require__.e("common"), __webpack_require__.e("platenumber-platenumber-module")]).then(__webpack_require__.bind(null,
            /*! ./platenumber/platenumber.module */
            "./src/app/pages/request/platenumber/platenumber.module.ts")).then(function (m) {
              return m.PlatenumberPageModule;
            });
          }
        }, {
          path: ':id',
          component: _request_detail_request_detail_page__WEBPACK_IMPORTED_MODULE_1__["RequestDetailPage"],
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | request-detail-request-detail-module */
            "request-detail-request-detail-module").then(__webpack_require__.bind(null,
            /*! ./request-detail/request-detail.module */
            "./src/app/pages/request/request-detail/request-detail.module.ts")).then(function (m) {
              return m.RequestDetailPageModule;
            });
          }
        }]
      }];

      var RequestPageRoutingModule = function RequestPageRoutingModule() {
        _classCallCheck(this, RequestPageRoutingModule);
      };

      RequestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], RequestPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/request/request.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/request/request.module.ts ***!
      \*************************************************/

    /*! exports provided: RequestPageModule */

    /***/
    function srcAppPagesRequestRequestModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestPageModule", function () {
        return RequestPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _request_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./request-routing.module */
      "./src/app/pages/request/request-routing.module.ts");
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


      var _request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./request.page */
      "./src/app/pages/request/request.page.ts");

      var RequestPageModule = function RequestPageModule() {
        _classCallCheck(this, RequestPageModule);
      };

      RequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _request_routing_module__WEBPACK_IMPORTED_MODULE_1__["RequestPageRoutingModule"]],
        declarations: [_request_page__WEBPACK_IMPORTED_MODULE_6__["RequestPage"]]
      })], RequestPageModule);
      /***/
    },

    /***/
    "./src/app/pages/request/request.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/request/request.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRequestRequestPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcXVlc3QvcmVxdWVzdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/request/request.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/request/request.page.ts ***!
      \***********************************************/

    /*! exports provided: RequestPage */

    /***/
    function srcAppPagesRequestRequestPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestPage", function () {
        return RequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RequestPage = /*#__PURE__*/function () {
        function RequestPage() {
          _classCallCheck(this, RequestPage);
        }

        _createClass(RequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RequestPage;
      }();

      RequestPage.ctorParameters = function () {
        return [];
      };

      RequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./request.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/request.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./request.page.scss */
        "./src/app/pages/request/request.page.scss"))["default"]]
      })], RequestPage);
      /***/
    },

    /***/
    "./src/app/services/location.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/location.service.ts ***!
      \**********************************************/

    /*! exports provided: LocationService */

    /***/
    function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationService", function () {
        return LocationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LocationService = /*#__PURE__*/function () {
        function LocationService(firestore) {
          _classCallCheck(this, LocationService);

          this.firestore = firestore;
        }

        _createClass(LocationService, [{
          key: "getLocation",
          value: function getLocation() {
            return this.firestore.collection('locations').snapshotChanges();
          }
        }]);

        return LocationService;
      }();

      LocationService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      };

      LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], LocationService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-request-request-module-es5.js.map