"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_logo_player_key_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/logo-player-key.svg */ "./assets/images/logo-player-key.svg");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1a9bb128"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
  class: "header"
};
const _hoisted_2 = {
  class: "wrapper header__wrapper"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_logo_player_key_svg__WEBPACK_IMPORTED_MODULE_1__,
  alt: "Player Key ID",
  class: "header__logo"
}, null, -1 /* HOISTED */));
const _hoisted_4 = {
  key: 0,
  class: "header__actions"
};
const _hoisted_5 = {
  key: 1,
  class: "header__actions"
};
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  class: "header__action-logout"
}, "Logout", -1 /* HOISTED */));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink");
  const _component_MainNavigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MainNavigation");
  const _component_ButtonLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ButtonLink");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {
    to: {
      name: 'home'
    },
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__logo-holder`)
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_3]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MainNavigation), !$options.isUserLoggedIn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ButtonLink, {
    href: {
      name: 'sign-in'
    },
    "button-title": `Sign In`,
    "button-style": `black`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__cta`)
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ButtonLink, {
    href: {
      name: 'sign-up'
    },
    "button-title": `Sign Up`,
    "button-style": `white`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__cta`)
  })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ButtonLink, {
    href: {
      name: 'board'
    },
    "button-title": `Board`,
    "button-style": `black`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__cta`)
  }), _hoisted_6]))])]);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("02fe3e4b462a58145c6d")
/******/ })();
/******/ 
/******/ }
);