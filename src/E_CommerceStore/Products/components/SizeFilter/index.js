import React from 'react';
import { observer, inject } from 'mobx-react';
import { Sizes, SizeHeading, SizeButton } from './styledComponent';

@observer
class SizeFilter extends React.Component {

    onSelectSize = (event) => {

        const { onSelectSize } = this.props;
        onSelectSize(event.target.value);

    }

    render() {
        const { sizeFilter } = this.props;
        return (
            <Sizes>
                <SizeHeading>Sizes:</SizeHeading>
                <SizeButton onClick={this.onSelectSize} value={'XS'} isSelected={sizeFilter.indexOf('XS')===-1}>XS</SizeButton>
                <SizeButton onClick={this.onSelectSize} value={'S'} isSelected={sizeFilter.indexOf('S')===-1}>S</SizeButton>
                <SizeButton onClick={this.onSelectSize} value={'M'} isSelected={sizeFilter.indexOf('M')===-1}>M</SizeButton>
                <SizeButton onClick={this.onSelectSize} value={'L'} isSelected={sizeFilter.indexOf('L')===-1}>L</SizeButton>
                <SizeButton onClick={this.onSelectSize} value={'XL'} isSelected={sizeFilter.indexOf('XL')===-1}>XL</SizeButton>
                <SizeButton onClick={this.onSelectSize} value={'XXL'} isSelected={sizeFilter.indexOf('XXL')===-1}>XXL</SizeButton>
            </Sizes>
        );
    }
}
export default SizeFilter;
