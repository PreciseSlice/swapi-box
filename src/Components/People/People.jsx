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

  render() {
    const { peopleData } = this.props;
    
    const renderCards = peopleData.map(person => (
      <Card person={person} key={person.name} />
    ));
    
    if (peopleData) {
      return <div className="peopleContainer">{renderCards}</div>;
    } else {
      return null;
    }
  }
}

export default People;

People.propTypes = {
  peopleData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      //homeWolrd: PropTypes.string.isRequired,
      //population: PropTypes.number.isRequired,
      speciesName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
