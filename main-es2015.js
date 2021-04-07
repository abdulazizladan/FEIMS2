(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+5re":
/*!********************************************!*\
  !*** ./src/app/shared/inmemory-db/todo.ts ***!
  \********************************************/
/*! exports provided: Todo, TodoTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTag", function() { return TodoTag; });
class Todo {
}
Todo.todoList = [
    {
        id: 1,
        title: "API problem",
        note: "API is malfunctioning. kindly fix it",
        important: true,
        starred: true,
        done: false,
        read: false,
        selected: false,
        startDate: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        tag: [1, 2]
    },
    {
        id: 2,
        title: "Mobile problem",
        note: "Mobile is malfunctioning. fix it",
        important: false,
        starred: false,
        done: true,
        read: true,
        selected: false,
        startDate: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        tag: [2]
    },
    {
        id: 3,
        title: "API problem",
        note: "API is malfunctioning. fix it",
        important: false,
        starred: false,
        done: true,
        read: false,
        selected: false,
        startDate: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        tag: [1]
    },
    {
        id: 4,
        title: "API problem",
        note: "API is malfunctioning. fix it",
        important: false,
        starred: false,
        done: false,
        read: true,
        selected: false,
        startDate: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        tag: [1, 2, 3]
    }
];
// ============================================
class TodoTag {
}
TodoTag.tag = [
    {
        id: 1,
        name: "frontend"
    },
    {
        id: 2,
        name: "backend"
    },
    {
        id: 3,
        name: "API"
    },
    {
        id: 4,
        name: "issue"
    },
    {
        id: 5,
        name: "mobile"
    }
];


/***/ }),

/***/ "+803":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/route-parts.service */ "vafs");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "rmxa");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");











function BreadcrumbComponent_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r3.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, part_r3.breadcrumb));
} }
function BreadcrumbComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_1_li_2_Template, 4, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.routeParts);
} }
function BreadcrumbComponent_div_2_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r6.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, part_r6.breadcrumb));
} }
function BreadcrumbComponent_div_2_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_2_ul_4_li_1_Template, 4, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.routeParts);
} }
function BreadcrumbComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbComponent_div_2_ul_4_Template, 2, 1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.routeParts[ctx_r1.routeParts.length - 1] == null ? null : ctx_r1.routeParts[ctx_r1.routeParts.length - 1].breadcrumb), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.routeParts.length > 1);
} }
class BreadcrumbComponent {
    // public isEnabled: boolean = true;
    constructor(router, routePartsService, activeRoute, layout) {
        this.router = router;
        this.routePartsService = routePartsService;
        this.activeRoute = activeRoute;
        this.layout = layout;
        this.routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
        this.routerEventSub = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((routeChange) => {
            this.routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
            // generate url from parts
            this.routeParts.reverse().map((item, i) => {
                item.breadcrumb = this.parseText(item);
                item.urlSegments.forEach((urlSegment, j) => {
                    if (j === 0) {
                        return (item.url = `${urlSegment.path}`);
                    }
                    item.url += `/${urlSegment.path}`;
                });
                if (i === 0) {
                    return item;
                }
                // prepend previous part to current part
                item.url = `${this.routeParts[i - 1].url}/${item.url}`;
                return item;
            });
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    }
    parseText(part) {
        if (!part.breadcrumb) {
            return '';
        }
        part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, (a, b) => {
            const r = part.params[b];
            return typeof r === 'string' ? r : a;
        });
        return part.breadcrumb;
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 3, vars: 2, consts: [[1, "container-dynamic"], ["class", "breadcrumb-bar", 4, "ngIf"], ["class", "breadcrumb-title", 4, "ngIf"], [1, "breadcrumb-bar"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "breadcrumb-title"], [1, "bc-title"], ["class", "breadcrumb", 4, "ngIf"], [1, "text-muted", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_2_Template, 5, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "title");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "+Iyy":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 2, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/1WF":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/egret-side-nav-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: EgretSideNavToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSideNavToggleDirective", function() { return EgretSideNavToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");






class EgretSideNavToggleDirective {
    constructor(mediaObserver, sideNav) {
        this.mediaObserver = mediaObserver;
        this.sideNav = sideNav;
    }
    ngOnInit() {
        this.initSideNav();
    }
    ngOnDestroy() {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    }
    updateSidenav() {
        var self = this;
        setTimeout(() => {
            self.sideNav.opened = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    }
    initSideNav() {
        this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm');
        // console.log(this.isMobile)
        this.updateSidenav();
        this.screenSizeWatcher = this.mediaObserver.media$.subscribe((change) => {
            this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            this.updateSidenav();
        });
    }
}
EgretSideNavToggleDirective.ɵfac = function EgretSideNavToggleDirective_Factory(t) { return new (t || EgretSideNavToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], 11)); };
EgretSideNavToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretSideNavToggleDirective, selectors: [["", "EgretSideNavToggle", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSideNavToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[EgretSideNavToggle]'
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "/eqn":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/example-viewer/example-viewer.component.ts ***!
  \******************************************************************************/
/*! exports provided: EgretExampleViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretExampleViewerComponent", function() { return EgretExampleViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _directives_egret_highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/egret-highlight.directive */ "Gf25");







const _c0 = ["exampleContainer"];
const _c1 = function () { return ["xml"]; };
// import { EXAMPLE_COMPONENTS } from "assets/examples/examples";
class EgretExampleViewerComponent {
    constructor(cfr) {
        this.cfr = cfr;
    }
    // Component ID
    set exampleId(exampleId) {
        if (exampleId) {
            this._exampleId = exampleId;
        }
        else {
            console.log("EXAMPLE ID MISSING");
        }
    }
    get exampleId() {
        return this._exampleId;
    }
    ngOnInit() {
        this.componentPath = this.path + this.exampleId + '/' + this.exampleId + '.component';
    }
    ngAfterViewInit() {
        if (!this.data) {
            console.log('EXAMPLE COMPONENT MISSING');
            return;
        }
        let componentFactory = this.cfr.resolveComponentFactory(this.data.component);
        this.exampleViewRef = this.exampleContainer.createComponent(componentFactory);
    }
    ngOnDestroy() {
        if (this.exampleViewRef) {
            this.exampleViewRef.destroy();
        }
    }
}
EgretExampleViewerComponent.ɵfac = function EgretExampleViewerComponent_Factory(t) { return new (t || EgretExampleViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
EgretExampleViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EgretExampleViewerComponent, selectors: [["egret-example-viewer"]], viewQuery: function EgretExampleViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.exampleContainer = _t.first);
    } }, inputs: { exampleId: "exampleId", data: "data", path: "path" }, decls: 28, vars: 6, consts: [[1, "mat-elevation-z1", "rounded", "overflow-hidden"], ["multi", "true", "displayMode", "flat", 1, "egret-example-viewer-accordion"], ["collapsedHeight", "48px", "expandedHeight", "48px", 1, "light-gray", "egret-example-viewer-header"], ["mat-button", "", "color", "warn"], [1, "example-viewer-tab-wrap"], [1, "mb-24"], ["label", "HTML"], ["id", "html", 1, "code-wrap"], ["egretHighlight", "", 3, "languages", "path"], ["label", "TS"], ["id", "ts", 1, "code-wrap"], ["egretHighlight", "", 3, "path"], ["label", "SCSS"], ["id", "scss", 1, "code-wrap"], ["expanded", "", 2, "position", "relative"], [1, "example-component", "pt-16"], ["exampleContainer", ""]], template: function EgretExampleViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "code", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-expansion-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("path", ctx.componentPath + ".html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", ctx.componentPath + ".ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", ctx.componentPath + ".scss");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _directives_egret_highlight_directive__WEBPACK_IMPORTED_MODULE_5__["EgretHighlightDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLXZpZXdlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretExampleViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "egret-example-viewer",
                templateUrl: "./example-viewer.component.html",
                styleUrls: ["./example-viewer.component.scss"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { exampleId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["exampleId"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }], path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['path']
        }], exampleContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['exampleContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abdulaziz/Documents/WIP/Developer/FEIMS2.0/src/main.ts */"zUnb");


/***/ }),

/***/ "0VKv":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "LFK6");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "rmxa");
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/customizer.service */ "hFtW");
/* harmony import */ var app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/theme.service */ "ETNk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _directives_egret_highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/egret-highlight.directive */ "Gf25");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");




















function CustomizerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.isCustomizerOpen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_div_1_mat_card_content_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "help");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("egretHighlight", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r4.layoutConf));
} }
function CustomizerComponent_div_1_mat_card_content_14_div_16_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_div_1_mat_card_content_14_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_1_mat_card_content_14_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const theme_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.changeTheme(theme_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizerComponent_div_1_mat_card_content_14_div_16_mat_icon_1_Template, 2, 0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", theme_r10.baseColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", theme_r10.isActive);
} }
function CustomizerComponent_div_1_mat_card_content_14_div_21_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_div_1_mat_card_content_14_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_1_mat_card_content_14_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const c_r14 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.customizer.changeSidebarColor(c_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizerComponent_div_1_mat_card_content_14_div_21_mat_icon_1_Template, 2, 0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color ", c_r14.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r14.active);
} }
function CustomizerComponent_div_1_mat_card_content_14_div_29_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_div_1_mat_card_content_14_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_1_mat_card_content_14_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const c_r18 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.customizer.changeFooterColor(c_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizerComponent_div_1_mat_card_content_14_div_29_mat_icon_1_Template, 2, 0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color ", c_r18.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r18.active);
} }
function CustomizerComponent_div_1_mat_card_content_14_mat_radio_button_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r22.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r22.name, " ");
} }
function CustomizerComponent_div_1_mat_card_content_14_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customize the template then copy configuration json.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Layouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.selectedLayout = $event; })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.changeLayoutStyle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Top Navigation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Side Navigation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Material Themes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustomizerComponent_div_1_mat_card_content_14_div_16_Template, 2, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sidebar colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CustomizerComponent_div_1_mat_card_content_14_div_21_Template, 2, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Footer Colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.isFooterFixed = $event; })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.layout.publishLayoutChange({ footerFixed: $event.checked }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fixed Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CustomizerComponent_div_1_mat_card_content_14_div_29_Template, 2, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.layoutConf.useBreadcrumb = $event; })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_change_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.toggleBreadcrumb($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Use breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Breadcrumb types");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-radio-group", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.layoutConf.breadcrumb = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Simple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Simple with title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-radio-group", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.selectedMenu = $event; })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_radio_group_change_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.changeSidenav($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CustomizerComponent_div_1_mat_card_content_14_mat_radio_button_47_Template, 2, 2, "mat-radio-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.perfectScrollbarEnabled = $event; })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_change_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.tooglePerfectScrollbar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Custom scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.isRTL = $event; })("change", function CustomizerComponent_div_1_mat_card_content_14_Template_mat_checkbox_change_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.toggleDir($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "RTL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selectedLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "side");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.egretThemes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.customizer.sidebarColors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isFooterFixed)("value", ctx_r5.selectedLayout !== "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.customizer.footerColors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.layoutConf.useBreadcrumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.layoutConf.breadcrumb)("disabled", !ctx_r5.layoutConf.useBreadcrumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "simple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selectedMenu)("disabled", ctx_r5.selectedLayout === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.sidenavTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.perfectScrollbarEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isRTL);
} }
function CustomizerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.viewMode = "options"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.viewMode = "json"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.isCustomizerOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomizerComponent_div_1_mat_card_content_13_Template, 9, 3, "mat-card-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomizerComponent_div_1_mat_card_content_14_Template, 54, 18, "mat-card-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.viewMode === "options" ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.viewMode === "json" ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.viewMode === "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.viewMode === "options");
} }
class CustomizerComponent {
    constructor(navService, layout, themeService, customizer, renderer) {
        this.navService = navService;
        this.layout = layout;
        this.themeService = themeService;
        this.customizer = customizer;
        this.renderer = renderer;
        this.isCustomizerOpen = false;
        this.viewMode = 'options';
        this.sidenavTypes = [
            {
                name: 'Default Menu',
                value: 'default-menu',
            },
            {
                name: 'Separator Menu',
                value: 'separator-menu',
            },
            {
                name: 'Icon Menu',
                value: 'icon-menu',
            },
        ];
        this.selectedMenu = 'icon-menu';
        this.isTopbarFixed = false;
        this.isFooterFixed = false;
        this.isRTL = false;
        this.perfectScrollbarEnabled = true;
    }
    ngOnInit() {
        this.layoutConf = this.layout.layoutConf;
        this.selectedLayout = this.layoutConf.navigationPos;
        this.isTopbarFixed = this.layoutConf.topbarFixed;
        this.isRTL = this.layoutConf.dir === 'rtl';
        this.egretThemes = this.themeService.egretThemes;
    }
    changeTheme(theme) {
        // this.themeService.changeTheme(theme);
        this.layout.publishLayoutChange({ matTheme: theme.name });
    }
    changeLayoutStyle(data) {
        this.layout.publishLayoutChange({ navigationPos: this.selectedLayout });
    }
    changeSidenav(data) {
        this.navService.publishNavigationChange(data.value);
    }
    toggleBreadcrumb(data) {
        this.layout.publishLayoutChange({ useBreadcrumb: data.checked });
    }
    toggleTopbarFixed(data) {
        this.layout.publishLayoutChange({ topbarFixed: data.checked });
    }
    toggleDir(data) {
        let dir = data.checked ? 'rtl' : 'ltr';
        this.layout.publishLayoutChange({ dir: dir });
    }
    tooglePerfectScrollbar(data) {
        this.layout.publishLayoutChange({ perfectScrollbar: this.perfectScrollbarEnabled });
    }
}
CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) { return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CustomizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizerComponent, selectors: [["app-customizer"]], decls: 2, vars: 2, consts: [["class", "handle", 4, "ngIf"], ["id", "app-customizer", 4, "ngIf"], [1, "handle"], ["mat-fab", "", "color", "primary", 3, "click"], [1, "spin", "text-white"], ["id", "app-customizer"], [1, "p-0"], [1, "m-0", "light-gray"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "card-title-text"], ["mat-flat-button", "", 3, "color", "click"], ["fxFlex", "15px"], ["fxFlex", ""], ["mat-icon-button", "", 1, "card-control", 3, "click"], ["style", "min-height: 100vh", 4, "ngIf"], [3, "perfectScrollbar", 4, "ngIf"], [2, "min-height", "100vh"], [3, "egretHighlight"], ["href", "http://demos.ui-lib.com/egret-doc/#layout", "target", "_blank", "mat-mini-fab", ""], [3, "perfectScrollbar"], [1, "pb-16", "mb-16", "border-bottom"], [1, "title", "text-muted"], ["fxLayout", "column", 3, "ngModel", "ngModelChange", "change"], [3, "value"], [1, "colors"], ["class", "color", 3, "background", "click", 4, "ngFor", "ngForOf"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "mb-16"], [3, "ngModel", "value", "ngModelChange", "change"], [3, "ngModel", "ngModelChange", "change"], [1, "text-muted"], ["fxLayout", "column", 3, "ngModel", "disabled", "ngModelChange"], [1, "pb-16", "pos-rel", "mb-16", "border-bottom"], ["fxLayout", "column", 3, "ngModel", "disabled", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pb-16"], [1, "color", 3, "click"], ["class", "active-icon", 4, "ngIf"], [1, "active-icon"], [3, "click"]], template: function CustomizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomizerComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizerComponent_div_1_Template, 15, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCustomizerOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCustomizerOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _directives_egret_highlight_directive__WEBPACK_IMPORTED_MODULE_10__["EgretHighlightDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: [".handle[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 99;\n}\n\n#app-customizer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  top: 0;\n  right: 0;\n  min-width: 180px;\n  max-width: 280px;\n  z-index: 999;\n}\n\n#app-customizer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0 0 1rem;\n}\n\n#app-customizer[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 0;\n}\n\n#app-customizer[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 2rem;\n  max-height: calc(100vh - 80px);\n}\n\n.pos-rel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 99;\n}\n\n.pos-rel[_ngcontent-%COMP%]   .olay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n\n.colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  border-radius: 50%;\n  margin: 8px;\n  text-align: center;\n  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.03);\n  cursor: pointer;\n}\n\n.colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   .active-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURFO0VBQ00seUJBQUE7RUFDQSw4QkFBQTtBQUdSOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2RUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFISTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUtOIiwiZmlsZSI6ImN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFuZGxlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHotaW5kZXg6IDk5O1xufVxuI2FwcC1jdXN0b21pemVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAxODBweDtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgei1pbmRleDogOTk5O1xuICAudGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCAwIDFyZW07XG4gIH1cbiAgLm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAubWF0LWNhcmQtY29udGVudCAge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAycmVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG4gICAgfVxufVxuLnBvcy1yZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICAub2xheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbn1cblxuLmNvbG9ycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmNvbG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMXB4IHJnYmEoMCwwLDAsLjA2KSwgMCAxcHggNHB4IHJnYmEoMCwwLDAsLjAzKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmFjdGl2ZS1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHRvcDogNnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBbZGlyPVwicnRsXCJdIHtcbi8vICAgLmhhbmRsZSB7fVxuLy8gICAjYXBwLWN1c3RvbWl6ZXIge1xuLy8gICAgIHJpZ2h0OiBhdXRvO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgIH1cbi8vIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customizer',
                templateUrl: './customizer.component.html',
                styleUrls: ['./customizer.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }, { type: app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"] }, { type: app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1lqc":
/*!*****************************************!*\
  !*** ./src/app/socket/socket.module.ts ***!
  \*****************************************/
/*! exports provided: SocketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketModule", function() { return SocketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.service */ "FRSv");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket */ "EShO");




class SocketModule {
    static forRoot(config) {
        return ({
            ngModule: SocketModule,
            providers: [
                {
                    provide: _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
                    useValue: new _socket__WEBPACK_IMPORTED_MODULE_2__["Socket"](config)
                }
            ]
        });
    }
}
SocketModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocketModule });
SocketModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocketModule_Factory(t) { return new (t || SocketModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();


/***/ }),

/***/ "1wtQ":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    apiUrl: 'http://ui-lib-demo-api.herokuapp.com',
    authRoles: {
        sa: ['SA'],
        admin: ['SA', 'Admin'],
        editor: ['SA', 'Admin', 'Editor'],
        user: ['SA', 'Admin', 'Editor', 'User'],
        guest: ['SA', 'Admin', 'Editor', 'User', 'Guest'] // Everyone has access
    }
};


/***/ }),

/***/ "30N5":
/*!********************************************************!*\
  !*** ./src/app/shared/services/match-media.service.ts ***!
  \********************************************************/
/*! exports provided: MatchMediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchMediaService", function() { return MatchMediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class MatchMediaService {
    constructor(mediaObserver) {
        this.mediaObserver = mediaObserver;
        this.onMediaChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.activeMediaQuery = '';
        this.init();
    }
    init() {
        this.mediaObserver.media$.subscribe((change) => {
            if (this.activeMediaQuery !== change.mqAlias) {
                this.activeMediaQuery = change.mqAlias;
                this.onMediaChange.next(change.mqAlias);
            }
        });
    }
}
MatchMediaService.ɵfac = function MatchMediaService_Factory(t) { return new (t || MatchMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"])); };
MatchMediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatchMediaService, factory: MatchMediaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchMediaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }]; }, null); })();


/***/ }),

/***/ "336X":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/*! exports provided: RelativeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function() { return RelativeTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class RelativeTimePipe {
    transform(value) {
        if (!(value instanceof Date))
            value = new Date(value);
        let seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }
}
RelativeTimePipe.ɵfac = function RelativeTimePipe_Factory(t) { return new (t || RelativeTimePipe)(); };
RelativeTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "relativeTime", type: RelativeTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelativeTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'relativeTime' }]
    }], null, null); })();


/***/ }),

