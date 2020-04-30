import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { SortPriceAndNumberOfProducts, NumberOfProducts, SearchBar, SortLabel, SortSelector, OptionsForSort } from './styledComponent.js';

@observer
class Header extends React.Component {

    @observable searchText = ''

    onSelectSortBy = (event) => {

        const { onChangeSortBy } = this.props;
        onChangeSortBy(event.target.value);

    }

    onChangeInput = (event) => {
        const { onChangeSearchText } = this.props;
        onChangeSearchText(event.target.value);
    }

    render() {

        const { totalNoOfProductsDisplayed } = this.props;

        return (
            <SortPriceAndNumberOfProducts>
                <NumberOfProducts>{totalNoOfProductsDisplayed} Product(s) found. </NumberOfProducts>
                <SearchBar defaultValue={this.searchText} onChange = {this.onChangeInput} placeholder='Search your products'/>
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
