/*global fetch*/
import React from 'react';
import Countries from './Countries.js';
import { CountriesFilterBar } from './CountryFilters.js';
import { AllCountries } from './CountryDashBoardStyles.js';
import './CountriesDashBoard.css';

class CountriesDashBoardApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            filteredCountries: [],
            selectedRegion: 'All',
            searchText: '',
            regions: []
        };
    }

    componentDidMount = () => {
        fetch('https://restcountries.eu/rest/v2/all').then(response => {
            return (response.json());
        }).then(json => {
            this.setState({ countries: json });
            this.setState({ filteredCountries: json });
            let listOfRegions = json.map((eachCountry) => {
                return eachCountry.region;
            });

            listOfRegions = [...new Set(listOfRegions)];
            listOfRegions.sort();
            listOfRegions.splice(0, 1);
            listOfRegions.unshift('All');
            console.log(listOfRegions);
            this.setState({ regions: listOfRegions });
        });

    }

    getCountries = () => {
        let allCountries = this.state.filteredCountries.map((eachCountry) => {
            return <Countries country={eachCountry} theme={this.props.theme}/>;
        });
        return allCountries;
    }

    filterCountriesByRegion = (selectedRegion) => {

        this.setState({ selectedRegion: selectedRegion });
        let filteredCountries;
        if (selectedRegion === 'All') {
            filteredCountries = this.state.countries.filter((eachCountry) => {
                return eachCountry.name.toLowerCase().search(this.state.searchText) !== -1;
            });
        }
        else {
            filteredCountries = this.state.countries.filter((eachCountry) => {
                return eachCountry.region.search(selectedRegion) !== -1 && eachCountry.name.toLowerCase().search(this.state.searchText) !== -1;
            });
        }
        this.setState({ filteredCountries: filteredCountries });

    }

    filterCountriesByName = (searchText) => {

        this.setState({ searchText: searchText });
        let filteredCountries;
        if (this.state.selectedRegion === 'All') {
            filteredCountries = this.state.countries.filter((eachCountry) => {
                return eachCountry.name.toLowerCase().search(searchText) !== -1;
            });
        }
        else {
            filteredCountries = this.state.countries.filter((eachCountry) => {
                return eachCountry.name.toLowerCase().search(searchText) !== -1 && eachCountry.region.search(this.state.selectedRegion) !== -1;
            });
        }
        this.setState({ filteredCountries: filteredCountries });

    }
    render() {
        return (

            <div>
            <CountriesFilterBar filterCountriesByRegion={this.filterCountriesByRegion} filterCountriesByName={this.filterCountriesByName} regions={this.state.regions} theme={this.props.theme}/>
            {this.state.filteredCountries.length===0 && <p style={{textAlign:"center"}}><img src={this.props.theme.loading}  alt='loading'/></p>}
            <AllCountries>{this.getCountries()}</AllCountries>
                
            </div>
        );
    }

}

export { CountriesDashBoardApp };