/***/ "3BvT":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function() { return AppComfirmComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");






class AppComfirmComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
AppComfirmComponent.ɵfac = function AppComfirmComponent_Factory(t) { return new (t || AppComfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
AppComfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComfirmComponent, selectors: [["app-confirm"]], decls: 11, vars: 2, consts: [["matDialogTitle", "", 1, "mb-8"], ["mat-dialog-content", "", 1, "mb-16"], ["mat-dialog-actions", ""], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["fxFlex", ""], ["type", "button", "color", "accent", "mat-raised-button", "", 3, "click"]], template: function AppComfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_5_listener() { return ctx.dialogRef.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-confirm',
                template: `<h1 matDialogTitle class="mb-8">{{ data.title }}</h1>
    <div mat-dialog-content class="mb-16">{{ data.message }}</div>
    <div mat-dialog-actions>
    <button 
    type="button" 
    mat-raised-button
    color="primary" 
    (click)="dialogRef.close(true)">OK</button>
    &nbsp;
    <span fxFlex></span>
    <button 
    type="button"
    color="accent"
    mat-raised-button 
    (click)="dialogRef.close(false)">Cancel</button>
    </div>`,
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "3E2P":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/egret-notifications2/egret-notifications2.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EgretNotifications2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretNotifications2Component", function() { return EgretNotifications2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");



class EgretNotifications2Component {
    constructor() { }
    ngOnInit() {
    }
}
EgretNotifications2Component.ɵfac = function EgretNotifications2Component_Factory(t) { return new (t || EgretNotifications2Component)(); };
EgretNotifications2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EgretNotifications2Component, selectors: [["egret-notifications2"]], decls: 3, vars: 0, consts: [["mode", "over", "position", "end", 1, ""]], template: function EgretNotifications2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZ3JldC1ub3RpZmljYXRpb25zMi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretNotifications2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'egret-notifications2',
                templateUrl: './egret-notifications2.component.html',
                styleUrls: ['./egret-notifications2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3kSh":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
  \********************************************************************/
/*! exports provided: AppConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfirmService", function() { return AppConfirmService; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-confirm.component */ "3BvT");





class AppConfirmService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    confirm(data = {}) {
        data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef;
        dialogRef = this.dialog.open(_app_confirm_component__WEBPACK_IMPORTED_MODULE_2__["AppComfirmComponent"], {
            width: '380px',
            disableClose: true,
            data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed();
    }
}
AppConfirmService.ɵfac = function AppConfirmService_Factory(t) { return new (t || AppConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
AppConfirmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppConfirmService, factory: AppConfirmService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppConfirmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "3sEA":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.service.ts ***!
  \******************************************************************/
/*! exports provided: AppLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderService", function() { return AppLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _app_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-loader.component */ "5alQ");





class AppLoaderService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(title = 'Please wait', config = { width: '200px' }) {
        this.dialogRef = this.dialog.open(_app_loader_component__WEBPACK_IMPORTED_MODULE_2__["AppLoaderComponent"], { disableClose: true, backdropClass: 'light-backdrop' });
        this.dialogRef.updateSize(config.width);
        this.dialogRef.componentInstance.title = title;
        return this.dialogRef.afterClosed();
    }
    close() {
        if (this.dialogRef)
            this.dialogRef.close();
    }
}
AppLoaderService.ɵfac = function AppLoaderService_Factory(t) { return new (t || AppLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AppLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppLoaderService, factory: AppLoaderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "3slX":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/buildings/buildings.component.ts ***!
  \*******************************************************************/
/*! exports provided: BuildingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsComponent", function() { return BuildingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _add_building_add_building_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-building/add-building.component */ "6QsB");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _building_building_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../building/building.component */ "8ypg");










function BuildingsComponent_app_building_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-building", 5);
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", a_r1);
} }
class BuildingsComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.A = [
            {
                "name": "Mech001",
                "type": "Departmental building",
                "image": "./assets/img/03.jpg",
                "description": "Mechanical Engineering's departmental complex.",
                "repair_cost": 5000000,
                "id": 1
            },
            {
                "name": "LAB 001",
                "type": "Laboratory",
                "image": "./assets/img/02.jpg",
                "description": "Materials laboratory",
                "repair_cost": 5000,
                "id": 2
            },
            {
                "name": "LAB01",
                "type": "Laboratory",
                "image": "./assets/img/01.jpg",
                "description": "string",
                "repair_cost": 5000,
                "id": 3
            },
            {
                "name": "LAB01",
                "type": "Laboratory",
                "image": "./assets/img/04.png",
                "description": "string",
                "repair_cost": 5000,
                "id": 4
            },
            {
                "name": "LAB01",
                "type": "Laboratory",
                "image": "./assets/img/01.jpg",
                "description": "string",
                "repair_cost": 5000,
                "id": 5
            },
            {
                "name": "LAB01",
                "type": "Laboratory",
                "image": "./assets/img/01.jpg",
                "description": "string",
                "repair_cost": 5000,
                "id": 6
            }
        ];
    }
    ngOnInit() {
    }
    openAddDialog() {
        const dialogRef = this.dialog.open(_add_building_add_building_component__WEBPACK_IMPORTED_MODULE_2__["AddBuildingComponent"], {
            minWidth: '400px',
            data: {}
        });
    }
}
BuildingsComponent.ɵfac = function BuildingsComponent_Factory(t) { return new (t || BuildingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
BuildingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildingsComponent, selectors: [["app-buildings"]], decls: 8, vars: 1, consts: [[2, "padding", "10px"], ["fxFlex", "1 1 auto"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout.xs", "column", "fxLayoutGap", "5px grid", "fxLayout.gt-xs", "row wrap", 2, "padding", "20px"], ["fxFlexAlign.gt-xs", "stretch", "fxFlex.xs", "100%", "fxFlex.gt-xs", "400px", 3, "data", 4, "ngFor", "ngForOf"], ["fxFlexAlign.gt-xs", "stretch", "fxFlex.xs", "100%", "fxFlex.gt-xs", "400px", 3, "data"]], template: function BuildingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuildingsComponent_Template_button_click_2_listener() { return ctx.openAddDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add building ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BuildingsComponent_app_building_7_Template, 1, 1, "app-building", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.A);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _building_building_component__WEBPACK_IMPORTED_MODULE_7__["BuildingComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexAlignDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWlsZGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buildings',
                templateUrl: './buildings.component.html',
                styleUrls: ['./buildings.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "49de":
/*!**************************************************!*\
  !*** ./src/app/views/charts/charts.component.ts ***!
  \**************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "hrfs");






class ChartsComponent {
    constructor() {
        this.sharedChartOptions = {
            responsive: true,
            // maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        this.chartColors = [{
                backgroundColor: '#1565c0',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: '#1e88e5',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: '#64b5f6',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        /*
        * Bar Chart
        */
        this.barChartLabels = [
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [
                    500000,
                    650000,
                    175000,
                    580000,
                    425000,
                    455000,
                    527000
                ],
                label: 'Budget',
                borderWidth: 0
            },
            {
                data: [
                    154000,
                    140000,
                    450000,
                    433000,
                    764000,
                    223000,
                    456000
                ],
                label: 'Repairs',
                borderWidth: 0
            },
            {
                data: [
                    254000,
                    740000,
                    150000,
                    233000,
                    564000,
                    423000,
                    756000
                ],
                label: 'Purchase',
                borderWidth: 0
            }
        ];
        this.barChartOptions = Object.assign({
            scaleShowVerticalLines: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }]
            }
        }, this.sharedChartOptions);
        // Horizontal Bar Chart
        this.barChartHorizontalType = 'horizontalBar';
        this.barChartHorizontalOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }]
            }
        }, this.sharedChartOptions);
        // Bar Chart Stacked
        this.barChartStackedOptions = Object.assign({
            scaleShowVerticalLines: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true
                    }]
            }
        }, this.sharedChartOptions);
        /*
        * Line Chart Options
        */
        this.lineChartData = [{
                data: [5, 5, 7, 8, 4, 5, 5],
                label: 'Series A',
                borderWidth: 1
            }, {
                data: [5, 4, 4, 3, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1
            }];
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.lineChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.sharedChartOptions);
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartPointsData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }];
        this.lineChartPointsOptions = Object.assign({
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            },
            elements: {
                point: {
                    pointStyle: 'rectRot',
                }
            }
        }, this.sharedChartOptions);
        // Bubble Chart
        this.bubbleChartData = [{
                data: [{
                        x: 4,
                        y: 4,
                        r: 15,
                    }, {
                        x: 6,
                        y: 12,
                        r: 30,
                    }, {
                        x: 5,
                        y: 4,
                        r: 10,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 7,
                        y: 8,
                        r: 4,
                    }, {
                        x: 3,
                        y: 13,
                        r: 14,
                    }, {
                        x: 5,
                        y: 6,
                        r: 8,
                    }, {
                        x: 7,
                        y: 2,
                        r: 10,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        this.bubbleChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.bubbleChartLegend = true;
        this.bubbleChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.sharedChartOptions);
        // Doughnut
        this.doughnutChartColors = [{
                backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
            }];
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = Object.assign({
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }, this.sharedChartOptions);
        /*
        * Radar Chart Options
        */
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A', borderWidth: 1 },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', borderWidth: 1 }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: 'rgba(36, 123, 160, 0.2)',
                borderColor: 'rgba(36, 123, 160, 0.6)',
                pointBackgroundColor: 'rgba(36, 123, 160, 0.8)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(36, 123, 160, 0.8)'
            },
            {
                backgroundColor: 'rgba(244, 67, 54, 0.2)',
                borderColor: 'rgba(244, 67, 54, .8)',
                pointBackgroundColor: 'rgba(244, 67, 54, .8)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(244, 67, 54, 1)'
            }
        ];
        /*
        * Pie Chart Options
        */
        this.pieChartLabels = [
            'Good condition',
            'Repairable',
            'Abandoned'
        ];
        this.pieChartData = [
            75,
            23,
            2
        ];
        this.pieChartType = 'pie';
        this.pieChartColors = [{
                backgroundColor: [
                    'rgba(21, 101, 192, 0.8)',
                    'rgba(100, 181, 246, 0.8)',
                    'rgba(255, 50, 50, 0.8)'
                ]
            }];
    }
    ngOnInit() { }
    /*
    * Bar Chart Event Handler
    */
    barChartClicked(e) {
    }
    barChartHovered(e) {
    }
    /*
    * Line Chart Event Handler
    */
    lineChartClicked(e) {
    }
    lineChartHovered(e) {
    }
    /*
    * Doughnut Chart Event Handler
    */
    doughnutChartClicked(e) {
    }
    doughnutChartHovered(e) {
    }
    /*
    * Rader Chart Event Handler
    */
    radarChartClicked(e) {
    }
    radarChartHovered(e) {
    }
    /*
    * Pie Chart Event Handler
    */
    pieChartClicked(e) {
    }
    pieChartHovered(e) {
    }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(); };
ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["app-charts"]], decls: 17, vars: 11, consts: [["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-sm", "70"], [1, "p-0"], [1, ""], [1, "card-title-text"], ["baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], ["fxFlex", "100", "fxFlex.gt-sm", "30"], ["baseChart", "", 1, "chart", 3, "data", "labels", "options", "colors", "chartType", "chartHover", "chartClick"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Budget and expenditure history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Facilities overall status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ChartsComponent_Template_canvas_chartHover_16_listener($event) { return ctx.pieChartHovered($event); })("chartClick", function ChartsComponent_Template_canvas_chartClick_16_listener($event) { return ctx.pieChartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.chartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("options", ctx.doughnutOptions)("colors", ctx.pieChartColors)("chartType", ctx.doughnutChartType);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-charts',
                templateUrl: './charts.component.html',
                styleUrls: ['./charts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5alQ":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.component.ts ***!
  \********************************************************************/
/*! exports provided: AppLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderComponent", function() { return AppLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");





class AppLoaderComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
}
AppLoaderComponent.ɵfac = function AppLoaderComponent_Factory(t) { return new (t || AppLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AppLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLoaderComponent, selectors: [["app-app-loader"]], decls: 5, vars: 3, consts: [[1, "text-center"], [1, "m-0", "pb-16", 2, "white-space", "pre-wrap", "line-height", "1.4"], ["mat-dialog-content", ""]], template: function AppLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "auto");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  min-height: 122px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAtbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTIycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-loader',
                templateUrl: './app-loader.component.html',
                styleUrls: ['./app-loader.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "6QsB":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/add-building/add-building.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddBuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBuildingComponent", function() { return AddBuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_building_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/building.service */ "gPaL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");

















class AddBuildingComponent {
    constructor(buildingService, fb) {
        this.buildingService = buildingService;
        this.fb = fb;
    }
    ngOnInit() {
        this.firstFormGroup = this.fb.group({
            facilityType: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityCode: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityDescription: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityStructure: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityPurpose: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            numberOfStoreys: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityStatus: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityDateBuilt: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityDatePurchased: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityLongitude: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            facilityLatitude: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
        this.secondFormGroup = this.fb.group({
            buildingFloorArea: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingHeadroom: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            numberOfFloors: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            superStructure: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorStructure: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorCovering: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            windows: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            exteriorWall: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            paintCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            mortarCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            structureType: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            yearLastDecorated: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorJointsMaterials: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorJointsFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorJointsCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorJointsRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            ceilingMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            ceilingFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            ceilingCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            ceilingRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            fanLightMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            fanLightFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            fanLightCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            fanLightRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            doorsMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            doorsFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            doorsCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            doorsRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            roofStyleShape: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            roofTrussType: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            roofDeckingMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            trimMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            trimFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            trimCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            trimRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            foundationMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            foundationFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            foundationCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            foundationRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorSlabsMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorSlabsFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorSlabsCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            floorSlabsRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            frameMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            frameFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            frameCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            frameRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingFacadeMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingFacadeFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingFacadeCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingFacadeRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingWindowsMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingWindowsFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingWindowsCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            buildingWindowsRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            corridorsMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            corridorsFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            corridorsCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            corridorsRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            glazingMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            glazingFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            glazingCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            glazingRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            partitionsMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            partitionsFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            partitionsCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            partitionsRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            entrancesMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            entrancesFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            entrancesCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            entrancesRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            serviceDuctMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            serviceDuctFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            serviceDuctCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            serviceDuctRepairCost: [0, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            furnitureMaterial: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            furnitureFinishes: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            furnitureCondition: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            furnitureRepairCost: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            elevatorsCount: [0, []],
            elevatorType: ['', []],
            elevatorKeyLocation: ['', []],
            elevatorBrandName: ['', []],
            elevatorServiceCompany: ['', []],
            elevatorServicePhoneNumber: ['', []],
            elevatorEmergencyShutoffLocation: ['', []],
            elevatorExit: ['', []]
        });
        this.thirdFormGroup = this.fb.group({
            roofLightsCondition: ['', []],
            roofLightsRepairCost: ['', []],
            airQualityCondition: ['', []],
            airQualityRepairCost: [0, []],
            ventilationSystemCondition: ['', []],
            ventilationSystemRepairCost: [0, []],
            airConditioningCondition: ['', []],
            airConditioningRepairCost: [0, []],
            materialHandlingSystemCondition: ['', []],
            materialHandlingSystemRepairCost: [0, []],
            roofOpeningsCondition: ['', []],
            roofOpeningsRepairCost: [0, []],
            temperatureControlCondition: ['', []],
            temperatureControlRepairCost: [0, []],
            hotWaterCondition: ['', []],
            hotWaterRepairCost: [0, []],
            burglarProofCondition: ['', []],
            burglarProofRepairCost: [0, []],
            gatesCondition: ['', []],
            gatesRepairCost: [0, []],
            drainageCondition: ['', []],
            drainageRepairCost: [0, []],
            distributionCondition: ['', []],
            distributionRepairCost: [0, []],
            coldWaterCondition: ['', []],
            coldWaterRepairCost: [0, []],
            gasTanksCondition: ['', []],
            gasTanksRepairCost: [0, []],
            gasPipingCondition: ['', []],
            gasPipingRepairCost: [0, []],
            compressedAirCondition: ['', []],
            compressedAirRepairCost: [0, []]
        });
    }
    ngOnDestroy() {
    }
    addBuilding() {
        this.buildingService.addBuilding(this.addBuildingForm.value).subscribe(
        //res=>{
        //  console.log(this.firstFormGroup.value)
        //},err=>{
        //  console.log("error submitting form data.")
        //}
        );
    }
    addBuildings() {
        console.log(this.firstFormGroup.value);
    }
}
AddBuildingComponent.ɵfac = function AddBuildingComponent_Factory(t) { return new (t || AddBuildingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_building_service__WEBPACK_IMPORTED_MODULE_1__["BuildingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AddBuildingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBuildingComponent, selectors: [["app-add-building"]], decls: 1130, vars: 6, consts: [["mat-dialog-title", ""], ["labelPosition", "bottom", "linear", ""], ["stepper", ""], ["label", "Building survey", 3, "stepControl"], [3, "formGroup"], ["fxLayout.xs", "column", "fxLayout.gt-xs", "row wrap", "fxLayoutGap", "20px grid"], ["formControlName", "facilityType", "name", "facilityType"], ["value", ""], ["value", "lab"], ["value", "lt"], ["value", "fclt"], ["fxFlex.gt-xs", "320px"], ["matInput", "", "type", "text", "formControlName", "facilityName"], ["fxFlex", "120px"], ["matInput", "", "type", "text", "formControlName", "facilityCode"], ["fxFlex", "1 1 auto", "fxFlex.gt-xs", "320px"], ["matInput", "", "type", "text", "formControlName", "facilityDescription"], ["matInput", "", "type", "text", "formControlName", "facilityStructure"], ["xFlex.gt-xs", "320px"], ["matInput", "", "type", "text", "formControlName", "facilityPurpose"], ["matInput", "", "type", "number", "formControlName", "numberOfStoreys"], ["formControlName", "facilityStatus", "name", "facilityStatus"], ["value", "good"], ["value", "abandoned"], ["value", "repairable"], ["matInput", "", "type", "date", "formControlName", "facilityDateBuilt"], ["matInput", "", "type", "date", "formControlName", "facilityDatePurchased"], ["matInput", "", "type", "number", "formControlName", "facilityLongitude"], ["matInput", "", "type", "number", "formControlName", "facilityLatitude"], ["fxFlex", "1 1 auto"], ["mat-flat-button", "", "matStepperNext", "", "color", "primary"], ["label", "Structure and interior", 3, "stepControl"], ["fxLayoutGap", "25px", "fxLayout", "column"], ["fxLayout", "row wrap", "fxLayoutGap", "10px grid"], ["matSuffix", ""], ["matInput", "", "type", "number", "formControlName", "buildingFloorArea", "required", ""], ["matInput", "", "type", "number", "formControlName", "buildingHeadroom", "required", ""], ["matInput", "", "type", "number", "formControlName", "numberOfFloors", "required", ""], ["formControlName", "superStructure", "required", ""], ["value", "metal"], ["value", "wood"], ["value", "sheetrock"], ["value", "plaster"], ["value", "concrete"], ["value", "brick"], ["value", "paneling"], ["value", "other"], ["formControlName", "floorStructure", "required", ""], ["formControlName", "floorCovering", "required", ""], ["value", "carpet"], ["value", "vinyl"], ["formControlName", "windows", "required", ""], ["value", "wire_glass"], ["value", "glass_block"], ["value", "plate"], ["value", "tempered"], ["value", "operating"], ["value", "fixed"], ["formControlName", "exteriorWall", "required", ""], ["value", "concrete_wall"], ["value", "150mm"], ["value", "225mm"], ["formControlName", "paintCondition", "required", ""], ["value", "fair"], ["value", "poor"], ["formControlName", "mortarCondition", "required", ""], ["formControlName", "structureType", "required", ""], ["value", "frame"], ["value", "load bearing"], ["matInput", "", "formControlName", "yearLastDecorated", "type", "number"], ["formControlName", "floorJointsMaterials", "matInput", "", "type", "text"], ["formControlName", "floorJointsFinishes", "matInput", "", "type", "text"], ["formControlName", "floorJointsCondition", "matInput", "", "type", "text"], ["matInput", "", "formControlName", "floorJointsRepairCost", "type", "text"], ["matPrefix", ""], ["formControlName", "ceilingMaterial", "matInput", "", "type", "text"], ["formControlName", "ceilingFinishes", "matInput", "", "type", "text"], ["formControlName", "ceilingCondition", "matInput", "", "type", "text"], ["matInput", "", "formControlName", "ceilingRepairCost", "type", "text"], ["formControlName", "fanLightMaterial", "matInput", "", "type", "text"], ["formControlName", "fanLightFinishes", "matInput", "", "type", "text"], ["formControlName", "fanLightCondition", "matInput", "", "type", "text"], ["formControlName", "fanLightRepairCost", "matInput", "", "type", "text"], ["formControlName", "doorsMaterial", "matInput", "", "type", "number"], ["formControlName", "doorsFinishes", "matInput", "", "type", "number"], ["formControlName", "doorsCondition", "matInput", "", "type", "number"], ["formControlName", "doorsRepairCost", "matInput", "", "type", "number"], ["formControlName", "roofStyleShape"], ["value", "flat"], ["value", "pitched"], ["value", "arched"], ["value", "butterfly"], ["value", "hip"], ["value", "gambrel"], ["value", "mansard"], ["value", "monitor"], ["value", "shed"], ["value", "dome"], ["value", "gable"], ["formControlName", "roofTrussType", "matInput", "", "type", "text"], ["formControlName", "roofDeckingMaterial"], ["formControlName", "trimMaterial", "matInput", "", "type", "text"], ["formControlName", "trimFinishes", "matInput", "", "type", "text"], ["formControlName", "trimCondition", "matInput", "", "type", "text"], ["formControlName", "trimRepairCost", "matInput", "", "type", "number"], ["formControlName", "foundationMaterial", "matInput", "", "type", "text"], ["formControlName", "foundationFinishes", "matInput", "", "type", "text"], ["formControlName", "foundationCondition", "matInput", "", "type", "text"], ["formControlName", "foundationRepairCost", "matInput", "", "type", "number"], ["formControlName", "floorSlabsMaterial", "matInput", "", "type", "text"], ["formControlName", "floorSlabsFinishes", "matInput", "", "type", "text"], ["formControlName", "floorSlabsCondition", "matInput", "", "type", "text"], ["formControlName", "floorSlabsRepairCost", "matInput", "", "type", "number"], ["formControlName", "frameMaterial", "matInput", "", "type", "text"], ["formControlName", "frameFinishes", "matInput", "", "type", "text"], ["formControlName", "frameCondition", "matInput", "", "type", "text"], ["formControlName", "frameRepairCost", "matInput", "", "type", "text"], ["formControlName", "buildingFacadeMaterial", "matInput", "", "type", "text"], ["formControlName", "buildingFacadeFinishes", "matInput", "", "type", "text"], ["formControlName", "buildingFacadeCondition", "matInput", "", "type", "text"], ["formControlName", "buildingFacadeRepairCost", "matInput", "", "type", "text"], ["formControlName", "buildingWindowsMaterial", "matInput", "", "type", "text"], ["formControlName", "buildingWindowsFinishes", "matInput", "", "type", "text"], ["formControlName", "buildingWindowsCondition", "matInput", "", "type", "text"], ["formControlName", "buildingWindowsRepairCost", "matInput", "", "type", "text"], ["formControlName", "corridorsMaterial", "matInput", "", "type", "text"], ["formControlName", "corridorsFinishes", "matInput", "", "type", "text"], ["formControlName", "corridorsCondition", "matInput", "", "type", "text"], ["formControlName", "corridorsRepairCost", "matInput", "", "type", "text"], ["formControlName", "glazingMaterial", "matInput", "", "type", "text"], ["formControlName", "glazingFinishes", "matInput", "", "type", "text"], ["formControlName", "glazingCondition", "matInput", "", "type", "text"], ["formControlName", "glazingRepairCost", "matInput", "", "type", "text"], ["formControlName", "partitionsMaterial", "matInput", "", "type", "text"], ["formControlName", "partitionsFinishes", "matInput", "", "type", "text"], ["formControlName", "partitionsCondition", "matInput", "", "type", "text"], ["formControlName", "partitionsRepairCost", "matInput", "", "type", "text"], ["formControlName", "entrancesMaterial", "matInput", "", "type", "text"], ["formControlName", "entrancesFinishes", "matInput", "", "type", "text"], ["formControlName", "entrancesCondition", "matInput", "", "type", "text"], ["formControlName", "entrancesRepairCost", "matInput", "", "type", "text"], ["formControlName", "serviceDuctMaterial", "matInput", "", "type", "text"], ["formControlName", "serviceDuctFinishes", "matInput", "", "type", "text"], ["formControlName", "serviceDuctCondition", "matInput", "", "type", "text"], ["formControlName", "serviceDuctRepairCost", "matInput", "", "type", "text"], ["formControlName", "furnitureMaterial", "matInput", "", "type", "text"], ["formControlName", "furnitureFinishes", "matInput", "", "type", "text"], ["formControlName", "furnitureCondition", "matInput", "", "type", "text"], ["formControlName", "furnitureRepairCost", "matInput", "", "type", "text"], ["fxLayout", "column", "fxLayoutGap", "10px grid"], ["formControlName", "elevatorsCount", "matInput", "", "type", "number"], [2, "padding", "10px"], [1, "mat-title"], ["formControlName", "elevatorType"], ["value", "electric", 2, "margin-left", "16px"], ["value", "hydraulic", 2, "margin-left", "16px"], ["value", "electricEye"], ["value", "heatSensor"], ["formControlName", "elevatorKeyLocation", "matInput", "", "type", "text", "required", ""], ["formControlName", "elevatorBrandName", "matInput", "", "type", "text", "required", ""], ["formControlName", "elevatorServiceCompany", "matInput", "", "type", "text", "required", ""], ["formControlName", "elevatorServicePhoneNumber", "matInput", "", "type", "tel", "required", ""], ["formControlName", "elevatorEmergencyShutoffLocation", "matInput", "", "type", "text", "required", ""], ["formControlName", "elevatorExit"], ["value", "top"], ["value", "side"], ["value", "dumb_waiter"], ["value", "laundry_chute"], ["value", "trash_chute"], ["mat-flat-button", "", "matStepperPrevious", "", "color", "primary"], ["label", "Services", 3, "stepControl"], ["formControlName", "roofLightsCondition"], ["value", "working"], ["value", "not_working"], ["value", "obsolete"], ["matInput", "", "type", "number", "formControlName", "roofLightsRepairCost"], ["formControlName", "airQualityCondition"], ["matInput", "", "type", "number", "formControlName", "airQualityRepairCost"], ["formControlName", "ventilationSystemCondition"], ["formControlName", "ventilationSystemRepairCost", "matInput", "", "type", "number"], ["formControlName", "airConditioningCondition"], ["matInput", "", "type", "number", "formControlName", "airConditioningRepairCost"], ["matInput", "", "type", "number"], ["formControlName", "roofOpeningsCondition"], ["formControlName", "roofOpeningsRepairCost", "matInput", "", "type", "number"], ["formControlName", "temperatureControlCondition"], ["formControlName", "temperatureControlRepairCost", "matInput", "", "type", "number"], ["formControlName", "hotWaterCondition"], ["formControlName", "hotWaterRepairCost", "matInput", "", "type", "number"], ["burglarProofCondition", ""], ["formControlName", "burglarProofRepairCost", "matInput", "", "type", "number"], ["formControlName", "gatesCondition"], ["formControlName", "gatesRepairCost", "matInput", "", "type", "number"], ["formControlName", "drainageCondition"], ["formControlName", "drainageRepairCost", "matInput", "", "type", "number"], ["formControlName", "distributionCondition"], ["formControlName", "distributionRepairCost", "matInput", "", "type", "number"], ["formControlName", "coldWaterCondition"], ["formControlName", "coldWaterRepairCost", "matInput", "", "type", "number"], ["formControlName", "gasTanksCondition"], ["formControlName", "gasTanksRepairCost", "matInput", "", "type", "number"], ["formControlName", "gasPipingCondition"], ["formControlName", "gasPipingRepairCost", "matInput", "", "type", "number"], ["formControlName", "compressedAirCondition"], ["formControlName", "compressedAirRepairCost", "matInput", "", "type", "number"], ["matStepperPrevious", "", "mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "color", "primary"]], template: function AddBuildingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add building");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Facility type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " --- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Laboratory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lecture Theatre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Faculty Complex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Facility name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Facility code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Facility description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Facility structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Facility purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Number of storeys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Facility status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "---");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Good");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Abandoned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Date built");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Date purchased");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "GIS longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "GIS latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-step", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Building Dimensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Floor area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Headroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Number of floors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Super structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Metal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Wood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Sheetrock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Plaster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Concrete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Brick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Paneling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Floor structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Metal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Wood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Concrete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Floor covering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "metal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "wood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "concrete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "vinyl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Wire glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Glass block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Tempered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Operating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Thickness and Construction of Walls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Exterior wall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-select", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "mat-option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Concrete wall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "150mm block wall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "220mm block wall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Paint condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "good");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "fair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "poor mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Mortar condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "good");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "fair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "mat-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "poor mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Type of structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "mat-select", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "mat-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Frame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "mat-option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Load bearing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Year when last decorated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Floor joints and beams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Ceilings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Fanlights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Doors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Roof Characteristics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Roof style/shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "mat-select", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "mat-option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "mat-option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Pitched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "mat-option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Arched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "mat-option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Butterfly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "mat-option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Hip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "mat-option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Gambrel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "mat-option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Mansard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "mat-option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Monitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "mat-option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Shed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "mat-option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Dome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "mat-option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Gable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Truss type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Decking material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "mat-select", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Wood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Concrete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Trim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "input", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Floor slabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "input", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "input", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Frame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "input", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Building facade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "input", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "input", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Building windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "input", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "input", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "input", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "input", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Corridors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](512, "input", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "input", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](520, "input", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "Glazing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](535, "input", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "input", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](543, "input", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](547, "input", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "Partitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "input", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "input", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "input", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](570, "input", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "Entrances and Access spaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "input", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](585, "input", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](589, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](593, "input", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "Service ducts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](604, "input", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](608, "input", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](612, "input", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](616, "input", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "Furniture/Fittings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](627, "input", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "Finishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "input", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](635, "input", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "Estimated cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](639, "input", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "fieldset", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "Elevators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, "Number of elevators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](650, "input", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](651, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "Elevator type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "mat-radio-group", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "mat-radio-button", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "Electric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "mat-radio-button", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "Hydraulic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](660, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "Elevator sensors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "mat-checkbox", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "Electric eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "mat-checkbox", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "Heat sensor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, "Key location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](674, "input", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "Brand name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](678, "input", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "Service company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](682, "input", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](686, "input", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, "Emergency shutoff location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](692, "input", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "mat-select", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "mat-option", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "mat-option", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "mat-option", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "Dumb waiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "mat-option", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "Laundry chute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "mat-option", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "Trash chute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "button", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](714, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "mat-step", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "Roof lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "mat-select", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](739, "input", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "Air quality and Handling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "mat-select", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](764, "input", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "Ventilation System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "mat-select", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](789, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, "Air Conditioning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "mat-select", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](804, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](814, "input", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, "Material Handling & Transportation System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](839, "input", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "Roof Openings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "mat-select", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](864, "input", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](866, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](868, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "Temperature & Humidity Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "mat-select", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](889, "input", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](891, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](893, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, "Hot Water");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "mat-select", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](902, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](904, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](914, "input", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](918, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, "Burglar Proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "mat-select", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](935, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](938, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](939, "input", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](943, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](946, "Gates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "mat-select", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](958, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](963, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](964, "input", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](970, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](971, "Drainage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](974, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "mat-select", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](977, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](978, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](979, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](981, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](982, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](983, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](988, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](989, "input", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](993, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](996, "Distribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](999, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "mat-select", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1002, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1004, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1008, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1010, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1014, "input", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1016, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1018, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1020, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1021, "Cold Water");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1024, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1025, "mat-select", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1027, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1029, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1031, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1033, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1035, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1038, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1039, "input", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1043, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1046, "Gas Tanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1049, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "mat-select", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1052, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1056, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1058, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1064, "input", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1068, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, "Gas Piping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1073, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "mat-select", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1077, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1078, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1079, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1083, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1088, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1089, "input", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1091, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1093, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1094, "fieldset", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1096, "Air Compressed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "mat-select", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1102, "-----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, "Incomplete/Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, "Not working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1110, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1112, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1113, "Cost of repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1114, "input", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1116, "\u20A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1117, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1118, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1120, "button", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1121, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1122, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "button", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBuildingComponent_Template_button_click_1123_listener() { return ctx.addBuildings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1124, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "mat-dialog-actions", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "button", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1127, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "button", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1129, "Submit building data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](640);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperPrevious"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYnVpbGRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBuildingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-building',
                templateUrl: './add-building.component.html',
                styleUrls: ['./add-building.component.scss']
            }]
    }], function () { return [{ type: _services_building_service__WEBPACK_IMPORTED_MODULE_1__["BuildingService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "72Mu":
/*!********************************************************!*\
  !*** ./src/app/shared/services/ui-lib-icon.service.ts ***!
  \********************************************************/
/*! exports provided: UILibIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILibIconService", function() { return UILibIconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");






class UILibIconService {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.iconList = [
            { 'name': 'ulb_monitor', 'fileName': 'monitor.svg' },
            { 'name': 'ulb_money', 'fileName': 'money.svg' },
            { 'name': 'ulb_home_security', 'fileName': 'home_security.svg' },
            { 'name': 'ulb_paper_plane', 'fileName': 'paper_plane.svg' },
            { 'name': 'ulb_menu', 'fileName': 'menu.svg' },
            { 'name': 'ulb_home', 'fileName': 'home.svg' },
            { 'name': 'ulb_documents', 'fileName': 'documents.svg' },
            { 'name': 'ulb_edit', 'fileName': 'edit.svg' },
            { 'name': 'ulb_boss', 'fileName': 'boss.svg' },
            { 'name': 'ulb_partnership', 'fileName': 'partnership.svg' },
            { 'name': 'ulb_partnership_1', 'fileName': 'partnership_1.svg' },
            { 'name': 'ulb_success', 'fileName': 'success.svg' },
            { 'name': 'ulb_rocket_launch', 'fileName': 'rocket_launch.svg' },
            { 'name': 'ulb_rocket', 'fileName': 'rocket.svg' },
            { 'name': 'ulb_business_and_trade', 'fileName': 'business_and_trade.svg' },
            { 'name': 'ulb_enterprise', 'fileName': 'enterprise.svg' },
            { 'name': 'ulb_cloud_computing', 'fileName': 'cloud_computing.svg' },
            { 'name': 'ulb_cloud_computing_1', 'fileName': 'cloud_computing_1.svg' },
            { 'name': 'ulb_cloud_computing_2', 'fileName': 'cloud_computing_2.svg' },
            { 'name': 'ulb_send', 'fileName': 'send.svg' },
            { 'name': 'ulb_table', 'fileName': 'table.svg' },
            { 'name': 'ulb_notification', 'fileName': 'notification.svg' },
            { 'name': 'ulb_person', 'fileName': 'person.svg' },
            { 'name': 'ulb_menu_1', 'fileName': 'menu_1.svg' },
            { 'name': 'ulb_delete', 'fileName': 'delete.svg' },
            { 'name': 'ulb_close', 'fileName': 'close.svg' },
            { 'name': 'ulb_magnifying_glass', 'fileName': 'magnifying_glass.svg' },
            { 'name': 'ulb_settings', 'fileName': 'settings.svg' },
            { 'name': 'ulb_twitter', 'fileName': 'twitter.svg' },
            { 'name': 'ulb_facebook', 'fileName': 'facebook.svg' },
            { 'name': 'ulb_linkedin', 'fileName': 'linkedin.svg' },
            { 'name': 'ulb_pie_chart', 'fileName': 'pie_chart.svg' },
            { 'name': 'ulb_paint_palette', 'fileName': 'paint_palette.svg' },
            { 'name': 'ulb_server', 'fileName': 'server.svg' },
            { 'name': 'ulb_database', 'fileName': 'database.svg' },
            { 'name': 'ulb_database_1', 'fileName': 'database_1.svg' },
            { 'name': 'ulb_creativity', 'fileName': 'creativity.svg' },
            { 'name': 'ulb_list_text', 'fileName': 'list_text.svg' },
            { 'name': 'ulb_list', 'fileName': 'list.svg' },
            { 'name': 'ulb_shopping_list', 'fileName': 'shopping_list.svg' },
            { 'name': 'ulb_checklist', 'fileName': 'checklist.svg' },
            { 'name': 'ulb_bullet_list', 'fileName': 'bullet_list.svg' },
            { 'name': 'ulb_shopping_cart', 'fileName': 'shopping_cart.svg' },
            { 'name': 'ulb_add', 'fileName': 'add.svg' },
            { 'name': 'ulb_shopping_cart_1', 'fileName': 'shopping_cart_1.svg' },
            { 'name': 'ulb_shopping_basket', 'fileName': 'shopping_basket.svg' },
            { 'name': 'ulb_edit_table', 'fileName': 'edit_table.svg' },
            { 'name': 'ulb_casino_chips', 'fileName': 'casino_chips.svg' },
            { 'name': 'ulb_add_1', 'fileName': 'add_1.svg' },
            { 'name': 'ulb_chat', 'fileName': 'chat.svg' },
            { 'name': 'ulb_chat_box', 'fileName': 'chat_box.svg' },
            { 'name': 'ulb_chat_1', 'fileName': 'chat_1.svg' },
            { 'name': 'ulb_agreement', 'fileName': 'agreement.svg' },
            { 'name': 'ulb_box', 'fileName': 'box.svg' },
            { 'name': 'ulb_link_1', 'fileName': 'link_1.svg' },
            { 'name': 'ulb_link', 'fileName': 'link.svg' },
            { 'name': 'ulb_message', 'fileName': 'message.svg' },
            { 'name': 'ulb_inbox', 'fileName': 'inbox.svg' },
            { 'name': 'ulb_inbox_1', 'fileName': 'inbox_1.svg' },
            { 'name': 'ulb_invoices', 'fileName': 'invoices.svg' },
            { 'name': 'ulb_receipt', 'fileName': 'receipt.svg' },
            { 'name': 'ulb_search', 'fileName': 'search.svg' },
            { 'name': 'ulb_date', 'fileName': 'date.svg' },
            { 'name': 'ulb_building', 'fileName': 'building.svg' },
            { 'name': 'ulb_block', 'fileName': 'block.svg' },
            { 'name': 'ulb_users', 'fileName': 'users.svg' },
            { 'name': 'ulb_user', 'fileName': 'user.svg' },
            { 'name': 'ulb_map', 'fileName': 'map.svg' },
            { 'name': 'ulb_location', 'fileName': 'location.svg' },
            { 'name': 'ulb_drag', 'fileName': 'drag.svg' },
            {
                'name': 'ulb_business_card_of_a_man_with_contact_info',
                'fileName': 'business_card_of_a_man_with_contact_info.svg'
            },
            { 'name': 'ulb_help', 'fileName': 'help.svg' },
            { 'name': 'ulb_list_1', 'fileName': 'list_1.svg' }
        ];
    }
    init() {
        this.iconList.forEach(i => {
            this.matIconRegistry.addSvgIcon(i.name, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/images/svg-icons/${i.fileName}`));
        });
    }
}
UILibIconService.ɵfac = function UILibIconService_Factory(t) { return new (t || UILibIconService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
UILibIconService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UILibIconService, factory: UILibIconService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UILibIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "8cvP":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/font-size.directive.ts ***!
  \**********************************************************/
/*! exports provided: FontSizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizeDirective", function() { return FontSizeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class FontSizeDirective {
    constructor(fontSize, el) {
        this.fontSize = fontSize;
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.fontSize = this.fontSize;
    }
}
FontSizeDirective.ɵfac = function FontSizeDirective_Factory(t) { return new (t || FontSizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('fontSize'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FontSizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FontSizeDirective, selectors: [["", "fontSize", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontSizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[fontSize]' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['fontSize']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "8ypg":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/building/building.component.ts ***!
  \*****************************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");






class BuildingComponent {
    constructor() { }
    ngOnInit() {
    }
    showSummary(id) {
        console.log(id);
    }
}
BuildingComponent.ɵfac = function BuildingComponent_Factory(t) { return new (t || BuildingComponent)(); };
BuildingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildingComponent, selectors: [["app-building"]], inputs: { data: "data" }, outputs: { showSummary: "showSummary" }, decls: 17, vars: 6, consts: [["mat-card-image", "", 3, "src"], ["dense", ""], ["color", "warn"], ["align", "end"], ["mat-flat-button", "", "color", "primary", 3, "value", "click"]], template: function BuildingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuildingComponent_Template_button_click_15_listener() { return ctx.showSummary(ctx.data.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " More details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Repair cost: \u20A6", ctx.data.repair_cost, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.data.id);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWlsZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-building',
                templateUrl: './building.component.html',
                styleUrls: ['./building.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSummary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "1wtQ");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular.json`.

const environment = {
    production: false,
    apiURL: config__WEBPACK_IMPORTED_MODULE_0__["config"].apiUrl
};


/***/ }),

/***/ "Bp9c":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: AppDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function() { return AppDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class AppDropdownDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
    }
    closeOtherLinks(openLink) {
        this.navlinks.forEach((link) => {
            if (link !== openLink) {
                link.open = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    getUrl() {
        return this.router.url;
    }
    ngOnInit() {
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe((event) => {
            this.navlinks.forEach((link) => {
                if (link.group) {
                    const routeUrl = this.getUrl();
                    const currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        this.closeOtherLinks(link);
                    }
                }
            });
        });
    }
}
AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) { return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppDropdownDirective, selectors: [["", "appDropdown", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdown]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "C9XJ":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.actions.ts ***!
  \********************************************/
/*! exports provided: AuthActions, login, loginSuccess, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActions", function() { return AuthActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var AuthActions;
(function (AuthActions) {
    AuthActions["LOGIN"] = "[AUTH] Login";
    AuthActions["LOGIN_SUCCESS"] = "[AUTH] Login success";
    AuthActions["LOGOUT"] = "[AUTH] Logout";
})(AuthActions || (AuthActions = {}));
const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthActions.LOGIN);
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthActions.LOGIN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthActions.LOGOUT);


/***/ }),

/***/ "EShO":
/*!**********************************!*\
  !*** ./src/app/socket/socket.ts ***!
  \**********************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "gFX4");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



class Socket {
    constructor(config) {
        this.subscribersCounter = {};
        this.eventObservables$ = {};
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"](config.url);
    }
    disconnect(close) {
        return this.socket.disconnect(close);
    }
    on(event, callback) {
        this.socket.on(event, callback);
    }
    once(eventName, callback) {
        this.socket.once(eventName, callback);
    }
    emit(event, ...args) {
        this.socket.emit(event, ...args);
    }
    fromEvent(eventName) {
        if (!this.subscribersCounter[eventName]) {
            this.subscribersCounter[eventName] = 0;
        }
        this.subscribersCounter[eventName]++;
        if (!this.eventObservables$[eventName]) {
            this.eventObservables$[eventName] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                const listener = (data) => {
                    observer.next(data);
                };
                this.socket.on(eventName, listener);
                return () => {
                    this.subscribersCounter[eventName]--;
                    if (this.subscribersCounter[eventName] === 0) {
                        this.socket.removeListener(eventName, listener);
                        delete this.eventObservables$[eventName];
                    }
                };
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
        }
        return this.eventObservables$[eventName];
    }
    fromOneTimeEvent(eventName) {
        return new Promise(resolve => this.once(eventName, resolve));
    }
}


/***/ }),

/***/ "ETNk":
/*!**************************************************!*\
  !*** ./src/app/shared/services/theme.service.ts ***!
  \**************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/url.helper */ "VgRj");




