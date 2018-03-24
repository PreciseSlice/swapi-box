/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Planets from './Planets';
import { shallow, mount } from 'enzyme';
import { cleanPlanets } from '../../apiCalls/apiMockData';

describe('Planets', () => {
  let wrapper;
  let mockFunction;
  let secondMockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
    secondMockFunction = jest.fn();
    wrapper = mount(
      <Planets
        setPlanets={mockFunction}
        planetData={cleanPlanets}
        favClickHandler={secondMockFunction}
        favorites={cleanPlanets}
      />
    );
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should get planet data if it does not have it, by calling getPlanets.', async () => {
    wrapper = shallow(
      <Planets
        setPlanets={mockFunction}
        planetData={[]}
        favClickHandler={secondMockFunction}
        favorites={cleanPlanets}
      />
    );

    await wrapper.instance().componentDidMount();
    expect(mockFunction).toHaveBeenCalled();
  });

  it('renders a card for each object in the array it is passed', () => {
    expect(wrapper.find('.card').length).toEqual(10);
  });
});
