import { observable } from 'mobx';
import GridModel from '../models/GridModel/index.js';

class GridStore {
    @observable level = 0
    @observable topLevel = 0
    @observable currentLevelGridCells = []
    @observable selectedCellsCount = 0
    @observable isGameCompleted = false

    onCellClick = () => {

    }
    setGridCells = () => {
        let id = Math.random();
        for (let i = 0; i < (this.level + 3) * (this.level + 3); i++) {
            const cellModel = new GridModel(id, false);
            this.currentLevelGridCells.push(cellModel);
        }
    }

}
const gridStore = new GridStore();
export default gridStore;
