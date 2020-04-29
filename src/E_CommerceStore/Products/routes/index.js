import React from 'react';
import { PRODUCT_PAGE_PATH } from '../constants/routeConstants/RouteConstants.js';
import ProductPage from '../components/ProductsPage/index.js';
import { Route } from 'react-router-dom';

export const ProductPageRoutes = <Route path={PRODUCT_PAGE_PATH} component={ProductPage}/>;
