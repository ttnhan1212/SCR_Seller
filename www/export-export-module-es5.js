(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["export-export-module"], {
    /***/
    "./src/app/pages/navigation/export/export-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/navigation/export/export-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: ExportPageRoutingModule */

    /***/
    function srcAppPagesNavigationExportExportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportPageRoutingModule", function () {
        return ExportPageRoutingModule;
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


      var _export_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./export.page */
      "./src/app/pages/navigation/export/export.page.ts");

      var routes = [{
        path: '',
        component: _export_page__WEBPACK_IMPORTED_MODULE_3__["ExportPage"]
      }];

      var ExportPageRoutingModule = function ExportPageRoutingModule() {
        _classCallCheck(this, ExportPageRoutingModule);
      };

      ExportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExportPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/export/export.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/navigation/export/export.module.ts ***!
      \**********************************************************/

    /*! exports provided: ExportPageModule */

    /***/
    function srcAppPagesNavigationExportExportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportPageModule", function () {
        return ExportPageModule;
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


      var _export_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./export-routing.module */
      "./src/app/pages/navigation/export/export-routing.module.ts");
      /* harmony import */


      var _export_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./export.page */
      "./src/app/pages/navigation/export/export.page.ts");

      var ExportPageModule = function ExportPageModule() {
        _classCallCheck(this, ExportPageModule);
      };

      ExportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _export_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExportPageRoutingModule"]],
        declarations: [_export_page__WEBPACK_IMPORTED_MODULE_6__["ExportPage"]]
      })], ExportPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=export-export-module-es5.js.map