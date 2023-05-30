self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/SignInView.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./views/SignInView.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/vue-loader/dist/index.js):\nTypeError: Cannot read properties of null (reading 'content')\n    at selectBlock (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/vue-loader/dist/select.js:23:45)\n    at Object.loader (/Users/user/Projects/work/player-key.vue/wp-content/themes/player-key/node_modules/vue-loader/dist/index.js:90:41)");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./views/SignInView.vue?vue&type=template&id=5f8b3f76":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??vue!./views/SignInView.vue?vue&type=template&id=5f8b3f76 ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "wrapper wrapper--form"
};
const _hoisted_2 = {
  class: "form__fieldset"
};
const _hoisted_3 = {
  class: "form__actions"
};
const _hoisted_4 = ["disabled"];
const _hoisted_5 = {
  key: 0,
  class: "form__actions-note"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("sup", null, "(*)", -1 /* HOISTED */);

function render(_ctx, _cache) {
  const _component_Heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Heading");
  const _component_FormItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormItem");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Heading, {
    level: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`form-holder__heading`)
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Login")]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    class: "form",
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.formSubmit && _ctx.formSubmit(...arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormItem, {
    name: `login`,
    label: `Login`,
    "input-type": `text`,
    "is-required": true,
    modelValue: _ctx.form.login,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.form.login = $event)
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormItem, {
    name: `password`,
    label: `Password`,
    "input-type": `password`,
    "is-required": true,
    modelValue: _ctx.form.password,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.form.password = $event)
  }, null, 8 /* PROPS */, ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    class: "button button--lime",
    disabled: !_ctx.isFormValid
  }, "Submit", 8 /* PROPS */, _hoisted_4), !_ctx.isFormValid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please fill in all required "), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" fields")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32 /* HYDRATE_EVENTS */)]);
}

/***/ }),

/***/ "./store/modules/authentication.js":
/*!*****************************************!*\
  !*** ./store/modules/authentication.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/authentication.js */ "./api/authentication.js");

const state = {
  isSubmitting: false,
  validationErrors: [],
  isUserLoggedIn: false,
  currentUser: null
};
const mutations = {
  loginSuccess(state, payload) {
    state.isUserLoggedIn = true;
    state.currentUser = payload.user;
    localStorage.setItem('pki-auth', payload.token);
  },
  checkSuccess(state, payload) {
    state.isUserLoggedIn = true;
    state.currentUser = payload;
  },
  checkFailure(state, payload) {
    state.isUserLoggedIn = false;
    state.currentUser = null;
  },
  logoutSuccess(state) {
    state.isUserLoggedIn = false;
    state.currentUser = null;
    localStorage.removeItem('pki-auth');
  },
  clearValidationErrors(state) {
    state.validationErrors = [];
  },
  registerStart(state) {
    state.validationErrors = [];
    state.isSubmitting = true;
  },
  registerSuccess(state, payload) {
    // state.isLoggedIn = true;
    // state.currentUser = payload;
    state.validationErrors = [];
    state.isSubmitting = false;
  },
  registerFailure(state, payload) {
    state.validationErrors.push(payload);
    state.isSubmitting = false;
  }
};
const actions = {
  register(context, userData) {
    return new Promise(resolve => {
      context.commit('registerStart');
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerUser(userData).then(response => {
        if (response.data.success) {
          context.commit('registerSuccess', response.data);
          resolve(response.data);
        } else {
          context.commit('registerFailure', response.data.data);
        }
      }).catch(result => {
        context.commit('registerFailure', result.response.data.data);
      });
    });
  },
  login(context, userData) {
    return new Promise(resolve => {
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].loginUser(userData).then(response => {
        console.log(response.data.data);
        context.commit('loginSuccess', response.data.data);
        resolve(response.data.data);
      });
    });
  },
  check(context, token) {
    return new Promise(resolve => {
      if (token) {
        _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkUser(token).then(response => {
          console.log('check-- ', response.data);
          context.commit('checkSuccess', response.data.data);
          resolve(response.data.data);
        });
      }
    });
  },
  logout(context, token) {
    return new Promise(resolve => {
      _api_authentication_js__WEBPACK_IMPORTED_MODULE_0__["default"].logoutUser(token).then(response => {
        context.commit('logoutSuccess', response.data.data);
        resolve(response.data.data);
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  actions,
  mutations
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44d51bc743f65c1edab9")
/******/ })();
/******/ 
/******/ }
);