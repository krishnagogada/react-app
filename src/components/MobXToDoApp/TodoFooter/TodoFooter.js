import React from 'react';
import { observer } from 'mobx-react';
@observer
class ToDoFooter extends React.Component {

    onChangeSelectedFilter = (event) => {
        this.props.todoStore.onChangeSelectedFilter(event.target.value);
    }
    onClearCompleted = () => {
        this.props.todoStore.onClearCompleted();
    }
    render() {
        return <div className='footer'>
                        <div className="number-of-items">{this.props.todoStore.activeTodosCount}</div>
                        <div class="all-types-filters">
                            <button value='All' onClick = {this.onChangeSelectedFilter}>All</button>
                            <button value='Active' onClick = {this.onChangeSelectedFilter}>Active</button>
                            <button value='Completed' onClick = {this.onChangeSelectedFilter}>Completed</button>
                        </div>
                        <button class="all-clear" onClick = {this.onClearCompleted}>Clear Completed</button>
                    </div>
    }
}
export default ToDoFooter;
