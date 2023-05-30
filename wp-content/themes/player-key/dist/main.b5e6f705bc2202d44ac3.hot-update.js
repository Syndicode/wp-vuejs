self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=style&index=0&id=7daf6ed2&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=style&index=0&id=7daf6ed2&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/vue-loader/dist/stylePostLoader.js):\nCssSyntaxError: /Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/src/components/FormItem.vue:9:24: Unknown word\n    at Input.error (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/postcss/lib/input.js:148:16)\n    at Parser.unknownWord (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/postcss/lib/parser.js:540:22)\n    at Parser.other (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/postcss/lib/parser.js:164:12)\n    at Parser.parse (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/postcss/lib/parser.js:72:16)\n    at parse (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/postcss/lib/parse.js:11:12)\n    at new LazyResult (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/postcss/lib/lazy-result.js:133:16)\n    at Processor.process (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/postcss/lib/processor.js:28:14)\n    at doCompileStyle (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@vue/compiler-sfc/dist/compiler-sfc.cjs.js:15503:36)\n    at compileStyle (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@vue/compiler-sfc/dist/compiler-sfc.cjs.js:15417:10)\n    at Object.StylePostLoader (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/vue-loader/dist/stylePostLoader.js:30:35)");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=template&id=7daf6ed2&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=template&id=7daf6ed2&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7daf6ed2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
  class: "form-item__label"
};
const _hoisted_2 = {
  key: 0
};
const _hoisted_3 = ["type", "name", "value", "placeholder", "required"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-item", $props.cssModifier ? `form-item--${$props.cssModifier} ` : ``])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label) + " ", 1 /* TEXT */), $props.isRequired ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("sup", _hoisted_2, "*")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $props.inputType,
    name: $props.label.replace(' ', '-').toLowerCase(),
    value: $props.modelValue,
    placeholder: $props.placeholder,
    required: $props.isRequired,
    onInput: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    class: "form-item__text-field"
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3)], 2 /* CLASS */);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("084fc96997811941e6e1")
/******/ })();
/******/ 
/******/ }
);