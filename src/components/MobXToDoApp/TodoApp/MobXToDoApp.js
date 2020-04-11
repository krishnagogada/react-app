import React from 'react';
import AddToDo from '.././AddTodo/AddTodo.js';
import ToDoList from '.././TodoList/TodoList.js';
import ToDoFooter from '.././TodoFooter/TodoFooter.js';
import todoStore from '../../../stores/ToDoAppStore/TodoStore.js';
import { reaction } from 'mobx';

class ToDoApp extends React.Component {
    render() {
        reaction(() => (todoStore.todos.filter((eachObject) => { return !eachObject.isCompleted }).length), (length) => { length === 0 ? setTimeout(() => { alert('congratulations') }) : undefined });

        return (

            <div>
            <AddToDo todoStore={todoStore}/>
            <ToDoList todoStore={todoStore}/>
            <ToDoFooter todoStore={todoStore}/>
            </div>
        );
    }
}
export default ToDoApp;
