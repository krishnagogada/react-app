import { observable, action, computed } from 'mobx';
import CartModel from '../models/CartModel/index.js';

class CartStore {

    @observable cartProductList
    @observable productStore
    @observable ordersHistoryList

    constructor(productStoreInstance) {

        this.productStore = productStoreInstance;
        this.cartProductList = [];
        this.ordersHistoryList = [];

    }

    @action.bound
    onClickAddToCart(productId) {

        let count = 0;
        this.cartProductList.forEach((eachProduct) => {

            if (eachProduct.productId === productId) {
                eachProduct.incrementQuantity();
            }
            else {
                count++;
            }

        });
        if (count === this.cartProductList.length) {

            const cartObject = {
                id: Math.random(),
                productId: productId,
                quantity: 1
            };

            this.cartProductList.push(new CartModel(cartObject));

        }
    }

    @action.bound
    onRemoveCartItem(cartItemId) {

        let removedCartProductList = this.cartProductList.filter((eachCartProduct) => { return !(eachCartProduct.cartItemId === cartItemId) });
        this.cartProductList = removedCartProductList;

    }

    @action.bound
    onRemoveOrderedProductFromHistory(cartItemId) {
        let removedordersHistoryList = this.ordersHistoryList.filter((eachCartProduct) => { return !(eachCartProduct.cartItemId === cartItemId) });
        this.ordersHistoryList = removedordersHistoryList;
    }

    @action.bound
    clearCart() {

        this.ordersHistoryList.push(...this.cartProductList);
        this.cartProductList = [];
        alert('Thank You For Shopping With Us.\nYour products will be delivered with in 3 days to the address mentioned in your profile.');
    }

    @action.bound
    getProductDetailsById(productId) {

        const productDetails = this.productStore.productList.filter((eachProduct) => {
            return eachProduct.productId === productId;
        });

        return productDetails;
    }

    @computed get totalCartAmount() {

        let totalCartAmount = 0;
        this.cartProductList.forEach((eachProduct) => {
            totalCartAmount += (eachProduct.quantity * (this.getProductDetailsById(eachProduct.productId)[0].price));
        });

        return totalCartAmount.toFixed(2);
    }

    @computed get noOfProductsInCart() {

        let noOfProductsInCart = 0;
        this.cartProductList.forEach((eachProduct) => {
            noOfProductsInCart += (eachProduct.quantity);
        });

        return noOfProductsInCart;
    }
}

export default CartStore;
