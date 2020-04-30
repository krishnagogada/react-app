import React from 'react';
import { observer, Provider } from 'mobx-react';

import authStore from './Common/stores/index.js';

import stores from './stores';
import CarsList from './components/CarsList/CarListApp.js';
import UserInputToDo from './components/ToDoListApp/ToDoListApp.js';
import ToDoApp from './components/MobXToDoApp/TodoApp/MobXToDoApp';
import ToDoAppWithService from './components/TodoAppWithLoadingWrapper/TodoApp/index.js';
import EventPageApp from './components/EventsPage/EventPageApp';
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
import GridMemoryGame from './components/GridGame/GridMemoryGame/index.js';
import UserPage from './components/UserPage/index.js';
import LoginPage from './components/LoginPage/index.js';
import themeStore from './stores/ThemeStore/index';
import Home from './components/home.js';
import { authenticationRoutes } from './E_CommerceStore/Authentication/routes/index.js';
import { ProductPageRoutes } from './E_CommerceStore/Products/routes/index.js';
import OrdersHistoryList from './E_CommerceStore/Menu/components/OrdersHistoryList/index.js';

import './App.css';

import {
  HashRouter as Router,
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
      <Provider {...stores} {...authStore}>
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
          <Route path="/grid-game">
            <GridMemoryGame  />
          </Route>
          <Route path="/CarsApp">
          <CarsApp />
          </Route>
          <Route path="/Forms">
            <Forms />
          </Route>
          <Route path="/loading-errors" component={UserPage}/>
          <Route path="/login-page" component={LoginPage}/>
          {authenticationRoutes}
          { ProductPageRoutes }
          <Route path="/ecommerce-store/your-orders" component={OrdersHistoryList}/>
          <Route path="/todo-with-services" component={ToDoAppWithService}/>
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
              <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
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
