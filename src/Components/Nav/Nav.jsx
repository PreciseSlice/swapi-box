import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

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
    </div>
  );
};

export default Nav;
