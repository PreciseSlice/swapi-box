import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

let FavCount = 0;

const Nav = () => {
  return (
    <div className="nav">
      <button>
        <NavLink to="/">Opening Crawl</NavLink>
      </button>
      <button>
        <NavLink to="/people">People</NavLink>
      </button>
      <button>
        <NavLink to="/planets">Planets</NavLink>
      </button>
      <button>
        <NavLink to="/vehicles">Vehicles</NavLink>
      </button>
      <button>
        <NavLink to="/favorites">View Favorites {FavCount}</NavLink>
      </button>
    </div>
  );
};

export default Nav;
