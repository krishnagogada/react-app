import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ToDoStore } from '../../../stores/ToDoAppStore/TodoStore';
import ToDo from '.././Todo/Todo';
import { Loading, NotFound, Retry, ErrorMessage, RetryButton, UserInputOnNotFound, AddToDoButton } from './styledComponent.js';

type TodoListProps = {
    todoStore: ToDoStore
}

@observer
class ToDoList extends React.Component {

    @observable toDoTitle: ''
    @observable isDisconnected: false

    onAddTodo = () => {
        let id = Math.random();
        this.props.todoStore.onAddTodo(id, this.toDoTitle, false);
    }

    onChangeInput = (event) => {
        this.toDoTitle = event.target.value;

    }

    componentDidMount() {
        this.handleConnectionChange();
        window.addEventListener('online', this.handleConnectionChange);
        window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.handleConnectionChange);
        window.removeEventListener('offline', this.handleConnectionChange);
    }
    handleConnectionChange = () => {
        const condition = navigator.onLine ? 'online' : 'offline';

        if (condition === 'online') {
            this.isDisconnected = false
        }
        else {
            this.isDisconnected = true
        }
    }
    render() {
        const { todoStore, notFound, urlError, onClickRetry } = this.props;
        return (
            <div>
                {urlError ? 
                    <div>
                        Something Went Worng
                    </div>:
                this.isDisconnected ? <Retry>
                                    <ErrorMessage>Network Error</ErrorMessage>
                                    <RetryButton onClick={onClickRetry}>Retry</RetryButton>
                                </Retry>:
                notFound ? <NotFound>
                                <div>
                                    <UserInputOnNotFound type="text" placeholder = 'What needs to be done?' onChange = {(event) =>this.onChangeInput(event)}/>
                                    <AddToDoButton onClick={this.onAddTodo}>Add Todo</AddToDoButton>
                                </div>
                            </NotFound>:
                todoStore.filteredTodos.length===0 ? <Loading src="https://tap.ibhubs.in/react/assignments/assignment-10/preview/loading-view.png"></Loading>:
                todoStore.filteredTodos.map((eachTodo)=>{return <ToDo todo={eachTodo} removeToDo={this.props.todoStore.onRemoveTodo}/>})}
            </div>
        );
    }
}

export default ToDoList;
