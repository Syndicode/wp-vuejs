"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./views/BoardView.vue?vue&type=template&id=07f42a0c":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./views/BoardView.vue?vue&type=template&id=07f42a0c ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0,
  class: "board"
};
const _hoisted_2 = {
  key: 0,
  class: "board__view"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BoardNavigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BoardNavigation");
  const _component_Teams = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Teams");
  const _component_Players = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Players");
  const _component_Parents = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Parents");
  const _component_Coaches = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Coaches");
  const _component_Board = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Board");
  return $options.isLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BoardNavigation, {
    entities: $data.entitiesScheme[$data.currentRole]
  }, null, 8 /* PROPS */, ["entities"]),  true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [this.$route.params.entity === 'teams' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Teams, {
    key: 0,
    "user-id": this.$store.state.authentication.currentUserId
  }, null, 8 /* PROPS */, ["user-id"])) : this.$route.params.entity === 'players' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Players, {
    key: 1,
    "user-id": this.$store.state.authentication.currentUserId
  }, null, 8 /* PROPS */, ["user-id"])) : this.$route.params.entity === 'parents' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Parents, {
    key: 2,
    "user-id": this.$store.state.authentication.currentUserId
  }, null, 8 /* PROPS */, ["user-id"])) : this.$route.params.entity === 'coaches' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Coaches, {
    key: 3,
    "user-id": this.$store.state.authentication.currentUserId
  }, null, 8 /* PROPS */, ["user-id"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e905a8818e0c60761ac6")
/******/ })();
/******/ 
/******/ }
);