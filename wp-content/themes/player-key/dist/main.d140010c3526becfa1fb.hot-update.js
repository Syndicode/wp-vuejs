"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

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

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null
};
const mutations = {
  registerStart(state) {
    state.validationErrors = null;
  },
  registerSuccess(state, payload) {
    state.isLoggedIn = true;
    state.currentUser = payload;
  },
  registerFailure(state, payload) {
    state.validationErrors = payload;
  }
};
const actions = {
  register(context, userData) {
    return new Promise(resolve => {
      context.commit('registerStart');
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerUser(userData).then(response => {
        console.log(response.data, response);
        // context.commit('registerSuccess', response.data.user)
        // resolve(response.data.user)
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
/******/ 	__webpack_require__.h = () => ("0de5e39f388f551898e6")
/******/ })();
/******/ 
/******/ }
);