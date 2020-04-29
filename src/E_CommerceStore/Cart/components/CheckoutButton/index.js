import React from 'react';
import ClearCart from './styledComponent.js';

function CheckoutButton(props) {

    return (
        <ClearCart onClick={props.clearCart} isDisable={props.total===0}>CHECKOUT</ClearCart>
    );
}

export default CheckoutButton;
