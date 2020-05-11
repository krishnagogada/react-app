import React from 'react';
import { observer, inject } from 'mobx-react';
import CookieConsent from "react-cookie-consent";

import ProductCart from '../../../Cart/components/ProductCart/index.js';
import ShowAndHideMenu from '../../../Menu/components/ShowAndHideMenu/index.js';

import SizeFilter from '../SizeFilter/index.js';
import Header from '../Header/index.js';
import ProductList from '../ProductList/index.js';
import { ToastContainer, Slide } from 'react-toastify';

import { ECommerceStoreContainer, SignOutButton, SizesAndProducts, HeaderAndProductList } from './styledComponent.js';

@inject("productStore")
@observer
class ProductPage extends React.Component {

    render() {

        const { onClickSignOut } = this.props;

        console.log(this.props.onClickSignOut, 1);

        const {
            sizeFilter,
            onSelectSize,
            onChangeSortBy,
            totalNoOfProductsDisplayed,
            onChangeSearchText,
            sortedAndFilteredProducts,
            productList,
            getProductListAPIError,
            getProductListAPIStatus,
            getProductList
        } = this.props.productStore;
        return (
            <ECommerceStoreContainer>
                    <ShowAndHideMenu/>
                    <SignOutButton onClick={onClickSignOut} data-testid='sign-out-button'>Sign Out</SignOutButton>
                    <ProductCart />
                    <SizesAndProducts>
                        <SizeFilter sizeFilter={sizeFilter} onSelectSize={onSelectSize}/>
                        <HeaderAndProductList>
                            <Header onChangeSortBy={onChangeSortBy} totalNoOfProductsDisplayed={totalNoOfProductsDisplayed}
                                onChangeSearchText={onChangeSearchText}/>
                            <ProductList sortedAndFilteredProducts={sortedAndFilteredProducts} productList={productList}
                                        getProductListAPIError={getProductListAPIError} getProductListAPIStatus={getProductListAPIStatus}
                                        getProductList={getProductList} />
                        </HeaderAndProductList>
                    </SizesAndProducts>
                    <ToastContainer hideProgressBar={true} autoClose={3000} closeButton={false} transition={Slide} position="bottom-center"/>
                    <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
                </ECommerceStoreContainer>
        );
    }
}

export default ProductPage;
