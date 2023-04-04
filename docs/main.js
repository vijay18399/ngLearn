"use strict";
(self["webpackChunkngLearn"] = self["webpackChunkngLearn"] || []).push([["main"],{

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-quill */ 3115);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ 8146);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/register/register.component */ 7225);
/* harmony import */ var _core_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/app.component */ 2089);
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/footer/footer.component */ 1229);
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/header/header.component */ 3556);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing/app-routing.module */ 7948);
/* harmony import */ var _tutorial_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tutorial/tutorial-details/tutorial-details.component */ 7895);
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tutorial/tutorial.component */ 9902);
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game/game.component */ 8339);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _dashboard_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/tutorials/tutorials.component */ 3354);
/* harmony import */ var _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/users/users.component */ 9590);
/* harmony import */ var _dashboard_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/editor/editor.component */ 6056);
/* harmony import */ var _dashboard_preview_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/preview/preview.component */ 2361);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);






















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_core_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_19__.QuillModule.forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_core_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__.TutorialComponent, _tutorial_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_7__.TutorialDetailsComponent, _game_game_component__WEBPACK_IMPORTED_MODULE_9__.GameComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.DashboardComponent, _dashboard_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_11__.TutorialsComponent, _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_12__.UsersComponent, _dashboard_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__.EditorComponent, _dashboard_preview_preview_component__WEBPACK_IMPORTED_MODULE_14__.PreviewComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_19__.QuillModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class LoginComponent {}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)();
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 22,
  vars: 0,
  consts: [[1, "container"], [1, "card", "card-login"], [1, "card-content"], [1, "card-title"], [1, "input-field"], ["id", "username", "type", "text", 1, "validate"], ["for", "username", 1, ""], ["id", "password", "type", "password", 1, "validate"], ["for", "password"], ["href", "#!"], ["type", "submit", "value", "Log In", 1, "btn", "right"], ["href", "#!", 1, "btn-flat"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log In");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form")(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br")(17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: [".card.card-login[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid black;\n  max-width: 540px;\n}\n\n.card.card-login[_ngcontent-%COMP%]   .card-login-splash[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  flex: 1;\n}\n\n.card.card-login[_ngcontent-%COMP%]   .card-login-splash[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  display: block;\n  z-index: -1;\n}\n\n.card.card-login[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: 0 0 2px 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLE9BQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtBQUtKIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuY2FyZC1sb2dpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xufVxuLmNhcmQuY2FyZC1sb2dpbiAuY2FyZC1sb2dpbi1zcGxhc2gge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZsZXg6IDE7XG59XG4uY2FyZC5jYXJkLWxvZ2luIC5jYXJkLWxvZ2luLXNwbGFzaCBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgei1pbmRleDogLTE7XG59XG4uY2FyZC5jYXJkLWxvZ2luIC5jYXJkLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG59XG4uY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7225:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class RegisterComponent {}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)();
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 22,
  vars: 0,
  consts: [[1, "container"], [1, "card", "card-login"], [1, "card-content"], [1, "card-title"], [1, "input-field"], ["id", "username", "type", "text", 1, "validate"], ["for", "username", 1, ""], ["id", "password", "type", "password", 1, "validate"], ["for", "password"], ["href", "#!"], ["type", "submit", "value", "Log In", 1, "btn", "right"], ["href", "#!", 1, "btn-flat"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log In");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form")(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br")(17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: [".card.card-login[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid black;\n  max-width: 540px;\n}\n\n.card.card-login[_ngcontent-%COMP%]   .card-login-splash[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  flex: 1;\n}\n\n.card.card-login[_ngcontent-%COMP%]   .card-login-splash[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  display: block;\n  z-index: -1;\n}\n\n.card.card-login[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: 0 0 2px 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLE9BQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtBQUtKIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuY2FyZC1sb2dpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xufVxuLmNhcmQuY2FyZC1sb2dpbiAuY2FyZC1sb2dpbi1zcGxhc2gge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZsZXg6IDE7XG59XG4uY2FyZC5jYXJkLWxvZ2luIC5jYXJkLWxvZ2luLXNwbGFzaCBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgei1pbmRleDogLTE7XG59XG4uY2FyZC5jYXJkLWxvZ2luIC5jYXJkLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG59XG4uY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2089:
/*!***************************************!*\
  !*** ./src/app/core/app.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3556);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 1229);




class AppComponent {
  constructor() {
    this.title = 'ngLearn';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container-fluid"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  height: calc(100vh - 96px);\n  width: 100%;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NnB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1229:
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 2,
  vars: 0,
  consts: [[1, "footer-copyright"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A9 2023 ngLearn, All rights reserved.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".footer-copyright[_ngcontent-%COMP%] {\n  height: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItY29weXJpZ2h0e1xuICAgIGhlaWdodDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3556:
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 17,
  vars: 0,
  consts: [[1, "nav-extended", "white"], [1, "nav-wrapper", "blue-text"], ["href", "", 1, "brand-logo", "left"], ["id", "nav-mobile", 1, "right"], ["routerLink", ""], ["routerLink", "tutorials"], ["routerLink", "dashboard"], ["routerLink", "login"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ngLearn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3)(5, "li")(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".brand-logo[_ngcontent-%COMP%] {\n  color: #212121;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #212121;\n}\n\n.brand-logo[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1sb2dve1xuICAgIGNvbG9yOiAjMjEyMTIxIDtcbn1cbmxpIGF7XG4gICAgY29sb3I6ICMyMTIxMjEgO1xufVxuLmJyYW5kLWxvZ297XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class DashboardComponent {}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 55,
  vars: 0,
  consts: [[1, "blue", "breadcrumb-nav"], [1, "nav-wrapper"], ["routerLink", "/dashboard", 1, "brand-logo"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], ["routerLink", "/users"], ["routerLink", "/tutorial-list"], ["routerLink", "/editor"], [1, "cards"], [1, "card", "blue-cyan", "gradient-shadow", "white-text", "animate", "fadeLeft"], [1, "row", "display-flex", "align-items-center"], [1, "col", "s7", "m7"], [1, "material-icons", "background-round", "mt-5"], [1, "col", "s5", "m5", "right-align"], [1, "white-text"], [1, "card", "green-teal", "gradient-shadow", "white-text", "animate", "fadeLeft"], [1, "card", "indigo-purple", "gradient-shadow", "white-text", "animate", "fadeLeft"], [1, "card", "amber-amber", "gradient-shadow", "white-text", "animate", "fadeLeft"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3)(5, "li")(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Editor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "people");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12)(23, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "div", 9)(27, "div", 10)(28, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "view_compact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12)(33, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15)(36, "div", 9)(37, "div", 10)(38, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Total Hits");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12)(43, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16)(46, "div", 9)(47, "div", 10)(48, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Today Hits");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12)(53, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".cards[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 5px;\n  padding: 10px;\n}\n\nnav[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRVI7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG59XG5cbm5hdntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6056:
/*!******************************************************!*\
  !*** ./src/app/dashboard/editor/editor.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-quill */ 3115);







const _c0 = ["editor"];
function EditorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div")(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Blog Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Blog Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blog About Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_div_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.goContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function EditorComponent_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_div_2_div_15_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.selectContent(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "drag_indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_div_2_div_15_Template_i_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.removeContent(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const content_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", i_r8 === ctx_r4.selectedContentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 3, content_r7.value.title, 0, 20));
  }
}
function EditorComponent_div_2_form_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 26)(1, "div", 27)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "quill-editor", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.selectedContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modules", ctx_r5.modules);
  }
}
function EditorComponent_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Content First !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function EditorComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "nav", 10)(2, "div", 11)(3, "div", 12)(4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15)(9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function EditorComponent_div_2_Template_div_cdkDropListDropped_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17)(11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_div_2_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.addContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditorComponent_div_2_div_15_Template, 8, 7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditorComponent_div_2_form_16_Template, 8, 2, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditorComponent_div_2_div_17_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.contents.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contents.controls.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.contents.controls.length);
  }
}
class EditorComponent {
  constructor() {
    this.isContent = true;
    this.htmlString = '';
    this.modules = {
      syntax: true,
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
        'header': 1
      }, {
        'header': 2
      }], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], [{
        'script': 'sub'
      }, {
        'script': 'super'
      }], [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }], [{
        'direction': 'rtl'
      }], [{
        'size': ['small', false, 'large', 'huge']
      }], [{
        'header': [1, 2, 3, 4, 5, 6, false]
      }], [{
        'color': []
      }, {
        'background': []
      }], [{
        'font': []
      }], [{
        'align': []
      }], ['clean'], ['link', 'image'] // link and image, video
      ]
    };

    this.onSelectionChanged = event => {};
    this.onContentChanged = event => {
      this.htmlString = event.html;
    };
    this.blogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('This is One'),
      about: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      contents: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArray(this.createMainContents())
    });
    this.selectedContentIndex = 0;
  }
  changedEditor(event) {
    console.log('editor-change', event);
  }
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.moveItemInArray)(this.contents.controls, event.previousIndex, event.currentIndex);
  }
  ngOnInit() {}
  createMainContents() {
    let contents = [];
    let content = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('Introduction'),
      content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
    });
    let content2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('Conclusion'),
      content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
    });
    contents.push(content);
    contents.push(content2);
    return contents;
  }
  createContentFormGroup(id) {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('Content Part : ' + (id - 1)),
      content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
    });
  }
  addContent() {
    const contents = this.blogForm.get('contents');
    contents.push(this.createContentFormGroup(contents.length));
    this.selectedContentIndex = contents.length - 1;
  }
  selectContent(index) {
    this.selectedContentIndex = index;
  }
  get selectedContent() {
    const contents = this.blogForm.get('contents');
    return contents.at(this.selectedContentIndex);
  }
  get title() {
    return this.blogForm.get('title');
  }
  get subtitle() {
    return this.blogForm.get('subtitle');
  }
  get image() {
    return this.blogForm.get('image');
  }
  get contents() {
    return this.blogForm.get('contents');
  }
  onSubmit() {
    // Handle form submission
  }
  goContent() {
    this.isContent = true;
    this.addContent();
  }
  removeContent(index) {
    this.contents.removeAt(index);
  }
  onDrop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.moveItemInArray)(this.contents.controls, event.previousIndex, event.currentIndex);
  }
  openPreview() {}
  editorCreated(quill) {}
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) {
  return new (t || EditorComponent)();
};
EditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditorComponent,
  selectors: [["app-editor"]],
  viewQuery: function EditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    }
  },
  decls: 3,
  vars: 3,
  consts: [[1, "container-fluid", 3, "formGroup"], ["class", "card", 4, "ngIf"], ["class", "contentContainer", 4, "ngIf"], [1, "card"], ["formControlName", "title", "placeholder", "Enter Title"], [1, "example-full-width"], ["formControlName", "image", "placeholder", "Enter Image URL"], ["formControlName", "about", "rows", "10", "placeholder", "Explain About Blog ", "data-length", "120", 1, "materialize-textarea"], ["mat-raised-button", "", 1, "waves-effect", "waves-light", "btn", "blue", 3, "click"], [1, "contentContainer"], [1, "breadcrumb-nav"], [1, "blue", "nav-wrapper"], [1, "col", "s12"], ["routerLink", "/dashboard", 1, "breadcrumb"], ["routerLink", "/editor", 1, "breadcrumb"], [1, "contentBlock"], ["cdkDropList", "", 1, "content-nav", 3, "cdkDropListDropped"], [1, "actions"], [1, "waves-effect", "waves-light", "btn", "small", "blue", 3, "click"], [1, "material-icons", "left"], ["cdkDrag", "", "class", "content-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "content-form", 3, "formGroup", 4, "ngIf"], ["class", "content-form", 4, "ngIf"], ["cdkDrag", "", 1, "content-item", 3, "click"], ["cdkDragHandle", "", 1, "material-icons"], ["color", "warn", 1, "material-icons", 3, "click"], [1, "content-form", 3, "formGroup"], [1, "textInput"], ["formControlName", "title", "placeholder", "Enter  Content Title"], [1, "editorInput"], ["placeholder", "Enter Text", "name", "content", "formControlName", "content", 3, "modules"], ["editor", ""], [1, "content-form"]],
  template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditorComponent_div_1_Template, 15, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditorComponent_div_2_Template, 18, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.blogForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isContent);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isContent);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ngx_quill__WEBPACK_IMPORTED_MODULE_5__.QuillEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
  styles: [".container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 600px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n.contentContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.contentContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n}\n.contentContainer[_ngcontent-%COMP%]   .contentBlock[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 96px);\n  background-color: rgb(235, 235, 241);\n}\n.contentContainer[_ngcontent-%COMP%]   .contentBlock[_ngcontent-%COMP%]   .content-nav[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 100%;\n  overflow-y: scroll;\n}\n.contentContainer[_ngcontent-%COMP%]   .contentBlock[_ngcontent-%COMP%]   .content-nav[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 6px;\n  margin: 4px 0px;\n}\n.contentContainer[_ngcontent-%COMP%]   .contentBlock[_ngcontent-%COMP%]   .content-nav[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.contentContainer[_ngcontent-%COMP%]   .contentBlock[_ngcontent-%COMP%]   .content-nav[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background: #2196F3;\n  color: #fff;\n}\n.contentContainer[_ngcontent-%COMP%]   .contentBlock[_ngcontent-%COMP%]   .content-nav[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 55px;\n  background-color: white;\n  border-radius: 10px;\n}\n.contentContainer[_ngcontent-%COMP%]   .contentBlock[_ngcontent-%COMP%]   .content-form[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.contentContainer[_ngcontent-%COMP%]   .contentBlock[_ngcontent-%COMP%]   .content-form[_ngcontent-%COMP%]   .textInput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.editorInput[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 80%;\n}\n\n  .ql-editor {\n  height: 250px !important;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 80%;\n}\n\n.ql-container[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  font-family: unset !important;\n  font-size: unset !important;\n}\n\n.ql-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  margin: 4px;\n  padding: 4px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFFSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUFBUjtBQUVRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFaO0FBQ1k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBQ2dCO0VBQ0ksZUFBQTtBQUNwQjtBQUdZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBRGhCO0FBSVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRmhCO0FBTVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFKWjtBQUtZO0VBQ0ksV0FBQTtBQUhoQjs7QUFXQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBUko7O0FBVUE7RUFDSSx3QkFBQTtBQVBKOztBQVNBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFOSjs7QUFRRTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUxKOztBQVFFO0VBQ0UsaUJBQUE7QUFMSjs7QUFPRTtFQUNFLFdBQUE7QUFKSjs7QUFNRTtFQUNFLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSEoiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJyZWFkY3J1bWItbmF2IHtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5jb250ZW50Q29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgbmF2IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC5jb250ZW50QmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyNDEpO1xuXG4gICAgICAgIC5jb250ZW50LW5hdiB7XG4gICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICAuY29udGVudC1pdGVtIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDBweDtcblxuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTk2RjM7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1mb3JtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLnRleHRJbnB1dHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgfVxuXG59XG4uZWRpdG9ySW5wdXR7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiA4MCU7XG59XG46Om5nLWRlZXAgLnFsLWVkaXRvciB7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbi5mb3JtLWdyb3VwIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDgwJTtcbiAgfVxuICAucWwtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgZm9udC1mYW1pbHk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnFsLWNvbnRhaW5lciAucWwtZWRpdG9yIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICAuZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2361:
/*!********************************************************!*\
  !*** ./src/app/dashboard/preview/preview.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewComponent": () => (/* binding */ PreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PreviewComponent {}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
  return new (t || PreviewComponent)();
};
PreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PreviewComponent,
  selectors: [["app-preview"]],
  decls: 2,
  vars: 0,
  template: function PreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "preview works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3354:
