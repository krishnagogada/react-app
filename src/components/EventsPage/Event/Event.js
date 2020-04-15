import React from 'react';
// import { div, div, div, div } from './styledComponent.js';
import { observer } from 'mobx-react';
import EventPageModel from '../../../stores/models/EventPageModel/EventPageModel';

type eventProps = {
    eventPage: EventPageModel,
    onDeleteEvent: Function
}

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
    onChangeEventName = (event: any) => {
        this.setState({ eventName: event.target.value });
    }
    onChangeEventLocation = (event: any) => {
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
        console.log(eventPage)
        return (<div key={eventPage.id}>
                    { this.state.isEditEvent ? 
                    <div>
                        <div>
                            <input defaultValue={this.state.eventName} onKeyUp = {(event) => this.onChangeEventName(event)}/>
                            <input defaultValue={this.state.eventLocation} onKeyUp = {(event) => this.onChangeEventLocation(event)}/>
                        </div>
                        <button onClick={this.onUpdateEventDetails}>Update</button>
                    </div> : 
                    <div>
                        <div>
                            <div>{eventPage.name}</div>
                            <div>{eventPage.location}</div>
                        </div>
                        <div>
                            <button onClick={this.onEditButtonClick}>Edit</button>
                            <button onClick={this.onDeleteEvent}>Delete</button>
                        </div>    
                    </div> }
                </div>);
    }
}
export default Event;
