import React from 'react';
import { observer } from 'mobx-react';

@observer
class AddEvent extends React.Component {

    state = {
        eventName: '',
        eventLocation: ''
    }

    onAddEvent = (event) => {
        this.props.eventStore.onAddTodo(this.state.eventName, this.state.eventLocation);
    }

    onChangeEventName = () => {
        this.setState({ eventName: event.target.value });
    }

    onChangeEventLocation = () => {
        this.setState({ eventLocation: event.target.value });
    }
    render() {
        return (
            <div>
                <input type = 'text' placeHolder = 'Name' onKeyUp = {(event) =>this.onChangeEventName(event) } />
                <input type = 'text' placeHolder = 'Location' onKeyUp = {(event) =>this.onChangeEventLocation(event) } />
                <button onClick={this.onAddEvent}>Add Event</button>
            </div>
        );
    }
}

export default AddEvent;
