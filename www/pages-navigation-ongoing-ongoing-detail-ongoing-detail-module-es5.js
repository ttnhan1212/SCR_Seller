(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-ongoing-ongoing-detail-ongoing-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationOngoingOngoingDetailOngoingDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-card class=\"m-0 p-0 ion-padding\">\n\t\t<ion-grid>\n\t\t\t<ion-row class=\"mt-4 mb-5\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-label class=\"pl-2 pr-2 fs-35\">2009</ion-label>\n\t\t\t\t\t<ion-label class=\"pl-2 pr-2 fs-35\">K-5</ion-label>\n\t\t\t\t\t<ion-label class=\"pl-2 pr-2\">12K1234</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-label>Max</ion-label>\n\t\t\t\t\t<br />\n\t\t\t\t\t<ion-label class=\"fs-20\"><strong>2,000,000</strong></ion-label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-label>Average</ion-label>\n\t\t\t\t\t<br />\n\t\t\t\t\t<ion-label class=\"fs-20\"><strong>1,790,000</strong></ion-label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-label>Min</ion-label>\n\t\t\t\t\t<br />\n\t\t\t\t\t<ion-label class=\"fs-20\"><strong>1,230,000</strong></ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-card>\n\n\t<ion-item-group class=\"mt-8 text-center\" *ngIf=\"!participants\">\n\t\t<ion-label>\n\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t</ion-label>\n\t\t<ion-item-sliding *ngFor=\"let item of participants\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t</ion-avatar>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h2>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</h2>\n\t\t\t\t\t<p class=\"fs-25\">\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-note slot=\"end\">\n\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t</ion-note>\n\t\t\t\t<ion-icon slot=\"end\" name=\"chevron-back-outline\"></ion-icon>\n\t\t\t</ion-item>\n\t\t</ion-item-sliding>\n\t</ion-item-group>\n\n\t<ion-item-group\n\t\tclass=\"mt-8 text-center\"\n\t\t*ngIf=\"selectedDealer && participants\"\n\t>\n\t\t<ion-label>Waiting for confirmation</ion-label>\n\t\t<ion-spinner name=\"dots\"></ion-spinner>\n\t</ion-item-group>\n\n\t<ion-item-group class=\"mt-8\" *ngIf=\"!selectedDealer\">\n\t\t<ion-label>Please select a Dealer</ion-label>\n\t\t<ion-item-sliding *ngFor=\"let item of participants\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img src=\"../../../../assets/images/photos/33327.jpg\" />\n\t\t\t\t</ion-avatar>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h2>{{item.dealer.email}}</h2>\n\t\t\t\t\t<p class=\"fs-25\">${{item.price}}</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-note slot=\"end\">\n\t\t\t\t\tRating\n\t\t\t\t</ion-note>\n\t\t\t\t<ion-icon slot=\"end\" name=\"chevron-back-outline\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<ion-item-options side=\"end\">\n\t\t\t\t<ion-item-option (click)=\"selectDealer(item.id)\">\n\t\t\t\t\tSelect\n\t\t\t\t</ion-item-option>\n\t\t\t</ion-item-options>\n\t\t</ion-item-sliding>\n\t</ion-item-group>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: OngoingDetailPageRoutingModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingDetailPageRoutingModule", function () {
        return OngoingDetailPageRoutingModule;
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


      var _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ongoing-detail.page */
      "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts");

      var routes = [{
        path: '',
        component: _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_3__["OngoingDetailPage"]
      }];

      var OngoingDetailPageRoutingModule = function OngoingDetailPageRoutingModule() {
        _classCallCheck(this, OngoingDetailPageRoutingModule);
      };

      OngoingDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OngoingDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: OngoingDetailPageModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingDetailPageModule", function () {
        return OngoingDetailPageModule;
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


      var _ongoing_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ongoing-detail-routing.module */
      "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts");
      /* harmony import */


      var _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ongoing-detail.page */
      "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts");

      var OngoingDetailPageModule = function OngoingDetailPageModule() {
        _classCallCheck(this, OngoingDetailPageModule);
      };

      OngoingDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ongoing_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OngoingDetailPageRoutingModule"]],
        declarations: [_ongoing_detail_page__WEBPACK_IMPORTED_MODULE_6__["OngoingDetailPage"]]
      })], OngoingDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9vbmdvaW5nLWRldGFpbC9vbmdvaW5nLWRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts ***!
      \********************************************************************************/

    /*! exports provided: OngoingDetailPage */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingDetailPage", function () {
        return OngoingDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/request.service */
      "./src/app/services/request.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_dealer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/dealer.service */
      "./src/app/services/dealer.service.ts");

      var OngoingDetailPage = /*#__PURE__*/function () {
        function OngoingDetailPage(route, requestService, dealerService) {
          _classCallCheck(this, OngoingDetailPage);

          this.route = route;
          this.requestService = requestService;
          this.dealerService = dealerService;
          this.ongoing = {};
          this.participants = [];
          this.dealer = {};
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        }

        _createClass(OngoingDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRequestById();
            this.getParticipant();
            this.selectedRequest();
          }
        }, {
          key: "getRequestById",
          value: function getRequestById() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.requestService.getRequestById(this.id).subscribe(function (data) {
                        _this.ongoing = {
                          name: data.payload.data()['name']
                        };
                      });

                    case 2:
                      this.myValueSub = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getParticipant",
          value: function getParticipant() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.requestService.getParticipant(this.id).subscribe(function (val) {
                        _this2.participants = val.map(function (m) {
                          return {
                            id: m.payload.doc.id,
                            bidTime: m.payload.doc.data()['bidTime'],
                            price: m.payload.doc.data()['price'],
                            user: m.payload.doc.data()['userId']
                          };
                        });
                        _this2.partSub = _this2.participants.forEach(function (participant) {
                          _this2.dealerService.getDealer(participant.user).subscribe(function (res) {
                            participant.dealer = Object.assign({}, res.data());
                          });
                        });
                      });

                    case 2:
                      this.dealerSub = _context2.sent;

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "selectDealer",
          value: function selectDealer(user) {
            this.requestService.updateParticipant(this.id, user, {
              selected: true
            });
          }
        }, {
          key: "selectedRequest",
          value: function selectedRequest() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.requestService.selectedRequest(this.id).subscribe(function (val) {
                        if (val.length > 0) {
                          _this3.selectedDealer = Boolean(val);
                        } else {
                          _this3.selectedDealer = !Boolean(val);
                        }
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.myValueSub) {
              this.myValueSub.unsubscribe();
            }

            if (this.dealerSub) {
              this.dealerSub.unsubscribe();
            }

            if (this.partSub) {
              this.partSub.unsubscribe();
            }
          }
        }]);

        return OngoingDetailPage;
      }();

      OngoingDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]
        }, {
          type: src_app_services_dealer_service__WEBPACK_IMPORTED_MODULE_4__["DealerService"]
        }];
      };

      OngoingDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ongoing-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./ongoing-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./ongoing-detail.page.scss */
        "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss"))["default"]]
      })], OngoingDetailPage);
      /***/
    },

    /***/
    "./src/app/services/dealer.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/dealer.service.ts ***!
      \********************************************/

    /*! exports provided: DealerService */

    /***/
    function srcAppServicesDealerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealerService", function () {
        return DealerService;
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
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var DealerService = /*#__PURE__*/function () {
        function DealerService(firestore) {
          _classCallCheck(this, DealerService);

          this.firestore = firestore;
        }

        _createClass(DealerService, [{
          key: "getDealer",
          value: function getDealer(id) {
            return this.firestore.collection('Dealer').doc(id).get();
          }
        }, {
          key: "getDealerWithID",
          value: function getDealerWithID(id) {
            return this.firestore.collection('Dealer', function (ref) {
              return ref.where('id', '==', id);
            }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return DealerService;
      }();

      DealerService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      };

      DealerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], DealerService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-navigation-ongoing-ongoing-detail-ongoing-detail-module-es5.js.map