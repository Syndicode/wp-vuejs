import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const createTeam = (data) => {
    return axios.post(`${BASE_URL}/teams/create-team`, data)
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const editTeam = (data) => {
    return axios.post(`${BASE_URL}/teams/edit-team`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getTeams = (data) => {
    return axios.post(`${BASE_URL}/teams/get-teams`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getTeamData = (data) => {
    return axios.post(`${BASE_URL}/teams/get-team-data`, data)
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const removeTeam = (data) => {
    return axios.post(`${BASE_URL}/teams/remove-team`, data)
}

export default {
    createTeam,
    editTeam,
    getTeams,
    getTeamData,
    removeTeam,
};
