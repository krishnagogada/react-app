/*global jest*/
/*global expect*/
import CartStore from '.';
import ProductStore from '../../../Products/stores/ProductStore/index.js';

describe('cart store tests', () => {
    let productStore;
    let cartStore;

    beforeEach(() => {
        productStore = new ProductStore();
        cartStore = new CartStore(productStore);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should test initialization', () => {
        expect(cartStore.cartProductList).toStrictEqual(new Array());
        expect(cartStore.ordersHistoryList).toStrictEqual(new Array());
        expect(cartStore.productStore).toBe(productStore);
    });

    it('should test add to cart', () => {
        cartStore.onClickAddToCart(12);
        expect(cartStore.cartProductList.length).toBe(1);
        cartStore.onClickAddToCart(12);
        expect(cartStore.cartProductList.length).toBe(1);
        expect(cartStore.cartProductList[0].quantity).toBe(2);
    });

    it('should test remove item from cart', () => {
        cartStore.onClickAddToCart(12);
        const cartItemId = cartStore.cartProductList[0].cartItemId;
        cartStore.onRemoveCartItem(cartItemId);
        expect(cartStore.cartProductList.length).toBe(0);
    });

    it('should test remove ordered product from history', () => {
        cartStore.onClickAddToCart(12);
        const cartItemId = cartStore.cartProductList[0].cartItemId;
        cartStore.clearCart();
        cartStore.onRemoveOrderedProductFromHistory(cartItemId);
        expect(cartStore.ordersHistoryList.length).toBe(0);
    });

    it('should test clear cart', () => {
        window.alert = jest.fn();
        cartStore.onClickAddToCart(12);
        cartStore.clearCart();
        expect(cartStore.ordersHistoryList.length).toBe(1);
        expect(cartStore.cartProductList.length).toBe(0);
        expect(window.alert).toHaveBeenCalledWith('Thank You For Shopping With Us.\nYour products will be delivered with in 3 days to the address mentioned in your profile.');
    });

    it('should test product details by product id', () => {

        const products = [{
            id: 1,
            price: 420,
            availableSizes: ['S'],
            title: 'black T-shirt',
        }, {
            id: 2,
            price: 220,
            availableSizes: ['M'],
            title: 'Red T-shirt',
        }, {
            id: 3,
            price: 320,
            availableSizes: ['S', 'XS'],
            title: 'black-yellow T-shirt',
        }];

        cartStore.productStore.setProductListResponse(products);
        const randomProduct = cartStore.productStore.productList[2];
        const productId = randomProduct.productId;
        const returedProduct = (cartStore.getProductDetailsById(productId)[0]);
        expect(returedProduct).toEqual(randomProduct);
    });

    it('should test total cart amount', () => {
        const products = [{
            id: 1,
            price: 420,
            availableSizes: ['S'],
            title: 'black T-shirt',
        }, {
            id: 2,
            price: 220,
            availableSizes: ['M'],
            title: 'Red T-shirt',
        }, {
            id: 3,
            price: 320,
            availableSizes: ['S', 'XS'],
            title: 'black-yellow T-shirt',
        }];
        cartStore.productStore.setProductListResponse(products);
        cartStore.onClickAddToCart(1);
        cartStore.onClickAddToCart(3);
        cartStore.onClickAddToCart(2);
        expect(cartStore.totalCartAmount).toBe("960.00");
    });

    it('should test number of products in cart', () => {
        cartStore.onClickAddToCart(12);
        cartStore.onClickAddToCart(13);
        cartStore.onClickAddToCart(12);
        cartStore.onClickAddToCart(12);
        cartStore.onClickAddToCart(14);
        expect(cartStore.noOfProductsInCart).toBe(5);
    });

});
