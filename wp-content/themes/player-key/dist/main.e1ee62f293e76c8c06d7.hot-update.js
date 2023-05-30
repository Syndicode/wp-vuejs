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
/* harmony import */ var _views_RegisterView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/RegisterView.vue */ "./views/RegisterView.vue");



const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createWebHistory)(),
  routes: [{
    path: '/',
    name: 'home',
    component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }, {
    path: '/register',
    name: 'register',
    component: _views_RegisterView_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, {
    path: '/register/:role',
    component: RegisterRoleView.vue
  }]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("947058a44177edc3bd54")
/******/ })();
/******/ 
/******/ }
);