import React from 'react';
import Event from './Event/Event.js';
import { observer } from 'mobx-react';

@observer
class EventList extends React.Component {
    render() {
        const { eventStore } = this.props;
        return (
            <div>
                <div>{eventStore.noOfEvents}</div>
                {eventStore.eventPages.map((eachEvent)=>{return <Event eventPage={eachEvent} onDeleteEvent={eventStore.onDeleteEvent}/>})}
            </div>
        );
    }
}

export default EventList;
