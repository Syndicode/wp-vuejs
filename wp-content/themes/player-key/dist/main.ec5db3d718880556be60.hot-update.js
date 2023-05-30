"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/RegisterRoleView.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/RegisterRoleView.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Heading.vue */ "./components/Heading.vue");
/* harmony import */ var _components_FormItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormItem.vue */ "./components/FormItem.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegisterRoleView",
  components: {
    FormItem: _components_FormItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Heading: _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    let formFields = null;
    switch (this.$route.params.role) {
      case 'coach':
        formFields = [{
          type: 'text',
          label: 'First name',
          name: 'first-name',
          required: true,
          model: 'firstName'
        }, {
          type: 'text',
          label: 'Last name',
          name: 'last-name',
          required: true,
          model: 'lastName'
        }, {
          type: 'date',
          label: 'Birthday',
          name: 'birthday',
          required: true,
          model: 'birthday'
        }];
        break;
    }
    const formData = {};
    formFields.forEach(field => {
      formData[field.model] = '';
    });
    return {
      form: formData,
      formFields: formFields
    };
  },
  methods: {
    formSubmit() {
      console.log('Submit');
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d0615185134783184509")
/******/ })();
/******/ 
/******/ }
);