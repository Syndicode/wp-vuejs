import authApi, {registerUser} from '../../api/authentication.js'

const state = {
    athleteToken: null,
    athleteParentId: null,
    currentUser: null,
    currentRole: null,
    isCheckDataReceived: false,
    isSubmitting: false,
    isUserLoggedIn: null,
    messages: [],
    token: null,
    validationErrors: [],
}

const mutations = {
    editUserSuccess(state, payload) {
        state.currentUser = payload;
        state.currentRole = payload.current_role;
    },
    changeCurrentUserRoleSuccess(state, payload) {
        state.validationErrors = [];
        state.currentRole = payload.current_role;
    },
    changeCurrentUserRoleFailure(state, payload) {
        state.validationErrors.push(payload);
    },
    setAthleteForEdit(state, payload) {
        state.athleteToken = payload.token
        state.athleteParentId = payload.id
    },
    resetAthleteForEdit(state, payload) {
        state.athleteToken = null;
        state.athleteParentId = null
    },
    activationSuccess(state) {
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
        state.currentRole = payload.user.current_role;
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
        state.currentRole = payload.current_role;
        state.token = localStorage.getItem('pki-auth')
    },
    checkFailure(state, payload) {
        state.isUserLoggedIn = false;
        state.currentUser = null;
        state.currentRole = null;
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
        state.messages.push('Thank you for signing up with Player Key! We will validate your account and get back to you when you are set up.');
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
                    if (response.data.success) {
                        context.commit('loginSuccess', response.data.data)
                        resolve(response.data.data)
                    } else {
                        context.commit('loginFailure', response.data.data)
                    }
                })
                .catch(result => {
                    context.commit('loginFailure', result.response.data.data)
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
                    })
                    .catch(() => {
                        context.commit('checkFailure')
                    })
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
                    context.commit('logoutSuccess', response.data.data);
                    resolve(response.data.data);
                })
        });
    },
    changeUserRole(context, data) {
        return new Promise((resolve) => {
            authApi
                .changeUserRole(data)
                .then((response) => {
                    if (response.data.success) {
                        context.commit('changeCurrentUserRoleSuccess', response.data.data);
                        resolve(response.data.data);
                    } else {
                        context.commit('changeCurrentUserRoleFailure', response.data.data);
                    }
                })
                .catch((result) => {
                    context.commit('changeCurrentUserRoleFailure', result.response.data.data);
                })
        });
    },
}

export default {
    state,
    actions,
    mutations
}
