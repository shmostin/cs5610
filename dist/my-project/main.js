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















// /profile/{{user._id}}/website
// user/234/website/456/page/new
var appRoutes = [
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_6__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteEditComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    // export const routing = RouterModule.forRoot(appRoutes)
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
        // export const routing = RouterModule.forRoot(appRoutes)
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");





// user components



// website components



// page components



// widget components






// services






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_12__["PageEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_13__["PageListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_14__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_15__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_17__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_18__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_19__["WidgetYoutubeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_20__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_21__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_23__["WidgetService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_25__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.title = description;
        this.websiteId = websiteId;
    }
    return Page;
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
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
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
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");



var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('321', 'Post 1', '456', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('432', 'Post 2', '456', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('543', 'Post 3', '456', 'Lorem'),
        ];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var newPage = {
            _id: (new Date()).getTime() + ' ',
            name: page.name,
            websiteId: page.websiteId,
            title: page.title
        };
        this.pages.push(newPage);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var listOfPages = [];
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].websiteId === websiteId) {
                listOfPages.push(this.pages[i]);
            }
        }
        return listOfPages;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                return this.pages[i];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                this.pages[i].name = page.name;
                this.pages[i].title = page.title;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                var cut = +i;
                this.pages.splice(cut, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
var UserService = /** @class */ (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.APIUrl = '/api/user';
    }
    /**
     * adds a user to the users array
     * @param user is the user we want to add to the array.
     */
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + this.APIUrl, user);
    };
    /**
     * find the user by their _id.
     * @param userId the _id we are looking for.
     */
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + this.APIUrl, userId);
    };
    /**
     * find the user by their username.
     * @param username the username we are looking for.
     */
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + this.APIUrl + '?username=' + username);
    };
    /**
     * find the user by their credentials.
     * @param username the username we are looking for.
     * @param password the password we are looking for.
     */
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + this.APIUrl + '?username=' + username + '&password=' + password);
    };
    /**
     * update a user in the array of users.
     * @param userId the _id we are looking for.
     * @param user the user information we want to use as the update.
     */
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + this.APIUrl + '/' + user._id, user);
    };
    /**
     * deletes a user from the array of users.
     * @param userId the _id we are using to find the user.
     */
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + this.APIUrl + '/' + userId);
    };
    UserService.prototype.register = function (username, password) {
        // this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/user', body);
    };
    UserService.prototype.logout = function () {
        // this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '');
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
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");



var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('456', 'Facebook', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('456', 'Tweeter', '234', 'Lorem'),
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var aWebsite = {
            _id: website._id,
            name: website.name,
            developerId: website.developerId,
            description: website.description
        };
        this.websites.push(aWebsite);
    };
    WebsiteService.prototype.findWebsiteByUser = function (userId) {
        var websites = [];
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i].developerId === userId) {
                websites.push(this.websites[i]);
            }
        }
        return websites;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i].name = website.name;
                this.websites[i].description = website.description;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites.splice(i, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
    WidgetService.prototype.findwidgetsByPageId = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
    };
    // findWidgetsId(widgetId) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             return this.widgets[i];
    //         }
    //     }
    // }
    WidgetService.prototype.findWidgetsById = function (widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId);
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
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
    };
    // deleteWidget(widgetId) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             // const cut = +i;
    //             this.widgets.splice(i, 1);
    //         }
    //     }
    // }
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId);
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

module.exports = "<!DOCTYPE html>\n\n\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"../\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n\n    <a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" href=\"#\">\n      Edit-Page\n    </a>\n\n    <a [routerLink]=\"['../']\" class=\"navbar-link cl-text-white\">\n      <span class=\"cl-text-white fas fa-check fontawesome_icon cl-icon-padding\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]='page.name' type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]='page.title' type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"user/{{user._id}}/website/{{website._id}}/page\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\"\n       [routerLink]=\"['/user/' + userId]\">\n    </a>\n  </div>\n</nav>\n\n\n\n"

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





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router) {
        this.pageService = pageService;
        this.router = router;
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('321', 'Post 1', '456', 'Lorem');
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.page._id = params['pageid'];
            console.log('page id: ' + _this.page._id);
        });
        this.page = this.pageService.findPageById(this.page._id);
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

