(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environment */ "bXO7");
/* harmony import */ var _app_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.socket */ "rGZO");







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Powered-By': 'Express'
    })
};
class AuthService {
    constructor(_http, appSocket) {
        this._http = _http;
        this.appSocket = appSocket;
        this.baseUrl = _environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        //private loginUrl: string = '${this.baseUrl}/${this.apiPaths.signinUrl}';
        //private registerUrl: string = '${this.baseUrl}/${this.apiPaths.signupUrl}';
        this.loginUrl = "https://api.narr.ng/api/v1/auth/login";
        this.registerUrl = "https://api.narr.ng/api/v1/auth/register";
    }
    login(credentials) {
        return this._http.post(this.loginUrl, credentials, httpOptions);
    }
    register(value) {
        return this._http.post(this.registerUrl, value);
    }
    resetPassword(value) {
        return true;
    }
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    addUserToCache() {
    }
    getUserFromCache() {
    }
    isAuthenticated() {
        //if(local storage credentials are validated){
        //  return tru
        //}
        return true;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_socket__WEBPACK_IMPORTED_MODULE_3__["AppSocket"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _app_socket__WEBPACK_IMPORTED_MODULE_3__["AppSocket"] }]; }, null); })();


/***/ }),

/***/ "bXO7":
/*!********************************!*\
  !*** ./src/app/environment.ts ***!
  \********************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    baseUrl: 'https://api.narr.ng/api/v1'
};


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map