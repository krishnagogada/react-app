import React from 'react';
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { CountriesDashBoardHeader, WhereInTheWorld, ThemeChange } from './CountryDashBoardStyles.js';

class Header extends React.Component {

    onChangeTheme = () => {

        if (this.props.selectedTheme === 'Light Mode') {
            this.props.onChangeTheme('Dark Mode');
        }
        else {
            this.props.onChangeTheme('Light Mode');
        }
    }
    themeToDisplayOnButton = () => {
        return this.props.selectedTheme === 'Light Mode' ? <FiSun/> : <FaMoon/>;
    }
    render() {
        return (
            <CountriesDashBoardHeader style={{backgroundColor:this.props.theme.buttonsBackgroundcolor}}>
                    <WhereInTheWorld theme={this.props.theme}><h4>Where in the world?</h4></WhereInTheWorld>
                    <ThemeChange theme={this.props.theme} onClick={this.onChangeTheme}><div>{this.themeToDisplayOnButton()} {this.props.selectedTheme}</div></ThemeChange>
            </CountriesDashBoardHeader>
        );
    }
}

export { Header };
