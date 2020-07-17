(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-detail-request-detail-module"],{

/***/ "./src/app/pages/request/request-detail/request-detail-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/request/request-detail/request-detail-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RequestDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailPageRoutingModule", function() { return RequestDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _request_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-detail.page */ "./src/app/pages/request/request-detail/request-detail.page.ts");




const routes = [
    {
        path: '',
        component: _request_detail_page__WEBPACK_IMPORTED_MODULE_3__["RequestDetailPage"]
    }
];
let RequestDetailPageRoutingModule = class RequestDetailPageRoutingModule {
};
RequestDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/request/request-detail/request-detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/request/request-detail/request-detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: RequestDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailPageModule", function() { return RequestDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _request_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-detail-routing.module */ "./src/app/pages/request/request-detail/request-detail-routing.module.ts");
/* harmony import */ var _request_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-detail.page */ "./src/app/pages/request/request-detail/request-detail.page.ts");







let RequestDetailPageModule = class RequestDetailPageModule {
};
RequestDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _request_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestDetailPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_request_detail_page__WEBPACK_IMPORTED_MODULE_6__["RequestDetailPage"]],
    })
], RequestDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=request-detail-request-detail-module-es2015.js.map