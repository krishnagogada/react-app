import React from 'react';
import { observer } from 'mobx-react';
import { ToDoStore } from '../../../stores/ToDoAppStore/TodoStore';
import ToDo from '.././Todo/Todo';

type TodoListProps = {
    todoStore: ToDoStore
}

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
