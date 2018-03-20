import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav.jsx';
import People from '../People/People.jsx';
import Planets from '../Planets/Planets.jsx';
import Vehicles from '../Vehicles/Vehicles.jsx';
import Crawl from '../Crawl/Crawl';
import Favorites from '../Favorites/Favorites.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmData: {},
      peopleData: [],
      planetData: [],
      vehicleData: [],
      favorites: []
    };
  }

  setFilms = filmData => this.setState({ filmData });

  setPeople = peopleData => this.setState({ peopleData });

  setPlanets = planetData => this.setState({ planetData });

  setVehicles = vehicleData => this.setState({ vehicleData });

  clickHandler = cardProps => {
    const { favorites } = this.state;
    let newFavorites;

    if (!favorites.includes(cardProps)) {
      newFavorites = [...favorites, cardProps];
    } else {
      newFavorites = [...favorites.filter(card => card !== cardProps)];
    }
    this.setState({ favorites: newFavorites });
  };

  render() {
    const {
      favorites,
      filmData,
      peopleData,
      planetData,
      vehicleData
    } = this.state;

    const { clickHandler, setFilms, setPeople, setPlanets, setVehicles } = this;

    return (
      <div className="app">
        <div className="header">
          <h1>swapi-box</h1>
        </div>
        <Nav favCount={favorites.length} />
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Crawl setFilms={setFilms} filmData={filmData} />}
            />

            <Route
              path="/people"
              render={() => (
                <People
                  setPeople={setPeople}
                  peopleData={peopleData}
                  clickHandler={clickHandler}
                  favorites={favorites}
                />
              )}
            />

            <Route
              path="/planets"
              render={() => (
                <Planets
                  setPlanets={setPlanets}
                  planetData={planetData}
                  clickHandler={clickHandler}
                  favorites={favorites}
                />
              )}
            />

            <Route
              path="/vehicles"
              render={() => (
                <Vehicles
                  setVehicles={setVehicles}
                  vehicleData={vehicleData}
                  clickHandler={clickHandler}
                  favorites={favorites}
                />
              )}
            />

            <Route
              path="/favorites"
              render={() => (
                <Favorites favorites={favorites} clickHandler={clickHandler} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
