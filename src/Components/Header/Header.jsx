import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

let FavCount = 0;

const Header = () => {
  return (
    <div className="header">
      <h1>Swapi-box</h1>
      <button>
        <Link to="">View Favorites {FavCount}</Link>
      </button>
    </div>
  );
};

export default Header;
