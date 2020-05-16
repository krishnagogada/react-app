import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { MenuContainer, MeanuIcon, MenuContainerWhenOpen, CloseButtonForMenu, HomeComponent, YourOrders } from './styledComponent.js';
import OrdersHistoryList from '../OrdersHistoryList/index.js';

@inject("cartStore")
@observer
class ShowAndHideMenu extends React.Component {
    @observable shouldDisplayMenu = true;
    @observable shouldDisplayYourOrders = true;
    showMenu = () => {
        this.shouldDisplayMenu = false;
    }
    hideMenu = () => {
        this.shouldDisplayMenu = true;
    }
    displayHistoryOrders = () => {
        this.shouldDisplayYourOrders = !this.shouldDisplayYourOrders;
    }
    render() {
        const { cartStore } = this.props;
        return (
            <MenuContainer>
            {this.shouldDisplayMenu ? 
                <MeanuIcon onClick={this.showMenu}>&#9776;</MeanuIcon> :
                <MenuContainerWhenOpen>
                   <CloseButtonForMenu onClick={this.hideMenu}>x</CloseButtonForMenu> 
                   <HomeComponent>Home</HomeComponent>
                   {this.shouldDisplayYourOrders ?
                    <YourOrders onClick={this.displayHistoryOrders}>Your Orders</YourOrders>:
                       <div>
                        <div onClick={this.displayHistoryOrders}>Your Orders</div>
                        <OrdersHistoryList ordersHistoryList={cartStore.ordersHistoryList} onRemoveOrderedProductFromHistory={cartStore.onRemoveOrderedProductFromHistory}
                                            getProductDetailsById={cartStore.getProductDetailsById}/>
                       </div>
                   }
                </MenuContainerWhenOpen>
            }
            </MenuContainer>
        );

    }
}

export default ShowAndHideMenu;
