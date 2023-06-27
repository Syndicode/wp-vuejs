import axios from 'axios';

// const BASE_URL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
const BASE_URL = 'http://127.0.0.1:3477/wp-json/pki/v1';


const activationCheck = (data) => {
    return axios.post(`${BASE_URL}/users/activation-check`, data);
}

const activationUser = (data) => {
    return axios.post(`${BASE_URL}/users/activation`, data);
}

const checkUser = (data) => {
    return axios.post(`${BASE_URL}/users/check`, data);
}

const changeUserRole = (data) => {
    return axios.post(`${BASE_URL}/users/change-user-role`, data);
}

const editUser = (data) => {
    return axios.post(`${BASE_URL}/users/edit-user`, data);
}

const loginUser = (data) => {
    return axios.post(`${BASE_URL}/users/login`, data)
}

const logoutUser = (data) => {
    return axios.post(`${BASE_URL}/users/logout`, data);
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

const registerUser = (data) => {
    return axios.post(`${BASE_URL}/users/register`, data)
}

export default {
    activationCheck,
    activationUser,
    checkUser,
    changeUserRole,
    editUser,
    loginUser,
    logoutUser,
    resendActivationLink,
    resetPasswordRequest,
    resetPassword,
    registerUser,
}
