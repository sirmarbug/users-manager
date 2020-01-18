(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth/auth.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth/auth.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row mt-5\">\n      <div class=\"col-md-4 offset-md-4\">\n        <h1 class=\"text-center\">USERS MANAGER</h1>\n        <div class=\"card shadow-sm mt-5\" style=\"width: 100%;\">\n          <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n            <div class=\"card-header\">\n              <h5 class=\"text-center\">Logowanie</h5>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n                Logowanie nie powiodło się\n              </div>\n              <div class=\"alert alert-info\" role=\"alert\">\n                <p><strong>Dane do logowania</strong></p>\n                <p>Użytkownik: user@domain.com:user1234</p>\n                <p>Admin: admin@domain.com:admin123</p>\n              </div>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" [ngClass]=\"{'is-invalid': form.submitted && mailRef.invalid}\"\n                    id=\"basic-addon1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n                  [ngClass]=\"{'is-invalid': form.submitted && mailRef.invalid}\" placeholder=\"Adres E-mail\"\n                  aria-label=\"Adres E-mail\" aria-describedby=\"basic-addon1\" name=\"mail\" [(ngModel)]=\"mail\"\n                  #mailRef=\"ngModel\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && mailRef.invalid && mailRef?.errors.required\">\n                  Adres E-mail jest wymagany\n                </div>\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && mailRef.invalid && mailRef?.errors.pattern\">\n                  Niepoprawny adres E-mail\n                </div>\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" [ngClass]=\"{'is-invalid': form.submitted && passwordRef.invalid}\"\n                    id=\"basic-addon1\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                </div>\n                <input type=\"password\" class=\"form-control\" required minlength=\"8\"\n                  [ngClass]=\"{'is-invalid': form.submitted && passwordRef.invalid}\" placeholder=\"Hasło\"\n                  aria-label=\"Hasło\" aria-describedby=\"basic-addon2\" name=\"password\" [(ngModel)]=\"password\"\n                  #passwordRef=\"ngModel\">\n                <div class=\"invalid-feedback\"\n                  *ngIf=\"form.submitted && passwordRef.invalid && passwordRef?.errors.required\">\n                  Hasło jest wymagane\n                </div>\n                <div class=\"invalid-feedback\"\n                  *ngIf=\"form.submitted && passwordRef.invalid && passwordRef?.errors.minlength\">\n                  Hasło musi posiadać minimum 8 znaków\n                </div>\n              </div>\n            </div>\n            <div class=\"card-footer text-muted\">\n              <button type=\"submit\" class=\"btn btn-outline-dark\">Zaloguj</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/views/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/auth/login/login.component.ts");





const routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            }
        ]
    }];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/views/auth/auth.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/auth/auth.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth/auth.component.html"),
        styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/views/auth/auth.component.scss")]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/views/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/views/auth/auth-routing.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/views/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/auth/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/views/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap\");\n.background {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: url(https://picsum.photos/1920/1080);\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: 0;\n  -webkit-filter: blur(0.3rem);\n          filter: blur(0.3rem);\n}\n.body {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  color: #fff;\n}\nh1 {\n  font-family: Poppins;\n  font-weight: 700;\n}\nbutton {\n  width: 100%;\n}\ninput:focus, button:focus {\n  outline: none;\n}\n.input-group-text.is-invalid {\n  border-color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaXJtYXJidWcvUHJhY2EvemxlY2VuaWEvdXNlcnMtbWFuYWdlci9zcmMvYXBwL3ZpZXdzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkZBQUE7QUFFUjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDQUo7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBSjtBREdBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0FDQUo7QURHQTtFQUNJLGFBQUE7QUNBSjtBREdBO0VBQ0kscUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE5MjAvMTA4MCk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgei1pbmRleDogMDtcbiAgICBmaWx0ZXI6IGJsdXIoLjNyZW0pO1xufVxuXG4uYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5oMSB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXQ6Zm9jdXMsIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQuaXMtaW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE5MjAvMTA4MCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMDtcbiAgZmlsdGVyOiBibHVyKDAuM3JlbSk7XG59XG5cbi5ib2R5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXQ6Zm9jdXMsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0LmlzLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");





let LoginComponent = class LoginComponent {
    constructor(router, logger, userService) {
        this.router = router;
        this.logger = logger;
        this.userService = userService;
        this.mail = '';
        this.password = '';
        this.error = false;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (form.invalid) {
            return;
        }
        this.userService.login(this.mail, this.password)
            .subscribe((user) => {
            if (!user) {
                this.error = true;
                return;
            }
            this.router.navigateByUrl('dashboard/home');
        }, err => {
            this.logger.error(err);
            this.error = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/auth/login/login.component.scss")]
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=views-auth-auth-module-es2015.js.map