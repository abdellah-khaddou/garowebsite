(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-companies-companie-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/details/details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/details/details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>details works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/forms/form/form.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/forms/form/form.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n \r\n</style>\r\n<!-- <sppiner *ngIf=\"isLoad\"></sppiner> -->\r\n\r\n<div style=\"margin-top: 10px;\" class=\"alert alert-success\" *ngIf='ismessage'>{{message}}</div>\r\n<div class=\"alert alert-danger\" *ngIf='invalidtLogin'>has an errors </div>\r\n<div class=\"col\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\"><strong>Companie</strong> <small>Form</small></div>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"form\" (submit)=\"save()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"company\">Name</label>\r\n          <input  [class.is-invalid]=\"(isValid('name') || errors?.name)\" \r\n           [class.is-valid]=\"isInputValid('name')\" \r\n          formControlName=\"name\" [(ngModel)]=\"companie.name\" name=\"name\"  class=\"form-control\" id=\"name\" \r\n          type=\"text\" placeholder=\"Enter name Companie\" required  >\r\n          <div [class.invalid-feedback]=\"isValid('name') || errors?.name\"  *ngIf=\"isValid('name') || errors?.name \">\r\n            <span *ngFor=\"let err of messageError('name')\">{{ err }}</span>\r\n            <span *ngFor=\"let err of errors?.name\">{{ err }}</span>\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"company\">Tel</label>\r\n          <input [class.is-invalid]=\"(isValid('tel') || errors?.tel)\" \r\n           [class.is-valid]=\"isInputValid('tel')\"\r\n           formControlName=\"tel\" name=\"tel\" [(ngModel)]=\"companie.tel\"  class=\"form-control\" id=\"tel\" \r\n          type=\"text\" placeholder=\"Enter tel Companie\" required >\r\n          <div [class.invalid-feedback]=\"isValid('tel') || errors?.tel\"  *ngIf=\"isValid('tel') || errors?.tel \">\r\n            <span *ngFor=\"let err of messageError('tel')\">{{ err }}</span>\r\n            <span *ngFor=\"let err of errors?.tel\">{{ err }}</span>\r\n          </div>\r\n        </div>\r\n        \r\n      \r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-6\">\r\n\r\n       <div class=\"form-group\">\r\n          <label for=\"type\">Type</label>\r\n          <select class=\"form-control\" id=\"type\"\r\n          [class.is-invalid]=\"(isValid('type') || errors?.type)\" \r\n           [class.is-valid]=\"isInputValid('type')\" \r\n           [(ngModel)]=\"companie.type\"\r\n          formControlName=\"type\" name=\"type\"  class=\"form-control\" id=\"type\"\r\n          >\r\n\r\n            <option *ngFor=\"let r of valueType\" [selected]=\"companie?.type==r\" [value]=\"r\">{{r}}</option>\r\n            \r\n          </select>\r\n          <div [class.invalid-feedback]=\"isValid('type') || errors?.type\"  *ngIf=\"isValid('type') || errors?.type \">\r\n            <span *ngFor=\"let err of messageError('type')\">{{ err }}</span>\r\n            <span *ngFor=\"let err of errors?.type\">{{ err }}</span>\r\n          </div>\r\n        </div>      \r\n          \r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input [class.is-invalid]=\"(isValid('email') || errors?.email)\" \r\n           [class.is-valid]=\"isInputValid('email')\" [(ngModel)]=\"companie.email\"  formControlName=\"email\" name=\"email\"  class=\"form-control\" id=\"email\" \r\n          type=\"text\" placeholder=\"Enter email companie\" required >\r\n          <div [class.invalid-feedback]=\"isValid('email') || errors?.email\"  *ngIf=\"isValid('email') || errors?.email \">\r\n            <span *ngFor=\"let err of messageError('email')\">{{ err }}</span>\r\n            <span *ngFor=\"let err of errors?.email\">{{ err }}</span>\r\n          </div>\r\n        </div>\r\n        \r\n        \r\n        \r\n      </div>\r\n        <button type=\"submit\" [disabled]=\"form.errors != null\" class=\"btn btn-block btn-success\">Save Companie</button>\r\n      </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/index/companies.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/index/companies.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <router-outlet></router-outlet> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/tables/tables.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/tables/tables.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n <ng-container *ngIf=\"companies$\">\r\n    <data-table [data]=\"companies$\" [settings]=\"settings\" [loading]=\"true\">\r\n    </data-table>\r\n  </ng-container>   ");

