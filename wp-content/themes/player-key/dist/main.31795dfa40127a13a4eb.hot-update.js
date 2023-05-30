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
  },
  mounted() {
    console.log(window.wp);
    _api_authentication_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkUser().then(response => {
      console.log('check --', response);
    });
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5b293211426917c12d7")
/******/ })();
/******/ 
/******/ }
);