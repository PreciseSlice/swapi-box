import React, { Component } from 'react';
import './Vehicles.css';
import { getVehicles } from '../apiCalls/apiCaller';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';

class Vehicles extends Component {
  async componentDidMount() {
    const { setVehicles, vehicleData } = this.props;
    if (vehicleData.length < 1) {
      const vehicleData = await getVehicles();
      setVehicles(vehicleData);
    }
  }

  render() {
    const { vehicleData } = this.props;

    const renderCards = vehicleData.map(vehicle => (
      <Card vehicle={vehicle} key={vehicle.name} />
    ));

    if (vehicleData) {
      return <div className="vehicle-container">{renderCards}</div>;
    } else {
      return null;
    }
  }
}

Vehicles.propTypes = {
  vehicleData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      vehicleClass: PropTypes.string.isRequired,
      passengers: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default Vehicles;