class ThemeService {
    constructor(document, rendererFactory) {
        this.document = document;
        this.onThemeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.egretThemes = [
            {
                'name': 'egret-navy',
                'baseColor': '#10174c',
                'isActive': false
            },
            {
                'name': 'egret-navy-dark',
                'baseColor': '#0081ff',
                'isActive': false
            }
        ];
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    // Invoked in AppComponent and apply 'activatedTheme' on startup
    applyMatTheme(themeName) {
        this.activatedTheme = this.egretThemes.find(t => t.name === themeName);
        this.flipActiveFlag(themeName);
        // *********** ONLY FOR DEMO **********
        this.setThemeFromQuery();
        // ************************************
        // this.changeTheme(themeName);
        this.renderer.addClass(this.document.body, themeName);
    }
    changeTheme(prevTheme, themeName) {
        this.renderer.removeClass(this.document.body, prevTheme);
        this.renderer.addClass(this.document.body, themeName);
        this.flipActiveFlag(themeName);
        this.onThemeChange.emit(this.activatedTheme);
    }
    flipActiveFlag(themeName) {
        this.egretThemes.forEach((t) => {
            t.isActive = false;
            if (t.name === themeName) {
                t.isActive = true;
                this.activatedTheme = t;
            }
        });
    }
    // *********** ONLY FOR DEMO **********
    setThemeFromQuery() {
        const themeStr = Object(_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["getQueryParam"])('theme');
        try {
            this.activatedTheme = JSON.parse(themeStr);
            console.log(this.activatedTheme);
            this.flipActiveFlag(this.activatedTheme.name);
        }
        catch (e) { }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }]; }, null); })();


/***/ }),

/***/ "FRSv":
/*!******************************************!*\
  !*** ./src/app/socket/socket.service.ts ***!
  \******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ "EShO");

class SocketService extends _socket__WEBPACK_IMPORTED_MODULE_0__["Socket"] {
    constructor(config) {
        super(config);
    }
}


/***/ }),

/***/ "Fj/B":
/*!*************************************************!*\
  !*** ./src/app/shared/search/search.service.ts ***!
  \*************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SearchService {
    constructor() {
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.searchTerm$ = this.searchTerm.asObservable();
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Gf25":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/egret-highlight.directive.ts ***!
  \****************************************************************/
/*! exports provided: EgretHighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretHighlightDirective", function() { return EgretHighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ "FIf5");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class EgretHighlightDirective {
    constructor(el, cdr, _zone, http) {
        this.el = el;
        this.cdr = cdr;
        this._zone = _zone;
        this.http = http;
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        if (this.code) {
            this.highlightElement(this.code);
        }
        if (this.path) {
            this.highlightedCode = "Loading...";
            this.http
                .get(this.path, { responseType: "text" })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeAll))
                .subscribe(response => {
                this.highlightElement(response, this.languages);
            });
        }
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
    ngOnChanges(changes) {
        if (changes["code"] &&
            changes["code"].currentValue &&
            changes["code"].currentValue !== changes["code"].previousValue) {
            this.highlightElement(this.code);
            // console.log('hljs on change', changes)
        }
    }
    highlightElement(code, languages) {
        this._zone.runOutsideAngular(() => {
            const res = highlight_js__WEBPACK_IMPORTED_MODULE_1__["highlightAuto"](code);
            this.highlightedCode = res.value;
            // this.cdr.detectChanges();
            // console.log(languages)
        });
    }
}
EgretHighlightDirective.ɵfac = function EgretHighlightDirective_Factory(t) { return new (t || EgretHighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EgretHighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretHighlightDirective, selectors: [["", "egretHighlight", ""]], hostVars: 3, hostBindings: function EgretHighlightDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("innerHTML", ctx.highlightedCode, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hljs", true);
    } }, inputs: { path: "path", code: ["egretHighlight", "code"], languages: "languages" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretHighlightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                host: {
                    "[class.hljs]": "true",
                    "[innerHTML]": "highlightedCode"
                },
                selector: "[egretHighlight]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, { path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretHighlight"]
        }], languages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GmJt":
/*!*******************************************************!*\
  !*** ./src/app/shared/animations/egret-animations.ts ***!
  \*******************************************************/
/*! exports provided: egretAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "egretAnimations", function() { return egretAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "GS7A");

const reusable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})',
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*')),
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0',
    },
});
const egretAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(reusable)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'block',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
    ]),
];


/***/ }),

/***/ "GyvL":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ScrollToDirective {
    constructor(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ngOnInit() { }
    currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    }
    ;
    elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    }
    ;
    smoothScroll() {
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    }
    ;
}
ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('scrollTo'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToDirective, selectors: [["", "scrollTo", ""]], hostBindings: function ScrollToDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) { return ctx.smoothScroll($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[scrollTo]' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['scrollTo']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { smoothScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "Hkp+":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/header-side/header-side.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSideComponent", function() { return HeaderSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme.service */ "ETNk");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/layout.service */ "rmxa");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../egret-notifications2/egret-notifications2.component */ "3E2P");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");



















function HeaderSideComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/profile/overview"]; };
const _c1 = function () { return ["/profile/settings"]; };
class HeaderSideComponent {
    constructor(themeService, layout, translate, renderer, jwtAuth) {
        this.themeService = themeService;
        this.layout = layout;
        this.translate = translate;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.availableLangs = [{
                name: 'EN',
                code: 'en',
                flag: 'flag-icon-us'
            }, {
                name: 'ES',
                code: 'es',
                flag: 'flag-icon-es'
            }];
        this.currentLang = this.availableLangs[0];
    }
    ngOnInit() {
        this.egretThemes = this.themeService.egretThemes;
        this.layoutConf = this.layout.layoutConf;
        this.translate.use(this.currentLang.code);
    }
    setLang(lng) {
        this.currentLang = lng;
        this.translate.use(lng.code);
    }
    changeTheme(theme) {
        // this.themeService.changeTheme(theme);
    }
    toggleNotific() {
        this.notificPanel.toggle();
    }
    toggleSidenav() {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    }
    toggleCollapse() {
        // compact --> full
        if (this.layoutConf.sidebarStyle === 'compact') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full',
                sidebarCompactToggle: false
            }, { transitionClass: true });
        }
        // * --> compact
        this.layout.publishLayoutChange({
            sidebarStyle: 'compact',
            sidebarCompactToggle: true
        }, { transitionClass: true });
    }
    onSearch(e) {
        //   console.log(e)
    }
}
HeaderSideComponent.ɵfac = function HeaderSideComponent_Factory(t) { return new (t || HeaderSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"])); };
HeaderSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderSideComponent, selectors: [["app-header-side"]], viewQuery: function HeaderSideComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_5__["EgretNotifications2Component"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.noti = _t);
    } }, inputs: { notificPanel: "notificPanel" }, decls: 33, vars: 11, consts: [[1, "topbar", "mat-bg-card"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click", 4, "ngIf"], ["fxFlex", ""], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], [1, "notification-number", "mat-bg-warn"], ["mat-icon-button", "", 1, "topbar-button-right", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/face-7.jpg", "alt", ""], ["accountMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click"]], template: function HeaderSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderSideComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_3_listener() { return ctx.toggleNotific(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Disable alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_27_listener() { return ctx.jwtAuth.signout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 7, "SIGNOUT"));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-side',
                templateUrl: './header-side.template.html'
            }]
    }], function () { return [{ type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"] }]; }, { notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noti: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_5__["EgretNotifications2Component"]]
        }] }); })();


