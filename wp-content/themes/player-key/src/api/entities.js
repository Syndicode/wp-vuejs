import axios from 'axios'

axios.defaults.baseURL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
// axios.defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1';

const getEntitles = (data) => {
    return axios.post(`/entities/${data.entityType}`, data)
}

const createEntity = (data) => {
    return axios.post(`/entities/create-${data.entityType}`, data)
}

const createAthlete = (data) => {
    return axios.post(`/entities/create-athlete`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const removeEntity = (data) => {
    return axios.post(`/entities/remove-${data.entityType}`, data)
}

const editAthlete = (data) => {
    return axios.post(`/entities/edit-athlete`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const editEntity = (data) => {
    return axios.post(`/entities/edit-${data.entityType}`, data)
}

const getAthlete = (data) => {
    return axios.post(`/entities/get-athlete`, data)
}

const getRoleStatistics = (data) => {
    return axios.post(`/entities/get-role-statistics`, data)
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
