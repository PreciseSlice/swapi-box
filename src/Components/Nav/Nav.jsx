import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ favCount, navVisable, navClickHandler, navArrow, mobile }) => {
  return (
    <div className="nav">
      {mobile && (
        <button onClick={() => navClickHandler()}>menu {navArrow()}</button>
      )}
      {navVisable && (
        <div className="nav-btns">
          <button>
            <NavLink to="/">crawl</NavLink>
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
      )}
    </div>
  );
};

Nav.propTypes = {
  favCount: PropTypes.number.isRequired
};

export default Nav;
