import React, { Component } from 'react';
import logo from './logo.svg';
import  image1 from './img/image1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Navigation">
            <span>
              <img src={logo} className="App-logo" alt="logo" />
            </span>
            <span>  // OptionsHeader
            </span>
        </div>
        <div className="SliderHome">
          <img src={image1} className="HomeSliderImages" />
        </div>
        <footer className="Footer">
          // OptionsFooter
        </footer>
      </div>

      // <div className="App">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   <header className="App-header">
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
