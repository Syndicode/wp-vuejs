import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1'

const getEntitles = (data) => {
    return axios.post(`/entities/${data.entityType}`, data)
}

const createEntity = (data) => {
    return axios.post(`/entities/create-${data.entityType}`, data)
}

const removeEntity = (data) => {
    return axios.post(`/entities/remove-${data.entityType}`, data)
}

const editEntity = (data) => {
    return axios.post(`/entities/edit-${data.entityType}`, data)
}

export default {
    getEntitles,
    createEntity,
    removeEntity,
    editEntity,
}
