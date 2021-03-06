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
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-gaurd.service */ "./src/app/services/auth-gaurd.service.ts");
















// /profile/{{user._id}}/website
// user/234/website/456/page/new
var appRoutes = [
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_6__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:widgetId', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    // export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
        // export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<!--<h2>This is Austin VanderWel's homepage </h2>-->\n<a routerLink=\"/login\">Login</a>\n<a routerLink=\"/register\">Register</a>\n<a routerLink=\"/profile\">Profile</a>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'my-project';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/auth-gaurd.service */ "./src/app/services/auth-gaurd.service.ts");






// import { QuillEditorModule } from 'ngx-quill-editor';

// user components



// website components



// page components



// widget components








// services






// import {SortableDirective} from './directives/sortable.directive';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_15__["PageListComponent"],
                // SortableDirective,
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__["WidgetYoutubeComponent"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_22__["WidgetHtmlComponent"],
                _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_23__["WidgetTextComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_24__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_26__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_25__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_27__["WidgetService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_29__["SharedService"], _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(name, websiteId, description) {
        this.name = name;
        this.title = description;
        this.websiteId = websiteId;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName, email) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(name, developerId, description) {
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(type, pageId, size, url, width, name, text) {
        this.type = type;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
        this.name = name;
        this.text = text;
        this.rows = 0;
        this.deletable = true;
        this.formatted = false;
    }
    return Widget;
}());

// export interface Widget {
//     name: string;
//     _id: string;
//     widgetType: string;
//     pageId: string;
// }
//
// export class WidgetHeading implements Widget {
//     name: string;
//     _id: string;
//     pageId: string;
//     widgetType: string;
//     size: number;
//     text: string;
//
//     constructor(name: string, _id: string, widgetType: string, pageId: string, size: number, text: string) {
//         this._id = _id;
//         this.widgetType = widgetType;
//         this.pageId = pageId;
//         this.size = size;
//         this.text = text;
//     }
// }
//
// export class WidgetImage implements Widget {
//     name: string;
//     _id: string;
//     pageId: string;
//     widgetType: string;
//     width: string;
//     url: string;
//
//     constructor(name: string, _id: string, widgetType: string, pageId: string, width: string, url: string) {
//         this._id = _id;
//         this.widgetType = widgetType;
//         this.pageId = pageId;
//         this.width = width;
//         this.url = url;
//     }
// }
//
// export class WidgetHtml implements Widget {
//     name: string;
//     _id: string;
//     pageId: string;
//     widgetType: string;
//     text: string;
//
//     constructor(name: string, _id: string, widgetType: string, pageId: string, text: string) {
//         this._id = _id;
//         this.widgetType = widgetType;
//         this.pageId = pageId;
//         this.text = text;
//     }
// }
//
// export class WidgetYoutube implements Widget {
//     name: string;
//     _id: string;
//     pageId: string;
//     widgetType: string;
//     width: string;
//     url: string;
//
//     constructor(name: string, _id: string, widgetType: string, pageId: string, width: string, url: string) {
//         this._id = _id;
//         this.widgetType = widgetType;
//         this.pageId = pageId;
//         this.width = width;
//         this.url = url;
//     }
// }


/***/ }),

