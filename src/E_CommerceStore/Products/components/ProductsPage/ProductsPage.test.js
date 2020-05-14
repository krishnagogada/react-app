import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'mobx-react';

import ProductPage from './index.js';
import getProducts from "../../fixtures/getProducts.json";
import ProductService from '../../services/ProductService/index.api.js';
import ProductStore from '../../stores/ProductStore/index.js';
import CartStore from '../../../Cart/stores/CartStore/index.js';

describe('Product page tests', () => {
    let productService;
    let productStore;

    beforeEach(() => {
        productService = new ProductService();
        productStore = new ProductStore(productService);
    });

    it('should test sign out button', () => {
        const { getByRole } = render(
            <Provider productStore={productStore} cartStore={new CartStore}>
                    <ProductPage/>
                </Provider>
        );
        getByRole('button', { name: 'Sign Out' });
    });

    it('should test cart sidenav bar', () => {
        const { getByTestId } = render(
            <Provider productStore={productStore} cartStore={new CartStore}>
                    <ProductPage/>
                </Provider>
        );
        getByTestId('cart-open-button');
    });

    it('should test sizes', () => {
        const { getByText, getByRole } = render(
            <Provider productStore={productStore} cartStore={new CartStore}>
                    <ProductPage/>
                </Provider>
        );
        getByText('Sizes:');
        getByRole('button', { name: 'XS' });
        getByRole('button', { name: 'S' });
        getByRole('button', { name: 'M' });
        getByRole('button', { name: 'L' });
        getByRole('button', { name: 'XL' });
        getByRole('button', { name: 'XXL' });
    });

    it('should test Header', () => {
        productStore.setProductListResponse(getProducts);
        const { getByText, getByPlaceholderText } = render(
            <Provider productStore={productStore} cartStore={new CartStore}>
                    <ProductPage/>
                </Provider>
        );
        getByText('16 Product(s) found.');
        getByPlaceholderText('Search your products');
        getByText('Sort price by:');
    });



});
