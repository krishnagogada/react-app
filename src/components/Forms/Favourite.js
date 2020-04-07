import React from 'react';
import './Forms.css';
import NavBar from './navBar.js';

let element = document.createElement('input');
element.type = 'radio';

class FavouriteDessert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDessert: '',
      favoriteDessert: ''
    };
  }
  handleUserInput = (event) => {
    this.setState({
      selectedDessert: event.target.value
    });
  }
  handleSubmit = (event) => {
    this.setState({
      favoriteDessert: this.state.selectedDessert
    });
    event.preventDefault();
  }
  displayMessage = () => {
    if (this.state.favoriteDessert === '') {
      return '';
    }
    return `My favorite dessert is ${this.state.favoriteDessert}`;
  }
  renderDessertOptions = () => {
    let list = this.props.dessertList.map((eachDessert) => {
      return (<div>
              <input type='radio' value ={eachDessert} name='dessert' onChange={this.handleUserInput} className='radio-dot'></input>
              {eachDessert}
            </div>);
    });
    return list;
  }
  render() {

    return (
      <div>
      <div className='NavBar-Forms-Components'>
                <NavBar/>
                <div>Favourite Dessert</div>
            </div>
          <div>What is your favorite dessert?</div>
          <form onSubmit={this.handleSubmit}>
            <label>
              {this.renderDessertOptions()}
            </label> 
            <input type='submit' value='Make your choice'/>
          </form>
          <div>{this.displayMessage()}</div>
      </div>
    );
  }

}

export default FavouriteDessert;
