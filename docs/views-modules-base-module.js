(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-modules-base-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\r\n  [navbarBrandRouterLink]=\"['/dashboard']\"\r\n  [fixed]=\"true\"\r\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.svg', width: 89, height: 25, alt: ' Logo'}\"\r\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'Logo'}\"\r\n  [sidebarToggler]=\"'lg'\"\r\n  [asideMenuToggler]=\"'lg'\">\r\n  <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n    </li>\r\n   \r\n    \r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n  \r\n   <li>\r\n    <span class=\"name-user\" >{{user?.login}}</span>\r\n   </li> \r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      \r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"\"/>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\"  aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n     \r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\r\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\r\n    <app-sidebar-minimizer></app-sidebar-minimizer>\r\n  </app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n   <div style=\"margin-bottom: 20px;\"></div>\r\n    <div class=\"container-fluid\" style=\"word-wrap: break-word;\">\r\n     <router-outlet></router-outlet> \r\n    </div><!-- /.container-fluid -->\r\n  </main>\r\n  \r\n</div>\r\n<app-footer>\r\n  <span><a href=\"https://devlik.com\">DevLik</a> &copy; 2020.</span>\r\n  <span class=\"ml-auto\">Powered by <a href=\"https://devlik.com\">DevLik by abdellah khaddou</a></span>\r\n</app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/_nav.ts":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItemsAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItemsAdmin", function() { return navItemsAdmin; });
var navItemsAdmin = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
    },
    {
        name: 'Users',
        url: '/dashboard/users',
        icon: 'icon-user',
        children: [
            {
                name: 'All',
                url: '/dashboard/users',
                icon: 'icon-people'
            },
            {
                name: 'Add User',
                url: '/dashboard/users/add',
                icon: 'icon-user-follow'
            },
        ]
    },
    {
        name: 'Companies',
        url: '/dashboard/companies',
        icon: 'icon-rocket',
        children: [
            {
                name: 'All',
                url: '/dashboard/companies',
                icon: 'icon-grid'
            },
            {
                name: 'Add Companie',
                url: '/dashboard/companies/add',
                icon: 'icon-plus'
            },
        ]
    },
    {
        name: 'orders',
        url: '/dashboard/orders',
        icon: 'icon-rocket',
        children: [
            {
                name: 'All',
                url: '/dashboard/orders',
                icon: 'icon-grid'
            },
            {
                name: 'Add Order',
                url: '/dashboard/orders/add',
                icon: 'icon-plus'
            },
        ]
    },
    {
        name: 'Products',
        url: '/dashboard/products',
        icon: 'icon-rocket',
        children: [
            {
                name: 'All',
                url: '/dashboard/products',
                icon: 'icon-grid'
            },
            {
                name: 'Add Product',
                url: '/dashboard/products/add',
                icon: 'icon-plus'
            },
        ]
    },
    {
        name: 'Categories',
        url: '/dashboard/categories',
        icon: 'icon-rocket',
        children: [
            {
                name: 'All',
                url: '/dashboard/categories',
                icon: 'icon-grid'
            },
            {
                name: 'Add Product',
                url: '/dashboard/categories/add',
                icon: 'icon-plus'
            },
        ]
    },
    {
        name: 'Enumeration',
        url: '/dashboard/enumerations',
        icon: 'icon-wrench',
        children: [
            {
                name: 'All',
                url: '/dashboard/enumerations',
                icon: 'icon-book-open'
            },
            {
                name: 'Add Enumeration',
                url: '/dashboard/enumerations/add',
                icon: 'icon-penci'
            },
        ]
    },
    {
        name: 'Enumeration Value',
        url: '/dashboard/enumerations_value',
        icon: 'icon-wrench',
        children: [
            {
                name: 'All',
                url: '/dashboard/enumerations_value',
                icon: 'icon-book-open'
            },
            {
                name: 'Add Enumeration value',
                url: '/dashboard/enumerations_value/add',
                icon: 'icon-penci'
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/containers/default-layout/default-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user */ "./src/app/services/user.ts");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_nav */ "./src/app/_nav.ts");





var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent(currentUser, auth) {
        this.currentUser = currentUser;
        this.auth = auth;
        this.sidebarMinimized = false;
        this.thisUser();
    }
    DefaultLayoutComponent.prototype.thisUser = function () {
        var _this = this;
        this.user = this.currentUser.getuser();
        if (this.user == null) {
            this.auth.cureentUser().subscribe(function (user) {
                _this.currentUser.setuser(user);
                _this.user = _this.currentUser.getuser();
                _this.choixNav();
            });
        }
        else {
            this.choixNav();
        }
    };
    DefaultLayoutComponent.prototype.choixNav = function () {
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_4__["navItemsAdmin"];
    };
    DefaultLayoutComponent.prototype.logout = function () {
        this.auth.logout();
    };
    DefaultLayoutComponent.prototype.toggleMinimize = function (e) {
        this.sidebarMinimized = e;
    };
    DefaultLayoutComponent.ctorParameters = function () { return [
        { type: _services_user__WEBPACK_IMPORTED_MODULE_3__["User"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./default-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user__WEBPACK_IMPORTED_MODULE_3__["User"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user */ "./src/app/services/user.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(currentUser) {
        this.currentUser = currentUser;
        this.user = this.currentUser.getuser();
    }
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_user__WEBPACK_IMPORTED_MODULE_2__["User"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user__WEBPACK_IMPORTED_MODULE_2__["User"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/modules/base-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/views/modules/base-routing.module.ts ***!
  \******************************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/default-layout/default-layout.component */ "./src/app/containers/default-layout/default-layout.component.ts");




var routes = [
    {
        path: '',
        component: _containers_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        // canActivate:[AuthGardService],
        children: [
            {
                path: 'users',
                loadChildren: function () { return Promise.all(/*! import() | modules-users-user-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-users-user-module")]).then(__webpack_require__.bind(null, /*! ../modules/users/user.module */ "./src/app/views/modules/users/user.module.ts")).then(function (m) { return m.UserModule; }); },
            },
            {
                path: 'companies',
                loadChildren: function () { return Promise.all(/*! import() | modules-companies-companie-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-companies-companie-module")]).then(__webpack_require__.bind(null, /*! ../modules/companies/companie.module */ "./src/app/views/modules/companies/companie.module.ts")).then(function (m) { return m.CompanieModule; }); },
            },
            {
                path: 'enumerations',
                loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../modules/enum/enum.module */ "./src/app/views/modules/enum/enum.module.ts")).then(function (m) { return m.EnumModule; }); },
            },
            {
                path: 'enumerations_value',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-enum_value-enum-value-module */ "modules-enum_value-enum-value-module").then(__webpack_require__.bind(null, /*! ../modules/enum_value/enum-value.module */ "./src/app/views/modules/enum_value/enum-value.module.ts")).then(function (m) { return m.EnumValueModule; }); },
            },
            {
                path: 'products',
                loadChildren: function () { return Promise.all(/*! import() | modules-products-module-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-products-module-module")]).then(__webpack_require__.bind(null, /*! ../modules/products/module.module */ "./src/app/views/modules/products/module.module.ts")).then(function (m) { return m.ProductModule; }); },
            },
            {
                path: 'orders',
                loadChildren: function () { return Promise.all(/*! import() | modules-orders-module-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-orders-module-module")]).then(__webpack_require__.bind(null, /*! ../modules/orders/module.module */ "./src/app/views/modules/orders/module.module.ts")).then(function (m) { return m.OrderModule; }); },
            },
            {
                path: 'categories',
                loadChildren: function () { return Promise.all(/*! import() | modules-categories-module-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-categories-module-module")]).then(__webpack_require__.bind(null, /*! ../modules/categories/module.module */ "./src/app/views/modules/categories/module.module.ts")).then(function (m) { return m.CatagoriesModule; }); },
            },
        ],
    },
];
var BaseRoutingModule = /** @class */ (function () {
    function BaseRoutingModule() {
    }
    BaseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BaseRoutingModule);
    return BaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/modules/base.module.ts":
/*!**********************************************!*\
  !*** ./src/app/views/modules/base.module.ts ***!
  \**********************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-routing.module */ "./src/app/views/modules/base-routing.module.ts");
/* harmony import */ var _containers_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/default-layout/default-layout.component */ "./src/app/containers/default-layout/default-layout.component.ts");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");

// Angular








// Components Routing
var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _base_routing_module__WEBPACK_IMPORTED_MODULE_5__["BaseRoutingModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["AppAsideModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["AppFooterModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["AppHeaderModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["AppSidebarModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _containers_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
            ],
            exports: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-modules-base-module.js.map