module.exports = "<!DOCTYPE html>\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n    <div class=\"container-fluid\">\n        <a routerLink=\"../../\" class=\"navbar-link \">\n            <span class=\"cl-text-white fas fa-chevron-left\"></span>\n        </a>\n        <a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" href=\"#\">\n            Pages\n        </a>\n\n        <a [routerLink]=\"['./new']\"\n           class=\"navbar-link cl-text-white\">\n            <span class=\"cl-text-white fas fa-plus fontawesome_icon cl-icon-padding\"></span>\n        </a>\n    </div>\n</nav>\n\n\n<!--<div class=\"container-fluid cl-container-padding\">-->\n<!--<ul class=\"list-group cl-list-group-borderless\">-->\n<!--<li class=\"list-group-item cl-list-item-boderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\"></span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">Blog Post</a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\">-->\n<!--</span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">Blogs</a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\">-->\n<!--</span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">Home</a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\">-->\n<!--</span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">About</a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}\">-->\n<!--<span class=\"fas fa-cog fontawsome_icon pull-right\">-->\n<!--</span>-->\n<!--</a>-->\n<!--<a routerLink=\"user/{{user._id}}/website/{{website.name}}/page/{{page.name}}/widget\">Contact Us</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--user/:uid/website/:wid/page/:pid/widget-->\n\n<!--<div class=\"container\">-->\n<!--<ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let website of websites\">-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}\">-->\n<!--<span class=\"fa fa-cog fontawesome_icon float-right\"></span>-->\n<!--</a>-->\n<!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n\n\n<!--<div class=\"list-group cl-list-group-borderless\" *ngFor=\"let page of pages\">-->\n    <!--<li class=\"list-group-item cl-list-group-borderless\">-->\n        <!--<a routerLink=\"./{{page._id}}\">-->\n            <!--<span class=\"fa fas-cog fontawesome_icon float-right\"></span>-->\n        <!--</a>-->\n        <!--<a routerLink=\"./{{page._id}}/widget\" class=\"text-blue\">{{page.name}}</a>-->\n    <!--</li>-->\n<!--</div>-->\n\n\n<div class=\"container\">\n    <div class=\"form-control\" *ngFor=\"let page of pages\">\n        <a [routerLink]=\"['./' + page._id + '/widget']\" class=\"text-blue\">{{ page.name }}</a>\n        <a [routerLink]=\"['./' + page._id]\" class=\"text-blue float-right\">\n            <i class=\"fas fa-cog\"></i>\n        </a>\n    </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n    <div class=\"container-fluid\">\n        <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\"\n           [routerLink]=\"['../../../../../' + 'user/' + userId]\">\n\n        </a>\n    </div>\n</nav>\n\n\n"

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
    function PageListComponent(pageServices, activatedRoute) {
        this.pageServices = pageServices;
        this.activatedRoute = activatedRoute;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('this website id: ' + params['wid']);
            _this.webId = params['wid'];
        });
        this.pages = this.pageServices.findPageByWebsiteId(this.webId);
        console.log('pages length from component: ' + this.pages.length);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n    <div class=\"container-fluid\">\n        <a routerLink=\"../\" class=\"navbar-link\">\n            <span class=\"cl-text-white fas fa-chevron-left\"></span>\n        </a>\n        <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n            New Page\n        </a>\n        <a routerLink=\"../\" class=\"navbar-link cl-text-white\">\n            <span class=\"cl-text-white fas fa-check fontawesome_icon cl-icon-padding\"></span>\n        </a>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"page-name\">Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"page-title\">Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n        </div>\n\n    </form>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n    <div class=\"container-fluid\">\n        <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" [routerLink]=\"['/user/' + userId]\">\n        </a>\n    </div>\n</nav>\n\n\n\n\n\n\n"

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


