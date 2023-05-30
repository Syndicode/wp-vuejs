"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/main.css */ "./assets/styles/main.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./App.vue");
/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/index.js */ "./router/index.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/index.js */ "./store/index.js");





const app = (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
console.log(_store_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use(_router_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], _store_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.mount('#app');

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "../node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _modules_authentication_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/authentication.js */ "./store/modules/authentication.js");




// Vue.use(Vuex)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authentication: _modules_authentication_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("db5f926f20ef103950b3")
/******/ })();
/******/ 
/******/ }
);