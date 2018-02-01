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
      films: [],
      peopleData: []
    };
  }
  
  componentDidMount() {
    const films = this.getFilms();
    this.setState({
      films
    });
  }

  // crawl should make this call 
  // pick 0-7 at random, get text from ."opening_crawl"

  getFilms = async () => {
    const fetchFilmData = await fetch('https://swapi.co/api/films/');
    const cleanFilms = await fetchFilmData.json();
    const filmMap = cleanFilms.results.map( async film => {
      const title = film.title;
      const episodeId = film.episode_id;
      const openingCrawl = film.opening_crawl;
      const releaseYear = film.release_date;

      return { title, episodeId, openingCrawl, releaseYear }
    });
    return filmMap
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
        <Main setPeople={(peopleData) => this.setState({ peopleData })} 
          peopleData={this.state.peopleData} />
      </div>
    );
  }
}

export default App;

// Footer with major styling and gif/image backgroud dark space fleet img might
// work well for the background of the whole thing.
// Second image with closer perspective on the footer