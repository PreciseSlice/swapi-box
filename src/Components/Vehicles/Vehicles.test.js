/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './Vehicles';
import { shallow, mount, render } from 'enzyme';
import { cleanVehicles } from '../apiCalls/apiMockData';

describe('Vehicles', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Vehicles
        setVehicles={jest.fn()}
        vehicleData={cleanVehicles}
        clickHandler={jest.fn()}
        favorites={cleanVehicles}
      />
    )
  })

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should get people data if it does not have it', () => {});

  it('renders a card for each object in the array it is passed', () => {
    expect(wrapper.find('.card').length).toEqual(10);
  });

});