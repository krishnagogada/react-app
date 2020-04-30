import React from 'react';
import { observer } from 'mobx-react';

import {
    ProductInOrdersHistory,
    RemoveProduct,
    ProductImageInOrdersHistory,
    ProductPriceDetails,
    ProductTitle,
    ProductDescription,
    ProductQuantity,
    ProductPrice
}
from './styledComponent.js';

@observer
class ProductInHistory extends React.Component {

    onRemoveOrderedProductFromHistory = () => {
        const { product, onRemoveOrderedProductFromHistory } = this.props;
        onRemoveOrderedProductFromHistory(product.cartItemId);
    }

    render() {
        const { product, getProductDetailsById } = this.props;
        const productDetails = getProductDetailsById(product.productId);
        return (
            <div>
                <hr/>
                <ProductInOrdersHistory>
                    <RemoveProduct onClick={this.onRemoveOrderedProductFromHistory}>x</RemoveProduct>
                    <ProductImageInOrdersHistory src={productDetails[0].imageURL} alt={productDetails[0].title}/>
                    <ProductPriceDetails>
                        <ProductTitle>{productDetails[0].title}</ProductTitle>
                        <ProductDescription>{productDetails[0].printStyle}</ProductDescription>
                        <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
                    </ProductPriceDetails>
                    <ProductPrice>₹ {productDetails[0].price}</ProductPrice>
                </ProductInOrdersHistory>
            </div>
        );
    }
}

export default ProductInHistory;
