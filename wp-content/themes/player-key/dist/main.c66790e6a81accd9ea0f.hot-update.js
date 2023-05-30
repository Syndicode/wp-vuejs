"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "./views/data/formFields.js":
/*!**********************************!*\
  !*** ./views/data/formFields.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const coach = [{
  title: 'Basic information',
  fields: [{
    type: 'text',
    label: 'First name',
    name: 'first-name',
    isRequired: true,
    model: 'firstName'
  }, {
    type: 'text',
    label: 'Last name',
    name: 'last-name',
    isRequired: true,
    model: 'lastName'
  }, {
    type: 'date',
    label: 'Birthday',
    name: 'birthday',
    isRequired: true,
    model: 'birthday'
  }, {
    type: 'text',
    label: 'Address',
    name: 'address',
    isRequired: true,
    model: 'address',
    cssModifier: 'full'
  }, {
    type: 'text',
    label: 'Town',
    name: 'town',
    isRequired: true,
    model: 'town',
    cssModifier: 'full'
  }]
}, {
  title: 'Login information',
  fields: [{
    type: 'email',
    label: 'Email',
    name: 'email',
    isRequired: true,
    model: 'email'
  }, {
    type: 'password',
    label: 'Password',
    name: 'password',
    isRequired: true,
    model: 'password'
  }]
}];
const parent = [];
const admin = [{
  title: 'Login information',
  fields: [{
    type: 'email',
    label: 'Email',
    name: 'email',
    isRequired: true,
    model: 'email'
  }, {
    type: 'password',
    label: 'Password',
    name: 'password',
    isRequired: true,
    model: 'password'
  }]
}];
let formFields = {
  coach,
  parent,
  admin
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formFields);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18879a75e8e6b00285d9")
/******/ })();
/******/ 
/******/ }
);