/***/ }),

/***/ "IZEZ":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ExcerptPipe {
    transform(text, limit = 5) {
        if (text.length <= limit)
            return text;
        return text.substring(0, limit) + '...';
    }
}
ExcerptPipe.ɵfac = function ExcerptPipe_Factory(t) { return new (t || ExcerptPipe)(); };
ExcerptPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "excerpt", type: ExcerptPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcerptPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'excerpt' }]
    }], null, null); })();


/***/ }),

/***/ "LFK6":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class NavigationService {
    constructor() {
        this.iconMenu = [
            {
                name: 'Home',
                type: 'link',
                tooltip: 'dashboard home',
                icon: 'home',
                state: 'dashboard',
                disabled: false
            },
            {
                name: 'Report',
                type: 'link',
                tooltip: 'Report',
                icon: 'assessment',
                state: 'dashboard/report',
                disabled: false
            },
            {
                name: 'Settings',
                type: 'link',
                tooltip: 'settings',
                icon: 'settings',
                state: 'dashboard/settings',
                disabled: false
            },
            {
                name: 'About',
                type: 'link',
                tooltip: 'about FEIMS',
                icon: 'report',
                state: 'dashboard/about',
                disabled: true
            },
            {
                type: 'separator',
                name: 'Select separtment'
            },
            {
                name: 'Kongo',
                type: 'dropDown',
                tooltip: 'Koongo Campus',
                icon: 'location_on',
                disabled: true,
                sub: [
                    {
                        name: 'Administration',
                        type: 'dropDown',
                        sub: [
                            {
                                name: 'Business',
                                type: 'link',
                                state: 'dashboard/buildings'
                            },
                            {
                                name: 'LGA Studies',
                                type: 'link',
                                state: 'dashboard/buildings'
                            }
                        ]
                    },
                    {
                        name: 'Law',
                        type: 'dropDown',
                        sub: [
                            {
                                name: 'Civil',
                                type: 'link',
                                state: 'dashboard/buildings'
                            },
                            {
                                name: 'Sharia',
                                type: 'link',
                                state: 'dashboard/buildings'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Samaru',
                type: 'dropDown',
                tooltip: 'Samaru Campus',
                icon: 'location_on',
                disabled: true,
                sub: [
                    {
                        name: 'Sciences',
                        type: 'dropDown',
                        sub: [
                            {
                                name: 'Mathematics',
                                type: 'link',
                                state: 'dashboard/buildings'
                            },
                            {
                                name: 'Chemistry',
                                type: 'link',
                                state: 'dashboard/buildings'
                            }
                        ]
                    },
                    {
                        name: 'Engineering',
                        type: 'dropDown',
                        sub: [
                            {
                                name: 'Civil',
                                type: 'link',
                                state: 'dashboard/buildings'
                            },
                            {
                                name: 'Mechanical',
                                type: 'link',
                                state: 'dashboard/buildings'
                            }
                        ]
                    }
                ]
            }
            /*
            {
              name: 'DASHBOARD',
              type: 'dropDown',
              tooltip: 'Dashboard',
              svgIcon: 'ulb_server',
              state: 'dashboard',
              sub: [
                { name: 'Default', state: 'default' },
                {name: 'Learning Management', state: 'learning-management'},
                { name: 'Analytics', state: 'analytics' },
                { name: 'Analytics Alt', state: 'analytics-alt' },
                { name: 'Cryptocurrency', state: 'crypto' },
                { name: 'Dark Cards', state: 'dark' }
              ]
            },
            {
              name: 'CRUD Table',
              type: 'link',
              tooltip: 'CRUD Table',
              svgIcon: 'ulb_list_text',
              state: 'cruds/ngx-table'
            },
            {
              name: 'ECOMMERCE',
              type: 'dropDown',
              tooltip: 'Shop',
              icon: 'shopping_cart',
              state: 'shop',
              sub: [
                { name: 'PRODUCTS', state: '' },
                { name: 'PRODUCT DETAILS', state: 'products/5a9ae2106f155194e5c95d67' },
                { name: 'CART', state: 'cart' },
                { name: 'CHECKOUT', state: 'checkout' }
              ]
            },
            {
              name: 'INBOX',
              type: 'link',
              tooltip: 'Inbox',
              icon: 'inbox',
              state: 'inbox',
              badges: [{ color: 'primary', value: '4' }]
            },
            {
              name: 'Invoice',
              type: 'link',
              icon: 'receipt',
              state: 'invoice/list'
            },
            {
              name: 'CHAT',
              type: 'link',
              tooltip: 'Chat',
              icon: 'chat',
              state: 'chat',
              badges: [{ color: 'warn', value: '1' }]
            },
            {
              name: 'CALENDAR',
              type: 'link',
              tooltip: 'Calendar',
              icon: 'date_range',
              state: 'calendar'
            },
            {
              name: 'Todo',
              type: 'link',
              tooltip: 'Todo',
              icon: 'center_focus_strong',
              state: 'todo/list'
            },
            {
              name: 'DIALOGS',
              type: 'dropDown',
              tooltip: 'Dialogs',
              icon: 'filter_none',
              state: 'dialogs',
              sub: [
                { name: 'CONFIRM', state: 'confirm' },
                { name: 'LOADER', state: 'loader' }
              ]
            },
            {
              name: 'Material Kits',
              type: 'dropDown',
              tooltip: 'Material',
              icon: 'favorite',
              state: 'material',
              badges: [{ color: 'primary', value: '60+' }],
              sub: [
                {
                  name: 'Form controls',
                  type: 'dropDown',
                  sub: [
                    { name: 'Autocomplete', state: 'autocomplete' },
                    { name: 'Checkbox', state: 'checkbox' },
                    { name: 'Datepicker', state: 'datepicker' },
                    { name: 'Form Field', state: 'form-field' },
                    { name: 'Input Field', state: 'input-field' },
                    { name: 'Radio Button', state: 'radio-button' },
                    { name: 'Select', state: 'select' },
                    { name: 'Slider', state: 'slider' },
                    { name: 'Slider Toggle', state: 'slider-toggle' }
                  ]
                },
                {
                  name: 'Navigation',
                  type: 'dropDown',
                  sub: [
                    { name: 'Menu', state: 'menu' },
                    { name: 'Sidenav', state: 'sidenav' },
                    { name: 'Toolbar', state: 'toolbar' }
                  ]
                },
                {
                  name: 'Layout',
                  type: 'dropDown',
                  sub: [
                    { name: 'Card', state: 'card' },
                    { name: 'Divider', state: 'divider' },
                    { name: 'Expansion Panel', state: 'expansion-panel' },
                    { name: 'Grid', state: 'grid' },
                    { name: 'List', state: 'list' },
                    { name: 'Stepper', state: 'stepper' },
                    { name: 'Tab', state: 'tab-group' },
                    { name: 'Tree', state: 'tree' }
                  ]
                },
                {
                  name: 'Buttons & Indicators',
                  type: 'dropDown',
                  sub: [
                    { name: 'BUTTONS', state: 'buttons' },
                    { name: 'Button Toggle', state: 'button-toggle' },
                    { name: 'Badge', state: 'badge' },
                    { name: 'Chips', state: 'chips' },
                    { name: 'Icons', state: 'icons' },
                    { name: 'Progress Spinner', state: 'progress-spinner' },
                    { name: 'Progress Bar', state: 'progress-bar' },
                    { name: 'Ripples', state: 'ripples' }
                  ]
                },
                {
                  name: 'Popups & Modals',
                  type: 'dropDown',
                  sub: [
                    { name: 'Tooltip', state: 'tooltip' },
                    { name: 'Bottom Sheet', state: 'bottom-sheet' },
                    { name: 'Dialog', state: 'dialog' },
                    { name: 'Snackbar', state: 'snackbar' }
                  ]
                },
                {
                  name: 'Data Table',
                  type: 'dropDown',
                  sub: [
                    { name: 'paginator', state: 'paginator' },
                    { name: 'Sort Header', state: 'sort-header' },
                    { name: 'Table', state: 'table' }
                  ]
                },
                { name: 'Buttons Loading', state: 'loading-buttons' }
              ]
            },
            {
              name: 'FORMS',
              type: 'dropDown',
              tooltip: 'Forms',
              icon: 'description',
              state: 'forms',
              sub: [
                { name: 'BASIC', state: 'basic' },
                { name: 'EDITOR', state: 'editor' },
                { name: 'UPLOAD', state: 'upload' },
                { name: 'WIZARD', state: 'wizard' }
              ]
            },
            {
              name: 'TABLES',
              type: 'dropDown',
              tooltip: 'Tables',
              icon: 'format_line_spacing',
              state: 'tables',
              sub: [
                { name: 'FULLSCREEN', state: 'fullscreen' },
                { name: 'PAGING', state: 'paging' },
                { name: 'FILTER', state: 'filter' },
                { name: 'Material Table', state: 'mat-table' }
              ]
            },
            {
              name: 'PROFILE',
              type: 'dropDown',
              tooltip: 'Profile',
              icon: 'person',
              state: 'profile',
              badges: [{ color: 'primary', value: '2' }],
              sub: [
                { name: 'OVERVIEW', state: 'overview' },
                { name: 'SETTINGS', state: 'settings' },
                { name: 'BLANK', state: 'blank' }
              ]
            },
            {
              name: 'TOUR',
              type: 'link',
              tooltip: 'Tour',
              icon: 'flight_takeoff',
              state: 'tour'
            },
            {
              name: 'MAP',
              type: 'link',
              tooltip: 'Map',
              icon: 'add_location',
              state: 'map'
            },
            {
              name: 'CHARTS',
              type: 'dropDown',
              tooltip: 'Charts',
              icon: 'show_chart',
              sub: [
                {
                  name: 'eChart',
                  type: 'dropDown',
                  state: 'chart',
                  sub: [
                    { name: 'Pie', state: 'pie' },
                    { name: 'Bar', state: 'bar' },
                    { name: 'Radar', state: 'radar' },
                    // { name: "Heatmap", state: "heatmap" },
                  ]
                },
                { name: 'Chart js', state: 'charts' }
              ]
            },
            // {
            //   name: "CHARTS",
            //   type: "link",
            //   tooltip: "Charts",
            //   icon: "show_chart",
            //   state: "charts"
            // },
            {
              name: 'DND',
              type: 'link',
              tooltip: 'Drag and Drop',
              icon: 'adjust',
              state: 'dragndrop'
            },
            {
              name: 'Page Layouts',
              type: 'dropDown',
              icon: 'view_carousel',
              state: 'page-layouts',
              sub: [
                { name: 'Left sidebar card', state: 'left-sidebar-card' },
                { name: 'Right sidebar card', state: 'right-sidebar-card' },
                { name: 'Full width card', state: 'full-width-card' },
                { name: 'Full width card tab', state: 'full-width-card-tab' },
        
                { name: 'Full width plain', state: 'full-width-plain' },
                { name: 'Left sidebar plain', state: 'left-sidebar-plain' }
              ]
            },
            {
              name: 'SESSIONS',
              type: 'dropDown',
              tooltip: 'Pages',
              icon: 'view_carousel',
              state: 'sessions',
              sub: [
                { name: 'SIGNUP', state: 'signup' },
                { name: 'Signup 2', state: 'signup2' },
                { name: 'Signup 3', state: 'signup3' },
                { name: 'Signup 4', state: 'signup4' },
                { name: 'SIGNIN', state: 'signin' },
                { name: 'Signin 2', state: 'signin2' },
                { name: 'Signin 3', state: 'signin3' },
                { name: 'Signin 4', state: 'signin4' },
                { name: 'FORGOT', state: 'forgot-password' },
                { name: 'LOCKSCREEN', state: 'lockscreen' },
                { name: 'NOTFOUND', state: '404' },
                { name: 'ERROR', state: 'error' }
              ]
            },
            {
              name: 'Utilities',
              type: 'dropDown',
              icon: 'format_list_bulleted',
              state: 'utilities',
              sub: [
                { name: 'Border', state: 'border' },
                { name: 'Color', state: 'color' },
                { name: 'Spacing', state: 'spacing' },
                { name: 'Typography', state: 'typography' }
              ]
            },
            {
              name: 'OTHERS',
              type: 'dropDown',
              tooltip: 'Others',
              icon: 'blur_on',
              state: 'others',
              sub: [
                { name: 'GALLERY', state: 'gallery' },
                { name: 'PRICINGS', state: 'pricing' },
                { name: 'USERS', state: 'users' },
                { name: 'BLANK', state: 'blank' }
              ]
            },
            {
              name: 'MATICONS',
              type: 'link',
              tooltip: 'Material Icons',
              icon: 'store',
              state: 'icons'
            },
            {
              name: 'Multi Level',
              type: 'dropDown',
              tooltip: 'Multi Level',
              icon: 'format_align_center',
              state: '',
              sub: [
                {
                  name: 'Level Two',
                  type: 'dropDown',
                  state: 'fake-1',
                  sub: [
                    { name: 'Level Three', state: 'fake-2' },
                    { name: 'Level Three', state: 'fake-3' }
                  ]
                },
                { name: 'Level Two', state: 'fake-4' },
                { name: 'Level Two', state: 'fake-5' }
              ]
            },
            {
              name: 'DOC',
              type: 'extLink',
              tooltip: 'Documentation',
              icon: 'library_books',
              state: 'http://demos.ui-lib.com/egret-doc/'
            }
          ];
        
          separatorMenu: IMenuItem[] = [
            {
              type: 'separator',
              name: 'Custom components'
            },
            {
              name: 'DASHBOARD',
              type: 'link',
              tooltip: 'Dashboard',
              icon: 'dashboard',
              state: 'dashboard'
            },
            {
              name: 'INBOX',
              type: 'link',
              tooltip: 'Inbox',
              icon: 'inbox',
              state: 'inbox'
            },
            {
              name: 'CHAT',
              type: 'link',
              tooltip: 'Chat',
              icon: 'chat',
              state: 'chat'
            },
            {
              name: 'CRUD Table',
              type: 'link',
              tooltip: 'CRUD Table',
              icon: 'format_list_bulleted',
              state: 'cruds/ngx-table'
            },
            {
              name: 'DIALOGS',
              type: 'dropDown',
              tooltip: 'Dialogs',
              icon: 'filter_none',
              state: 'dialogs',
              sub: [
                { name: 'CONFIRM', state: 'confirm' },
                { name: 'LOADER', state: 'loader' }
              ]
            },
            {
              name: 'PROFILE',
              type: 'dropDown',
              tooltip: 'Profile',
              icon: 'person',
              state: 'profile',
              sub: [
                { name: 'OVERVIEW', state: 'overview' },
                { name: 'SETTINGS', state: 'settings' },
                { name: 'BLANK', state: 'blank' }
              ]
            },
            {
              name: 'TOUR',
              type: 'link',
              tooltip: 'Tour',
              icon: 'flight_takeoff',
              state: 'tour'
            },
            {
              type: 'separator',
              name: 'Integrated components'
            },
            {
              name: 'CALENDAR',
              type: 'link',
              tooltip: 'Calendar',
              icon: 'date_range',
              state: 'calendar'
            },
            {
              name: 'MATERIAL',
              type: 'dropDown',
              tooltip: 'Material',
              icon: 'favorite',
              state: 'material',
              sub: [
                { name: 'BUTTONS', state: 'buttons' },
                { name: 'Button Toggle', state: 'button-toggle' },
                { name: 'Buttons Loading', state: 'loading-buttons' },
                { name: 'CARDS', state: 'cards' },
                { name: 'GRIDS', state: 'grids' },
                { name: 'LISTS', state: 'lists' },
                { name: 'MENU', state: 'menu' },
                { name: 'TABS', state: 'tabs' },
                { name: 'SELECT', state: 'select' },
                { name: 'RADIO', state: 'radio' },
                { name: 'AUTOCOMPLETE', state: 'autocomplete' },
                { name: 'SLIDER', state: 'slider' },
                { name: 'PROGRESS', state: 'progress' },
                { name: 'SNACKBAR', state: 'snackbar' }
              ]
            },
            {
              name: 'FORMS',
              type: 'dropDown',
              tooltip: 'Forms',
              icon: 'description',
              state: 'forms',
              sub: [
                { name: 'BASIC', state: 'basic' },
                { name: 'EDITOR', state: 'editor' },
                { name: 'UPLOAD', state: 'upload' },
                { name: 'WIZARD', state: 'wizard' }
              ]
            },
            {
              name: 'TABLES',
              type: 'dropDown',
              tooltip: 'Tables',
              icon: 'format_line_spacing',
              state: 'tables',
              sub: [
                { name: 'FULLSCREEN', state: 'fullscreen' },
                { name: 'PAGING', state: 'paging' },
                { name: 'FILTER', state: 'filter' }
              ]
            },
            {
              name: 'MAP',
              type: 'link',
              tooltip: 'Map',
              icon: 'add_location',
              state: 'map'
            },
            {
              name: 'CHARTS',
              type: 'link',
              tooltip: 'Charts',
              icon: 'show_chart',
              state: 'charts'
            },
            {
              name: 'DND',
              type: 'link',
              tooltip: 'Drag and Drop',
              icon: 'adjust',
              state: 'dragndrop'
            },
            {
              type: 'separator',
              name: 'Other components'
            },
            {
              name: 'SESSIONS',
              type: 'dropDown',
              tooltip: 'Pages',
              icon: 'view_carousel',
              state: 'sessions',
              sub: [
                { name: 'SIGNUP', state: 'signup' },
                { name: 'SIGNIN', state: 'signin' },
                { name: 'FORGOT', state: 'forgot-password' },
                { name: 'LOCKSCREEN', state: 'lockscreen' },
                { name: 'NOTFOUND', state: '404' },
                { name: 'ERROR', state: 'error' }
              ]
            },
            {
              name: 'OTHERS',
              type: 'dropDown',
              tooltip: 'Others',
              icon: 'blur_on',
              state: 'others',
              sub: [
                { name: 'GALLERY', state: 'gallery' },
                { name: 'PRICINGS', state: 'pricing' },
                { name: 'USERS', state: 'users' },
                { name: 'BLANK', state: 'blank' }
              ]
            },
            {
              name: 'MATICONS',
              type: 'link',
              tooltip: 'Material Icons',
              icon: 'store',
              state: 'icons'
            },
            {
              name: 'DOC',
              type: 'extLink',
              tooltip: 'Documentation',
              icon: 'library_books',
              state: 'http://demos.ui-lib.com/egret-doc/'
            }
          ];
        
          plainMenu: IMenuItem[] = [
            {
              name: 'DASHBOARD',
              type: 'link',
              tooltip: 'Dashboard',
              icon: 'dashboard',
              state: 'dashboard'
            },
            {
              name: 'INBOX',
              type: 'link',
              tooltip: 'Inbox',
              icon: 'inbox',
              state: 'inbox'
            },
            {
              name: 'CHAT',
              type: 'link',
              tooltip: 'Chat',
              icon: 'chat',
              state: 'chat'
            },
            {
              name: 'CRUD Table',
              type: 'link',
              tooltip: 'CRUD Table',
              icon: 'format_list_bulleted',
              state: 'cruds/ngx-table'
            },
            {
              name: 'CALENDAR',
              type: 'link',
              tooltip: 'Calendar',
              icon: 'date_range',
              state: 'calendar'
            },
            {
              name: 'DIALOGS',
              type: 'dropDown',
              tooltip: 'Dialogs',
              icon: 'filter_none',
              state: 'dialogs',
              sub: [
                { name: 'CONFIRM', state: 'confirm' },
                { name: 'LOADER', state: 'loader' }
              ]
            },
            {
              name: 'MATERIAL',
              type: 'dropDown',
              icon: 'favorite',
              state: 'component',
              sub: [
                { name: 'BUTTONS', state: 'buttons' },
                { name: 'Button Toggle', state: 'button-toggle' },
                { name: 'Buttons Loading', state: 'loading-buttons' },
                { name: 'CARDS', state: 'cards' },
                { name: 'GRIDS', state: 'grids' },
                { name: 'LISTS', state: 'lists' },
                { name: 'MENU', state: 'menu' },
                { name: 'TABS', state: 'tabs' },
                { name: 'SELECT', state: 'select' },
                { name: 'RADIO', state: 'radio' },
                { name: 'AUTOCOMPLETE', state: 'autocomplete' },
                { name: 'SLIDER', state: 'slider' },
                { name: 'PROGRESS', state: 'progress' },
                { name: 'SNACKBAR', state: 'snackbar' }
              ]
            },
            {
              name: 'FORMS',
              type: 'dropDown',
              tooltip: 'Forms',
              icon: 'description',
              state: 'forms',
              sub: [
                { name: 'BASIC', state: 'basic' },
                { name: 'EDITOR', state: 'editor' },
                { name: 'UPLOAD', state: 'upload' },
                { name: 'WIZARD', state: 'wizard' }
              ]
            },
            {
              name: 'TABLES',
              type: 'dropDown',
              tooltip: 'Tables',
              icon: 'format_line_spacing',
              state: 'tables',
              sub: [
                { name: 'FULLSCREEN', state: 'fullscreen' },
                { name: 'PAGING', state: 'paging' },
                { name: 'FILTER', state: 'filter' }
              ]
            },
            {
              name: 'PROFILE',
              type: 'dropDown',
              tooltip: 'Profile',
              icon: 'person',
              state: 'profile',
              sub: [
                { name: 'OVERVIEW', state: 'overview' },
                { name: 'SETTINGS', state: 'settings' },
                { name: 'BLANK', state: 'blank' }
              ]
            },
            {
              name: 'TOUR',
              type: 'link',
              tooltip: 'Tour',
              icon: 'flight_takeoff',
              state: 'tour'
            },
            {
              name: 'MAP',
              type: 'link',
              tooltip: 'Map',
              icon: 'add_location',
              state: 'map'
            },
            {
              name: 'CHARTS',
              type: 'link',
              tooltip: 'Charts',
              icon: 'show_chart',
              state: 'charts'
            },
            {
              name: 'DND',
              type: 'link',
              tooltip: 'Drag and Drop',
              icon: 'adjust',
              state: 'dragndrop'
            },
            {
              name: 'SESSIONS',
              type: 'dropDown',
              tooltip: 'Pages',
              icon: 'view_carousel',
              state: 'sessions',
              sub: [
                { name: 'SIGNUP', state: 'signup' },
                { name: 'SIGNIN', state: 'signin' },
                { name: 'FORGOT', state: 'forgot-password' },
                { name: 'LOCKSCREEN', state: 'lockscreen' },
                { name: 'NOTFOUND', state: '404' },
                { name: 'ERROR', state: 'error' }
              ]
            },
            {
              name: 'OTHERS',
              type: 'dropDown',
              tooltip: 'Others',
              icon: 'blur_on',
              state: 'others',
              sub: [
                { name: 'GALLERY', state: 'gallery' },
                { name: 'PRICINGS', state: 'pricing' },
                { name: 'USERS', state: 'users' },
                { name: 'BLANK', state: 'blank' }
              ]
            },
            {
              name: 'MATICONS',
              type: 'link',
              tooltip: 'Material Icons',
              icon: 'store',
              state: 'icons'
            },
            {
              name: 'DOC',
              type: 'extLink',
              tooltip: 'Documentation',
              icon: 'library_books',
              state: 'http://demos.ui-lib.com/egret-doc/'
            }*/
        ];
        // Icon menu TITLE at the very top of navigation.
        // This title will appear if any icon type item is present in menu.
        this.iconTypeMenuTitle = 'Frequently Accessed';
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.iconMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    // Customizer component uses this method to change menu.
    // You can remove this method and customizer component.
    // Or you can customize this method to supply different menu for
    // different user type.
    publishNavigationChange(menuType) {
        //switch (menuType) {
        //    case 'separator-menu':
        //      this.menuItems.next(this.separatorMenu);
        //      break;
        //    case 'icon-menu':
        //      this.menuItems.next(this.iconMenu);
        //      break;
        //    default:
        //      this.menuItems.next(this.plainMenu);
        //  }
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/jwt-auth.service */ "nZzT");






class AuthGuard {
    constructor(router, jwtAuth) {
        this.router = router;
        this.jwtAuth = jwtAuth;
    }
    canActivate(route, state) {
        return true;
        //if (this.jwtAuth.isLoggedIn()) {
        //  return true;
        //} else {
        //  this.router.navigate(["/signin"], {
        //    queryParams: {
        //      return: state.url
        //    }
        //  });
        //  return false;
        //}
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"] }]; }, null); })();


/***/ }),

/***/ "OE/m":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/reports/reports.component.ts ***!
  \***************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 2, vars: 0, template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/theme.service */ "ETNk");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/navigation.service */ "LFK6");
/* harmony import */ var _services_route_parts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/route-parts.service */ "vafs");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "LjFu");
/* harmony import */ var _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/user-role.guard */ "zt0U");
/* harmony import */ var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.service */ "3kSh");
/* harmony import */ var _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/app-loader/app-loader.service */ "3sEA");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shared-components.module */ "jgPy");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/shared-directives.module */ "mnDI");




