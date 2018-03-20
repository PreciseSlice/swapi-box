import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ data, clickHandler, highlighted }) => {
  const dataKeys = Object.keys(data).filter(keys => keys !== 'name');

  const keyMap = dataKeys.map((value, index) => {
    return <li key={`${Date.now}${index}`}>{`${value}: ${data[value]}`}</li>;
  });

  return (
    <div className={'card ' + highlighted}>
      <h1>{data.name}</h1>
      <ul>{keyMap}</ul>
      <button onClick={() => clickHandler(data)}>favorite</button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.Object
}.isRequired;
