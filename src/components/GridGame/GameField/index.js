import React from 'react';
import { observer } from 'mobx-react';

import Cell from '../Cell/index.js';

import Grid from './styledComponent.js';


@observer
class GameField extends React.Component {

    render() {

        const { cells, onCellClick, level, cellWidth, width, selectedTheme } = this.props;
        // alert(cellWidth);

        return (
            <Grid width={width}>
                {cells.map((cell)=>{ return <Cell key={Math.random()} cell={cell} level={level} onCellClick={onCellClick} cellWidth={cellWidth} selectedTheme={selectedTheme}/>})}
            </Grid>);
    }

}

export default GameField;
