(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"app-container\">\n  <div class=\"swiper-container\">\n    <!-- Additional required wrapper -->\n    <div class=\"swiper-wrapper\">\n        <!-- Slides -->\n        <div class=\"swiper-slide\">\n          <app-ranking></app-ranking>\n        </div>\n        <div class=\"swiper-slide\">\n          <app-goals></app-goals>\n        </div>\n    </div>\n      <!-- If we need navigation buttons -->\n    <div class=\"swiper-button-prev\"></div>\n    <div class=\"swiper-button-next\"></div>  \n  </div>\n</div>\n\n  \n  \n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/goals/goals.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/goals/goals.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"goals-container\">\n    <h2>Goals</h2>\n    <div class=\"days-list\">\n    <span *ngFor=\"let dayOfWeek of weekdays\" [ngClass]=\"{'selected-day': dayOfWeek.selected}\" (click)=\"selectDay(dayOfWeek)\">\n        {{dayOfWeek.dayName}}\n    </span>\n    </div>\n    <input type=\"text\" #goalName class=\"goal-name\" placeholder=\"type a goal\"/>\n    <a class=\"add-button\" (click)=\"addGoal(goalName.value)\">\n        <img src=\"https://cchaves13.github.io/assets/plus-icon.svg\" />\n    </a>\n\n    <div class=\"swiper-container\">\n        <!-- Additional required wrapper -->\n        <div class=\"swiper-wrapper\">\n            <!-- Slides -->\n            <div class=\"swiper-slide\">\n                <h3>Monday</h3>\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                Goal\n                            </th>\n                            <th> Done?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let goal of mondayGoals\">\n                            <td>{{goal.name}}</td>\n                            <td>\n                                <div class=\"completo-box\" [ngClass]=\"{'goalCompleted':goal.completed}\" (click)=\"completeGoal(goal)\"></div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"swiper-slide\">\n                <h3>Tuesday</h3>\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                Goal\n                            </th>\n                            <th> Done?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let goal of tuesdayGoals\">\n                            <td>{{goal.name}}</td>\n                            <td>\n                                <div class=\"completo-box\" [ngClass]=\"{'goalCompleted':goal.completed}\" (click)=\"completeGoal(goal)\"></div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>       \n            <div class=\"swiper-slide\">\n                <h3>Wednesday</h3>\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                Goal\n                            </th>\n                            <th> Done?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let goal of wednesdayGoals\">\n                            <td>{{goal.name}}</td>\n                            <td>\n                                <div class=\"completo-box\" [ngClass]=\"{'goalCompleted':goal.completed}\" (click)=\"completeGoal(goal)\"></div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"swiper-slide\">\n                <h3>Thursday</h3>\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                Goal\n                            </th>\n                            <th> Done?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let goal of thursdayGoals\">\n                            <td>{{goal.name}}</td>\n                            <td>\n                                <div class=\"completo-box\" [ngClass]=\"{'goalCompleted':goal.completed}\" (click)=\"completeGoal(goal)\"></div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"swiper-slide\">\n                <h3>Friday</h3>\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                Goal\n                            </th>\n                            <th> Done?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let goal of fridayGoals\">\n                            <td>{{goal.name}}</td>\n                            <td>\n                                <div class=\"completo-box\" [ngClass]=\"{'goalCompleted':goal.completed}\" (click)=\"completeGoal(goal)\"></div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"swiper-slide\">\n                <h3>Saturday</h3>\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                Goal\n                            </th>\n                            <th> Done?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let goal of saturdayGoals\">\n                            <td>{{goal.name}}</td>\n                            <td>\n                                <div class=\"completo-box\" [ngClass]=\"{'goalCompleted':goal.completed}\" (click)=\"completeGoal(goal)\"></div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"swiper-slide\">\n                <h3>Sunday</h3>\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                Goal\n                            </th>\n                            <th> Done?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let goal of sundayGoals\">\n                            <td>{{goal.name}}</td>\n                            <td>\n                                <div class=\"completo-box\" [ngClass]=\"{'goalCompleted':goal.completed}\" (click)=\"completeGoal(goal)\"></div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>   \n    \n        <!-- If we need navigation buttons -->\n        <div class=\"swiper-button-prev\"></div>\n        <div class=\"swiper-button-next\"></div>    \n       \n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ranking/ranking.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ranking/ranking.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ranking-container\">    \n    <h2>\n        Ranking\n    </h2>\n    <table>\n        <thead>\n            <tr>\n                <th>Top</th>\n                <th>Player</th>\n                <th>Points</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let player of playerList; let i = index\"> \n                <td>{{i+1}}</td>\n                <td>{{player.playerName}}</td>\n                <td>{{player.points}}</td>\n            </tr>\n        </tbody>\n    </table>\n    <div class=\"save-player\" *ngIf=\"!playerSaved\">\n        <input type=\"text\" #playerName class=\"goal-name\" placeholder=\"type your nickname\"/>\n        <a class=\"add-button\" (click)=\"addPlayer(playerName.value)\">\n            <img src=\"https://cchaves13.github.io/goals/assets/save-icon.svg\"/>\n        </a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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



var routes = [];
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-button-next, .swiper-button-prev {\n  top: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxGYWJpYW5cXGdvYWxzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItYnV0dG9uLW5leHQsIC5zd2lwZXItYnV0dG9uLXByZXZ7XHJcbiAgICB0b3A6IDEyJTtcclxufSIsIi5zd2lwZXItYnV0dG9uLW5leHQsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICB0b3A6IDEyJTtcbn0iXX0= */");

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(db) {
        this.title = 'goals';
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");
/* harmony import */ var _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/goals/goals.component */ "./src/app/components/goals/goals.component.ts");
/* harmony import */ var _components_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ranking/ranking.component */ "./src/app/components/ranking/ranking.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_9__["GoalsComponent"],
                _components_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_10__["RankingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["StorageServiceModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/goals/goals.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/goals/goals.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".goals-container {\n  width: 80%;\n  display: block;\n  margin: auto;\n}\n\n.days-list {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.days-list span {\n  display: inline-block;\n  width: auto;\n  padding: 2px;\n  border: 2px solid #1C6EA4;\n  border-radius: 40px;\n  margin: 3px;\n  width: 25px;\n  font-size: 12px;\n  text-align: center;\n  font-family: \"Baloo Bhaina 2\";\n  color: #fff;\n}\n\n.days-list .selected-day {\n  background-color: #1C6EA4;\n  color: #fff;\n}\n\n.goal-name {\n  border: 5px #1C6EA4 solid;\n  padding: 5px;\n  border-radius: 2px;\n  width: 70%;\n  font-family: \"Baloo Bhaina 2\";\n}\n\n.add-button {\n  padding: 7px;\n  margin-left: 10px;\n  width: 10%;\n  background-color: #1fbba6;\n  border-radius: 3px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.add-button img {\n  width: 30px;\n  height: 32px;\n  display: block;\n  margin: auto;\n}\n\n.swiper-container {\n  margin-top: 30px;\n}\n\n.swiper-button-next:after, .swiper-button-prev:after {\n  font-size: 25px;\n}\n\n.swiper-button-next, .swiper-button-prev {\n  top: 16%;\n}\n\nh2, h3 {\n  text-align: center;\n}\n\n.completo-box {\n  width: 20px;\n  height: 20px;\n  border: 1px solid #1C6EA4;\n}\n\n.goalCompleted {\n  background-color: #1fbba6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb2Fscy9DOlxcUHJvamVjdHNcXEZhYmlhblxcZ29hbHMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdvYWxzXFxnb2Fscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nb2Fscy9nb2Fscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREFJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0VSOztBRENJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQ1I7O0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRko7O0FETUE7RUFDSSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtBQ0hKOztBREtBO0VBQ0ksUUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvYWxzL2dvYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvYWxzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmRheXMtbGlzdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzFDNkVBNDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBCaGFpbmEgMic7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdGVkLWRheXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUM2RUE0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5nb2FsLW5hbWV7XHJcbiAgICBib3JkZXI6IDVweCAjMUM2RUE0IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gQmhhaW5hIDInO1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmJiYTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cclxufVxyXG5cclxuLmFkZC1idXR0b24gaW1ne1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5zd2lwZXItYnV0dG9uLW5leHQsIC5zd2lwZXItYnV0dG9uLXByZXYge1xyXG4gICAgdG9wOiAxNiU7XHJcbn1cclxuXHJcbmgyLCBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbXBsZXRvLWJveHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFDNkVBNDtcclxufVxyXG5cclxuLmdvYWxDb21wbGV0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZiYmE2O1xyXG59XHJcblxyXG4iLCIuZ29hbHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmRheXMtbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5kYXlzLWxpc3Qgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzFDNkVBNDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgbWFyZ2luOiAzcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gQmhhaW5hIDJcIjtcbiAgY29sb3I6ICNmZmY7XG59XG4uZGF5cy1saXN0IC5zZWxlY3RlZC1kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUM2RUE0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmdvYWwtbmFtZSB7XG4gIGJvcmRlcjogNXB4ICMxQzZFQTQgc29saWQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogNzAlO1xuICBmb250LWZhbWlseTogXCJCYWxvbyBCaGFpbmEgMlwiO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZmJiYTY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uYWRkLWJ1dHRvbiBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zd2lwZXItYnV0dG9uLW5leHQsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICB0b3A6IDE2JTtcbn1cblxuaDIsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29tcGxldG8tYm94IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFDNkVBNDtcbn1cblxuLmdvYWxDb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZiYmE2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/goals/goals.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/goals/goals.component.ts ***!
  \*****************************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");





var GoalsComponent = /** @class */ (function () {
    function GoalsComponent(db, storage) {
        var _this = this;
        this.db = db;
        this.storage = storage;
        this.weekdays = [
            { dayNumber: 1, dayName: "Mon", selected: true },
            { dayNumber: 2, dayName: "Tues", selected: false },
            { dayNumber: 3, dayName: "Wed", selected: false },
            { dayNumber: 4, dayName: "Thrs", selected: false },
            { dayNumber: 5, dayName: "Fri", selected: false },
            { dayNumber: 6, dayName: "Sat", selected: false },
            { dayNumber: 7, dayName: "Sun", selected: false }
        ];
        this.mondayGoals = [];
        this.tuesdayGoals = [];
        this.wednesdayGoals = [];
        this.thursdayGoals = [];
        this.fridayGoals = [];
        this.saturdayGoals = [];
        this.sundayGoals = [];
        this.playerId = "";
        if (storage.get("currentPlayer")) {
            this.playerId = storage.get("currentPlayer").playerKey;
            this.testingArray = db.list("/goals", function (ref) { return ref.orderByChild("playerId").equalTo(_this.playerId); });
            this.testingArray.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
                return changes.map(function (c) {
                    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val()));
                });
            })).subscribe(function (result) {
                console.log({ queryResult: result });
                _this.goalsArray = result;
                _this.mondayGoals = _this.goalsArray.filter(function (x) { return x.dayOfWeek == 1; });
                _this.tuesdayGoals = _this.goalsArray.filter(function (x) { return x.dayOfWeek == 2; });
                _this.wednesdayGoals = _this.goalsArray.filter(function (x) { return x.dayOfWeek == 3; });
                _this.thursdayGoals = _this.goalsArray.filter(function (x) { return x.dayOfWeek == 4; });
                _this.fridayGoals = _this.goalsArray.filter(function (x) { return x.dayOfWeek == 5; });
                _this.saturdayGoals = _this.goalsArray.filter(function (x) { return x.dayOfWeek == 6; });
                _this.sundayGoals = _this.goalsArray.filter(function (x) { return x.dayOfWeek == 7; });
            });
        }
    }
    GoalsComponent.prototype.ngOnInit = function () {
    };
    GoalsComponent.prototype.selectDay = function (dayOfWeek) {
        this.weekdays.forEach(function (item) {
            if (item.dayNumber == dayOfWeek.dayNumber) {
                item.selected = !item.selected;
            }
        });
    };
    GoalsComponent.prototype.addGoal = function (goalName) {
        var _this = this;
        var selectedDays = this.weekdays.filter(function (x) { return x.selected; });
        selectedDays.forEach(function (day) {
            var goalObject = {
                name: goalName,
                playerId: _this.playerId,
                dayOfWeek: day.dayNumber
            };
            _this.db.list("goals").push(goalObject);
            _this.goalName = "";
        });
    };
    GoalsComponent.prototype.completeGoal = function (goal) {
        console.log({ goalToUpdate: goal });
        goal.completed = !goal.completed;
        this.db.list('goals').update(goal.key, goal);
    };
    GoalsComponent.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"],] }] }
    ]; };
    GoalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goals',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/goals/goals.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goals.component.scss */ "./src/app/components/goals/goals.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]))
    ], GoalsComponent);
    return GoalsComponent;
}());



