/*global fetch*/
import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import todoStore from '../../../stores/ToDoAppStore/TodoStore';
import AddToDo from '.././AddTodo/AddTodo';
import ToDoList from '.././TodoList/TodoList';
import ToDoFooter from '.././TodoFooter/TodoFooter';

@observer
class ToDoApp extends React.Component {

    @observable urlError = false;

    componentDidMount = () => {
        let fetchedtodosData = [];
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
            return (response.json());
        }).then(json => {
            fetchedtodosData = json;
            if (fetchedtodosData.length === 0 && todoStore.todos.length === 0) {
                todoStore.notFound = true;
                this.urlError = false;
            }
            else {
                fetchedtodosData.forEach((eachToDoObject) => { todoStore.onAddTodo(eachToDoObject.id, eachToDoObject.title, eachToDoObject.isCompleted) });
                this.urlError = false;
            }
        }).catch(this.urlError = true);
    }

    onClickRetry = () => {
        let fetchedtodosData = [];
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
            return (response.json());
        }).then(json => {

            fetchedtodosData = json;

            if (fetchedtodosData.length === 0 && todoStore.todos.length === 0) {

                todoStore.notFound = true;
                this.urlError = false;
            }
            else {

                todoStore.todos = [];
                fetchedtodosData.forEach((eachToDoObject) => { todoStore.onAddTodo(eachToDoObject.id, eachToDoObject.title, eachToDoObject.isCompleted) });
                this.urlError = false;
            }
        }).catch(this.urlError = true);
    }

    render() {
        reaction(() => (todoStore.todos.filter((eachObject) => { return !eachObject.isCompleted }).length), (length) => { length === 0 ? setTimeout(() => { alert('congratulations') }) : undefined });
        return (
            <div>
            <AddToDo todoStore={todoStore}/>
            <ToDoList todoStore={todoStore} notFound={todoStore.notFound} urlError={this.urlError} onClickRetry={this.onClickRetry}/>
            <ToDoFooter todoStore={todoStore}/>
            </div>
        );
    }
}
export default ToDoApp;
