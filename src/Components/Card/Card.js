import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ person }) => {
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
    </div>
  );
};

export default Card;

Card.propTypes = {
  person: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      homeWolrd: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      speciesName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
