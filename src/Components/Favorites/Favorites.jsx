import React from 'react';
import './Favorites.css';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';

const Favorites = ({ favorites }) => {
  const renderCards = favorites.map(favorite => (
    <Card data={favorite} key={favorite.name} />
  ));
  return <div className="favoriteContainer">{renderCards}</div>;
};

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
};

export default Favorites;
