import React from 'react';
import { observer } from 'mobx-react';
import CartItem from '../CartItem/index.js';
import CartListContainer from './styledComponent.js';

@observer
class CartList extends React.Component {
    render() {
        const { cartProductList, getProductDetailsById, onRemoveCartItem } = this.props;
        return (
            <CartListContainer>
            {cartProductList.map((eachCartProduct)=>{return <CartItem key ={Math.random()} cartProduct={eachCartProduct} onRemoveCartItem={onRemoveCartItem}
                getProductDetailsById={getProductDetailsById}/>})}
            </CartListContainer>
        );
    }
}
export default CartList;
