import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;

const createEntity = (data) => {
    return axios.post(`${BASE_URL}/entities/create-${data.entityType}`, data)
}

const createAthlete = (data) => {
    return axios.post(`${BASE_URL}/entities/create-athlete`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const editAthlete = (data) => {
    return axios.post(`${BASE_URL}/entities/edit-athlete`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}

const editEntity = (data) => {
    console.log(window.pkiNonce);
    return axios.post(`${BASE_URL}/entities/edit-${data.entityType}`, data, {
            headers: {
                'X-WP-Nonce': window.pkiNonce
            }
        })
}

const getAthlete = (data) => {
    return axios.post(`${BASE_URL}/entities/get-athlete`, data);
}

const getAthleteBySlug = (data) => {
    return axios.post(`${BASE_URL}/entities/get-athlete-by-slug`, data);
}

const getEntitles = (data) => {
    return axios.post(`${BASE_URL}/entities/${data.entityType}`, data, {
        headers: {
            'X-WP-Nonce': window.pkiNonce
        }
    })
}

const getRoleStatistics = (data) => {
    return axios.post(`${BASE_URL}/entities/get-role-statistics`, data)
}

const getTeamData = (data) => {
    return axios.post(`${BASE_URL}/entities/get-team-data`, data)
}

const removeEntity = (data) => {
    return axios.post(`${BASE_URL}/entities/remove-${data.entityType}`, data)
}
export default {
    createAthlete,
    createEntity,
    editEntity,
    editAthlete,
    getAthlete,
    getAthleteBySlug,
    getEntitles,
    getRoleStatistics,
    getTeamData,
    removeEntity,
}
