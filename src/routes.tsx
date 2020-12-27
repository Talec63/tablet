import React from 'react';

const HomeScreen = React.lazy(() => import('./components/home/home'));
const copy = React.lazy(() => import('./components/copy/copy'));

const routes = [
    {
        path: '/',
        component: HomeScreen,
        exact: true
    },
    {
        path: '/copy',
        component: copy
    },
];

export default routes;