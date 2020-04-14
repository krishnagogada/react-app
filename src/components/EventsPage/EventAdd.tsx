import React from 'react';
import { observer } from 'mobx-react';
import {EventStore} from '../../stores/EventPageStore/EventPageStore';

type AddEventProps={
    eventStore:EventStore;
}

@observer
class AddEvent extends React.Component<AddEventProps> {

    state = {
        eventName: '',
        eventLocation: ''
    }

    onAddEvent = () => {
        this.props.eventStore.onAddEvent(this.state.eventName, this.state.eventLocation);
    }

    onChangeEventName = (event:any) => {
        this.setState({ eventName: event.target.value });
    }

    onChangeEventLocation = (event:any) => {
        this.setState({ eventLocation: event.target.value });
    }
    render() {
        return (
            <div>
                <input type = 'text' onKeyUp = {(event) =>this.onChangeEventName(event) } />
                <input type = 'text' onKeyUp = {(event) =>this.onChangeEventLocation(event) } />
                <button onClick={this.onAddEvent}>Add Event</button>
            </div>
        );
    }
}

export default AddEvent;
