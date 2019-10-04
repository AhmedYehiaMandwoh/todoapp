(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-todo/add-todo.component */ "./src/app/components/add-todo/add-todo.component.ts");







var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'addTodo', component: _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_6__["AddTodoComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\n      <app-navbar></app-navbar>\n\n  </div>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-todo/add-todo.component */ "./src/app/components/add-todo/add-todo.component.ts");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/todos.service */ "./src/app/services/todos.service.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_16__["AddTodoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__["NgFlashMessagesModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_todos_service__WEBPACK_IMPORTED_MODULE_17__["TodosService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-header{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n    position: relative\r\n}\r\nlabel{\r\n    margin: 15px;\r\n    opacity: 0.6;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n    color: rgb(156, 153, 153);\r\n    opacity: 0.7;\r\n}\r\n.form-control:focus {\r\n    color: #2e2c2c;\r\n    background-color: transparent;\r\n    border-color: none; \r\n    outline: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #d34949;\r\n    \r\n}\r\n.form-control{\r\n    background-color: rgba(42, 18, 17, 0);\r\n    color: #555353;\r\n    opacity: 0.8;\r\n    border: none;\r\n    border-bottom: 1px solid #e2c0c0;\r\n    border-radius: 0;\r\n    font-family: 'Quicksand', sans-serif;\r\n\r\n    \r\n}\r\n.btn-dark {\r\n    color: #ff8282;\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 34px;\r\n    border-color: #ff8282;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;  \r\n    text-transform: uppercase;\r\n}\r\n.btn-dark:hover{\r\n    background-color: #ff8282;\r\n    color: rgb(240, 235, 235)\r\n\r\n}\r\n.btn-dark:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQzs7QUFFcEM7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG9DQUFvQzs7O0FBR3hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUlyQixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7O0FBRUo7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC10b2RvL2FkZC10b2RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1MywgMTUzKTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMmUyYzJjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzNDk0OTtcclxuICAgIFxyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxOCwgMTcsIDApO1xyXG4gICAgY29sb3I6ICM1NTUzNTM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyYzBjMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5idG4tZGFyayB7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCAzNHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYnRuLWRhcms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDIzNSwgMjM1KVxyXG5cclxufVxyXG4uYnRuLWRhcms6Zm9jdXNcclxuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjNjc2MzYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE5OSwgMTk2LCAxOTYpO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"todos\">\n  <div class=\"container\">\n    <h2 class=\"page-header mt-5 mb-2 text-center\">Add Todo</h2>\n    <div class=\"row\">\n      <div class=\"col-6 offset-3\">\n        <ng-flash-message></ng-flash-message>\n        <form (submit)=\"onAddTodo()\">\n          <div class=\"form-group\">\n            <label for=\"title\">Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\"\n            placeholder=\"Name\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Name'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Completed\">Completed</label>\n            <input type=\"checkbox\" name=\"done\" [(ngModel)]=\"done\">\n          </div>\n          <button class=\"btn btn-dark \">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_todos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/todos.service */ "./src/app/services/todos.service.ts");






var AddTodoComponent = /** @class */ (function () {
    function AddTodoComponent(router, FlashMessage, authService, TodosSer) {
        this.router = router;
        this.FlashMessage = FlashMessage;
        this.authService = authService;
        this.TodosSer = TodosSer;
    }
    AddTodoComponent.prototype.ngOnInit = function () {
        var user = this.authService.getCurrentUser();
        this.owner = user.id;
        this.done = false;
    };
    AddTodoComponent.prototype.onAddTodo = function () {
        var _this = this;
        if (!this.name) {
            this.FlashMessage.showFlashMessage({ messages: ['Todo Name Is Required'], dismissible: true, timeout: 2000, type: 'danger' });
        }
        else {
            var todo = {
                name: this.name,
                owner: this.owner,
                done: this.done
            };
            this.TodosSer.addTodo(todo).subscribe(function (data) {
                console.log(data);
                _this.FlashMessage.showFlashMessage({ messages: ['Added Successfully '], dismissible: true, timeout: 2000, type: 'true' });
                _this.router.navigate(['/']);
            });
        }
    };
    AddTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-todo',
            template: __webpack_require__(/*! ./add-todo.component.html */ "./src/app/components/add-todo/add-todo.component.html"),
            styles: [__webpack_require__(/*! ./add-todo.component.css */ "./src/app/components/add-todo/add-todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_todos_service__WEBPACK_IMPORTED_MODULE_5__["TodosService"]])
    ], AddTodoComponent);
    return AddTodoComponent;
}());



/***/ }),

/***/ "./src/app/components/common/App.util.ts":
/*!***********************************************!*\
  !*** ./src/app/components/common/App.util.ts ***!
  \***********************************************/
/*! exports provided: AUTH_TOKEN, USER_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_TOKEN", function() { return AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INFO", function() { return USER_INFO; });
var AUTH_TOKEN = 'id_token';
var USER_INFO = 'user';


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Footer */\r\n#footer{\r\n    background-color: rgb(57, 34, 34);\r\n    color: #a59c9c;\r\n    margin-top: 50px;\r\n}\r\n.footer{\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-top: 10px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    opacity: 0.8;\r\n    text-align: center\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1o7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZvb3RlciAqL1xyXG4jZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAzNCwgMzQpO1xyXG4gICAgY29sb3I6ICNhNTljOWM7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"footer\">&copy;Copyright By Ahmed Yehia In 2019 All Right Reserved</p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#todolist-main{\r\n    margin-top: 80px;\r\n}\r\n#todolist-main .message .alert-danger{\r\n    padding: 20px;\r\n    font-size: 18px;\r\n}\r\n.page-header{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #3fa868;\r\n    position: relative\r\n    \r\n}\r\n.btn-dark {\r\n    color: #3fa868;\r\n    background-color: transparent;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    padding: 5px 40px;\r\n    border-color: #3fa868;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;  \r\n    text-transform: uppercase;\r\n}\r\n.btn-dark:hover{\r\n    background-color: #3fa868;\r\n    color: rgb(240, 235, 235)\r\n\r\n}\r\n.btn-dark:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkOztBQUVKO0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUlyQixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7O0FBRUo7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiN0b2RvbGlzdC1tYWlue1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4jdG9kb2xpc3QtbWFpbiAubWVzc2FnZSAuYWxlcnQtZGFuZ2Vye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ucGFnZS1oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjM2ZhODY4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICBcclxufVxyXG5cclxuLmJ0bi1kYXJrIHtcclxuICAgIGNvbG9yOiAjM2ZhODY4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMzZmE4Njg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyAgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5idG4tZGFyazpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZmE4Njg7XHJcbiAgICBjb2xvcjogcmdiKDI0MCwgMjM1LCAyMzUpXHJcblxyXG59XHJcbi5idG4tZGFyazpmb2N1c1xyXG4ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5zaG93Pi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICM2NzYzNjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTk5LCAxOTYsIDE5Nik7XHJcbn0gIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"todolist-main\" *ngIf=\"!this.currentUser\">\n  <div class=\"container wow BounceInDown\">\n    <div class=\"row\">\n      <div class=\"col\">\n          <h2 class=\"page-header text-center\">Todo List</h2>\n        \n      </div>\n \n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-3\">\n            <div class=\"message text-center\">\n                <p class=\"alert alert-danger\">You are not authorized to view this content !</p>\n                <button class=\"btn btn-dark\" routerLink=\"/login\">Login</button>\n                <button class=\"btn btn-dark ml-2\" routerLink=\"/register\">Register</button>\n\n            </div>\n        </div>\n    </div>\n  </div>\n</section>\n<section id=\"todolist\" *ngIf=\"this.currentUser\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"page text-center\">\n          <div class=\"pull-right mb-2\">\n            <a routerLink=\"/addTodo\" class=\"btn btn-dark\">Add Todo</a>\n          </div>\n        </div>\n        \n        <table class=\"table table-striped \">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Todo Name</th>\n              <th>Compeleted</th>\n              <th>Actions</th>\n        \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let todo of todos; index as i\">  \n              <td>{{i + 1}}</td>\n              <td>{{todo.name}}</td>\n              <td>{{todo.done}}</td>\n              <td>\n                <button (click)=\"deleteTask(todo._id)\" class=\"btn btn-dark mr-2\">Delete</button>\n\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_todos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/todos.service */ "./src/app/services/todos.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, FlashMessage, router, TodoSer) {
        this.authService = authService;
        this.FlashMessage = FlashMessage;
        this.router = router;
        this.TodoSer = TodoSer;
        this.currentUser = this.authService.getCurrentUser();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllTodos();
    };
    HomeComponent.prototype.getAllTodos = function () {
        var _this = this;
        var currentUser = this.authService.getCurrentUser();
        if (currentUser) {
            var query = { owner: currentUser.id };
            this.TodoSer.getTodos(query).subscribe(function (data) {
                _this.todos = data;
            });
        }
        else {
            this.FlashMessage.showFlashMessage({ messages: ['Deleted Successfully'], dismissible: true, timeout: 2000, type: 'success' });
        }
    };
    HomeComponent.prototype.deleteTask = function (taskId) {
        var _this = this;
        this.TodoSer.deleteTodo(taskId).subscribe(function (data) {
            if (data.success) {
                _this.FlashMessage.showFlashMessage({ messages: ['Deleted Successfully'], dismissible: true, timeout: 2000, type: 'success' });
                window.location.reload();
            }
            else {
                console.log('error');
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_todos_service__WEBPACK_IMPORTED_MODULE_5__["TodosService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-header{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #3fa868;\r\n    position: relative\r\n}\r\nlabel{\r\n    margin: 15px;\r\n    opacity: 0.6;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n    color: rgb(156, 153, 153);\r\n    opacity: 0.7;\r\n}\r\n.form-control:focus {\r\n    color: #2e2c2c;\r\n    background-color: transparent;\r\n    border-color: none; \r\n    outline: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #3fa868;\r\n    \r\n}\r\n.form-control{\r\n    background-color: rgba(42, 18, 17, 0);\r\n    color: #555353;\r\n    opacity: 0.8;\r\n    border: none;\r\n    border-bottom: 1px solid #e2c0c0;\r\n    border-radius: 0;\r\n    font-family: 'Quicksand', sans-serif;\r\n\r\n    \r\n}\r\n.btn-dark {\r\n    color: #3fa868;\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 34px;\r\n    border-color: #3fa868;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;  \r\n    text-transform: uppercase;\r\n}\r\n.btn-dark:hover{\r\n    background-color: #3fa868;\r\n    color: rgb(240, 235, 235)\r\n\r\n}\r\n.btn-dark:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQzs7QUFFcEM7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG9DQUFvQzs7O0FBR3hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUlyQixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7O0FBRUo7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzNmYTg2ODtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1MywgMTUzKTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMmUyYzJjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmYTg2ODtcclxuICAgIFxyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxOCwgMTcsIDApO1xyXG4gICAgY29sb3I6ICM1NTUzNTM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyYzBjMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5idG4tZGFyayB7XHJcbiAgICBjb2xvcjogIzNmYTg2ODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCAzNHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ZhODY4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYnRuLWRhcms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZhODY4O1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDIzNSwgMjM1KVxyXG5cclxufVxyXG4uYnRuLWRhcms6Zm9jdXNcclxuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjNjc2MzYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE5OSwgMTk2LCAxOTYpO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login -->\n<section class=\"login\">\n  <div class=\"container\">\n    <h2 class=\"page-header mt-5 mb-2 text-center\">Login</h2>\n    <div class=\"row\">\n      <div class=\"col-6 offset-3\">\n        <ng-flash-message></ng-flash-message>\n        <form (submit)=\"onLoginSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Username'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"\n            placeholder=\"Password\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Password'\">\n          </div>\n          <button class=\"btn btn-dark \">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, FlashMessage, router) {
        this.authService = authService;
        this.FlashMessage = FlashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.FlashMessage.showFlashMessage({ messages: ['Login Successfully'], dismissible: true, timeout: 2000, type: 'success' });
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 1000);
            }
            else {
                _this.FlashMessage.showFlashMessage({ messages: ['Failed To Login'], dismissible: true, timeout: 2000, type: 'danger' });
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 1000);
                _this.username = '';
                _this.password = '';
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    font-size: 16px;\r\n    font-weight: 400 !important;\r\n    background-color: rgb(255, 255, 255) !important;\r\n}\r\n.navbar-light .navbar-brand {\r\n    color: rgb(8, 8, 8);\r\n}\r\n.navbar-light .navbar-nav .show>.nav-link, \r\n.navbar-light .navbar-nav .active>.nav-link, \r\n.navbar-light .navbar-nav .nav-link.show, \r\n.navbar-light .navbar-nav .nav-link.active {\r\n    color: #5ec485;\r\n\r\n}\r\n.navbar-light .navbar-nav .nav-link {\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBR0E7Ozs7SUFJSSxjQUFjOztBQUVsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xyXG59XHJcblxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAuc2hvdz4ubmF2LWxpbmssIFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5hY3RpdmU+Lm5hdi1saW5rLCBcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuc2hvdywgXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzVlYzQ4NTtcclxuXHJcbn0gIFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light wow fadeIn\">\n  <a class=\"navbar-brand\" routerLink=\"/\">DAMENDOR</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\"\n    aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\n      </li>\n\n\n    </ul>\n    <ul class=\"navbar-nav navbar-right \">\n\n\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, FlashMessage, router) {
        this.authService = authService;
        this.FlashMessage = FlashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-header{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #3fa868;\r\n    position: relative\r\n}\r\nlabel{\r\n    margin: 15px;\r\n    opacity: 0.6;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n    color: rgb(156, 153, 153);\r\n    opacity: 0.7;\r\n}\r\n.form-control:focus {\r\n    color: #2e2c2c;\r\n    background-color: transparent;\r\n    border-color: none; \r\n    outline: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #3fa868;\r\n    \r\n}\r\n.form-control{\r\n    background-color: rgba(42, 18, 17, 0);\r\n    color: #555353;\r\n    opacity: 0.8;\r\n    border: none;\r\n    border-bottom: 1px solid #e2c0c0;\r\n    border-radius: 0;\r\n    font-family: 'Quicksand', sans-serif;\r\n\r\n    \r\n}\r\n.btn-dark {\r\n    color: #3fa868;\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 34px;\r\n    border-color: #3fa868;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;  \r\n    text-transform: uppercase;\r\n}\r\n.btn-dark:hover{\r\n    background-color: #3fa868;\r\n    color: rgb(240, 235, 235)\r\n\r\n}\r\n.btn-dark:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQzs7QUFFcEM7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG9DQUFvQzs7O0FBR3hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUlyQixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7O0FBRUo7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzNmYTg2ODtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1MywgMTUzKTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMmUyYzJjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmYTg2ODtcclxuICAgIFxyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxOCwgMTcsIDApO1xyXG4gICAgY29sb3I6ICM1NTUzNTM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyYzBjMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5idG4tZGFyayB7XHJcbiAgICBjb2xvcjogIzNmYTg2ODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCAzNHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ZhODY4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYnRuLWRhcms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZhODY4O1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDIzNSwgMjM1KVxyXG5cclxufVxyXG4uYnRuLWRhcms6Zm9jdXNcclxuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjNjc2MzYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE5OSwgMTk2LCAxOTYpO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Register -->\n<section class=\"register\">\n  <div class=\"container\">\n    <h2 class=\"page-header mt-5 mb-2 text-center\">Register</h2>\n    <div class=\"row\">\n      <div class=\"col-6 offset-3\">\n        <ng-flash-message></ng-flash-message>\n        <form (submit)=\"onRegister()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\"\n            placeholder=\"Full Name\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Full Name'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\"\n            placeholder=\"Username\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Username'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\"\n            placeholder=\"Email\" \n            onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Email'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"\n            placeholder=\"Password\" \n            onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Password'\">\n          </div>\n          <button class=\"btn btn-dark \">Sign Up</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, FlashMessage, authService, router) {
        this.validateService = validateService;
        this.FlashMessage = FlashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.FlashMessage.showFlashMessage({ messages: ['Please Fill All Fields'], dismissible: true, timeout: 2000, type: 'danger' });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.FlashMessage.showFlashMessage({ messages: ['Please Use A Valid Email'], dismissible: true, timeout: 2000, type: 'danger' });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.FlashMessage.showFlashMessage({ messages: ['Registered Successfully'], dismissible: true, timeout: 2000, type: 'success' });
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 1000);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _components_common_App_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/App.util */ "./src/app/components/common/App.util.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem(_components_common_App_util__WEBPACK_IMPORTED_MODULE_4__["AUTH_TOKEN"], token);
        localStorage.setItem(_components_common_App_util__WEBPACK_IMPORTED_MODULE_4__["USER_INFO"], JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem(_components_common_App_util__WEBPACK_IMPORTED_MODULE_4__["AUTH_TOKEN"]);
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.id_token == undefined) {
            return true;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            return helper.isTokenExpired(localStorage.id_token);
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/todos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/todos.service.ts ***!
  \*******************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_common_App_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/App.util */ "./src/app/components/common/App.util.ts");




var TodosService = /** @class */ (function () {
    function TodosService(http) {
        this.http = http;
    }
    // Add New Todo
    TodosService.prototype.addTodo = function (todo) {
        var token = localStorage.getItem(_components_common_App_util__WEBPACK_IMPORTED_MODULE_3__["AUTH_TOKEN"]);
        console.log(token);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', token);
        return this.http.post('todos/add', todo, { headers: headers });
    };
    // Get All Todos
    TodosService.prototype.getTodos = function (query) {
        var token = localStorage.getItem(_components_common_App_util__WEBPACK_IMPORTED_MODULE_3__["AUTH_TOKEN"]);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', token);
        return this.http.post('todos/list', query, { headers: headers });
    };
    TodosService.prototype.deleteTodo = function (taskId) {
        var token = localStorage.getItem(_components_common_App_util__WEBPACK_IMPORTED_MODULE_3__["AUTH_TOKEN"]);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', token);
        return this.http.delete("todos/remove/" + taskId, { headers: headers });
    };
    TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // Regular Expression
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! f:\meanauthapp\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map