/***/ "./src/app/services/auth-gaurd.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-gaurd.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // pages: Page[] =
    //     [
    //         new Page('321', 'Post 1', '456', 'Lorem'),
    //         new Page('432', 'Post 2', '456', 'Lorem'),
    //         new Page('543', 'Post 3', '456', 'Lorem'),
    //     ];
    PageService.prototype.createPage = function (websiteId, page) {
        return this.http.post(this.base_url + '/api/website/' + websiteId + '/page', page);
    };
    PageService.prototype.findPagesByWebsite = function (websiteId) {
        console.log('calling page.service.server from page.service.client');
        return this.http.get(this.base_url + '/api/website/' + websiteId + '/page');
    };
    PageService.prototype.findPageById = function (pageId, websiteId) {
        console.log('calling findPageById on client side');
        return this.http.get(this.base_url + '/api/website/' + websiteId + '/page/' + pageId);
    };
    PageService.prototype.updatePage = function (pageId, websiteId, page) {
        console.log('AT UPDATE PAGE ON CLIENT SIDE');
        return this.http.put(this.base_url + '/api/website/' + websiteId + '/page/' + pageId, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        // for (let i = 0; i < this.pages.length; i++) {
        //     if (this.pages[i]._id === pageId) {
        //         const cut = +i;
        //         this.pages.splice(cut, 1);
        //     }
        // }
        return this.http.delete(this.base_url + '/api/page/' + pageId);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







// import { User } from '../models/user.model.client';
// let options;
// options = new RequestOptions();
var UserService = /** @class */ (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.options = {
            withCredentials: false
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.APIUrl = '/api/user/';
    }
    UserService.prototype.login = function (username, password) {
        console.log('client side user service login() called');
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options).map(function (res) {
            console.log('Inside login() response, res is ' + res);
            // const data = res.json();
            return res;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this.http.get(this.baseUrl + '/api/loggedIn', this.options)
            .map(function (res) {
            var user = JSON.stringify(res);
            console.log('Checking for logged in with: ' + user);
            if (user !== '0') {
                console.log(_this.sharedService);
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    /**
     * adds a user to the users array
     * @param user is the user we want to add to the array.
     */
    UserService.prototype.createUser = function (user) {
        console.log('The user we are sending with the post req: ' + JSON.stringify(user));
        // const userBody = {username: user.username, password: user.password};
        return this.http.post(this.baseUrl + this.APIUrl, user);
    };
    /**
     * find the user by their _id.
     * @param userId the _id we are looking for.
     */
    UserService.prototype.findUserById = function (userId) {
        console.log('findUserById looking for userId: ' + userId);
        return this.http.get(this.baseUrl + this.APIUrl + userId);
        // /api/user/:uid
    };
    /**
     * find the user by their username.
     * @param username the username we are looking for.
     */
    UserService.prototype.findUserByUsername = function (username) {
        console.log('Calling findUserByUsername from user client service');
        return this.http.get(this.baseUrl + '/api/user?username=' + username);
    };
    /**
     * find the user by their credentials.
     * @param username the username we are looking for.
     * @param password the password we are looking for.
     */
    // TODO: changed the url here if that causes problems look here
    UserService.prototype.findUserByCredentials = function (username, password) {
        console.log('made it to the client side findUserByCredential http request');
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    };
    /**
     * update a user in the array of users.
     * @param userId the _id we are looking for.
     * @param user the user information we want to use as the update.
     */
    UserService.prototype.updateUserById = function (userId, user) {
        return this.http.put(this.baseUrl + this.APIUrl + userId, user);
    };
    /**
     * deletes a user from the array of users.
     * @param userId the _id we are using to find the user.
     */
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + this.APIUrl + userId);
    };
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/register', body, this.options)
            .map(function (res) {
            // const data = res.json();
            return res;
        });
    };
    UserService.prototype.logout = function () {
        // this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            return res;
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // websites: Website[] =
    //     [
    //         new Website('456', 'Facebook', '123', 'Lorem'),
    //         new Website('456', 'Tweeter', '234', 'Lorem'),
    //     ];
    WebsiteService.prototype.createWebsite = function (userId, website) {
        console.log('client side createWebsite');
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
    };
    WebsiteService.prototype.findAllWebsitesForUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        console.log('looking for websiteById');
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website/' + websiteId);
    };
    WebsiteService.prototype.updateWebsite = function (userId, websiteId, website) {
        console.log('front end website service updateWebsite Called');
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
        // const body = websiteId;
        return this.http.put(url, website);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        // var url = this.baseUrl + '/api/website' + websiteId;
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        console.log('Inside create widget on the client side');
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
    };
    // findWidgetsByPageId(pageId) {
    //     const widgets = [];
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i].pageId === pageId) {
    //             widgets.push(this.widgets[i]);
    //         }
    //     }
    //     return widgets;
    // }
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        console.log('findWidgetsByPageId called in the client');
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
    };
    // findWidgetsId(widgetId) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             return this.widgets[i];
    //         }
    //     }
    // }
    WidgetService.prototype.findWidgetById = function (pageId, widgetId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId);
    };
    // updateWidget(widgetId, widget) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             switch (widget.widgetType) {
    //                 case 'HEADER':
    //                     this.widgets[i].text = widget.text;
    //                     this.widgets[i].size = widget.size;
    //                     return true;
    //
    //                 case 'IMAGE':
    //                     this.widgets[i].text = widget.text;
    //                     this.widgets[i].text = widget.width;
    //                     this.widgets[i].url = widget.url;
    //                     return true;
    //
    //                 case 'YOUTUBE':
    //                     this.widgets[i].text = widget.text;
    //                     this.widgets[i].text = widget.width;
    //                     this.widgets[i].url = widget.url;
    //                     return true;
    //             }
    //
    //         }
    //     }
    //     return false;
    // }
    WidgetService.prototype.updateWidget = function (pageId, widgetId, widget) {
        console.log('Client widget service: updateWidget()');
        return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId, widget);
    };
    // deleteWidget(widgetId) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             // const cut = +i;
    //             this.widgets.splice(i, 1);
    //         }
    //     }
    // }
    WidgetService.prototype.deleteWidget = function (pageId, widgetId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n    <div class=\"container-fluid\">\n        <a (click)=\"backOnePage()\" class=\"navbar-link \">\n            <span class=\"cl-text-white fas fa-chevron-left\"></span>\n        </a>\n\n        <a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" href=\"#\">\n            Edit-Page\n        </a>\n\n        <a (click)=\"updatePage()\" class=\"navbar-link cl-text-white\">\n            <span class=\"cl-text-white fas fa-check fontawesome_icon cl-icon-padding\"></span>\n        </a>\n    </div>\n</nav>\n\n<div class=\"container-fluid pt-2\">\n    <form #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label for=\"pagename\" class=\"font-weight-bold\">Name</label>\n            <input id=\"pagename\"\n                   name=\"pageName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   placeholder=\"Page Name\"\n                   [ngModel]=\"getOldPageName()\"\n                   ngModel\n                   #pageName=\"ngModel\">\n        </div> <!-- form-group// -->\n\n        <div class=\"form-group\">\n            <label for=\"pagetitle\" class=\"font-weight-bold\">Title</label>\n            <input id=\"pagetitle\"\n                   name=\"pageTitle\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   placeholder=\"Page Title\"\n                   [ngModel]=\"getOldPageTitle()\"\n                   ngModel\n                   #pageTitle=\"ngModel\">\n        </div> <!-- form-group// -->\n\n        <div class=\"form-group\">\n            <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\" role=\"button\">Delete</a>\n        </div>\n    </form>\n\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n    <div class=\"container-fluid\">\n        <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\"\n           routerLink=\"/user/{{uid}}\">\n        </a>\n    </div>\n</nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.oldPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('', '', '');
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('edit page ngOnInit');
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.pageService.findPageById(this.pid, this.wid)
            .subscribe(function (page) { return _this.oldPage = page; });
        console.log('page found on the server: ' + JSON.stringify(this.oldPage));
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        var newPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"](this.pageForm.value.pageName, this.wid, this.pageForm.value.pageTitle);
        console.log('new name and title of page: ' + this.pageForm.value.pageName + ' ' + this.pageForm.value.pageName);
        this.pageService.updatePage(this.pid, this.wid, newPage)
            .subscribe(function () { return _this.backOnePage(); });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pid)
            .subscribe(function () { return _this.backOnePage(); });
    };
    PageEditComponent.prototype.backOnePage = function () {
        this.router.navigate(['/user', this.uid, 'website', this.wid, 'page']);
    };
    PageEditComponent.prototype.getOldPageName = function () {
        console.log('calling get old page name');
        return this.oldPage.name;
    };
    PageEditComponent.prototype.getOldPageTitle = function () {
        console.log('calling get old page title');
        return this.oldPage.title;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n    <div class=\"container-fluid\">\n        <a (click)=\"backOnePage()\" class=\"navbar-link \">\n            <span class=\"cl-text-white fas fa-chevron-left\"></span>\n        </a>\n        <a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" href=\"#\">\n            Pages\n        </a>\n\n        <a (click)=\"createNewPage()\"\n           class=\"navbar-link cl-text-white\">\n            <span class=\"cl-text-white fas fa-plus fontawesome_icon cl-icon-padding\"></span>\n        </a>\n    </div>\n</nav>\n\n\n<!--<div class=\"container-fluid cl-container-padding\">-->\n<!--<ul class=\"list-group cl-list-group-borderless\">-->\n<!--<li class=\"list-group-item cl-list-item-boderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\"></span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">Blog Post</a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\">-->\n<!--</span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">Blogs</a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\">-->\n<!--</span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">Home</a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\">-->\n<!--</span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">About</a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\">-->\n<!--</span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">Contact Us</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--user/:uid/website/:wid/page/:pid/widget-->\n\n<!--<div class=\"container\">-->\n<!--<ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let website of websites\">-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}\">-->\n<!--<span class=\"fa fa-cog fontawesome_icon float-right\"></span>-->\n<!--</a>-->\n<!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n\n\n<!--<div class=\"list-group cl-list-group-borderless\" *ngFor=\"let page of pages\">-->\n    <!--<li class=\"list-group-item cl-list-group-borderless\">-->\n        <!--<a routerLink=\"./{{page._id}}\">-->\n            <!--<span class=\"fa fas-cog fontawesome_icon float-right\"></span>-->\n        <!--</a>-->\n        <!--<a routerLink=\"./{{page._id}}/widget\" class=\"text-blue\">{{page.name}}</a>-->\n    <!--</li>-->\n<!--</div>-->\n\n\n<div class=\"container scrollable-body\">\n    <div class=\"form-control\" *ngFor=\"let page of pages\">\n        <a (click)=\"getWidgetList(page._id)\" class=\"text-blue\">{{ page.name }}</a>\n        <a (click)=\"getEditPage(page._id)\" class=\"text-blue float-right\">\n            <i class=\"fas fa-cog\"></i>\n        </a>\n    </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n    <div class=\"container-fluid\">\n        <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\"\n           [routerLink]=\"['../../../../../' + 'user/' + uid]\">\n\n        </a>\n    </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageServices, activatedRoute, router) {
        this.pageServices = pageServices;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('this website id: ' + params['wid']);
            _this.wid = params['wid'];
            _this.uid = params['uid'];
        });
        this.pageServices.findPagesByWebsite(this.wid)
            .subscribe(function (pages) { return _this.pages = pages; });
        // console.log('pages length from component: ' + this.pages.length);
    };
    PageListComponent.prototype.createNewPage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', 'new']);
    };
    PageListComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website']);
    };
    PageListComponent.prototype.getEditPage = function (pageId) {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', pageId]);
    };
    PageListComponent.prototype.getWidgetList = function (pageId) {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', pageId, 'widget']);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n    <div class=\"container-fluid\">\n        <a routerLink=\"../\" class=\"navbar-link\">\n            <span class=\"cl-text-white fas fa-chevron-left\"></span>\n        </a>\n        <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n            New Page\n        </a>\n        <a (click)=\"newPage()\" class=\"navbar-link cl-text-white\">\n            <span class=\"cl-text-white fas fa-check fontawesome_icon cl-icon-padding\"></span>\n        </a>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <form #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label for=\"pagename\" class=\"font-weight-bold\">Name</label>\n            <input id=\"pagename\"\n                   name=\"pageName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   placeholder=\"Page Name\"\n                   ngModel\n                   required\n                   #pageName=\"ngModel\">\n        </div> <!-- form-group// -->\n\n        <div class=\"form-group\">\n            <label for=\"pagetitle\" class=\"font-weight-bold\">Title</label>\n            <input id=\"pagetitle\"\n                   name=\"pageTitle\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   placeholder=\"Page Title\"\n                   ngModel\n                   #pageTitle=\"ngModel\">\n        </div> <!-- form-group// -->\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n    <div class=\"container-fluid\">\n        <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" [routerLink]=\"['/user/' + uid]\">\n        </a>\n    </div>\n</nav>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageNewComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    // TODO: createPage function????
    PageNewComponent.prototype.newPage = function () {
        var _this = this;
        var name = this.pageForm.value.pageName;
        var title = this.pageForm.value.pageTitle;
        var page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"](name, this.wid, title);
        this.pageService.createPage(this.wid, page)
            .subscribe(function (page) { return _this.backOnePage(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_4__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n\n<div class=\"container\">\n<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n\n  <h1>Login</h1>\n\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n\n\n    </div> <!-- form-group// -->\n    <div class =\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter a username\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\"\n              class=\"btn btn-primary btn-block\"\n              type=\"submit\">Login\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\">\n        <span class=\"fa fa-facebook\"></span>\n        Facebook\n      </a>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-success btn-block\" routerLink=\"/register\" role=\"button\">Register</a>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log('username: ' + this.username);
        console.log('password: ' + this.password);
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/user', user._id]);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.title = 'This is the login page';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h1>Profile</h1>-->\n\n<!--<h2> user: {{user.username}}</h2>-->\n\n<!--{{user._id}}-->\n\n<nav class=\"navbar navbar-dark bg-primary fixed-top\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand mb-0 h5\" href=\"#\">\n            Profile\n        </a>\n        <i class=\"navbar-brand fas fa-check fontawesome_icon cl-icon-padding\">\n        </i>\n    </div>\n</nav>\n\n\n<!--<a routerLink=\"profile/{{uid}}/website\">Websites</a>-->\n<!--<br/>-->\n\n\n<div class=\"container-fluid\">\n    <form #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input\n                   type=\"text\"\n                   name=\"username\"\n                   class=\"form-control\"\n                   id=\"username\"\n                   ngModel\n                   [ngModel]=\"user.username\"\n                   #username=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input\n                   name=\"email\"\n                   type=\"email\"\n                   class=\"form-control\"\n                   id=\"email\"\n                   ngModel\n                   [ngModel]=\"user.email\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"first name\">First name</label>\n            <input\n                   name=\"firstName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   id=\"first name\"\n                   ngModel\n                   [ngModel]=\"user.firstName\"\n                   #firstName=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"last name\">Last name</label>\n            <input\n                   name=\"lastName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   id=\"last name\"\n                   ngModel\n                   [ngModel]=\"user.lastName\"\n                   #lastName=\"ngModel\">\n        </div>\n    </form>\n    <a class=\"btn btn-primary btn-block\"\n       (click)=\"saveInfoAndGetWebsites()\">Websites</a>\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"logout()\">Logout</a>\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n    <a class=\"navbar-brand font-weight-bold\" href=\"#\">\n        <!--<span class=\"navbar-brand fas fa-user fontawesome_icon\"></span>-->\n    </a>\n    <div class=\"text-right\">\n        <a routerLink=\"user/{{user._id}}\" class=\"float-right\">\n            <span>\n                <i class=\"fas fa-user fa-inverse\"></i>\n            </span>\n        </a>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('profile component: ' + params);
            _this.uid = params['uid'];
            console.log('userId: ' + _this.uid);
        });
        this.userService.findUserById(this.uid)
            .subscribe(function (user) { return _this.user = user; });
    };
    ProfileComponent.prototype.saveInfoAndGetWebsites = function () {
        var _this = this;
        var username = this.profileForm.value.username;
        var firstName = this.profileForm.value.firstName;
        var lastName = this.profileForm.value.lastName;
        var email = this.profileForm.value.email;
        var newUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"](username, this.user.password, firstName, lastName, email);
        console.log('newUser info: ' + JSON.stringify(newUser));
        this.userService.updateUserById(this.user._id, newUser)
            .subscribe(function () { return _this.router.navigate(['/user', _this.uid, 'website']); });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());

// getUser() {
//     this.user = this.sharedService.user;
//     this.username = this.user['username'];
//     this.firstName = this.user['firstName'];
//     this.lastName = this.user['lastName'];
//     this.email = this.user['email'];
//     this.userId = this.user['_id'];
// }
// updateUser() {
//     const updatedUser = {
//         _id: this.user['_id'],
//         username: this.username,
//         firstName: this.firstName,
//         lastName: this.lastName,
//         email: this.email
//
//     };
//
//     this.userService.updateUser(updatedUser)
//         .subscribe(
//             (data: any) => {
//                 this.user = data;
//             },
//             (error: any) => this.errorFlag = true
//         );
// }
// }


/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<div class=\"container\">\n    <h1 class=\"text-center\">Register</h1>\n\n    <div *ngIf=\"userErrorFlag\" class=\"alert alert-danger\">\n        {{userErrorMsg}}\n    </div>\n\n    <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   placeholder=\"username\"\n                   name=\"username\"\n                   id=\"username\"\n                   ngModel\n                   required\n                   #username=\"ngModel\"/>\n        </div>\n\n        <div class=\"form-group\">\n            <input type=\"password\"\n                   class=\"form-control\"\n                   placeholder=\"Password\"\n                   name=\"password\"\n                   id=\"password\"\n                   ngModel\n                   required\n                   #password=\"ngModel\"/>\n        </div>\n\n        <div class=\"form-group\">\n            <input type=\"password\"\n                   class=\"form-control\"\n                   placeholder=\"Verify Password\"\n                   id=\"vpassword\"\n                   name=\"vpassword\"\n                   ngModel\n                   required\n                   #v_password=\"ngModel\"/>\n        </div>\n\n        <div *ngIf=\"pwdErrorFlag\" class=\"alert alert-danger\">\n            {{pwdErrorMsg}}\n        </div>\n\n        <button class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                [disabled]=\"!f.valid\">Register\n        </button>\n\n        <button class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                routerLink=\"/login\">Cancel\n        </button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.pwdErrorMsg = 'Those passwords do not match!';
        this.userErrorMsg = 'That username is already in use, please select another';
    };
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        var username = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        var user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"](username, password, '', '', '');
        // this.userService.createUser(user)
        //   .subscribe(
        //     (user) => this.router.navigate(['/user', user._id]));
        this._userService.register(username, password)
            .subscribe(function (user) {
            // console.log(data);
            _this.router.navigate(['/user', user._id]);
            return;
        }, function (error) {
            // this.error = error._body;
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--&lt;!&ndash;<nav class=\"navbar cl-blue-navbar fixed-top\">&ndash;&gt;-->\n  <!--&lt;!&ndash;<div class=\"container-fluid\">&ndash;&gt;-->\n    <!--&lt;!&ndash;<a routerLink=\"/user/{{userId}}\" class=\"navbar-link \">&ndash;&gt;-->\n      <!--&lt;!&ndash;<span class=\"cl-text-white fas fa-chevron-left\"></span>&ndash;&gt;-->\n    <!--&lt;!&ndash;</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;<a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" href=\"#\">&ndash;&gt;-->\n      <!--&lt;!&ndash;Websites&ndash;&gt;-->\n    <!--&lt;!&ndash;</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;<a [routerLink]=\"['../../' + 'user/' + userId + '/website' + '/new']\" class=\"navbar-link cl-text-white\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<span class=\"cl-text-white fas fa-plus fontawesome_icon cl-icon-padding\"></span>&ndash;&gt;-->\n    <!--&lt;!&ndash;</a>&ndash;&gt;-->\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n<!--&lt;!&ndash;</nav>&ndash;&gt;-->\n\n<!--<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">-->\n  <!--<div class=\"container-fluid\">-->\n          <!--<a routerLink=\"/user/{{uid}}/website\" class=\"navbar-link cl-text-white\">-->\n            <!--<span class=\"fas fa-chevron-left fontawsome_icon\"></span>-->\n          <!--</a>-->\n\n        <!--<a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" routerLink=\"/user/{{uid}}/website\">-->\n          <!--Websites-->\n        <!--</a>-->\n        <!--<a (click)=\"update()\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">-->\n          <!--<span class=\"fas fa-plus fontawsome_icon text-white\"></span>-->\n        <!--</a>-->\n    <!--</div>-->\n    <!--&lt;!&ndash;<div class=\"col-xs-8\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<div class=\"container-fluid\">&ndash;&gt;-->\n        <!--&lt;!&ndash;<a class=\"cl-text=white navbar-brand cl-text-bold\" href=\"#\">&ndash;&gt;-->\n          <!--&lt;!&ndash;Edit Websites&ndash;&gt;-->\n        <!--&lt;!&ndash;</a>&ndash;&gt;-->\n        <!--&lt;!&ndash;<a (click)=\"update()\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<span class=\"fas fa-check fontawsome_icon\"></span>&ndash;&gt;-->\n        <!--&lt;!&ndash;</a>&ndash;&gt;-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n<!--</nav>-->\n\n<!--<div class=\"row container-fluid pt-2\">-->\n  <!--<div class=\"col-md-4 d-none d-md-block border-right\">-->\n    <!--<ul *ngFor=\"let website of websites\" class=\"list-group list-group-flush\">-->\n      <!--<li class=\"list-group-item\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}\">-->\n          <!--<i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">{{website.name}}</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n  <!--</div>-->\n  <!--<div class=\"col-md-8\">-->\n    <!--<form #f=\"ngForm\">-->\n\n      <!--<div class=\"form-group\">-->\n        <!--<label for=\"website-name\">Website Name</label>-->\n        <!--<input [(ngModel)]=\"website.name\"-->\n               <!--[ngModelOptions]=\"{standalone: true}\"-->\n               <!--type=\"text\" class=\"form-control\"-->\n               <!--id=\"website-name\"-->\n               <!--placeholder=\"{{website.name}}\">-->\n      <!--</div>-->\n      <!--<div class=\"form-group\">-->\n        <!--<label for=\"website-description\">Website Description</label>-->\n        <!--<textarea [(ngModel)]=\"website.description\"-->\n                  <!--[ngModelOptions]=\"{standalone: true}\"-->\n                  <!--id=\"website-description\"-->\n                  <!--class=\"form-control\"-->\n                  <!--rows=\"5\"-->\n                  <!--placeholder=\"{{website.description}}\">-->\n        <!--</textarea>-->\n      <!--</div>-->\n\n      <!--<a class=\"btn btn-danger btn-block text-white\"-->\n         <!--(click)=\"delete()\">Delete</a>-->\n    <!--</form>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-4 d-none d-md-block border-right pr-0\">\n    <app-website-list></app-website-list>\n  </div>\n  <div class=\"col-md-8 pl-0\">\n    <nav class=\"navbar navbar-dark bg-primary\">\n      <a routerLink=\"/user/{{uid}}/\" class=\"navbar-link text-white\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <div class=\"navbar-brand font-weight-bold\">Edit Website</div>\n      <a class=\"ml-auto\" (click)=\"update()\" >\n            <span>\n              <i class=\"fas fa-check fa-inverse\"></i>\n            </span>\n      </a>\n    </nav>\n    <div class=\"container-fluid pt-2\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"font-weight-bold\">Website Name</label>\n          <input name=\"newName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 id=\"name\"\n                 [ngModel]=\"getOldWebName()\"\n                 ngModel\n                 required\n                 #newName=\"ngModel\">\n        </div> <!-- form-group// -->\n\n        <div class=\"form-group\">\n          <label for=\"description\" class=\"font-weight-bold\">Website Description</label>\n          <textarea name=\"newDescription\"\n                    class=\"form-control\"\n                    id=\"description\"\n                    rows=\"5\"\n                    [ngModel]=\"getOldWebDescriptoin()\"\n                    ngModel\n                    #newDescription=\"ngModel\"></textarea>\n        </div> <!-- form-group// -->\n        <div class=\"form-group\">\n          <a class=\"btn btn-danger btn-block\" (click)=\"delete()\" role=\"button\">Delete</a>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container-fluid col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
        this.previousWebsite = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('', '', '');
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('params from web-edit page: ' + JSON.stringify(params));
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        this.websiteService.findWebsiteById(this.uid, this.wid).
            subscribe(function (website) { return _this.previousWebsite = website; });
    };
    WebsiteEditComponent.prototype.backOnePage = function () {
        this.router.navigate(['/user', this.uid, 'website']);
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        var website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"](this.websiteForm.value.newName, this.uid, this.websiteForm.value.newDescription);
        this.websiteService.updateWebsite(this.uid, this.wid, website)
            .subscribe(function () { return _this.backOnePage(); });
    };
    // TODO: should probably make this delete the pages associated with it as well
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.wid)
            .subscribe(function () { return _this.backOnePage(); });
    };
    WebsiteEditComponent.prototype.getOldWebName = function () {
        return this.previousWebsite.name;
    };
    WebsiteEditComponent.prototype.getOldWebDescriptoin = function () {
        return this.previousWebsite.description;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a (click)=\"backOnePage()\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n\n    <span class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\">\n      Websites\n    </span>\n\n\n    <a (click)=\"createNewWebsite()\" class=\"navbar-link cl-text-white\">\n      <span class=\"cl-text-white fas fa-plus fontawesome_icon cl-icon-padding\"></span>\n    </a>\n  </div>\n</nav>\n\n<!--user/:uid/website/new-->\n<!--<div class=\"container-fluid scrollable-body\"-->\n     <!--*ngFor=\"let website of websites\">-->\n  <!--<table class=\"table table-borderless\">-->\n    <!--<tbody>-->\n    <!--<tr>-->\n      <!--<td>-->\n        <!--<div (click)=\"goToPageList(website._id)\">{{website.name}}</div>-->\n      <!--</td>-->\n      <!--<td align=\"right\">-->\n        <!--<a (click)=\"goToEditWebsite(website._id)\"><i class=\"fas fa-cog\"></i></a>-->\n      <!--</td>-->\n    <!--</tr>-->\n    <!--</tbody>-->\n  <!--</table>-->\n<!--</div>-->\n\n<main>\n  <div class=\"container above-below-space\">\n    <ul class=\"list-group list-borderless\">\n      <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n      </li>\n    </ul>\n  </div>\n</main>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" [routerLink]=\"['../../' + userId]\">\n    </a>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('loading the website list');
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            console.log('at website list, uid: ' + _this.userId);
        });
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
            console.log('website list length: ' + _this.websites.length);
            console.log('website number 1: ' + JSON.stringify(_this.websites[0]));
        });
    };
    WebsiteListComponent.prototype.backOnePage = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WebsiteListComponent.prototype.createNewWebsite = function () {
        this.router.navigate(['/user', this.userId, 'website', 'new']);
    };
    WebsiteListComponent.prototype.goToEditWebsite = function (websiteId) {
        this.router.navigate(['/user', this.userId, 'website', websiteId]);
    };
    WebsiteListComponent.prototype.goToPageList = function (websiteId) {
        this.router.navigate(['/user', this.userId, 'website', websiteId, 'page']);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">-->\n    <!--<div class=\"col-md-4 d-none d-md-block container-fluid\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website\" class=\"navbar-link text-white\">-->\n            <!--<i class=\"fas fa-chevron-left fontawsome_icon\"></i>-->\n        <!--</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/\" class=\"text-white navbar-brand font-weight-bold\">-->\n            <!--Websites-->\n        <!--</a>-->\n        <!--<a routerLink=\"./\" class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">-->\n            <!--<i class=\"fas fa-plus fontawsome_icon text-white\"></i>-->\n        <!--</a>-->\n    <!--</div>-->\n    <!--<div class=\"col-md-8 container-fluid\">-->\n        <!--<a class=\"text-white navbar-brand font-weight-bold\" href=\"#\">-->\n            <!--New Websites-->\n        <!--</a>-->\n        <!--<a (click)=\"createWebsite()\" class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">-->\n            <!--<i class=\"fas fa-check fontawsome_icon \"></i>-->\n        <!--</a>-->\n    <!--</div>-->\n<!--</nav>-->\n\n<!--&lt;!&ndash;<div class=\"row container-fluid pt-2\">&ndash;&gt;-->\n<!--&lt;!&ndash;<div class=\"col-md-4 d-none d-md-block border-right\">&ndash;&gt;-->\n<!--&lt;!&ndash;<ul class=\"list-group cl-list-group-borderless\">&ndash;&gt;-->\n<!--&lt;!&ndash;<li class=\"list-group-item cl-list-item-borderless\">&ndash;&gt;-->\n<!--&lt;!&ndash;<a routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>&ndash;&gt;-->\n<!--&lt;!&ndash;<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Blogging App</a>&ndash;&gt;-->\n<!--&lt;!&ndash;</li>&ndash;&gt;-->\n<!--&lt;!&ndash;<li class=\"list-group-item cl-list-item-borderless\">&ndash;&gt;-->\n<!--&lt;!&ndash;<a routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>&ndash;&gt;-->\n<!--&lt;!&ndash;<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Address Book App</a>&ndash;&gt;-->\n<!--&lt;!&ndash;</li>&ndash;&gt;-->\n<!--&lt;!&ndash;<li class=\"list-group-item cl-list-item-borderless\">&ndash;&gt;-->\n<!--&lt;!&ndash;<a routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>&ndash;&gt;-->\n<!--&lt;!&ndash;<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Script Testing App</a>&ndash;&gt;-->\n<!--&lt;!&ndash;</li>&ndash;&gt;-->\n<!--&lt;!&ndash;<li class=\"list-group-item cl-list-item-borderless\">&ndash;&gt;-->\n<!--&lt;!&ndash;<a routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>&ndash;&gt;-->\n<!--&lt;!&ndash;<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Blogger</a>&ndash;&gt;-->\n<!--&lt;!&ndash;</li>&ndash;&gt;-->\n<!--&lt;!&ndash;</ul>&ndash;&gt;-->\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\n<!--<div class=\"container-fluid pt-2\">-->\n    <!--<form #f=\"ngForm\">-->\n\n        <!--<div class=\"form-group\">-->\n            <!--<label>Name</label>-->\n            <!--<input placeholder=\"Website Name\"-->\n                   <!--name=\"WebsiteName\"-->\n                   <!--type=\"text\"-->\n                   <!--id=\"name\"-->\n                   <!--class=\"form-control\"-->\n                   <!--ngModel-->\n                   <!--required-->\n                   <!--#WebsiteName=\"ngModel\"/>-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n            <!--<label>Description</label>-->\n            <!--<textarea placeholder=\"Website Description\"-->\n                      <!--name=\"Description\"-->\n                      <!--type=\"text\"-->\n                      <!--class=\"form-control\"-->\n                      <!--ngModel-->\n                      <!--required-->\n                      <!--#Description=\"ngModel\"></textarea>-->\n        <!--</div>-->\n\n    <!--</form>-->\n<!--</div>-->\n\n<div class=\"row\">\n    <div class=\"col-md-4 d-none d-md-block border-right pr-0\">\n        <app-website-list></app-website-list>\n    </div>\n    <div class=\"col-md-8 pl-0\">\n        <nav class=\"navbar navbar-dark bg-primary\">\n            <div class=\"navbar-brand font-weight-bold\">New Website</div>\n            <a class=\"ml-auto\" (click)=\"createWebsite()\" >\n            <span>\n              <i class=\"fas fa-check fa-inverse\"></i>\n            </span>\n            </a>\n        </nav>\n        <div class=\"container-fluid pt-2\">\n            <form #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"name\" class=\"font-weight-bold\">Name</label>\n                    <input name=\"newName\"\n                           type=\"text\"\n                           class=\"form-control\"\n                           id=\"name\"\n                           placeholder=\"Name\"\n                           ngModel\n                           required\n                           #newName=\"ngModel\">\n                </div> <!-- form-group// -->\n\n                <div class=\"form-group\">\n                    <label for=\"description\" class=\"font-weight-bold\">Description</label>\n                    <textarea name=\"newDescription\"\n                              class=\"form-control\"\n                              id=\"description\"\n                              placeholder=\"Description\"\n                              rows=\"5\"\n                              ngModel\n                              #newDescription=\"ngModel\"></textarea>\n                </div> <!-- form-group// -->\n\n            </form>\n        </div>\n        <!--<div class=\"container-fluid pt-2\">-->\n            <!--<form #f=\"ngForm\">-->\n                <!--<div class=\"form-group\">-->\n                    <!--<label for=\"name\" class=\"font-weight-bold\">Name</label>-->\n                    <!--<input name=\"newName\"-->\n                           <!--type=\"text\"-->\n                           <!--class=\"form-control\"-->\n                           <!--id=\"name\"-->\n                           <!--placeholder=\"Name\"-->\n                           <!--ngModel-->\n                           <!--#newName=\"ngModel\">-->\n                <!--</div> &lt;!&ndash; form-group// &ndash;&gt;-->\n\n                <!--<div class=\"form-group\">-->\n                    <!--<label for=\"description\" class=\"font-weight-bold\">Description</label>-->\n                    <!--<textarea name=\"newDescription\"-->\n                              <!--class=\"form-control\"-->\n                              <!--id=\"description\"-->\n                              <!--placeholder=\"Description\"-->\n                              <!--rows=\"5\"-->\n                              <!--ngModel-->\n                              <!--required-->\n                              <!--#newDescription=\"ngModel\"></textarea>-->\n                <!--</div> &lt;!&ndash; form-group// &ndash;&gt;-->\n\n            <!--</form>-->\n        <!--</div>-->\n    </div>\n</div>\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n    <div class=\"container-fluid col-12\">\n        <div class=\"row navbar-text float-right col-12\">\n            <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n                <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // this.website = new Website('', '', '');
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        console.log('from the form: ');
        console.log('newName: ' + this.webForm.value.newName);
        console.log('newDescription: ' + this.webForm.value.newDescription);
        // const website = new Website(this.webForm.value.newName, this.uid, this.webForm.value.newDescription);
        // this.website.name = this.name;
        // this.website.developerId = this.uid;
        // this.website.description = this.description;
        var website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"](this.webForm.value.newName, this.uid, this.webForm.value.newDescription);
        console.log('this.website.name: ' + website.name);
        this.websiteService.createWebsite(this.uid, website)
            .subscribe(function () { return _this.router.navigate(['/user', _this.uid, 'website']); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteNewComponent.prototype, "webForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a  (click)=\"backOnePage()\" class=\"cl-text-black cl-icon-padding\">\n                <span class=\"fas fa-chevron-left fontawsome_icon\">\n                </span>\n      </a>\n    </div>\n\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"toHeader()\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"toHtml()\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"toText()\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"toImage()\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"toYoutube()\">Youtube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"user/{{uid}}\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user fontawsome_icon float-right\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");





var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activateRoute, widgetService, router) {
        this.activateRoute = activateRoute;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            console.log('widget paramaters');
            console.log(params);
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetId = params['widgetId'];
        });
    };
    WidgetChooserComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetChooserComponent.prototype.findWidgetEdit = function (widget) {
        var _this = this;
        this.widgetService.createWidget(this.pid, widget)
            .subscribe(function (resWidget) {
            console.log('response widget: ' + JSON.stringify(resWidget));
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', resWidget._id]);
        });
    };
    WidgetChooserComponent.prototype.toHeader = function () {
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('HEADING', this.pid, 0, '', '', '', '');
        this.findWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.toImage = function () {
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('IMAGE', this.pid, 0, '', '', '', '');
        this.findWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.toYoutube = function () {
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('YOUTUBE', this.pid, 0, '', '', '', '');
        this.findWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.toHtml = function () {
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('HTML', this.pid, 0, '', '', '', '');
        this.findWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.toText = function () {
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('TEXT', this.pid, 0, '', '', '', '');
        this.findWidgetEdit(widget);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\n    position: relative;\n    padding-bottom: 56.25%; /* 16:9 aspect ratio */\n    height: 0;\n}\n\n.youtube-widget iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUUsc0JBQXNCO0lBQzlDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91dHViZS13aWRnZXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyAvKiAxNjo5IGFzcGVjdCByYXRpbyAqL1xuICAgIGhlaWdodDogMDtcbn1cblxuLnlvdXR1YmUtd2lkZ2V0IGlmcmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");





var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('', '', 0, '', '', '', '');
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.pageId, this.widgetId).subscribe(function (widget) { return _this.widget = widget; });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a (click)=\"backOnePage()\" class=\"cl-text-black cl-icon-padding\">\n                <span class=\"fas fa-chevron-left fontawsome_icon\">\n                </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"fas fa-plus fontawsome_icon\"></span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"headername\" class=\"font-weight-bold\">Name</label>\n      <input id=\"headername\"\n             name=\"newName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Name\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"headertext\" class=\"font-weight-bold\">Text</label>\n      <input id=\"headertext\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Text\"\n             name=\"newText\"\n             [ngModel]=\"getWidgetText()\"\n             ngModel\n             #newText=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"headersize\" class=\"font-weight-bold\">Size</label>\n      <input id=\"headersize\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Size\"\n             name=\"newSize\"\n             [ngModel]=\"getWidgetSize()\"\n             ngModel\n             #newSize=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"user/{{uid}}\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activeRouter, router) {
        this.widgetService = widgetService;
        this.activeRouter = activeRouter;
        this.router = router;
        this.flag = false; // setting error flag as false by default
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.error = 'please enter the name of the widget';
        this.alert = 'Enter the name of the widget';
        this.activeRouter.params
            .subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.uid = params['uid'];
            _this.widgetId = params['widgetId'];
        });
        this.widgetService.findWidgetById(this.pid, this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetHeaderComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        console.log('updateWidget called from the client');
        var text = this.widgetForm.value.widgetText;
        var size = this.widgetForm.value.widgetSize;
        this.widget.text = text;
        this.widget.size = this.widget.size + size;
        // this.newWidget = new WidgetHeading(this.widgetName, undefined, 'HEADING', this.pid, this.widgetSize, this.widgetText);
        this.widgetService.updateWidget(this.pid, this.widgetId, this.widget)
            .subscribe(function (widget) {
            console.log(widget);
            _this.backOnePage();
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.pid, this.widgetId)
            .subscribe(function () { return _this.backOnePage(); });
    };
    WidgetHeaderComponent.prototype.getWidgetText = function () {
        return this.widget.text;
    };
    WidgetHeaderComponent.prototype.getWidgetSize = function () {
        return this.widget.size.toString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaHRtbC93aWRnZXQtaHRtbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n    <a (click)=\"backOnePage()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n    </a>\n\n    <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n    <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n    </a>\n</nav>\n\n\n<div class=\"container-fluid pt-2\">\n\n    <form #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label for=\"headerName\" class=\"font-weight-bold\">Name</label>\n            <input id=\"headerName\"\n            name=\"newHeaderName\"\n            type=\"text\"\n            class=\"form-control\"\n            palceholder=\"Your Widget's Name\"\n            [ngModel]=\"printWidgetName()\"\n            #newHeaderName=\"ngModel\">\n        </div>\n\n        <div class=\"form-group\">\n            <quill-editor [ngModel]=\"widget.text\" name=\"newWidgetText\"></quill-editor>\n        </div>\n\n        <div class=\"form-group\">\n            <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");






var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () { };
    WidgetHtmlComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        var text = this.widgetForm.value.newText;
        var name = this.widgetForm.value.newName;
        this.widget.text = text;
        this.widget.name = name;
        this.widgetService.updateWidget(this.pid, this.widgetId, this.widget).subscribe(function (widget) {
            console.log('update widget called on client side' + widget);
            _this.backOnePage();
        });
    };
    /** Calls widget service to delete the widget and back us up one page */
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.pid, this.widgetId)
            .subscribe(function () { return _this.backOnePage(); });
    };
    WidgetHtmlComponent.prototype.printWidgetText = function () {
        return this.widget.text;
    };
    WidgetHtmlComponent.prototype.printWidgetName = function () {
        return this.widget.name;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetHtmlComponent.prototype, "widgetForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHtmlComponent.prototype, "uid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHtmlComponent.prototype, "wid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHtmlComponent.prototype, "pid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHtmlComponent.prototype, "widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"])
    ], WidgetHtmlComponent.prototype, "widget", void 0);
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_5__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n        <div class=\"navbar-text pull-left\">\n            <a (click)=\"backOnePage()\"\n               class=\"cl-text-black cl-icon-padding\">\n                <span class=\"fas fa-chevron-left fontawsome_icon\">\n                </span>\n            </a>\n        </div>\n        <div class=\"navbar-text pull-right\">\n            <a (click)=\"updateWidget()\"\n               class=\"cl-icon-padding cl-text-black\">\n                <span class=\"fas fa-plus fontawsome_icon\">\n                </span>\n            </a>\n        </div>\n        <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\"./\">\n            Widget Edit\n        </a>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"image-name\">Name</label>\n            <input [ngModel]=\"widgetName\"\n                   type=\"text\"\n                   name=\"newName\"\n                   class=\"form-control\"\n                   id=\"image-name\"\n                   required\n                   placeholder=\"Name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"image-text\">Text</label>\n            <input [ngModel]=\"widgetText\"\n                   type=\"text\"\n                   name=\"newText\"\n                   class=\"form-control\"\n                   id=\"image-text\"\n                   placeholder=\"Text\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"image-URL\">URL</label>\n            <input [ngModel]=\"widgetUrl\"\n                   type=\"text\"\n                   name=\"newUrl\"\n                   class=\"form-control\"\n                   id=\"image-URL\"\n                   placeholder=\"URL\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"image-width\">Width</label>\n            <input [ngModel]=\"widgetWidth\"\n                   type=\"text\"\n                   name=\"newWidth\"\n                   class=\"form-control\"\n                   id=\"image-width\"\n                   placeholder=\"100%\">\n        </div>\n\n\n\n        <div class=\"form-group\">\n            <label for=\"WidgetImageUpload\">Upload</label>\n            <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                <input name=\"myFile\" id=\"WidgetImageUpload\" type=\"file\" class=\"form-control\"/>\n                <input name=\"widgetId\" value=\"{{widgetId}}\" style=\"display: none\"/>\n                <input name=\"websiteId\" value=\"{{wid}}\" style=\"display: none\"/>\n                <input name=\"pageId\" value=\"{{pid}}\" style=\"display: none\"/>\n                <input name=\"userId\" value=\"{{uid}}\" style=\"display: none\"/>\n                <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n                <br/>\n            </form>\n            <button class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</button>\n        </div>\n    </form>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid row\">\n        <div class=\"pull-right navbar-text\">\n            <a routerLink=\"user/{{uid}}\" class=\"cl-icon-padding\">\n                <span class=\"fa fas-user fa-inverse\"></span>\n            </a>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(activatedRouter, widgetService, router, sharedService) {
        this.activatedRouter = activatedRouter;
        this.widgetService = widgetService;
        this.router = router;
        this.sharedService = sharedService;
        this.flag = false;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.activatedRouter.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetId = params['wid'];
        });
        this.widgetService.findWidgetById(this.pid, this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetImageComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        console.log('updateWidget called from the client');
        var text = this.widgetForm.value.widgetText;
        var url = this.widgetForm.value.url;
        var width = this.widgetForm.value.width;
        this.widget.text = text;
        this.widget.url = url;
        this.widget.width = width;
        // this.newWidget = new WidgetImage(this.widgetName, undefined, 'IMAGE', this.pageId, this.widgetWidth, this.widgetUrl);
        // this.router.navigate(['../'], {relativeTo: this.activatedRouter});
        this.widgetService.updateWidget(this.pid, this.widgetId, this.widget)
            .subscribe(function () { return _this.backOnePage(); });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.pid, this.widgetId)
            .subscribe(function () { return _this.backOnePage(); });
        // this.router.navigate(['../'], {relativeTo: this.activatedRouter});
    };
    WidgetImageComponent.prototype.getWidgetText = function () {
        return this.widget.text;
    };
    WidgetImageComponent.prototype.getWidgetWidth = function () {
        return this.widget.width;
    };
    WidgetImageComponent.prototype.getWidgetUrl = function () {
        return this.widget.url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtdGV4dC93aWRnZXQtdGV4dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n    <a (click)=\"backOnePage()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n    </a>\n\n    <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n    <a class=\"ml-auto\" (click)=\"updateWidget()\">\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n    </a>\n</nav>\n\n\n<div class=\"container-fluid\">\n    Text\n    <input [(ngModel)]=\"widget.text\" class=\"form-control\"/>\n    Rows\n    <input [(ngModel)]=\"widget.rows\" class=\"form-control\" type=\"number\"/>\n    <label for=\"Name\">Name</label>\n    <div>\n        <input [(ngModel)]=\"widget.name\"\n               type=\"text\"\n               class=\"form-control\"\n               id=\"Name\"\n               name=\"name\"\n               required\n               placeholder=\"Name\">\n    </div>\n    Placeholder\n    <input [(ngModel)]=\"widget.placeHolder\" class=\"form-control\" required/>\n    <p></p>\n    <div class=\"input-group\">\n        <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\"/>\n        <span class=\"input-group-addon\">\n      <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\"/>\n    </span>\n    </div>\n\n    <div class=\"form-group\">\n        <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid row\">\n        <div class=\"pull-right navbar-text\">\n            <a routerLink=\"user/{{uid}}\" class=\"cl-icon-padding\">\n                <span class=\"fas fa-user fontawsome_icon float-right\"></span>\n            </a>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetTextComponent.prototype.ngOnInit = function () { };
    WidgetTextComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.pid, this.widgetId, this.widget)
            .subscribe(function () { return _this.backOnePage(); });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.pid, this.widgetId)
            .subscribe(function () { return _this.backOnePage(); });
    };
    WidgetTextComponent.prototype.getWidgetUrl = function () {
        return this.widget.url;
    };
    WidgetTextComponent.prototype.getWidgetText = function () {
        return this.widget.text;
    };
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a (click)=\"backOnePage()\" class=\"cl-text-black cl-icon-padding\">\n                <span class=\"fas fa-chevron-left dark\">\n                </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"cl-icon-padding cl-text-black\">\n                <span class=\"fas fa-check dark\">\n                </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input [ngModel]=\"widgetName\"\n             type=\"text\"\n             name=\"newName\"\n             class=\"form-control\"\n             id=\"youtube-name\"\n             required\n             placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [ngModel]=\"getWidgetText()\"\n             type=\"text\"\n             name=\"newText\"\n             class=\"form-control\"\n             id=\"youtube-text\"\n             ngModel\n             #newText=\"ngModel\"\n             placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [ngModel]=\"getWidgetUrl()\"\n             type=\"text\"\n             name=\"newUrl\"\n             class=\"form-control\"\n             id=\"youtube-URL\"\n             ngModel\n             #newUrl=\"ngModel\"\n             placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [ngModel]=\"getWidgetWidth()\"\n             type=\"text\"\n             name=\"newWidth\"\n             class=\"form-control\"\n             id=\"youtube-width\"\n             ngModel\n             #newWidth=\"ngModel\"\n             placeholder=\"100%\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"user/{{uid}}\" class=\"cl-icon-padding\">\n        <span class=\"fa fas-user fa-inverse\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRouter, router) {
        this.widgetService = widgetService;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.flag = false;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        // fetch ids from current url
        this.activatedRouter.params
            .subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetId = params['wid'];
            _this.uid = params['uid'];
        });
        // fetch widget values as created on widget-new component
        this.widgetService.findWidgetById(this.pid, this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        var text = this.widgetForm.value.widgetName;
        var url = this.widgetForm.value.widgetUrl;
        var width = this.widgetForm.value.widgetWidth;
        this.widget.text = text;
        this.widget.url = url;
        this.widget.width = width;
        this.widgetService.updateWidget(this.pid, this.widgetId, this.widget)
            .subscribe(function () { return _this.backOnePage(); });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.pid, this.widgetId)
            .subscribe(function () { return _this.backOnePage(); });
    };
    WidgetYoutubeComponent.prototype.getWidgetText = function () {
        return this.widget.text;
    };
    WidgetYoutubeComponent.prototype.getWidgetWidth = function () {
        return this.widget.width;
    };
    WidgetYoutubeComponent.prototype.getWidgetUrl = function () {
        return this.widget.url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar cl-blue-navbar fixed-top\">\n    <div class=\"container-fluid\">\n        <a (click)=\"backOnePage()\" class=\"navbar-link \">\n            <span class=\"cl-text-white fas fa-chevron-left\"></span>\n        </a>\n        <a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" href=\"#\">\n            Widgets\n        </a>\n\n        <a (click)=\"widgetChoose()\"\n           class=\"navbar-link cl-text-white\">\n            <span class=\"cl-text-white fas fa-plus fontawesome_icon cl-icon-padding\"></span>\n        </a>\n    </div>\n</nav>\n\n<!--appSortable (newIndexes)=\"reorderWidgets($event)-->\n\n<div class=\"container cl-container-padding\">\n\n    <div *ngFor=\"let widget of widgets\">\n        <div [ngSwitch]=\"widget.type\">\n            <div class=\"float-right\">\n                <a (click)=\"widgetEdit()\">\n                    <i class=\"fas fa-cog fontawsome_icon\"></i>\n                </a>\n            </div>\n\n\n            <div *ngSwitchCase=\"'HEADING'\">\n                <div [ngSwitch]=\"widget.size\">\n                    <div *ngSwitchCase=\"1\">\n                        <h1>{{widget.text}}</h1>\n                    </div>\n                    <div *ngSwitchCase=\"2\">\n                        <h2>{{widget.text}}</h2>\n                    </div>\n                    <div *ngSwitchCase=\"3\">\n                        <h3>{{widget.text}}</h3>\n                    </div>\n                    <div *ngSwitchCase=\"4\">\n                        <h4>{{widget.text}}</h4>\n                    </div>\n                    <div *ngSwitchCase=\"5\">\n                        <h5>{{widget.text}}</h5>\n                    </div>\n                    <div *ngSwitchCase=\"6\">\n                        <h6>{{widget.text}}</h6>\n                    </div>\n                </div>\n            </div>\n\n            <div *ngSwitchCase=\"'IMAGE'\">\n                <div>\n                    <img class=\"img-responsive img-rounded cl-widget-images\"\n                         src=\"{{widget.url}}\">\n                </div>\n            </div>\n\n            <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n                <iframe width=\"560\" height=\"315\" [src]='makeSafeUrl(widget.url)' frameborder=\"0\"\n                        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                        allowfullscreen></iframe>\n            </div>\n\n\n            <div *ngSwitchCase=\"'HTML'\" class=\"html-widget\">\n                <span>{{widget.text}}</span>\n            </div>\n\n\n            <div *ngSwitchCase=\"'TEXT'\">\n                <div *ngIf=\"widget.formatted\">\n                    <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n                </div>\n                <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                       placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n                <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                          rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                          class=\"form-control\">{{widget.text}}</textarea>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n    <div class=\"float-left navbar-text\">\n        <a routerLink=\"./\" class=\"cl-icon-padding\">\n            <span class=\"fas fa-play\"></span>\n        </a>\n        <a routerLink=\"./\" class=\"cl-icon-padding pl-2\">\n            <span class=\"fas fa-eye\"></span>\n        </a>\n\n    </div>\n    <div class=\"row navbar-text float-right\">\n        <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n            <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n        </a>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetservice, router, activeroute, sanitizer) {
        this.widgetservice = widgetservice;
        this.router = router;
        this.activeroute = activeroute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId, pageId and websiteId from url
        this.activeroute.params
            .subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.uid = params['uid'];
        });
        console.log('ids found: ' + this.wid + ' ' + this.pid + ' ' + this.uid);
        // fetching list of widgets using widget service
        this.widgetservice.findWidgetsByPageId(this.pid)
            .subscribe(function (data) {
            _this.widgets = data;
        });
    };
    // reorderWidgets(indexes) {
    //     // call widget service function to update widget as per index
    //     this.widgetservice.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
    //         .subscribe(
    //             (data) => console.log(data)
    //         );
    // }
    WidgetListComponent.prototype.makeSafeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.backOnePage = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    WidgetListComponent.prototype.widgetEdit = function (widgetId) {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', widgetId]);
    };
    WidgetListComponent.prototype.widgetChoose = function () {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', 'new']);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200'
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

module.exports = __webpack_require__(/*! /Users/austinvanderwel/Documents/webDev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map