// SERVICES











class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"],
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"],
        _services_route_parts_service__WEBPACK_IMPORTED_MODULE_6__["RoutePartsService"],
        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
        _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_8__["UserRoleGuard"],
        _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__["AppConfirmService"],
        _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_10__["AppLoaderService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_11__["SharedComponentsModule"],
            _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_12__["SharedPipesModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__["SharedDirectivesModule"]
        ], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_11__["SharedComponentsModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_12__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__["SharedDirectivesModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _components_shared_components_module__WEBPACK_IMPORTED_MODULE_11__["SharedComponentsModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_12__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__["SharedDirectivesModule"]], exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_11__["SharedComponentsModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_12__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__["SharedDirectivesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                    _components_shared_components_module__WEBPACK_IMPORTED_MODULE_11__["SharedComponentsModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_12__["SharedPipesModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__["SharedDirectivesModule"]
                ],
                providers: [
                    _services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"],
                    _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"],
                    _services_route_parts_service__WEBPACK_IMPORTED_MODULE_6__["RoutePartsService"],
                    _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                    _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_8__["UserRoleGuard"],
                    _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__["AppConfirmService"],
                    _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_10__["AppLoaderService"]
                ],
                exports: [
                    _components_shared_components_module__WEBPACK_IMPORTED_MODULE_11__["SharedComponentsModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_12__["SharedPipesModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__["SharedDirectivesModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "RpVl":
/*!***********************************************!*\
  !*** ./src/app/shared/inmemory-db/chat-db.ts ***!
  \***********************************************/
/*! exports provided: ChatDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDB", function() { return ChatDB; });
class ChatDB {
}
ChatDB.user = [
    {
        id: "7863a6802ez0e277a0f98534",
        name: "John Doe",
        avatar: "assets/images/face-1.jpg",
        status: "online",
        chatInfo: [
            {
                chatId: "89564a680b3249760ea21fe77",
                contactId: "323sa680b3249760ea21rt47",
                contactName: "Frank Powell",
                unread: 4,
                lastChatTime: "2017-06-12T02:10:18.931Z"
            },
            {
                chatId: "3289564a680b2134760ea21fe7753",
                contactId: "14663a3406eb47ffa63d4fec9429cb71",
                contactName: "Betty Diaz",
                unread: 0,
                lastChatTime: "2019-03-10T02:10:18.931Z"
            }
        ]
    }
];
ChatDB.contacts = [
    {
        id: "323sa680b3249760ea21rt47",
        name: "Frank Powell",
        avatar: "assets/images/faces/13.jpg",
        status: "online",
        mood: ""
    },
    {
        id: "14663a3406eb47ffa63d4fec9429cb71",
        name: "Betty Diaz",
        avatar: "assets/images/faces/12.jpg",
        status: "online",
        mood: ""
    },
    {
        id: "43bd9bc59d164b5aea498e3ae1c24c3c",
        name: "Brian Stephens",
        avatar: "assets/images/faces/3.jpg",
        status: "online",
        mood: ""
    },
    {
        id: "3fc8e01f3ce649d1caf884fbf4f698e4",
        name: "Jacqueline Day",
        avatar: "assets/images/faces/16.jpg",
        status: "offline",
        mood: ""
    },
    {
        id: "e929b1d790ab49968ed8e34648553df4",
        name: "Arthur Mendoza",
        avatar: "assets/images/faces/10.jpg",
        status: "online",
        mood: ""
    },
    {
        id: "d6caf04bba614632b5fecf91aebf4564",
        name: "Jeremy Lee",
        avatar: "assets/images/faces/9.jpg",
        status: "offline",
        mood: ""
    },
    {
        id: "be0fb188c8e242f097fafa24632107e4",
        name: "Johnny Newman",
        avatar: "assets/images/faces/5.jpg",
        status: "offline",
        mood: ""
    },
    {
        id: "dea902191b964a68ba5f2d93cff37e13",
        name: "Jeffrey Little",
        avatar: "assets/images/faces/15.jpg",
        status: "online",
        mood: ""
    },
    {
        id: "0bf58f5ccc4543a9f8747350b7bda3c7",
        name: "Barbara Romero",
        avatar: "assets/images/faces/4.jpg",
        status: "offline",
        mood: ""
    },
    {
        id: "c5d7498bbcb84d81fc72168871ac6a6e",
        name: "Daniel James",
        avatar: "assets/images/faces/2.jpg",
        status: "offline",
        mood: ""
    },
    {
        id: "97bfbdd9413e46efdaca2010400fe18c",
        name: "Alice Sanders",
        avatar: "assets/images/faces/17.jpg",
        status: "offline",
        mood: ""
    }
];
ChatDB.chatCollection = [
    {
        id: "89564a680b3249760ea21fe77",
        chats: [
            {
                contactId: "323sa680b3249760ea21rt47",
                text: "Do you ever find yourself falling into the “discount trap?”",
                time: "2018-02-10T08:45:28.291Z"
            },
            {
                contactId: "7863a6802ez0e277a0f98534",
                text: "Giving away your knowledge or product just to gain clients?",
                time: "2018-02-10T08:45:28.291Z"
            },
            {
                contactId: "323sa680b3249760ea21rt47",
                text: "Yes",
                time: "2018-02-10T08:45:28.291Z"
            },
            {
                contactId: "7863a6802ez0e277a0f98534",
                text: "Don’t feel bad. It happens to a lot of us",
                time: "2018-02-10T08:45:28.291Z"
            },
            {
                contactId: "323sa680b3249760ea21rt47",
                text: "Do you ever find yourself falling into the “discount trap?”",
                time: "2018-02-10T08:45:28.291Z"
            },
            {
                contactId: "7863a6802ez0e277a0f98534",
                text: "Giving away your knowledge or product just to gain clients?",
                time: "2018-02-10T08:45:28.291Z"
            },
            {
                contactId: "323sa680b3249760ea21rt47",
                text: "Yes",
                time: "2018-02-10T08:45:28.291Z"
            },
            {
                contactId: "7863a6802ez0e277a0f98534",
                text: "Don’t feel bad. It happens to a lot of us",
                time: "2018-02-10T08:45:28.291Z"
            }
        ]
    },
    {
        id: "3289564a680b2134760ea21fe7753",
        chats: [
            {
                contactId: "14663a3406eb47ffa63d4fec9429cb71",
                text: "Do you ever find yourself falling into the “discount trap?”",
                time: "2019-03-10T08:45:28.291Z"
            },
            {
                contactId: "7863a6802ez0e277a0f98534",
                text: "Giving away your knowledge or product just to gain clients?",
                time: "2019-03-10T08:45:28.291Z"
            },
            {
                contactId: "14663a3406eb47ffa63d4fec9429cb71",
                text: "Yes",
                time: "2019-03-10T08:45:28.291Z"
            },
            {
                contactId: "7863a6802ez0e277a0f98534",
                text: "Don’t feel bad. It happens to a lot of us",
                time: "2019-03-10T08:45:28.291Z"
            }
        ]
    }
];


/***/ }),

/***/ "S3+y":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.reducer */ "pja6");



const reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"]
};
const metaReducers = !environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


/***/ }),

/***/ "Sc0o":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/token.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/jwt-auth.service */ "nZzT");




class TokenInterceptor {
    constructor(jwtAuth) {
        this.jwtAuth = jwtAuth;
    }
    intercept(req, next) {
        var token = this.jwtAuth.token || this.jwtAuth.getJwtToken();
        var changedReq;
        if (token) {
            changedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                },
            });
        }
        else {
            changedReq = req;
        }
        return next.handle(changedReq);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__["JwtAuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__["JwtAuthService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/route-parts.service */ "vafs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_ui_lib_icon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/ui-lib-icon.service */ "72Mu");
/* harmony import */ var _app_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.socket */ "rGZO");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/auth/auth.actions */ "C9XJ");
















class AppComponent {
    constructor(title, router, activeRoute, routePartsService, iconService, appSocket, store) {
        this.title = title;
        this.router = router;
        this.activeRoute = activeRoute;
        this.routePartsService = routePartsService;
        this.iconService = iconService;
        this.appSocket = appSocket;
        this.store = store;
        this.appTitle = 'FEIMS';
        this.pageTitle = '';
        iconService.init();
    }
    ngOnInit() {
        this.changePageTitle();
        // Perform socket connect event or something.
        this.appSocket.onConnect().subscribe(() => console.log('socket connected'));
        // If auth profile is already in store,
        // load it into our store.
        const auth = localStorage.getItem('auth');
        if (auth) {
            const { token, user } = JSON.parse(auth);
            this.store.dispatch(Object(_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_8__["loginSuccess"])({ token, user }));
        }
    }
    ngAfterViewInit() {
    }
    changePageTitle() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((routeChange) => {
            const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
            if (!routeParts.length) {
                return this.title.setTitle(this.appTitle);
            }
            // Extract title from parts;
            this.pageTitle = routeParts
                .reverse()
                .map((part) => part.title)
                .reduce((partA, partI) => { return `${partA} > ${partI}`; });
            this.pageTitle += ` | ${this.appTitle}`;
            this.title.setTitle(this.pageTitle);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_ui_lib_icon_service__WEBPACK_IMPORTED_MODULE_5__["UILibIconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_socket__WEBPACK_IMPORTED_MODULE_6__["AppSocket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"] }, { type: _shared_services_ui_lib_icon_service__WEBPACK_IMPORTED_MODULE_5__["UILibIconService"] }, { type: _app_socket__WEBPACK_IMPORTED_MODULE_6__["AppSocket"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "TgYD":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/dropdown.directive */ "Bp9c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/dropdown-link.directive */ "UGQK");
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../directives/dropdown-anchor.directive */ "r/oB");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");


















function SidenavComponent_div_1_div_5_button_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.icon);
} }
function SidenavComponent_div_1_div_5_button_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 20);
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r6.svgIcon);
} }
function SidenavComponent_div_1_div_5_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_div_5_button_1_mat_icon_1_Template, 2, 1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_div_1_div_5_button_1_mat_icon_2_Template, 1, 1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r6.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", item_r6.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.svgIcon);
} }
function SidenavComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_div_5_button_1_Template, 3, 4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r6.disabled && item_r6.type === "icon");
} }
const _c0 = function () { return { margin: "0 -24px" }; };
function SidenavComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_div_1_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.iconTypeMenuTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
} }
function SidenavComponent_li_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, item_r13.name));
} }
function SidenavComponent_li_3_div_2_a_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.icon);
} }
function SidenavComponent_li_3_div_2_a_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 20);
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r13.svgIcon);
} }
const _c1 = function (a0) { return { background: a0 }; };
function SidenavComponent_li_3_div_2_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r26.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r26.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r26.value);
} }
function SidenavComponent_li_3_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_1_mat_icon_2_Template, 1, 1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_3_div_2_a_1_span_7_Template, 2, 7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r13.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, item_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r13.badges);
} }
function SidenavComponent_li_3_div_2_a_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.icon);
} }
function SidenavComponent_li_3_div_2_a_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r31.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r31.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r31.value);
} }
function SidenavComponent_li_3_div_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_2_mat_icon_1_Template, 2, 1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_li_3_div_2_a_2_span_6_Template, 2, 7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r13.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r13.badges);
} }
function SidenavComponent_li_3_div_2_a_3_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.icon);
} }
function SidenavComponent_li_3_div_2_a_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 20);
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r13.svgIcon);
} }
function SidenavComponent_li_3_div_2_a_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r38.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r38.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r38.value);
} }
function SidenavComponent_li_3_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_3_mat_icon_1_Template, 2, 1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_3_mat_icon_2_Template, 1, 1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_3_div_2_a_3_span_7_Template, 2, 7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, item_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r13.badges);
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "", item_r13.state ? "/" + item_r13.state : "", "/", itemLvL2_r41.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, itemLvL2_r41.name));
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, itemLvL2_r41.name));
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL3_r49 = ctx.$implicit;
    const itemLvL2_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "", item_r13.state ? "/" + item_r13.state : "", "", itemLvL2_r41.state ? "/" + itemLvL2_r41.state : "", "/", itemLvL3_r49.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, itemLvL3_r49.name));
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_li_1_Template, 5, 6, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itemLvL2_r41.sub);
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_a_1_Template, 5, 5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_ul_4_li_1_a_2_Template, 7, 3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_Template, 2, 1, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r41.type !== "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r41.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r41.type === "dropDown");
} }
function SidenavComponent_li_3_div_2_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_Template, 4, 3, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r13.sub);
} }
function SidenavComponent_li_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_1_Template, 8, 7, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_2_Template, 7, 6, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_div_2_a_3_Template, 10, 6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavComponent_li_3_div_2_ul_4_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.type === "dropDown");
} }
function SidenavComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_1_Template, 5, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_Template, 5, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.type === "separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r13.disabled && item_r13.type !== "separator" && item_r13.type !== "icon");
} }
function SidenavComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const site_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", site_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, site_r55), " ");
} }
function SidenavComponent_li_13_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const faculty_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", faculty_r57.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, faculty_r57.name), " ");
} }
function SidenavComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select faculty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SidenavComponent_li_13_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.selectedFaculty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Select faculty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_13_mat_option_7_Template, 3, 4, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.selectedFaculty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getFaculties());
} }
function SidenavComponent_li_14_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_14_mat_option_7_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.navigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r61.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, department_r61.name), " ");
} }
function SidenavComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SidenavComponent_li_14_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.selectedDepartment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Select department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_14_mat_option_7_Template, 3, 4, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.selectedDepartment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getDepartments());
} }
class SidenavComponent {
    constructor(_router) {
        this._router = _router;
        this.sites = [
            'samaru',
            'kongo'
        ];
        this.faculties = [
            {
                name: 'law',
                site: 'kongo',
                code: 'law'
            },
            {
                name: 'administration',
                site: 'kongo',
                code: 'adm'
            },
            {
                name: 'sciences',
                site: 'samaru',
                code: 'sci'
            },
            {
                name: 'engineering',
                site: 'samaru',
                code: 'eng'
            },
            {
                name: 'social sciences',
                site: 'samaru',
                code: 'sol'
            }
        ];
        this.departments = [
            {
                name: 'civil law',
                faculty: 'law',
                code: 'cvl'
            },
            {
                name: 'sharia law',
                faculty: 'law',
                code: 'shr'
            },
            {
                name: 'business administration',
                faculty: 'administration',
                code: 'bsd'
            },
            {
                name: 'public administration',
                faculty: 'administration',
                code: 'pbc'
            },
            {
                name: 'mechanical engineering',
                faculty: 'engineering',
                code: 'mch'
            },
            {
                name: 'civil engineering',
                faculty: 'engineering',
                code: 'cvn'
            },
            {
                name: 'electrical engineering',
                faculty: 'engineering',
                code: 'een'
            },
            {
                name: 'biology',
                faculty: 'sciences',
                code: 'mch'
            },
            {
                name: 'chemistry',
                faculty: 'sciences',
                code: 'chm'
            },
            {
                name: 'mathematics',
                faculty: 'sciences',
                code: 'mth'
            },
            {
                name: 'sociology',
                faculty: 'social sciences',
                code: 'soc'
            },
            {
                name: 'economics',
                faculty: 'social sciences',
                code: 'ecn'
            }
        ];
        this.menuItems = [];
    }
    ngOnInit() { }
    getFaculties() {
        return this.faculties.filter((fac) => fac.site == this.selectedSite);
    }
    getDepartments() {
        return this.departments.filter((dep) => dep.faculty == this.selectedFaculty);
    }
    // Only for demo purpose
    addMenuItem() {
        this.menuItems.push({
            name: 'ITEM',
            type: 'dropDown',
            tooltip: 'Item',
            icon: 'done',
            state: 'material',
            sub: [
                { name: 'SUBITEM', state: 'cards' },
                { name: 'SUBITEM', state: 'buttons' }
            ]
        });
    }
    navigate() {
        console.log('displaying ' + this.selectedDepartment + ' buildings');
        this._router.navigate(['/dashboard/buildings', {}]);
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], inputs: { menuItems: ["items", "menuItems"], hasIconTypeMenuItem: ["hasIconMenu", "hasIconTypeMenuItem"], iconTypeMenuTitle: ["iconMenuTitle", "iconTypeMenuTitle"] }, decls: 15, vars: 6, consts: [[1, "sidenav-hold"], ["class", "icon-menu mb-16", 4, "ngIf"], ["appDropdown", "", 1, "sidenav"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["name", "site", 3, "value", "valueChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "icon-menu", "mb-16"], [1, "mb-16", "nav-item-sep"], [3, "ngStyle"], [1, "text-muted", "icon-menu-title"], ["class", "icon-menu-item", 4, "ngFor", "ngForOf"], [1, "icon-menu-item"], ["mat-raised-button", "", "routerLinkActive", "mat-bg-primary", 3, "matTooltip", "routerLink", 4, "ngIf"], ["mat-raised-button", "", "routerLinkActive", "mat-bg-primary", 3, "matTooltip", "routerLink"], ["class", "sidenav-mat-icon", 4, "ngIf"], ["class", "svgIcon", 3, "svgIcon", 4, "ngIf"], [1, "sidenav-mat-icon"], [1, "svgIcon", 3, "svgIcon"], ["appDropdownLink", "", "routerLinkActive", "open"], ["class", "nav-item-sep", 4, "ngIf"], ["class", "lvl1", 4, "ngIf"], [1, "nav-item-sep"], [1, "text-muted"], [1, "lvl1"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 4, "ngIf"], ["class", "submenu lvl2", "appDropdown", "", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink"], [1, "item-name", "lvl1"], ["fxFlex", ""], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href"], ["appDropdownToggle", "", "matRipple", ""], [1, "menu-caret"], ["appDropdown", "", 1, "submenu", "lvl2"], ["class", "submenu lvl3", "appDropdown", "", 4, "ngIf"], [1, "item-name", "lvl2"], ["appDropdown", "", 1, "submenu", "lvl3"], [1, "item-name", "lvl3"], [3, "value"], [3, "value", "valueChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SidenavComponent_Template_mat_select_valueChange_9_listener($event) { return ctx.selectedSite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Select site ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidenavComponent_mat_option_12_Template, 3, 4, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidenavComponent_li_13_Template, 8, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SidenavComponent_li_14_Template, 8, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasIconTypeMenuItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedSite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sites);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFaculty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_12__["DropdownLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_13__["DropdownAnchorDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.template.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['items']
        }], hasIconTypeMenuItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hasIconMenu']
        }], iconTypeMenuTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['iconMenuTitle']
        }] }); })();


/***/ }),

/***/ "UGQK":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/*! exports provided: DropdownLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function() { return DropdownLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "Bp9c");




class DropdownLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
        // if (value) {
        //   this.nav.closeOtherLinks(this);
        // }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.open = !this.open;
    }
}
DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) { return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"])); };
DropdownLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownLinkDirective, selectors: [["", "appDropdownLink", ""]], hostVars: 2, hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);
    } }, inputs: { group: "group", open: "open" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdownLink]',
            }]
    }], function () { return [{ type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "UnY0":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-side/sidebar-side.component.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarSideComponent", function() { return SidebarSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "LFK6");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/theme.service */ "ETNk");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/layout.service */ "rmxa");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "TgYD");















function SidebarSideComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
} }
class SidebarSideComponent {
    constructor(navService, themeService, layout, jwtAuth) {
        this.navService = navService;
        this.themeService = themeService;
        this.layout = layout;
        this.jwtAuth = jwtAuth;
    }
    ngOnInit() {
        this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
        this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
            this.menuItems = menuItem;
            //Checks item list has any icon type.
            this.hasIconTypeMenuItem = !!this.menuItems.filter(item => item.type === "icon").length;
        });
        this.layoutConf = this.layout.layoutConf;
    }
    ngAfterViewInit() { }
    ngOnDestroy() {
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    }
    toggleCollapse() {
        if (this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({
                sidebarCompactToggle: false
            });
        }
        else {
            this.layout.publishLayoutChange({
                // sidebarStyle: "compact",
                sidebarCompactToggle: true
            });
        }
    }
}
SidebarSideComponent.ɵfac = function SidebarSideComponent_Factory(t) { return new (t || SidebarSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"])); };
SidebarSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarSideComponent, selectors: [["app-sidebar-side"]], decls: 16, vars: 5, consts: [[1, "sidebar-panel"], ["id", "scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [1, "sidebar-hold"], [1, "branding"], [1, "app-logo-text"], ["style", "margin: auto", 4, "ngIf"], [1, "app-user"], [1, "app-user-photo"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "mat-elevation-z1"], [1, "app-user-name", "mb-8"], [1, "icon-xs", "text-muted"], [3, "items", "hasIconMenu", "iconMenuTitle"], [2, "margin", "auto"]], template: function SidebarSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FEIMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarSideComponent_span_6_Template, 1, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-sidenav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jwtAuth == null ? null : ctx.jwtAuth.user == null ? null : ctx.jwtAuth.user.displayName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems)("hasIconMenu", ctx.hasIconTypeMenuItem)("iconMenuTitle", ctx.iconTypeMenuTitle);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-sidebar-side",
                templateUrl: "./sidebar-side.component.html"
            }]
    }], function () { return [{ type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"] }]; }, null); })();


/***/ }),

/***/ "VgRj":
/*!**********************************************!*\
  !*** ./src/app/shared/helpers/url.helper.ts ***!
  \**********************************************/
/*! exports provided: getQueryParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParam", function() { return getQueryParam; });
function getQueryParam(prop) {
    var params = {};
    var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
    var definitions = search.split('&');
    definitions.forEach(function (val, key) {
        var parts = val.split('=', 2);
        params[parts[0]] = parts[1];
    });
    return (prop && prop in params) ? params[prop] : params;
}


/***/ }),

/***/ "X2tk":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/notifications/notifications.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");







const _c0 = function (a0) { return [a0]; };
function NotificationsComponent_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const n_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", n_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, n_r2.route || "/dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.time);
} }
function NotificationsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_5_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.clearAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clear all notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NotificationsComponent {
    constructor(router) {
        this.router = router;
        // Dummy notifications
        this.notifications = [{
                message: 'New contact added',
                icon: 'assignment_ind',
                time: '1 min ago',
                route: '/inbox',
                color: 'primary'
            }, {
                message: 'New message',
                icon: 'chat',
                time: '4 min ago',
                route: '/chat',
                color: 'accent'
            }, {
                message: 'Server rebooted',
                icon: 'settings_backup_restore',
                time: '12 min ago',
                route: '/charts',
                color: 'warn'
            }];
    }
    ngOnInit() {
        this.router.events.subscribe((routeChange) => {
            if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.notificPanel.close();
            }
        });
    }
    clearAll(e) {
        e.preventDefault();
        this.notifications = [];
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], inputs: { notificPanel: "notificPanel" }, decls: 6, vars: 2, consts: [[1, "text-center", "mat-bg-primary", "pt-16", "pb-16"], [1, "m-0", "text-white"], ["role", "list", 1, "notification-list"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "text-center mt-16", 4, "ngIf"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], [1, "notific-icon", "mr-16", 3, "color"], [3, "routerLink"], [1, "mat-list-text"], [1, "message"], [1, "time", "text-muted"], [1, "text-center", "mt-16"], ["href", "#", 3, "click"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsComponent_mat_list_item_4_Template, 9, 7, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationsComponent_div_5_Template, 4, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notifications',
                templateUrl: './notifications.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "XsgX":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");





class AuthLayoutComponent {
    constructor(translate) {
        this.translate = translate;
        // Translator init
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "Y9BQ":
/*!***********************************************************!*\
  !*** ./src/app/shared/inmemory-db/inmemory-db.service.ts ***!
  \***********************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _chat_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-db */ "RpVl");
/* harmony import */ var _invoices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoices */ "sf3n");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "+5re");



class InMemoryDataService {
    createDb() {
        return {
            'contacts': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].contacts,
            'chat-collections': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].chatCollection,
            'chat-user': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].user,
            'invoices': _invoices__WEBPACK_IMPORTED_MODULE_1__["InvoiceDB"].invoices,
            'todoList': _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"].todoList,
            'todoTag': _todo__WEBPACK_IMPORTED_MODULE_2__["TodoTag"].tag
        };
    }
}


/***/ }),

/***/ "YyUd":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
  \*******************************************************/
/*! exports provided: GetValueByKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValueByKeyPipe", function() { return GetValueByKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class GetValueByKeyPipe {
    transform(value, id, property) {
        const filteredObj = value.find(item => {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    }
}
GetValueByKeyPipe.ɵfac = function GetValueByKeyPipe_Factory(t) { return new (t || GetValueByKeyPipe)(); };
GetValueByKeyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getValueByKey", type: GetValueByKeyPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetValueByKeyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "getValueByKey",
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "wzUX");
/* harmony import */ var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/inmemory-db/inmemory-db.service */ "Y9BQ");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/error-handler.service */ "nAk8");
/* harmony import */ var _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/interceptors/token.interceptor */ "Sc0o");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _socket_socket_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./socket/socket.module */ "1lqc");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/app.reducer */ "S3+y");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./store/auth/auth.effects */ "nMA2");




// import { GestureConfig } from '@angular/material/core';











//MaaterialModule


















// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](httpClient);
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlerService"] },
        // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
        { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
        // REQUIRED IF YOU USE JWT AUTHENTICATION
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
            multi: true,
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            }),
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"], { passThruUnknownUrl: true }),
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["rootRouterConfig"], { useHash: false, relativeLinkResolution: 'legacy' }),
            _socket_socket_module__WEBPACK_IMPORTED_MODULE_16__["SocketModule"].forRoot({ url: 'wss://api.narr.ng' }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_19__["reducers"], { metaReducers: _store_app_reducer__WEBPACK_IMPORTED_MODULE_19__["metaReducers"] }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_18__["StoreRouterConnectingModule"].forRoot({
                stateKey: 'router',
                routerState: 1 /* Minimal */
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__["EffectsModule"].forRoot([_store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_23__["AuthEffect"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _socket_socket_module__WEBPACK_IMPORTED_MODULE_16__["SocketModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_18__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                        }
                    }),
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"], { passThruUnknownUrl: true }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["rootRouterConfig"], { useHash: false, relativeLinkResolution: 'legacy' }),
                    _socket_socket_module__WEBPACK_IMPORTED_MODULE_16__["SocketModule"].forRoot({ url: 'wss://api.narr.ng' }),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_19__["reducers"], { metaReducers: _store_app_reducer__WEBPACK_IMPORTED_MODULE_19__["metaReducers"] }),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_18__["StoreRouterConnectingModule"].forRoot({
                        stateKey: 'router',
                        routerState: 1 /* Minimal */
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__["EffectsModule"].forRoot([_store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_23__["AuthEffect"]])
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlerService"] },
                    // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
                    { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                    // REQUIRED IF YOU USE JWT AUTHENTICATION
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
                        multi: true,
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "main-footer"], [1, "container-dynamic", "d-flex"], [1, "m-auto"], ["href", "https://ui-lib.com"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ABU/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Design & Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lexington Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aYsj":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relative-time.pipe */ "336X");
/* harmony import */ var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./excerpt.pipe */ "IZEZ");
/* harmony import */ var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-value-by-key.pipe */ "YyUd");






const pipes = [
    _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"],
    _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"],
    _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]
];
class SharedPipesModule {
}
SharedPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedPipesModule });
SharedPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedPipesModule_Factory(t) { return new (t || SharedPipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedPipesModule, { declarations: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"],
        _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"],
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"],
        _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"],
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: pipes,
                exports: pipes
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _admin_components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/components/about/about.component */ "k7p9");
/* harmony import */ var _admin_components_buildings_buildings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/components/buildings/buildings.component */ "3slX");
/* harmony import */ var _admin_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/components/home/home.component */ "gTBF");
/* harmony import */ var _admin_components_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/components/reports/reports.component */ "OE/m");
/* harmony import */ var _admin_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/components/settings/settings.component */ "+Iyy");
/* harmony import */ var _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/layouts/admin-layout/admin-layout.component */ "hOig");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");






//import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';

const rootRouterConfig = [
    {
        path: 'auth',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(mod => mod.AuthModule)
    },
    {
        path: 'dashboard1',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(mod => mod.AdminModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    },
    {
        path: 'dashboard',
        component: _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _admin_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'report',
                component: _admin_components_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
            },
            {
                path: 'settings',
                component: _admin_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
            },
            {
                path: 'about',
                component: _admin_components_about_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]
            },
            {
                path: 'buildings',
                component: _admin_components_buildings_buildings_component__WEBPACK_IMPORTED_MODULE_1__["BuildingsComponent"]
            }
        ]
    },
];


/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "eL2y":
/*!******************************************!*\
  !*** ./src/app/store/auth/auth.state.ts ***!
  \******************************************/
/*! exports provided: initialAuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthState", function() { return initialAuthState; });
const initialAuthState = {
    token: undefined,
    user: undefined
};


/***/ }),

/***/ "gPaL":
/*!****************************************************!*\
  !*** ./src/app/admin/services/building.service.ts ***!
  \****************************************************/
/*! exports provided: BuildingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingService", function() { return BuildingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class BuildingService {
    constructor(_http) {
        this._http = _http;
        this.buildingsUrl = "";
        this.singleBuildingUrl = "";
        this.addBuildingUrl = "";
    }
    addBuilding(buildingData) {
        return this._http.post(this.addBuildingUrl, buildingData);
    }
    getBuildings() {
        return this._http.get(this.buildingsUrl);
    }
    getSingleBuilding(id) {
        return this._http.get(this.singleBuildingUrl);
    }
}
BuildingService.ɵfac = function BuildingService_Factory(t) { return new (t || BuildingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BuildingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuildingService, factory: BuildingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gTBF":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "GmJt");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/theme.service */ "ETNk");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinycolor2 */ "Zss7");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _views_charts_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../views/charts/charts.component */ "49de");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");











const _c0 = function () { return { delay: "600ms", scale: ".9" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
const _c2 = function () { return { scale: ".9", delay: "300ms" }; };
const _c3 = function () { return { delay: "300ms", scale: ".9" }; };
class HomeComponent {
    constructor(themeService) {
        this.themeService = themeService;
    }
    ngAfterViewInit() { }
    ngOnInit() {
        this.themeService.onThemeChange.subscribe(activeTheme => {
            this.initTrafficVsSaleChart(activeTheme);
            this.initSessionsChart(activeTheme);
            this.initTrafficSourcesChart(activeTheme);
            this.initDailyTrafficChartBar(activeTheme);
            this.initTrafficGrowthChart(activeTheme);
        });
        this.initTrafficVsSaleChart(this.themeService.activatedTheme);
        this.initSessionsChart(this.themeService.activatedTheme);
        this.initTrafficSourcesChart(this.themeService.activatedTheme);
        this.initDailyTrafficChartBar(this.themeService.activatedTheme);
        this.initTrafficGrowthChart(this.themeService.activatedTheme);
        this.countryTrafficStats = [
            {
                country: "US",
                visitor: 14040,
                pageView: 10000,
                download: 1000,
                bounceRate: 30,
                flag: "flag-icon-us"
            },
            {
                country: "India",
                visitor: 12500,
                pageView: 10000,
                download: 1000,
                bounceRate: 45,
                flag: "flag-icon-in"
            },
            {
                country: "UK",
                visitor: 11000,
                pageView: 10000,
                download: 1000,
                bounceRate: 50,
                flag: "flag-icon-gb"
            },
            {
                country: "Brazil",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 30,
                flag: "flag-icon-br"
            },
            {
                country: "Spain",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 45,
                flag: "flag-icon-es"
            },
            {
                country: "Mexico",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 70,
                flag: "flag-icon-mx"
            },
            {
                country: "Russia",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 40,
                flag: "flag-icon-ru"
            }
        ];
        this.bounceRateGrowthChart = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: "0",
                top: "0",
                right: "0",
                bottom: "0"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["0", "1", "2", "3", "4"],
                axisLabel: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        show: false
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: "Bounce Rate",
                    type: "line",
                    smooth: false,
                    data: [0, 20, 90, 120, 190],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        opacity: 0,
                        width: 0
                    },
                    itemStyle: {
                        borderColor: "rgba(233, 31, 99, 0.4)"
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(244, 67, 54, 1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(244, 67, 54, .4)"
                                    }
                                ]
                            }
                        }
                    }
                }
            ]
        };
    }
    initTrafficVsSaleChart(theme) {
        this.trafficVsSaleOptions = {
            tooltip: {
                show: true,
                trigger: "axis",
                backgroundColor: "#fff",
                extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); color: #444",
                axisPointer: {
                    type: "line",
                    animation: true
                }
            },
            grid: {
                top: "10%",
                left: "80px",
                right: "30px",
                bottom: "60"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ],
                axisLabel: {
                    show: true,
                    margin: 20,
                    color: "#888"
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        show: false
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 30,
                    color: "#888"
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                }
            },
            series: [
                {
                    name: "Traffic",
                    label: { show: false, color: "#0168c1" },
                    type: "bar",
                    barGap: 0,
                    color: tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).setAlpha(.4).toString(),
                    smooth: true
                },
                {
                    name: "Sales",
                    label: { show: false, color: "#639" },
                    type: "bar",
                    color: tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).toString(),
                    smooth: true
                }
            ]
        };
        this.trafficData = [
            1400,
            1350,
            950,
            1150,
            950,
            1260,
            930,
            1450,
            1150,
            1400,
            1350,
            950,
            1150,
            950,
            1260
        ];
        this.saleData = [
            500,
            700,
            350,
            840,
            750,
            800,
            700,
            500,
            700,
            650,
            104,
            750,
            800,
            700,
            500
        ];
        this.trafficVsSale = {
            series: [
                {
                    data: this.trafficData
                },
                {
                    data: this.saleData
                }
            ]
        };
    }
    initSessionsChart(theme) {
        this.sessionOptions = {
            tooltip: {
                show: true,
                trigger: "axis",
                backgroundColor: "#fff",
                extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); color: #444",
                axisPointer: {
                    type: "line",
                    animation: true
                }
            },
            grid: {
                top: "10%",
                left: "60",
                right: "15",
                bottom: "60"
            },
            xAxis: {
                type: "category",
                data: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30"
                ],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 30,
                    color: "#888"
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 20,
                    color: "#888"
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                }
            },
            series: [
                {
                    data: [],
                    type: "line",
                    name: "User",
                    smooth: true,
                    color: tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).toString(),
                    lineStyle: {
                        opacity: 1,
                        width: 3
                    },
                    itemStyle: {
                        opacity: 0
                    },
                    emphasis: {
                        itemStyle: {
                            color: "rgba(16, 23, 76, 1)",
                            borderColor: "rgba(16, 23, 76, .4)",
                            opacity: 1,
                            borderWidth: 8
                        },
                        label: {
                            show: false,
                            backgroundColor: "#fff"
                        }
                    }
                }
            ]
        };
        this.sessionsData = [
            140,
            135,
            95,
            115,
            95,
            126,
            93,
            145,
            115,
            140,
            135,
            95,
            115,
            95,
            126,
            125,
            145,
            115,
            140,
            135,
            95,
            115,
            95,
            126,
            93,
            145,
            115,
            140,
            135,
            95
        ];
        this.sessions = {
            series: [
                {
                    data: this.sessionsData
                }
            ]
        };
    }
    initTrafficSourcesChart(theme) {
        this.trafficSourcesChart = {
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            color: [
                tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).setAlpha(.6).toString(),
                tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).setAlpha(.7).toString(),
                tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).setAlpha(.8).toString()
            ],
            tooltip: {
                show: false,
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            xAxis: [
                {
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: "Sessions",
                    type: "pie",
                    radius: ["55%", "85%"],
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    hoverOffset: 5,
                    stillShowZeroSum: false,
                    label: {
                        normal: {
                            show: false,
                            position: "center",
                            textStyle: {
                                fontSize: "13",
                                fontWeight: "normal"
                            },
                            formatter: "{a}"
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: "15",
                                fontWeight: "normal",
                                color: "rgba(15, 21, 77, 1)"
                            },
                            formatter: "{b} \n{c} ({d}%)"
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 335,
                            name: "Direct"
                        },
                        {
                            value: 310,
                            name: "Search Eng."
                        },
                        { value: 148, name: "Social" }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        };
    }
    initDailyTrafficChartBar(theme) {
        this.dailyTrafficChartBar = {
            legend: {
                show: false
            },
            grid: {
                left: "8px",
                right: "8px",
                bottom: "0",
                top: "0",
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: "rgba(0, 0, 0, .8)"
            },
            xAxis: [
                {
                    type: "category",
                    // data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    data: ["1", "2", "3", "4", "5", "6", "7"],
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff"
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    axisLabel: {
                        show: false,
                        formatter: "${value}"
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        interval: "auto"
                    }
                }
            ],
            series: [
                {
                    name: "Online",
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000],
                    label: { show: true, color: tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).toString(), position: "top" },
                    type: "bar",
                    barWidth: "12",
                    color: tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).toString(),
                    smooth: true,
                    itemStyle: {
                        barBorderRadius: 10
                    }
                }
            ]
        };
    }
    initTrafficGrowthChart(theme) {
        this.trafficGrowthChart = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: "0",
                top: "0",
                right: "0",
                bottom: "0"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["0", "1", "2", "3", "4"],
                axisLabel: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        show: false
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: "Visit",
                    type: "line",
                    smooth: false,
                    data: [0, 40, 140, 90, 160],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        opacity: 0,
                        width: 0
                    },
                    itemStyle: {
                        borderColor: "rgba(233, 31, 99, 0.4)"
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).toString()
                                    },
                                    {
                                        offset: 1,
                                        color: tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(theme.baseColor).setAlpha(.6).toString()
                                    }
                                ]
                            }
                        }
                    }
                }
            ]
        };
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 135, vars: 20, consts: [["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-sm", "25", "fxFlex.sm", "50"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", 1, "rounded-circle"], ["src", "assets/FEIMS_icons/sites.png", "alt", "", 1, "avatar-md", "rounded-circle"], [2, "width", "20px"], [1, "m-0", "text-14", "text-muted", "line-height-1"], [1, "text-18", "font-weight-bold", "text-green"], ["src", "assets/FEIMS_icons/buildings.png", "alt", "", 1, "avatar-md", "rounded-circle"], ["src", "assets/FEIMS_icons/hve.png", "alt", "", 1, "avatar-md", "rounded-circle"], ["src", "assets/FEIMS_icons/lve.png", "alt", "", 1, "avatar-md", "rounded-circle"], ["src", "assets/FEIMS_icons/obsolete.png", "alt", "", 1, "avatar-md", "rounded-circle"], ["src", "assets/FEIMS_icons/abandoned.png", "alt", "", 1, "avatar-md", "rounded-circle"], ["src", "assets/FEIMS_icons/repairable.png", "alt", "", 1, "avatar-md", "rounded-circle"], ["src", "assets/FEIMS_icons/good_condition.png", "alt", "", 1, "avatar-md", "rounded-circle"], ["fxLayoutAlign", "start center"], [1, "text-muted"], ["fxFlex", ""], ["color", "primary", "selected", "true", 1, "icon-chip"], [1, "m-0", "font-normal"], ["color", "accent", "selected", "true", 1, "icon-chip"], ["color", "warn", "selected", "true", 1, "icon-chip"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buildings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Equipment (HV)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Equipment (LV)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Obsolete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Abandoned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Repairable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Good Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-card-title", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Total expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-chip", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "252,450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Repairs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-chip", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "377,670");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Purchases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-chip", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "54,845");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "damages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-chip", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "245");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3)));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _views_charts_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
                animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
            }]
    }], function () { return [{ type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "hFtW":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerService", function() { return CustomizerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.service */ "rmxa");






class CustomizerService {
    constructor(router, layout) {
        this.router = router;
        this.layout = layout;
        this.colors = [
            {
                class: "black",
                active: false
            },
            {
                class: "white",
                active: false
            },
            {
                class: "dark-blue",
                active: false
            },
            {
                class: "grey",
                active: false
            },
            {
                class: "brown",
                active: false
            },
            {
                class: "gray",
                active: false
            },
            {
                class: "purple",
                active: false
            },
            {
                class: "blue",
                active: false
            },
            {
                class: "indigo",
                active: false
            },
            {
                class: "yellow",
                active: false
            },
            {
                class: "green",
                active: false
            },
            {
                class: "pink",
                active: false
            },
            {
                class: "red",
                active: false
            },
            {
                class: "slate",
                active: false
            }
        ];
        this.topbarColors = this.getTopbarColors();
        this.sidebarColors = this.getSidebarColors();
        this.footerColors = this.getFooterColors();
    }
    getSidebarColors() {
        let sidebarColors = ['black', 'slate', 'white', 'grey', 'brown', 'purple', 'dark-blue',];
        return this.colors.filter(color => {
            return sidebarColors.includes(color.class);
        })
            .map(c => {
            c.active = c.class === this.layout.layoutConf.sidebarColor;
            return Object.assign({}, c);
        });
    }
    getTopbarColors() {
        let topbarColors = ['black', 'slate', 'white', 'dark-gray', 'purple', 'dark-blue', 'indigo', 'pink', 'red', 'yellow', 'green'];
        return this.colors.filter(color => {
            return topbarColors.includes(color.class);
        })
            .map(c => {
            c.active = c.class === this.layout.layoutConf.topbarColor;
            return Object.assign({}, c);
        });
    }
    getFooterColors() {
        let footerColors = ['black', 'slate', 'white', 'dark-gray', 'purple', 'dark-blue', 'indigo', 'pink', 'red', 'yellow', 'green'];
        return this.colors.filter(color => {
            return footerColors.includes(color.class);
        })
            .map(c => {
            c.active = c.class === this.layout.layoutConf.footerColor;
            return Object.assign({}, c);
        });
    }
    changeSidebarColor(color) {
        this.layout.publishLayoutChange({ sidebarColor: color.class });
        this.sidebarColors = this.getSidebarColors();
    }
    changeTopbarColor(color) {
        this.layout.publishLayoutChange({ topbarColor: color.class });
        this.topbarColors = this.getTopbarColors();
    }
    changeFooterColor(color) {
        this.layout.publishLayoutChange({ footerColor: color.class });
        this.footerColors = this.getFooterColors();
    }
    removeClass(el, className) {
        if (!el || el.length === 0)
            return;
        if (!el.length) {
            el.classList.remove(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.remove(className);
            }
        }
    }
    addClass(el, className) {
        if (!el)
            return;
        if (!el.length) {
            el.classList.add(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(className);
            }
        }
    }
    findClosest(el, className) {
        if (!el)
            return;
        while (el) {
            var parent = el.parentElement;
            if (parent && this.hasClass(parent, className)) {
                return parent;
            }
            el = parent;
        }
    }
    hasClass(el, className) {
        if (!el)
            return;
        return (` ${el.className} `.replace(/[\n\t]/g, " ").indexOf(` ${className} `) > -1);
    }
    toggleClass(el, className) {
        if (!el)
            return;
        if (this.hasClass(el, className)) {
            this.removeClass(el, className);
        }
        else {
            this.addClass(el, className);
        }
    }
}
CustomizerService.ɵfac = function CustomizerService_Factory(t) { return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"])); };
CustomizerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomizerService, factory: CustomizerService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "hOig":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/theme.service */ "ETNk");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/layout.service */ "rmxa");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../breadcrumb/breadcrumb.component */ "+803");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../notifications/notifications.component */ "X2tk");
/* harmony import */ var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../header-top/header-top.component */ "urBs");
/* harmony import */ var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../sidebar-side/sidebar-side.component */ "UnY0");
/* harmony import */ var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../sidebar-top/sidebar-top.component */ "s0uO");
/* harmony import */ var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../header-side/header-side.component */ "Hkp+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../footer/footer.component */ "aF9I");


























