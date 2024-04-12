import { lazy } from "react";

const Homepage = lazy(() => import('../Pages/homepage'))
const DetailArtikel = lazy(() => import('../Pages/detail-artikel'))
const DetailCard = lazy(() => import('../Pages/detail-card'))
const DetailMainArticle = lazy(() => import('../Pages/detail-main-article'))

const Routers = [
    {
        path: '/',
        component: Homepage,
        exact: true
    },
    {
        path: '/detail-artikel/:id',
        component: DetailArtikel,
        exact: false
    },
    {
        path: '/detail-card/:id',
        component: DetailCard,
        exact: false
    },
    {
        path: '/detail-main-article/:id',
        component: DetailMainArticle,
        exact: false
    },
]

export default Routers