(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row main\">\n  <div class=\"col-md-12\">\n    <nav class=\"navbar fixed-top header-shadow navbar-expand-lg navbar-light bg-light mb-3\">\n      <a class=\"navbar-brand\" routerLink=\"/dashboard/home\">USERS MANAGER</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [ngClass]=\"{'active': isRoute('/dashboard/home')}\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/home\">Strona główna<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{'active': isRoute('/dashboard/users')}\" *ngIf=\"isAdmin()\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/users\">Użytkownicy<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"goToUserPreview()\">Zalogowany jako: {{ name }}<span class=\"sr-only\">(current)</span></a>\n          </li>\n        </ul>\n        <div class=\"form-inline my-2 my-lg-0\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" [ngClass]=\"{'active': isRoute('/dashboard/user-create')}\" *ngIf=\"isAdmin()\">\n              <a class=\"nav-link\" routerLink=\"/dashboard/user-create\">Dodaj użytkownika<span\n                  class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logout()\">Wyloguj<span class=\"sr-only\">(current)</span></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <div class=\"row\">\n      <div class=\"col-md-12 body\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/dashboard/home/home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card shadow-sm\">\n        <div class=\"card-header\">\n          <h5>Strona główna</h5>\n        </div>\n        <div class=\"card-body\">\n        <p class=\"card-text\">Jesteś zalogowany jako: {{ name }}</p>\n        <p class=\"card-text\">Masz prawnienia: {{ role }}</p>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"goToMyProfile()\">Zobacz swój profil</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/user-mod/user-mod.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/dashboard/user-mod/user-mod.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card shadow-sm\">\n        <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" *ngIf=\"!userId\">\n          <div class=\"card-header\">\n            <h5 *ngIf=\"!userId\">Dodaj użytkownika</h5>\n            <h5 *ngIf=\"userId\"> Edytuj użytkownika</h5>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <label for=\"firstNameUserMode\" class=\"col-sm-2 col-form-label\">Imię</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" required class=\"form-control\"\n                  [ngClass]=\"{'is-invalid': form.submitted && firstNameRef.invalid}\" id=\"firstNameUserMode\"\n                  aria-describedby=\"emailHelp\" name=\"firstName\" [(ngModel)]=\"user.firstName\" #firstNameRef=\"ngModel\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && firstNameRef.invalid\">\n                  Imie jest wymagany\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"lastNameUserMode\" class=\"col-sm-2 col-form-label\">Nazwisko</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" required class=\"form-control\"\n                  [ngClass]=\"{'is-invalid': form.submitted && lastNameRef.invalid}\" id=\"lastNameUserMode\"\n                  aria-describedby=\"emailHelp\" name=\"lastName\" [(ngModel)]=\"user.lastName\" #lastNameRef=\"ngModel\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && lastNameRef.invalid\">\n                  Nazwisko jest wymagany\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"cityUserMode\" class=\"col-sm-2 col-form-label\">Miasto</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" required class=\"form-control\"\n                  [ngClass]=\"{'is-invalid': form.submitted && cityRef.invalid}\" id=\"cityUserMode\"\n                  aria-describedby=\"emailHelp\" name=\"city\" [(ngModel)]=\"user.city\" #cityRef=\"ngModel\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && cityRef.invalid\">\n                  Miasto jest wymagany\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"countryUserMode\" class=\"col-sm-2 col-form-label\">Państwo</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" required class=\"form-control\"\n                  [ngClass]=\"{'is-invalid': form.submitted && countryRef.invalid}\" id=\"countryUserMode\"\n                  aria-describedby=\"emailHelp\" name=\"country\" [(ngModel)]=\"user.country\" #countryRef=\"ngModel\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && countryRef.invalid\">\n                  Państwo jest wymagany\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"mailUserMode\" class=\"col-sm-2 col-form-label\">Adres E-mail</label>\n              <div class=\"col-sm-10\">\n                <input type=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\"\n                  [ngClass]=\"{'is-invalid': (form.submitted && mailRef.invalid) || mailRef.touched && !mailValid && check &&user.mail, 'is-valid': mailRef.touched && mailValid && check && user.mail}\" id=\"mailUserMode\"\n                  aria-describedby=\"emailHelp\" name=\"mail\" [(ngModel)]=\"user.mail\" #mailRef=\"ngModel\" (blur)=\"onCheckMail()\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && mailRef.invalid && mailRef?.errors.required\">\n                  Adres E-mail jest wymagany\n                </div>\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && mailRef.invalid && mailRef?.errors.pattern\">\n                  Niepoprawny adres E-mail\n                </div>\n                <div class=\"invalid-feedback\" *ngIf=\"mailRef.touched && !mailValid && check && user.mail\">\n                  Podany adres E-mail jest już zarejestrowany\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"roleUserMode\" class=\"col-sm-2 col-form-label\">Rola użytkownika</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" id=\"roleUserMode\" name=\"role\" [(ngModel)]=\"user.role\">\n                  <option value=\"Użytkownik\">Użytkownik</option>\n                  <option value=\"Administrator\">Administrator</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"passwdUserMode\" class=\"col-sm-2 col-form-label\">Hasło</label>\n              <div class=\"col-sm-8\">\n                <input type=\"password\" autocomplete=\"password\" class=\"form-control\" required\n                  [ngClass]=\"{'is-invalid': form.submitted && passwordRef.invalid || (form.submitted && user.password !== user.repeatPassword)}\"\n                  id=\"passwdUserMode\" name=\"password\" [(ngModel)]=\"user.password\" #passwordRef=\"ngModel\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && passwordRef.invalid\">\n                  Hasło jest wymagane\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onGeneratePasswordClick()\">Wygeneruj\n                  hasło</button>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"rPasswdUserMode\" class=\"col-sm-2 col-form-label\">Powtórz hasło</label>\n              <div class=\"col-sm-10\">\n                <input type=\"password\" required\n                  [ngClass]=\"{'is-invalid': form.submitted && passwordRef.invalid || (form.submitted && user.password !== user.repeatPassword)}\"\n                  autocomplete=\"repeat-password\" class=\"form-control\" id=\"rPasswdUserMode\" name=\"repeatPassword\"\n                  [(ngModel)]=\"user.repeatPassword\" #repeatPasswordRef=\"ngModel\">\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && repeatPasswordRef.invalid\">\n                  Potwierdzenie hasła jest wymagane\n                </div>\n                <div class=\"invalid-feedback\" *ngIf=\"form.submitted && user.password !== user.repeatPassword\">\n                  Hasła różnią się\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer text-muted\">\n            <button type=\"submit\" class=\"btn btn-outline-dark\" *ngIf=\"!userId\">Utwórz</button>\n            <button type=\"submit\" class=\"btn btn-outline-dark\" *ngIf=\"userId\">Edytuj</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/user-preview/user-preview.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/dashboard/user-preview/user-preview.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card shadow-sm\">\n        <div class=\"card-header\">\n          <h5>Podgląd użytkownika</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group row\">\n            <label for=\"firstNameUserMode\" class=\"col-sm-3 col-form-label\">Imię</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"firstNameUserMode\"\n                aria-describedby=\"emailHelp\" [value]=\"user.firstName\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"lastNameUserMode\" class=\"col-sm-3 col-form-label\">Nazwisko</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"lastNameUserMode\"\n                aria-describedby=\"emailHelp\" [value]=\"user.lastName\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"cityUserMode\" class=\"col-sm-3 col-form-label\">Miasto</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" readonly class=\"form-control-plaintext\" id=\"cityUserMode\"\n                aria-describedby=\"emailHelp\" [value]=\"user.city\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"countryUserMode\" class=\"col-sm-3 col-form-label\">Państwo</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" readonly class=\"form-control-plaintext\" id=\"countryUserMode\"\n                aria-describedby=\"emailHelp\" [value]=\"user.country\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"mailUserMode\" class=\"col-sm-3 col-form-label\">Adres E-mail</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" readonly class=\"form-control-plaintext\" id=\"mailUserMode\"\n                aria-describedby=\"emailHelp\" [value]=\"user.mail\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card shadow-sm\">\n        <div class=\"card-header\">\n          <h5>Pogoda</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"password-container d-flex justify-content-center align-items-center\" *ngIf=\"!weather\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <button class=\"btn\" [ngClass]=\"{'btn-outline-danger': !passwordValid, 'btn-outline-secondary': passwordValid}\" type=\"button\" id=\"button-addon2\" (click)=\"onCheckPassword()\">\n                  <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n              <input type=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid': !passwordValid}\" placeholder=\"Podaj hasło aby zobaczyć pogodę\"\n                aria-label=\"Hasło\" aria-describedby=\"basic-addon2\" name=\"password\" [(ngModel)]=\"password\" #passwordRef=\"ngModel\" (keyup.enter)=\"onCheckPassword()\">\n              <div class=\"invalid-feedback\" *ngIf=\"!passwordValid\">\n                Hasło jest nieprawidłowe\n              </div>\n            </div>\n          </div>\n          <div class=\"weather-container\" *ngIf=\"weather\">\n            <h1>POGODA</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/users/users.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/dashboard/users/users.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card shadow-sm\">\n        <div class=\"card-header\">\n          <h5>Użytkownicy</h5>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped table-bordered\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Imię</th>\n                <th scope=\"col\">Nazwisko</th>\n                <th scope=\"col\">Adres E-mail</th>\n                <th scope=\"col\">Miasto</th>\n                <th scope=\"col\">Kraj</th>\n                <th scope=\"col\">Operacje</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users\">\n                <td>{{ user.firstName }}</td>\n                <td>{{ user.lastName }}</td>\n                <td>{{ user.mail}}</td>\n                <td>{{ user.city }}</td>\n                <td>{{ user.country }}</td>\n                <td>\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onPreviewClick(user.id)\">\n                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                    <div class=\"col\">\n                      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onEditClick(user.id)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                    <div class=\"col\">\n                      <button class=\"btn btn-outline-dark\" (click)=\"onRemoveClick(user.id)\">\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/dashboard/home/home.component.ts");
/* harmony import */ var _user_mod_user_mod_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-mod/user-mod.component */ "./src/app/views/dashboard/user-mod/user-mod.component.ts");
/* harmony import */ var _user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-preview/user-preview.component */ "./src/app/views/dashboard/user-preview/user-preview.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/views/dashboard/users/users.component.ts");








const routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            },
            {
                path: 'user-create',
                component: _user_mod_user_mod_component__WEBPACK_IMPORTED_MODULE_5__["UserModComponent"]
            },
            {
                path: 'user-edit/:id',
                component: _user_mod_user_mod_component__WEBPACK_IMPORTED_MODULE_5__["UserModComponent"]
            },
            {
                path: 'user-preview/:id',
                component: _user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_6__["UserPreviewComponent"]
            },
            {
                path: 'users',
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"]
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            }
        ]
    }];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  background-color: #f2f4f6;\n  min-height: 100vh;\n}\n\n.body {\n  margin-top: 72px;\n}\n\n.header-shadow {\n  box-shadow: rgba(4, 9, 20, 0.03) 0px 0.46875rem 2.1875rem, rgba(4, 9, 20, 0.03) 0px 0.9375rem 1.40625rem, rgba(4, 9, 20, 0.05) 0px 0.25rem 0.53125rem, rgba(4, 9, 20, 0.03) 0px 0.125rem 0.1875rem;\n}\n\na {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaXJtYXJidWcvUHJhY2EvemxlY2VuaWEvdXNlcnMtbWFuYWdlci9zcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0Usa01BQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NCwgMjQ2KTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xufVxuXG4uaGVhZGVyLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoNCwgOSwgMjAsIDAuMDMpIDBweCAwLjQ2ODc1cmVtIDIuMTg3NXJlbSwgcmdiYSg0LCA5LCAyMCwgMC4wMykgMHB4IDAuOTM3NXJlbSAxLjQwNjI1cmVtLCByZ2JhKDQsIDksIDIwLCAwLjA1KSAwcHggMC4yNXJlbSAwLjUzMTI1cmVtLCByZ2JhKDQsIDksIDIwLCAwLjAzKSAwcHggMC4xMjVyZW0gMC4xODc1cmVtO1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjRmNjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5ib2R5IHtcbiAgbWFyZ2luLXRvcDogNzJweDtcbn1cblxuLmhlYWRlci1zaGFkb3cge1xuICBib3gtc2hhZG93OiByZ2JhKDQsIDksIDIwLCAwLjAzKSAwcHggMC40Njg3NXJlbSAyLjE4NzVyZW0sIHJnYmEoNCwgOSwgMjAsIDAuMDMpIDBweCAwLjkzNzVyZW0gMS40MDYyNXJlbSwgcmdiYSg0LCA5LCAyMCwgMC4wNSkgMHB4IDAuMjVyZW0gMC41MzEyNXJlbSwgcmdiYSg0LCA5LCAyMCwgMC4wMykgMHB4IDAuMTI1cmVtIDAuMTg3NXJlbTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/models */ "./src/app/core/models/index.ts");





