"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ButtonLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonLink.vue */ "./components/ButtonLink.vue");
/* harmony import */ var _MainNavigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation.vue */ "./components/MainNavigation.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    MainNavigation: _MainNavigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ButtonLink: _ButtonLink_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/MainNavigation.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/MainNavigation.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MainNavigation",
  data() {
    return {
      navigationItems: [{
        title: 'About',
        url: '/about'
      }, {
        title: 'FAQ',
        url: '/faq'
      }, {
        title: 'TOS',
        url: '/tos'
      }, {
        title: 'Privacy Policy',
        url: '/privacy-policy'
      }]
    };
  }
});

/***/ }),

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
  class: "header__actions"
};
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
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MainNavigation), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ButtonLink, {
    href: `/login`,
    "button-title": `Sign In`,
    "button-style": `black`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__cta`)
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ButtonLink, {
    href: `/register`,
    "button-title": `Sign Up`,
    "button-style": `white`,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`header__cta`)
  })])])]);
}

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/MainNavigation.vue?vue&type=template&id=42076448":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/MainNavigation.vue?vue&type=template&id=42076448 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "main-navigation"
};
const _hoisted_2 = {
  class: "main-navigation__list"
};
const _hoisted_3 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.navigationItems, navigationItem => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: navigationItem.url
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: navigationItem.url
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(navigationItem.title), 9 /* TEXT, PROPS */, _hoisted_3)]);
  }), 128 /* KEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./components/MainNavigation.vue":
/*!***************************************!*\
  !*** ./components/MainNavigation.vue ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainNavigation_vue_vue_type_template_id_42076448__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainNavigation.vue?vue&type=template&id=42076448 */ "./components/MainNavigation.vue?vue&type=template&id=42076448");
/* harmony import */ var _MainNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation.vue?vue&type=script&lang=js */ "./components/MainNavigation.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MainNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainNavigation_vue_vue_type_template_id_42076448__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"components/MainNavigation.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "42076448"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('42076448', __exports__)) {
    api.reload('42076448', __exports__)
  }
  
  module.hot.accept(/*! ./MainNavigation.vue?vue&type=template&id=42076448 */ "./components/MainNavigation.vue?vue&type=template&id=42076448", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _MainNavigation_vue_vue_type_template_id_42076448__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainNavigation.vue?vue&type=template&id=42076448 */ "./components/MainNavigation.vue?vue&type=template&id=42076448");
(() => {
    api.rerender('42076448', _MainNavigation_vue_vue_type_template_id_42076448__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./components/MainNavigation.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./components/MainNavigation.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_MainNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_MainNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/index.js??vue!./MainNavigation.vue?vue&type=script&lang=js */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/MainNavigation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/MainNavigation.vue?vue&type=template&id=42076448":
/*!*********************************************************************!*\
  !*** ./components/MainNavigation.vue?vue&type=template&id=42076448 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_MainNavigation_vue_vue_type_template_id_42076448__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_MainNavigation_vue_vue_type_template_id_42076448__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??vue!./MainNavigation.vue?vue&type=template&id=42076448 */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/MainNavigation.vue?vue&type=template&id=42076448");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e6c3dc91aa5c64163863")
/******/ })();
/******/ 
/******/ }
);