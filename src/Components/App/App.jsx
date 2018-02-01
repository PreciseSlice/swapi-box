import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';
import Nav from '../Nav/Nav.jsx';
import People from '../People/People.jsx';
import Planets from '../Planets/Planets.jsx';
import Vehicles from '../Vehicles/Vehicles.jsx';
import Crawl from '../Crawl/Crawl';

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
    const filmMap = cleanFilms.results.map(async film => {
      const title = film.title;
      const episodeId = film.episode_id;
      const openingCrawl = film.opening_crawl;
      const releaseYear = film.release_date;

      return { title, episodeId, openingCrawl, releaseYear };
    });
    return filmMap;
  };

  setPeople = peopleData => this.setState({ peopleData });

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Header />
        <Nav />
        <div className="main">
          <Switch>
            <Route exact path="/" render={() => <Crawl />} />
            <Route
              path="/people"
              render={() => (
                <People
                  setPeople={this.setPeople}
                  peopleData={this.state.peopleData}
                />
              )}
            />
            <Route path="/planets" render={() => <Planets />} />
            <Route path="/vehicles" render={() => <Vehicles />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// Footer with major styling and gif/image backgroud dark space fleet img might
// work well for the background of the whole thing.
// Second image with closer perspective on the footer
