import React, { Component } from 'react';
import './Crawl.css';
import PropTypes from 'prop-types';
import { getFilms } from '../apiCalls/apiCaller';

class Crawl extends Component {
  async componentDidMount() {
    const { setFilms, filmData } = this.props;
    const randomFilm = Math.floor(Math.random() * 7 + 1);

    if (filmData) {
      const filmData = await getFilms(
        `https://swapi.co/api/films/${randomFilm}`
      );
      setFilms(filmData);
    }
  }

  romanize = num => {
    if (!+num) return NaN;
    let digits = String(+num).split(''),
      key = [
        '',
        'C',
        'CC',
        'CCC',
        'CD',
        'D',
        'DC',
        'DCC',
        'DCCC',
        'CM',
        '',
        'X',
        'XX',
        'XXX',
        'XL',
        'L',
        'LX',
        'LXX',
        'LXXX',
        'XC',
        '',
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX'
      ],
      roman = '',
      index = 3;
    while (index--) roman = (key[+digits.pop() + index * 10] || '') + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
  };

  render() {
    const { filmData } = this.props;

    // need condition for film data was checking if the array had length
    if (filmData) {
      return (
        <div className="crawl-container">
          <div className="fade" />
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <p>{`Episode ${this.romanize(filmData.episodeId)}`}</p>
                <h1>{filmData.title}</h1>
              </div>
              <p>{filmData.openingCrawl}</p>
              <h3>{`Release Date: ${filmData.releaseDate}`}</h3>
            </div>
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}

Crawl.propTypes = {
  filmData: PropTypes.object.isRequired
};

export default Crawl;
