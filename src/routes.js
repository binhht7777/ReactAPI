import React from 'react';
import HomePage from './pages/homepage/HomePage';
import NotfoundPage from './pages/notfoundpage/NotfoundPage';
import ProductListPage from './pages/productlistpage/ProductListPage';
import ProductActionPage from './pages/productactionpage/ProductActionPage';

const routes = [
   {
      path: '/',
      exact: true,
      main: () => <HomePage />
   },
   {
      path: '/product-list',
      exact: false,
      main: () => <ProductListPage />
   },
   {
      path: '/product/add',
      exact: false,
      main: ({ history }) => <ProductActionPage history={history} />
   },
   {
      path: '/product/:id/edit',
      exact: false,
      main: ({ match, history }) => <ProductActionPage match={match} history={history} />
   },
   {
      path: '',
      exact: false,
      main: () => <NotfoundPage />
   }
];

export default routes;