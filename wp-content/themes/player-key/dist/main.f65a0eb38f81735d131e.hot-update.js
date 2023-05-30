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
  props: {
    inputType: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isRequired: {
      type: Boolean,
      required: true,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegisterRoleView",
  components: {
    FormItem: _components_FormItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Heading: _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=template&id=7daf6ed2":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=template&id=7daf6ed2 ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "form__item"
};
const _hoisted_2 = {
  class: "form__item-label"
};
const _hoisted_3 = ["type", "value", "placeholder", "required"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $props.inputType,
    value: $props.value,
    placeholder: $props.placeholder,
    required: $props.isRequired,
    class: "form__text-field"
  }, null, 8 /* PROPS */, _hoisted_3)]);
}

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./views/RegisterRoleView.vue?vue&type=template&id=6a4a492d&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./views/RegisterRoleView.vue?vue&type=template&id=6a4a492d&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6a4a492d"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
  class: "wrapper wrapper--form"
};
const _hoisted_2 = {
  class: "form-holder"
};
const _hoisted_3 = {
  class: "form-holder__heading-role"
};
const _hoisted_4 = {
  class: "form"
};
const _hoisted_5 = {
  key: 0,
  class: "form__holder"
};
const _hoisted_6 = {
  class: "form__fieldset"
};
const _hoisted_7 = {
  class: "form__row"
};
const _hoisted_8 = {
  key: 1,
  class: "form__holder"
};
const _hoisted_9 = {
  key: 2,
  class: "form__holder"
};
const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  class: "form"
}, null, -1 /* HOISTED */));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Heading");
  const _component_FormItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormItem");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    level: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`form-holder__heading`)
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(`Sign Up as `) + " "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$route.params.role), 1 /* TEXT */)]),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_4, [_ctx.$route.params.role === 'coach' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    level: 3,
    align: `left`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`form__fieldset-title`)
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("1. Basic information")]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormItem, {
    "is-required": "",
    label: `First name`,
    "input-type": `text`
  })])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$route.params.role === 'parent' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$route.params.role), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$route.params.role === 'admin' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$route.params.rrole), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_10]);
}

/***/ }),

/***/ "./components/FormItem.vue":
/*!*********************************!*\
  !*** ./components/FormItem.vue ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormItem_vue_vue_type_template_id_7daf6ed2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormItem.vue?vue&type=template&id=7daf6ed2 */ "./components/FormItem.vue?vue&type=template&id=7daf6ed2");
/* harmony import */ var _FormItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormItem.vue?vue&type=script&lang=js */ "./components/FormItem.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FormItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormItem_vue_vue_type_template_id_7daf6ed2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"components/FormItem.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "7daf6ed2"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('7daf6ed2', __exports__)) {
    api.reload('7daf6ed2', __exports__)
  }
  
  module.hot.accept(/*! ./FormItem.vue?vue&type=template&id=7daf6ed2 */ "./components/FormItem.vue?vue&type=template&id=7daf6ed2", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _FormItem_vue_vue_type_template_id_7daf6ed2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormItem.vue?vue&type=template&id=7daf6ed2 */ "./components/FormItem.vue?vue&type=template&id=7daf6ed2");
(() => {
    api.rerender('7daf6ed2', _FormItem_vue_vue_type_template_id_7daf6ed2__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./components/FormItem.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./components/FormItem.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_FormItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_FormItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/index.js??vue!./FormItem.vue?vue&type=script&lang=js */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/FormItem.vue?vue&type=template&id=7daf6ed2":
/*!***************************************************************!*\
  !*** ./components/FormItem.vue?vue&type=template&id=7daf6ed2 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_FormItem_vue_vue_type_template_id_7daf6ed2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_FormItem_vue_vue_type_template_id_7daf6ed2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??vue!./FormItem.vue?vue&type=template&id=7daf6ed2 */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=template&id=7daf6ed2");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("12e0ed9e054ef12f62e3")
/******/ })();
/******/ 
/******/ }
);