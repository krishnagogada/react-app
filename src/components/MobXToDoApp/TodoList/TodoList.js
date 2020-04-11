import React from 'react';
import ToDo from '.././Todo/Todo.js';
import { observer } from 'mobx-react';

@observer
class ToDoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todoStore.filteredTodos.map((eachTodo)=>{return <ToDo todo={eachTodo} removeToDo={this.props.todoStore.onRemoveTodo}/>})}
            </div>
        );
    }
}

export default ToDoList;
