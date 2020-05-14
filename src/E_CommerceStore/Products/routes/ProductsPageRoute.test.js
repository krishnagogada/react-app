import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'mobx-react';
import { createMemoryHistory } from "history";

import { PRODUCT_PAGE_PATH } from '../constants/routeConstants/RouteConstants.js';
import { SIGN_IN_PATH } from '../../Authentication/constants/routeConstants/RouteConstants.js';
import CartStore from '../../Cart/stores/CartStore/index.js';

import getProducts from "../fixtures/getProducts.json";
import ProductService from '../services/ProductService/index.api.js';
import ProductStore from '../stores/ProductStore/index.js';

import ProductPageRoute from './ProductPageRoute.js';

describe('Products page route tests', () => {
    before(() => {

    });
});
