import axios from "axios";

axios.defaults.baseURL = 'https://playerkeyid.wpengine.com/wp-json/pki/v1';
// axios.defaults.baseURL = 'http://127.0.0.1:3477/wp-json/pki/v1';

const getPaymentToken = (data) => {
    return axios.post(`/payments/get-payment-token`, data);
}

const checkPayment = (data) => {
    return axios.post(`/payments/check-payment`, data);
}

const getPayments = (data) => {
    return axios.post(`/payments/get-payments`, data);
}

export default {
    getPaymentToken,
    checkPayment,
    getPayments,
}
