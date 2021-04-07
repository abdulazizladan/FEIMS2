(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "6epW":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function epW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/forgot-password/forgot-password.component */
      "Wwh5");
      /* harmony import */


      var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/signin/signin.component */
      "IkMf");
      /* harmony import */


      var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/signup/signup.component */
      "AgPr");

      var routes = [{
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }, {
        path: 'signin',
        component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
      }, {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }, {
        path: 'forgot-password',
        component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "7FO4":
    /*!****************************************************************************!*\
      !*** ./node_modules/ngx-custom-validators/node_modules/tslib/tslib.es6.js ***!
      \****************************************************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function FO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "8M/b":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-custom-validators/fesm2015/ngx-custom-validators.js ***!
      \******************************************************************************/

    /*! exports provided: CustomFormsModule, CustomValidators, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby, ɵbz, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */

    /***/
    function MB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomFormsModule", function () {
        return CustomFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
        return CustomValidators;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return arrayLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return base64;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵba", function () {
        return ArrayLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbb", function () {
        return Base64Validator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbc", function () {
        return CreditCardValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbd", function () {
        return DateValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbe", function () {
        return DateISOValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbf", function () {
        return DigitsValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbg", function () {
        return EmailValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbh", function () {
        return EqualValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbi", function () {
        return EqualToValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbj", function () {
        return GreaterThanValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbk", function () {
        return GreaterThanEqualValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbl", function () {
        return JSONValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbm", function () {
        return LessThanValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbn", function () {
        return LessThanEqualValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbo", function () {
        return MaxValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbp", function () {
        return MaxDateValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbq", function () {
        return MinValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbr", function () {
        return MinDateValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbs", function () {
        return NotEqualValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbt", function () {
        return NotEqualToValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbu", function () {
        return NumberValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbv", function () {
        return PropertyValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbw", function () {
        return RangeValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbx", function () {
        return RangeLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵby", function () {
        return UrlValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbz", function () {
        return UUIDValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return creditCard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return date;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return dateISO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return digits;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return email;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return equal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return equalTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return gt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return gte;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵl", function () {
        return json;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵm", function () {
        return lt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵn", function () {
        return lte;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵo", function () {
        return max;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵp", function () {
        return maxDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵq", function () {
        return min;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵr", function () {
        return minDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵs", function () {
        return notEqual;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵt", function () {
        return notEqualTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵu", function () {
        return number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵv", function () {
        return property;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵw", function () {
        return range;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵx", function () {
        return rangeLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵy", function () {
        return url;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵz", function () {
        return uuid;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "7FO4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      function isPresent(obj) {
        return obj !== undefined && obj !== null;
      }

      function isDate(obj) {
        try {
          var _date = new Date(obj);

          return !isNaN(_date.getTime());
        } catch (e) {
          return false;
        }
      }

      function parseDate(obj) {
        try {
          // Moment.js
          if (obj._d instanceof Date) {
            var d = obj._d;
            var month = +d.getMonth() + 1;
            var day = +d.getDate();
            return "".concat(d.getFullYear(), "-").concat(formatDayOrMonth(month), "-").concat(formatDayOrMonth(day));
          } // NgbDateStruct


          if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
            var _month = +obj.month;

            var _day = +obj.day;

            return "".concat(obj.year, "-").concat(formatDayOrMonth(_month), "-").concat(formatDayOrMonth(_day));
          }
        } catch (e) {}

        return obj;
      }

      function formatDayOrMonth(month) {
        return month < 10 ? "0".concat(month) : month;
      }

      var arrayLength = function arrayLength(value) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var obj = control.value;
          return Array.isArray(obj) && obj.length >= +value ? null : {
            arrayLength: {
              minLength: value
            }
          };
        };
      };

      var base64 = function base64(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : {
          base64: true
        };
      };

      var creditCard = function creditCard(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        var sanitized = v.replace(/[^0-9]+/g, ''); // problem with chrome

        /* tslint:disable */

        if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized)) {
          return {
            creditCard: true
          };
        }
        /* tslint:enable */


        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;

        for (var i = sanitized.length - 1; i >= 0; i--) {
          digit = sanitized.substring(i, i + 1);
          tmpNum = parseInt(digit, 10);

          if (shouldDouble) {
            tmpNum *= 2;

            if (tmpNum >= 10) {
              sum += tmpNum % 10 + 1;
            } else {
              sum += tmpNum;
            }
          } else {
            sum += tmpNum;
          }

          shouldDouble = !shouldDouble;
        }

        if (Boolean(sum % 10 === 0 ? sanitized : false)) {
          return null;
        }

        return {
          creditCard: true
        };
      };

      var date = function date(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        v = parseDate(v);
        return isDate(v) ? null : {
          date: true
        };
      };

      var dateISO = function dateISO(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {
          dateISO: true
        };
      };

      var digits = function digits(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return /^\d+$/.test(v) ? null : {
          digits: true
        };
      };

      var email = function email(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        /* tslint:disable */

        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : {
          'email': true
        };
        /* tslint:enable */
      };

      var equal = function equal(val) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = control.value;
          return val === v ? null : {
            equal: {
              value: val
            }
          };
        };
      };

      var equalTo = function equalTo(equalControl) {
        var subscribe = false;
        return function (control) {
          if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          var v = control.value;
          return equalControl.value === v ? null : {
            equalTo: {
              control: equalControl,
              value: equalControl.value
            }
          };
        };
      };

      var gt = function gt(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v > +value ? null : {
            gt: {
              value: value
            }
          };
        };
      };

      var gte = function gte(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v >= +value ? null : {
            gte: {
              value: value
            }
          };
        };
      };

      var json = function json(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;

        try {
          var obj = JSON.parse(v);

          if (Boolean(obj) && typeof obj === 'object') {
            return null;
          }
        } catch (e) {}

        return {
          json: true
        };
      };

      var lt = function lt(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v < +value ? null : {
            lt: {
              value: value
            }
          };
        };
      };

      var lte = function lte(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v <= +value ? null : {
            lte: {
              value: value
            }
          };
        };
      };

      var max = function max(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v <= +value ? null : {
            max: {
              value: value
            }
          };
        };
      };

      var maxDate = function maxDate(maxInput) {
        var value;
        var subscribe = false;
        var maxValue = maxInput;
        var isForm = maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"];
        return function (control) {
          if (!subscribe && isForm) {
            subscribe = true;
            maxInput.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          if (isForm) {
            maxValue = maxInput.value;
          }

          value = parseDate(maxValue);

          if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
              return null;
            } else if (isForm) {
              return {
                maxDate: {
                  error: 'maxDate is invalid'
                }
              };
            } else {
              throw Error('maxDate value must be or return a formatted date');
            }
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var d = new Date(parseDate(control.value)).getTime();

          if (!isDate(d)) {
            return {
              value: true
            };
          }

          if (value instanceof Function) {
            value = value();
          }

          return d <= new Date(value).getTime() ? null : isForm ? {
            maxDate: {
              control: maxInput,
              value: maxInput.value
            }
          } : {
            maxDate: {
              value: maxValue,
              control: undefined
            }
          };
        };
      };

      var min = function min(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v >= +value ? null : {
            min: {
              value: value
            }
          };
        };
      };

      var minDate = function minDate(minInput) {
        var value;
        var subscribe = false;
        var minValue = minInput;
        var isForm = minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"];
        return function (control) {
          if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          if (isForm) {
            minValue = minInput.value;
          }

          value = parseDate(minValue);

          if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
              return null;
            } else if (isForm) {
              return {
                minDate: {
                  error: 'minDate is invalid'
                }
              };
            } else {
              throw Error('minDate value must be or return a formatted date');
            }
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var d = new Date(parseDate(control.value)).getTime();

          if (!isDate(d)) {
            return {
              value: true
            };
          }

          if (value instanceof Function) {
            value = value();
          }

          return d >= new Date(value).getTime() ? null : isForm ? {
            minDate: {
              control: minInput,
              value: minInput.value
            }
          } : {
            minDate: {
              value: minValue,
              control: undefined
            }
          };
        };
      };

      var notEqual = function notEqual(val) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = control.value;
          return val !== v ? null : {
            notEqual: {
              value: val
            }
          };
        };
      };

      var notEqualTo = function notEqualTo(notEqualControl) {
        var subscribe = false;
        return function (control) {
          if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          var v = control.value;

          if (notEqualControl.value == null && v == null) {
            return null;
          }

          return notEqualControl.value !== v ? null : {
            notEqualTo: {
              control: notEqualControl,
              value: notEqualControl.value
            }
          };
        };
      };

      var number = function number(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {
          'number': true
        };
      };

      var property = function property(value) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var properties = value.split(',');
          var obj = control.value;
          var isValid = true;

          var _iterator = _createForOfIteratorHelper(properties),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var prop = _step.value;

              if (obj[prop] == null) {
                isValid = false;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return isValid ? null : {
            hasProperty: {
              value: value
            }
          };
        };
      };

      var range = function range(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v >= value[0] && v <= value[1] ? null : {
            range: {
              value: value
            }
          };
        };
      };

      var rangeLength = function rangeLength(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = control.value;
          return v.length >= value[0] && v.length <= value[1] ? null : {
            rangeLength: {
              value: value
            }
          };
        };
      };

      var uuids = {
        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      };

      var uuid = function uuid(version) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = control.value;
          var pattern = uuids[version] || uuids.all;
          return new RegExp(pattern).test(v) ? null : {
            uuid: true
          };
        };
      };

      var url = function url(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        /* tslint:disable */

        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {
          'url': true
        };
        /* tslint:enable */
      };

      var ARRAY_LENGTH_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return ArrayLengthValidator;
        }),
        multi: true
      };

      var ArrayLengthValidator = /*#__PURE__*/function () {
        function ArrayLengthValidator() {
          _classCallCheck(this, ArrayLengthValidator);
        }

        _createClass(ArrayLengthValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = arrayLength(this.arrayLength);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return ArrayLengthValidator;
      }();

      ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) {
        return new (t || ArrayLengthValidator)();
      };

      ArrayLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: ArrayLengthValidator,
        selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]],
        inputs: {
          arrayLength: "arrayLength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ARRAY_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ArrayLengthValidator.prototype, "arrayLength", void 0);
      var BASE64_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return Base64Validator;
        }),
        multi: true
      };

      var Base64Validator = /*#__PURE__*/function () {
        function Base64Validator() {
          _classCallCheck(this, Base64Validator);
        }

        _createClass(Base64Validator, [{
          key: "validate",
          value: function validate(c) {
            return base64(c);
          }
        }]);

        return Base64Validator;
      }();

      Base64Validator.ɵfac = function Base64Validator_Factory(t) {
        return new (t || Base64Validator)();
      };

      Base64Validator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: Base64Validator,
        selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([BASE64_VALIDATOR])]
      });
      var CREDIT_CARD_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CreditCardValidator;
        }),
        multi: true
      };

      var CreditCardValidator = /*#__PURE__*/function () {
        function CreditCardValidator() {
          _classCallCheck(this, CreditCardValidator);
        }

        _createClass(CreditCardValidator, [{
          key: "validate",
          value: function validate(c) {
            return creditCard(c);
          }
        }]);

        return CreditCardValidator;
      }();

      CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) {
        return new (t || CreditCardValidator)();
      };

      CreditCardValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CreditCardValidator,
        selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CREDIT_CARD_VALIDATOR])]
      });
      var DATE_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DateValidator;
        }),
        multi: true
      };

      var DateValidator = /*#__PURE__*/function () {
        function DateValidator() {
          _classCallCheck(this, DateValidator);
        }

        _createClass(DateValidator, [{
          key: "validate",
          value: function validate(c) {
            return date(c);
          }
        }]);

        return DateValidator;
      }();

      DateValidator.ɵfac = function DateValidator_Factory(t) {
        return new (t || DateValidator)();
      };

      DateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DateValidator,
        selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_VALIDATOR])]
      });
      var DATE_ISO_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DateISOValidator;
        }),
        multi: true
      };

      var DateISOValidator = /*#__PURE__*/function () {
        function DateISOValidator() {
          _classCallCheck(this, DateISOValidator);
        }

        _createClass(DateISOValidator, [{
          key: "validate",
          value: function validate(c) {
            return dateISO(c);
          }
        }]);

        return DateISOValidator;
      }();

      DateISOValidator.ɵfac = function DateISOValidator_Factory(t) {
        return new (t || DateISOValidator)();
      };

      DateISOValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DateISOValidator,
        selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_ISO_VALIDATOR])]
      });
      var DIGITS_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DigitsValidator;
        }),
        multi: true
      };

      var DigitsValidator = /*#__PURE__*/function () {
        function DigitsValidator() {
          _classCallCheck(this, DigitsValidator);
        }

        _createClass(DigitsValidator, [{
          key: "validate",
          value: function validate(c) {
            return digits(c);
          }
        }]);

        return DigitsValidator;
      }();

      DigitsValidator.ɵfac = function DigitsValidator_Factory(t) {
        return new (t || DigitsValidator)();
      };

      DigitsValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DigitsValidator,
        selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DIGITS_VALIDATOR])]
      });
      var EMAIL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return EmailValidator;
        }),
        multi: true
      };

      var EmailValidator = /*#__PURE__*/function () {
        function EmailValidator() {
          _classCallCheck(this, EmailValidator);
        }

        _createClass(EmailValidator, [{
          key: "validate",
          value: function validate(c) {
            return email(c);
          }
        }]);

        return EmailValidator;
      }();

      EmailValidator.ɵfac = function EmailValidator_Factory(t) {
        return new (t || EmailValidator)();
      };

      EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: EmailValidator,
        selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
      });
      var EQUAL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return EqualValidator;
        }),
        multi: true
      };

      var EqualValidator = /*#__PURE__*/function () {
        function EqualValidator() {
          _classCallCheck(this, EqualValidator);
        }

        _createClass(EqualValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = equal(this.equal);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return EqualValidator;
      }();

      EqualValidator.ɵfac = function EqualValidator_Factory(t) {
        return new (t || EqualValidator)();
      };

      EqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: EqualValidator,
        selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]],
        inputs: {
          equal: "equal"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EqualValidator.prototype, "equal", void 0);
      var EQUAL_TO_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return EqualToValidator;
        }),
        multi: true
      };

      var EqualToValidator = /*#__PURE__*/function () {
        function EqualToValidator() {
          _classCallCheck(this, EqualToValidator);
        }

        _createClass(EqualToValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = equalTo(this.equalTo);
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }]);

        return EqualToValidator;
      }();

      EqualToValidator.ɵfac = function EqualToValidator_Factory(t) {
        return new (t || EqualToValidator)();
      };

      EqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: EqualToValidator,
        selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]],
        inputs: {
          equalTo: "equalTo"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_TO_VALIDATOR])]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])], EqualToValidator.prototype, "equalTo", void 0);
      var GREATER_THAN_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return GreaterThanValidator;
        }),
        multi: true
      };

      var GreaterThanValidator = /*#__PURE__*/function () {
        function GreaterThanValidator() {
          _classCallCheck(this, GreaterThanValidator);
        }

        _createClass(GreaterThanValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = gt(this.gt);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return GreaterThanValidator;
      }();

      GreaterThanValidator.ɵfac = function GreaterThanValidator_Factory(t) {
        return new (t || GreaterThanValidator)();
      };

      GreaterThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: GreaterThanValidator,
        selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]],
        inputs: {
          gt: "gt"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GreaterThanValidator.prototype, "gt", void 0);
      var GREATER_THAN_EQUAL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return GreaterThanEqualValidator;
        }),
        multi: true
      };

      var GreaterThanEqualValidator = /*#__PURE__*/function () {
        function GreaterThanEqualValidator() {
          _classCallCheck(this, GreaterThanEqualValidator);
        }

        _createClass(GreaterThanEqualValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = gte(this.gte);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return GreaterThanEqualValidator;
      }();

      GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) {
        return new (t || GreaterThanEqualValidator)();
      };

      GreaterThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: GreaterThanEqualValidator,
        selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]],
        inputs: {
          gte: "gte"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GreaterThanEqualValidator.prototype, "gte", void 0);
      var JSON_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return JSONValidator;
        }),
        multi: true
      };

      var JSONValidator = /*#__PURE__*/function () {
        function JSONValidator() {
          _classCallCheck(this, JSONValidator);
        }

        _createClass(JSONValidator, [{
          key: "validate",
          value: function validate(c) {
            return json(c);
          }
        }]);

        return JSONValidator;
      }();

      JSONValidator.ɵfac = function JSONValidator_Factory(t) {
        return new (t || JSONValidator)();
      };

      JSONValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: JSONValidator,
        selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([JSON_VALIDATOR])]
      });
      var LESS_THAN_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return LessThanValidator;
        }),
        multi: true
      };

      var LessThanValidator = /*#__PURE__*/function () {
        function LessThanValidator() {
          _classCallCheck(this, LessThanValidator);
        }

        _createClass(LessThanValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = lt(this.lt);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return LessThanValidator;
      }();

      LessThanValidator.ɵfac = function LessThanValidator_Factory(t) {
        return new (t || LessThanValidator)();
      };

      LessThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: LessThanValidator,
        selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]],
        inputs: {
          lt: "lt"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LessThanValidator.prototype, "lt", void 0);
      var LESS_THAN_EQUAL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return LessThanEqualValidator;
        }),
        multi: true
      };

      var LessThanEqualValidator = /*#__PURE__*/function () {
        function LessThanEqualValidator() {
          _classCallCheck(this, LessThanEqualValidator);
        }

        _createClass(LessThanEqualValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = lte(this.lte);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return LessThanEqualValidator;
      }();

      LessThanEqualValidator.ɵfac = function LessThanEqualValidator_Factory(t) {
        return new (t || LessThanEqualValidator)();
      };

      LessThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: LessThanEqualValidator,
        selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]],
        inputs: {
          lte: "lte"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LessThanEqualValidator.prototype, "lte", void 0);
      var MAX_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MaxValidator;
        }),
        multi: true
      };

      var MaxValidator = /*#__PURE__*/function () {
        function MaxValidator() {
          _classCallCheck(this, MaxValidator);
        }

        _createClass(MaxValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = max(this.max);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'max') {
                this.validator = max(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return MaxValidator;
      }();

      MaxValidator.ɵfac = function MaxValidator_Factory(t) {
        return new (t || MaxValidator)();
      };

      MaxValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MaxValidator,
        selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]],
        inputs: {
          max: "max"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MaxValidator.prototype, "max", void 0);
      var MAX_DATE_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MaxDateValidator;
        }),
        multi: true
      };

      var MaxDateValidator = /*#__PURE__*/function () {
        function MaxDateValidator() {
          _classCallCheck(this, MaxDateValidator);
        }

        _createClass(MaxDateValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = maxDate(this.maxDate);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return MaxDateValidator;
      }();

      MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) {
        return new (t || MaxDateValidator)();
      };

      MaxDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MaxDateValidator,
        selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]],
        inputs: {
          maxDate: "maxDate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaxDateValidator.prototype, "maxDate", void 0);
      var MIN_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MinValidator;
        }),
        multi: true
      };

      var MinValidator = /*#__PURE__*/function () {
        function MinValidator() {
          _classCallCheck(this, MinValidator);
        }

        _createClass(MinValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = min(this.min);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'min') {
                this.validator = min(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return MinValidator;
      }();

      MinValidator.ɵfac = function MinValidator_Factory(t) {
        return new (t || MinValidator)();
      };

      MinValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MinValidator,
        selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]],
        inputs: {
          min: "min"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MinValidator.prototype, "min", void 0);
      var MIN_DATE_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MinDateValidator;
        }),
        multi: true
      };

      var MinDateValidator = /*#__PURE__*/function () {
        function MinDateValidator() {
          _classCallCheck(this, MinDateValidator);
        }

        _createClass(MinDateValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = minDate(this.minDate);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return MinDateValidator;
      }();

      MinDateValidator.ɵfac = function MinDateValidator_Factory(t) {
        return new (t || MinDateValidator)();
      };

      MinDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MinDateValidator,
        selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]],
        inputs: {
          minDate: "minDate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MinDateValidator.prototype, "minDate", void 0);
      var NOT_EQUAL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return NotEqualValidator;
        }),
        multi: true
      };

      var NotEqualValidator = /*#__PURE__*/function () {
        function NotEqualValidator() {
          _classCallCheck(this, NotEqualValidator);
        }

        _createClass(NotEqualValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = notEqual(this.notEqual);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return NotEqualValidator;
      }();

      NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) {
        return new (t || NotEqualValidator)();
      };

      NotEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NotEqualValidator,
        selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]],
        inputs: {
          notEqual: "notEqual"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NotEqualValidator.prototype, "notEqual", void 0);
      var NOT_EQUAL_TO_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return NotEqualToValidator;
        }),
        multi: true
      };

      var NotEqualToValidator = /*#__PURE__*/function () {
        function NotEqualToValidator() {
          _classCallCheck(this, NotEqualToValidator);
        }

        _createClass(NotEqualToValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = notEqualTo(this.notEqualTo);
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }]);

        return NotEqualToValidator;
      }();

      NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) {
        return new (t || NotEqualToValidator)();
      };

      NotEqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NotEqualToValidator,
        selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]],
        inputs: {
          notEqualTo: "notEqualTo"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_TO_VALIDATOR])]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])], NotEqualToValidator.prototype, "notEqualTo", void 0);
      var NUMBER_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return NumberValidator;
        }),
        multi: true
      };

      var NumberValidator = /*#__PURE__*/function () {
        function NumberValidator() {
          _classCallCheck(this, NumberValidator);
        }

        _createClass(NumberValidator, [{
          key: "validate",
          value: function validate(c) {
            return number(c);
          }
        }]);

        return NumberValidator;
      }();

      NumberValidator.ɵfac = function NumberValidator_Factory(t) {
        return new (t || NumberValidator)();
      };

      NumberValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NumberValidator,
        selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NUMBER_VALIDATOR])]
      });
      var PROPERTY_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return PropertyValidator;
        }),
        multi: true
      };

      var PropertyValidator = /*#__PURE__*/function () {
        function PropertyValidator() {
          _classCallCheck(this, PropertyValidator);
        }

        _createClass(PropertyValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = property(this.property);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'property') {
                this.validator = property(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return PropertyValidator;
      }();

      PropertyValidator.ɵfac = function PropertyValidator_Factory(t) {
        return new (t || PropertyValidator)();
      };

      PropertyValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: PropertyValidator,
        selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]],
        inputs: {
          property: "property"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([PROPERTY_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PropertyValidator.prototype, "property", void 0);
      var RANGE_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return RangeValidator;
        }),
        multi: true
      };

      var RangeValidator = /*#__PURE__*/function () {
        function RangeValidator() {
          _classCallCheck(this, RangeValidator);
        }

        _createClass(RangeValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = range(this.range);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'range') {
                this.validator = range(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return RangeValidator;
      }();

      RangeValidator.ɵfac = function RangeValidator_Factory(t) {
        return new (t || RangeValidator)();
      };

      RangeValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: RangeValidator,
        selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]],
        inputs: {
          range: "range"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], RangeValidator.prototype, "range", void 0);
      var RANGE_LENGTH_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return RangeLengthValidator;
        }),
        multi: true
      };

      var RangeLengthValidator = /*#__PURE__*/function () {
        function RangeLengthValidator() {
          _classCallCheck(this, RangeLengthValidator);
        }

        _createClass(RangeLengthValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = rangeLength(this.rangeLength);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return RangeLengthValidator;
      }();

      RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) {
        return new (t || RangeLengthValidator)();
      };

      RangeLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: RangeLengthValidator,
        selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]],
        inputs: {
          rangeLength: "rangeLength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], RangeLengthValidator.prototype, "rangeLength", void 0);
      var URL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return UrlValidator;
        }),
        multi: true
      };

      var UrlValidator = /*#__PURE__*/function () {
        function UrlValidator() {
          _classCallCheck(this, UrlValidator);
        }

        _createClass(UrlValidator, [{
          key: "validate",
          value: function validate(c) {
            return url(c);
          }
        }]);

        return UrlValidator;
      }();

      UrlValidator.ɵfac = function UrlValidator_Factory(t) {
        return new (t || UrlValidator)();
      };

      UrlValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: UrlValidator,
        selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([URL_VALIDATOR])]
      });
      var UUID_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return UUIDValidator;
        }),
        multi: true
      };

      var UUIDValidator = /*#__PURE__*/function () {
        function UUIDValidator() {
          _classCallCheck(this, UUIDValidator);
        }

        _createClass(UUIDValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = uuid(this.uuid);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return UUIDValidator;
      }();

      UUIDValidator.ɵfac = function UUIDValidator_Factory(t) {
        return new (t || UUIDValidator)();
      };

      UUIDValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: UUIDValidator,
        selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]],
        inputs: {
          uuid: "uuid"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([UUID_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], UUIDValidator.prototype, "uuid", void 0);
      var CustomValidators = {
        arrayLength: arrayLength,
        base64: base64,
        creditCard: creditCard,
        date: date,
        dateISO: dateISO,
        digits: digits,
        email: email,
        equal: equal,
        equalTo: equalTo,
        gt: gt,
        gte: gte,
        json: json,
        lt: lt,
        lte: lte,
        max: max,
        maxDate: maxDate,
        min: min,
        minDate: minDate,
        notEqual: notEqual,
        notEqualTo: notEqualTo,
        number: number,
        property: property,
        range: range,
        rangeLength: rangeLength,
        url: url,
        uuid: uuid
      };
      var CustomDirectives = [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator];

      var CustomFormsModule = function CustomFormsModule() {
        _classCallCheck(this, CustomFormsModule);
      };

      CustomFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CustomFormsModule
      });
      CustomFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function CustomFormsModule_Factory(t) {
          return new (t || CustomFormsModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArrayLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
            providers: [ARRAY_LENGTH_VALIDATOR]
          }]
        }], null, {
          arrayLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Base64Validator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
            providers: [BASE64_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreditCardValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
            providers: [CREDIT_CARD_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[date][formControlName],[date][formControl],[date][ngModel]',
            providers: [DATE_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateISOValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
            providers: [DATE_ISO_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DigitsValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
            providers: [DIGITS_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
            providers: [EMAIL_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
            providers: [EQUAL_VALIDATOR]
          }]
        }], null, {
          equal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualToValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
            providers: [EQUAL_TO_VALIDATOR]
          }]
        }], null, {
          equalTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
            providers: [GREATER_THAN_VALIDATOR]
          }]
        }], null, {
          gt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanEqualValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
            providers: [GREATER_THAN_EQUAL_VALIDATOR]
          }]
        }], null, {
          gte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JSONValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[json][formControlName],[json][formControl],[json][ngModel]',
            providers: [JSON_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
            providers: [LESS_THAN_VALIDATOR]
          }]
        }], null, {
          lt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanEqualValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
            providers: [LESS_THAN_EQUAL_VALIDATOR]
          }]
        }], null, {
          lte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[max][formControlName],[max][formControl],[max][ngModel]',
            providers: [MAX_VALIDATOR]
          }]
        }], null, {
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxDateValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
            providers: [MAX_DATE_VALIDATOR]
          }]
        }], null, {
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[min][formControlName],[min][formControl],[min][ngModel]',
            providers: [MIN_VALIDATOR]
          }]
        }], null, {
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinDateValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
            providers: [MIN_DATE_VALIDATOR]
          }]
        }], null, {
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
            providers: [NOT_EQUAL_VALIDATOR]
          }]
        }], null, {
          notEqual: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualToValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
            providers: [NOT_EQUAL_TO_VALIDATOR]
          }]
        }], null, {
          notEqualTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumberValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[number][formControlName],[number][formControl],[number][ngModel]',
            providers: [NUMBER_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PropertyValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[property][formControlName],[property][formControl],[property][ngModel]',
            providers: [PROPERTY_VALIDATOR]
          }]
        }], null, {
          property: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[range][formControlName],[range][formControl],[range][ngModel]',
            providers: [RANGE_VALIDATOR]
          }]
        }], null, {
          range: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
            providers: [RANGE_LENGTH_VALIDATOR]
          }]
        }], null, {
          rangeLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UrlValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[url][formControlName],[url][formControl],[url][ngModel]',
            providers: [URL_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UUIDValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
            providers: [UUID_VALIDATOR]
          }]
        }], null, {
          uuid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomFormsModule, {
          declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator],
          exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [CustomDirectives],
            exports: [CustomDirectives]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-custom-validators.js.map

      /***/

    },

    /***/
    "AgPr":
    /*!************************************************************!*\
      !*** ./src/app/auth/components/signup/signup.component.ts ***!
      \************************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function AgPr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-custom-validators */
      "8M/b");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function SignupComponent_small_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_small_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invaild email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_small_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_small_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_small_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords do not math.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_small_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You must agree to the terms and conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent() {
          _classCallCheck(this, SignupComponent);
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].equalTo(password));
            this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
              password: password,
              confirmPassword: confirmPassword,
              agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', function (control) {
                var agreed = control.value;

                if (!agreed) {
                  return {
                    agreed: true
                  };
                }

                return null;
              })
            });
          }
        }, {
          key: "signup",
          value: function signup() {
            var signupData = this.signupForm.value;
            console.log(signupData);
            this.submitButton.disabled = true;
            this.progressBar.mode = 'indeterminate';
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)();
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        viewQuery: function SignupComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
          }
        },
        decls: 35,
        vars: 12,
        consts: [[1, "page-wrap", "h-full"], [1, "session-form-hold"], ["mode", "determinate", 1, "session-progress"], [1, "text-center", "pt-8", "pb-16"], ["width", "60px", "src", "assets/images/egret.png", "alt", "", 1, "mb-8"], [1, "text-muted", "m-0"], [3, "formGroup", "ngSubmit"], [1, ""], [1, "full-width"], ["matInput", "", "type", "email", "name", "email", "placeholder", "Your Email", "value", "", 3, "formControl"], ["class", "form-error-msg", 4, "ngIf"], ["type", "password", "name", "password", "matInput", "", "placeholder", "Password", "value", "", 3, "formControl"], ["type", "password", "name", "confirmPassword", "matInput", "", "placeholder", "Confirm Password", "value", "", 3, "formControl"], [1, "pb-16"], ["name", "agreed", 1, "pb-16", 3, "formControl"], ["mat-raised-button", "", 1, "mat-primary", "full-width", "mb-16", 3, "disabled"], [1, "text-center"], ["routerLink", "../signin", 1, "text-center", "full-width"], [1, "form-error-msg"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lets get started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign up to use our service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() {
              return ctx.signup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_small_15_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignupComponent_small_16_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignupComponent_small_20_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignupComponent_small_24_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_small_25_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-checkbox", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "I have read and agree to the terms of service.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignupComponent_small_29_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign in to existing account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signupForm.controls["email"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["email"].hasError("required") && ctx.signupForm.controls["email"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["email"].hasError("email") && ctx.signupForm.controls["email"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signupForm.controls["password"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["password"].hasError("required") && ctx.signupForm.controls["password"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signupForm.controls["confirmPassword"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["confirmPassword"].hasError("required") && ctx.signupForm.controls["confirmPassword"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["confirmPassword"].hasError("equalTo"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signupForm.controls["agreed"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["agreed"].hasError("agreed") && ctx.signupForm.controls["agreed"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signupForm.invalid);
          }
        },
        directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
          }]
        }], function () {
          return [];
        }, {
          progressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]]
          }],
          submitButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "IkMf":
    /*!************************************************************!*\
      !*** ./src/app/auth/components/signin/signin.component.ts ***!
      \************************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function IkMf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/services/app-loader/app-loader.service */
      "3sEA");
      /* harmony import */


      var _shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/store/auth/auth.actions */
      "C9XJ");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc"); //Auth service
      //Material modules


      function SigninComponent_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
        }
      }

      function SigninComponent_small_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SigninComponent_small_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(jwtAuth, egretLoader, router, route, store, auth) {
          _classCallCheck(this, SigninComponent);

          this.jwtAuth = jwtAuth;
          this.egretLoader = egretLoader;
          this.router = router;
          this.route = route;
          this.store = store;
          this.auth = auth;
          this.errorMsg = '';
          this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              //Placeholder
              //email: new FormControl('shamskhalil@gmail.com', Validators.required),
              //password: new FormControl('shamsnet', Validators.required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.autoSignIn();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubscribeAll.next();

            this._unsubscribeAll.complete();
          }
        }, {
          key: "signin",
          value: function signin() {
            var _this = this;

            //const signinData = this.signinForm.value
            this.submitButton.disabled = true;
            this.progressBar.mode = 'indeterminate';
            this.auth.login(this.signinForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res.payload;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (_ref) {
              var token = _ref.token,
                  user = _ref.user;

              _this.store.dispatch(Object(app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_11__["loginSuccess"])({
                token: token,
                user: user
              }));
            })).subscribe(function (res) {
              //console.log(res)
              _this.router.navigateByUrl('dashboard');
            }, function (err) {
              console.log(err);
            }); //this.jwtAuth.signin(signinData.username, signinData.password)
            //  .subscribe(response => {
            //    this.router.navigateByUrl(this.jwtAuth.return);
            //  }, err => {
            //    this.submitButton.disabled = false;
            //    this.progressBar.mode = 'determinate';
            //    this.errorMsg = err.message;
            //    // console.log(err);
            //  })
          }
        }, {
          key: "autoSignIn",
          value: function autoSignIn() {
            var _this2 = this;

            if (this.jwtAuth["return"] === '/') {
              return;
            }

            this.egretLoader.open("Automatically Signing you in! \n Return url: ".concat(this.jwtAuth["return"].substring(0, 20), "..."), {
              width: '320px'
            });
            setTimeout(function () {
              _this2.signin();

              console.log('autoSignIn');

              _this2.egretLoader.close();
            }, 5000);
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_9__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        viewQuery: function SigninComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
          }
        },
        decls: 31,
        vars: 7,
        consts: [[1, "page-wrap", "h-full"], [1, "session-form-hold"], ["mode", "determinate", 1, "session-progress"], [1, "text-center", "pt-8", "pb-16"], ["width", "60px", "src", "assets/images/egret.png", "alt", ""], [1, "text-muted", "m-0"], ["class", "text-center", 4, "ngIf"], [3, "formGroup"], [1, ""], [1, "full-width"], ["matInput", "", "name", "email", "type", "email", "placeholder", "email", "required", "", "value", "", 3, "formControl"], ["class", "form-error-msg", 4, "ngIf"], ["type", "password", "name", "password", "matInput", "", "placeholder", "Password", "required", "", "value", "", 3, "formControl"], ["mat-raised-button", "", 1, "mat-primary", "full-width", "mb-16", 3, "disabled", "click"], [1, "text-center"], ["routerLink", "../forgot-password", 1, "mat-primary", "text-center", "full-width"], ["fxFlex", ""], ["routerLink", "../signup", 1, "mat-primary", "text-center", "full-width"], [1, "text-red"], [1, "form-error-msg"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign in to your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SigninComponent_p_9_Template, 3, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SigninComponent_small_16_Template, 2, 0, "small", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SigninComponent_small_22_Template, 2, 0, "small", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_23_listener() {
              return ctx.signin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Forgot password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create a new account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signinForm.controls["email"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signinForm.controls["email"].hasError("required") && ctx.signinForm.controls["email"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signinForm.controls["password"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signinForm.controls["password"].hasError("required") && ctx.signinForm.controls["password"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signinForm.invalid);
          }
        },
        directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_9__["JwtAuthService"]
          }, {
            type: _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, {
          progressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]]
          }],
          submitButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]]
          }]
        });
      })();
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
    "Wwh5":
    /*!******************************************************************************!*\
      !*** ./src/app/auth/components/forgot-password/forgot-password.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function Wwh5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent() {
          _classCallCheck(this, ForgotPasswordComponent);
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitEmail",
          value: function submitEmail() {
            this.submitButton.disabled = true;
            this.progressBar.mode = 'indeterminate';
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)();
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        viewQuery: function ForgotPasswordComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
          }
        },
        decls: 0,
        vars: 0,
        template: function ForgotPasswordComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
          }]
        }], function () {
          return [];
        }, {
          progressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]]
          }],
          submitButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./auth-routing.module */
      "6epW");
      /* harmony import */


      var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/signin/signin.component */
      "IkMf");
      /* harmony import */


      var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/signup/signup.component */
      "AgPr");
      /* harmony import */


      var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/forgot-password/forgot-password.component */
      "Wwh5"); //Material Module
      //FlexLayout Module


      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
          }]
        }], null, null);
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
//# sourceMappingURL=auth-auth-module-es5.js.map