import axios from 'axios';

const BASE_URL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
// const BASE_URL = 'http://127.0.0.1:3477/wp-json/pki/v1';

const getPaymentToken = (data) => {
    return axios.post(`${BASE_URL}/payments/get-payment-token`, data);
}

const checkPayment = (data) => {
    return axios.post(`${BASE_URL}/payments/check-payment`, data);
}

const getPayments = (data) => {
    return axios.post(`${BASE_URL}/payments/get-payments`, data);
}

export default {
    getPaymentToken,
    checkPayment,
    getPayments,
}
