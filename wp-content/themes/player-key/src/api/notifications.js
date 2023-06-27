import axios from 'axios';

const BASE_URL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
// const BASE_URL = 'http://127.0.0.1:3477/wp-json/pki/v1';

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
