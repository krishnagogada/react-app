// import React from 'react';
import { observable } from 'mobx';
class ToDoModel {

    @observable title;
    @observable isCompleted;

    constructor(id, title, isCompleted) {
        this.id = id
        this.title = title;
        this.isCompleted = isCompleted;
    }
    onCompleteToDo = () => {
        this.isCompleted = !this.isCompleted;
    }
    onUpdateToDoTitle = (title) => {
        this.title = title;
    }
}
export default ToDoModel;
