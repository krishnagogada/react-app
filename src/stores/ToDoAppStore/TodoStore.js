// import React from 'react';
import { observable, action, computed } from 'mobx';
import TodoModel from '../models/ToDoModel/TodoModel';

class ToDoStore {
    @observable todos = [];
    @observable selectedFilter = 'All';
    @observable notFound = false;

    @action.bound
    onAddTodo(id, todoTitle, isCompleted) {

        let ToDoObject = new TodoModel(id, todoTitle, isCompleted);
        this.todos.push(ToDoObject);
        this.notFound = false;
    }

    @action.bound
    onRemoveTodo(objectId) {

        let filteredTodos = this.todos.filter((eachObject) => {
            return eachObject.id != objectId;
        });
        this.todos = filteredTodos;

        if (this.todos.length === 0) {
            this.notFound = false;
        }

    }
    @action.bound
    onChangeSelectedFilter(selectedFilter) {
        this.selectedFilter = selectedFilter;
    }

    @action.bound
    onClearCompleted() {
        let listOfObjects = this.todos.filter((eachToDoObject) => {
            return (!eachToDoObject.isCompleted);
        });
        this.todos = listOfObjects;

        if (this.todos.length === 0) {
            this.notFound = false;
        }
    }

    @computed get activeTodosCount() {

        let numberOfItems = 0;
        this.todos.forEach((eachToDoList) => !eachToDoList.isCompleted ? numberOfItems += 1 : undefined);
        if (numberOfItems === 1) {
            return `1 item left`;
        }
        else {
            return `${numberOfItems} items left`;
        }

    }
    @computed get filteredTodos() {

        let filteredTodos = [];
        switch (this.selectedFilter) {

            case 'All':
                filteredTodos = this.todos;
                break;

            case 'Active':
                filteredTodos = this.todos.filter((eachObject) => { return !eachObject.isCompleted });
                break;

            case 'Completed':

                filteredTodos = this.todos.filter((eachObject) => { return eachObject.isCompleted });
                break;
        }

        return filteredTodos;
    }
}
let todoStore = new ToDoStore;
export { todoStore as default, ToDoStore };
