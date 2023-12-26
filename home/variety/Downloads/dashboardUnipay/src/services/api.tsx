import { paymentInterface } from "../utils/interfaces/paymentInterface";
import { signAdminInterface } from "../utils/interfaces/signAdminInterface";
import api from './axios';

const API = {

    // Account admin
    checkAccountadmin: (body: signAdminInterface) => {
        return api.post('/account/signin/admin', body)
    },
    createAccountadmin: (body: signAdminInterface) => {
        return api.post('/account/signup/admin', body)
    },
    getAllUser: () => {
        return api.get(`/account/list/user`)
    },
    removeUser: (NIM: string) => {
        return api.delete(`/account/list/user/${NIM}`)
    },

    // reset-password
    sendEmailResetPassword: (body: signAdminInterface) => {
        return api.post('/account/admin/forgot-password', body)
    },
    resetPassword: ({token, body}: {token: string, body: any}) => {
        return api.put(`/account/admin/reset-password/${token}`, body)
    },

    // payments
    updatePaymentMethodByShop: (body: any) => {
        return api.put('/payment/', body)
    },
    getAllPayments: () => {
        return api.get('/payment/')
    },
    disbursement: (body: paymentInterface) => {
        return api.post('/payment/withdraw', body)
    },
    disbursementAdmin: (body: paymentInterface) => {
        return api.post('/payment/withdraw/admin', body)
    },

    // history
    getAllHistoryPayments: () => {
        return api.get('/payment/history')
    },

    // revenue and balance
    getRevenue: () => {
        return api.get(`/payment/revenue/administration`)
    },
    getRevenueCanteen: () => {
        return api.get(`/payment/revenue/canteen`)
    },
    getBalance: () => {
        return api.get(`/payment/balance`)
    },
    getHistoryWDAdmin: () => {
        return api.get('/payment/history/withdraw/admin')
    }
}

export default API;