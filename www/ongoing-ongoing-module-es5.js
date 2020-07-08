function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ongoing-ongoing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationOngoingOngoingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>ongoing</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-item-group>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Seller</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Phone</ion-label>\n\t\t\t<ion-input type=\"number\" [(ngModel)]=\"phone\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Location</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"location\"></ion-input>\n\t\t</ion-item>\n\t</ion-item-group>\n\t<ion-button\n\t\texpand=\"block\"\n\t\t[disabled]=\"!name || !phone || !location\"\n\t\t(click)=\"createRequest()\"\n\t>\n\t\tCreate Request\n\t</ion-button>\n\n\t<ion-card>\n\t\t<ion-item *ngFor=\"let request of requests\">\n\t\t\t<ion-label>Name: {{request.sellerName}}</ion-label>\n\t\t\t<ion-label>EffDate: {{request.effectedTime}}</ion-label>\n\t\t\t<ion-label>ExpDate: {{request.expireDate}}</ion-label>\n\t\t</ion-item>\n\t</ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/navigation/ongoing/ongoing-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: OngoingPageRoutingModule */

  /***/
  function srcAppPagesNavigationOngoingOngoingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OngoingPageRoutingModule", function () {
      return OngoingPageRoutingModule;
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


    var _ongoing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ongoing.page */
    "./src/app/pages/navigation/ongoing/ongoing.page.ts");

    var routes = [{
      path: '',
      component: _ongoing_page__WEBPACK_IMPORTED_MODULE_3__["OngoingPage"]
    }];

    var OngoingPageRoutingModule = function OngoingPageRoutingModule() {
      _classCallCheck(this, OngoingPageRoutingModule);
    };

    OngoingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OngoingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/navigation/ongoing/ongoing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/navigation/ongoing/ongoing.module.ts ***!
    \************************************************************/

  /*! exports provided: OngoingPageModule */

  /***/
  function srcAppPagesNavigationOngoingOngoingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OngoingPageModule", function () {
      return OngoingPageModule;
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


    var _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ongoing-routing.module */
    "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts");
    /* harmony import */


    var _ongoing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ongoing.page */
    "./src/app/pages/navigation/ongoing/ongoing.page.ts");

    var OngoingPageModule = function OngoingPageModule() {
      _classCallCheck(this, OngoingPageModule);
    };

    OngoingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_5__["OngoingPageRoutingModule"]],
      declarations: [_ongoing_page__WEBPACK_IMPORTED_MODULE_6__["OngoingPage"]]
    })], OngoingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/navigation/ongoing/ongoing.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/navigation/ongoing/ongoing.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNavigationOngoingOngoingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9vbmdvaW5nLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/navigation/ongoing/ongoing.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/navigation/ongoing/ongoing.page.ts ***!
    \**********************************************************/

  /*! exports provided: OngoingPage */

  /***/
  function srcAppPagesNavigationOngoingOngoingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OngoingPage", function () {
      return OngoingPage;
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


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");

    var OngoingPage = /*#__PURE__*/function () {
      function OngoingPage(requestService) {
        _classCallCheck(this, OngoingPage);

        this.requestService = requestService;
        this.effDate = Math.floor(new Date().getTime() / 1000.0);
        this.expDate = Math.floor(new Date().getTime() / 1000.0 + 7200);
      }

      _createClass(OngoingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.requestService.getRequest().subscribe(function (data) {
            _this.requests = data.map(function (e) {
              var effectedTime = new Date(e.payload.doc.data()['effectedTime'] * 1000).toLocaleString();
              var expireDate = new Date(e.payload.doc.data()['expireDate'] * 1000).toLocaleString();
              return Object.assign({
                id: e.payload.doc.id
              }, e.payload.doc.data());
            });
          });
        }
      }, {
        key: "createRequest",
        value: function createRequest() {
          var _this2 = this;

          var Request = {};
          Request['sellerName'] = this.name;
          Request['phone'] = this.phone;
          Request['location'] = this.location;
          Request['effectedTime'] = this.effDate;
          Request['expireDate'] = this.expDate;
          this.requestService.createRequest(Request).then(function (res) {
            _this2.name = '';
            _this2.phone = '';
            _this2.location = '';
            console.log(res);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);

      return OngoingPage;
    }();

    OngoingPage.ctorParameters = function () {
      return [{
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }];
    };

    OngoingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ongoing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ongoing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ongoing.page.scss */
      "./src/app/pages/navigation/ongoing/ongoing.page.scss"))["default"]]
    })], OngoingPage);
    /***/
  },

  /***/
  "./src/app/services/request.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/request.service.ts ***!
    \*********************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppServicesRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
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

    var RequestService = /*#__PURE__*/function () {
      function RequestService(firestore) {
        _classCallCheck(this, RequestService);

        this.firestore = firestore;
      }

      _createClass(RequestService, [{
        key: "getRequest",
        value: function getRequest() {
          return this.firestore.collection('requests').snapshotChanges();
        }
      }, {
        key: "createRequest",
        value: function createRequest(request) {
          return this.firestore.collection('requests').add(request);
        }
      }, {
        key: "updateRequest",
        value: function updateRequest(request) {
          delete request.id;
          this.firestore.doc('requests/' + request.id).update(request);
        }
      }, {
        key: "deleteRequest",
        value: function deleteRequest(requestId) {
          this.firestore.doc('requests/' + requestId)["delete"]();
        }
      }]);

      return RequestService;
    }();

    RequestService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
      }];
    };

    RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], RequestService);
    /***/
  }
}]);
//# sourceMappingURL=ongoing-ongoing-module-es5.js.map