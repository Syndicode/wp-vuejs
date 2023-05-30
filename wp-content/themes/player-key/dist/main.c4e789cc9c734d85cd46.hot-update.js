"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FormItem",
  emits: ['update:modelValue'],
  props: {
    inputType: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: ['text', 'email', 'password', 'date'].includes(undefined.props.inputType)
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String
    },
    cssModifier: {
      type: String
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("088250f4542e03ba5e8d")
/******/ })();
/******/ 
/******/ }
);