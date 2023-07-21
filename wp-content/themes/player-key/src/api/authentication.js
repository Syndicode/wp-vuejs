import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;


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

const getRoleStatistics = (data) => {
    return axios.post(`${BASE_URL}/users/get-role-statistics`, data)
}

const loginUser = (data) => {
    return axios.post(`${BASE_URL}/users/login-user`, data, {
        headers: {
            'X-WP-Nonce': window.pkiNonce
        }
    });
}

const logoutUser = (data) => {
    return axios.post(`${BASE_URL}/users/logout-user`, data);
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
    return axios.post(`${BASE_URL}/users/register-user`, data, {
        headers: {
            'X-WP-Nonce': window.pkiNonce
        }
    });
}

export default {
    activationCheck,
    activationUser,
    checkUser,
    changeUserRole,
    editUser,
    getRoleStatistics,
    loginUser,
    logoutUser,
    resendActivationLink,
    resetPasswordRequest,
    resetPassword,
    registerUser,
}
