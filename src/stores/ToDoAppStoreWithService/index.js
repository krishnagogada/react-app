import { observable, action, computed } from 'mobx';
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import TodoModel from '../models/ToDoModel/TodoModel';
import {observer} from 'mobx-react'

class ToDoStoreWithService {

    @observable todos = [];
    @observable selectedFilter = 'All';
    @observable getTodoListAPIStatus;
    @observable getTodoListAPIError;
    @observable todoAPIService;

    constructor(todoService) {

        this.todoAPIService = todoService;
        this.getTodoListAPIStatus = API_INITIAL;
        this.getTodoListAPIError = null;
    }

    getTodoList = () => {
        const todoPromise = this.todoAPIService.getTodos();

        return bindPromiseWithOnSuccess(todoPromise)
            .to(this.setTodoListAPIStatus, this.setTodoListResponse)
            .catch(this.setTodoListAPIError);
    }

    @action.bound
    setTodoListAPIStatus(apiStatus) {
        this.getTodoListAPIStatus = apiStatus;
    }

    @action.bound
    setTodoListAPIError(error) {
        this.getTodoListAPIError = error;
    }

    setTodoListResponse = (todoResponse) => {

        todoResponse.map((eachObject) => { this.onAddTodo(eachObject.id, eachObject.title, eachObject.completed) });

    }

    @action.bound
    onAddTodo(id, todoTitle, isCompleted) {
        let ToDoObject = new TodoModel(id, todoTitle, isCompleted);
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
export default ToDoStoreWithService;
