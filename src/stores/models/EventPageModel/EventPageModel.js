import React from 'react';
import { observable, action } from 'mobx';
class ToDoModel {

    @observable name;
    @observable location;

    constructor() {
        this.id = Math.random().toString();
        this.name = '';
        this.location = '';
    }
    onUpdateEventDetails = (name, location) => {
        this.name = name;
        this.location = location;
    }

}
export default ToDoModel;
