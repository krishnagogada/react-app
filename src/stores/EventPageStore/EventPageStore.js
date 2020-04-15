// import React from 'react';
import { observable, action, computed } from 'mobx';
import EventPageModel from '../models/EventPageModel/EventPageModel';

class EventStore {

    @observable eventPages = [];

    @action.bound
    onAddEvent(name, location) {

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
export { eventStore as default, EventStore };
