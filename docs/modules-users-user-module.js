(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-users-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/baseView/buttons/buttons.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/baseView/buttons/buttons.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-template *ngIf=\"config.type=='text'\">\r\n    <button\r\n        type=\"button\"\r\n        [ngStyle]=\"config.styles\"\r\n        (click)=\"onBtnTextClick()\"\r\n        [class]=\"config.calss\"\r\n    >\r\n    <ng-container *ngIf=\"config.icon.exsist == true\">\r\n            <i [class]=\"config.icon.class\">\r\n\r\n            </i>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"config.icon.exsist != true\">\r\n        {{config.text}}\r\n    </ng-container>\r\n    \r\n    </button>\r\n</ng-template>\r\n\r\n<ng-template *ngIf=\"config.type=='image'\">\r\n    <img [src]=\"config.src\" [alt]=\"config.alt\"\r\n        [ngStyle]=\"config.styles\"\r\n        (click)=\"onBtnImgClick()\"\r\n        [class]=\"config.calss\"\r\n    >\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/forms/form/form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/forms/form/form.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <sppiner *ngIf=\"isLoad\"></sppiner> -->\r\n<div class=\"app-body\">\r\n  <main class=\"main d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div style=\"margin-top: 10px;\"  class=\"alert alert-success\" *ngIf='message'>{{message}}</div>\r\n        <div class=\"col-md-8 mx-auto\">\r\n          <div class=\"alert alert-danger\" *ngIf='invalidtLogin'>has an errors </div>\r\n          <div class=\"card mx-4\">\r\n            <div class=\"card-body p-4\">\r\n              <form [formGroup]=\"form\" (submit)=\"create()\">\r\n                <h1>User</h1>\r\n                <p class=\"text-muted\">Save Account</p>\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\r\n                  </div>\r\n                  <input \r\n                  [class.is-invalid]=\"(isValid('name') || errors?.name)\" \r\n                 [class.is-valid]=\"isInputValid('name')\" \r\n                  [(ngModel)]=\"user.name\" formControlName=\"name\" name=\"name\"  type=\"text\" class=\"form-control\" \r\n                  placeholder=\"Name\" autocomplete=\"username\" required>\r\n                </div>\r\n                <span style=\"color: red;\" *ngIf=\"isValid('name') || errors?.name \">\r\n                  <span *ngFor=\"let err of messageError('name')\">{{ err }}</span>\r\n                  <span *ngFor=\"let err of errors?.name\">{{ err }}</span>\r\n                </span>\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-users\"></i></span>\r\n                  </div>\r\n                  <input \r\n                  [class.is-invalid]=\"(isValid('login') || errors?.login)\" \r\n                 [class.is-valid]=\"isInputValid('login')\" \r\n                  [(ngModel)]=\"user.login\" formControlName=\"login\" name=\"login\"  type=\"text\" class=\"form-control\"\r\n                   placeholder=\"Login\" autocomplete=\"username\" required>\r\n                </div>\r\n                <span style=\"color: red;\" *ngIf=\"isValid('login') || errors?.login\">\r\n                  <span *ngFor=\"let err of messageError('login')\">{{ err }}</span>\r\n                  <span *ngFor=\"let err of errors?.login\">{{ err }}</span>\r\n                </span>\r\n\r\n                <div class=\"input-group mb-3\" *ngIf=\"!user._id\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                  </div>\r\n                  <input\r\n                  [class.is-invalid]=\"(isValid('password') || errors?.password)\" \r\n                   [class.is-valid]=\"isInputValid('password')\" \r\n                   [(ngModel)]=\"user.password\" formControlName=\"password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" required>\r\n                  <span style=\"color: red;\" *ngIf=\"isValid('password') || errors?.password\">\r\n                    <span *ngFor=\"let err of messageError('password')\">{{ err }}</span>\r\n                    <span *ngFor=\"let err of errors?.password\">{{ err }}</span>\r\n                  </span>\r\n                 </div>\r\n\r\n                 <div class=\"form-group\">\r\n                  <label for=\"companie\">Companie</label>\r\n                  <select class=\"form-control\" id=\"companie\" [(ngModel)]=\"user.company\"\r\n                  [class.is-invalid]=\"(isValid('company') || errors?.company)\" \r\n                   [class.is-valid]=\"isInputValid('company')\" \r\n                  formControlName=\"company\" name=\"company\"  class=\"form-control\" id=\"company\"\r\n                  >\r\n        \r\n                    <option *ngFor=\"let c of companies\" [selected]=\"c._id==user?.company?._id\" [value]=\"c._id\">{{c.name}}</option>\r\n                    \r\n                  </select>\r\n                  <div [class.invalid-feedback]=\"isValid('company') || errors?.company\"  *ngIf=\"isValid('company') || errors?.company \">\r\n                    <span *ngFor=\"let err of messageError('company')\">{{ err }}</span>\r\n                    <span *ngFor=\"let err of errors?.company\">{{ err }}</span>\r\n                  </div>\r\n                </div> \r\n                \r\n               \r\n                <button type=\"submit\"  class=\"btn btn-block btn-success\">Save Account</button>\r\n              </form>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/index/users.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/index/users.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <router-outlet></router-outlet> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/profile/profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/profile/profile.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"container content\">\r\n    <div class=\"row profile\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"profile-sidebar position-fixed\">\r\n          <!-- SIDEBAR USERPIC -->\r\n          <div class=\"profile-userpic\">\r\n            <img src=\"https://media.rockstargames.com/chinatownwars/global/downloads/avatars/zhou_256x256.jpg\" class=\"img-responsive\" alt=\"\">\r\n          </div>\r\n          <!-- END SIDEBAR USERPIC -->\r\n          <!-- SIDEBAR USER TITLE -->\r\n          <div class=\"profile-usertitle\">\r\n            <div class=\"profile-usertitle-name\">\r\n              Jason Davis\r\n            </div>\r\n            <div class=\"profile-usertitle-job\">\r\n              Developer\r\n            </div>\r\n          </div>\r\n          <!-- END SIDEBAR USER TITLE -->\r\n          <!-- SIDEBAR BUTTONS -->\r\n          <div class=\"profile-userbuttons\">\r\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Follow</button>\r\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Message</button>\r\n          </div>\r\n          <!-- END SIDEBAR BUTTONS -->\r\n          <!-- SIDEBAR MENU -->\r\n          <div class=\"profile-usermenu sidebar-sticky\">\r\n            <ul class=\"nav flex-column\">\r\n              <li class=\"active nav-item\">\r\n                <a href=\"#\" class=\"nav-link active\">\r\n                  <i class=\"fa fa-home\"></i>\r\n                  Overview </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"https://codepen.io/jasondavis/pen/jVRwaG?editors=1000\">\r\n                  <i class=\"fa fa-user\"></i>\r\n                  Account Settings </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" target=\"_blank\">\r\n                  <i class=\"fa fa-check\"></i>\r\n                  Tasks </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">\r\n                  <i class=\"fa fa-flag\"></i>\r\n                  Help </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <!-- END MENU -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"profile-content\">\r\n          Some user related content goes here...\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n          <h1>test</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/tables/tables.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/tables/tables.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"alert alert-danger\" *ngIf=\"errors$ |async as error\">{{error}}</div>\r\n <!-- <ng-container *ngIf=\"users$\">\r\n    <data-table [data]=\"users$|async\" [settings]=\"settings\" [loading]=\"true\" (event)=\"actionEvent($event)\">\r\n    </data-table>\r\n  </ng-container>   -->\r\n\r\n  <ng-container *ngIf=\"users$\">\r\n    <data-table [data]=\"users$\" [settings]=\"settings\" [loading]=\"true\" (event)=\"actionEvent($event)\">\r\n    </data-table>\r\n  </ng-container>\r\n  \r\n  \r\n");

/***/ }),

