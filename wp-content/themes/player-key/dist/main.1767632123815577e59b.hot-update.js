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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Teams: _components_Teams_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BoardNavigation: _components_BoardNavgation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    const actions = {
      coach: [{
        name: 'teams',
        title: 'Teams'
      }, {
        name: 'players',
        title: 'Players'
      }],
      admin: [],
      parent: []
    };
    return {
      isLoaded: false,
      boardActions: actions
    };
  },
  computed: {}
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("020e0054cb9fc8b059ba")
/******/ })();
/******/ 
/******/ }
);