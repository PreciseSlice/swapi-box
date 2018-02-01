import React, { Component } from 'react';
import './People.css';
import { getPeople } from '../apiCalls/apiCaller'
//import PropTypes from 'prop-types';

class People extends Component {
  async componentDidMount() {
    const { setPeople, peopleData } = this.props;
    if (peopleData.length < 1) {
      const peopleData = await getPeople();
      setPeople(peopleData);
    }
  }

  // map and pass cards 

  render() {
    const { peopleData } = this.props;
    if (peopleData) {
      return (
        <div className="people">
          {/* <h1>peopleData.name</h1>
          <h3>peopleData.homeworld</h3>
          <h3>peopleData.population</h3>
          <h3>peopleData.speciesName</h3> */}
          {/* favorite button */}
        </div>
      );
    } else {
      return null
    }
  }
}

export default People;

// People.propTypes = {
//   filmData: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       episodeId: PropTypes.number.isRequired,
//       openingCrawl: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// };