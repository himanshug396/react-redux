import React, { Component } from 'react';

import logo from '../logo.svg';
class Navbar extends Component{
  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };
  render() {
    return (
      <nav>
        <div className="Navigation">
            <span>
              <img src={logo} className="App-logo" alt="logo" />
            </span>
            <span className="narrowLinks">
              <a href="#" >Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </span>
        </div>
      </nav>
    );
  };
}

export default Navbar;
