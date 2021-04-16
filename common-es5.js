(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "N/25":
    /*!***********************************************!*\
      !*** ./src/app/auth/services/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function N25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environment */
      "bXO7");
      /* harmony import */


      var _app_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.socket */
      "rGZO");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-Powered-By': 'Express'
        })
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(_http, appSocket) {
          _classCallCheck(this, AuthService);

          this._http = _http;
          this.appSocket = appSocket;
          this.baseUrl = _environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl; //private loginUrl: string = '${this.baseUrl}/${this.apiPaths.signinUrl}';
          //private registerUrl: string = '${this.baseUrl}/${this.apiPaths.signupUrl}';

          this.loginUrl = "https://api.narr.ng/api/v1/auth/login";
          this.registerUrl = "https://api.narr.ng/api/v1/auth/register";
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(credentials) {
            return this._http.post(this.loginUrl, credentials, httpOptions);
          }
        }, {
          key: "register",
          value: function register(value) {
            return this._http.post(this.registerUrl, value);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(value) {
            return true;
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!localStorage.getItem('token');
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('token');
          }
        }, {
          key: "addUserToCache",
          value: function addUserToCache() {}
        }, {
          key: "getUserFromCache",
          value: function getUserFromCache() {}
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            //if(local storage credentials are validated){
            //  return tru
            //}
            return true;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_socket__WEBPACK_IMPORTED_MODULE_3__["AppSocket"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _app_socket__WEBPACK_IMPORTED_MODULE_3__["AppSocket"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "bXO7":
    /*!********************************!*\
      !*** ./src/app/environment.ts ***!
      \********************************/

    /*! exports provided: environment */

    /***/
    function bXO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        baseUrl: 'https://api.narr.ng/api/v1'
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map