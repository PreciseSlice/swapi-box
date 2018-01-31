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
    const peopleData = this.getPeople();
    const films = this.getfilms();
    this.setState({
      peopleData
    });
  }

  getFilms = async () => {
    const fetchFilmData = await fetch('https://swapi.co/api/films/');
  };

  getPeople = async () => {
    const fetchPeopleData = await fetch('https://swapi.co/api/people/');
    const cleanPeople = await fetchPeopleData.json();
    const peopleMap = cleanPeople.results.map(async person => {
      const name = person.name;
      const fetchHomeworld = await fetch(person.homeworld);
      const cleanHomeworld = await fetchHomeworld.json();

      const homeworld = cleanHomeworld.name;
      const population = cleanHomeworld.population;

      const fetchSpecies = await fetch(person.species);
      const cleanSpecies = await fetchSpecies.json();
      const speciesName = cleanSpecies.name;

      return { name, homeworld, population, speciesName };
    });
    return Promise.all(peopleMap);
  };

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
