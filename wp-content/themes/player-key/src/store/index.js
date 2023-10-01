import {createStore} from 'vuex'

import authentication from './modules/authentication.js'
import notification from './modules/notification.js'

// Vue.use(Vuex)

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        authentication,
        notification,
    }
})
