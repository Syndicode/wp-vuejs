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
      console.log('comp');
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
      // isLoaded: this.$store.state.authentication.isUserLoggedIn,
      // currentRole: this.$store.state.authentication.currentRole,
      currentEntity: this.$route.params.entity,
      entities: null,
      entitiesScheme: {
        coach: ['teams', 'parents', 'players'],
        admin: ['coaches', 'teams', 'parents', 'players'],
        parent: ['players']
      }
    };
  },
  // mounted() {
  //   this.
  // },
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" before " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.isLoaded) + " ", 1 /* TEXT */), $options.isLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" after -- " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.entitiesScheme[$options.currentRole]) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BoardNavigation, {
    entities: $data.entitiesScheme[$options.currentRole]
  }, null, 8 /* PROPS */, ["entities"]), $data.entitiesScheme[$options.currentRole].includes(this.$route.params.entity) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [this.$route.params.entity === 'teams' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Teams, {
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
  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("34fc24c243d9097ec5f6")
/******/ })();
/******/ 
/******/ }
);