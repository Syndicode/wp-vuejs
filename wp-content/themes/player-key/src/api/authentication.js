import axios from 'axios'

axios.defaults.baseURL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1'

const registerUser = (data) => {
    return axios.post('/users/register', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const loginUser = (data) => {
    return axios.post('/users/login', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const checkUser = (data) => {
    return axios.post('/users/check', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const logoutUser = (data) => {
    return axios.post('/users/logout', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default {
    registerUser,
    loginUser,
    checkUser,
    logoutUser,
}
