import authApi, {registerUser} from '../../api/authentication.js'

const state = {
    isSubmitting: false,
    validationErrors: [],
    isUserLoggedIn: false,
    currentUser: null,
    token: null,
    currentRole: null,
}

const mutations = {
    loginSuccess(state, payload) {
        state.isUserLoggedIn = true;
        state.currentUser = payload.user;
        state.token = payload.token;
        state.currentRole = payload.user.roles[0];
        localStorage.setItem('pki-auth', payload.token);
    },

    checkSuccess(state, payload) {
        state.isUserLoggedIn = true;
        state.currentUser = payload;
        state.currentRole = payload.roles[0];
        state.token = localStorage.getItem('pki-auth')
    },

    checkFailure(state, payload) {
        state.isUserLoggedIn = false;
        state.currentUser = null;
        state.token = null;
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
}

const actions = {
    register(context, userData) {
        return new Promise(resolve => {
            context.commit('registerStart')
            authApi
                .registerUser(userData)
                .then(response => {
                    if (response.data.success) {
                        context.commit('registerSuccess', response.data)
                        resolve(response.data)
                    } else {
                        console.log(response.data);
                        context.commit('registerFailure', response.data.data)
                    }
                })
                .catch(result => {
                    console.log(result.response);
                    context.commit('registerFailure', result.response.data.data)
                })
        })
    },
    login(context, userData) {
        return new Promise((resolve) => {
            authApi
                .loginUser(userData)
                .then((response) => {
                    context.commit('loginSuccess', response.data.data)
                    resolve(response.data.data)
                })
        });
    },
    check(context, token) {
        return new Promise((resolve) => {
            if (token) {
                authApi
                    .checkUser(token)
                    .then((response) => {
                        if (response.data.success) {
                            context.commit('checkSuccess', response.data.data)
                            resolve(response.data.data)
                        } else {
                            context.commit('checkFailure')
                        }
                    });
            } else {
                context.commit('checkFailure');
            }
        });
    },
    logout(context, token) {
        return new Promise((resolve) => {
            authApi
                .logoutUser(token)
                .then((response) => {
                    context.commit('logoutSuccess', response.data.data)
                    resolve(response.data.data)
                })
        });
    }
}

export default {
    state,
    actions,
    mutations
}
