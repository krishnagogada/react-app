import React from 'react';
import CarsList from './components/CarsList/CarListApp.js';
import UserInputToDo from './components/ToDoListApp/ToDoListApp.js';
import ToDoApp from './components/MobXToDoApp/TodoApp/MobXToDoApp.js';
import EventPageApp from './components/EventsPage/EventPageApp.js';
import FormsComponents from './components/Forms/Forms.js';
import { CountriesDashBoardApp } from './components/CountriesDashBoard/CountriesDashBoard.js';
import CountryCard from './components/CountriesDashBoard/CreateCountryCard.js';
import Greetings from './components/Forms/Greetings.js';
import FavouriteDessert from './components/Forms/Favourite.js';
import Cities from './components/Forms/Cities.js';
import { Header } from './components/CountriesDashBoard/CountryHeader.js';
import State from './components/Forms/State.js';
import DisableButton from './components/Forms/Disable.js';
import GoBack from './components/CountriesDashBoard/CountriesDashBoardGoBack.js';
import LightModeLoading from './light.svg';
import DarkModeLoading from './dark.svg';
import EmojiGame from './components/EmojiGame/EmojiGame.js';
import CounterPage from './components/CounterPage';
import { observer } from 'mobx-react';
import themeStore from './stores/ThemeStore/index.js';
import Home from './components/home.js';

import { A } from './components/HandsOn/A.js';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
}
from "react-router-dom";

@observer

class App extends React.Component {

  static themeOption = {
    light: {
      id: "0",
      backgroundcolor: "#fff",
      color: 'black',
      buttonsBackgroundcolor: '#fff',
      loading: `${LightModeLoading}`
    },
    dark: {
      id: "1",
      backgroundcolor: 'rgb(32,45,55)',
      buttonsBackgroundcolor: "#2b3945",
      color: 'white',
      loading: `${DarkModeLoading}`
    }
  }

  theme = App.themeOption.light;

  getCurrentTheme = () => {
    return themeStore.selectedTheme;
  }

  onChangeTheme = (theme) => {
    themeStore.setCurrentTheme(theme);
    this.theme = theme === 'Light Mode' ? App.themeOption.light : App.themeOption.dark;
  }

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/counter-page">
            <CounterPage/>
          </Route>
          <Route path="/ToDoListApp">
            <ToDoListApp  />
          </Route>
          <Route path="/mobx-todo-app">
            <ToDoApp  />
          </Route>
          <Route path="/events-app">
            <EventPageApp  />
          </Route>
          <Route path="/CarsApp">
          <CarsApp />
          </Route>
          <Route path="/Forms">
            <Forms />
          </Route>
          <Route path="/Countries">
            <div style={{backgroundColor:this.theme.backgroundcolor,color:this.theme.color}}>
              <GoBack theme={this.theme}/>
              <Header onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()} theme={this.theme}/>
              <CountriesDashBoardApp theme={this.theme}/>
            </div> 
          </Route>
          <Route path="/Emoji">
          <EmojiGame/>
          </Route>
          <Route path="/Hands-On">
          <A/>
          </Route>
          <Route path="/Greeting">
            <Greetings />
          </Route>
          <Route path="/Favourite">
            <FavouriteDessert dessertList={["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]}/>
          </Route>
          <Route path="/VistedCities">
                <Cities citiesList={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/>
          </Route>
          <Route path="/YourState">
            <State statesList={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
          </Route>
          <Route path="/DisableButton">
              <DisableButton />
          </Route>
          <Route path="/:vamsi">
          <div style={{backgroundColor:this.theme.backgroundcolor,color:this.theme.color}}>
              <Header onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()} theme={this.theme}/>
              <CountryCard theme={this.theme}/>
          </div>    
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

function CarsApp() {
  return <div>
            <h2>CarsApp</h2>
            <CarsList/>
        </div>;
}

function ToDoListApp() {
  return <div>
            <h2>ToDoListApp</h2>
            <UserInputToDo/>
          </div>;
}

function Forms() {
  return <div>
            <h2>Forms Components</h2>
            <FormsComponents/>
          </div>;
}
export default App;