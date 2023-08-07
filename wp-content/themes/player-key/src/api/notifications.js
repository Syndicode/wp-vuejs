import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getNotifications = (data) => {
    return axios.post(`${BASE_URL}/notifications/get-notifications`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const markAllRead = (data) => {
    return axios.post(`${BASE_URL}/notifications/mark-all-notifications-read`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const removeAll = (data) => {
    return axios.post(`${BASE_URL}/notifications/remove-all-notifications`, data);
}

export default {
    getNotifications,
    markAllRead,
    removeAll,
}
