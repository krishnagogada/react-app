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
              <Link to="/Forms">Forms Components</Link>
            </div>
            <div>
              <Link to="/Countries">Countries DashBoard</Link>
            </div>
             <div>
              <Link to="/Emoji">Emoji Game</Link>
            </div>
        </div>);
}
