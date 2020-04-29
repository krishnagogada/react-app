import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import CartList from '../CartList/index.js';
import SubTotal from '../SubTotal/index.js';
import CheckoutButton from '../CheckoutButton/index.js';
import {
    CartContainer,
    CartImageAndNumberOFProducts,
    NumberOfProductsInCart,
    CartContainerWhenOpen,
    ButtonToHideCart,
    CartListContainer,
    CartImageAndNumberOFProductsWhenOpen,
    StylesForBothCartImageAndNumberOfProducts,
    NumberOfProductsInCartWhenOpen,
    CartHeading,
    TotalCartListStylesContainer,
    MessageToAddItems,
    SubTotalAndCheckOutContainer
}
from './styledComponent.js';

@inject('cartStore')
@observer
class ProductCart extends React.Component {
    @observable shouldDisplayCart = true;

    showCart = () => {
        this.shouldDisplayCart = false;
    }

    hideCart = () => {
        this.shouldDisplayCart = true;
    }
    render() {
        const { cartStore } = this.props;
        return (
            <CartContainer>
                {this.shouldDisplayCart ?
                <CartImageAndNumberOFProducts onClick={this.showCart} data-testid='cart-open-button'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </span>
                <NumberOfProductsInCart>{cartStore.noOfProductsInCart}</NumberOfProductsInCart>
                </CartImageAndNumberOFProducts>
                     :
                    <CartContainerWhenOpen data-testid='cart-close-button'>
                        <ButtonToHideCart onClick={this.hideCart} data-testid='remove-cart-item'>X</ButtonToHideCart>
                        <CartListContainer>
                            <CartImageAndNumberOFProductsWhenOpen>
                                <StylesForBothCartImageAndNumberOfProducts>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                    </span>
                                    <NumberOfProductsInCartWhenOpen>{cartStore.noOfProductsInCart}</NumberOfProductsInCartWhenOpen>
                                </StylesForBothCartImageAndNumberOfProducts>
                                <CartHeading>Cart</CartHeading>
                            </CartImageAndNumberOFProductsWhenOpen>
                            <TotalCartListStylesContainer>
                            {cartStore.cartProductList.length!==0 ?
                                <CartList/>:
                                <MessageToAddItems>Add some products in the cart</MessageToAddItems>}
                            </TotalCartListStylesContainer>
                            <SubTotalAndCheckOutContainer class="absolute bottom-0 right-0 p-4 w-11/12 total-checkout bg-gray-800 shadow-inner">
                                <SubTotal price={cartStore.totalCartAmount}/>
                                <CheckoutButton total={cartStore.totalCartAmount} clearCart={cartStore.clearCart}/>
                            </SubTotalAndCheckOutContainer>
                        </CartListContainer>
                    </CartContainerWhenOpen>
                    }
                </CartContainer>
        );
    }
}

export default ProductCart;
