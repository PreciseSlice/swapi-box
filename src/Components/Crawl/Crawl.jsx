import React, { Component } from 'react';
import './Crawl.css';
import PropTypes from 'prop-types';
import { getFilms } from '../apiCalls/apiCaller';

class Crawl extends Component {
  async componentDidMount() {
    const { setFilms, filmData } = this.props;
    if (filmData.length < 1) {
      const filmData = await getFilms();
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
    if (filmData.length) {
      const randomFilm = filmData[Math.floor(Math.random() * filmData.length)];
      return (
        <div className="crawl-container">
          <div className="fade" />
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <p>{`Episode ${this.romanize(randomFilm.episodeId)}`}</p>
                <h1>{randomFilm.title}</h1>
              </div>
              <p>{randomFilm.openingCrawl}</p>
              <h3>{`Release Date: ${randomFilm.releaseDate}`}</h3>
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
  filmData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      episodeId: PropTypes.number.isRequired,
      openingCrawl: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Crawl;