function AdminLayoutComponent_app_header_top_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-top", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r9);
} }
function AdminLayoutComponent_app_sidebar_side_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidebar-side", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AdminLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sidebarMouseenter($event); })("mouseleave", function AdminLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.sidebarMouseleave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLayoutComponent_app_sidebar_top_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar-top");
} }
function AdminLayoutComponent_app_header_side_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r9);
} }
function AdminLayoutComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLayoutComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
} }
function AdminLayoutComponent_app_footer_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 22);
} }
function AdminLayoutComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
} }
function AdminLayoutComponent_app_footer_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
const _c0 = function (a0) { return { "visible": a0 }; };
class AdminLayoutComponent {
    constructor(router, translate, themeService, layout, cdr, jwtAuth) {
        this.router = router;
        this.translate = translate;
        this.themeService = themeService;
        this.layout = layout;
        this.cdr = cdr;
        this.jwtAuth = jwtAuth;
        this.isModuleLoading = false;
        this.scrollConfig = {};
        this.layoutConf = {};
        this.adminContainerClasses = {};
        // Check Auth Token is valid
        this.jwtAuth.checkTokenIsValid().subscribe();
        // Close sidenav after route change in mobile
        this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((routeChange) => {
            this.layout.adjustLayout({ route: routeChange.url });
            this.scrollToTop();
        });
        // Translator init
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ngOnInit() {
        // this.layoutConf = this.layout.layoutConf;
        this.layoutConfSub = this.layout.layoutConf$.subscribe((layoutConf) => {
            this.layoutConf = layoutConf;
            // console.log(this.layoutConf);
            this.adminContainerClasses = this.updateAdminContainerClasses(this.layoutConf);
            this.cdr.markForCheck();
        });
        // FOR MODULE LOADER FLAG
        this.moduleLoaderSub = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
                this.isModuleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
                this.isModuleLoading = false;
            }
        });
    }
    onResize(event) {
        this.layout.adjustLayout(event);
    }
    ngAfterViewInit() {
    }
    scrollToTop() {
        if (document) {
            setTimeout(() => {
                let element;
                if (this.layoutConf.topbarFixed) {
                    element = document.querySelector('#rightside-content-hold');
                }
                else {
                    element = document.querySelector('#main-content-wrap');
                }
                element.scrollTop = 0;
            });
        }
    }
    ngOnDestroy() {
        if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
        }
        if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
        }
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    }
    closeSidebar() {
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    }
    sidebarMouseenter(e) {
        // console.log(this.layoutConf);
        if (this.layoutConf.sidebarStyle === 'compact') {
            this.layout.publishLayoutChange({ sidebarStyle: 'full' }, { transitionClass: true });
        }
    }
    sidebarMouseleave(e) {
        // console.log(this.layoutConf);
        if (this.layoutConf.sidebarStyle === 'full' &&
            this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({ sidebarStyle: 'compact' }, { transitionClass: true });
        }
    }
    updateAdminContainerClasses(layoutConf) {
        return {
            'navigation-top': layoutConf.navigationPos === 'top',
            'sidebar-full': layoutConf.sidebarStyle === 'full',
            'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
            'compact-toggle-active': layoutConf.sidebarCompactToggle,
            'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
            'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
            'sidebar-closed': layoutConf.sidebarStyle === 'closed',
            'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
        };
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JwtAuthService"])); };
AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AdminLayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 22, vars: 22, consts: [[1, "app-admin-wrap", 3, "dir"], [3, "notificPanel", 4, "ngIf"], [3, "dir", "ngClass"], [3, "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "main-content-wrap", 1, "main-content-wrap", 3, "perfectScrollbar", "disabled"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "container-dynamic"], ["class", "m-auto", 4, "ngIf"], ["style", "margin: 0 -.33rem -.33rem", 4, "ngIf"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "end", 1, ""], ["notificationPanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "notificPanel"], [3, "mouseenter", "mouseleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"], [1, "m-auto"], [2, "margin", "0 -.33rem -.33rem"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLayoutComponent_app_header_top_1_Template, 1, 1, "app-header-top", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminLayoutComponent_app_sidebar_side_4_Template, 1, 0, "app-sidebar-side", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminLayoutComponent_app_sidebar_top_5_Template, 1, 0, "app-sidebar-top", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminLayoutComponent_app_header_side_7_Template, 1, 1, "app-header-side", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminLayoutComponent_div_9_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminLayoutComponent_span_13_Template, 1, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminLayoutComponent_app_footer_14_Template, 1, 0, "app-footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminLayoutComponent_span_15_Template, 1, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminLayoutComponent_app_footer_16_Template, 1, 0, "app-footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_div_click_17_listener() { return ctx.closeSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-notifications", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-white topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, " footer-white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", ctx.adminContainerClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "top" && ctx.layoutConf.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.scrollConfig)("disabled", !ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModuleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.footerFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.footerFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r9);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarDirective"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsComponent"], _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_15__["HeaderTopComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_16__["SidebarSideComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_17__["SidebarTopComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_18__["HeaderSideComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-layout',
                templateUrl: './admin-layout.template.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JwtAuthService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "iSAc":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/directives/egret-sidenav-helper/egret-sidenav-helper.service.ts ***!
  \****************************************************************************************/
/*! exports provided: EgretSidenavHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidenavHelperService", function() { return EgretSidenavHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class EgretSidenavHelperService {
    constructor() {
        this.sidenavList = [];
    }
    setSidenav(id, sidenav) {
        this.sidenavList[id] = sidenav;
    }
    getSidenav(id) {
        return this.sidenavList[id];
    }
}
EgretSidenavHelperService.ɵfac = function EgretSidenavHelperService_Factory(t) { return new (t || EgretSidenavHelperService)(); };
EgretSidenavHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EgretSidenavHelperService, factory: EgretSidenavHelperService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iSXr":
/*!********************************************************************************!*\
  !*** ./src/app/shared/search/search-input-over/search-input-over.component.ts ***!
  \********************************************************************************/
/*! exports provided: SearchInputOverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputOverComponent", function() { return SearchInputOverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search.service */ "Fj/B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");












const _c0 = function (a0) { return { open: a0 }; };
class SearchInputOverComponent {
    constructor(searchService, router, route) {
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.placeholder = "Search here";
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200))
            .subscribe(value => {
            this.search.emit(value);
            this.searchService.searchTerm.next(value);
        });
    }
    ngOnDestroy() {
        if (this.searchCtrlSub) {
            this.searchCtrlSub.unsubscribe();
        }
    }
    navigateToResult() {
        if (this.resultPage) {
            this.router.navigateByUrl(this.resultPage);
        }
    }
    open() {
        this.isOpen = true;
        this.navigateToResult();
    }
    close() {
        this.isOpen = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
}
SearchInputOverComponent.ɵfac = function SearchInputOverComponent_Factory(t) { return new (t || SearchInputOverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
SearchInputOverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchInputOverComponent, selectors: [["egret-search-input-over"]], inputs: { resultPage: "resultPage", placeholder: "placeholder" }, outputs: { search: "search" }, decls: 8, vars: 5, consts: [[1, "search-bar-wide", 3, "ngClass"], ["mat-icon-button", "", 1, "search-icon-btn", "ml-8", "mr-8", 3, "click"], ["type", "text", 1, "default-bg", 3, "formControl", "placeholder"], [1, "search-close", "text-muted", 3, "click"]], template: function SearchInputOverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputOverComponent_Template_button_click_1_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputOverComponent_Template_mat_icon_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchCtrl)("placeholder", ctx.placeholder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".search-bar-wide.open[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  z-index: 999;\n}\n.search-bar-wide.open[_ngcontent-%COMP%]   .search-icon-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.search-bar-wide.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n}\n.search-bar-wide.open[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  display: block;\n}\n.search-bar-wide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: none;\n  height: 100%;\n  width: 100%;\n}\n.search-bar-wide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  font-weight: 700;\n  padding-left: 15px;\n}\n.search-bar-wide[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlYXJjaC1pbnB1dC1vdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0FBQ047QUFDSTtFQUNFLGFBQUE7QUFDTjtBQUNJO0VBQ0UsY0FBQTtBQUNOO0FBRUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6InNlYXJjaC1pbnB1dC1vdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXItd2lkZSB7XG4gICYub3BlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjRweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgLnNlYXJjaC1pY29uLWJ0biB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLnNlYXJjaC1jbG9zZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgZGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpbnB1dCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC1jbG9zZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputOverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "egret-search-input-over",
                templateUrl: "./search-input-over.component.html",
                styleUrls: ["./search-input-over.component.scss"]
            }]
    }], function () { return [{ type: _search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { resultPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['resultPage']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['placeholder']
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["search"]
        }] }); })();


/***/ }),

/***/ "jbBc":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/example-viewer-template/example-viewer-template.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EgretExampleViewerTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretExampleViewerTemplateComponent", function() { return EgretExampleViewerTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../example-viewer/example-viewer.component */ "/eqn");








function EgretExampleViewerTemplateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "egret-example-viewer", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const example_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exampleId", example_r1)("path", ctx_r0.componentDirPath)("data", ctx_r0.exampleComponents[example_r1]);
} }
class EgretExampleViewerTemplateComponent {
    constructor(route) {
        this.route = route;
        this.exampleComponents = {};
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.route.params, this.route.data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribeAll))
            .subscribe(([params, data]) => {
            this.id = params['id'];
            this.examples = data.map[this.id];
            this.exampleComponents = data.components;
            this.componentDirPath = data.path;
            const title = this.id.replace('-', ' ');
            this.title = title.charAt(0).toUpperCase() + title.substring(1);
            // console.log(params, data);
        });
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
}
EgretExampleViewerTemplateComponent.ɵfac = function EgretExampleViewerTemplateComponent_Factory(t) { return new (t || EgretExampleViewerTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
EgretExampleViewerTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EgretExampleViewerTemplateComponent, selectors: [["egret-example-viewer-template"]], decls: 2, vars: 1, consts: [[1, "m-333"], ["class", "mb-24", 4, "ngFor", "ngForOf"], [1, "mb-24"], [3, "exampleId", "path", "data"]], template: function EgretExampleViewerTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EgretExampleViewerTemplateComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.examples);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_5__["EgretExampleViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLXZpZXdlci10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretExampleViewerTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'egret-example-viewer-template',
                templateUrl: './example-viewer-template.component.html',
                styleUrls: ['./example-viewer-template.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "jgPy":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-material.module */ "zMWy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search.module */ "kMeL");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directives/shared-directives.module */ "mnDI");
/* harmony import */ var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header-side/header-side.component */ "Hkp+");
/* harmony import */ var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar-side/sidebar-side.component */ "UnY0");
/* harmony import */ var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header-top/header-top.component */ "urBs");
/* harmony import */ var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar-top/sidebar-top.component */ "s0uO");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customizer/customizer.component */ "0VKv");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "hOig");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "XsgX");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notifications/notifications.component */ "X2tk");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "TgYD");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "aF9I");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "+803");
/* harmony import */ var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/app-confirm/app-confirm.component */ "3BvT");
/* harmony import */ var _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/app-loader/app-loader.component */ "5alQ");
/* harmony import */ var _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./button-loading/button-loading.component */ "wl2U");
/* harmony import */ var _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./egret-sidebar/egret-sidebar.component */ "l3Mw");
/* harmony import */ var _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bottom-sheet-share/bottom-sheet-share.component */ "qj9C");
/* harmony import */ var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./example-viewer/example-viewer.component */ "/eqn");
/* harmony import */ var _example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./example-viewer-template/example-viewer-template.component */ "jbBc");
/* harmony import */ var _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./egret-notifications2/egret-notifications2.component */ "3E2P");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "e6WT");











// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT


// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT


// ONLY FOR DEMO

// ALWAYS REQUIRED 














///Mat Select



const components = [
    _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_13__["HeaderTopComponent"],
    _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_14__["SidebarTopComponent"],
    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_19__["SidenavComponent"],
    _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_18__["NotificationsComponent"],
    _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_12__["SidebarSideComponent"],
    _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_11__["HeaderSideComponent"],
    _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_16__["AdminLayoutComponent"],
    _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_17__["AuthLayoutComponent"],
    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__["BreadcrumbComponent"],
    _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_22__["AppComfirmComponent"],
    _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_23__["AppLoaderComponent"],
    _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_29__["EgretNotifications2Component"],
    _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"],
    _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_24__["ButtonLoadingComponent"],
    _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["EgretSidebarComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
    _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["EgretSidebarTogglerDirective"],
    _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_26__["BottomSheetShareComponent"],
    _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_27__["EgretExampleViewerComponent"],
    _example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_28__["EgretExampleViewerTemplateComponent"]
];
class SharedComponentsModule {
}
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
            _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_10__["SharedDirectivesModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_13__["HeaderTopComponent"],
        _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_14__["SidebarTopComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_19__["SidenavComponent"],
        _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_18__["NotificationsComponent"],
        _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_12__["SidebarSideComponent"],
        _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_11__["HeaderSideComponent"],
        _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_16__["AdminLayoutComponent"],
        _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_17__["AuthLayoutComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__["BreadcrumbComponent"],
        _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_22__["AppComfirmComponent"],
        _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_23__["AppLoaderComponent"],
        _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_29__["EgretNotifications2Component"],
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"],
        _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_24__["ButtonLoadingComponent"],
        _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["EgretSidebarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
        _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["EgretSidebarTogglerDirective"],
        _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_26__["BottomSheetShareComponent"],
        _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_27__["EgretExampleViewerComponent"],
        _example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_28__["EgretExampleViewerTemplateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_10__["SharedDirectivesModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"]], exports: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_13__["HeaderTopComponent"],
        _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_14__["SidebarTopComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_19__["SidenavComponent"],
        _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_18__["NotificationsComponent"],
        _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_12__["SidebarSideComponent"],
        _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_11__["HeaderSideComponent"],
        _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_16__["AdminLayoutComponent"],
        _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_17__["AuthLayoutComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__["BreadcrumbComponent"],
        _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_22__["AppComfirmComponent"],
        _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_23__["AppLoaderComponent"],
        _egret_notifications2_egret_notifications2_component__WEBPACK_IMPORTED_MODULE_29__["EgretNotifications2Component"],
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"],
        _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_24__["ButtonLoadingComponent"],
        _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["EgretSidebarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
        _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["EgretSidebarTogglerDirective"],
        _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_26__["BottomSheetShareComponent"],
        _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_27__["EgretExampleViewerComponent"],
        _example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_28__["EgretExampleViewerTemplateComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_10__["SharedDirectivesModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"]
                ],
                declarations: components,
                // entryComponents: [AppComfirmComponent, AppLoaderComponent, BottomSheetShareComponent],
                exports: components
            }]
    }], null, null); })();


/***/ }),

/***/ "k7p9":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kMeL":
/*!************************************************!*\
  !*** ./src/app/shared/search/search.module.ts ***!
  \************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input-over/search-input-over.component */ "iSXr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");







class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputOverComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputOverComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputOverComponent"]],
                exports: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputOverComponent"]],
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "l3Mw":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/egret-sidebar/egret-sidebar.component.ts ***!
  \****************************************************************************/
/*! exports provided: EgretSidebarComponent, EgretSidebarTogglerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidebarComponent", function() { return EgretSidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidebarTogglerDirective", function() { return EgretSidebarTogglerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/match-media.service */ "30N5");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./egret-sidebar-helper.service */ "slWk");










const _c0 = ["*"];
class EgretSidebarComponent {
    constructor(matchMediaService, mediaObserver, sidebarHelperService, _renderer, _elementRef, cdr) {
        this.matchMediaService = matchMediaService;
        this.mediaObserver = mediaObserver;
        this.sidebarHelperService = sidebarHelperService;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.backdrop = null;
        this.lockedBreakpoint = "gt-sm";
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.sidebarHelperService.setSidebar(this.name, this);
        if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
            this.sidebarLockedOpen = true;
            this.opened = true;
        }
        else {
            this.sidebarLockedOpen = false;
            this.opened = false;
        }
        this.matchMediaService.onMediaChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeAll))
            .subscribe(() => {
            // console.log("medua sub");
            if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
                this.sidebarLockedOpen = true;
                this.opened = true;
            }
            else {
                this.sidebarLockedOpen = false;
                this.opened = false;
            }
        });
    }
    open() {
        this.opened = true;
        if (!this.sidebarLockedOpen && !this.backdrop) {
            this.showBackdrop();
        }
    }
    close() {
        this.opened = false;
        this.hideBackdrop();
    }
    toggle() {
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    }
    showBackdrop() {
        this.backdrop = this._renderer.createElement("div");
        this.backdrop.classList.add("egret-sidebar-overlay");
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop);
        // Close sidebar onclick
        this.backdrop.addEventListener("click", () => {
            this.close();
        });
        this.cdr.markForCheck();
    }
    hideBackdrop() {
        if (this.backdrop) {
            this.backdrop.parentNode.removeChild(this.backdrop);
            this.backdrop = null;
        }
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
        this.sidebarHelperService.removeSidebar(this.name);
    }
}
EgretSidebarComponent.ɵfac = function EgretSidebarComponent_Factory(t) { return new (t || EgretSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
EgretSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EgretSidebarComponent, selectors: [["egret-sidebar"]], hostVars: 8, hostBindings: function EgretSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("position-right", ctx.right)("open", ctx.opened)("sidebar-locked-open", ctx.sidebarLockedOpen)("is-over", ctx.isOver);
    } }, inputs: { name: "name", right: "right" }, ngContentSelectors: _c0, decls: 2, vars: 0, template: function EgretSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZ3JldC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "egret-sidebar",
                templateUrl: "./egret-sidebar.component.html",
                styleUrls: ["./egret-sidebar.component.scss"]
            }]
    }], function () { return [{ type: app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], right: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.position-right"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.open"]
        }], sidebarLockedOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.sidebar-locked-open"]
        }], isOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.is-over"]
        }] }); })();
class EgretSidebarTogglerDirective {
    constructor(egretSidebarHelperService) {
        this.egretSidebarHelperService = egretSidebarHelperService;
    }
    onClick() {
        this.egretSidebarHelperService.getSidebar(this.id).toggle();
    }
}
EgretSidebarTogglerDirective.ɵfac = function EgretSidebarTogglerDirective_Factory(t) { return new (t || EgretSidebarTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"])); };
EgretSidebarTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretSidebarTogglerDirective, selectors: [["", "egretSidebarToggler", ""]], hostBindings: function EgretSidebarTogglerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EgretSidebarTogglerDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { id: ["egretSidebarToggler", "id"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarTogglerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[egretSidebarToggler]"
            }]
    }], function () { return [{ type: _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidebarToggler"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
        }] }); })();


/***/ }),

/***/ "mnDI":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/shared-directives.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _font_size_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font-size.directive */ "8cvP");
/* harmony import */ var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-to.directive */ "GyvL");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.directive */ "Bp9c");
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-anchor.directive */ "r/oB");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-link.directive */ "UGQK");
/* harmony import */ var _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./egret-side-nav-toggle.directive */ "/1WF");
/* harmony import */ var _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./egret-sidenav-helper/egret-sidenav-helper.directive */ "qrO7");
/* harmony import */ var _egret_highlight_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./egret-highlight.directive */ "Gf25");











const directives = [
    _font_size_directive__WEBPACK_IMPORTED_MODULE_2__["FontSizeDirective"],
    _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollToDirective"],
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"],
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownAnchorDirective"],
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__["DropdownLinkDirective"],
    _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSideNavToggleDirective"],
    _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["EgretSidenavHelperDirective"],
    _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["EgretSidenavTogglerDirective"],
    _egret_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["EgretHighlightDirective"]
];
class SharedDirectivesModule {
}
SharedDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedDirectivesModule });
SharedDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedDirectivesModule_Factory(t) { return new (t || SharedDirectivesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedDirectivesModule, { declarations: [_font_size_directive__WEBPACK_IMPORTED_MODULE_2__["FontSizeDirective"],
        _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollToDirective"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"],
        _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownAnchorDirective"],
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__["DropdownLinkDirective"],
        _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSideNavToggleDirective"],
        _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["EgretSidenavHelperDirective"],
        _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["EgretSidenavTogglerDirective"],
        _egret_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["EgretHighlightDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_font_size_directive__WEBPACK_IMPORTED_MODULE_2__["FontSizeDirective"],
        _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollToDirective"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"],
        _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownAnchorDirective"],
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__["DropdownLinkDirective"],
        _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSideNavToggleDirective"],
        _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["EgretSidenavHelperDirective"],
        _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["EgretSidenavTogglerDirective"],
        _egret_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["EgretHighlightDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: directives,
                exports: directives
            }]
    }], null, null); })();


/***/ }),

/***/ "nAk8":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/error-handler.service.ts ***!
  \**********************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ErrorHandlerService extends _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] {
    constructor(injector) {
        super();
        this.injector = injector;
        this.errorCount = 0;
    }
    // https://github.com/angular/angular/issues/17010
    handleError(error) {
        let increment = 5;
        let max = 50;
        // Prevents change detection
        let debugCtx = error['ngDebugContext'];
        let changeDetectorRef = debugCtx && debugCtx.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]);
        if (changeDetectorRef)
            changeDetectorRef.detach();
        this.errorCount = this.errorCount + 1;
        if (this.errorCount % increment === 0) {
            console.log(' ');
            console.log(`errorHandler() was called ${this.errorCount} times.`);
            console.log(' ');
            super.handleError(error);
            if (this.errorCount === max) {
                console.log(' ');
                console.log(`Preventing recursive error after ${this.errorCount} recursive errors.`);
                console.log(' ');
                let appRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
                appRef.tick();
            }
        }
        else if (this.errorCount === 1) {
            super.handleError(error);
        }
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "nMA2":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffect", function() { return AuthEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var app_app_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.socket */ "rGZO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.actions */ "C9XJ");








class AuthEffect {
    constructor(actions$, appSocket) {
        this.actions$ = actions$;
        this.appSocket = appSocket;
        // after user has succesfully logged in,
        // we send login event to socket and
        // wait for the response.
        this.loginSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ token, user }) => {
            localStorage.setItem('auth', JSON.stringify({ token, user }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(({ token, user }) => {
            return this.appSocket.onLogin({ token, user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
            // this is where we processed the response from the socket,
            // maybe dispatch a new event buf for now
            // the response returned is the same as user payload from login.
            console.log(response);
        })), { dispatch: false });
        // clear auth profile from local storage
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => localStorage.removeItem('auth')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => {
            return this.appSocket.onLogout();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
            // event coming from socket logout
            // which for now no response was returned
            console.log(response);
        })), { dispatch: false });
    }
}
AuthEffect.ɵfac = function AuthEffect_Factory(t) { return new (t || AuthEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_app_socket__WEBPACK_IMPORTED_MODULE_2__["AppSocket"])); };
AuthEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthEffect, factory: AuthEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: app_app_socket__WEBPACK_IMPORTED_MODULE_2__["AppSocket"] }]; }, null); })();


