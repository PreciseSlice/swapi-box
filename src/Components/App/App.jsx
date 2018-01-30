import React, { Component } from 'react';
import './App.css';

// https://swapi.co/api/films/ .results has an array with all seven films
// pick 0-7 at random, get text from ."opening_crawl"  

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scoll: []
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Header />> with view favorites button */}
        <h1>Swapi-box</h1>
        {/* three <buttons></buttons> in container below header */}
        {/* Main container displays opening scroll then cards. Skip button for scroll? */}
        {/* Footer with major styling and gif/image backgroud dark space fleet img might 
            work well for the background of the whole thing. Second image with closer perspective on the footer */}
      </div>
    );
  }
}

export default App;