/***/ "./src/app/views/baseView/buttons/buttons.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/baseView/buttons/buttons.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2VWaWV3L2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/baseView/buttons/buttons.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/baseView/buttons/buttons.component.ts ***!
  \*************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        if (this.config.class == "") {
            switch (this.config.action) {
                case "edit": {
                    this.config.class = "btn btn-info";
                    break;
                }
                case "delete": {
                    this.config.class = "btn btn-danger";
                    break;
                }
                case "show": {
                    this.config.class = "btn btn-success";
                    break;
                }
            }
        }
        if (this.config.icon.class == "") {
            switch (this.config.icon.class) {
                case "edit": {
                    this.config.icon.class = "fa fa-edit";
                    break;
                }
                case "delete": {
                    this.config.icon.class = "fa fa-trash";
                    break;
                }
                case "show": {
                    this.config.icon.class = "fa fa-eye";
                    break;
                }
            }
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ButtonsComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ButtonsComponent.prototype, "event", void 0);
    ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "base-button",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/baseView/buttons/buttons.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./buttons.component.css */ "./src/app/views/baseView/buttons/buttons.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/users/forms/form/form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/modules/users/forms/form/form.component.ts ***!
  \******************************************************************/
/*! exports provided: FormUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUserComponent", function() { return FormUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_error_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/error.form.service */ "./src/app/services/error.form.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/views/modules/users/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_companies_companies_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../store/companies/companies.action */ "./src/app/store/companies/companies.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");









