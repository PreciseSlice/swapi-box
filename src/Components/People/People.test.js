/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import People from './People';
import { shallow, mount } from 'enzyme';
import { peopleData } from '../../apiCalls/apiMockData';

describe('People', () => {
  let wrapper;
  let mockFunction;
  let secondMockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
    secondMockFunction = jest.fn();
    wrapper = mount(
      <People
        setPeople={mockFunction}
        peopleData={peopleData}
        clickHandler={secondMockFunction}
        favorites={peopleData}
      />
    );
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should get people data if it does not have it, by calling getPeople.', async () => {
    wrapper = shallow(
      <People
        setPeople={mockFunction}
        peopleData={[]}
        clickHandler={secondMockFunction}
        favorites={peopleData}
      />
    );

    await wrapper.instance().componentDidMount();
    expect(mockFunction).toHaveBeenCalled();
  });

  it('renders a card for each object in the array it is passed', () => {
    expect(wrapper.find('.card').length).toEqual(2);
  });
});
