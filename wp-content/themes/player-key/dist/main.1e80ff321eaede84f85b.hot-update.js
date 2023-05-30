"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

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

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1';
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
  createEntity
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb79496cb263236b70b4")
/******/ })();
/******/ 
/******/ }
);