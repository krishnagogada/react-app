import React from 'react';
import eventStore from '../../stores/EventPageStore/EventPageStore';
import AddEvent from './EventAdd';
import EventList from './EventList';

class EventPageApp extends React.Component{
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