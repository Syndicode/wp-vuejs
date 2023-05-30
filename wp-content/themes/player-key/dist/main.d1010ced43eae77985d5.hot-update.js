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
  validationErrors: [],
  isUserLoggedIn: false,
  currentUser: null,
  token: null,
  currentRole: null
};
const mutations = {
  loginSuccess(state, payload) {
    state.isUserLoggedIn = true;
    state.currentUser = payload.user;
    state.token = payload.token;
    state.currentRole = payload.user.roles[0];
    localStorage.setItem('pki-auth', payload.token);
  },
  checkSuccess(state, payload) {
    state.isUserLoggedIn = true;
    state.currentUser = payload;
    state.currentRole = payload.roles[0];
    state.token = localStorage.getItem('pki-auth');
  },
  checkFailure(state, payload) {
    state.isUserLoggedIn = false;
    state.currentUser = null;
    state.token = null;
  },
  logoutSuccess(state) {
    state.isUserLoggedIn = false;
    state.currentUser = null;
    localStorage.removeItem('pki-auth');
  },
  clearValidationErrors(state) {
    state.validationErrors = [];
  },
  registerStart(state) {
    state.validationErrors = [];
    state.isSubmitting = true;
  },
  registerSuccess(state, payload) {
    // state.isLoggedIn = true;
    // state.currentUser = payload;
    state.validationErrors = [];
    state.isSubmitting = false;
  },
  registerFailure(state, payload) {
    state.validationErrors.push(payload);
    state.isSubmitting = false;
  }
};
const actions = {
  register(context, userData) {
    return new Promise(resolve => {
      context.commit('registerStart');
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerUser(userData).then(response => {
        if (response.data.success) {
          context.commit('registerSuccess', response.data);
          resolve(response.data);
        } else {
          context.commit('registerFailure', response.data.data);
        }
      }).catch(result => {
        context.commit('registerFailure', result.response.data.data);
      });
    });
  },
  login(context, userData) {
    return new Promise(resolve => {
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].loginUser(userData).then(response => {
        context.commit('loginSuccess', response.data.data);
        resolve(response.data.data);
      });
    });
  },
  check(context, token) {
    return new Promise(resolve => {
      if (token) {
        _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkUser(token).then(response => {
          if (response.data.success) {
            context.commit('checkSuccess', response.data.data);
            resolve(response.data.data);
          } else {
            context.commit('checkFailure');
          }
        });
      } else {
        context.commit('checkFailure');
      }
    });
  },
  logout(context, token) {
    return new Promise(resolve => {
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].logoutUser(token).then(response => {
        context.commit('logoutSuccess', response.data.data);
        resolve(response.data.data);
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
/******/ 	__webpack_require__.h = () => ("d6d99d526b9db0dcfc09")
/******/ })();
/******/ 
/******/ }
);