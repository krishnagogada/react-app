import { observable, action } from 'mobx';

import gridMeasurements from '../../Jsons/GridGameJson/GridMeasurements.json';
import GridModel from '../models/GridModel/index.js';

class GridStore {
    @observable level = 0
    @observable topLevel = 0
    @observable currentLevelGridCells = []
    @observable selectedCellsCount = 0
    @observable isGameCompleted = false
    @observable timerId = 0
    @observable livesTimerId = 0
    @observable lives = 5

    @action.bound
    onCellClick(id) { //When User Click The Cell This Method Will Call And Decides The Status 

        this.currentLevelGridCells.map((eachOject) => {
            if (eachOject.id === id && eachOject.isHidden) {
                this.incrementSelectedCellsCount();
                if (this.selectedCellsCount == gridMeasurements[this.level].gridSize && this.level === 7) {
                    this.isGameCompleted = true;
                }
                else if (this.selectedCellsCount === gridMeasurements[this.level].hiddenCellCount) {
                    // console.log(this.selectedCellsCount,)
                    setTimeout(this.goToNextLevelAndUpdateCells, 150);
                }
            }
            else if (eachOject.id === id && !eachOject.isHidden && this.lives <= 0) {

                clearTimeout(this.livesTimerId);
                setTimeout(this.goToInitialLevelAndUpdateCells, 150);

            }
            else if (eachOject.id === id && !eachOject.isHidden) {

                this.lives -= 1;
                setTimeout(this.setGridCells, 150);
            }
        });

    }

    @action.bound
    setGridCells() {

        clearTimeout(this.timerId);

        this.currentLevelGridCells = [];

        //------------------------------------>Creating Grid Cells<------------------------

        for (let index = 0; index < (gridMeasurements[this.level].gridSize) * (gridMeasurements[this.level].gridSize); index++) {
            let cellModel;
            let id = Math.floor(Math.random() * 1000000);
            if (index < gridMeasurements[this.level].gridSize) {
                cellModel = new GridModel(id, true);
            }
            else {
                cellModel = new GridModel(id, false);
            }
            this.currentLevelGridCells.push(cellModel);
        }

        //---------------------------------->Shuffle The Cells<------------------------------

        for (let index1 = this.currentLevelGridCells.length - 1; index1 > 0; index1--) {

            let index2 = Math.floor(Math.random() * (index1 + 1));
            let temp = this.currentLevelGridCells[index1];
            this.currentLevelGridCells[index1] = this.currentLevelGridCells[index2];
            this.currentLevelGridCells[index2] = temp;
        }

        this.timerId = setTimeout(() => { this.goToInitialLevelAndUpdateCells() }, ((gridMeasurements[this.level].gridSize * 2) + gridMeasurements[this.level].gridSize) * 1000);
    }

    @action.bound
    goToNextLevelAndUpdateCells() {

        this.level = this.level + 1;
        this.currentLevelGridCells = [];
        this.resetSelectedCellsCount();
        this.setGridCells();
    }

    @action.bound
    goToInitialLevelAndUpdateCells() {

        this.setTopLevel();
        this.resetGame();

    }

    @action.bound
    resetSelectedCellsCount() {

        this.selectedCellsCount = 0;

    }

    @action.bound
    incrementSelectedCellsCount() {

        this.selectedCellsCount = this.selectedCellsCount + 1;

    }

    @action.bound
    onPlayAgainClick() {

        this.setTopLevel();
        this.resetGame();

    }

    @action.bound
    resetGame() {

        this.level = 0;
        this.lives = 5;
        this.currentLevelGridCells = [];
        this.resetSelectedCellsCount();
        this.isGameCompleted = false;
        this.setGridCells();

    }

    @action.bound
    setTopLevel() {

        if (this.level > this.topLevel) {
            this.topLevel = this.level;
        }

    }
}

const gridStore = new GridStore();

export default gridStore;
