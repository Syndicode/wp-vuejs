self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/FormItem.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/vue-loader/dist/index.js):\nTypeError: Cannot read properties of null (reading 'content')\n    at selectBlock (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/vue-loader/dist/select.js:23:45)\n    at Object.loader (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/vue-loader/dist/index.js:90:41)");

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
  class: "form-item"
};
const _hoisted_2 = {
  class: "form-item__label"
};
const _hoisted_3 = {
  key: 0
};
const _hoisted_4 = ["type", "name", "value", "placeholder", "required"];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.label) + " ", 1 /* TEXT */), _ctx.isRequired ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("sup", _hoisted_3, "*")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: _ctx.inputType,
    name: _ctx.label.replace(' ', '-').toLowerCase(),
    value: _ctx.value,
    placeholder: _ctx.placeholder,
    required: _ctx.isRequired,
    onInput: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:value', $event.target.value)),
    class: "form-item__text-field"
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4)]);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c9fa8097f238a0b5286b")
/******/ })();
/******/ 
/******/ }
);