import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const createAthlete = (data) => {
    return axios.post(`${BASE_URL}/athletes/create-athlete`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const editAthlete = (data) => {
    return axios.post(`${BASE_URL}/athletes/edit-athlete`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getAthleteBy = (data) => {
    return axios.post(`${BASE_URL}/athletes/get-athlete-by`, data);
}

/**`
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getAthletes = (data) => {
    return axios.post(`${BASE_URL}/athletes/get-athletes`, data)
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getAthletesWithoutTeam = (data) => {
    return axios.post(`${BASE_URL}/athletes/get-athletes-without-team`, data)
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const removeAthlete = (data) => {
    return axios.post(`${BASE_URL}/athletes/remove-athlete`, data)
}

export default {
    createAthlete,
    editAthlete,
    getAthleteBy,
    getAthletes,
    getAthletesWithoutTeam,
    removeAthlete,
};
