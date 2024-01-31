import { lazy } from "react";

const Main = lazy(() => import('../Pages/main'))

interface routerInterfaces {
    path: string,
    component: React.FC<{}>,
    exact: boolean
}

const Router: routerInterfaces[] = [
    {
        path: '/',
        component: Main,
        exact: true
    },
]

export default Router