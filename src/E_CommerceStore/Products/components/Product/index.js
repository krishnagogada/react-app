import React from 'react';
import { observer, inject } from 'mobx-react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ProductContainer,
    FreeShipping,
    ProductImage,
    ProductTitle,
    DividedLine,
    Price,
    Rupee,
    IntegerOfPrice,
    DecimalOfPrice,
    Installments,
    CartButton
}
from './styledComponent.js';

@inject("cartStore")
@observer
class Product extends React.Component {

    onClickAddToCart = () => {

        toast.warn("Product added to your cart");
        const { cartStore, product } = this.props;
        cartStore.onClickAddToCart(product.productId);

    }
    render() {
        const { product } = this.props;
        return (
            <ProductContainer id={product.productId}>
                {product.isFreeShipping ? 
                <FreeShipping>Free shipping</FreeShipping>:undefined}
                <ProductImage src={product.imageURL} alt={product.title}/>
                <ProductTitle>{product.title}</ProductTitle>
                <DividedLine></DividedLine>
                <Price>
                    <Rupee>₹</Rupee>
                    <IntegerOfPrice>{Math.round(product.price)}</IntegerOfPrice>.
                    <DecimalOfPrice>{product.price.toString().slice(-2)}</DecimalOfPrice>
                </Price>
                <Installments>or {product.installmentsCount} x ₹ {(product.price/product.installmentsCount).toFixed(2)}</Installments>
                <CartButton onClick={this.onClickAddToCart}>Add to cart</CartButton>
                <ToastContainer hideProgressBar={true} autoClose={3000} closeButton={false} transition={Slide} position={toast.POSITION.BOTTOM_CENTER}/>
            </ProductContainer>
        );
    }
}
export default Product;
