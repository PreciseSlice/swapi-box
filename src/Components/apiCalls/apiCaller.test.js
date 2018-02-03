/* eslint-disable */
import React from 'react';
import { callFetch, getFilms, getPeople, getPlanets, getVehicles } from './apiCaller';
import { films, people, planets, vehicles } from './apiMockData';

describe('apiCaller', () => {
  it('has functions which exist', () => {
    expect(callFetch).toBe('function')

  });

});