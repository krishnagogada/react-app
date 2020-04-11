import React from 'react';
import TodoModel from '../models/ToDoModel/TodoModel.js';
import { observable, action, computed } from 'mobx';

class ToDoStore {
    @observable todos = [];
    @observable selectedFilter = 'All';

    @action.bound
    onAddTodo(todoTitle) {
        let ToDoObject = new TodoModel();
        ToDoObject.onUpdateToDoTitle(todoTitle);
        this.todos.push(ToDoObject);
    }
    @action.bound
    onRemoveTodo(objectId) {

        let filteredTodos = this.todos.filter((eachObject) => {
            return eachObject.id != objectId;
        });
        this.todos = filteredTodos;

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

        let filteredTodos;
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
export default todoStore;
