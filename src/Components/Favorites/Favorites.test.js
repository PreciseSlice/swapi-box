/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites';
import { shallow, mount } from 'enzyme';

describe('Favorites', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Favorites
        favorites={[
          {
            name: 'Alderaan',
            climate: 'temperate',
            terrain: 'grasslands, mountains',
            population: '2000000000'
          },
          {
            homeworld: 'planet',
            name: 'Luke Skywalker',
            population: 1000000,
            species: ['human']
          },
          {
            homeworld: 'planet',
            name: 'C-3PO',
            population: 100000,
            species: ['droid']
          }
        ]}
        clickHandler={jest.fn()}
      />
    );
  });

  describe('Favorites', () => {
    it('Exist and matches snapshot', () => {
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });

    it('renders a card for each object in the array it is passed', () => {
      expect(wrapper.find('.card').length).toEqual(3);
    });
  });
});
