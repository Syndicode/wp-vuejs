"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/BoardNavgation.vue?vue&type=template&id=374be626&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/BoardNavgation.vue?vue&type=template&id=374be626&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-374be626"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
  class: "board-navigation"
};
const _hoisted_2 = {
  class: "wrapper"
};
const _hoisted_3 = {
  class: "board-navigation__list"
};
const _hoisted_4 = {
  class: "board-navigation__item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.entities, entity => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {
      to: {
        name: 'board-entity',
        params: {
          entity: entity
        }
      }
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(entity), 1 /* TEXT */)]),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])]);
}

/***/ }),

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "../node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/HomeView.vue */ "./views/HomeView.vue");
/* harmony import */ var _views_SignUpView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/SignUpView.vue */ "./views/SignUpView.vue");
/* harmony import */ var _views_SignUpRoleView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/SignUpRoleView.vue */ "./views/SignUpRoleView.vue");
/* harmony import */ var _views_SignInView_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/SignInView.vue */ "./views/SignInView.vue");
/* harmony import */ var _views_BoardView_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/BoardView.vue */ "./views/BoardView.vue");






const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createWebHistory)(),
  routes: [{
    path: '/',
    name: 'home',
    component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }, {
    path: '/sign-up',
    name: 'sign-up',
    component: _views_SignUpView_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, {
    path: '/register/:role',
    component: _views_SignUpRoleView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '/sign-in',
    name: 'sign-in',
    component: _views_SignInView_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: '/board',
    name: 'board',
    component: _views_BoardView_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: '/board/:entity',
    name: 'board-entity',
    component: _views_BoardView_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4b8357402427a1c1b07e")
/******/ })();
/******/ 
/******/ }
);