import React from 'react';
import Header from '../Header/index.js';
import GameField from '../GameField/index.js';
import gridTheme from '../../../stores/GridThemeStore/index.js';
import gridStore from '../../../stores/GridStore/index.js';
import { observer } from 'mobx-react';

@observer
class GridMemoryGame extends React.Component {
    constructor(props) {
        super(props);
        gridStore.setGridCells();
    }
    render() {
        return (
            <div>
                <Header selectedTheme={gridTheme.selectedTheme} topLevel={gridStore.topLevel} level={gridStore.level} onChangeSelectedTheme={gridTheme.onChangeSelectedTheme}/>
                <GameField cells={gridStore.currentLevelGridCells} level={gridStore.level} onCellClick={gridStore.onCellClick}/>
            </div>
        );
    }
}

export default GridMemoryGame;
