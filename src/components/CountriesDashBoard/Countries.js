import React from 'react';
import './CountriesDashBoard.css';
import { withRouter } from 'react-router-dom';
import { Country, CountryShortDetails } from './CountryDashBoardStyles.js';

class Countries extends React.Component {

    selectedCountry = () => {

        let { history } = this.props;
        history.push({ pathname: './CreateCountryCard.js', selectedCountry: this.props.country.name });

    }
    render() {
        return <Country onClick={this.selectedCountry} theme={this.props.theme}>
                        <img className='display-image' src={this.props.country.flag} alt='flag'/>
                        <CountryShortDetails>
                            <div><b>{this.props.country.name}</b></div>
                            <div><b>Population:</b> {this.props.country.population}</div>
                            <div><b>Region:</b> {this.props.country.region} </div>
                            <div><b>Capital:</b> {this.props.country.capital}</div>
                        </CountryShortDetails>
                    </Country>;
    }
}

export default withRouter(Countries);
