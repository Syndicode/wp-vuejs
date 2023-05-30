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

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
const registerUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users/register', data);
};
const loginUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users/login', data);
};
const checkUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users/check', data);
};
const logoutUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users/logout', data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerUser,
  loginUser,
  checkUser,
  logoutUser
});

/***/ }),

/***/ "./api/entities.js":
/*!*************************!*\
  !*** ./api/entities.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/lib/axios.js");

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
const getEntitles = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/entities/${data.entityType}`, data);
};
const createEntity = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/entities/create-${data.entityType}`, data);
};
const removeEntity = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/entities/remove-${data.entityType}`, data);
};
const editEntity = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/entities/edit-${data.entityType}`, data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getEntitles,
  createEntity,
  removeEntity,
  editEntity
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bf454e9b7a205434855c")
/******/ })();
/******/ 
/******/ }
);