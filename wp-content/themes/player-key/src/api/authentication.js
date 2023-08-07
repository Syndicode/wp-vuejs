import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const activationCheck = (data) => {
    return axios.post(`${BASE_URL}/users/activation-check`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const activationUser = (data) => {
    return axios.post(`${BASE_URL}/users/activation`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const checkUser = (data) => {
    return axios.post(`${BASE_URL}/users/check`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const changeUserRole = (data) => {
    return axios.post(`${BASE_URL}/users/change-user-role`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const editUser = (data) => {
    return axios.post(`${BASE_URL}/users/edit-user`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getRoleStatistics = (data) => {
    return axios.post(`${BASE_URL}/users/get-role-statistics`, data)
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const loginUser = (data) => {
    return axios.post(`${BASE_URL}/users/login-user`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const logoutUser = (data) => {
    return axios.post(`${BASE_URL}/users/logout-user`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const resendActivationLink = (data) => {
    return axios.post(`${BASE_URL}/users/resend-activation-link`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const resetPasswordRequest = (data) => {
    return axios.post(`${BASE_URL}/users/reset-password-request`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const resetPassword = (data) => {
    return axios.post(`${BASE_URL}/users/reset-password`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const registerUser = (data) => {
    return axios.post(`${BASE_URL}/users/register-user`, data);
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
