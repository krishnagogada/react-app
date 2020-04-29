import React from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";
import SizeFilter from '../SizeFilter/index.js';
import ProductCart from '../../../Cart/components/ProductCart/index.js';
import Header from '../Header/index.js';
import ProductList from '../ProductList/index.js';
import { getAccessToken } from '../../../Authentication/utils/StorageUtils';
import { ECommerceStoreContainer, SignOutButton, SizesAndProducts, HeaderAndProductList } from './styledComponent.js';

@inject("authStore")
@inject("productStore")
@observer
class ProductPage extends React.Component {

    componentDidMount() {

        const { productStore } = this.props;
        productStore.getProductList();

    }

    onClickSignIn = () => {

        const { authStore } = this.props;
        authStore.userSignOut();
        const { history } = this.props;
        history.replace("/ecommerce-store/sign-in/");

    }

    render() {
        const { productStore, cartStore } = this.props;
        if (getAccessToken()) {
            return (
                <ECommerceStoreContainer>
                <SignOutButton onClick={this.onClickSignIn} data-testid='sign-out-button'>Sign Out</SignOutButton>
                <ProductCart/>
                <SizesAndProducts>
                    <SizeFilter sizeFilter={productStore.sizeFilter} onSelectSize={productStore.onSelectSize}/>
                    <HeaderAndProductList>
                        <Header onChangeSortBy={productStore.onChangeSortBy} totalNoOfProductsDisplayed={productStore.totalNoOfProductsDisplayed}/>
                        <ProductList sortedAndFilteredProducts={productStore.sortedAndFilteredProducts} productList={productStore.productList}
                                        getProductListAPIError={productStore.getProductListAPIError} getProductListAPIStatus={productStore.getProductListAPIStatus}/>
                    </HeaderAndProductList>
                </SizesAndProducts>
                <CookieConsent>
    This website uses cookies to enhance the user experience.
</CookieConsent>
            </ECommerceStoreContainer>);
        }
        else {
            return (
                <Redirect to = { {pathname: '/ecommerce-store/sign-in/' }} />);
        }


    }
}

export default ProductPage;
