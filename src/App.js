import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""/>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="content__img">
          <img src="http://shapka-youtube.ru/wp-content/uploads/2018/10/beztexta-category.jpg" alt="Шапка"/>
        </div>
        <div>
          {/* AVATAR + DESCRIPTION */}
        </div>
      </div>
    </div>
  );
};



export default App;
