import axios from 'axios';

// const BASE_URL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
const BASE_URL = 'http://127.0.0.1:3477/wp-json/pki/v1';

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
            'Content-Type': 'multipart/form-data'
        }
    })
}

const editEntity = (data) => {
    return axios.post(`${BASE_URL}/entities/edit-${data.entityType}`, data)
}

const getAthlete = (data) => {
    return axios.post(`${BASE_URL}/entities/get-athlete`, data);
}

const getAthleteBySlug = (data) => {
    return axios.post(`${BASE_URL}/entities/get-athlete-by-slug`, data);
}

const getEntitles = (data) => {
    return axios.post(`${BASE_URL}/entities/${data.entityType}`, data)
}

const getRoleStatistics = (data) => {
    return axios.post(`${BASE_URL}/entities/get-role-statistics`, data)
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
    removeEntity,
}
