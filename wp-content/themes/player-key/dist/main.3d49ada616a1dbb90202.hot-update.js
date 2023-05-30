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
/* harmony import */ var _data_formFields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/formFields.js */ "./views/data/formFields.js");
/* harmony import */ var _api_authentication_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/authentication.js */ "./api/authentication.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegisterRoleView",
  components: {
    FormItem: _components_FormItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Heading: _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    const formData = {};
    const hiddenFieldsData = {
      role: this.$route.params.role
    };
    _data_formFields_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.$route.params.role].forEach(section => {
      section.fields.forEach(field => {
        formData[field.model] = '';
      });
    });
    return {
      form: formData,
      formFields: _data_formFields_js__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  methods: {
    formSubmit() {
      console.log((0,_api_authentication_js__WEBPACK_IMPORTED_MODULE_3__.registerUser)(this.form));
    }
  }
});

/***/ }),

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
    label: 'Town/City',
    name: 'town',
    isRequired: true,
    model: 'town'
  }, {
    type: 'text',
    label: 'State',
    name: 'state',
    isRequired: true,
    model: 'state'
  }, {
    type: 'text',
    label: 'ZIP Code',
    name: 'zip-code',
    isRequired: true,
    model: 'zipCode'
  }]
}, {
  title: 'Login information',
  fields: [{
    type: 'email',
    label: 'Email',
    name: 'email',
    isRequired: true,
    model: 'email',
    cssModifier: 'full'
  }, {
    type: 'password',
    label: 'Password',
    name: 'password',
    isRequired: true,
    model: 'password'
  }, {
    type: 'password',
    label: 'Password repeat',
    name: 'password-repeat',
    isRequired: true,
    model: 'passwordRepeat'
  }]
}];
const parent = [{
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
  }]
}, {
  title: 'Login information',
  fields: [{
    type: 'email',
    label: 'Email',
    name: 'email',
    isRequired: true,
    model: 'email',
    cssModifier: 'full'
  }, {
    type: 'password',
    label: 'Password',
    name: 'password',
    isRequired: true,
    model: 'password'
  }, {
    type: 'password',
    label: 'Password repeat',
    name: 'password-repeat',
    isRequired: true,
    model: 'passwordRepeat'
  }]
}];
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
/******/ 	__webpack_require__.h = () => ("b6c0bbcb19bac81db635")
/******/ })();
/******/ 
/******/ }
);