/***/ }),

/***/ "./src/app/views/modules/companies/companie.module.ts":
/*!************************************************************!*\
  !*** ./src/app/views/modules/companies/companie.module.ts ***!
  \************************************************************/
/*! exports provided: CompanieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanieModule", function() { return CompanieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/views/modules/companies/tables/tables.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/form/form.component */ "./src/app/views/modules/companies/forms/form/form.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/views/modules/companies/details/details.component.ts");
/* harmony import */ var _index_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/companies.component */ "./src/app/views/modules/companies/index/companies.component.ts");
/* harmony import */ var _companie_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./companie.routing */ "./src/app/views/modules/companies/companie.routing.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.module */ "./src/app/views/modules/shared.module.ts");










var CompanieModule = /** @class */ (function () {
    function CompanieModule() {
    }
    CompanieModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _index_companies_component__WEBPACK_IMPORTED_MODULE_7__["CompaniesComponent"],
                _tables_tables_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesTablesComponent"],
                _forms_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormCompanieComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _companie_routing__WEBPACK_IMPORTED_MODULE_8__["companiesRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            exports: []
        })
    ], CompanieModule);
    return CompanieModule;
}());



/***/ }),

/***/ "./src/app/views/modules/companies/companie.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/modules/companies/companie.routing.ts ***!
  \*************************************************************/
/*! exports provided: companiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companiesRoutingModule", function() { return companiesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/views/modules/companies/details/details.component.ts");
/* harmony import */ var _forms_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/form/form.component */ "./src/app/views/modules/companies/forms/form/form.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/views/modules/companies/tables/tables.component.ts");






