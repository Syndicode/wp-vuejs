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
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vuelidate/validators */ "../node_modules/@vuelidate/validators/dist/index.mjs");
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vuelidate/core */ "../node_modules/@vuelidate/core/dist/index.mjs");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegisterRoleView",
  components: {
    FormItem: _components_FormItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Heading: _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    const formData = {};
    _data_formFields_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.$route.params.role].forEach(section => {
      section.fields.forEach(field => {
        formData[field.model] = '';
      });
    });
    console.log(formData);
    return {
      form: formData,
      formFields: _data_formFields_js__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  setup() {
    return {
      v$: (0,_vuelidate_core__WEBPACK_IMPORTED_MODULE_3__.useVuelidate)()
    };
  },
  validations() {
    return {
      form: {
        firstName: {
          required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_4__.required,
          maxLength: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(2)
        },
        lastName: {
          required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_4__.required
        }
      }
    };
  },
  methods: {
    formSubmit() {
      console.log('Submit');
      console.log('val - ', this.v$.form.firstName.$errors);
      console.log('val - ', this.v$.$errors);
    }
  },
  mounted() {
    console.log(this.v$.form.firstName.$error);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("32de6388316b13eb953a")
/******/ })();
/******/ 
/******/ }
);