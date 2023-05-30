"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ButtonLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonLink.vue */ "./components/ButtonLink.vue");
/* harmony import */ var _MainNavigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation.vue */ "./components/MainNavigation.vue");
/* harmony import */ var _api_authentication_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/authentication.js */ "./api/authentication.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    MainNavigation: _MainNavigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ButtonLink: _ButtonLink_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.authentication.isUserLoggedIn;
    }
  }
});

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

const state = {
  isSubmitting: false,
  validationErrors: [],
  isUserLoggedIn: false,
  currentUser: null
};
const mutations = {
  loginSuccess(state, payload) {
    state.isUserLoggedIn = true;
    state.currentUser = payload.user;
    console.log(payload.token);
    localStorage.setItem('pki-auth', payload.token);
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
        console.log(response.data.data);
        context.commit('loginSuccess', response.data.data);
        resolve(response.data.data);
      });
    });
  },
  check(context) {
    return new Promise(resolve => {
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkUser().then(response => {
        console.log(response.data.data);
        context.commit('loginSuccess', response.data.data);
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
/******/ 	__webpack_require__.h = () => ("77809fc86accb6a62b47")
/******/ })();
/******/ 
/******/ }
);