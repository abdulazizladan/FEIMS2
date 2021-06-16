(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Btxb":
/*!*****************************!*\
  !*** ./src/app/ApiPaths.ts ***!
  \*****************************/
/*! exports provided: ApiPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPaths", function() { return ApiPaths; });
var ApiPaths;
(function (ApiPaths) {
    ApiPaths["signin"] = "auth/login";
    ApiPaths["signup"] = "auth/register";
})(ApiPaths || (ApiPaths = {}));


/***/ }),

/***/ "E0/Y":
/*!********************************!*\
  !*** ./src/environment.dev.ts ***!
  \********************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    baseUrl: 'https://app.narr.ng/api/v1'
};


/***/ }),

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
/* harmony import */ var _environment_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environment.dev */ "E0/Y");
/* harmony import */ var _ApiPaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ApiPaths */ "Btxb");
/* harmony import */ var _app_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.socket */ "rGZO");








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
        this.baseUrl = _environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.loginUrl = `${this.baseUrl}/${_ApiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].signin}`;
        this.registerUrl = `${this.baseUrl}/${_ApiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].signup}`;
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
        //  return true
        //}
        return true;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_socket__WEBPACK_IMPORTED_MODULE_4__["AppSocket"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _app_socket__WEBPACK_IMPORTED_MODULE_4__["AppSocket"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map