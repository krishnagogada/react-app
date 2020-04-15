import React from 'react';
import Cell from '../Cell/index.js';

class GameField extends React.Component {
    render() {
        const { cells, onCellClick, level } = this.props;
        return (
            <div>
                {cells.map((cell)=>{return <Cell cell={cell} level={level} onCellClick={onCellClick}/>})}
            </div>);
    }
}
export default GameField;
