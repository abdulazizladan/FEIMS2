(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "Btxb":
    /*!*****************************!*\
      !*** ./src/app/ApiPaths.ts ***!
      \*****************************/

    /*! exports provided: ApiPaths */

    /***/
    function Btxb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiPaths", function () {
        return ApiPaths;
      });

      var ApiPaths;

      (function (ApiPaths) {
        ApiPaths["signin"] = "auth/login";
        ApiPaths["signup"] = "auth/register";
      })(ApiPaths || (ApiPaths = {}));
      /***/

    },

    /***/
    "E0/Y":
    /*!********************************!*\
      !*** ./src/environment.dev.ts ***!
      \********************************/

    /*! exports provided: environment */

    /***/
    function E0Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        baseUrl: 'https://app.narr.ng/api/v1'
      };
      /***/
    },

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


      var _environment_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environment.dev */
      "E0/Y");
      /* harmony import */


      var _ApiPaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ApiPaths */
      "Btxb");
      /* harmony import */


      var _app_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
          this.baseUrl = _environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
          this.loginUrl = "".concat(this.baseUrl, "/").concat(_ApiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].signin);
          this.registerUrl = "".concat(this.baseUrl, "/").concat(_ApiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].signup);
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
            //  return true
            //}
            return true;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_socket__WEBPACK_IMPORTED_MODULE_4__["AppSocket"]));
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
            type: _app_socket__WEBPACK_IMPORTED_MODULE_4__["AppSocket"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map