/***/ }),

/***/ "./src/app/components/ranking/ranking.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/ranking/ranking.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ranking-container {\n  width: 80%;\n  display: block;\n  margin: auto;\n}\n\nh3, h2 {\n  text-align: center;\n}\n\ntable {\n  color: #fff;\n}\n\n.add-button {\n  padding: 7px;\n  margin-left: 10px;\n  width: 10%;\n  background-color: #1fbba6;\n  border-radius: 3px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.goal-name {\n  border: 5px #1C6EA4 solid;\n  padding: 5px;\n  border-radius: 2px;\n  width: 70%;\n  font-family: \"Baloo Bhaina 2\";\n}\n\n.add-button img {\n  width: 30px;\n  height: 32px;\n  display: block;\n  margin: auto;\n}\n\n.save-player {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYW5raW5nL0M6XFxQcm9qZWN0c1xcRmFiaWFuXFxnb2Fscy9zcmNcXGFwcFxcY29tcG9uZW50c1xccmFua2luZ1xccmFua2luZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yYW5raW5nL3JhbmtpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQUo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yYW5raW5nL3JhbmtpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFua2luZy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmgzLCBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFkZC1idXR0b257XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZiYmE2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuXHJcbn1cclxuXHJcbi5nb2FsLW5hbWV7XHJcbiAgICBib3JkZXI6IDVweCAjMUM2RUE0IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gQmhhaW5hIDInO1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiBpbWd7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zYXZlLXBsYXllcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7O1xyXG59IiwiLnJhbmtpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaDMsIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZmJiYTY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uZ29hbC1uYW1lIHtcbiAgYm9yZGVyOiA1cHggIzFDNkVBNCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiA3MCU7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIEJoYWluYSAyXCI7XG59XG5cbi5hZGQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zYXZlLXBsYXllciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/ranking/ranking.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/ranking/ranking.component.ts ***!
  \*********************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");






