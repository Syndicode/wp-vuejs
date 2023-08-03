import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/wp/v2`;

const getPageBy = (field, value) => {
    return axios.get(`${BASE_URL}/pages/?${field}=${value}`);
}

const getNavMenu = (menuId) => {
    return axios.get(`${BASE_URL}/menus/get-menu/?menu-id=${menuId}`);
}

export default {
    getPageBy,
    getNavMenu,
}
