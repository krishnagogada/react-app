import React from 'react';
import EventPageModel from '../models/EventPageModel/EventPageModel.js';
import { observable, action, computed } from 'mobx';

class EventStore {
    @observable eventPages = [];

    @action.bound
    onAddTodo(name, location) {
        let eventPageObject = new EventPageModel();
        eventPageObject.onUpdateEventDetails(name, location);
        this.eventPages.push(eventPageObject);
    }

    @action.bound
    onDeleteEvent(objectId) {

        let restOfEvents = this.eventPages.filter((eachObject) => {
            return eachObject.id != objectId;
        });
        this.eventPages = restOfEvents;

    }
    @computed get noOfEvents() {
        return this.eventPages.length;
    }

}
let eventStore = new EventStore;
export default eventStore;