var RankingComponent = /** @class */ (function () {
    function RankingComponent(db, storage) {
        var _this = this;
        this.db = db;
        this.storage = storage;
        this.playerList = [];
        this.goalsList = [];
        this.storageKey = "currentPlayer";
        this.playerSaved = false;
        this.playerSaved = this.storage.get(this.storageKey) ? true : false;
        db.list("/goals")
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val()));
            });
        })).subscribe(function (result) {
            _this.goalsList = result;
            _this.getPlayers();
        });
    }
    RankingComponent.prototype.getPlayers = function () {
        var _this = this;
        this.db.list("/players")
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val()));
            });
        })).subscribe(function (result) {
            _this.playerList = [];
            result.forEach(function (player) {
                _this.playerList.push({
                    "playerName": player.nickname,
                    "points": _this.getPoints(player.key)
                });
            });
            _this.playerList.sort(function (a, b) {
                return b.points - a.points;
            });
        });
    };
    RankingComponent.prototype.getPoints = function (playerKey) {
        var totalPlayerPoints = 0;
        console.log({ playerKey: playerKey,
            goals: this.goalsList
        });
        this.goalsList.forEach(function (goal) {
            if (goal.completed && goal.playerId == playerKey)
                totalPlayerPoints += 5;
        });
        return totalPlayerPoints;
    };
    RankingComponent.prototype.addPlayer = function (playerName) {
        var _this = this;
        // push new task to array
        if (!this.playerList.find(function (x) { return x.nickname == playerName; })) {
            this.db.list("/players").push({ nickname: playerName }).then(function (snapshot) {
                if (!_this.storage.get(_this.storageKey))
                    _this.storage.set(_this.storageKey, {
                        nickname: playerName,
                        playerKey: snapshot.key
                    });
                window.location.reload();
            });
        }
        this.playerSaved = true;
    };
    RankingComponent.prototype.ngOnInit = function () {
    };
    RankingComponent.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"],] }] }
    ]; };
    RankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ranking',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ranking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ranking/ranking.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ranking.component.scss */ "./src/app/components/ranking/ranking.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]))
    ], RankingComponent);
    return RankingComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAy2tR6ny_awb3X_e4klLZqXCPf52tUuWg",
        authDomain: "goals-a6813.firebaseapp.com",
        databaseURL: "https://goals-a6813.firebaseio.com",
        projectId: "goals-a6813",
        storageBucket: "goals-a6813.appspot.com",
        messagingSenderId: "1038270521850",
        appId: "1:1038270521850:web:ea3eab35794aa34d874443"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Fabian\goals\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map