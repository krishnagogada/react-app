import React from 'react';
import { observer, inject } from 'mobx-react';
import CartItem from '../CartItem/index.js';
import CartListContainer from './styledComponent.js';

@inject('cartStore')
@observer
class CartList extends React.Component {
    render() {
        const { cartStore } = this.props;
        return (
            <CartListContainer>
            {cartStore.cartProductList.map((eachCartProduct)=>{return <CartItem cartProduct={eachCartProduct} onRemoveCartItem={cartStore.onRemoveCartItem}
                getProductDetailsById={cartStore.getProductDetailsById}/>})}
            </CartListContainer>
        );
    }
}
export default CartList;
