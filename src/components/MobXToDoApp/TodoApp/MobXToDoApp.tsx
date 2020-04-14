import React from 'react';
import { reaction } from 'mobx';
import todoStore from '../../../stores/ToDoAppStore/TodoStore';
import AddToDo from '.././AddTodo/AddTodo';
import ToDoList from '.././TodoList/TodoList';
import ToDoFooter from '.././TodoFooter/TodoFooter';


class ToDoApp extends React.Component {
    render() {
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
//reaction(() => (todoStore.todos.filter((eachObject) => { return !eachObject.isCompleted }).length), (length) => { length === 0 ? setTimeout(() => { alert('congratulations') }) : undefined });