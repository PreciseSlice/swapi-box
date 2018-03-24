/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Nav
        favCount={4}
        navVisable={false}
        navClickHandler={jest.fn()}
        navArrow={jest.fn()}
        mobile={false}
      />
    );
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
