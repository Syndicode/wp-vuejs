"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Coaches.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Coaches.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue */ "./components/Heading.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Coaches",
  components: {
    Heading: _Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/BoardView.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/BoardView.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_BoardNavgation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BoardNavgation.vue */ "./components/BoardNavgation.vue");
/* harmony import */ var _components_Teams_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Teams.vue */ "./components/Teams.vue");
/* harmony import */ var _components_Players_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Players.vue */ "./components/Players.vue");
/* harmony import */ var _components_Parents_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Parents.vue */ "./components/Parents.vue");
/* harmony import */ var _components_Coaches_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Coaches.vue */ "./components/Coaches.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Teams: _components_Teams_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BoardNavigation: _components_BoardNavgation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Players: _components_Players_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Parents: _components_Parents_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Coaches: _components_Coaches_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    isLoaded() {
      return this.$store.state.authentication.isUserLoggedIn;
    },
    currentRole() {
      return this.$store.state.authentication.currentRole;
    }
  },
  data() {
    return {
      entities: {
        coach: ['teams', 'parents', 'players'],
        admin: ['coaches', 'teams', 'parents', 'players'],
        parent: ['players']
      }
    };
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Coaches.vue?vue&type=template&id=00e0f186":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Coaches.vue?vue&type=template&id=00e0f186 ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "wrapper"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  class: "entities-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  class: "entities-list__item"
})], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Heading");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    level: 1
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Coaches")]),
    _: 1 /* STABLE */
  }), _hoisted_2]);
}

/***/ }),

/***/ "./components/Coaches.vue":
/*!********************************!*\
  !*** ./components/Coaches.vue ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Coaches_vue_vue_type_template_id_00e0f186__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coaches.vue?vue&type=template&id=00e0f186 */ "./components/Coaches.vue?vue&type=template&id=00e0f186");
/* harmony import */ var _Coaches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coaches.vue?vue&type=script&lang=js */ "./components/Coaches.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Coaches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Coaches_vue_vue_type_template_id_00e0f186__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"components/Coaches.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "00e0f186"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('00e0f186', __exports__)) {
    api.reload('00e0f186', __exports__)
  }
  
  module.hot.accept(/*! ./Coaches.vue?vue&type=template&id=00e0f186 */ "./components/Coaches.vue?vue&type=template&id=00e0f186", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Coaches_vue_vue_type_template_id_00e0f186__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coaches.vue?vue&type=template&id=00e0f186 */ "./components/Coaches.vue?vue&type=template&id=00e0f186");
(() => {
    api.rerender('00e0f186', _Coaches_vue_vue_type_template_id_00e0f186__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./components/Coaches.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./components/Coaches.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_Coaches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_Coaches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/index.js??vue!./Coaches.vue?vue&type=script&lang=js */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Coaches.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/Coaches.vue?vue&type=template&id=00e0f186":
/*!**************************************************************!*\
  !*** ./components/Coaches.vue?vue&type=template&id=00e0f186 ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Coaches_vue_vue_type_template_id_00e0f186__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Coaches_vue_vue_type_template_id_00e0f186__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??vue!./Coaches.vue?vue&type=template&id=00e0f186 */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Coaches.vue?vue&type=template&id=00e0f186");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b19fb565a35b379727dc")
/******/ })();
/******/ 
/******/ }
);