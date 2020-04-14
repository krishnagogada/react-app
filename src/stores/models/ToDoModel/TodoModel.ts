// import React from 'react';
import { observable} from 'mobx';
class ToDoModel {
    
    id:String;
    @observable title:String;
    @observable isCompleted:Boolean;

    constructor() {
        this.id = Math.random().toString();
        this.title = '';
        this.isCompleted = false;
    }
    onCompleteToDo = () => {
        this.isCompleted = !this.isCompleted;
    }
    onUpdateToDoTitle = (title:String) => {
        this.title = title;
    }
}
export default ToDoModel;
