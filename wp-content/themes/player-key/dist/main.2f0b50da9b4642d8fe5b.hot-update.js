"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/LoginView.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/LoginView.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Heading.vue */ "./components/Heading.vue");
/* harmony import */ var _components_FormItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormItem.vue */ "./components/FormItem.vue");
/* harmony import */ var _data_formFields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/formFields.js */ "./views/data/formFields.js");



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
  mounted() {
    console.log();
  },
  methods: {
    isRequiredFieldsFiled() {
      return this.form.login !== '' && this.form.password !== '';
    },
    async formSubmit() {
      this.$store.dispatch('login', this.form).then(() => {
        console.log('formSubmit');
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_logo_player_key_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/logo-player-key.svg */ "./assets/images/logo-player-key.svg");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1a9bb128"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
  class: "header"
};
const _hoisted_2 = {
  class: "wrapper header__wrapper"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_logo_player_key_svg__WEBPACK_IMPORTED_MODULE_1__,
  alt: "Player Key ID",
  class: "header__logo"
}, null, -1 /* HOISTED */));
const _hoisted_4 = {
  key: 0,
  class: "header__actions"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink");
  const _component_MainNavigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MainNavigation");
  const _component_ButtonLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ButtonLink");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {
    to: {
      name: 'home'
    },
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__logo-holder`)
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_3]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MainNavigation), !$options.isUserLoggedIn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ButtonLink, {
    href: `/login`,
    "button-title": `Sign In`,
    "button-style": `black`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__cta`)
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ButtonLink, {
    href: `/register`,
    "button-title": `Sign Up`,
    "button-style": `white`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__cta`)
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9833e4cdff12faadc180")
/******/ })();
/******/ 
/******/ }
);