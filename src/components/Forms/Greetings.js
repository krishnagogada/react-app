import React from 'react';
import NavBar from './navBar.js';
import './Forms.css';
class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserInputText: '',
            displayName: ''
        };
    }

    handleUserInput = (event) => {
        this.setState({
            UserInputText: event.target.value
        });
    }

    handleSubmit = (event) => {
        this.setState({
            displayName: this.state.UserInputText
        });
        event.target.value = '';
        event.preventDefault();
    }

    displayMessage = () => {
        return (`Hello ${this.state.displayName}, have a nice day`);
    }

    render() {
        let message;
        if (this.state.displayName !== '') {
            message = this.displayMessage();

        }
        else {
            message = '';
        }
        return (
            <div className='flexbox'>
            <div className='NavBar-Forms-Components'>
                <NavBar/>
                <div>Greetings</div>
            </div>
            <form onSubmit = {this.handleSubmit} className='form-class'>
                <label>
                    <input type = 'text' className='user-input' placeHolder = 'Enter your name' value = {this.UserInputText} onChange = {this.handleUserInput}/>
                </label>
                    <input type = 'submit' className='submit-button' value = 'Greet'/>
                <div className='greet-message'>{message}</div>    
            </form>
            </div>
        );
    }
}

export default Greetings;
