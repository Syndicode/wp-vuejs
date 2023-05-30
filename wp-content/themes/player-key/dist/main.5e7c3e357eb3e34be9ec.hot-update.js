"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

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
  key: 0,
  class: "form__holder"
};
const _hoisted_5 = {
  class: "form__fieldset"
};
const _hoisted_6 = {
  key: 1,
  class: "form__holder"
};
const _hoisted_7 = {
  key: 2,
  class: "form__holder"
};
const _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "form__actions"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  class: "button button--lime"
}, "Submit")], -1 /* HOISTED */));
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
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
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    class: "form",
    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.formSubmit && $options.formSubmit(...arguments);
    }, ["prevent"]))
  }, [_ctx.$route.params.role === 'coach' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    level: 3,
    align: `left`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`form__fieldset-title`)
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("1. Basic information ")]),
    _: 1 /* STABLE */
  }), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.formFields, formField => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormItem, {
      "is-required": formField.isRequired,
      label: formField.label,
      "input-type": formField.type,
      modelValue: $data.form[formField.model],
      "onUpdate:modelValue": $event => $data.form[formField.model] = $event
    }, null, 8 /* PROPS */, ["is-required", "label", "input-type", "modelValue", "onUpdate:modelValue"]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <div class=\"form__row\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            <FormItem :is-required=\"true\" :label=\"`First name`\" :input-type=\"`text`\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                      v-model=\"form.firstName\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            <FormItem :is-required=\"true\" :label=\"`Last name`\" :input-type=\"`text`\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                      v-model=\"form.lastName\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <div class=\"form__row\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            <FormItem :is-required=\"true\" :label=\"`Birthdate`\" :input-type=\"`text`\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <div class=\"form__row\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            <FormItem :is-required=\"true\" :label=\"`Town`\" :input-type=\"`text`\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <div class=\"form__row form__row&#45;&#45;full\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            <FormItem :is-required=\"true\" :label=\"`Address`\" :input-type=\"`text`\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        </div>")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$route.params.role === 'parent' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$route.params.role), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$route.params.role === 'admin' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$route.params.rrole), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_8], 32 /* HYDRATE_EVENTS */)]), _hoisted_9]);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4e25a6af04fe94605fa6")
/******/ })();
/******/ 
/******/ }
);