var routes = [
    { path: '', component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_5__["CompaniesTablesComponent"] },
    { path: 'edit', component: _forms_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormCompanieComponent"] },
    { path: 'add', component: _forms_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormCompanieComponent"] },
    { path: 'show', component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
];
var companiesRoutingModule = /** @class */ (function () {
    function companiesRoutingModule() {
    }
    companiesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], companiesRoutingModule);
    return companiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/modules/companies/details/details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/modules/companies/details/details.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vZHVsZXMvY29tcGFuaWVzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/modules/companies/details/details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/modules/companies/details/details.component.ts ***!
  \**********************************************************************/
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
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/details/details.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.component.css */ "./src/app/views/modules/companies/details/details.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/companies/forms/form/form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/modules/companies/forms/form/form.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormCompanieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCompanieComponent", function() { return FormCompanieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_error_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/error.form.service */ "./src/app/services/error.form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_companie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/companie.service */ "./src/app/views/modules/companies/services/companie.service.ts");







var FormCompanieComponent = /** @class */ (function () {
    function FormCompanieComponent(error, companieService, route, auth) {
        this.error = error;
        this.companieService = companieService;
        this.route = route;
        this.auth = auth;
        this.companie = {};
        this.isLoad = false;
        this.message = "edit Companie success";
        this.getEdit();
        this.ismessage = false;
        this.valueType = ['Transporteur', 'Administrateur', 'Chargeur'];
    }
    FormCompanieComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80),
            ]),
            tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])
        });
    };
    FormCompanieComponent.prototype.getEdit = function () {
        var _this = this;
        var id = this.route.snapshot.queryParams.id;
        this.companieService.search({ _id: id }).subscribe(function (companie) {
            if (companie)
                _this.companie = companie;
        });
    };
    FormCompanieComponent.prototype.isValid = function (control) {
        return this.error.inValid(control, this.form);
    };
    FormCompanieComponent.prototype.messageError = function (control) {
        return this.error.messageError(control, this.form);
    };
    FormCompanieComponent.prototype.isInputValid = function (control) {
        return this.error.isInputvalid(control, this.form);
    };
    FormCompanieComponent.prototype.save = function () {
        var _this = this;
        this.isLoad = true;
        this.companieService.create(this.companie).subscribe(function (res) {
            if (res) {
                _this.ismessage = true;
                setTimeout(function () {
                    _this.ismessage = false;
                }, 3000);
            }
            _this.isLoad = false;
        }, function (error) {
            console.log(error);
            _this.isLoad = false;
        });
    };
    FormCompanieComponent.ctorParameters = function () { return [
        { type: _services_error_form_service__WEBPACK_IMPORTED_MODULE_4__["ErorrFrormService"] },
        { type: _services_companie_service__WEBPACK_IMPORTED_MODULE_6__["CompanieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    FormCompanieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-user',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/forms/form/form.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_error_form_service__WEBPACK_IMPORTED_MODULE_4__["ErorrFrormService"],
            _services_companie_service__WEBPACK_IMPORTED_MODULE_6__["CompanieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FormCompanieComponent);
    return FormCompanieComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/companies/index/companies.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/modules/companies/index/companies.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent() {
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/index/companies.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/companies/tables/tables.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/modules/companies/tables/tables.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vZHVsZXMvY29tcGFuaWVzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/modules/companies/tables/tables.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/modules/companies/tables/tables.component.ts ***!
  \********************************************************************/
/*! exports provided: CompaniesTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesTablesComponent", function() { return CompaniesTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_companie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/companie.service */ "./src/app/views/modules/companies/services/companie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_companies_companies_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/companies/companies.action */ "./src/app/store/companies/companies.action.ts");
/* harmony import */ var _store_companies_companies_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/companies/companies.reducer */ "./src/app/store/companies/companies.reducer.ts");







var CompaniesTablesComponent = /** @class */ (function () {
    function CompaniesTablesComponent(companieService, router, store) {
        this.companieService = companieService;
        this.router = router;
        this.store = store;
        this.settings = {
            module: "companies",
            columns: [{ title: "Name", field: "name" }, { title: "Email", field: "email" },
                { title: "Tel", field: "tel" }, { title: "Type", field: "type" }]
        };
    }
    CompaniesTablesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_companies_companies_action__WEBPACK_IMPORTED_MODULE_5__["Load"]());
        this.companies$ = this.store.select(_store_companies_companies_reducer__WEBPACK_IMPORTED_MODULE_6__["selectCompanies"]);
    };
    CompaniesTablesComponent.prototype.delete = function (companie) {
        var res = confirm("are you sure want to delete");
        if (res) {
            this.companieService.delete({ _id: companie._id }).subscribe(function (res) {
                if (res) {
                    //this.chargeData()
                }
            });
        }
    };
    CompaniesTablesComponent.prototype.edit = function (companie) {
        this.router.navigate(['/dashboard/companies/edit'], { queryParams: { id: companie._id } });
    };
    CompaniesTablesComponent.prototype.show = function (companie) {
        this.router.navigate(['/dashboard/companies/show'], { queryParams: { id: companie._id } });
    };
    CompaniesTablesComponent.prototype.ngOnDestroy = function () {
    };
    CompaniesTablesComponent.ctorParameters = function () { return [
        { type: _services_companie_service__WEBPACK_IMPORTED_MODULE_2__["CompanieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    CompaniesTablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/companies/tables/tables.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tables.component.css */ "./src/app/views/modules/companies/tables/tables.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_companie_service__WEBPACK_IMPORTED_MODULE_2__["CompanieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], CompaniesTablesComponent);
    return CompaniesTablesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-companies-companie-module.js.map