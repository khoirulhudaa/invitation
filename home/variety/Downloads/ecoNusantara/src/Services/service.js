import api from './axios';

const API = {

    // Account user
    checkAccount: (body) => {
        return api.post('/account/signin', body)
    },
    createAccount: (body) => {
        return api.post('/account/signup', body)
    },
    updateProfile: (body) => {
        return api.post('/account/user', body)
    },

    // Article
    getAllArticle: () => {
        return api.get('/article')
    },

    // Tour Data (Coordinates)
    getAllTour: () => {
        return api.get('/tour')
    },

    // Contact Data 
    getAllContact: () => {
        return api.get('/contact')
    },

    // Contact Data 
    getAllCulinary: () => {
        return api.get('/culinary')
    },

    // Contact Data 
    getAllSpice: () => {
        return api.get('/spice')
    }
}

export default API;