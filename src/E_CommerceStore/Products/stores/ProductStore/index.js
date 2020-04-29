import { observable, action, computed } from 'mobx';
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import ProductModel from '../models/ProductModel/index.js';

class ProductStore {

    @observable productList = [];
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable ProductListAPIService;
    @observable sizeFilter = [];
    @observable sortBy = 'select';

    constructor(productsApiService) {

        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.ProductListAPIService = productsApiService;

    }

    @action.bound
    getProductList() {

        const productListPromise = this.ProductListAPIService.getProductsAPI();


        return bindPromiseWithOnSuccess(productListPromise)
            .to(this.setGetProductListAPIStatus, this.setProductListResponse)
            .catch(this.setGetProductListAPIError);
    }

    @action.bound
    setProductListResponse(productListResponse) {

        this.productList = productListResponse.map((eachProduct) => {

            return new ProductModel(eachProduct);

        });
    }

    @action.bound
    setGetProductListAPIError(error) {
        this.getProductListAPIError = error;
    }

    @action.bound
    setGetProductListAPIStatus(apiStatus) {
        this.getProductListAPIStatus = apiStatus;
    }

    @action.bound
    onChangeSortBy(sortMethod) {

        this.sortBy = sortMethod;

    }

    @action.bound
    onSelectSize(selectedSize) {

        const indexOfSelectedSize = this.sizeFilter.indexOf(selectedSize);

        if (indexOfSelectedSize === -1) {
            this.sizeFilter.push(selectedSize);
        }
        else {
            this.sizeFilter.splice(indexOfSelectedSize, 1);
        }
    }

    @computed get products() {

        let filteredProducts = [];

        if (this.sizeFilter.length !== 0) {

            this.sizeFilter.map((eachSize) => {

                const filteredProductsBySizeFilter = this.productList.filter((eachProduct) => {
                    return eachProduct.availableSizes.indexOf(eachSize) !== -1;
                });

                filteredProducts = [...filteredProducts, ...filteredProductsBySizeFilter];
                filteredProducts = [...new Set(filteredProducts)];

            });

        }
        else {

            filteredProducts = this.productList;
        }

        if (this.sortBy === 'ASCENDING') {

            filteredProducts = filteredProducts.sort(function(a, b) { return a.price - b.price });

        }
        else if (this.sortBy === 'DESCENDING') {

            filteredProducts = filteredProducts.sort(function(a, b) { return a.price - b.price });
            filteredProducts.reverse();

        }

        return filteredProducts;
    }

    @computed get sortedAndFilteredProducts() {

        return this.products;

    }

    @computed get totalNoOfProductsDisplayed() {

        return this.products.length;

    }

}

export default ProductStore;
