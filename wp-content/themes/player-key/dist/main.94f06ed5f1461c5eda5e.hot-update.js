self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/ButtonLink.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/ButtonLink.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ButtonLink",
  props: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    style: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ButtonLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonLink.vue */ "./components/ButtonLink.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ButtonLink
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/ButtonLink.vue?vue&type=template&id=3dff3fe7":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/ButtonLink.vue?vue&type=template&id=3dff3fe7 ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RouterLink, {
    to: {
      name: _ctx.buttonTitle
    },
    class: "button"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)]),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to"]);
}

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/src/components/Header.vue: Unexpected token (27:27)\n\n\u001b[0m \u001b[90m 25 |\u001b[39m       })\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m       _createVNode(_component_ButtonLink\u001b[33m,\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 |\u001b[39m         href\u001b[33m:\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$router\u001b[33m.\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m         \u001b[32m\"button-title\"\u001b[39m\u001b[33m:\u001b[39m \u001b[32m\"Button!\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 |\u001b[39m       }\u001b[33m,\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m \u001b[35m8\u001b[39m \u001b[90m/* PROPS */\u001b[39m\u001b[33m,\u001b[39m [\u001b[32m\"href\"\u001b[39m])\u001b[0m\n\u001b[0m \u001b[90m 30 |\u001b[39m     ])\u001b[0m\n    at instantiate (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:946:12)\n    at Parser.raise (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:3270:19)\n    at Parser.unexpected (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:3300:16)\n    at Parser.parseIdentifierName (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:12032:12)\n    at Parser.parseIdentifier (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:12015:23)\n    at Parser.parseMember (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10941:28)\n    at Parser.parseSubscript (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10918:21)\n    at Parser.parseSubscripts (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10885:19)\n    at Parser.parseExprSubscripts (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10876:17)\n    at Parser.parseUpdate (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10855:21)\n    at Parser.parseMaybeUnary (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10831:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10669:61)\n    at Parser.parseExprOps (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10674:23)\n    at Parser.parseMaybeConditional (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10651:23)\n    at Parser.parseMaybeAssign (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10612:21)\n    at /Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10582:39\n    at Parser.allowInAnd (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:12257:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10582:17)\n    at Parser.parseObjectProperty (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:11773:83)\n    at Parser.parseObjPropValue (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:11800:100)\n    at Parser.parsePropertyDefinition (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:11734:17)\n    at Parser.parseObjectLike (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:11649:21)\n    at Parser.parseExprAtom (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:11159:23)\n    at Parser.parseExprSubscripts (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10872:23)\n    at Parser.parseUpdate (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10855:21)\n    at Parser.parseMaybeUnary (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10831:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10669:61)\n    at Parser.parseExprOps (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10674:23)\n    at Parser.parseMaybeConditional (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10651:23)\n    at Parser.parseMaybeAssign (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10612:21)\n    at /Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10582:39\n    at Parser.allowInAnd (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:12257:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10582:17)\n    at Parser.parseExprListItem (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:12009:18)\n    at Parser.parseCallExpressionArguments (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:11064:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10979:29)\n    at Parser.parseSubscript (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10914:19)\n    at Parser.parseSubscripts (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10885:19)\n    at Parser.parseExprSubscripts (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10876:17)\n    at Parser.parseUpdate (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10855:21)\n    at Parser.parseMaybeUnary (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10831:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10669:61)\n    at Parser.parseExprOps (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10674:23)\n    at Parser.parseMaybeConditional (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10651:23)\n    at Parser.parseMaybeAssign (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10612:21)\n    at /Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10582:39\n    at Parser.allowInAnd (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:12257:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:10582:17)\n    at Parser.parseExprListItem (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/@babel/parser/lib/index.js:12009:18)");

/***/ }),

/***/ "./components/ButtonLink.vue":
/*!***********************************!*\
  !*** ./components/ButtonLink.vue ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ButtonLink_vue_vue_type_template_id_3dff3fe7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonLink.vue?vue&type=template&id=3dff3fe7 */ "./components/ButtonLink.vue?vue&type=template&id=3dff3fe7");
/* harmony import */ var _ButtonLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLink.vue?vue&type=script&lang=js */ "./components/ButtonLink.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_user_Projects_work_player_key_vue_wp_content_themes_player_key_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ButtonLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ButtonLink_vue_vue_type_template_id_3dff3fe7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"components/ButtonLink.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "3dff3fe7"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('3dff3fe7', __exports__)) {
    api.reload('3dff3fe7', __exports__)
  }
  
  module.hot.accept(/*! ./ButtonLink.vue?vue&type=template&id=3dff3fe7 */ "./components/ButtonLink.vue?vue&type=template&id=3dff3fe7", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _ButtonLink_vue_vue_type_template_id_3dff3fe7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonLink.vue?vue&type=template&id=3dff3fe7 */ "./components/ButtonLink.vue?vue&type=template&id=3dff3fe7");
(() => {
    api.rerender('3dff3fe7', _ButtonLink_vue_vue_type_template_id_3dff3fe7__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./components/ButtonLink.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./components/ButtonLink.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_ButtonLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_index_js_vue_ButtonLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/index.js??vue!./ButtonLink.vue?vue&type=script&lang=js */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/ButtonLink.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/ButtonLink.vue?vue&type=template&id=3dff3fe7":
/*!*****************************************************************!*\
  !*** ./components/ButtonLink.vue?vue&type=template&id=3dff3fe7 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_ButtonLink_vue_vue_type_template_id_3dff3fe7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_ButtonLink_vue_vue_type_template_id_3dff3fe7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??vue!./ButtonLink.vue?vue&type=template&id=3dff3fe7 */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/ButtonLink.vue?vue&type=template&id=3dff3fe7");


/***/ }),

/***/ "./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true":
/*!*************************************************************************!*\
  !*** ./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_babel_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_vue_Header_vue_vue_type_template_id_1a9bb128_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??babel!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??vue!./Header.vue?vue&type=template&id=1a9bb128&scoped=true */ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("30535c1923ec863aa4bb")
/******/ })();
/******/ 
/******/ }
);