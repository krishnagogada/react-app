/*global jest*/
/*global expect*/
import Cookie from 'js-cookie';
import { API_INITIAL, API_SUCCESS, API_FAILED, API_FETCHING } from "@ib/api-constants";

import ProductService from "../../services/ProductService/index.api.js";
import getProducts from "../../fixtures/getProducts.json";

import ProductStore from '.';

let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;

describe('product store from E commerce', () => {
    let productsApiService;
    let productStore;

    beforeEach(() => {
        productsApiService = new ProductService();
        productStore = new ProductStore(productsApiService);
    });

    it('should test initialising product store', () => {
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);
        expect(productStore.productList).toStrictEqual(new Array());
        expect(productStore.sizeFilter).toStrictEqual(new Array());
        expect(productStore.sortBy).toBe('select');
        expect(productStore.searchText).toBe('');
    });

    it('should test fetching product store', () => {
        const mockLoadingPromise = new Promise((resolve, reject) => {});
        const mockproductAPI = jest.fn();
        mockproductAPI.mockReturnValue(mockLoadingPromise);
        productsApiService.getProductsAPI = mockproductAPI;

        productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);

    });

    it('should test product list success state', async() => {
        const mockSuccessPromise = new Promise((resolve, reject) => resolve(getProducts));
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productsApiService.getProductsAPI = mockProductAPI;

        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
        expect(productStore.productList.length).toBe(getProducts.length);
    });

    it('should test product list failure state', async() => {
        const mockFailurePromise = new Promise((resolve, reject) => reject(new Error('Error')));
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockFailurePromise);
        productsApiService.getProductsAPI = mockProductAPI;

        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
        expect(productStore.getProductListAPIError).toBe('Error');
    });

    it('should test sort by', () => {
        const filterType = 'ASCENDING';
        productStore.onChangeSortBy(filterType);
        expect(productStore.sortBy).toBe(filterType);
    });

    it('should test sizeFilter', () => {
        const selectedSize = 'S';
        productStore.onSelectSize(selectedSize);
        expect(productStore.sizeFilter).toStrictEqual(Array('S'));
        productStore.onSelectSize('M');
        expect(productStore.sizeFilter).toStrictEqual(Array('S', 'M'));
        productStore.onSelectSize(selectedSize);
        expect(productStore.sizeFilter).toStrictEqual(Array('M'));
    });

    it('should test search text', () => {
        const searchText = 'search-Text';
        productStore.onChangeSearchText(searchText);
        expect(productStore.searchText).toBe(searchText.toLowerCase());
    });

    it("should test products", () => {

        const products = [{
            price: 420,
            availableSizes: ['S'],
            title: 'black T-shirt',
        }, {
            price: 220,
            availableSizes: ['M'],
            title: 'Red T-shirt',
        }, {
            price: 320,
            availableSizes: ['S', 'XS'],
            title: 'black-yellow T-shirt',
        }];

        productStore.setProductListResponse(products);
        productStore.onChangeSortBy('DESCENDING');
        productStore.onSelectSize('S');
        productStore.onSelectSize('M');
        expect(productStore.sizeFilter).toStrictEqual(Array('S', 'M'));
        productStore.onChangeSearchText('b');

        let filteredProducts = [{
            price: 420,
            availableSizes: ['S'],
            title: 'black T-shirt',
        }, {
            price: 320,
            availableSizes: ['S', 'XS'],
            title: 'black-yellow T-shirt',
        }];

        expect(productStore.products).toEqual(filteredProducts);
        productStore.onChangeSortBy('ASCENDING');
        filteredProducts = [{
            price: 320,
            availableSizes: ['S', 'XS'],
            title: 'black-yellow T-shirt',
        }, {
            price: 420,
            availableSizes: ['S'],
            title: 'black T-shirt',

        }];
        expect(productStore.products).toEqual(filteredProducts);
    });

    it('should test sortedAndFilteredProducts', () => {
        const products = [{
            price: 420,
            availableSizes: ['S'],
            title: 'black T-shirt',
        }, {
            price: 220,
            availableSizes: ['M'],
            title: 'Red T-shirt',
        }, {
            price: 320,
            availableSizes: ['S', 'XS'],
            title: 'black-yellow T-shirt',
        }];

        productStore.setProductListResponse(products);
        productStore.onChangeSortBy('DESCENDING');
        productStore.onSelectSize('S');
        productStore.onSelectSize('M');
        expect(productStore.sizeFilter).toStrictEqual(Array('S', 'M'));
        productStore.onChangeSearchText('b');

        let filteredProducts = [{
            price: 420,
            availableSizes: ['S'],
            title: 'black T-shirt',
        }, {
            price: 320,
            availableSizes: ['S', 'XS'],
            title: 'black-yellow T-shirt',
        }];

        expect(productStore.sortedAndFilteredProducts).toEqual(filteredProducts);
    });

    it('should test number of products', () => {
        const products = [{
            price: 420,
            availableSizes: ['S'],
            title: 'black T-shirt',
        }, {
            price: 220,
            availableSizes: ['M'],
            title: 'Red T-shirt',
        }, {
            price: 320,
            availableSizes: ['S', 'XS'],
            title: 'black-yellow T-shirt',
        }];

        productStore.setProductListResponse(products);
        expect(productStore.totalNoOfProductsDisplayed).toBe(3);
    });

});
