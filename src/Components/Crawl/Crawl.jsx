import React, { Component } from 'react';
import './Crawl.css';

class Crawl extends Component {
  async componentDidMount() {
    const { setFilms, filmData } = this.props;
    if (filmData.length < 1) {
      const filmData = await this.getFilms();
      setFilms(filmData);
    }
  }

  getFilms = async () => {
    const fetchFilmData = await fetch('https://swapi.co/api/films/');
    const cleanFilms = await fetchFilmData.json();
    const filmMap = cleanFilms.results.map(async film => {
      const title = film.title;
      const episodeId = film.episode_id;
      const openingCrawl = film.opening_crawl;
      const releaseYear = film.release_date;

      return { title, episodeId, openingCrawl, releaseYear };
    });
    return Promise.all(filmMap);
  };

  render() {
    return (
      <div className="crawl-container">
        <div className="fade" />
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode IV</p>
              <h1>A New Hope</h1>
            </div>

            <p>
              It is a period of civil war. Rebel spaceships, striking from a
              hidden base, have won their first victory against the evil
              Galactic Empire.
            </p>
            <p>
              During the battle, Rebel spies managed to steal secret plans to
              the Empire’s ultimate weapon, the DEATH STAR, an armored space
              station with enough power to destroy an entire planet.
            </p>
            <p>
              Pursued by the Empire’s sinister agents, Princess Leia races home
              aboard her starship, custodian of the stolen plans that can save
              her people and restore freedom to the galaxy…
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Crawl;
