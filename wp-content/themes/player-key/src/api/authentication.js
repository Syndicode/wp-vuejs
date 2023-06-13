import axios from 'axios';

const BASE_URL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
// const BASE_URL = 'http://127.0.0.1:3477/wp-json/pki/v1';

const registerUser = (data) => {
    return axios.post(`${BASE_URL}/users/register`, data)
}

const loginUser = (data) => {
    return axios.post(`${BASE_URL}/users/login`, data)
}

const checkUser = (data) => {
    return axios.post(`${BASE_URL}/users/check`, data);
}

const logoutUser = (data) => {
    return axios.post(`${BASE_URL}/users/logout`, data);
}

const activationCheck = (data) => {
    return axios.post(`${BASE_URL}/users/activation-check`, data);
}

const activationUser = (data) => {
    return axios.post(`${BASE_URL}/users/activation`, data);
}

const resendActivationLink = (data) => {
    return axios.post(`${BASE_URL}/users/resend-activation-link`, data);
}

const resetPasswordRequest = (data) => {
    return axios.post(`${BASE_URL}/users/reset-password-request`, data);
}

const resetPassword = (data) => {
    return axios.post(`${BASE_URL}/users/reset-password`, data);
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