/***/ }),

/***/ "nZzT":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/auth/jwt-auth.service.ts ***!
  \**********************************************************/
/*! exports provided: JwtAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtAuthService", function() { return JwtAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-store.service */ "tZUg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");










// ================= only for demo purpose ===========
const DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhkNDc4MDc4NmM3MjE3MjBkYzU1NzMiLCJlbWFpbCI6InJhZmkuYm9ncmFAZ21haWwuY29tIiwicm9sZSI6IlNBIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE1ODc3MTc2NTgsImV4cCI6MTU4ODMyMjQ1OH0.dXw0ySun5ex98dOzTEk0lkmXJvxg3Qgz4ed";
const DEMO_USER = {
    id: "5b700c45639d2c0c54b354ba",
    displayName: "Khalil M. Shams",
    role: "SA",
};
// ================= you will get those data from server =======
class JwtAuthService {
    constructor(ls, http, router, route) {
        this.ls = ls;
        this.http = http;
        this.router = router;
        this.route = route;
        this.user = {};
        this.user$ = (new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.user));
        this.JWT_TOKEN = "JWT_TOKEN";
        this.APP_USER = "EGRET_USER";
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/');
    }
    signin(username, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ token: DEMO_TOKEN, user: DEMO_USER })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            this.setUserAndToken(res.token, res.user, !!res);
            this.signingIn = false;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        }));
        // FOLLOWING CODE SENDS SIGNIN REQUEST TO SERVER
        // this.signingIn = true;
        // return this.http.post(`${environment.apiURL}/auth/local`, { username, password })
        //   .pipe(
        //     map((res: any) => {
        //       this.setUserAndToken(res.token, res.user, !!res);
        //       this.signingIn = false;
        //       return res;
        //     }),
        //     catchError((error) => {
        //       return throwError(error);
        //     })
        //   );
    }
    /*
      checkTokenIsValid is called inside constructor of
      shared/components/layouts/admin-layout/admin-layout.component.ts
    */
    checkTokenIsValid() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(DEMO_USER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((profile) => {
            this.setUserAndToken(this.getJwtToken(), profile, true);
            this.signingIn = false;
            return profile;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
        }));
        /*
          The following code get user data and jwt token is assigned to
          Request header using token.interceptor
          This checks if the existing token is valid when app is reloaded
        */
        // return this.http.get(`${environment.apiURL}/api/users/profile`)
        //   .pipe(
        //     map((profile: User) => {
        //       this.setUserAndToken(this.getJwtToken(), profile, true);
        //       return profile;
        //     }),
        //     catchError((error) => {
        //       this.signout();
        //       return of(error);
        //     })
        //   );
    }
    signout() {
        this.setUserAndToken(null, null, false);
        this.router.navigateByUrl("/signin");
    }
    isLoggedIn() {
        return !!this.getJwtToken();
    }
    getJwtToken() {
        return this.ls.getItem(this.JWT_TOKEN);
    }
    getUser() {
        return this.ls.getItem(this.APP_USER);
    }
    setUserAndToken(token, user, isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this.token = token;
        this.user = user;
        this.user$.next(user);
        this.ls.setItem(this.JWT_TOKEN, token);
        this.ls.setItem(this.APP_USER, user);
    }
}
JwtAuthService.ɵfac = function JwtAuthService_Factory(t) { return new (t || JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
JwtAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtAuthService, factory: JwtAuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "pja6":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "C9XJ");
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.state */ "eL2y");



const authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_auth_state__WEBPACK_IMPORTED_MODULE_2__["initialAuthState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"], (state, { token, user }) => ({ token, user })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logout"], (state) => ({ token: undefined, user: undefined })));


/***/ }),

/***/ "qj9C":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/bottom-sheet-share/bottom-sheet-share.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BottomSheetShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetShareComponent", function() { return BottomSheetShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "Km1n");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "UhP/");






class BottomSheetShareComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    ngOnInit() { }
    openLink(event) {
        this.bottomSheetRef.dismiss();
    }
}
BottomSheetShareComponent.ɵfac = function BottomSheetShareComponent_Factory(t) { return new (t || BottomSheetShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"])); };
BottomSheetShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomSheetShareComponent, selectors: [["app-bottom-sheet-share"]], decls: 19, vars: 0, consts: [[1, "icon-bottom-sheet", "icon-facebook"], [0, "xlink", "href", "#icon-facebook"], ["mat-list-item", "", "href", "https://www.facebook.com/sharer.php?u=https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258"], ["mat-line", ""], [0, "xlink", "href", "#icon-twitter"], ["mat-list-item", "", "href", "https://twitter.com/intent/tweet?url=https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258&hashtags=angular,template,landing"], [1, "icon-bottom-sheet", "icon-linkedin"], [0, "xlink", "href", "#icon-linkedin"], ["mat-list-item", "", "href", "https://www.linkedin.com/shareArticle?mini=true&url=https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258"]], template: function BottomSheetShareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Share on Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tweet About Us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "use", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Share on LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3R0b20tc2hlZXQtc2hhcmUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomSheetShareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottom-sheet-share',
                templateUrl: './bottom-sheet-share.component.html',
                styleUrls: ['./bottom-sheet-share.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }]; }, null); })();


/***/ }),

/***/ "qrO7":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/directives/egret-sidenav-helper/egret-sidenav-helper.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: EgretSidenavHelperDirective, EgretSidenavTogglerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidenavHelperDirective", function() { return EgretSidenavHelperDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidenavTogglerDirective", function() { return EgretSidenavTogglerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/match-media.service */ "30N5");
/* harmony import */ var _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./egret-sidenav-helper.service */ "iSAc");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");












class EgretSidenavHelperDirective {
    constructor(matchMediaService, egretSidenavHelperService, matSidenav, mediaObserver) {
        this.matchMediaService = matchMediaService;
        this.egretSidenavHelperService = egretSidenavHelperService;
        this.matSidenav = matSidenav;
        this.mediaObserver = mediaObserver;
        // Set the default value
        this.isOpen = true;
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.egretSidenavHelperService.setSidenav(this.id, this.matSidenav);
        if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
            this.isOpen = true;
            this.matSidenav.mode = "side";
            this.matSidenav.toggle(true);
        }
        else {
            this.isOpen = false;
            this.matSidenav.mode = "over";
            this.matSidenav.toggle(false);
        }
        this.matchMediaService.onMediaChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribeAll))
            .subscribe(() => {
            if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
                this.isOpen = true;
                this.matSidenav.mode = "side";
                this.matSidenav.toggle(true);
            }
            else {
                this.isOpen = false;
                this.matSidenav.mode = "over";
                this.matSidenav.toggle(false);
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
}
EgretSidenavHelperDirective.ɵfac = function EgretSidenavHelperDirective_Factory(t) { return new (t || EgretSidenavHelperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__["MatchMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"])); };
EgretSidenavHelperDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretSidenavHelperDirective, selectors: [["", "egretSidenavHelper", ""]], hostVars: 2, hostBindings: function EgretSidenavHelperDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.isOpen);
    } }, inputs: { id: ["egretSidenavHelper", "id"], isOpenBreakpoint: ["isOpen", "isOpenBreakpoint"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavHelperDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[egretSidenavHelper]"
            }]
    }], function () { return [{ type: app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__["MatchMediaService"] }, { type: _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"] }, { type: _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"] }]; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.is-open"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidenavHelper"]
        }], isOpenBreakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["isOpen"]
        }] }); })();
class EgretSidenavTogglerDirective {
    constructor(egretSidenavHelperService) {
        this.egretSidenavHelperService = egretSidenavHelperService;
    }
    onClick() {
        // console.log(this.egretSidenavHelperService.getSidenav(this.id))
        this.egretSidenavHelperService.getSidenav(this.id).toggle();
    }
}
EgretSidenavTogglerDirective.ɵfac = function EgretSidenavTogglerDirective_Factory(t) { return new (t || EgretSidenavTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"])); };
EgretSidenavTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretSidenavTogglerDirective, selectors: [["", "egretSidenavToggler", ""]], hostBindings: function EgretSidenavTogglerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EgretSidenavTogglerDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { id: ["egretSidenavToggler", "id"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavTogglerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[egretSidenavToggler]"
            }]
    }], function () { return [{ type: _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidenavToggler"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
        }] }); })();


/***/ }),

/***/ "r/oB":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/*! exports provided: DropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function() { return DropdownAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ "UGQK");




class DropdownAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) { return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"])); };
DropdownAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownAnchorDirective, selectors: [["", "appDropdownToggle", ""]], hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdownToggle]',
            }]
    }], function () { return [{ type: _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "rGZO":
/*!*******************************!*\
  !*** ./src/app/app.socket.ts ***!
  \*******************************/
/*! exports provided: AppSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSocket", function() { return AppSocket; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket/socket.service */ "FRSv");




class AppSocket {
    constructor(socket) {
        this.socket = socket;
    }
    onConnect() {
        return this.socket.fromEvent('connect');
    }
    onLogin({ token, user }) {
        this.socket.emit('LOGIN', { token, user });
        return this.socket.fromOneTimeEvent('EVENT:USER:LOGIN');
    }
    onLogout() {
        this.socket.emit('LOGOUT');
        return this.socket.fromOneTimeEvent('EVENT:USER:LOGOUT');
    }
}
AppSocket.ɵfac = function AppSocket_Factory(t) { return new (t || AppSocket)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
AppSocket.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppSocket, factory: AppSocket.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSocket, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "rmxa":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/url.helper */ "VgRj");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.service */ "ETNk");






class LayoutService {
    constructor(themeService) {
        this.themeService = themeService;
        this.layoutConf = {};
        this.layoutConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layoutConf);
        this.layoutConf$ = this.layoutConfSubject.asObservable();
        this.fullWidthRoutes = ['shop'];
        this.setAppLayout(
        // ******** SET YOUR LAYOUT OPTIONS HERE *********
        {
            navigationPos: 'side',
            sidebarStyle: 'full',
            sidebarColor: 'slate',
            sidebarCompactToggle: false,
            dir: 'ltr',
            useBreadcrumb: true,
            topbarFixed: false,
            footerFixed: false,
            topbarColor: 'white',
            footerColor: 'slate',
            matTheme: 'egret-navy',
            breadcrumb: 'simple',
            perfectScrollbar: true,
        });
    }
    setAppLayout(layoutConf) {
        this.layoutConf = Object.assign(Object.assign({}, this.layoutConf), layoutConf);
        this.applyMatTheme(this.layoutConf.matTheme);
        // ******* Only for demo purpose ***
        this.setLayoutFromQuery();
        // **********************
    }
    publishLayoutChange(lc, opt = {}) {
        if (this.layoutConf.matTheme !== lc.matTheme && lc.matTheme) {
            this.themeService.changeTheme(this.layoutConf.matTheme, lc.matTheme);
        }
        this.layoutConf = Object.assign(this.layoutConf, lc);
        this.layoutConfSubject.next(this.layoutConf);
    }
    applyMatTheme(theme) {
        this.themeService.applyMatTheme(this.layoutConf.matTheme);
    }
    setLayoutFromQuery() {
        const layoutConfString = Object(_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["getQueryParam"])('layout');
        const prevTheme = this.layoutConf.matTheme;
        try {
            this.layoutConf = JSON.parse(layoutConfString);
            this.themeService.changeTheme(prevTheme, this.layoutConf.matTheme);
        }
        catch (e) { }
    }
    adjustLayout(options = {}) {
        let sidebarStyle;
        this.isMobile = this.isSm();
        this.currentRoute = options.route || this.currentRoute;
        sidebarStyle = this.isMobile ? 'closed' : 'full';
        if (this.currentRoute) {
            this.fullWidthRoutes.forEach((route) => {
                if (this.currentRoute.indexOf(route) !== -1) {
                    sidebarStyle = 'closed';
                }
            });
        }
        this.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle,
        });
    }
    isSm() {
        return window.matchMedia(`(max-width: 959px)`).matches;
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "s0uO":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-top/sidebar-top.component.ts ***!
  \************************************************************************/
/*! exports provided: SidebarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTopComponent", function() { return SidebarTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "LFK6");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "TgYD");

// import PerfectScrollbar from 'perfect-scrollbar';






class SidebarTopComponent {
    constructor(navService) {
        this.navService = navService;
    }
    ngOnInit() {
        this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
            this.menuItems = menuItem.filter(item => item.type !== 'icon' && item.type !== 'separator');
        });
    }
    ngAfterViewInit() {
        // setTimeout(() => {
        //   this.sidebarPS = new PerfectScrollbar('#sidebar-top-scroll-area', {
        //     suppressScrollX: true
        //   })
        // })
    }
    ngOnDestroy() {
        // if(this.sidebarPS) {
        //   this.sidebarPS.destroy();
        // }
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    }
}
SidebarTopComponent.ɵfac = function SidebarTopComponent_Factory(t) { return new (t || SidebarTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
SidebarTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarTopComponent, selectors: [["app-sidebar-top"]], decls: 3, vars: 1, consts: [[1, "sidebar-panel"], ["id", "sidebar-top-scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [3, "items"]], template: function SidebarTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar-top',
                templateUrl: './sidebar-top.component.html'
            }]
    }], function () { return [{ type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }]; }, null); })();


/***/ }),

/***/ "sf3n":
/*!************************************************!*\
  !*** ./src/app/shared/inmemory-db/invoices.ts ***!
  \************************************************/
/*! exports provided: InvoiceDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDB", function() { return InvoiceDB; });
class InvoiceDB {
}
InvoiceDB.invoices = [
    {
        id: '5a9ae2106518248b68251fd1',
        orderNo: '232',
        status: 'pending',
        date: (new Date()),
        currency: '$',
        vat: 10,
        buyer: {
            name: 'Schoen, Conn and Mills',
            address: 'rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170',
        },
        seller: {
            name: 'UI Lib',
            address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
        },
        item: [{
                name: 'Item 1',
                unit: 9,
                price: 200
            }, {
                name: 'Item 2',
                unit: 15,
                price: 300
            }]
    },
    {
        id: '5a9ae2106518248b68251fd2',
        orderNo: '233',
        status: 'processing',
        date: (new Date()),
        currency: '$',
        vat: 10,
        buyer: {
            name: 'New Age Inc.',
            address: 'this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153',
        },
        seller: {
            name: 'UI Lib',
            address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
        },
        item: [{
                name: 'Item 1',
                unit: 3,
                price: 2000
            }, {
                name: 'Item 2',
                unit: 2,
                price: 4000
            }]
    },
    {
        id: '5a9ae2106518248b68251fd3',
        orderNo: '234',
        status: 'delivered',
        date: (new Date()),
        currency: '$',
        vat: 10,
        buyer: {
            name: 'Predovic, Schowalter and Haag',
            address: 'linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999',
        },
        seller: {
            name: 'UI Lib',
            address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
        },
        item: [{
                name: 'Item 1',
                unit: 5,
                price: 1000
            }, {
                name: 'Item 2',
                unit: 2,
                price: 4000
            }]
    },
    {
        id: '5a9ae2106518248b68251fd4',
        orderNo: '235',
        status: 'delivered',
        date: (new Date()),
        currency: '$',
        vat: 10,
        buyer: {
            name: 'Hane PLC',
            address: 'nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131',
        },
        seller: {
            name: 'UI Lib',
            address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
        },
        item: [{
                name: 'Item 1',
                unit: 3,
                price: 4000
            }, {
                name: 'Item 2',
                unit: 1,
                price: 5000
            }]
    }
];


/***/ }),

/***/ "slWk":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/egret-sidebar/egret-sidebar-helper.service.ts ***!
  \*********************************************************************************/
/*! exports provided: EgretSidebarHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidebarHelperService", function() { return EgretSidebarHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class EgretSidebarHelperService {
    constructor() {
        this.sidebarList = [];
    }
    setSidebar(name, sidebar) {
        this.sidebarList[name] = sidebar;
    }
    getSidebar(name) {
        return this.sidebarList[name];
    }
    removeSidebar(name) {
        if (!this.sidebarList[name]) {
            console.warn(`The sidebar with name '${name}' doesn't exist.`);
        }
        // remove sidebar
        delete this.sidebarList[name];
    }
}
EgretSidebarHelperService.ɵfac = function EgretSidebarHelperService_Factory(t) { return new (t || EgretSidebarHelperService)(); };
EgretSidebarHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EgretSidebarHelperService, factory: EgretSidebarHelperService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tZUg":
/*!********************************************************!*\
  !*** ./src/app/shared/services/local-store.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStoreService", function() { return LocalStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class LocalStoreService {
    constructor() {
        this.ls = window.localStorage;
    }
    setItem(key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    }
    getItem(key) {
        const value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return null;
        }
    }
    clear() {
        this.ls.clear();
    }
}
LocalStoreService.ɵfac = function LocalStoreService_Factory(t) { return new (t || LocalStoreService)(); };
LocalStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStoreService, factory: LocalStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "urBs":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/header-top/header-top.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function() { return HeaderTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "LFK6");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/theme.service */ "ETNk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "rmxa");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");



















function HeaderTopComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/profile/overview"]; };
const _c1 = function () { return ["/profile/settings"]; };
class HeaderTopComponent {
    constructor(layout, navService, themeService, translate, renderer, jwtAuth) {
        this.layout = layout;
        this.navService = navService;
        this.themeService = themeService;
        this.translate = translate;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.egretThemes = [];
        this.currentLang = 'en';
        this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'Spanish',
                code: 'es',
            }];
    }
    ngOnInit() {
        this.layoutConf = this.layout.layoutConf;
        this.egretThemes = this.themeService.egretThemes;
        this.menuItemSub = this.navService.menuItems$
            .subscribe(res => {
            res = res.filter(item => item.type !== 'icon' && item.type !== 'separator');
            let limit = 4;
            let mainItems = res.slice(0, limit);
            if (res.length <= limit) {
                return this.menuItems = mainItems;
            }
            let subItems = res.slice(limit, res.length - 1);
            mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
            });
            this.menuItems = mainItems;
        });
    }
    ngOnDestroy() {
        this.menuItemSub.unsubscribe();
    }
    setLang() {
        this.translate.use(this.currentLang);
    }
    changeTheme(theme) {
        this.layout.publishLayoutChange({ matTheme: theme.name });
    }
    toggleNotific() {
        this.notificPanel.toggle();
    }
    toggleSidenav() {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    }
}
HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) { return new (t || HeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"])); };
HeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderTopComponent, selectors: [["app-header-top"]], inputs: { notificPanel: "notificPanel" }, decls: 37, vars: 8, consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "container"], [1, "topnav"], ["mat-icon-button", ""], ["fxFlex", ""], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], [1, "notification-number", "mat-bg-warn"], ["mat-icon-button", "", 1, "topbar-button-right", "mr-16", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/face-7.jpg", "alt", ""], ["accountMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "class", "mr-16", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "mr-16", 3, "click"]], template: function HeaderTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_7_listener() { return ctx.toggleNotific(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Disable alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_31_listener() { return ctx.jwtAuth.signout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HeaderTopComponent_button_36_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.isMobile);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-top',
                templateUrl: './header-top.component.html'
            }]
    }], function () { return [{ type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"] }]; }, { notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vafs":
/*!********************************************************!*\
  !*** ./src/app/shared/services/route-parts.service.ts ***!
  \********************************************************/
/*! exports provided: RoutePartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePartsService", function() { return RoutePartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




class RoutePartsService {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    generateRouteParts(snapshot) {
        var routeParts = [];
        if (snapshot) {
            if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }
            if (snapshot.data['title'] && snapshot.url.length) {
                // console.log(snapshot.data['title'], snapshot.url)
                routeParts.push({
                    title: snapshot.data['title'],
                    breadcrumb: snapshot.data['breadcrumb'],
                    url: snapshot.url[0].path,
                    urlSegments: snapshot.url,
                    params: snapshot.params
                });
            }
        }
        return routeParts;
    }
}
RoutePartsService.ɵfac = function RoutePartsService_Factory(t) { return new (t || RoutePartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RoutePartsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutePartsService, factory: RoutePartsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutePartsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "wl2U":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/button-loading/button-loading.component.ts ***!
  \******************************************************************************/
/*! exports provided: ButtonLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLoadingComponent", function() { return ButtonLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");





function ButtonLoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function ButtonLoadingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ButtonLoadingComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.loadingText);
} }
const _c0 = function (a0, a1, a2) { return { loading: a0, "mat-button": a1, "mat-raised-button": a2 }; };
const _c1 = ["*"];
class ButtonLoadingComponent {
    constructor() {
        this.raised = true;
        this.loadingText = 'Please wait';
        this.type = 'submit';
    }
    ngOnInit() {
    }
}
ButtonLoadingComponent.ɵfac = function ButtonLoadingComponent_Factory(t) { return new (t || ButtonLoadingComponent)(); };
ButtonLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonLoadingComponent, selectors: [["button-loading"]], inputs: { loading: "loading", btnClass: "btnClass", raised: "raised", loadingText: "loadingText", type: "type", color: "color" }, ngContentSelectors: _c1, decls: 4, vars: 14, consts: [["mat-button", "", 3, "color", "type", "disabled", "ngClass"], ["class", "btn-spinner", 4, "ngIf"], [4, "ngIf"], [1, "btn-spinner"]], template: function ButtonLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonLoadingComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonLoadingComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonLoadingComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button-loading ", ctx.btnClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("type", ctx.type)("disabled", ctx.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c0, ctx.loading, !ctx.raised, ctx.raised));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'button-loading',
                templateUrl: './button-loading.component.html',
                styleUrls: ['./button-loading.component.scss']
            }]
    }], function () { return []; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loading']
        }], btnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['btnClass']
        }], raised: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['raised']
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loadingText']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['color']
        }] }); })();


/***/ }),

/***/ "zMWy":
/*!**************************************************!*\
  !*** ./src/app/shared/shared-material.module.ts ***!
  \**************************************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/badge */ "8Qe2");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "Km1n");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "Ynp+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tree */ "OLiY");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material-moment-adapter */ "DejY");






































class SharedMaterialModule {
}
SharedMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedMaterialModule });
SharedMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedMaterialModule_Factory(t) { return new (t || SharedMaterialModule)(); }, imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedMaterialModule, { exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                    _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zt0U":
/*!**************************************************!*\
  !*** ./src/app/shared/guards/user-role.guard.ts ***!
  \**************************************************/
/*! exports provided: UserRoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleGuard", function() { return UserRoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");








class UserRoleGuard {
    constructor(router, jwtAuth, snack) {
        this.router = router;
        this.jwtAuth = jwtAuth;
        this.snack = snack;
    }
    canActivate(route, state) {
        var user = this.jwtAuth.getUser();
        if (user &&
            route.data &&
            route.data.roles &&
            route.data.roles.includes(user.role)) {
            return true;
        }
        else {
            this.snack.open('You do not have access to this page!', 'OK');
            return false;
        }
    }
}
UserRoleGuard.ɵfac = function UserRoleGuard_Factory(t) { return new (t || UserRoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
UserRoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserRoleGuard, factory: UserRoleGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map