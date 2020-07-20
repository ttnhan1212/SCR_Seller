(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["platenumber-platenumber-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/platenumber/platenumber.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/platenumber/platenumber.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','seller']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-title>Request</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"p-1\">\n\t<ion-card class=\"p-2\">\n\t\t<ion-item class=\"mt-4\">\n\t\t\t<ion-label position=\"floating\">Plate Number</ion-label>\n\t\t\t<ion-input\n\t\t\t\ttype=\"text\"\n\t\t\t\tplaceholder=\"Your Plate Number\"\n\t\t\t\t[(ngModel)]=\"plate\"\n\t\t\t></ion-input>\n\t\t</ion-item>\n\t\t<ion-button\n\t\t\tclass=\"mt-4\"\n\t\t\texpand=\"block\"\n\t\t\t[disabled]=\"!plate\"\n\t\t\t(click)=\"createPlate()\"\n\t\t>\n\t\t\tConfirm\n\t\t</ion-button>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/request/platenumber/platenumber-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/request/platenumber/platenumber-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PlatenumberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatenumberPageRoutingModule", function() { return PlatenumberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _platenumber_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platenumber.page */ "./src/app/pages/request/platenumber/platenumber.page.ts");




const routes = [
    {
        path: '',
        component: _platenumber_page__WEBPACK_IMPORTED_MODULE_3__["PlatenumberPage"]
    }
];
let PlatenumberPageRoutingModule = class PlatenumberPageRoutingModule {
};
PlatenumberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlatenumberPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/request/platenumber/platenumber.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request/platenumber/platenumber.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlatenumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatenumberPageModule", function() { return PlatenumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _platenumber_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platenumber-routing.module */ "./src/app/pages/request/platenumber/platenumber-routing.module.ts");
/* harmony import */ var _platenumber_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./platenumber.page */ "./src/app/pages/request/platenumber/platenumber.page.ts");







let PlatenumberPageModule = class PlatenumberPageModule {
};
PlatenumberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _platenumber_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlatenumberPageRoutingModule"]
        ],
        declarations: [_platenumber_page__WEBPACK_IMPORTED_MODULE_6__["PlatenumberPage"]]
    })
], PlatenumberPageModule);



/***/ }),

/***/ "./src/app/pages/request/platenumber/platenumber.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request/platenumber/platenumber.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  position: absolute;\n  top: 45%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  width: 90vw;\n  height: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC9wbGF0ZW51bWJlci9wbGF0ZW51bWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQUREIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVxdWVzdC9wbGF0ZW51bWJlci9wbGF0ZW51bWJlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA0NSU7XG5cdGxlZnQ6IDQ4JTtcblxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuXHR3aWR0aDogOTB2dztcblx0aGVpZ2h0OiAyMHZoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/request/platenumber/platenumber.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/request/platenumber/platenumber.page.ts ***!
  \***************************************************************/
/*! exports provided: PlatenumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatenumberPage", function() { return PlatenumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_vehicles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/vehicles.service */ "./src/app/services/vehicles.service.ts");









let PlatenumberPage = class PlatenumberPage {
    constructor(vehicleService, requestService, afAuth, authService, loadingController, toast, route) {
        this.vehicleService = vehicleService;
        this.requestService = requestService;
        this.afAuth = afAuth;
        this.authService = authService;
        this.loadingController = loadingController;
        this.toast = toast;
        this.route = route;
    }
    ngOnInit() { }
    createPlate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let vehicle = {};
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                showBackdrop: true,
            });
            vehicle['platenumber'] = this.plate;
            try {
                yield loading.present();
                yield this.vehicleService
                    .createVehicle(vehicle)
                    .then((res) => {
                    this.plate = '';
                    let request = {};
                    request['vehiclesId'] = res.id;
                    try {
                        this.toast.showToast('Your request is successfully created!');
                        this.requestService.createRequest(request).then((val) => {
                            setTimeout(() => {
                                this.route.navigate(['/', 'request', val.id]);
                            }, 1000);
                        });
                    }
                    catch (error) {
                        this.toast.showToast(error.message);
                    }
                })
                    .catch((error) => {
                    this.toast.showToast(error.message);
                });
                yield loading.dismiss();
            }
            catch (error) {
                this.toast.showToast(error.message);
                yield loading.dismiss();
            }
        });
    }
};
PlatenumberPage.ctorParameters = () => [
    { type: _services_vehicles_service__WEBPACK_IMPORTED_MODULE_8__["VehicleService"] },
    { type: _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
PlatenumberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-platenumber',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./platenumber.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request/platenumber/platenumber.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./platenumber.page.scss */ "./src/app/pages/request/platenumber/platenumber.page.scss")).default]
    })
], PlatenumberPage);



/***/ }),

/***/ "./src/app/services/vehicles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/vehicles.service.ts ***!
  \**********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let VehicleService = class VehicleService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    // getRequest() {
    // 	return this.firestore
    // 		.collection("requests", (ref) =>
    // 			ref.where("sellerId", "==", this.loggedUser)
    // 		)
    // 		.snapshotChanges();
    // }
    getVehicleById(id) {
        return this.firestore
            .collection('vehicles', (ref) => ref.where('id', '==', id))
            .snapshotChanges();
    }
    createVehicle(vehicle) {
        return this.firestore.collection('vehicles').add(vehicle);
    }
    // updateRequest(request: Request) {
    // 	delete request.id;
    // 	this.firestore.doc('requests/' + request.id).update(request);
    // }
    deleteVehicle(id) {
        this.firestore.collection('vehicles').doc(id).delete();
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
VehicleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], VehicleService);



/***/ })

}]);
//# sourceMappingURL=platenumber-platenumber-module-es2015.js.map