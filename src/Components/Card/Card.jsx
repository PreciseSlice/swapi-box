import React from 'react';
import './Card.css';
// import PropTypes from 'prop-types';

const Card = ({ person, planet, vehicle }) => {
  return (
    <div className="card">
      {person && (
        <div className="person-card">
          <h1>{person.name}</h1>
          <div>
            <h3>{`Homeworld: ${person.homeworld}`}</h3>
            <h3>{`Population: ${person.population}`}</h3>
            <h3>{`Species: ${person.speciesName}`}</h3>
            {/* favorite button */}
          </div>
        </div>
      )}

      {planet && (
        <div className="planet-card">
          <h1>{planet.name}</h1>
          <div>
            <h3>{`Terrain: ${planet.terrain}`}</h3>
            <h3>{`Population: ${planet.population}`}</h3>
            <h3>{`Climate: ${planet.climate}`}</h3>
            <h3>{`Residents: ${planet.residents} `}</h3>
            {/* Favorite Button */}
          </div>
        </div>
      )}

      {vehicle && (
        <div className="vehicle-card">
          <h1>{vehicle.name}</h1>
          <div>
            <h3>{`Model: ${vehicle.model}`}</h3>
            <h3>{`Class: ${vehicle.vehicleClass}`}</h3>
            <h3>{`Passangers: ${vehicle.passengers}`}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

// how do I conditionally check only the prop passed?
// need to be able to validate a prop that is only somtimes passed

// Card.propTypes = {

//   person: PropTypes.objectOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       homeWolrd: PropTypes.string.isRequired,
//       population: PropTypes.number.isRequired,
//       speciesName: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,

//   planet: PropTypes.objectOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       terrain: PropTypes.string.isRequired,
//       population: PropTypes.number.isRequired,
//       climate: PropTypes.string.isRequired,
//       residents: PropTypes.objectOf(
//         PropTypes.shape({})
//       ).isRequired
//     }).isRequired
//   ).isRequired
// };

//   vehicle: PropTypes.objectOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       terrain: PropTypes.string.isRequired,
//       population: PropTypes.number.isRequired,
//       climate: PropTypes.string.isRequired,
//       residents: PropTypes.objectOf(
//         PropTypes.shape({})
//       ).isRequired
//     }).isRequired
//   ).isRequired
// };
