"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Teams: _components_Teams_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BoardNavigation: _components_BoardNavgation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Players: _components_Players_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
      },
      views: {
        // teams: <Teams/>
      }
    };
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Players.vue?vue&type=template&id=17267127":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Players.vue?vue&type=template&id=17267127 ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache) {
  return null;
}

/***/ }),

/***/ "./components/Players.vue":
/*!********************************!*\
  !*** ./components/Players.vue ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Players_vue_vue_type_template_id_17267127__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players.vue?vue&type=template&id=17267127 */ "./components/Players.vue?vue&type=template&id=17267127");
/* harmony import */ var _Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "../node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Players_vue_vue_type_template_id_17267127__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"components/Players.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "17267127"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('17267127', __exports__)) {
    api.reload('17267127', __exports__)
  }
  
  module.hot.accept(/*! ./Players.vue?vue&type=template&id=17267127 */ "./components/Players.vue?vue&type=template&id=17267127", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Players_vue_vue_type_template_id_17267127__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players.vue?vue&type=template&id=17267127 */ "./components/Players.vue?vue&type=template&id=17267127");
(() => {
    api.rerender('17267127', _Players_vue_vue_type_template_id_17267127__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./components/Players.vue?vue&type=template&id=17267127":
/*!**************************************************************!*\
  !*** ./components/Players.vue?vue&type=template&id=17267127 ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Players_vue_vue_type_template_id_17267127__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Players_vue_vue_type_template_id_17267127__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??vue!./Players.vue?vue&type=template&id=17267127 */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Players.vue?vue&type=template&id=17267127");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8300e42be34d1a6f13f8")
/******/ })();
/******/ 
/******/ }
);