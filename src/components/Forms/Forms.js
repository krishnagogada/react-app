import React from 'react';
import './Forms.css';
import NavBar from './navBar.js';
import { Link } from "react-router-dom";
export default function FormsComponents() {
    return (
        <div>
            <div className='NavBar-Forms-Components'>
                <NavBar/>
                <div>Forms Components</div>
            </div>
                <ul>
                    <li>
                        <Link to="/Greeting">Greeting</Link>
                    </li>
                    <li>
                        <Link to="/Favourite">FavouriteDessert</Link>
                    </li>
                    <li>
                        <Link to="/VistedCities">VistedCities</Link>
                    </li>
                    <li>
                        <Link to="/YourState">Your State</Link>
                    </li>
                    <li>
                        <Link to="/DisableButton">Disable Button</Link>
                    </li>
                </ul>
            </div>
    );
}
