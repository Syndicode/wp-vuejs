"use strict";
self["webpackHotUpdate_roots_bud"]("main",{

/***/ "../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Parents.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??babel!../node_modules/vue-loader/dist/index.js??vue!./components/Parents.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue */ "./components/Heading.vue");
/* harmony import */ var _FormItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormItem.vue */ "./components/FormItem.vue");
/* harmony import */ var _api_entities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/entities.js */ "./api/entities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Parents",
  components: {
    FormItem: _FormItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Heading: _Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    form: {
      handler() {
        this.isFormValid = this.isRequiredFieldsFiled();
      },
      deep: true
    }
  },
  data() {
    return {
      formFields: formFields,
      editTeamId: null,
      action: '',
      isLayoutVisible: false,
      entities: null,
      isFormValid: false,
      form: {
        firstName: '',
        lastName: '',
        login: '',
        email: ''
      }
    };
  },
  methods: {
    async fetchData() {
      await _api_entities_js__WEBPACK_IMPORTED_MODULE_2__["default"].getEntitles({
        entityType: 'parents',
        token: this.$store.state.authentication.token
      }).then(response => {
        if (response.data.success) {
          this.entities = response.data.data;
        }
      });
    },
    async remove(id) {
      await _api_entities_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeEntity({
        entityType: 'parent',
        token: this.$store.state.authentication.token,
        parentId: id
      }).then(response => {
        console.log(response);
        if (response.data.success) {
          this.entities = this.entities.filter(entity => entity.ID !== id);
        }
      });
    },
    isRequiredFieldsFiled() {
      let isFiled = true;
      for (let field in this.form) {
        if (field === '') {
          console.log(field);
          isFiled = false;
        }
      }
      return isFiled;
    }
  },
  mounted() {
    this.fetchData();
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("df0f066341ea3d00035f")
/******/ })();
/******/ 
/******/ }
);