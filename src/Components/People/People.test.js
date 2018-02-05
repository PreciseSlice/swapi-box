/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import People from './People';
import { shallow, mount, render } from 'enzyme';
import { peopleData } from '../apiCalls/apiMockData';

describe('People', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <People
        setPeople={jest.fn()}
        peopleData={peopleData}
        clickHandler={jest.fn()}
        favorites={peopleData}
      />
    );
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should get people data if it does not have it', () => {

  });

  it('renders a card for each object in the array it is passed', () => {
    expect(wrapper.find('.card').length).toEqual(2);
  });
  

});
