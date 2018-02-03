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
      filmData: [],
      peopleData: [],
      planetData: [],
      vehicleData: [],
      selected: []
    };
  }

  setFilms = filmData => this.setState({ filmData });

  setPeople = peopleData => this.setState({ peopleData });

  setPlanets = planetData => this.setState({ planetData });

  setVehicles = vehicleData => this.setState({ vehicleData });

  clickHandler = cardProps => {
    if (!this.state.selected.includes(cardProps)) {
      const selected = [...this.state.selected, cardProps];
      this.setState({ selected });
    } else {
      const selected = [
        ...this.state.selected.filter(card => card !== cardProps)
      ];
      this.setState({ selected });
    }
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
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
            {/* styling refactor with div around next three */}
            <Route
              path="/people"
              render={() => (
                <People
                  setPeople={this.setPeople}
                  peopleData={this.state.peopleData}
                  clickHandler={this.clickHandler}
                  selected={this.state.selected}
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
                  selected={this.state.selected}
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
                  selected={this.state.selected}
                />
              )}
            />

            {/* favorites component */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// Second image with closer perspective on the footer