let DashboardComponent = class DashboardComponent {
    constructor(router, userService, activatedRoute) {
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    get name() {
        return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }
    ngOnInit() {
        this.currentUser = this.userService.currentUser;
    }
    goToAddUser() {
        this.router.navigateByUrl('dashboard/user-create');
    }
    goToUserPreview() {
        this.router.navigateByUrl(`dashboard/user-preview/${this.currentUser.id}`);
    }
    logout() {
        this.router.navigateByUrl('auth/login');
    }
    isAdmin() {
        if (this.currentUser.role !== _core_models__WEBPACK_IMPORTED_MODULE_4__["Role"].ADMIN) {
            return false;
        }
        return true;
    }
    isRoute(url) {
        if (this.router.url !== url) {
            return false;
        }
        return true;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/dashboard/home/home.component.ts");
/* harmony import */ var _user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-preview/user-preview.component */ "./src/app/views/dashboard/user-preview/user-preview.component.ts");
/* harmony import */ var _user_mod_user_mod_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-mod/user-mod.component */ "./src/app/views/dashboard/user-mod/user-mod.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.component */ "./src/app/views/dashboard/users/users.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");










let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_6__["UserPreviewComponent"], _user_mod_user_mod_component__WEBPACK_IMPORTED_MODULE_7__["UserModComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/views/dashboard/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: none;\n}\n\n.card-header, .card-footer {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaXJtYXJidWcvUHJhY2EvemxlY2VuaWEvdXNlcnMtbWFuYWdlci9zcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJkLWhlYWRlciwgLmNhcmQtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSIsIi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2FyZC1oZWFkZXIsIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/dashboard/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.name = `${this.userService.currentUser.firstName} ${this.userService.currentUser.lastName}`;
        this.role = this.userService.currentUser.role;
    }
    goToMyProfile() {
        this.router.navigateByUrl(`dashboard/user-preview/${this.userService.currentUser.id}`);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/dashboard/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/views/dashboard/user-mod/user-mod.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/dashboard/user-mod/user-mod.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaXJtYXJidWcvUHJhY2EvemxlY2VuaWEvdXNlcnMtbWFuYWdlci9zcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC91c2VyLW1vZC91c2VyLW1vZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL3VzZXItbW9kL3VzZXItbW9kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC91c2VyLW1vZC91c2VyLW1vZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59IiwiLmZvcm0tZ3JvdXA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/dashboard/user-mod/user-mod.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/dashboard/user-mod/user-mod.component.ts ***!
  \****************************************************************/
/*! exports provided: UserModComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModComponent", function() { return UserModComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let UserModComponent = class UserModComponent {
    constructor(modalService, logger, userService, activatedRoute) {
        this.modalService = modalService;
        this.logger = logger;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.userId = '';
        this.mailValid = false;
        this.check = false;
    }
    ngOnInit() {
        this.user = new _core_models__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.userId = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.userId) {
            this.userService.getUserById(this.userId).subscribe((user) => {
                this.user = user;
            });
        }
    }
    onGeneratePasswordClick() {
        const modalRef = this.modalService.open(_shared_components__WEBPACK_IMPORTED_MODULE_3__["GeneratePasswordPopupComponent"]);
        modalRef.result
            .then(res => {
            if (!res) {
                return;
            }
            this.user.password = res;
            this.user.repeatPassword = res;
        })
            .catch(err => console.error(err));
    }
    onCreateUserClick(form) {
        if (form.invalid) {
            return;
        }
        this.logger.debug(this.user);
        this.userService.addUser(this.user)
            .subscribe(res => {
            console.log(res);
        }, err => console.error(err));
    }
    onEditUserClick(form) {
        if (form.invalid) {
            return;
        }
        this.logger.debug(this.user);
        this.userService.updateUser(this.user)
            .subscribe(() => { }, err => console.error(err));
    }
    onCheckMail() {
        if (this.userId) {
            return;
        }
        this.userService.checkMail(this.user.mail).subscribe((valid) => {
            this.mailValid = valid;
            this.check = true;
        });
    }
    onSubmit(form) {
        if (!this.userId) {
            this.onCreateUserClick(form);
        }
        this.onEditUserClick(form);
    }
};
UserModComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
UserModComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-mod',
        template: __webpack_require__(/*! raw-loader!./user-mod.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/user-mod/user-mod.component.html"),
        styles: [__webpack_require__(/*! ./user-mod.component.scss */ "./src/app/views/dashboard/user-mod/user-mod.component.scss")]
    })
], UserModComponent);



