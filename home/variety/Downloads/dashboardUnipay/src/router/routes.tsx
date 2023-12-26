import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const Users = lazy(() => import('../pages/Users'));
const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));
const RegisterBoxed = lazy(() => import('../pages/Authentication/RegisterBoxed'));
const SuccessSendEmail = lazy(() => import('../pages/notification/successSendEmail'))
const Payment = lazy(() => import('../pages/payment/.'))
const Semester = lazy(() => import('../pages/Data-payment/Semester'))
const PKKMB = lazy(() => import('../pages/Data-payment/PKKMB'))
const Remedial = lazy(() => import('../pages/Data-payment/Remedial'))
const Sertification = lazy(() => import('../pages/Data-payment/Sertification'))
const UAS = lazy(() => import('../pages/Data-payment/UAS'))
const UTS = lazy(() => import('../pages/Data-payment/UTS'))
const Canteen = lazy(() => import('../pages/Data-payment/Canteen'))

const routes = [
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/users',
        element: <Users />,
    },
    {
        path: '/system-payment/',
        element: <Payment />,
    },
    {
        path: '/data-payment/Semester/:prodi',
        element: <Semester />,
    },
    {
        path: '/data-payment/PKKMB/:prodi',
        element: <PKKMB />,
    },
    {
        path: '/data-payment/Remedial/:prodi',
        element: <Remedial />,
    },
    {
        path: '/data-payment/Sertification/:prodi',
        element: <Sertification />,
    },
    {
        path: '/data-payment/UTS/:prodi',
        element: <UTS />,
    },
    {
        path: '/data-payment/UAS/:prodi',
        element: <UAS />,
    },
    {
        path: '/data-payment/Canteen',
        element: <Canteen />,
    },
    {
        path: '/auth/signin',
        element: <LoginBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/signup',
        element: <RegisterBoxed />,
        layout: 'blank',
    },
    {
        path: '/auth/succes/sendEmailMessage',
        element: <SuccessSendEmail />,
        layout: 'blank'
    },
];

export { routes };
