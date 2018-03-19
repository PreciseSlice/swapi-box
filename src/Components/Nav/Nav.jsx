import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ favCount }) => {
  return (
    <div className="nav">
      <button>
        <NavLink to="/">scroll</NavLink>
      </button>
      <button>
        <NavLink to="/people">people</NavLink>
      </button>
      <button>
        <NavLink to="/planets">planets</NavLink>
      </button>
      <button>
        <NavLink to="/vehicles">vehicles</NavLink>
      </button>
      <button>
        <NavLink to="/favorites">favorites {favCount}</NavLink>
      </button>
    </div>
  );
};

Nav.propTypes = {
  favCount: PropTypes.number.isRequired
};

export default Nav;