var FormUserComponent = /** @class */ (function () {
    function FormUserComponent(userService, error, route, auth, store) {
        this.userService = userService;
        this.error = error;
        this.route = route;
        this.auth = auth;
        this.store = store;
        this.invalidtLogin = false;
        this.user = {};
        this.isLoad = false;
        this.dispatch();
    }
    FormUserComponent.prototype.dispatch = function () {
        this.store.dispatch(new _store_companies_companies_action__WEBPACK_IMPORTED_MODULE_7__["Load"]());
    };
    FormUserComponent.prototype.loadData = function () {
        var _this = this;
        var id = this.route.snapshot.queryParams.id;
        this.subscribtion = this.store.subscribe(function (state) {
            _this.companies = state.companies.companies;
            if (id) {
                _this.user = state.users.users.filter(function (user) { return user._id == id; });
            }
        });
    };
    FormUserComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80),
            ]),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80),
            ]),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [])
        });
    };
    FormUserComponent.prototype.isValid = function (control) {
        return this.error.inValid(control, this.form);
    };
    FormUserComponent.prototype.messageError = function (control) {
        return this.error.messageError(control, this.form);
    };
    FormUserComponent.prototype.isInputValid = function (control) {
        return this.error.isInputvalid(control, this.form);
    };
    FormUserComponent.prototype.create = function () {
    };
    FormUserComponent.prototype.ngOnDestroy = function () {
        this.subscribtion.unsubscribe();
    };
    FormUserComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_error_form_service__WEBPACK_IMPORTED_MODULE_4__["ErorrFrormService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }
    ]; };
    FormUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-user',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/forms/form/form.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_error_form_service__WEBPACK_IMPORTED_MODULE_4__["ErorrFrormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]])
    ], FormUserComponent);
    return FormUserComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/users/index/users.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/modules/users/index/users.component.ts ***!
  \**************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/index/users.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/users/profile/profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/modules/users/profile/profile.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n.content {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n\r\n\r\n\r\nul.social-buttons {\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n\r\nul.social-buttons li a {\r\n  font-size: 20px;\r\n  line-height: 40px;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  transition: all 0.3s;\r\n  color: white;\r\n  border-radius: 100%;\r\n  outline: none;\r\n  background-color: #212529;\r\n}\r\n\r\n\r\n\r\n\r\nul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {\r\n  background-color: #fed136;\r\n}\r\n\r\n\r\n\r\n\r\n.content{\r\n   margin-top:60px;\r\n }\r\n\r\n\r\n\r\n\r\n/* Profile container */\r\n\r\n\r\n\r\n\r\n.profile {\r\n  margin: 20px 0;\r\n}\r\n\r\n\r\n\r\n\r\n/* Profile sidebar */\r\n\r\n\r\n\r\n\r\n.profile-sidebar {\r\n  padding: 20px 0 10px 0;\r\n  background: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-userpic img {\r\n  float: none;\r\n  display:block;\r\n    margin:auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50% !important;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usertitle-name {\r\n  color: #5a7391;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usertitle-job {\r\n  text-transform: uppercase;\r\n  color: #5b9bd1;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-userbuttons {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-userbuttons .btn {\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  padding: 6px 15px;\r\n  margin-right: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-userbuttons .btn:last-child {\r\n  margin-right: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usermenu {\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usermenu ul li {\r\n  border-bottom: 1px solid #f0f4f7;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usermenu ul li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usermenu ul li a {\r\n  color: #93a3b5;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usermenu ul li a i {\r\n  margin-right: 8px;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usermenu ul li a:hover {\r\n  background-color: #fafcfd;\r\n  color: #5b9bd1;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usermenu ul li.active {\r\n  border-bottom: none;\r\n}\r\n\r\n\r\n\r\n\r\n.profile-usermenu ul li.active a {\r\n  color: #5b9bd1;\r\n  background-color: #f6f9fb;\r\n  border-left: 2px solid #5b9bd1;\r\n  margin-left: -2px;\r\n}\r\n\r\n\r\n\r\n\r\n/* Profile Content */\r\n\r\n\r\n\r\n\r\n.profile-content {\r\n  padding: 20px;\r\n  background: #fff;\r\n  min-height: 460px;\r\n}\r\n\r\n\r\n\r\n\r\n.nav>li {\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW9kdWxlcy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7RUFDRSxjQUFjO0FBQ2hCOzs7OztBQUtBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFHWixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOzs7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7OztBQUNBO0dBQ0csZUFBZTtDQUNqQjs7Ozs7QUFHRCxzQkFBc0I7Ozs7O0FBQ3RCO0VBQ0UsY0FBYztBQUNoQjs7Ozs7QUFFQSxvQkFBb0I7Ozs7O0FBQ3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7Ozs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0lBQ1gsV0FBVztFQUNiLFVBQVU7RUFDVixXQUFXO0VBR1gsNkJBQTZCO0FBQy9COzs7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7Ozs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7Ozs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOzs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7Ozs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7Ozs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7Ozs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7Ozs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7Ozs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7Ozs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7Ozs7QUFFQSxvQkFBb0I7Ozs7O0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7Ozs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vZHVsZXMvdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG51bC5zb2NpYWwtYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxudWwuc29jaWFsLWJ1dHRvbnMgbGkgYSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG51bC5zb2NpYWwtYnV0dG9ucyBsaSBhOmFjdGl2ZSwgdWwuc29jaWFsLWJ1dHRvbnMgbGkgYTpmb2N1cywgdWwuc29jaWFsLWJ1dHRvbnMgbGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDEzNjtcclxufVxyXG4uY29udGVudHtcclxuICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gfVxyXG5cclxuXHJcbi8qIFByb2ZpbGUgY29udGFpbmVyICovXHJcbi5wcm9maWxlIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLyogUHJvZmlsZSBzaWRlYmFyICovXHJcbi5wcm9maWxlLXNpZGViYXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnBpYyBpbWcge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnRpdGxlLW5hbWUge1xyXG4gIGNvbG9yOiAjNWE3MzkxO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcnRpdGxlLWpvYiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzViOWJkMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VyYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJidXR0b25zIC5idG4ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJidXR0b25zIC5idG46bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuICAgIFxyXG4ucHJvZmlsZS11c2VybWVudSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmNGY3O1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VybWVudSB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VybWVudSB1bCBsaSBhIHtcclxuICBjb2xvcjogIzkzYTNiNTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkgYSBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZjZmQ7XHJcbiAgY29sb3I6ICM1YjliZDE7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJtZW51IHVsIGxpLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkuYWN0aXZlIGEge1xyXG4gIGNvbG9yOiAjNWI5YmQxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmI7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNWI5YmQxO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG59XHJcblxyXG4vKiBQcm9maWxlIENvbnRlbnQgKi9cclxuLnByb2ZpbGUtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDQ2MHB4O1xyXG59XHJcblxyXG4ubmF2PmxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/views/modules/users/profile/profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/modules/users/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/profile/profile.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.css */ "./src/app/views/modules/users/profile/profile.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/users/tables/tables.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/modules/users/tables/tables.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vZHVsZXMvdXNlcnMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/modules/users/tables/tables.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/modules/users/tables/tables.component.ts ***!
  \****************************************************************/
/*! exports provided: UsersTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTablesComponent", function() { return UsersTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_users_users_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/users/users.action */ "./src/app/store/users/users.action.ts");
/* harmony import */ var _store_users_users_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/users/users.reducer */ "./src/app/store/users/users.reducer.ts");






var UsersTablesComponent = /** @class */ (function () {
    function UsersTablesComponent(router, store) {
        this.router = router;
        this.store = store;
        this.users = [];
        this.settings = {
            module: "users",
            columns: []
        };
        this.settings.columns = [{ title: "Name", field: "name" }, { title: "Login", field: "login" }];
    }
    UsersTablesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_users_users_action__WEBPACK_IMPORTED_MODULE_4__["Load"]());
        this.users$ = this.store.select(_store_users_users_reducer__WEBPACK_IMPORTED_MODULE_5__["selectUsers"]);
    };
    UsersTablesComponent.prototype.actionEvent = function (obj) {
        console.log(obj);
        switch (obj.action) {
            case "edit":
                this.edit(obj.value);
                break;
            case "delete":
                this.delete(obj.value);
                break;
            case "show":
                this.show(obj.value);
                break;
        }
    };
    UsersTablesComponent.prototype.delete = function (user) {
        var res = confirm("are you sure want to delete");
        console.log(user);
        if (res) {
            //this.store.dispatch(new userAction.Delete(user._id))
        }
    };
    UsersTablesComponent.prototype.edit = function (user) {
        this.router.navigate(['/dashboard/users/edit'], { queryParams: { id: user._id } });
    };
    UsersTablesComponent.prototype.show = function (user) {
        this.router.navigate(['/dashboard/users/show'], { queryParams: { id: user._id } });
    };
    UsersTablesComponent.prototype.ngOnDestroy = function () {
        //this.userSub.unsubscribe()
    };
    UsersTablesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    UsersTablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modules/users/tables/tables.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tables.component.css */ "./src/app/views/modules/users/tables/tables.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], UsersTablesComponent);
    return UsersTablesComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/users/user.module.ts":
/*!****************************************************!*\
  !*** ./src/app/views/modules/users/user.module.ts ***!
  \****************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/views/modules/users/tables/tables.component.ts");
/* harmony import */ var _forms_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/form/form.component */ "./src/app/views/modules/users/forms/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/views/modules/users/profile/profile.component.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.routing */ "./src/app/views/modules/users/user.routing.ts");
/* harmony import */ var _baseView_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../baseView/buttons/buttons.component */ "./src/app/views/baseView/buttons/buttons.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.module */ "./src/app/views/modules/shared.module.ts");
/* harmony import */ var _index_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/users.component */ "./src/app/views/modules/users/index/users.component.ts");











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _tables_tables_component__WEBPACK_IMPORTED_MODULE_3__["UsersTablesComponent"],
                _forms_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormUserComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _baseView_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsComponent"],
                _index_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _user_routing__WEBPACK_IMPORTED_MODULE_7__["usersRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ],
            exports: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/views/modules/users/user.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/modules/users/user.routing.ts ***!
  \*****************************************************/
/*! exports provided: usersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersRoutingModule", function() { return usersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/form/form.component */ "./src/app/views/modules/users/forms/form/form.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/views/modules/users/profile/profile.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/views/modules/users/tables/tables.component.ts");






var routes = [
    { path: '', component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_5__["UsersTablesComponent"] },
    { path: 'edit', component: _forms_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormUserComponent"] },
    { path: 'add', component: _forms_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormUserComponent"] },
    { path: 'show', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
];
var usersRoutingModule = /** @class */ (function () {
    function usersRoutingModule() {
    }
    usersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], usersRoutingModule);
    return usersRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-users-user-module.js.map