import React from 'react';
import { EventsList, EachEvent, NameAndLocation, EditAndDeleteButtons } from './styledComponent.js';
import { observer } from 'mobx-react';

@observer
class Event extends React.Component {
    state = {
        isEditEvent: false,
        eventName: this.props.eventPage.name,
        eventLocation: this.props.eventPage.location
    }
    onDeleteEvent = () => {
        this.props.onDeleteEvent(this.props.eventPage.id);
    }
    onChangeEventName = (event) => {
        this.setState({ eventName: event.target.value });
    }
    onChangeEventLocation = () => {
        this.setState({ eventLocation: event.target.value });
    }
    onUpdateEventDetails = () => {
        this.setState({ isEditEvent: !this.state.isEditEvent });
        this.props.eventPage.onUpdateEventDetails(this.state.eventName, this.state.eventLocation);
    }
    onEditButtonClick = () => {
        this.setState({ isEditEvent: !this.state.isEditEvent });
    }
    render() {
        const { eventPage } = this.props;
        return (<EventsList key={eventPage.id}>
                    { this.state.isEditEvent ? 
                    <EachEvent>
                        <NameAndLocation>
                            <input defaultValue={this.state.eventName} onKeyUp = {(event) => this.onChangeEventName(event)}/>
                            <input defaultValue={this.state.eventLocation} onKeyUp = {(event) => this.onChangeEventLocation(event)}/>
                        </NameAndLocation>
                        <button onClick={this.onUpdateEventDetails}>Update</button>
                    </EachEvent> : 
                    <EachEvent>
                        <NameAndLocation>
                            <div>{eventPage.name}</div>
                            <div>{eventPage.location}</div>
                        </NameAndLocation>
                        <EditAndDeleteButtons>
                            <button onClick={this.onEditButtonClick}>Edit</button>
                            <button onClick={this.onDeleteEvent}>Delete</button>
                        </EditAndDeleteButtons>    
                    </EachEvent> }
                </EventsList>);
    }
}
export default Event;
