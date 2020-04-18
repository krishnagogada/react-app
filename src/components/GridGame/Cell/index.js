import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import EachCell from './styledComponent.js';

@observer
class Cell extends React.Component {

    @observable shouldShowHiddenCells = true;
    @observable isClickedOnCell = false;

    onCellClick = () => {

        if (!this.isClickedOnCell && !this.shouldShowHiddenCells) {
            const { onCellClick, cell } = this.props;
            onCellClick(cell.id);
            this.isClickedOnCell = true;
        }

    }
    componentDidMount = () => {

        const { level } = this.props;
        setTimeout(() => { this.shouldShowHiddenCells = false }, (level + 3) * 1000);

    }
    render() {

        const { cell, cellWidth, selectedTheme } = this.props;

        return <EachCell onClick={this.onCellClick} isHidden={cell.isHidden} shouldShowHiddenCells={this.shouldShowHiddenCells}
                         isClickedOnCell={this.isClickedOnCell} selectedTheme={selectedTheme} cellWidth={cellWidth}></EachCell>;
    }

}

export default Cell;
