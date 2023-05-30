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
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "../node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/HomeView.vue */ "./views/HomeView.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/SignUpViewView.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _views_SignUpRoleView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/SignUpRoleView.vue */ "./views/SignUpRoleView.vue");
/* harmony import */ var _views_SignInView_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/SignInView.vue */ "./views/SignInView.vue");





const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createWebHistory)(),
  routes: [{
    path: '/',
    name: 'home',
    component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }, {
    path: '/sign-up',
    name: 'sign-up',
    component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/SignUpViewView.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    path: '/register/:role',
    component: _views_SignUpRoleView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '/sign-in',
    name: 'sign-in',
    component: _views_SignInView_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("87aa23f19835f9628ced")
/******/ })();
/******/ 
/******/ }
);