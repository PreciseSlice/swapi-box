import React, { Component } from 'react';
import './Planets.css';
import { getPlanets } from '../apiCalls/apiCaller';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';

class Planets extends Component {
  async componentDidMount() {
    const { setPlanets, planetData } = this.props;
    if (planetData.length < 1) {
      const planetData = await getPlanets('https://swapi.co/api/planets/');
      setPlanets(planetData);
    }
  }

  render() {
    const { planetData, clickHandler, favorites } = this.props;

    const renderCards = planetData.map(planet => {
      const highlighted = favorites.includes(planet) ? 'highlighted' : '';
      return (
        <Card
          data={planet}
          key={planet.name}
          clickHandler={clickHandler}
          highlighted={highlighted}
        />
      );
    });

    if (planetData) {
      return <div className="planet-container">{renderCards}</div>;
    } else {
      return null;
    }
  }
}

Planets.propTypes = {

  clickHandler: PropTypes.func.isRequired,

  favorites: PropTypes.array.isRequired,

  planetData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      terrain: PropTypes.string.isRequired,
      //population: PropTypes.number.isRequired, //somtimes a string
      climate: PropTypes.string.isRequired
      //residents: PropTypes.arrayOf().isRequired,
    }).isRequired
  ).isRequired
};

export default Planets;
