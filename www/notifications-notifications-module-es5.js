(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>Notifications</ion-title>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/home/seller\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-list *ngIf=\"!noti\">\n\t\t<ion-item>\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<ion-title style=\"background: gray;\" class=\"m-0 p-0\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-title>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" class=\"mt-2\">\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<ion-title style=\"background: gray;\" class=\"m-0 p-0\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-title>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" class=\"mt-2\">\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<ion-title style=\"background: gray;\" class=\"m-0 p-0\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-title>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" class=\"mt-2\">\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<ion-title style=\"background: gray;\" class=\"m-0 p-0\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-title>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" class=\"mt-2\">\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-list *ngIf=\"noti\">\n\t\t<ion-item\n\t\t\t*ngFor=\"let item of noti\"\n\t\t\t[routerLink]=\"['/','home','ongoing', item.requestId]\"\n\t\t>\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<img src=\"../../../../assets/images/photos/8627.jpg\" />\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<ion-title style=\"background: gray;\" class=\"m-0 p-0\">\n\t\t\t\t\t\t\t<p class=\"fs-20 text-center mt-2 text-dark\">{{item.status}}</p>\n\t\t\t\t\t\t</ion-title>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" class=\"mt-2\">\n\t\t\t\t\t\t{{localeDate(item.updateDate) | date}}\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>2009, K-5 <span class=\"fs-10\">12가1234</span></p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>{{item.request.miles}} Km</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>{{item.request.price || 'N/a'}}</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>{{item.id}}</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/navigation/notifications/notifications-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/navigation/notifications/notifications-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: NotificationsPageRoutingModule */

    /***/
    function srcAppPagesNavigationNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
        return NotificationsPageRoutingModule;
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


      var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/pages/navigation/notifications/notifications.page.ts");

      var routes = [{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
      }];

      var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
        _classCallCheck(this, NotificationsPageRoutingModule);
      };

      NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/notifications/notifications.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/navigation/notifications/notifications.module.ts ***!
      \************************************************************************/

    /*! exports provided: NotificationsPageModule */

    /***/
    function srcAppPagesNavigationNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
        return NotificationsPageModule;
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


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notifications-routing.module */
      "./src/app/pages/navigation/notifications/notifications-routing.module.ts");
      /* harmony import */


      var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/pages/navigation/notifications/notifications.page.ts");

      var NotificationsPageModule = function NotificationsPageModule() {
        _classCallCheck(this, NotificationsPageModule);
      };

      NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
      })], NotificationsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/notifications/notifications.page.scss":
    /*!************************************************************************!*\
      !*** ./src/app/pages/navigation/notifications/notifications.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/notifications/notifications.page.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/navigation/notifications/notifications.page.ts ***!
      \**********************************************************************/

    /*! exports provided: NotificationsPage */

    /***/
    function srcAppPagesNavigationNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
        return NotificationsPage;
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


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/request.service */
      "./src/app/services/request.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotificationsPage = /*#__PURE__*/function () {
        function NotificationsPage(notiService, requestService) {
          _classCallCheck(this, NotificationsPage);

          this.notiService = notiService;
          this.requestService = requestService;
          this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
        }

        _createClass(NotificationsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.notiSub = this.notiService.getNoti(this.sellerId).subscribe(function (data) {
              _this.noti = data.map(function (e) {
                return Object.assign({}, e.payload.doc.data());
              });

              _this.noti.forEach(function (val) {
                _this.requestService.getRequestById(val.requestId).subscribe(function (m) {
                  val.request = Object.assign({}, m.payload.data());
                });
              });

              console.log(_this.noti);
            });
          }
        }, {
          key: "localeDate",
          value: function localeDate(time) {
            var myDate = new Date(time * 1000);
            return myDate.toLocaleString();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.notiSub) {
              this.notiSub.unsubscribe();
            }
          }
        }]);

        return NotificationsPage;
      }();

      NotificationsPage.ctorParameters = function () {
        return [{
          type: _services_noti_service__WEBPACK_IMPORTED_MODULE_1__["NotiService"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }];
      };

      NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notifications.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notifications.page.scss */
        "./src/app/pages/navigation/notifications/notifications.page.scss"))["default"]]
      })], NotificationsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notifications-notifications-module-es5.js.map