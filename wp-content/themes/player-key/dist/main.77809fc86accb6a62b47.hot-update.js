self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./App.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./App.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/vue-loader/dist/index.js):\nTypeError: Cannot read properties of null (reading 'content')\n    at selectBlock (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/vue-loader/dist/select.js:23:45)\n    at Object.loader (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/vue-loader/dist/index.js:90:41)");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./App.vue?vue&type=template&id=472cff63":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./App.vue?vue&type=template&id=472cff63 ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache) {
  const _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");
  const _component_RouterView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterView");
  const _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterView)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./api/authentication.js":
/*!*******************************!*\
  !*** ./api/authentication.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/lib/axios.js");

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1';
const registerUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users/register', data);
};
const loginUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users/login', data);
};
const checkUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users/check', data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerUser,
  loginUser,
  checkUser
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc72215346ece44215c1")
/******/ })();
/******/ 
/******/ }
);