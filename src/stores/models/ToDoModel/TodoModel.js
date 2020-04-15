// import React from 'react';
import { observable } from 'mobx';
class ToDoModel {

    @observable title;
    @observable isCompleted;

    constructor() {
        this.id = Math.random().toString();
        this.title = '';
        this.isCompleted = false;
    }
    onCompleteToDo = () => {
        this.isCompleted = !this.isCompleted;
    }
    onUpdateToDoTitle = (title) => {
        this.title = title;
    }
}
export default ToDoModel;