/***/ }),

/***/ "./src/app/views/dashboard/user-preview/user-preview.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/dashboard/user-preview/user-preview.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group:last-child {\n  margin-bottom: 0;\n}\n\n.card {\n  height: 100%;\n}\n\n.card .password-container {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaXJtYXJidWcvUHJhY2EvemxlY2VuaWEvdXNlcnMtbWFuYWdlci9zcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC91c2VyLXByZXZpZXcvdXNlci1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9kYXNoYm9hcmQvdXNlci1wcmV2aWV3L3VzZXItcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL3VzZXItcHJldmlldy91c2VyLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnBhc3N3b3JkLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsIi5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkIC5wYXNzd29yZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/dashboard/user-preview/user-preview.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/dashboard/user-preview/user-preview.component.ts ***!
  \************************************************************************/
/*! exports provided: UserPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPreviewComponent", function() { return UserPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");





let UserPreviewComponent = class UserPreviewComponent {
    constructor(activatedRoute, logger, userService) {
        this.activatedRoute = activatedRoute;
        this.logger = logger;
        this.userService = userService;
        this.password = '';
        this.passwordValid = true;
        this.userId = '';
        this.weather = false;
    }
    ngOnInit() {
        this.userId = this.activatedRoute.snapshot.paramMap.get('id');
        this.userService.getUserById(this.userId)
            .subscribe((res) => {
            this.logger.debug(res);
            this.user = res;
        });
    }
    onCheckPassword() {
        this.userService.login(this.userService.currentUser.mail, this.password)
            .subscribe(res => {
            if (!res) {
                this.passwordValid = false;
                return;
            }
            this.logger.debug('login', res);
            this.passwordValid = true;
            this.weather = true;
        }, err => {
            this.logger.error(err);
            this.weather = false;
            this.passwordValid = false;
        });
    }
};
UserPreviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
UserPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-preview',
        template: __webpack_require__(/*! raw-loader!./user-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/user-preview/user-preview.component.html"),
        styles: [__webpack_require__(/*! ./user-preview.component.scss */ "./src/app/views/dashboard/user-preview/user-preview.component.scss")]
    })
], UserPreviewComponent);