/*!************************************************************!*\
  !*** ./src/app/dashboard/tutorials/tutorials.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialsComponent": () => (/* binding */ TutorialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class TutorialsComponent {}
TutorialsComponent.ɵfac = function TutorialsComponent_Factory(t) {
  return new (t || TutorialsComponent)();
};
TutorialsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TutorialsComponent,
  selectors: [["app-tutorials"]],
  decls: 104,
  vars: 0,
  consts: [[1, "breadcrumb-nav"], [1, "blue", "nav-wrapper"], [1, "col", "s12"], ["routerLink", "/dashboard", 1, "breadcrumb"], ["routerLink", "/tutorial-list", 1, "breadcrumb"], [1, "container-fluid"], [1, "card"], [1, "green", "white-text", "badge"], [1, "red", "white-text", "badge"], [1, "pagination", "display-flex", "justify-content-center"], [1, "disabled"], ["href", "#!"], [1, "material-icons"], [1, "active", "blue"], [1, "waves-effect"]],
  template: function TutorialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Display Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Created at");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody")(20, "tr")(21, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Alvin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Eclair@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Apr 10 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td")(28, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr")(31, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Alan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Jellybean@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Jun 1 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td")(38, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "BLOCK");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr")(41, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Jonathan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lollipop@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Aug 30 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td")(48, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr")(51, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Alvin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Eclair@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Apr 10 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td")(58, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr")(61, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Jonathan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lollipop@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Aug 30 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td")(68, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr")(71, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Jonathan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Lollipop@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Aug 30 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td")(78, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 9)(81, "li", 10)(82, "a", 11)(83, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 13)(86, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 14)(89, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 14)(92, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 14)(95, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 14)(98, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 14)(101, "a", 11)(102, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "chevron_right");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["nav[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.container-fluid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3R1dG9yaWFscy90dXRvcmlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBSUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUZKO0FBSkk7RUFDSSxhQUFBO0FBTVI7QUFBSTtFQUNJLGdCQUFBO0FBRVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbm5hdntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG4uY29udGFpbmVyLWZsdWlke1xuICAgIC5jYXJke1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZCwgdGgge1xuICAgICAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9590:
/*!****************************************************!*\
  !*** ./src/app/dashboard/users/users.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class UsersComponent {}
UsersComponent.ɵfac = function UsersComponent_Factory(t) {
  return new (t || UsersComponent)();
};
UsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UsersComponent,
  selectors: [["app-users"]],
  decls: 104,
  vars: 0,
  consts: [[1, "breadcrumb-nav"], [1, "blue", "nav-wrapper"], [1, "col", "s12"], ["routerLink", "/dashboard", 1, "breadcrumb"], ["routerLink", "/users", 1, "breadcrumb"], [1, "container-fluid"], [1, "card"], [1, "green", "white-text", "badge"], [1, "red", "white-text", "badge"], [1, "pagination", "display-flex", "justify-content-center"], [1, "disabled"], ["href", "#!"], [1, "material-icons"], [1, "active", "blue"], [1, "waves-effect"]],
  template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Display Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Created at");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody")(20, "tr")(21, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Alvin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Eclair@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Apr 10 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td")(28, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr")(31, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Alan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Jellybean@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Jun 1 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td")(38, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "BLOCK");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr")(41, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Jonathan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lollipop@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Aug 30 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td")(48, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr")(51, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Alvin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Eclair@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Apr 10 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td")(58, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr")(61, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Jonathan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lollipop@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Aug 30 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td")(68, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr")(71, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Jonathan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Lollipop@apk.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Aug 30 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td")(78, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "ACTIVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 9)(81, "li", 10)(82, "a", 11)(83, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 13)(86, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 14)(89, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 14)(92, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 14)(95, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 14)(98, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 14)(101, "a", 11)(102, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "chevron_right");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["nav[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.container-fluid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUlJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUpJO0VBQ0ksYUFBQTtBQU1SO0FBQUk7RUFDSSxnQkFBQTtBQUVSIiwic291cmNlc0NvbnRlbnQiOlsiXG5uYXZ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICAuY2FyZHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGQsIHRoIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDVweDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8339:
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GameComponent {}
GameComponent.ɵfac = function GameComponent_Factory(t) {
  return new (t || GameComponent)();
};
GameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GameComponent,
  selectors: [["app-game"]],
  decls: 2,
  vars: 0,
  template: function GameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "game works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 31,
  vars: 0,
  consts: [[1, "title"], [1, "row"], [1, "card", "gradient-shadow", "green-teal", "border-radius-3", "animate", "fadeUp"], [1, "card-content", "center"], ["src", "assets/images/shapes.png", "alt", "image", 1, "width-40", "border-round", "z-depth-5", "responsive-img"], [1, "white-text", "lighten-4"], ["routerLink", "game", 1, "white", "green-text", "waves-effect", "waves-light", "btn-small"], [1, "card", "gradient-shadow", "blue-cyan", "border-radius-3", "animate", "fadeUp"], ["src", "assets/images/blog.png", "alt", "image", 1, "width-40", "z-depth-5", "responsive-img", "square"], ["routerLink", "tutorials", 1, "white", "blue-text", "waves-effect", "waves-light", "btn-small"], [1, "card", "gradient-shadow", "amber-amber", "border-radius-3", "animate", "fadeUp"], ["src", "assets/images/laptop.png", "alt", "image", 1, "width-40", "border-round", "z-depth-5", "responsive-img"], [1, "white", "amber-text", "waves-effect", "waves-light", "btn-small"], [1, "card", "gradient-shadow", "indigo-purple", "border-radius-3", "animate", "fadeUp"], ["src", "assets/images/idea.png", "alt", "image", 1, "width-40", "border-round", "z-depth-5", "responsive-img"], [1, "white", "purple-text", "waves-effect", "waves-light", "btn-small"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Explore the World of Web Development with Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wanna Play a Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Play");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Step By Step Beginner Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Check Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Web Challenges");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Try Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13)(25, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wanna a talk about a Project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  color: #333;\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-content: space-around;\n}\n.row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 360px;\n  margin: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .border-round[_ngcontent-%COMP%] {\n  border-radius: 150px !important;\n}\n.row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n  border-radius: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRUo7QUFESTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0QsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBR1A7QUFGTztFQUNDLCtCQUFBO0FBSVI7QUFGTztFQUNDLDhCQUFBO0FBSVIiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xufVxuLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAuY2FyZHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgICAgIG1hcmdpbjo0cHg7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgIC5ib3JkZXItcm91bmQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweCAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAuc3F1YXJle1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgfSAgXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7948:
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ 5067);
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tutorial/tutorial.component */ 9902);
/* harmony import */ var _tutorial_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tutorial/tutorial-details/tutorial-details.component */ 7895);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login/login.component */ 8146);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/register/register.component */ 7225);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.component */ 7528);
/* harmony import */ var _dashboard_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/editor/editor.component */ 6056);
/* harmony import */ var _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/users/users.component */ 9590);
/* harmony import */ var _dashboard_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dashboard/tutorials/tutorials.component */ 3354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'tutorials',
  component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_1__.TutorialComponent
}, {
  path: 'tutorials/:id',
  component: _tutorial_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_2__.TutorialDetailsComponent
}, {
  path: 'login',
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}, {
  path: 'register',
  component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent
}, {
  path: 'editor',
  component: _dashboard_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__.EditorComponent
}, {
  path: 'users',
  component: _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_7__.UsersComponent
}, {
  path: 'tutorial-list',
  component: _dashboard_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_8__.TutorialsComponent
}, {
  path: '**',
  redirectTo: ''
} // handle 404
];

