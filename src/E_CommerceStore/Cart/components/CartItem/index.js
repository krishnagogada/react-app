import React from 'react';
import { observer } from 'mobx-react';
import { ProductInCart, RemoveProduct, ProductImageInCart, ProductPriceDetails, ProductTitle, ProductDescription, ProductQuantity, ProductPrice } from './styledComponent.js';

@observer
class CartItem extends React.Component {
    onRemoveCartItem = () => {
        const { cartProduct, onRemoveCartItem } = this.props;
        onRemoveCartItem(cartProduct.cartItemId);
    }
    render() {
        const { cartProduct, getProductDetailsById } = this.props;
        const productDetails = getProductDetailsById(cartProduct.productId);
        return (
            <div>
                <hr/>
                <ProductInCart>
                    <RemoveProduct onClick={this.onRemoveCartItem}>x</RemoveProduct>
                    <ProductImageInCart src={productDetails[0].imageURL} alt={productDetails[0].title}/>
                    <ProductPriceDetails>
                        <ProductTitle>{productDetails[0].title}</ProductTitle>
                        <ProductDescription>{productDetails[0].printStyle}</ProductDescription>
                        <ProductQuantity>Quantity: {cartProduct.quantity}</ProductQuantity>
                    </ProductPriceDetails>
                    <ProductPrice>₹ {productDetails[0].price}</ProductPrice>
                </ProductInCart>
            </div>
        );
    }
}

export default CartItem;
