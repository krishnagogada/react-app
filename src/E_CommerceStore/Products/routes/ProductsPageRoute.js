import React from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import { getAccessToken } from '../../Authentication/utils/StorageUtils';

import ProductPage from '../components/ProductsPage/index.js';
import 'react-toastify/dist/ReactToastify.css';



@inject("authStore", "productStore")
@observer
class ProductPageRoute extends React.Component {

    componentDidMount() {

        const { productStore } = this.props;
        productStore.getProductList();

    }

    onClickSignOut = () => {

        const { authStore } = this.props;
        authStore.userSignOut();
        const { history } = this.props;
        history.replace("/ecommerce-store/sign-in/");

    }

    render() {
        return <ProductPage onClickSignOut={this.onClickSignOut}/>;
    }
}

export default ProductPageRoute;
