/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import { shallow, mount, render } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        data={{
          name: 'Alderaan',
          climate: 'temperate',
          terrain: 'grasslands, mountains',
          population: '2000000000'
        }}
      />
    );
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should take all data except name: passed into it and make li items using the key value pairs', () => {
    expect(wrapper.find('li').length).toEqual(3);
    expect(wrapper.find('li').first().text()).toEqual('climate: temperate')
    expect(wrapper.find('li').last().text()).toEqual('population: 2000000000')
  });
});
