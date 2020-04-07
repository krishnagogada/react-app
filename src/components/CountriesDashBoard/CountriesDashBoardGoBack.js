import React from 'react';
import './CountriesDashBoard.css';

import { withRouter } from "react-router-dom";
class GoBack extends React.Component {
    back = () => {
        const { history } = this.props;
        history.goBack();
    }
    render() {
        return (
            <div className='nav-bar-country-dashboard'>
            <button className='go-back-countries-dashboard' onClick={this.back} style={{backgroundColor:this.props.theme.buttonsBackgroundcolor,color:this.props.theme.color}}>Back</button>
            <h2>Countries DashBoard App</h2>
            </div>);
    }
}
export default withRouter(GoBack);
