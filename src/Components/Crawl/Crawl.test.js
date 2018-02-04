/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Crawl from './Crawl';
import { shallow, mount, render } from 'enzyme';

describe('Crawl', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Crawl
        filmData={{
          title: 'A New Hope',
          episodeId: 4,
          openingCrawl:
            "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
          releaseDate: '1977-05-25'
        }}
      />
    );
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  //how do test this out
  it.skip('should get film data if it does not have it', () => {
    const setFilms = jest.fn()
    wrapper = shallow(<Crawl filmData={{}} setFilms={setFilms}/>)
  });

  it('should convert arabic numerals to roman numerals ', () => {
    expect(wrapper.instance().romanize(1)).toEqual('I')
    expect(wrapper.instance().romanize(4)).toEqual('IV')
    expect(wrapper.instance().romanize(5)).toEqual('V')
    expect(wrapper.instance().romanize(7)).toEqual('VII')
  });


});