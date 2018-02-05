/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './Vehicles';
import { shallow, mount } from 'enzyme';
import { cleanVehicles } from '../apiCalls/apiMockData';

describe('Vehicles', () => {
  let wrapper;
  let mockFunction;
  let secondMockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
    secondMockFunction = jest.fn();
    wrapper = mount(
      <Vehicles
        setVehicles={mockFunction}
        vehicleData={cleanVehicles}
        clickHandler={secondMockFunction}
        favorites={cleanVehicles}
      />
    );
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should get people data if it does not have it, by calling getPeople.', async () => {
    wrapper = shallow(
      <Vehicles
        setVehicles={mockFunction}
        vehicleData={[]}
        clickHandler={secondMockFunction}
        favorites={cleanVehicles}
      />
    );

    await wrapper.instance().componentDidMount();
    expect(mockFunction).toHaveBeenCalled();
  });

  it('renders a card for each object in the array it is passed', () => {
    expect(wrapper.find('.card').length).toEqual(10);
  });
});