/***/ }),

/***/ "./src/app/views/dashboard/users/users.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/dashboard/users/users.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaXJtYXJidWcvUHJhY2EvemxlY2VuaWEvdXNlcnMtbWFuYWdlci9zcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxufSIsIi50YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/dashboard/users/users.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/users/users.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let UsersComponent = class UsersComponent {
    constructor(modalService, userService, logger, router) {
        this.modalService = modalService;
        this.userService = userService;
        this.logger = logger;
        this.router = router;
    }
    ngOnInit() {
        this.userService.getUsers().subscribe((users) => {
            this.logger.debug(users);
            this.users = users;
        });
    }
    onRemoveClick(id) {
        const modalRef = this.modalService.open(_shared_components__WEBPACK_IMPORTED_MODULE_3__["ConfirmPopupComponent"]);
        modalRef.result.then(res => {
            if (!res) {
                return;
            }
            this.userService.deleteUser(id).subscribe(() => { }, err => this.logger.error(err));
        });
    }
    onEditClick(id) {
        this.router.navigateByUrl(`dashboard/user-edit/${id}`);
    }
    onPreviewClick(id) {
        this.router.navigateByUrl(`dashboard/user-preview/${id}`);
    }
};
UsersComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/users/users.component.html"),
        styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/views/dashboard/users/users.component.scss")]
    })
], UsersComponent);



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module-es2015.js.map