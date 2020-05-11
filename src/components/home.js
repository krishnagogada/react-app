import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Login, UserName, Password, LoginButton } from './styledComponent.js';

@observer
export default class Home extends React.Component {

  @observable isLogged = true
  @observable userName = '';
  @observable password = '';

  onChangeUserName = (event) => {
    this.userName = event.target.value;
  }
  onChangepassword = (event) => {
    this.password = event.target.value;
  }
  // onLoginClick = () => {

  // gotoGridScreenIfLoggedIn = () => {

  //   return (
  //     <Redirect to = { {pathname: '/login-page' }} />);
  // }

  render() {
    // if (this.isLogged) {
    //   return <Login>
    //             <UserName type='text' defaultValue={this.userName} onChange={this.onChangeUserName}/>
    //             <Password type='password' defaultValue={this.password} onChangepassword={this.onChangepassword}/>
    //             <LoginButton onClick={this.onLoginClick}>Login</LoginButton>
    //         </Login>;
    // }
    return (
      <div>
            <h1>Projects</h1>
            <div>
              <Link to="/CarsApp">CarsApp</Link>
            </div>
            <div>
              <Link to="/ToDoListApp">ToDoList</Link>
            </div>
            <div>
              <Link to="/mobx-todo-app">MobX-ToDoList</Link>
            </div>
            <div>
              <Link to="/events-app">Event Page</Link>
            </div>
            <div>
              <Link to="/Forms">Forms Components</Link>
            </div>
            <div>
              <Link to="/counter-page">Counter</Link>
            </div>
            <div>
              <Link to="/Countries">Countries DashBoard</Link>
            </div>
            <div>
              <Link to="/Emoji">Emoji Game</Link>
            </div>
            <div>
              <Link to="/grid-game">Grid Game</Link>
            </div>
            {/*<div>
              <Link to="/HiddenMessage">Hands On</Link>
            </div>*/}
            <div>
              <Link to="/loading-errors">TryOuts On LoadingAnd Errors</Link>
            </div>
            <div>
              <Link to="/todo-with-services">Todo App With Service</Link>
            </div>
            <div>
              <Link to="/ecommerce-store/products/">E CommerceStore</Link>
            </div>
        </div>);
  }

}
