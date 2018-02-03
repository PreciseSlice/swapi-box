import React, { Component } from 'react';
import './People.css';
import { getPeople } from '../apiCalls/apiCaller';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';

class People extends Component {
  async componentDidMount() {
    const { setPeople, peopleData } = this.props;
    if (peopleData.length < 1) {
      const peopleData = await getPeople();
      setPeople(peopleData);
    }
  }

  // can the render be refactored to a return?
  render() {
    const { peopleData, clickHandler, favorites } = this.props;

    const renderCards = peopleData.map(person => {
      const highlighted = favorites.includes(person) ? 'highlighted' : '';
      return (
        <Card
          data={person}
          key={person.name}
          clickHandler={clickHandler}
          highlighted={highlighted}
        />
      );
    });

    if (peopleData) {
      return <div className="peopleContainer">{renderCards}</div>;
    } else {
      return null;
    }
  }
}

People.propTypes = {
  
  clickHandler: PropTypes.func.isRequired,
  
  favorites: PropTypes.array.isRequired,
  
  peopleData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      //homeWolrd: PropTypes.string.isRequired,
      //population: PropTypes.number.isRequired,
      speciesName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default People;
