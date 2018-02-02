import React from 'react';
import './Card.css';
// import PropTypes from 'prop-types';

const Card = ({ person, planet }) => {
  //console.log(planet)
  return (
    <div className="card">
      {person && (
        <div className="personCard">
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
        <div className="planetCard">
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
