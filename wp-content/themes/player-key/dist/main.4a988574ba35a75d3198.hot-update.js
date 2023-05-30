"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Teams.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Teams.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue */ "./components/Heading.vue");
/* harmony import */ var _api_entities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/entities.js */ "./api/entities.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Heading: _Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      entities: null
    };
  },
  methods: {
    async fetchData() {
      await _api_entities_js__WEBPACK_IMPORTED_MODULE_1__["default"].getEntitles({
        entityType: 'teams',
        token: this.$store.state.authentication.token
      }).then(response => {
        if (response.data.success) {
          this.entities = response.data.data;
        }
      });
    }
  },
  mounted() {
    this.fetchData();
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
/* harmony import */ var _api_entities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/entities.js */ "./api/entities.js");







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
  // async beforeRouteUpdate(to, from) {
  //   this.currentEntity = to.params.entity;
  //   this.fetchData();
  // },
  data() {
    return {
      currentEntity: this.$route.params.entity,
      entities: null,
      entitiesScheme: {
        coach: ['teams', 'parents', 'players'],
        admin: ['coaches', 'teams', 'parents', 'players'],
        parent: ['players']
      }
    };
  },
  methods: {
    // async fetchData() {
    //   this.entities = await entitiesApi.getEntitles({
    //     entityType: this.currentEntity,
    //     token: this.$store.state.authentication.token,
    //   })
    //   console.log(this.entities);
    // },
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Teams.vue?vue&type=template&id=085c2b2a":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Teams.vue?vue&type=template&id=085c2b2a ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "entities"
};
const _hoisted_2 = {
  class: "wrapper entities__wrapper"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "entities__actions"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  class: "button button--lime"
}, "Create team")], -1 /* HOISTED */);
const _hoisted_4 = {
  key: 0,
  class: "entities__list"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  class: "entities-list__item entities-list__item--team"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "entities-list__number"
}, "#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "entities-list__title"
}, "Team title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "entities-list__players"
}, "Players")], -1 /* HOISTED */);
const _hoisted_6 = {
  class: "entities-list__item entities-list__item--team"
};
const _hoisted_7 = {
  class: "entities-list__number"
};
const _hoisted_8 = {
  class: "entities-list__title"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "entities-list__players"
}, "0", -1 /* HOISTED */);
const _hoisted_10 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Heading");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    level: 1
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Teams")]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, $data.entities ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_4, [_hoisted_5, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.entities, (entity, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1) + ".", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(entity.post_title), 1 /* TEXT */), _hoisted_9]);
  }), 256 /* UNKEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_10, "You haven't created any teams yet"))])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./components/Teams.vue":
/*!******************************!*\
  !*** ./components/Teams.vue ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Teams_vue_vue_type_template_id_085c2b2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Teams.vue?vue&type=template&id=085c2b2a */ "./components/Teams.vue?vue&type=template&id=085c2b2a");
/* harmony import */ var _Teams_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Teams.vue?vue&type=script&lang=js */ "./components/Teams.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Teams_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Teams_vue_vue_type_template_id_085c2b2a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"components/Teams.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "085c2b2a"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('085c2b2a', __exports__)) {
    api.reload('085c2b2a', __exports__)
  }
  
  module.hot.accept(/*! ./Teams.vue?vue&type=template&id=085c2b2a */ "./components/Teams.vue?vue&type=template&id=085c2b2a", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Teams_vue_vue_type_template_id_085c2b2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Teams.vue?vue&type=template&id=085c2b2a */ "./components/Teams.vue?vue&type=template&id=085c2b2a");
(() => {
    api.rerender('085c2b2a', _Teams_vue_vue_type_template_id_085c2b2a__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./components/Teams.vue?vue&type=script&lang=js":
/*!******************************************************!*\
  !*** ./components/Teams.vue?vue&type=script&lang=js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_Teams_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_Teams_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/index.js??vue!./Teams.vue?vue&type=script&lang=js */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Teams.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/Teams.vue?vue&type=template&id=085c2b2a":
/*!************************************************************!*\
  !*** ./components/Teams.vue?vue&type=template&id=085c2b2a ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Teams_vue_vue_type_template_id_085c2b2a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Teams_vue_vue_type_template_id_085c2b2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??vue!./Teams.vue?vue&type=template&id=085c2b2a */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Teams.vue?vue&type=template&id=085c2b2a");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8b004dd0b2de5d721ed")
/******/ })();
/******/ 
/******/ }
);