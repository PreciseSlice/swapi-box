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
          <button onClick={() => navClickHandler()}>
            <NavLink to="/">crawl</NavLink>
          </button>
          <button onClick={() => navClickHandler()}>
            <NavLink to="/people">people</NavLink>
          </button>
          <button onClick={() => navClickHandler()}>
            <NavLink to="/planets">planets</NavLink>
          </button>
          <button onClick={() => navClickHandler()}>
            <NavLink to="/vehicles">vehicles</NavLink>
          </button>
          <button onClick={() => navClickHandler()}>
            <NavLink to="/favorites">favorites {favCount}</NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

Nav.propTypes = {
  favCount: PropTypes.number.isRequired,
  navVisable: PropTypes.bool.isRequired,
  navClickHandler: PropTypes.func.isRequired,
  navArrow: PropTypes.func.isRequired,
  mobile: PropTypes.bool.isRequired
};

export default Nav;
