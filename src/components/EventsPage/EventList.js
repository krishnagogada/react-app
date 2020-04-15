import React from 'react';
import { observer } from 'mobx-react';
import Event from './Event/Event';
import { EventStore } from '../../stores/EventPageStore/EventPageStore';

type eventProps = {
    eventStore: EventStore
}

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
