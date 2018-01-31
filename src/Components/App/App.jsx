import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import Nav from '../Nav/Nav.jsx';
import Main from '../Main/Main';
//import { Route, NavLink, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: []
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;

// https://swapi.co/api/films/ .results has an array with all seven films
// pick 0-7 at random, get text from ."opening_crawl"

// Footer with major styling and gif/image backgroud dark space fleet img might
// work well for the background of the whole thing.
// Second image with closer perspective on the footer

// Landing page does the scroll intro and then go to main page
// or scroll in nav and then cards render
