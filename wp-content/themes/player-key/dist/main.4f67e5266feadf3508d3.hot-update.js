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
  methods: {
    isRequiredFieldsFiled() {
      return this.form.login !== '' && this.form.password !== '';
    }
  }
});

/***/ }),

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

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./views/LoginView.vue?vue&type=template&id=0a85f78f":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./views/LoginView.vue?vue&type=template&id=0a85f78f ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "wrapper wrapper--form"
};
const _hoisted_2 = {
  class: "form__fieldset"
};
const _hoisted_3 = {
  class: "form__actions"
};
const _hoisted_4 = ["disabled"];
const _hoisted_5 = {
  key: 0,
  class: "form__actions-note"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("sup", null, "(*)", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Heading");
  const _component_FormItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormItem");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    level: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`form-holder__heading`)
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Login")]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    class: "form",
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.formSubmit && _ctx.formSubmit(...arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormItem, {
    name: `login`,
    label: `Login`,
    "input-type": `text`,
    modelValue: $data.form.login,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.form.login = $event)
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormItem, {
    name: `password`,
    label: `Password`,
    "input-type": `password`,
    modelValue: $data.form.password,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.form.password = $event)
  }, null, 8 /* PROPS */, ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    class: "button button--lime",
    disabled: !$data.isFormValid || _ctx.isSubmitting
  }, "Submit", 8 /* PROPS */, _hoisted_4), !$data.isFormValid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please fill in all required "), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" fields")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32 /* HYDRATE_EVENTS */)]);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("734e1989e0f11d69f1c0")
/******/ })();
/******/ 
/******/ }
);