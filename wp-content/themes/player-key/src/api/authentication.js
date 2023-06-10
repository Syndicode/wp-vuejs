import axios from 'axios'

axios.defaults.baseURL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
// axios.defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1';

const registerUser = (data) => {
    return axios.post('/users/register', data)
}

const loginUser = (data) => {
    return axios.post('/users/login', data)
}

const checkUser = (data) => {
    return axios.post('/users/check', data);
}

const logoutUser = (data) => {
    return axios.post('/users/logout', data);
}

const activationCheck = (data) => {
    return axios.post('/users/activation-check', data);
}

const activationUser = (data) => {
    return axios.post('/users/activation', data);
}

const resendActivationLink = (data) => {
    return axios.post('/users/resend-activation-link', data);
}

const resetPasswordRequest = (data) => {
    return axios.post('/users/reset-password-request', data);
}

const resetPassword = (data) => {
    return axios.post('/users/reset-password', data);
}

export default {
    registerUser,
    loginUser,
    checkUser,
    logoutUser,
    activationCheck,
    activationUser,
    resendActivationLink,
    resetPasswordRequest,
    resetPassword,
}
