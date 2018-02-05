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
    if (!this.state.favorites.includes(cardProps)) {
      const favorites = [...this.state.favorites, cardProps];
      this.setState({ favorites });
    } else {
      const favorites = [
        ...this.state.favorites.filter(card => card !== cardProps)
      ];
      this.setState({ favorites });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>swapi-box</h1>
        </div>
        <Nav favCount={this.state.favorites.length} />
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Crawl
                  setFilms={this.setFilms}
                  filmData={this.state.filmData}
                />
              )}
            />

            <Route
              path="/people"
              render={() => (
                <People
                  setPeople={this.setPeople}
                  peopleData={this.state.peopleData}
                  clickHandler={this.clickHandler}
                  favorites={this.state.favorites}
                />
              )}
            />

            <Route
              path="/planets"
              render={() => (
                <Planets
                  setPlanets={this.setPlanets}
                  planetData={this.state.planetData}
                  clickHandler={this.clickHandler}
                  favorites={this.state.favorites}
                />
              )}
            />

            <Route
              path="/vehicles"
              render={() => (
                <Vehicles
                  setVehicles={this.setVehicles}
                  vehicleData={this.state.vehicleData}
                  clickHandler={this.clickHandler}
                  favorites={this.state.favorites}
                />
              )}
            />

            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  favorites={this.state.favorites}
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
