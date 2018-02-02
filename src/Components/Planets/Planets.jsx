import React, { Component } from 'react';
import './Planets.css';
import { getPlanets } from '../apiCalls/apiCaller';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';

class Planets extends Component {
  async componentDidMount() {
    const { setPlanets, planetData } = this.props;
    if (planetData.length < 1) {
      const planetData = await getPlanets();
      setPlanets(planetData);
    }
  }

  render() {
    const { planetData } = this.props;

    const renderCards = planetData.map(planet => (
      <Card planet={planet} key={planet.name} />
    ));

    if (planetData) {
      return <div className="planet-container">{renderCards}</div>;
    } else {
      return null;
    }
  }
}

Planets.propTypes = {
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
