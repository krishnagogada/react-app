import React from 'react';
import './CountriesDashBoard.css';
import { GoSearch } from "react-icons/go";


class CountriesFilterBar extends React.Component {

    render() {
        return (
            <div className='filters'>
                <div style={{width:'80%'}}>
                <div className='search-bar-with-icon' style={{color:this.props.theme.color,backgroundColor:this.props.theme.buttonsBackgroundcolor}}>
                    {<GoSearch/>}
                    <SearchCountry filterCountriesByName={this.props.filterCountriesByName} theme={this.props.theme}/></div>
                </div>
                <SelectRegion filterCountriesByRegion={this.props.filterCountriesByRegion} regions={this.props.regions} theme={this.props.theme}/>
            </div>
        );
    }
}

class SearchCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    onChangeSearchText = (event) => {
        this.setState({ searchText: event.target.value });
        this.props.filterCountriesByName((event.target.value).toLowerCase());
    }
    render() {
        return (<input type = 'text' className='search-bar' placeHolder='Search for a country...' value={this.state.searchText} onChange = {this.onChangeSearchText} style={{backgroundColor:this.props.theme.buttonsBackgroundcolor,color:this.props.theme.color}}/>);
    }
}

class SelectRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRegion: 'All'
        };
    }
    onChangeSelectedRegion = (event) => {
        this.setState({ selectedRegion: event.target.value });
        this.props.filterCountriesByRegion(event.target.value);
    }
    render() {
        return (
            <select className='region-drop-down' value={this.state.selectedRegion} onChange={this.onChangeSelectedRegion} style={{backgroundColor:this.props.theme.buttonsBackgroundcolor,color:this.props.theme.color}}>
                {this.props.regions.map((eachRegion)=><option value={eachRegion}>{eachRegion}</option>)}
            </select>
        );
    }
}

export { CountriesFilterBar };
