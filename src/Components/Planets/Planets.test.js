/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Planets from './Planets';
import { shallow, mount, render } from 'enzyme';
import { cleanPlanets } from '../apiCalls/apiMockData';

describe('Planets', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Planets
        setPlanets={jest.fn()}
        planetData={cleanPlanets}
        clickHandler={jest.fn()}
        favorites={cleanPlanets}
      />
    );
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should get people data if it does not have it', () => {});

  it('renders a card for each object in the array it is passed', () => {
    expect(wrapper.find('.card').length).toEqual(10);
  });
});
