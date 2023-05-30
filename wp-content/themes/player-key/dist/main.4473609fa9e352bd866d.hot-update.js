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
/* harmony import */ var _components_ErrorList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorList.vue */ "./components/ErrorList.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegisterRoleView",
  components: {
    ErrorList: _components_ErrorList_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
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
    formData.role = this.$route.params.role;
    formData.nonce = wp.nonce;
    return {
      form: formData,
      formFields: _data_formFields_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      isFormValid: false
    };
  },
  watch: {
    form: {
      handler() {
        this.isFormValid = this.isRequiredFieldsFiled();
      },
      deep: true
    }
  },
  computed: {
    errors() {
      return this.$store.state.authentication.validationErrors;
    },
    isSubmitting() {
      return this.$store.state.authentication.isSubmitting;
    }
  },
  mounted() {
    console.log('ww', this.$store.state.authentication.isUserLoggedIn);
    this.$store.commit('clearValidationErrors');
  },
  methods: {
    isRequiredFieldsFiled() {
      let isFiled = true;
      _data_formFields_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.$route.params.role].forEach(section => {
        section.fields.forEach(field => {
          if (field.isRequired && this.form[field.model] === '') {
            isFiled = false;
          }
        });
      });
      return isFiled;
    },
    isPasswordsMatch() {
      return this.form.password === this.form.passwordRepeat;
    },
    async formSubmit() {
      if (this.isPasswordsMatch()) {
        this.$store.dispatch('register', this.form).then(() => {
          this.$store.commit('registerSuccess');
          this.$router.push({
            name: 'login'
          });
        });
      } else {
        this.$store.commit('registerStart');
        this.$store.commit('registerFailure', 'Passwords must match');
      }
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d71ad802ee056cd463d3")
/******/ })();
/******/ 
/******/ }
);