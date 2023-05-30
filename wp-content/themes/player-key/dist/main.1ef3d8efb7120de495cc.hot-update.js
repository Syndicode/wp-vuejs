"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "./api/authentication.js":
/*!*******************************!*\
  !*** ./api/authentication.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": () => (/* binding */ registerUser)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/lib/axios.js");

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1';
const registerUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users', data);
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4cbb69d7e3ff0e02f34f")
/******/ })();
/******/ 
/******/ }
);