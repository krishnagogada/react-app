import { observable, action, computed } from 'mobx';
import CartModel from '../models/CartModel/index.js';

class CartStore {

    @observable cartProductList
    @observable productStore

    constructor(productStoreInstance) {

        this.productStore = productStoreInstance;
        this.cartProductList = [];

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
    clearCart() {

        this.cartProductList = [];

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
