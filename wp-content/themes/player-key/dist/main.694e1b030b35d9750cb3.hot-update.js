"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header.vue */ "./components/Header.vue");
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer.vue */ "./components/Footer.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "App",
  mounted() {
    this.$store.dispatch('check', localStorage.getItem('pki-auth')).then(data => {
      console.log(data);
    });
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eea73cc4e1c362b0ad4b")
/******/ })();
/******/ 
/******/ }
);