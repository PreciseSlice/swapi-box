import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

let FavCount = 0;

const Header = () => {
  return (
    <div className="header">
      <h1>SWapi-box</h1>
      <button>
        <NavLink to="/favorites">View Favorites {FavCount}</NavLink>
      </button>
    </div>
  );
};

export default Header;
