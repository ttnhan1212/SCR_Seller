(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["platenumber-platenumber-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/platenumber/platenumber.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/platenumber/platenumber.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRequestPlatenumberPlatenumberPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','seller']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-title>Request</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"p-1\">\n\t<ion-card class=\"p-2\">\n\t\t<ion-item class=\"mt-4\">\n\t\t\t<ion-label position=\"floating\">Plate Number</ion-label>\n\t\t\t<ion-input\n\t\t\t\ttype=\"text\"\n\t\t\t\tplaceholder=\"Your Plate Number\"\n\t\t\t\t[(ngModel)]=\"plate\"\n\t\t\t></ion-input>\n\t\t</ion-item>\n\t\t<ion-button\n\t\t\tclass=\"mt-4\"\n\t\t\texpand=\"block\"\n\t\t\tcolor=\"tertiary\"\n\t\t\t[disabled]=\"!plate\"\n\t\t\t(click)=\"createPlate()\"\n\t\t>\n\t\t\tConfirm\n\t\t</ion-button>\n\t</ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/request/platenumber/platenumber-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/request/platenumber/platenumber-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: PlatenumberPageRoutingModule */

    /***/
    function srcAppPagesRequestPlatenumberPlatenumberRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatenumberPageRoutingModule", function () {
        return PlatenumberPageRoutingModule;
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


      var _platenumber_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./platenumber.page */
      "./src/app/pages/request/platenumber/platenumber.page.ts");

      var routes = [{
        path: '',
        component: _platenumber_page__WEBPACK_IMPORTED_MODULE_3__["PlatenumberPage"]
      }];

      var PlatenumberPageRoutingModule = function PlatenumberPageRoutingModule() {
        _classCallCheck(this, PlatenumberPageRoutingModule);
      };

      PlatenumberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PlatenumberPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/request/platenumber/platenumber.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/request/platenumber/platenumber.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PlatenumberPageModule */

    /***/
    function srcAppPagesRequestPlatenumberPlatenumberModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatenumberPageModule", function () {
        return PlatenumberPageModule;
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


      var _platenumber_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./platenumber-routing.module */
      "./src/app/pages/request/platenumber/platenumber-routing.module.ts");
      /* harmony import */


      var _platenumber_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./platenumber.page */
      "./src/app/pages/request/platenumber/platenumber.page.ts");

      var PlatenumberPageModule = function PlatenumberPageModule() {
        _classCallCheck(this, PlatenumberPageModule);
      };

      PlatenumberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _platenumber_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlatenumberPageRoutingModule"]],
        declarations: [_platenumber_page__WEBPACK_IMPORTED_MODULE_6__["PlatenumberPage"]]
      })], PlatenumberPageModule);
      /***/
    },

    /***/
    "./src/app/pages/request/platenumber/platenumber.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/request/platenumber/platenumber.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRequestPlatenumberPlatenumberPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  position: absolute;\n  top: 45%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  width: 90vw;\n  height: 20vh;\n}\n\n* {\n  font-family: \"Noto Sans KR\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC9wbGF0ZW51bWJlci9wbGF0ZW51bWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQUREOztBQUlBO0VBQ0MsdUNBQUE7QUFERCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcXVlc3QvcGxhdGVudW1iZXIvcGxhdGVudW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNDUlO1xuXHRsZWZ0OiA0OCU7XG5cblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cblx0d2lkdGg6IDkwdnc7XG5cdGhlaWdodDogMjB2aDtcbn1cblxuKiB7XG5cdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/request/platenumber/platenumber.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/request/platenumber/platenumber.page.ts ***!
      \***************************************************************/

    /*! exports provided: PlatenumberPage */

    /***/
    function srcAppPagesRequestPlatenumberPlatenumberPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatenumberPage", function () {
        return PlatenumberPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_noti_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/noti.service */
      "./src/app/services/noti.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/request.service */
      "./src/app/services/request.service.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_vehicles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/vehicles.service */
      "./src/app/services/vehicles.service.ts");

      var PlatenumberPage = /*#__PURE__*/function () {
        function PlatenumberPage(vehicleService, requestService, afAuth, authService, loadingController, toast, route, notiService) {
          _classCallCheck(this, PlatenumberPage);

          this.vehicleService = vehicleService;
          this.requestService = requestService;
          this.afAuth = afAuth;
          this.authService = authService;
          this.loadingController = loadingController;
          this.toast = toast;
          this.route = route;
          this.notiService = notiService;
          this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
        }

        _createClass(PlatenumberPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createPlate",
          value: function createPlate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var vehicle, loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      vehicle = {};
                      _context.next = 3;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        showBackdrop: true
                      });

                    case 3:
                      loading = _context.sent;
                      vehicle['platenumber'] = this.plate;
                      _context.prev = 5;
                      _context.next = 8;
                      return loading.present();

                    case 8:
                      _context.next = 10;
                      return this.vehicleService.createVehicle(vehicle).then(function (res) {
                        _this.plate = '';
                        var request = {};
                        request['vehiclesId'] = res.id;
                        request['status'] = 'draft';

                        try {
                          _this.toast.showToast('Your request is successfully created!');

                          _this.requestService.createRequestBySeller(request, _this.sellerId).then(function (val) {
                            _this.requestSellerId = val.id;
                            console.log(_this.requestSellerId);
                          })["catch"](function (err) {
                            console.log(err.message);
                          });

                          _this.requestService.createRequest(request).then(function (val) {
                            _this.requestState = {
                              state: {
                                requestSellerId: _this.requestSellerId
                              }
                            };

                            _this.notiService.createNoti({
                              requestId: val.id,
                              status: 'On-going',
                              updateDate: Math.floor(new Date().getTime() / 1000.0),
                              user: _this.sellerId
                            });

                            _this.route.navigate(['/', 'request', val.id], _this.requestState);
                          })["catch"](function (err) {
                            console.log(err.message);
                          });
                        } catch (error) {
                          _this.toast.showToast(error.message);
                        }
                      })["catch"](function (error) {
                        _this.toast.showToast(error.message);
                      });

                    case 10:
                      _context.next = 12;
                      return loading.dismiss();

                    case 12:
                      _context.next = 19;
                      break;

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](5);
                      this.toast.showToast(_context.t0.message);
                      _context.next = 19;
                      return loading.dismiss();

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[5, 14]]);
            }));
          }
        }]);

        return PlatenumberPage;
      }();

      PlatenumberPage.ctorParameters = function () {
        return [{
          type: _services_vehicles_service__WEBPACK_IMPORTED_MODULE_9__["VehicleService"]
        }, {
          type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_noti_service__WEBPACK_IMPORTED_MODULE_1__["NotiService"]
        }];
      };

      PlatenumberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-platenumber',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./platenumber.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/platenumber/platenumber.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./platenumber.page.scss */
        "./src/app/pages/request/platenumber/platenumber.page.scss"))["default"]]
      })], PlatenumberPage);
      /***/
    },

    /***/
    "./src/app/services/vehicles.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/vehicles.service.ts ***!
      \**********************************************/

    /*! exports provided: VehicleService */

    /***/
    function srcAppServicesVehiclesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
        return VehicleService;
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

      var VehicleService = /*#__PURE__*/function () {
        function VehicleService(firestore) {
          _classCallCheck(this, VehicleService);

          this.firestore = firestore;
        } // getRequest() {
        // 	return this.firestore
        // 		.collection("requests", (ref) =>
        // 			ref.where("sellerId", "==", this.loggedUser)
        // 		)
        // 		.snapshotChanges();
        // }


        _createClass(VehicleService, [{
          key: "getVehicleById",
          value: function getVehicleById(id) {
            return this.firestore.collection('vehicles', function (ref) {
              return ref.where('id', '==', id);
            }).snapshotChanges();
          }
        }, {
          key: "createVehicle",
          value: function createVehicle(vehicle) {
            return this.firestore.collection('vehicles').add(vehicle);
          } // updateRequest(request: Request) {
          // 	delete request.id;
          // 	this.firestore.doc('requests/' + request.id).update(request);
          // }

        }, {
          key: "deleteVehicle",
          value: function deleteVehicle(id) {
            this.firestore.collection('vehicles').doc(id)["delete"]();
          }
        }]);

        return VehicleService;
      }();

      VehicleService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      };

      VehicleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], VehicleService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=platenumber-platenumber-module-es5.js.map