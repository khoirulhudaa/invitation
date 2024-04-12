import api from './axios';

const API = {

    // Account user
    checkAccount: (body: any) => {
        return api.post('/account/signin', body)
    },
    createAccount: (body: any) => {
        return api.post('/account/signup', body)
    },
    getAllAccount: () => {
        return api.get('/account')
    },
    updateAccount: (user_id: string, body: any) => {
        console.log(user_id)
        console.log(body)
        return api.post(`/account/update/${user_id}`, body)
    },
    removeUser: (user_id: string) => {
        return api.post(`/account/delete/${user_id}`)
    },
    
    // tOUR
    addTour: (body: any) => {
        return api.post('/tour', body)
    },
    getAllTour: () => {
        return api.get(`/tour`)
    },
    removeTour: (tour_id: string) => {
        return api.post(`/tour/remove/${tour_id}`)
    },
    updateTour: (tour_id: string, body: any) => {
        return api.post(`/tour/update/${tour_id}`, body)
    },
    
    addIsland: (body: any) => {
        return api.post('/island', body)
    },
    getAllIsland: () => {
        return api.get(`/island`)
    },
    removeIsland: (island_id: string) => {
        return api.post(`/island/remove/${island_id}`)
    },
    updateIsland: (island_id: string, body: any) => {
        return api.post(`/island/update/${island_id}`, body)
    },
    
    addArticle: (body: any) => {
        return api.post('/article', body)
    },
    getAllArticle: () => {
        return api.get(`/article`)
    },
    removeArticle: (article_id: string) => {
        return api.post(`/article/remove/${article_id}`)
    },
    updateArticle: (article_id: string, body: any) => {
        return api.post(`/article/update/${article_id}`, body)
    },
}

export default API;