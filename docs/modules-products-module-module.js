(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-products-module-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/details/details.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/details/details.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>details works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/forms/form/form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/forms/form/form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div style=\"margin-top: 10px;\" class=\"alert alert-success\" *ngIf='ismessage'>{{message}}</div>\r\n<div class=\"alert alert-danger\" *ngIf='invalidRequest'>has an errors </div>\r\n<div class=\"col\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\"><strong>Products</strong> <small>Form</small></div>\r\n    <div class=\"card-body\">\r\n      <form (submit)=\"save()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <!-- start form -->\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Name</label>\r\n              <!--[class.is-invalid]=\"(isValid('name') || errors?.name)\" [class.is-valid]=\"isInputValid('name')\"\r\n              -->\r\n              <input \r\n                [(ngModel)]=\"product.name\" name=\"name\" class=\"form-control\" id=\"name\" type=\"text\"\r\n                placeholder=\"Enter name Companie\" required>\r\n              <!-- <div [class.invalid-feedback]=\"isValid('name') || errors?.name\" *ngIf=\"isValid('name') || errors?.name \">\r\n                <span *ngFor=\"let err of messageError('name')\">{{ err }}</span>\r\n                <span *ngFor=\"let err of errors?.name\">{{ err }}</span>\r\n              </div> -->\r\n\r\n            </div>\r\n            <!-- end form -->\r\n             <!-- start form -->\r\n             <div class=\"form-group\">\r\n              <label for=\"name_fr\">Name Francais</label>\r\n              <input \r\n                [(ngModel)]=\"product.name_fr\" name=\"name_fr\" class=\"form-control\" id=\"name_fr\" type=\"text\"\r\n                placeholder=\"Enter name Francais\" required>\r\n                \r\n              <!-- <div [class.invalid-feedback]=\"isValid('name_fr') || errors?.name_fr\" *ngIf=\"isValid('name_fr') || errors?.name_fr \">\r\n                <span *ngFor=\"let err of messageError('name_fr')\">{{ err }}</span>\r\n                <span *ngFor=\"let err of errors?.name_fr\">{{ err }}</span>\r\n              </div> -->\r\n\r\n            </div>\r\n            <!-- end form -->\r\n            <!-- start form -->\r\n            <div class=\"form-group\">\r\n              <label for=\"name_en\">Name Englais</label>\r\n              <input \r\n                [(ngModel)]=\"product.name_en\" name=\"name_en\" class=\"form-control\" id=\"name_en\" type=\"text\"\r\n                placeholder=\"Enter name Englais\" required>\r\n              <!-- <div [class.invalid-feedback]=\"isValid('name_en') || errors?.name_en\" *ngIf=\"isValid('name_en') || errors?.name_en \">\r\n                <span *ngFor=\"let err of messageError('name_en')\">{{ err }}</span>\r\n                <span *ngFor=\"let err of errors?.name_en\">{{ err }}</span>\r\n              </div> -->\r\n\r\n            </div>\r\n            <!-- end form -->\r\n            <!-- start form -->\r\n            <div class=\"form-group\">\r\n              <label for=\"category\">category</label>\r\n              <select class=\"form-control\" id=\"category\" \r\n                 [(ngModel)]=\"product.category\" name=\"category\" class=\"form-control\"\r\n                id=\"category\">\r\n\r\n                <option *ngFor=\"let cat of categories\" [selected]=\"product?.category==cat._id\" [value]=\"cat._id\">{{cat.name}}</option>\r\n\r\n              </select>\r\n              <!-- <div [class.invalid-feedback]=\"isValid(this) || errors?.category\" *ngIf=\"isValid(this) || errors?.category \">\r\n                <span *ngFor=\"let err of messageError('category')\">{{ err }}</span>\r\n                <span *ngFor=\"let err of errors?.category\">{{ err }}</span>\r\n              </div> -->\r\n            </div>\r\n            <!-- end form -->\r\n            <!-- start form -->\r\n            <div class=\"form-group\">\r\n              <label for=\"PA\">Price Achat</label>\r\n              <input\r\n                name=\"PA\" [(ngModel)]=\"product.PA\" class=\"form-control\" id=\"PA\" type=\"text\"\r\n                placeholder=\"Enter PA Companie\" required>\r\n              <!-- <div [class.invalid-feedback]=\"isValid('PA') || errors?.PA\" *ngIf=\"isValid('PA') || errors?.PA \">\r\n                <span *ngFor=\"let err of messageError('PA')\">{{ err }}</span>\r\n                <span *ngFor=\"let err of errors?.PA\">{{ err }}</span>\r\n              </div> -->\r\n            </div>\r\n            <!-- end form -->\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <!-- start form -->\r\n            <div class=\"form-group\">\r\n              <label for=\"price\">Price Vende</label>\r\n              <input \r\n                name=\"price\" [(ngModel)]=\"product.price\" class=\"form-control\" id=\"price\" type=\"text\"\r\n                placeholder=\"Enter price Companie\" required>\r\n              <!-- <div [class.invalid-feedback]=\"isValid('price') || errors?.price\" *ngIf=\"isValid('price') || errors?.price \">\r\n                <span *ngFor=\"let err of messageError('price')\">{{ err }}</span>\r\n                <span *ngFor=\"let err of errors?.price\">{{ err }}</span>\r\n              </div> -->\r\n            </div>\r\n            <!-- end form -->\r\n            <!-- start form -->\r\n            <div class=\"form-group\">\r\n              <label for=\"CompanyID\">CompanyID</label>\r\n              <select class=\"form-control\" id=\"CompanyID\" \r\n                 [(ngModel)]=\"product.CompanyID\" name=\"CompanyID\" class=\"form-control\"\r\n                id=\"category\">\r\n\r\n                <option *ngFor=\"let comp of companies\" [selected]=\"product?.CompanyID==comp._id\" [value]=\"comp._id\">{{comp.name}}</option>\r\n\r\n              </select>\r\n              <!-- <div [class.invalid-feedback]=\"isValid(this) || errors?.CompanyID\" *ngIf=\"isValid(this) || errors?.CompanyID \">\r\n                <span *ngFor=\"let err of messageError('CompanyID')\">{{ err }}</span>\r\n                <span *ngFor=\"let err of errors?.CompanyID\">{{ err }}</span>\r\n              </div> -->\r\n            </div>\r\n            <!-- end form -->\r\n           \r\n          </div>\r\n          <button type=\"submit\"  class=\"btn btn-block btn-success\">Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/index/index.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/index/index.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <router-outlet></router-outlet> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/tables/tables.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/tables/tables.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n <ng-container *ngIf=\"modules$ && showTabel\">\r\n    <data-table  [data]=\"modules$\" [settings]=\"settings\" [loading]=\"true\">\r\n    </data-table>\r\n  </ng-container>   ");

