"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./App.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./App.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "../node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header.vue */ "./components/Header.vue");
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer.vue */ "./components/Footer.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'App',
  setup(__props, _ref) {
    let {
      expose: __expose
    } = _ref;
    __expose();
    console.log(this.$store.state);
    const __returned__ = {
      get RouterLink() {
        return vue_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink;
      },
      get RouterView() {
        return vue_router__WEBPACK_IMPORTED_MODULE_2__.RouterView;
      },
      Header: _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("20c0c877e2231ec222f5")
/******/ })();
/******/ 
/******/ }
);