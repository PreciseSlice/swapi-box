import React, { Component } from 'react';
import './Planets.css';
import { getPlanets } from '../../apiCalls/apiCaller';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';

class Planets extends Component {
  async componentDidMount() {
    const { setPlanets, planetData } = this.props;
    if (!planetData.length) {
      const planetData = await getPlanets('https://swapi.co/api/planets/');
      setPlanets(planetData);
    }
  }

  render() {
    const { planetData, favClickHandler, favorites } = this.props;

    const renderCards = planetData.map(planet => {
      const highlighted = favorites.includes(planet) ? 'highlighted' : '';
      return (
        <Card
          data={planet}
          key={planet.name}
          favClickHandler={favClickHandler}
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
  favClickHandler: PropTypes.func.isRequired,

  favorites: PropTypes.array.isRequired,

  planetData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      terrain: PropTypes.string.isRequired,
      climate: PropTypes.string.isRequired,
      residents: PropTypes.string.isRequired,
      population: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired
    }).isRequired
  ).isRequired
};

export default Planets;