/***/ }),

/***/ "./src/app/services/load.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/load.service.ts ***!
  \******************************************/
/*! exports provided: LoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadService", function() { return LoadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_provider_base_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/provider/base-provider */ "./src/app/base/provider/base-provider.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_users_users_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/users/users.action */ "./src/app/store/users/users.action.ts");
/* harmony import */ var _store_products_module_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/products/module.action */ "./src/app/store/products/module.action.ts");
/* harmony import */ var _store_companies_companies_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/companies/companies.action */ "./src/app/store/companies/companies.action.ts");
/* harmony import */ var _store_orders_module_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/orders/module.action */ "./src/app/store/orders/module.action.ts");
/* harmony import */ var _store_catagories_module_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/catagories/module.action */ "./src/app/store/catagories/module.action.ts");










var LoadService = /** @class */ (function () {
    function LoadService(baseCtrl, router, store) {
        this.baseCtrl = baseCtrl;
        this.router = router;
        this.store = store;
    }
    LoadService.prototype.ngOnInit = function () { };
    LoadService.prototype.loadAll = function () {
        this.store.dispatch(new _store_users_users_action__WEBPACK_IMPORTED_MODULE_5__["Load"]());
        this.store.dispatch(new _store_companies_companies_action__WEBPACK_IMPORTED_MODULE_7__["Load"]());
        this.store.dispatch(new _store_orders_module_action__WEBPACK_IMPORTED_MODULE_8__["Load"]());
        this.store.dispatch(new _store_products_module_action__WEBPACK_IMPORTED_MODULE_6__["Load"]());
        this.store.dispatch(new _store_catagories_module_action__WEBPACK_IMPORTED_MODULE_9__["Load"]());
    };
    LoadService.ctorParameters = function () { return [
        { type: _base_provider_base_provider__WEBPACK_IMPORTED_MODULE_3__["BaseProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    LoadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_base_provider_base_provider__WEBPACK_IMPORTED_MODULE_3__["BaseProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], LoadService);
    return LoadService;
}());



/***/ }),

/***/ "./src/app/views/modules/products/details/details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/modules/products/details/details.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vZHVsZXMvcHJvZHVjdHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/modules/products/details/details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/modules/products/details/details.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/details/details.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.component.css */ "./src/app/views/modules/products/details/details.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/products/forms/form/form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/modules/products/forms/form/form.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_error_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/error.form.service */ "./src/app/services/error.form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/views/modules/products/services/service.service.ts");
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/load.service */ "./src/app/services/load.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");







