import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ favCount }) => {
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
        <NavLink to="/favorites">View Favorites {favCount}</NavLink>
      </button>
    </div>
  );
};

Nav.propTypes = {
  favCount: PropTypes.number.isRequired
};

export default Nav;
