import React from 'react';
import './Header.css';
import FavButton from '../FavButton/FavButton.jsx'

const Header = (props) => {
  return (
    <div className="header">
      <h1>Swapi-box</h1>
      <FavButton />
    </div>
  )
}

export default Header;