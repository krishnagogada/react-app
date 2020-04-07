import React from 'react';
import NavBar from './navBar.js';
import './Forms.css';

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedState: '',
            submittedState: ''
        };
    }
    handleChangeState = (event) => {
        this.setState({ selectedState: event.target.value });

    }
    handleSubmit = (event) => {
        this.setState({ submittedState: this.state.selectedState });
        event.preventDefault();
    }
    displayMessage = () => {
        return `I am from ${this.state.submittedState} state`;
    }
    render() {
        let selectedState = this.state.submittedState;
        if (selectedState === '') {
            selectedState = '';
        }
        else {
            selectedState = this.displayMessage();
        }
        return (
            <div className='flexbox'>
            <div className='NavBar-Forms-Components'>
                <NavBar/>
                <div>Visted States</div>
            </div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.selectedState} onChange={this.handleChangeState}>
                    {this.props.statesList.map((eachState)=><option>{eachState}</option>)}
                    </select>
                    <input type='submit' value='Submit' className='submit-button'></input>
                </form>
                <div>{selectedState}</div>
            </div>
        );
    }
}

export default State;
