import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Main = lazy(() => import('./components/main/Main'));
const Login = lazy(() => import('./components/login/Login'));
const Example = lazy(() => import('./components/example/Example'));

const routes = [
    {
        path: '/',
        element: <Navigate to="/main" />,
    },
    {
        path: "/main",
        element: <Main/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/example",
        element: <Example/>,
    },
];

export default routes;