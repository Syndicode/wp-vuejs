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
/* harmony import */ var _FormItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormItem.vue */ "./components/FormItem.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FormItem: _FormItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Heading: _Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  watch: {
    form: {
      handler() {
        this.isFormValid = this.form.team !== '';
      },
      deep: true
    }
  },
  data() {
    return {
      isLayoutVisible: false,
      entities: null,
      isFormValid: false,
      form: {
        team: ''
      }
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
    },
    async formSubmit() {
      await _api_entities_js__WEBPACK_IMPORTED_MODULE_1__["default"].createEntity({
        entityType: 'team',
        token: this.$store.state.authentication.token,
        form: this.form
      }).then(response => {
        if (response.data.success) {
          this.entities = response.data.data;
          this.form.team = '';
          this.isLayoutVisible = false;
          this.isFormValid = false;
        }
      });
    },
    async remove() {
      await _api_entities_js__WEBPACK_IMPORTED_MODULE_1__["default"].createEntity({
        entityType: 'team',
        token: this.$store.state.authentication.token,
        form: this.form
      }).then(response => {
        if (response.data.success) {
          this.entities = response.data.data;
          this.form.team = '';
          this.isLayoutVisible = false;
          this.isFormValid = false;
        }
      });
    },
    async edit() {}
  },
  mounted() {
    this.fetchData();
  }
});

/***/ }),

/***/ "./api/entities.js":
/*!*************************!*\
  !*** ./api/entities.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/lib/axios.js");

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1';
const getEntitles = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/entities/${data.entityType}`, data);
};
const createEntity = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/entities/create-${data.entityType}`, data);
};
const removeEntity = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/entities/remove-${data.entityType}`, data);
};
const editEntity = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/entities/edit-${data.entityType}`, data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getEntitles,
  createEntity,
  removeEntity,
  editEntity
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("35e4e1b3b3d1203ff378")
/******/ })();
/******/ 
/******/ }
);