import React from 'react';
import { observer } from 'mobx-react';

import gridTheme from '../../../stores/GridThemeStore/index.js';
import gridStore from '../../../stores/GridStore/index.js';

import gridMeasurements from '../../../Jsons/GridGameJson/GridMeasurements.json';

import Header from '../Header/index.js';
import GameField from '../GameField/index.js';
import GameResult from '../GameResult/index.js';

import WholeGameContainer from './styledComponent.js';


@observer

class GridMemoryGame extends React.Component {

    constructor(props) {

        super(props);
        gridStore.setGridCells();

    }
    render() {
        let cellWidth = (gridMeasurements[gridStore.level].gridWidth / gridMeasurements[gridStore.level].gridSize) - 8;
        console.log(gridMeasurements[gridStore.level].gridWidth, cellWidth, gridStore.level)
        return (
            <WholeGameContainer selectedTheme={gridTheme.selectedTheme}>
                <Header selectedTheme={gridTheme.selectedTheme} topLevel={gridStore.topLevel} level={gridStore.level} onChangeSelectedTheme={gridTheme.onChangeSelectedTheme} width={gridMeasurements[gridStore.level].gridWidth}/>
                {console.log("memory")}
                {gridStore.isGameCompleted?<GameResult selectedTheme={gridTheme.selectedTheme} level={gridStore.level} timerId={gridStore.timerId} onPlayAgainClick={gridStore.onPlayAgainClick}/>:
                <GameField cells={gridStore.currentLevelGridCells} level={gridStore.level} onCellClick={gridStore.onCellClick} width={gridMeasurements[gridStore.level].gridWidth} cellWidth={cellWidth} selectedTheme={gridTheme.selectedTheme}/>}
            </WholeGameContainer>
        );
    }
}

export default GridMemoryGame;