var FormComponent = /** @class */ (function () {
    function FormComponent(error, service, route, store, load) {
        this.error = error;
        this.service = service;
        this.route = route;
        this.store = store;
        this.load = load;
        this.product = {};
        this.isLoad = false;
        this.message = "edit Module success";
        this.load.loadAll();
        this.ismessage = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.store.subscribe(function (store) {
            _this.companies = store.companies.companies;
            _this.categories = store.catagories.catagories;
            _this.products = store.products.products;
            if (_this.products)
                _this.getEdit();
        });
    };
    FormComponent.prototype.getEdit = function () {
        var id = this.route.snapshot.queryParams.id;
        if (id) {
            var product = this.products.filter(function (prod) { return prod._id == id; })[0];
            Object.assign(this.product, product);
        }
    };
    FormComponent.prototype.isValid = function (control) {
        // console.log(control)
        //return this.error.inValid(control);
    };
    FormComponent.prototype.messageError = function (control) {
        //return this.error.messageError(control);
    };
    FormComponent.prototype.isInputValid = function (control) {
        //return this.error.isInputvalid(control)
    };
    FormComponent.prototype.save = function () {
        var _this = this;
        this.isLoad = true;
        console.log(this.product);
        this.service.save(this.product).subscribe(function (res) {
            if (res) {
                console.log(res);
                // this.ismessage=true
                // setTimeout(() => {
                //   this.ismessage = false;
                // }, 3000)
            }
            _this.isLoad = false;
        }, function (error) {
            console.log(error);
            _this.isLoad = false;
        });
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FormComponent.ctorParameters = function () { return [
        { type: _services_error_form_service__WEBPACK_IMPORTED_MODULE_2__["ErorrFrormService"] },
        { type: _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _services_load_service__WEBPACK_IMPORTED_MODULE_5__["LoadService"] }
    ]; };
    FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-user',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/forms/form/form.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_error_form_service__WEBPACK_IMPORTED_MODULE_2__["ErorrFrormService"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _services_load_service__WEBPACK_IMPORTED_MODULE_5__["LoadService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/products/index/index.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/modules/products/index/index.component.ts ***!
  \*****************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/index/index.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/products/module.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/modules/products/module.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/views/modules/products/details/details.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/views/modules/shared.module.ts");
/* harmony import */ var _module_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module.routing */ "./src/app/views/modules/products/module.routing.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/modules/products/index/index.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/views/modules/products/tables/tables.component.ts");
/* harmony import */ var _forms_form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/form/form.component */ "./src/app/views/modules/products/forms/form/form.component.ts");










var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
                _tables_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"],
                _forms_form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _module_routing__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            exports: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/views/modules/products/module.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/modules/products/module.routing.ts ***!
  \**********************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/views/modules/products/details/details.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/views/modules/products/tables/tables.component.ts");
/* harmony import */ var _forms_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/form/form.component */ "./src/app/views/modules/products/forms/form/form.component.ts");






var routes = [
    { path: '', component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"] },
    { path: 'edit', component: _forms_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"] },
    { path: 'add', component: _forms_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"] },
    { path: 'show', component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/views/modules/products/tables/tables.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/modules/products/tables/tables.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vZHVsZXMvcHJvZHVjdHMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/modules/products/tables/tables.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/modules/products/tables/tables.component.ts ***!
  \*******************************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service.service */ "./src/app/views/modules/products/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_products_module_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/products/module.action */ "./src/app/store/products/module.action.ts");
/* harmony import */ var _store_products_module_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/products/module.reducer */ "./src/app/store/products/module.reducer.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/socket.service */ "./src/app/services/socket.service.ts");








var TablesComponent = /** @class */ (function () {
    function TablesComponent(service, router, socket, store) {
        this.service = service;
        this.router = router;
        this.socket = socket;
        this.store = store;
        this.settings = {
            module: "products",
            columns: [
                { title: "Name Arabe", field: "name" },
                { title: "Name Francais ", field: "name_en" },
                { title: "Name Anglais", field: "name_fr" },
                { title: "image", field: "images", type: "image" },
                { title: "Prix de Vende", field: "price", type: "input" },
                { title: "Prix d'Achat", field: "PA", type: "input" },
                { title: "Nomber de Vendre", field: "nb_vendere" },
                { title: "publish", field: "published", type: "button" },
            ]
        };
        this.showTabel = true;
    }
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_products_module_action__WEBPACK_IMPORTED_MODULE_5__["Load"]());
        this.modules$ = this.store.select(_store_products_module_reducer__WEBPACK_IMPORTED_MODULE_6__["selectProducts"]);
        this.socket.getMessage('products').subscribe(function (data) {
            _this.showTabel = false;
            console.log('socket', data);
            _this.store.dispatch(new _store_products_module_action__WEBPACK_IMPORTED_MODULE_5__["Load_success"](data));
            _this.showTabel = true;
        });
    };
    TablesComponent.prototype.delete = function (module) {
    };
    TablesComponent.prototype.edit = function (module) {
        this.router.navigate(['/dashboard/' + this.service.module + '/edit'], { queryParams: { id: module._id } });
    };
    TablesComponent.prototype.show = function (module) {
        this.router.navigate(['/dashboard/' + this.service.module + '/show'], { queryParams: { id: module._id } });
    };
    TablesComponent.prototype.ngOnDestroy = function () {
    };
    TablesComponent.ctorParameters = function () { return [
        { type: _services_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/products/tables/tables.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tables.component.css */ "./src/app/views/modules/products/tables/tables.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-products-module-module.js.map