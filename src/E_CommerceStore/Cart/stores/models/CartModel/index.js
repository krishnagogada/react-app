import { observable } from 'mobx';

class CartModel {
    @observable cartItemId
    @observable productId
    @observable quantity

    constructor(cartObject) {

        this.cartItemId = cartObject.id;
        this.productId = cartObject.productId;
        this.quantity = cartObject.quantity;

    }

    incrementQuantity() {
        this.quantity += 1;
    }

}

export default CartModel;
