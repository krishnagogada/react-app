/*global fetch*/
import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import './CountriesDashBoard.css';
import { withRouter } from "react-router-dom";
import { CountryBorders, BorderButton } from './CountryDashBoardStyles.js';

class CountryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedselectedCountry: this.props.location.selectedCountry,
            countries: []
        };
    }
    componentDidMount = () => {
        fetch('https://restcountries.eu/rest/v2/all').then(response => {
            return (response.json());
        }).then(json => {
            this.setState({ countries: json });
        });

    }

    goBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    updatedselectedCountry = (event) => {

        this.setState({ updatedselectedCountry: event.target.innerHTML });
    }

    createCountryCard = (country) => {
        let selectedCountry = this.state.countries.filter((selectedCountry) => { return selectedCountry.name === country });
        if (selectedCountry.length > 0) {
            return (
                <div className='country-card'>
                    <button className='go-back-button' style={{backgroundColor:this.props.theme.buttonsBackgroundcolor,color:this.props.theme.color}} onClick={this.goBack}>{<FiArrowLeft/>} Back</button>
                    <div className='flag-and-country-details'>
                        <div className='country-card-flag'>
                            <img className='country-flag-in-country-card'  src={selectedCountry[0].flag} alt='flag'/>
                        </div>
                        <div className='country-details'>
                            <h2>{selectedCountry[0].name}</h2>
                            <div className='country-card-details'>
                                <div className='country-details-part-1'>
                                    <div><b>Native Name:</b> {selectedCountry[0].nativeName}</div>
                                    <div><b>Population:</b> {selectedCountry[0].population}</div>
                                    <div><b>Region:</b> {selectedCountry[0].region}</div>
                                    <div><b>Sub Region:</b> {selectedCountry[0].subregion}</div>
                                    <div><b>Capital:</b> {selectedCountry[0].capital}</div>
                                </div>
                                <div className='country-details-part-2'>
                                    <div><b>Top Level Domain:</b> {selectedCountry[0].topLevelDomain}</div>
                                    <div><b>Currencies:</b> {selectedCountry[0].currencies.map((each) => { return each.name }).join(',')}</div>
                                    <div><b>languages:</b> {selectedCountry[0].languages.map((each) => {return each.name;}).join(',')}</div>
                                </div>
                            </div>
                            <div><b>Borders:</b></div>
                            <CountryBorders>{selectedCountry[0].borders.map((eachBorder) => {
                                return (this.state.countries.filter((selectedCountry) => {
                                return selectedCountry.alpha3Code === eachBorder }))[0].name}).map((eachBorder)=>{
                                return <BorderButton theme={this.props.theme} onClick={this.updatedselectedCountry}>{eachBorder}</BorderButton>})}</CountryBorders>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return <div>{this.createCountryCard(this.state.updatedselectedCountry)}</div>;
    }
}
export default withRouter(CountryCard);
