// import React from 'react';
import { observable} from 'mobx';
class EventPageModel {
    id:string;
    @observable name:string;
    @observable location:string;

    constructor() {
        this.id = Math.random().toString();
        this.name = '';
        this.location = '';
    }
    onUpdateEventDetails = (name:string, location:string) => {
        this.name = name;
        this.location = location;
    }

}
export default EventPageModel;
