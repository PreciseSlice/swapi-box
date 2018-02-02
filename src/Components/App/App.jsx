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
      vehicleData: []
    };
  }

  setFilms = filmData => this.setState({ filmData });

  setPeople = peopleData => this.setState({ peopleData });

  setPlanets = planetData => this.setState({ planetData });

  setVehicles = vehicleData => this.setState({ vehicleData });

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
                />
              )}
            />

            <Route 
              path="/planets" 
              render={() => (
                <Planets 
                  setPlanets={this.setPlanets}
                  planetData={this.state.planetData}  
                />
              )}
            />

            <Route 
              path="/vehicles" 
              render={() => ( 
                <Vehicles 
                  setVehicle={this.setVehicles}
                  planetData={this.state.vehicleData}  
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

// Footer with major styling and gif/image backgroud dark space fleet img might
// work well for the background of the whole thing.
// Second image with closer perspective on the footer
