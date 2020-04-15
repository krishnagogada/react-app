// import React from 'react';
import { observable } from 'mobx';

class EventPageModel {
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
export default EventPageModel;
