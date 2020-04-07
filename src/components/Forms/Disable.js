import React from 'react';
import NavBar from './navBar.js';
import './Forms.css';

class DisableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisableButtonChecked: false,
            showMessage: ''
        };
    }
    handleChange = (event) => {
        this.setState({ isDisableButtonChecked: !this.state.isDisableButtonChecked });

        if (event.target.checked) {
            this.setState({
                showMessage: 'i am disable'
            });
        }
        else {
            this.setState({ showMessage: '' });
        }
    }
    handleSubmit = (event) => {
        this.setState({ showMessage: 'i am enable' });
        event.preventDefault();
    }
    displayMessage = () => {
        return this.state.showMessage;
    }
    render() {
        return (
            <div>
            <div className='NavBar-Forms-Components'>
                <NavBar/>
                <div>Greetings</div>
            </div>
                <form>
                    <input type='checkbox' checked={this.state.isDisableButtonChecked} onClick={this.handleChange} className='check-box'/>
                    <input type='submit' disabled = {this.state.isDisableButtonChecked} value='Click Me' onClick={this.handleSubmit} className='submit-button'></input>
                </form>
                <div>{this.displayMessage()}</div>
            </div>
        );
    }
}

export default DisableButton;
