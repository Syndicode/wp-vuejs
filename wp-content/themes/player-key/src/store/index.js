import Vue from 'vue'
import {createStore} from 'vuex'

import authentication from './modules/authentication.js'

// Vue.use(Vuex)

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        authentication
    }
})
