"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "../node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/HomeView.vue */ "./views/HomeView.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/RegisterView.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/RegisterRoleView.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/LoginView.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createWebHistory)(),
  routes: [{
    path: '/',
    name: 'home',
    component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }, {
    path: '/sign-up',
    name: 'register',
    component: SignUpView
  }, {
    path: '/register/:role',
    component: SignUpRoleView
  }, {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInView
  }]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("86c93b844e724ae45019")
/******/ })();
/******/ 
/******/ }
);