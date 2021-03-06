import React, { Component } from 'react';
import './Vehicles.css';
import { getVehicles } from '../../apiCalls/apiCaller';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';

class Vehicles extends Component {
  async componentDidMount() {
    const { setVehicles, vehicleData } = this.props;
    if (!vehicleData.length) {
      const vehicleData = await getVehicles('https://swapi.co/api/vehicles/');
      setVehicles(vehicleData);
    }
  }

  render() {
    const { vehicleData, favClickHandler, favorites } = this.props;

    const renderCards = vehicleData.map(vehicle => {
      const highlighted = favorites.includes(vehicle) ? 'highlighted' : '';
      return (
        <Card
          data={vehicle}
          key={vehicle.name}
          favClickHandler={favClickHandler}
          highlighted={highlighted}
        />
      );
    });

    if (vehicleData) {
      return <div className="vehicle-container">{renderCards}</div>;
    } else {
      return null;
    }
  }
}

Vehicles.propTypes = {
  favClickHandler: PropTypes.func.isRequired,

  favorites: PropTypes.array.isRequired,

  vehicleData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      vehicleClass: PropTypes.string.isRequired,
      passengers: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ])
    }).isRequired
  ).isRequired
};

export default Vehicles;
