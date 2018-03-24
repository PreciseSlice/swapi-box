import React from 'react';
import './Favorites.css';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';

const Favorites = ({ favorites, favClickHandler }) => {
  const renderCards = favorites.map(favorite => (
    <Card
      data={favorite}
      key={favorite.name}
      favClickHandler={favClickHandler}
    />
  ));

  if (favorites.length > 0) {
    return <div className="favoriteContainer">{renderCards}</div>;
  } else {
    return (
      <div className="noFavorites">
        <h1>No Favorites Selected!</h1>
      </div>
    );
  }
};

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  favClickHandler: PropTypes.func.isRequired
};

export default Favorites;
