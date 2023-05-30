"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Board.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Board.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue */ "./components/Heading.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Profile",
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
/* harmony import */ var _components_Board_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Board.vue */ "./components/Board.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Board: _components_Board_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
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
  watch: {
    isLoaded() {
      if (!this.entities[this.currentRole].includes(this.$route.params.entity)) {
        this.$router.push({
          name: 'board'
        });
      }
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

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Board.vue?vue&type=template&id=b4fa90ca":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Board.vue?vue&type=template&id=b4fa90ca ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "wrapper"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Heading");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    level: 1
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Board")]),
    _: 1 /* STABLE */
  })]);
}

/***/ }),

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
    entities: $data.entities[$options.currentRole]
  }, null, 8 /* PROPS */, ["entities"]), $data.entities[$options.currentRole].includes(this.$route.params.entity) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [this.$route.params.entity === 'teams' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Teams, {
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
  }, null, 8 /* PROPS */, ["user-id"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Board, {
    key: 1
  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./components/Board.vue":
/*!******************************!*\
  !*** ./components/Board.vue ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Board_vue_vue_type_template_id_b4fa90ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=b4fa90ca */ "./components/Board.vue?vue&type=template&id=b4fa90ca");
/* harmony import */ var _Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.vue?vue&type=script&lang=js */ "./components/Board.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Board_vue_vue_type_template_id_b4fa90ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"components/Board.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "b4fa90ca"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('b4fa90ca', __exports__)) {
    api.reload('b4fa90ca', __exports__)
  }
  
  module.hot.accept(/*! ./Board.vue?vue&type=template&id=b4fa90ca */ "./components/Board.vue?vue&type=template&id=b4fa90ca", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Board_vue_vue_type_template_id_b4fa90ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=b4fa90ca */ "./components/Board.vue?vue&type=template&id=b4fa90ca");
(() => {
    api.rerender('b4fa90ca', _Board_vue_vue_type_template_id_b4fa90ca__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./components/Board.vue?vue&type=script&lang=js":
/*!******************************************************!*\
  !*** ./components/Board.vue?vue&type=script&lang=js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/index.js??vue!./Board.vue?vue&type=script&lang=js */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Board.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/Board.vue?vue&type=template&id=b4fa90ca":
/*!************************************************************!*\
  !*** ./components/Board.vue?vue&type=template&id=b4fa90ca ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Board_vue_vue_type_template_id_b4fa90ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Board_vue_vue_type_template_id_b4fa90ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??vue!./Board.vue?vue&type=template&id=b4fa90ca */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Board.vue?vue&type=template&id=b4fa90ca");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("214c9206f68c6003d1f6")
/******/ })();
/******/ 
/******/ }
);