import React from 'react';
import { observer } from 'mobx-react';
// import { ToDoStore } from '../../../stores/ToDoAppStore/TodoStore';

// type TodoFooterProps = {
//     todoStore: ToDoStore
// }

@observer
class ToDoFooter extends React.Component {

    onChangeSelectedFilter = (event) => {
        this.props.todoStore.onChangeSelectedFilter(event.target.value);
    }
    onClearCompleted = () => {
        this.props.todoStore.onClearCompleted();
    }
    render() {

        const { todoStore } = this.props;
        return <div>{ todoStore.todos.length > 0 ? <div className='footer'>
                        <div className="number-of-items">{this.props.todoStore.activeTodosCount}</div>
                        <div className="all-types-filters">
                            <button value='All' onClick = {this.onChangeSelectedFilter}>All</button>
                            <button value='Active' onClick = {this.onChangeSelectedFilter}>Active</button>
                            <button value='Completed' onClick = {this.onChangeSelectedFilter}>Completed</button>
                        </div>
                        <button className="all-clear" onClick = {this.onClearCompleted}>Clear Completed</button>
                    </div> : null }
                </div>
    }
}
export default ToDoFooter;
