import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCells = true;
    @observable isClickedOnCell

    render() {
        return (
            <div style={{backgroundColor:"black",margin:"10px",color:"white"}}>Cell</div>
        );
    }
}
export default Cell;
