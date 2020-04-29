import React from 'react';
import { observer, inject } from 'mobx-react';
import { SortPriceAndNumberOfProducts, NumberOfProducts, SortLabel, SortSelector, OptionsForSort } from './styledComponent.js';

@inject('productStore')
@observer
class Header extends React.Component {

    onSelectSortBy = (event) => {

        const { onChangeSortBy } = this.props;
        onChangeSortBy(event.target.value);

    }
    render() {

        const { totalNoOfProductsDisplayed } = this.props;

        return (
            <SortPriceAndNumberOfProducts>
                <NumberOfProducts>{totalNoOfProductsDisplayed} Product(s) found. </NumberOfProducts>
                <SortLabel>Sort price by:  
                    <SortSelector onChange={this.onSelectSortBy} >
                        <OptionsForSort hidden={true}>Select</OptionsForSort>
                        <OptionsForSort value="ASCENDING">Lowest to highest</OptionsForSort>
                        <OptionsForSort value="DESCENDING">Highest to lowest</OptionsForSort>
                    </SortSelector>
                </SortLabel>
            </SortPriceAndNumberOfProducts>
        );
    }
}
export default Header;
