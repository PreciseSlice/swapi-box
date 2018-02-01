import React, { Component } from 'react';
import './People.css';

class People extends Component {
  async componentDidMount() {
    const { setPeople, peopleData } = this.props;
    // do i need an || data.length === 1 to let the user get 10 new cards?
    if (peopleData.length < 1) {
      const peopleData = await this.getPeople();
      setPeople(peopleData);
    }
  }

  // map over data
  // all will have a boolean of isFavorite
  // use names as key

  getPeople = async () => {
    const fetchPeopleData = await fetch('https://swapi.co/api/people/');
    const cleanPeople = await fetchPeopleData.json();
    const peopleMap = cleanPeople.results.map(async person => {
      const name = person.name;

      const fetchHomeworld = await fetch(person.homeworld);
      const cleanHomeworld = await fetchHomeworld.json();

      const homeworld = cleanHomeworld.name;
      const population = cleanHomeworld.population;

      const fetchSpecies = await fetch(person.species);
      const cleanSpecies = await fetchSpecies.json();
      const speciesName = cleanSpecies.name;

      return { name, homeworld, population, speciesName };
    });
    return Promise.all(peopleMap);
  };

  render() {
    return (
      <div className="people">
        <h3>I AM A PERSON</h3>
      </div>
    );
  }
}

export default People;
