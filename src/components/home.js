import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
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
            <div>
              <Link to="/Hands-On">Hands On</Link>
            </div>
            <div>
              <Link to="/loading-errors">TryOuts On Loading And Errors</Link>
            </div>
            <div>
              <Link to="/todo-with-services">Todo App With Service</Link>
            </div>
        </div>);
}
