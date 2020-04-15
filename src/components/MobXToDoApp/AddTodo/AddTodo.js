import React from 'react';
import { observer } from 'mobx-react';
import { ToDoStore } from '../../../stores/ToDoAppStore/TodoStore';

type AddToDoProps = {
    todoStore: ToDoStore
}

@observer
class AddToDo extends React.Component {
    state = {
        toDoTitle: ''
    }

    onAddTodo = () => {
        this.props.todoStore.onAddTodo(this.state.toDoTitle);
    }

    onChangeInput = (event) => {

        if (event.key === 'Enter') {
            event.target.value = '';
            this.onAddTodo();
        }
        else {
            this.setState({ toDoTitle: event.target.value });
        }
    }
    render() {
        return (
            <input type = 'text' placeholder = 'What needs to be done?' onKeyUp = {(event) =>this.onChangeInput(event) } />
        );
    }
}

export default AddToDo;
