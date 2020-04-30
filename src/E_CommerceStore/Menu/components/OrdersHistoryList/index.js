import React from 'react';
import { observer } from 'mobx-react';
import ProductInHistory from '../ProductInHistory/index.js';
import OrdersHistoryListContainer from './styledComponent.js';

@observer
class OrdersHistoryList extends React.Component {
    render() {
        const { ordersHistoryList, onRemoveOrderedProductFromHistory, getProductDetailsById } = this.props;
        return (
            <OrdersHistoryListContainer>
                {ordersHistoryList.map((eachProduct)=>{return <ProductInHistory product={eachProduct} onRemoveOrderedProductFromHistory={onRemoveOrderedProductFromHistory}
                                            getProductDetailsById={getProductDetailsById}/>})}
            </OrdersHistoryListContainer>
        );
    }
}

export default OrdersHistoryList;
