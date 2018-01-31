import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <div className="nav">
      <button>
        <Link to="">People</Link>
      </button>
      <button>
        <Link to="">Planets</Link>
      </button>
      <button>
        <Link to="">Vehicles</Link>
      </button>
    </div>
  );
};

export default Nav;
