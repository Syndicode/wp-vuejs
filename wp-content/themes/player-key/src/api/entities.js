import axios from 'axios';

const BASE_URL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
// const BASE_URL = 'http://127.0.0.1:3477/wp-json/pki/v1';

const getEntitles = (data) => {
    return axios.post(`${BASE_URL}/entities/${data.entityType}`, data)
}

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

const removeEntity = (data) => {
    return axios.post(`${BASE_URL}/entities/remove-${data.entityType}`, data)
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
    return axios.post(`${BASE_URL}/entities/get-athlete`, data)
}

const getRoleStatistics = (data) => {
    return axios.post(`${BASE_URL}/entities/get-role-statistics`, data)
}
export default {
    getEntitles,
    createEntity,
    removeEntity,
    editEntity,
    editAthlete,
    createAthlete,
    getAthlete,
    getRoleStatistics,
}
