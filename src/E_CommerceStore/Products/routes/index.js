import React from 'react';
import { PRODUCT_PAGE_PATH } from '../constants/routeConstants/RouteConstants.js';
import { ProtectedRoute } from '../../../Common/ProtectedRoute/index.js';
import ProductPageRoute from './ProductsPageRoute.js';
import { Route } from 'react-router-dom';

//export const ProductPageRoutes = <Route path={PRODUCT_PAGE_PATH} component={ProductPageRoute}/>;
export const productPageRoutes = <ProtectedRoute path={PRODUCT_PAGE_PATH} component={ProductPageRoute}/>
