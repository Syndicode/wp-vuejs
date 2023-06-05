import authApi, {registerUser} from '../../api/authentication.js'

const state = {
    isCheckDataReceived: false,
    isSubmitting: false,
    validationErrors: [],
    isUserLoggedIn: false,
    currentUser: null,
    token: null,
    currentRole: null,
    messages: [],
}

const mutations = {
    activationSuccess(state) {
        console.log('wqefqwfe');
        state.messages.push('You have successfully activated your account!');
    },
    loginStart(state, payload) {
        state.validationErrors = [];
        state.isSubmitting = true;
        state.messages = [];
    },
    loginSuccess(state, payload) {
        state.isSubmitting = true;
        state.isUserLoggedIn = true;
        state.currentUser = payload.user;
        state.token = payload.token;
        state.currentRole = payload.user.roles[0];
        localStorage.setItem('pki-auth', payload.token);
    },

    loginFailure(state, payload) {
        state.validationErrors.push(payload);
        state.isSubmitting = false;
    },

    checkSuccess(state, payload) {
        state.isCheckDataReceived = true;
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
        state.messages = [];
    },
    registerSuccess(state, payload) {
        state.validationErrors = [];
        state.isSubmitting = false;
        state.messages.push('You have successfully registered!');
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
                        context.commit('registerFailure', response.data.data)
                    }
                })
                .catch(result => {
                    context.commit('registerFailure', result.response.data.data)
                })
        })
    },
    login(context, userData) {
        return new Promise((resolve) => {
            context.commit('loginStart')
            authApi
                .loginUser(userData)
                .then((response) => {
                    console.log(response);
                    if (response.data.success) {
                        context.commit('loginSuccess', response.data.data)
                        resolve(response.data.data)
                    } else {
                        context.commit('loginFailure', response.data.data)
                    }
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