class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 7895:
/*!*************************************************************************!*\
  !*** ./src/app/tutorial/tutorial-details/tutorial-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialDetailsComponent": () => (/* binding */ TutorialDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ 3115);




function TutorialDetailsComponent_li_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://ui-avatars.com/api/?name=", comment_r1.name, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r1.message, " ");
  }
}
class TutorialDetailsComponent {
  constructor() {
    this.htmlstring = "<h2>dndnd</h2><br>  <p style='color : red'>       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus quo velit placeat nam. Quas repellat sit est, asperiores perferendis, nulla maxime consequatur fugit odio unde et distinctio temporibus quibusdam, quasi qui mollitia fuga non sapiente sequi quidem. Vero qui commodi quod rerum. Accusantium quae ut qui sequi aut possimus, nulla laudantium animi nostrum sapiente voluptatem, quidem reiciendis totam hic sint, ipsam fugit quia delectus doloribus praesentium temporibus quaerat. Recusandae enim mollitia exercitationem error voluptas. Maxime, quasi eum quisquam nam totam, minima fugit placeat ratione impedit doloribus expedita suscipit obcaecati illum alias consequatur eaque non dolor amet autem nisi est!</p>";
    this.comments = [{
      name: 'Fernand',
      message: 'we wont use hime'
    }, {
      name: 'Raja ram',
      message: 'hello Bro om i will do '
    }];
    this.newComment = {
      name: '',
      message: ''
    };
  }
}
TutorialDetailsComponent.ɵfac = function TutorialDetailsComponent_Factory(t) {
  return new (t || TutorialDetailsComponent)();
};
TutorialDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TutorialDetailsComponent,
  selectors: [["app-tutorial-details"]],
  decls: 69,
  vars: 6,
  consts: [[1, "breadcrumb-nav"], [1, "blue", "nav-wrapper"], [1, "col", "s12"], ["routerLink", "", 1, "breadcrumb"], ["routerLink", "tutorials", 1, "breadcrumb"], [1, "tutorial-container"], [1, "contents", "collection", "with-header"], [1, "collection-header"], [1, "collection-item"], [1, "card", "tutorial"], [1, "title"], [1, "content"], ["href", "/tutorials/2", 1, "title"], [1, "material-icons"], ["theme", "snow", 3, "content"], [1, "comments-container"], [1, "collection"], ["class", "comment collection-item avatar", 4, "ngFor", "ngForOf"], [1, "comment-form"], ["type", "text", "name", "Enter Your Comment"], [1, "waves-effect", "white", "waves-light", "btn"], [1, "material-icons", "blue-text"], [1, "comment", "collection-item", "avatar"], [1, "left"], ["alt", "", 1, "circle", 3, "src"], [1, "info"]],
  template: function TutorialDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "ul", 6)(11, "li", 7)(12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contents");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Useful FFmpeg Techniques");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Convert a File to a Different Format");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Extract Audio from a Video File");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Create a High-Quality Animated Gif");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add Subtitles to a Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Using FFmpeg in Firebase Cloud Functions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9)(27, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11)(30, "a", 12)(31, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Useful FFmpeg Techniques");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "quill-view-html", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11)(36, "a", 12)(37, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Useful FFmpeg Techniques");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "quill-view-html", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11)(42, "a", 12)(43, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Useful FFmpeg Techniques");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "quill-view-html", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11)(48, "a", 12)(49, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Useful FFmpeg Techniques");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "quill-view-html", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11)(54, "a", 12)(55, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Useful FFmpeg Techniques");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "quill-view-html", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15)(60, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, TutorialDetailsComponent_li_63_Template, 8, 3, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 20)(67, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "send");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.htmlstring);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.htmlstring);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.htmlstring);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.htmlstring);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.htmlstring);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_quill__WEBPACK_IMPORTED_MODULE_3__.QuillViewHTMLComponent],
  styles: ["nav[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n}\n\n.tutorial-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.tutorial-container[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100%;\n  margin: 4px;\n}\n.tutorial-container[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .collection[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tutorial-container[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .collection[_ngcontent-%COMP%]   .collection-item[_ngcontent-%COMP%]:hover {\n  color: blueviolet;\n}\n.tutorial-container[_ngcontent-%COMP%]   .tutorial[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.tutorial-container[_ngcontent-%COMP%]   .tutorial[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  display: flex;\n  align-items: center;\n}\n.tutorial-container[_ngcontent-%COMP%]   .tutorial[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n.tutorial-container[_ngcontent-%COMP%]   .tutorial[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.tutorial-container[_ngcontent-%COMP%]   .tutorial[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.comments-container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.comments-container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n.comments-container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gray;\n}\n.comments-container[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.comments-container[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  border-bottom: 0;\n  border-radius: 5px;\n  background-color: #eceff1;\n  margin: 4px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwtZGV0YWlscy90dXRvcmlhbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQVI7QUFFUTtFQUNJLFdBQUE7QUFBWjtBQUVZO0VBQ0ksaUJBQUE7QUFBaEI7QUFLSTtFQUNJLFVBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQUtRO0VBT0ksV0FBQTtBQVRaO0FBR1k7RUFDSSxpQkFBQTtBQURoQjtBQUdZO0VBQ0ksZUFBQTtBQURoQjs7QUFTQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTko7QUFRUTtFQUNHLGlCQUFBO0FBTlg7QUFRUTtFQUNJLFdBQUE7QUFOWjtBQVVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFSSjtBQVNJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBUFIiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnR1dG9yaWFsLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuY29udGVudHMge1xuICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG5cbiAgICAgICAgLmNvbGxlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVldmlvbGV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnR1dG9yaWFsIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpe1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29tbWVudHMtY29udGFpbmVyIHtcbi5jb21tZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmluZm97XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG4gICAgfVxufVxuLmNvbW1lbnQtZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW5wdXR7XG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjE7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgXG59XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9902:
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialComponent": () => (/* binding */ TutorialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class TutorialComponent {}
TutorialComponent.ɵfac = function TutorialComponent_Factory(t) {
  return new (t || TutorialComponent)();
};
TutorialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TutorialComponent,
  selectors: [["app-tutorial"]],
  decls: 136,
  vars: 0,
  consts: [[1, "breadcrumb-nav"], [1, "blue", "nav-wrapper"], [1, "col", "s12"], ["routerLink", "", 1, "breadcrumb"], ["routerLink", "tutorials", 1, "breadcrumb"], [1, "cards", "display-flex"], [1, "card"], [1, "deep-purple-text", "text-darken-3", "mt-5"], ["routerLink", "/tutorials/2"], [1, "display-flex", "justify-content-between", "flex-wrap", "mt-4"], [1, "chip", "amber", "white-text"], [1, "chip", "red", "white-text"], [1, "chip", "green", "white-text"], [1, "chip"], [1, "pagination"], [1, "disabled"], ["href", "#!"], [1, "material-icons"], [1, "active"], [1, "waves-effect"]],
  template: function TutorialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "h6", 7)(10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "In the following lesson, we\u2019ll look at a collection of useful techniques for working with FFmpeg that you can use to build your own video editing utilities or apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Node.js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "AngularJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "MongoDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6)(22, "h6", 7)(23, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "In the following lesson, we\u2019ll look at a collection of useful techniques for working with FFmpeg that you can use to build your own video editing utilities or apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9)(28, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Node.js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "AngularJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "MongoDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6)(35, "h6", 7)(36, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "In the following lesson, we\u2019ll look at a collection of useful techniques for working with FFmpeg that you can use to build your own video editing utilities or apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9)(41, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Node.js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "AngularJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "MongoDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6)(48, "h6", 7)(49, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "In the following lesson, we\u2019ll look at a collection of useful techniques for working with FFmpeg that you can use to build your own video editing utilities or apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9)(54, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Node.js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "AngularJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "MongoDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6)(61, "h6", 7)(62, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "In the following lesson, we\u2019ll look at a collection of useful techniques for working with FFmpeg that you can use to build your own video editing utilities or apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9)(67, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Node.js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "AngularJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "MongoDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6)(74, "h6", 7)(75, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "In the following lesson, we\u2019ll look at a collection of useful techniques for working with FFmpeg that you can use to build your own video editing utilities or apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 9)(80, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Node.js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "AngularJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "MongoDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 6)(87, "h6", 7)(88, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "In the following lesson, we\u2019ll look at a collection of useful techniques for working with FFmpeg that you can use to build your own video editing utilities or apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9)(93, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Node.js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "AngularJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "MongoDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 6)(100, "h6", 7)(101, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Programmatic Video Editing with FFmpeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "In the following lesson, we\u2019ll look at a collection of useful techniques for working with FFmpeg that you can use to build your own video editing utilities or apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 9)(106, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Node.js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "AngularJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "MongoDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul", 14)(113, "li", 15)(114, "a", 16)(115, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 18)(118, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 19)(121, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 19)(124, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 19)(127, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 19)(130, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 19)(133, "a", 16)(134, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "chevron_right");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["nav[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n}\n\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 4px;\n  width: 280px;\n  padding: 24px;\n  border-radius: 10px;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background-color: aliceblue;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBSTtFQUNFLDJCQUFBO0FBRU47O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLmNhcmRze1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAuY2FyZHtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmNhcmQ6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgfVxufVxuLnBhZ2luYXRpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var ngx_highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlight-js */ 54);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, {
  providers: [{
    provide: ngx_highlight_js__WEBPACK_IMPORTED_MODULE_2__.HIGHLIGHTJS_CONFIG,
    useValue: {
      lang: 'html'
    }
  }]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map