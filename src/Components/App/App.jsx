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

    if (!favorites.includes(cardProps)) {
      const newFavorites = [...favorites, cardProps];
      this.setState({ favorites: newFavorites });
    } else {
      const newFavorites = [...favorites.filter(card => card !== cardProps)];
      this.setState({ favorites: newFavorites });
    }
  };

  render() {
    const {
      favorites,
      filmData,
      peopleData,
      planetData,
      vehicleData
    } = this.state;

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
              render={() => (
                <Crawl setFilms={this.setFilms} filmData={filmData} />
              )}
            />

            <Route
              path="/people"
              render={() => (
                <People
                  setPeople={this.setPeople}
                  peopleData={peopleData}
                  clickHandler={this.clickHandler}
                  favorites={favorites}
                />
              )}
            />

            <Route
              path="/planets"
              render={() => (
                <Planets
                  setPlanets={this.setPlanets}
                  planetData={planetData}
                  clickHandler={this.clickHandler}
                  favorites={favorites}
                />
              )}
            />

            <Route
              path="/vehicles"
              render={() => (
                <Vehicles
                  setVehicles={this.setVehicles}
                  vehicleData={vehicleData}
                  clickHandler={this.clickHandler}
                  favorites={favorites}
                />
              )}
            />

            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  favorites={favorites}
                  clickHandler={this.clickHandler}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
