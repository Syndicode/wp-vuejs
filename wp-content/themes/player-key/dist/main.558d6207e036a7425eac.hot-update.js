"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "./api/authentication.js":
/*!*******************************!*\
  !*** ./api/authentication.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/lib/axios.js");

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1';
const registerUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users', data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerUser
});

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



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_2__["default"].Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authentication: _modules_authentication_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./store/modules/authentication.js":
/*!*****************************************!*\
  !*** ./store/modules/authentication.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/authentication.js */ "./api/authentication.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/helpers/persistanceStorage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const state = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  validationErrors: null
};
const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false;
    state.isLoggedIn = true;
    state.currentUser = payload;
  },
  registerFailure(state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  }
};
const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      context.commit('registerStart');
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerUser(credentials).then(response => {
        context.commit('registerSuccess', response.data.user);
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/helpers/persistanceStorage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('accessToken', response.data.user.token);
        resolve(response.data.user);
      }).catch(result => {
        context.commit('registerFailure', result.response.data.errors);
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  actions,
  mutations
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b88baf0d314c5caa9ad8")
/******/ })();
/******/ 
/******/ }
);