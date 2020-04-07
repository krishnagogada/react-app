import React from 'react';
import './Forms.css';
import NavBar from './navBar.js';

class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visitedCities: [],
            selectedCities: [],
            cityOptions: this.props.citiesList
        };
    }

    handleCheckboxClick = (event) => {
        if (event.target.checked) {
            this.state.visitedCities.push(event.target.value);
        }
        else {
            this.state.visitedCities.splice(this.state.visitedCities.indexOf(event.target.value), 1);
        }

    }

    handleSubmit = (event) => {
        this.setState({
            selectedCities: this.state.visitedCities
        });
        event.preventDefault();
    }

    displayVisitedCitiesMessage = () => {
        if (this.state.selectedCities.length === 0) {
            return '';
        }
        return `I have visited these cities ${this.state.selectedCities}`;
    }

    renderCityOptions = () => {
        let list = this.state.cityOptions.map((eachCity) => {
            return <div>
                        <input type='checkbox' className='check-box' value={eachCity} onClick={this.handleCheckboxClick}/>
                        {eachCity}
                    </div>;
        });
        return list;
    }

    render() {
        return (
            <div>
            <div className='NavBar-Forms-Components'>
                <NavBar/>
                <div>Greetings</div>
            </div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderCityOptions()}
                    <input type='submit' value='Make your choice'/>
                </form>
                <div>{this.displayVisitedCitiesMessage()}</div>
            </div>);
    }
}

export default Cities;
