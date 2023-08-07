import axios from 'axios';

const BASE_URL = `${document.location.protocol}//${document.location.host}/wp-json/pki/v1`;

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const cancelPayment = (data) => {
    return axios.post(`${BASE_URL}/payments/cancel-payment`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const checkPayment = (data) => {
    return axios.post(`${BASE_URL}/payments/check-payment`, data);
}

/**
 *
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getCost = () => {
    return axios.get(`${BASE_URL}/payments/get-cost`);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getPaymentToken = (data) => {
    return axios.post(`${BASE_URL}/payments/get-payment-token`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getPayments = (data) => {
    return axios.post(`${BASE_URL}/payments/get-payments`, data);
}

/**
 *
 * @param {Object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const useCoupon = (data) => {
    return axios.post(`${BASE_URL}/payments/use-coupon`, data);
}

export default {
    cancelPayment,
    checkPayment,
    getCost,
    getPaymentToken,
    getPayments,
    useCoupon,
}
