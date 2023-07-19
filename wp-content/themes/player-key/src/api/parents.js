import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const createParent = (data) => {
    return axios.post(`${BASE_URL}/parents/create-parent`, data, {
        headers: {
            'X-WP-Nonce': window.pkiNonce
        }
    });
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const editParent = (data) => {
    return axios.post(`${BASE_URL}/parents/edit-parent`, data, {
        headers: {
            'X-WP-Nonce': window.pkiNonce
        }
    })
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getParents = (data) => {
    return axios.post(`${BASE_URL}/parents/get-parents`, data, {
        headers: {
            'X-WP-Nonce': window.pkiNonce
        }
    });
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const removeParent = (data) => {
    return axios.post(`${BASE_URL}/parents/remove-parent`, data, {
        headers: {
            'X-WP-Nonce': window.pkiNonce
        }
    });
}

export default {
    createParent,
    editParent,
    getParents,
    removeParent,
};
