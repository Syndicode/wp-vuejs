import axios from 'axios';

const BASE_URL = 'https://playerkeyid.wpengine.com/wp-json/wp/v2';
// const BASE_URL = 'http://127.0.0.1:3477/wp-json/wp/v2';

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
