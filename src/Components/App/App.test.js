/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import {
  cleanFilms,
  cleanPeople,
  cleanPlanets,
  cleanVehicles
} from '../apiCalls/apiMockData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should start with a default properties', () => {
    expect(wrapper.state().filmData).toEqual({});
    expect(wrapper.state().peopleData).toEqual([]);
    expect(wrapper.state().planetData).toEqual([]);
    expect(wrapper.state().vehicleData).toEqual([]);
    expect(wrapper.state().favorites).toEqual([]);
  });

  it('Have methods for setting data to state', () => {
    expect(wrapper.state().filmData).toEqual({});
    expect(wrapper.state().peopleData).toEqual([]);
    expect(wrapper.state().planetData).toEqual([]);
    expect(wrapper.state().vehicleData).toEqual([]);

    wrapper.instance().setFilms(cleanFilms);
    wrapper.instance().setPeople(cleanPeople);
    wrapper.instance().setPlanets(cleanPlanets);
    wrapper.instance().setVehicles(cleanVehicles);

    expect(wrapper.state().filmData).toEqual(cleanFilms);
    expect(wrapper.state().peopleData).toEqual(cleanPeople);
    expect(wrapper.state().planetData).toEqual(cleanPlanets);
    expect(wrapper.state().vehicleData).toEqual(cleanVehicles);
  });

  it('Have a click handler which puts clicked objects in state and removes them if they are clicked once more', () => {
    const cardProp = { name: 'Alderaan' };

    expect(wrapper.state().favorites).toEqual([]);

    wrapper.instance().clickHandler(cardProp);

    expect(wrapper.state().favorites).toEqual([cardProp]);

    wrapper.instance().clickHandler(cardProp);

    expect(wrapper.state().favorites).toEqual([]);
  });
});
