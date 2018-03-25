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
      favorites: [],
      navVisable: true,
      mobile: false
    };
  }

  setFilms = filmData => this.setState({ filmData });

  setPeople = peopleData => this.setState({ peopleData });

  setPlanets = planetData => this.setState({ planetData });

  setVehicles = vehicleData => this.setState({ vehicleData });

  favClickHandler = cardProps => {
    const { favorites } = this.state;
    let newFavorites;

    if (!favorites.includes(cardProps)) {
      newFavorites = [...favorites, cardProps];
    } else {
      newFavorites = [...favorites.filter(card => card !== cardProps)];
    }
    this.setState({ favorites: newFavorites });
  };

  navClickHandler = () => {
    const { mobile } = this.state;
    if (mobile === true) {
      const { navVisable } = this.state;
      this.setState({ navVisable: !navVisable });
    }
  };

  navArrow = () => {
    const { navVisable } = this.state;
    const arrow = navVisable ? '▼' : '◀';

    return arrow;
  };

  updateResponsive() {
    const { mobile } = this.state;
    if (window.innerWidth < 940 && mobile === false) {
      this.setState({ mobile: true });
      this.setState({ navVisable: false });
    }
  }

  componentDidMount() {
    this.updateResponsive();
    window.addEventListener('resize', () => this.updateResponsive());
  }

  render() {
    const {
      favorites,
      filmData,
      peopleData,
      planetData,
      navVisable,
      vehicleData,
      mobile
    } = this.state;

    const {
      favClickHandler,
      setFilms,
      setPeople,
      setPlanets,
      setVehicles,
      navClickHandler,
      navArrow
    } = this;

    return (
      <div className="app">
        <div className="header">
          <h1>swapi-box</h1>
        </div>
        <Nav
          favCount={favorites.length}
          navVisable={navVisable}
          navClickHandler={navClickHandler}
          navArrow={navArrow}
          mobile={mobile}
        />
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
                  favClickHandler={favClickHandler}
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
                  favClickHandler={favClickHandler}
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
                  favClickHandler={favClickHandler}
                  favorites={favorites}
                />
              )}
            />

            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  favorites={favorites}
                  favClickHandler={favClickHandler}
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
