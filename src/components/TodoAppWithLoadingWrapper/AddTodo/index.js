import React from 'react';
import { observer } from 'mobx-react';
// import { ToDoStore } from '../../../stores/ToDoAppStore/TodoStore';
import AddUserTodo from './styledComponent.js';

// type AddToDoProps = {
//     todoStore: ToDoStore
// }

@observer
class AddToDo extends React.Component {
    state = {
        toDoTitle: ''
    }

    onAddTodo = () => {
        let id = Math.random();
        this.props.todoStore.onAddTodo(id, this.state.toDoTitle, false);
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
            <AddUserTodo type = 'text' placeholder = 'What needs to be done?' onKeyUp = {(event) =>this.onChangeInput(event) } />
        );
    }
}

export default AddToDo;
