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
      return this.$store.state.authentication.isUserLoggedIn;
    },
    currentRole() {
      return this.$store.state.authentication.currentRole;
    },
    currentEntity() {
      console.log(this.$route.params.entity);
      return this.$route.params.entity;
    }
  },
  async beforeRouteUpdate(to, from) {
    this.currentEntity = to.params.entity;
  },
  data() {
    return {
      currentEntity: null,
      entities: null,
      entitiesScheme: {
        coach: ['teams', 'parents', 'players'],
        admin: ['coaches', 'teams', 'parents', 'players'],
        parent: ['players']
      }
    };
  },
  methods: {
    async fetchData() {
      this.entities = await _api_entities_js__WEBPACK_IMPORTED_MODULE_6__["default"].getEntitles({
        entityType: this.currentEntity,
        token: this.$store.state.authentication.token
      });
      console.log(this.entities);
    }
  },
  mounted() {
    if (this.currentEntity) {
      this.fetchData();
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc052087370d614df3ed")
/******/ })();
/******/ 
/******/ }
);