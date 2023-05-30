"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/SignInView.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/SignInView.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Heading.vue */ "./components/Heading.vue");
/* harmony import */ var _components_FormItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormItem.vue */ "./components/FormItem.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LoginView",
  components: {
    Heading: _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormItem: _components_FormItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data() {
    return {
      form: {
        login: '',
        password: ''
      },
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
  methods: {
    isRequiredFieldsFiled() {
      return this.form.login !== '' && this.form.password !== '';
    },
    async formSubmit() {
      this.$store.dispatch('login', this.form).then(data => {
        this.$router.push({
          name: 'home'
        });
      });
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ee8c68c25710fd1e6ce")
/******/ })();
/******/ 
/******/ }
);