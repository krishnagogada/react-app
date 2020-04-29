import React from 'react';
import { observer, inject } from 'mobx-react';
import Product from '../Product/index.js';
import Products from './styledComponent.js';
import LoadingWrapperWithFailure from '../../../../Common/LoadingWrapper/LoadingWrapperWithFailure/index.js';
import NoDataView from '../../../../Common/LoadingWrapper/NoDataView/index.js';

@inject('productStore')
@observer
class ProductList extends React.Component {

    componentDidMount() {
        this.doNetworkCalls();
    }

    doNetworkCalls = () => {
        const { productStore } = this.props;
        productStore.getProductList();
    }

    renderProductList = observer(() => {

        const { productList, sortedAndFilteredProducts } = this.props;
        if (productList.length === 0) {
            return <NoDataView/>;
        }
        else {
            return (
                <Products>
                    {sortedAndFilteredProducts.map((eachProduct)=>{ return <Product product={eachProduct}/>})}
                </Products>);
        }
    })

    render() {

        const { getProductListAPIStatus, getProductListAPIError } = this.props;

        return (
            <LoadingWrapperWithFailure
                apiStatus={getProductListAPIStatus}
                apiError={getProductListAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderProductList}
                />
        );
    }
}
export default ProductList;
