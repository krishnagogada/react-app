import React from 'react';
import AddEvent from './EventAdd.js';
import EventList from './EventList.js';
import eventStore from '../../stores/EventPageStore/EventPageStore.js';

class EventPageApp extends React.Component {
    render() {
        return (
            <div>
            <AddEvent eventStore={eventStore}/>
            <EventList eventStore={eventStore}/>
            </div>
        );
    }
}
export default EventPageApp;
