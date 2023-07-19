import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;

const getNotifications = (data) => {
    return axios.post(`${BASE_URL}/notifications/get-notifications`, data);
}

const markAllRead = (data) => {
    return axios.post(`${BASE_URL}/notifications/mark-all-read`, data);
}

const removeAll = (data) => {
    return axios.post(`${BASE_URL}/notifications/remove-all`, data);
}

export default {
    getNotifications,
    markAllRead,
    removeAll,
}