var PageNewComponent = /** @class */ (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<!DOCTYPE html>\n\n\n<div class=\"container\">\n<div *ngIf=\"errorFlag\";\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n\n  <h1>Login</h1>\n\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n\n\n    </div> <!-- form-group// -->\n    <div class =\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter a username\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\"\n              class=\"btn btn-primary btn-block\"\n              type=\"submit\">Login\n      </button>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-success btn-block\" routerLink=\"/register\" role=\"button\">Register</a>\n    </div>\n  </form>\n\n</div>"

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






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log('username: ' + this.username);
        console.log('password: ' + this.password);
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/user', user._id]);
            }
            else {
                console.log('That password was incorrect');
                _this.errorFlag = true;
            }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<!--<h1>Profile</h1>-->\n\n<!--<h2> user: {{user.username}}</h2>-->\n\n<!--{{user._id}}-->\n\n<nav class=\"navbar navbar-dark bg-primary fixed-top\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand mb-0 h5\" href=\"#\">\n            Profile\n        </a>\n        <i class=\"navbar-brand fas fa-check fontawesome_icon cl-icon-padding\">\n        </i>\n    </div>\n</nav>\n\n\n<a routerLink=\"profile/{{userId}}/website\">Websites</a>\n<br/>\n\n\n\n<div class=\"container-fluid\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input [ngModel]=\"user.username\" type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input [ngModel]=\"user.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"austin@mywebsite.com\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"first name\">First name</label>\n            <input [ngModel]=\"user.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first name\" placeholder=\"Austin\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"last name\">Last name</label>\n            <input [ngModel]=\"user.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last name\" placeholder=\"Vanderwel\">\n        </div>\n    </form>\n    <a class=\"btn btn-primary btn-block\"\n       routerLink=\"./website\">Websites</a>\n    <a class=\"btn btn-danger btn-block\"\n       routerLink=\"/login\">Logout</a>\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n    <a class=\"navbar-brand font-weight-bold\" href=\"#\">\n        <!--<span class=\"navbar-brand fas fa-user fontawesome_icon\"></span>-->\n    </a>\n    <div class=\"text-right\">\n        <a routerLink=\"user/{{user._id}}\" class=\"float-right\">\n            <span>\n                <i class=\"fas fa-user fa-inverse\"></i>\n            </span>\n        </a>\n    </div>\n</nav>\n"

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
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = {};
        this.errorMsg = 'Invalid username or password !';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    // ngOnInit() {
    //     this.route.params.subscribe(params => {
    //         this.user._id = params['uid'];
    //         console.log('user id: ' + this.user._id);
    //     });
    //     this.userService.findUserById(this.user._id.toString())
    //         .subscribe(data => {
    //             console.log('login component');
    //             console.log(data);
    //             this.user = data;
    //         });
    //
    // }
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    ProfileComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.username = this.user['username'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
        this.userId = this.user['_id'];
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        var updatedUser = {
            _id: this.user['_id'],
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        this.userService.updateUser(updatedUser)
            .subscribe(function (data) {
            _this.user = data;
        }, function (error) { return _this.errorFlag = true; });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



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

module.exports = "<!DOCTYPE html>\n\n<div class=\"container\">\n  <h1 class=\"text-center\">Register</h1>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Username\"/>\n  <input type=\"password\" class=\"form-control\" placeholder=\"Password\"/>\n  <input type=\"password\" class=\"form-control\" placeholder=\"Verify Password\">\n  <a class=\"btn btn-primary btn-block\" routerLink=\"/user/alice\">Register</a>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</a>\n\n</div>\n"

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





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.vpassword = this.registerForm.value.vpassword;
        // call user service only if passwords match else show the same error
        if (this.password === this.vpassword) {
            this._userService.register(this.username, this.password)
                .subscribe(function (data) {
                _this.router.navigate(['/profile']);
            }, function (error) {
                console.log(error);
                _this.error = error._body;
            });
        }
        else {
            this.error = 'Passwords do not match!';
        }
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

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a href=\"website-list.html\" class=\"navbar-link cl-text-white\">\n            <span class=\"glyphicon glyphicon-cheveron-left\"></span>\n          </a>\n        </p>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Websites\n        </a>\n        <a href=\"website-new.html\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text=white navbar-brand cl-text-bold\" href=\"#\">\n          Edit Websites\n        </a>\n        <a href=\"website-list.html\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"user/{{user._id}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page\">Blogging App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"user/{{user._id}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page\">Address Book App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"user/{{user._id}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page\">Script Testing App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"user/{{user._id}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page\">Blogger</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-xs-8\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"website.name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Blogger\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"website.description\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"This is a blog publishing service.\"></textarea>\n      </div>\n      <a class=\"btn btn-danger btn-block\" href=\"website-list.html\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom clu-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"user/{{user._id}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"fa fas-user fa-inverse\"></span>\n    </a>\n  </div>\n</nav>\n"

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





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, router) {
        this.websiteService = websiteService;
        this.router = router;
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('123', 'Facebook', '456', 'Lorem');
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.website._id = params['webid'];
            console.log('web id: ' + _this.website._id);
        });
        this.website = this.websiteService.findWebsiteById(this.website._id);
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

module.exports = "\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n    <a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" href=\"#\">\n      Websites\n    </a>\n    <a [routerLink]=\"['../../' + 'user/' + userId + '/website' + '/new']\" class=\"navbar-link cl-text-white\">\n      <span class=\"cl-text-white fas fa-plus fontawesome_icon cl-icon-padding\"></span>\n    </a>\n  </div>\n</nav>\n\n<!--user/:uid/website/new-->\n<div class=\"container\" >\n  <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let website of websites\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" >\n        <span class=\"fa fa-cog fontawesome_icon float-right\" ></span>\n      </a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n    </li>\n  </ul>\n</div>\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" [routerLink]=\"['../../' + 'user/' + userId]\">\n    </a>\n  </div>\n</nav>\n\n\n"

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
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websites = this.websiteService.findWebsiteByUser(this.userId);
        console.log('userId from the weblistComp: ' + this.userId);
        console.log('website list length: ' + this.websites.length);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "<!--<!DOCTYPE html>-->\n\n<!--<nav class=\"navbar navbar-dark fixed-top cl-blue-navbar\">-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-xs-4 hidden-xs\">-->\n      <!--<div class=\"container-fluid\">-->\n        <!--<p class=\"navbar-text pull-left\">-->\n          <!--<a href=\"website-list.html\" class=\"navbar-link cl-text-white\">-->\n            <!--<span class=\"glyphicon glyphicon-cheveron-left\"></span>-->\n          <!--</a>-->\n        <!--</p>-->\n        <!--<a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">-->\n          <!--Websites-->\n        <!--</a>-->\n        <!--<a routerLink=\"user/{{user._id}}/website/new\" class=\"navbar-link navar-text pull-right cl-text-white cl-icon-padding\">-->\n          <!--<span class=\"fa fas-plus fa-inverse\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-xs-8\">-->\n      <!--<div class=\"container-fluid\">-->\n        <!--<a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">-->\n          <!--New Websites-->\n        <!--</a>-->\n        <!--<a href=\"website-list.html\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">-->\n          <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n\n<!--<div class=\"contain-fluid\">-->\n  <!--<div class=\"col-xs-4 hidden-xs\">-->\n    <!--<ul class=\"list-group cl-list-group-borderless\">-->\n      <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n        <!--<a routerLink=\"user/{{user._id}}/website/{{website._id}}\">-->\n          <!--<span class=\"fa fas-cog pull-right fa-inverse\"></span>-->\n        <!--</a>-->\n        <!--<a routerLink=\"user/{{user._id}}/website/{{website._id}}/page\">Blogging App</a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n        <!--<a routerLink=\"user/{{user._id}}/website/{{website._id}}\">-->\n          <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n        <!--</a>-->\n        <!--<a routerLink=\"user/{{user._id}}/website/{{website._id}}/page\">Script Testing App</a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n        <!--<a routerLink=\"user/{{user._id}}/website/{{website._id}}\">-->\n          <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n        <!--</a>-->\n        <!--<a routerLink=\"user/{{user._id}}/website/{{website._id}}/page\">Blogger</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n  <!--</div>-->\n  <!--<div class=\"col-xs-8\">-->\n    <!--<form>-->\n      <!--<div class=\"form-group\">-->\n        <!--<label for=\"website-name\">Name</label>-->\n        <!--<input type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\">-->\n      <!--</div>-->\n      <!--<div class=\"form-group\">-->\n        <!--<label for=\"website-description\">Description</label>-->\n        <!--<textarea id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>-->\n      <!--</div>-->\n    <!--</form>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">-->\n  <!--<div class=\"container-fluid\">-->\n    <!--<a routerLink=\"user/{{user._id}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">-->\n      <!--<span class=\"glyphicon glyphicon-user\"></span>-->\n    <!--</a>-->\n  <!--</div>-->\n<!--</nav>-->\n\n\n<nav class=\"navbar fixed-top bc-blue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-brand navbar-dark\">\n          <a routerLink=\"../\" class=\"float-left text-white\">\n            <i class=\"fas fa-chevron-left\"></i>\n          </a>\n          <a class=\"text-white-bold\" routerLink=\"../\">\n            Websites\n          </a>\n\n        </div>\n        <a routerLink=\"./\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-plus\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"container-fluid\">\n        <a class=\"navbar-brand text-white-bold\" routerLink=\"./\">\n          New Websites\n        </a>\n        <a routerLink=\"../\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-check\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-align\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"form-control\" *ngFor=\"let website of websites\">\n        <a [routerLink]=\"['../' + website._id + 'page']\" class=\"text-blue\">{{ website.name }}</a>\n        <a [routerLink]=\"['../' + website._id]\" class=\"text-blue float-right\">\n          <i class=\"fas fa-cog\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input\n                  type=\"text\"\n                  name=\"websiteName\"\n                  class=\"form-control\"\n                  id=\"websiteName\"\n                  [(ngModel)]=\"newWebsiteName\"\n                  required\n                  #name=\"ngModel\">\n          <span\n                  class=\"help-block\"\n                  *ngIf=\"!name.valid && name.touched\">\n            Please enter a valid website name\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea\n                  id=\"websiteDescription\"\n                  name=\"websiteDescription\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  [(ngModel)]=\"newWebsiteDescription\"></textarea>\n        </div>\n        <button\n                class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                [disabled]=\"!f.valid\">\n          Submit\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user' + userId]\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>"

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


var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\" class=\"cl-text-black cl-icon-padding\">\n                <span class=\"glyphicon glyphicon-cheveron-left\">\n                </span>\n      </a>\n    </div>\n\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-heading.html\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-image.html\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-youtube.html\">Youtube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"user/{{user._id}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glypicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

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


var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

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


var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\" class=\"cl-text-black cl-icon-padding\">\n                <span class=\"glyphicon glyphicon-cheveron-left\">\n                </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.pageId\" type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Name</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Name</label>\n      <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"user/{{user._id}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

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




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activeRouter, router) {
        this.widgetService = widgetService;
        this.activeRouter = activeRouter;
        this.router = router;
        this.flag = false; // setting error flag as false by default
        this.widget = {};
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.error = 'please enter the name of the widget';
        this.alert = 'Enter the name of the widget';
        this.activeRouter.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        this.widgetService.findWidgetsById(this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            this.flag = true;
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (data) { return _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
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

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\" class=\"cl-text-black cl-icon-padding\">\n                <span class=\"glyphicon glyphicon-cheveron-left\">\n                </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\" class=\"cl-icon-padding cl-text-black\">\n                <span class=\"glyphicon glyphicon-ok\">\n                </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget.pageId\" type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputFile\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\" href=\"#\">Upload Image</a>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\">Delete</a>\n</div>\n\n\n<form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\n  <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n  <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n  <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n  <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n  <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n  <br/>\n\n</form>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"user/{{user._id}}\" class=\"cl-icon-padding\">\n        <span class=\"fa fas-user fa-inverse\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

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






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(activatedRouter, widgetService, router, sharedService) {
        this.activatedRouter = activatedRouter;
        this.widgetService = widgetService;
        this.router = router;
        this.sharedService = sharedService;
        this.flag = false;
        this.widget = {};
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.activatedRouter.params
            .subscribe(function (params) {
            _this.userId = _this.sharedService.user['_id'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        this.widgetService.findWidgetsById(this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
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

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\" class=\"cl-text-black cl-icon-padding\">\n                <span class=\"glyphicon glyphicon-cheveron-left\">\n                </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\" class=\"cl-icon-padding cl-text-black\">\n                <span class=\"glyphicon glyphicon-ok\">\n                </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input [(ngModel)]=\"widget.pageId\" type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"user/{{user._id}}/website/{{website._id}}/page/{{page._id}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"user/{{user._id}}\" class=\"cl-icon-padding\">\n        <span class=\"fa fas-user fa-inverse\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

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




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRouter, router) {
        this.widgetService = widgetService;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.flag = false; // setting error flag as false by default
        this.widget = {};
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        // fetch ids from current url
        this.activatedRouter.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        // fetch widget values as created on widget-new component
        this.widgetService.findWidgetsById(this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            this.flag = true;
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (data) { return _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
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

module.exports = "<!--<body>-->\n<!--<nav class=\"navbar navbar-brand navbar-light bg-light fixed-top\">-->\n  <!--<div class=\"container-fluid row\">-->\n    <!--<div>-->\n      <!--<a routerLink=\"/user/{{userid}}/website/{{webid}}/page\" class=\"cl-text-black cl-icon-padding\">-->\n          <!--<span class=\"fas fa-chevron-left\">-->\n          <!--</span>-->\n      <!--</a>-->\n      <!--<a class=\"navbar-brand navbar-text cl-text-white cl-text-bold\"-->\n         <!--routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\">-->\n        <!--Widgets-->\n      <!--</a>-->\n    <!--</div>-->\n    <!--<div class=\"navbar-text float-right\">-->\n      <!--<a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/new\"-->\n         <!--class=\"cl-icon-padding cl-text-black\">-->\n          <!--<span class=\"fas fa-plus\">-->\n          <!--</span>-->\n      <!--</a>-->\n    <!--</div>-->\n\n  <!--</div>-->\n<!--</nav>-->\n\n\n<nav class=\"navbar cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"../../\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n    <a class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\" href=\"#\">\n      Widgets\n    </a>\n\n    <a [routerLink]=\"['./new']\"\n       class=\"navbar-link cl-text-white\">\n      <span class=\"cl-text-white fas fa-plus fontawesome_icon cl-icon-padding\"></span>\n    </a>\n  </div>\n</nav>\n\n<body>\n<div class=\"container cl-container-padding\">\n  <div *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADER'\">\n        <div class=\"float-right\">\n          <a routerLink=\"/user/{{userid}}/website/{{webId}}/page/{{pageid}}/widget/{{widget._id}}\">\n            <span class=\"fas fa-cog\"></span>\n          </a>\n        </div>\n        <div [ngSwitch]=\"widget.size\">\n          <div *ngSwitchCase=\"1\">\n            <h1>{{ widget.text }}</h1>\n          </div>\n          <div *ngSwitchCase=\"2\">\n            <h2>{{ widget.text }}</h2>\n          </div>\n          <div *ngSwitchCase=\"3\">\n            <h3>{{ widget.text }}</h3>\n          </div>\n          <div *ngSwitchCase=\"4\">\n            <h4>{{ widget.text }}</h4>\n          </div>\n          <div *ngSwitchCase=\"5\">\n            <h5>{{ widget.text }}</h5>\n          </div>\n          <div *ngSwitchCase=\"6\">\n            <h6>{{ widget.text }}</h6>\n          </div>\n        </div>\n      </div>\n\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"float-right\">\n          <a routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{widget._id}}\">\n            <span class=\"fas fa-cog\"></span>\n          </a>\n        </div>\n        <img class=\"img-responsive img-rounded cl-widget-images\"\n             src=\"{{widget.url}}\">\n      </div>\n\n\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe class = \"embed-responsive-item\" width=\"640\" height=\"360\"\n                  [src]=\"getUrl(widget)\"\n                  frameborder=\"0\"\n                  allow=\"accelerometer autoplay encrypted-media gyroscope picture-in-picture\"\n                  allowfullscreen>\n          </iframe>\n          <div class = \"overlay cl-relative-position\">\n            <a routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\"\n               class=\"float-right overlay cl-relative-position\">\n\n              <span class=\"fas fa-bars cl-white-background\" ></span>\n            </a>\n            <a routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{widget._id}}\"\n               class=\"float-right overlay cl-relative-position\">\n              <span class=\"fas fa-cog cl-relative-position cl-white-background\" ></span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\"\n       [routerLink]=\"['/user/' + userId]\">\n    </a>\n  </div>\n</nav>\n</body>"

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




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetservice, route, activeroute) {
        this.widgetservice = widgetservice;
        this.route = route;
        this.activeroute = activeroute;
        this.widgets = [{}];
        this.widget = {};
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId, pageId and websiteId from url
        this.activeroute.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
        });
        // fetching list of widgets using widget service
        this.widgetservice.findwidgetsByPageId(this.pageId)
            .subscribe(function (data) {
            _this.widgets = data;
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this.widgetservice.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) { return console.log(data); });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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