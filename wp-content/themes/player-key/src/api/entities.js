import axios from 'axios'

axios.defaults.baseURL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1'

const getEntitles = (data) => {
    return axios.post(`/entities/${data.entityType}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createEntity = (data) => {
    return axios.post(`/entities/create-${data.entityType}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const removeEntity = (data) => {
    return axios.post(`/entities/remove-${data.entityType}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editEntity = (data) => {
    return axios.post(`/entities/edit-${data.entityType}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default {
    getEntitles,
    createEntity,
    removeEntity,
    editEntity,
}
