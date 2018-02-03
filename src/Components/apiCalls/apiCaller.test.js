/* eslint-disable */
import React from 'react';
import { callFetch, getFilms, getPeople, getPlanets, getVehicles } from './apiCaller';
import { films, people, planets, vehicles } from './apiMockData';

describe('apiCaller', () => {

  it('has functions', () => {
    expect(callFetch).toBeDefined();
    expect(getFilms).toBeDefined();
    expect(getPeople).toBeDefined();
    expect(getPlanets).toBeDefined()
    expect(getVehicles).toBeDefined()
  });

  describe('callFetch', () => {
    it('returns data after making a fetch call', async () => {
      const expectedParams = 'https://swapi.co/api/films/';

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(films)
        })
      }))
      callFetch(expectedParams)
      expect(window.fetch).toHaveBeenCalledWith(expectedParams);
    });

    it('returns a data object if the server returns a status of ok', () => {
      const url = 'https://swapi.co/api/films/';

      expect(callFetch(url)).resolves.toEqual(films)
    })

    it('throws an error if the data is not fetched ', async () => {
      const url = 'https://swapi.co/api/films/';

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      expect(callFetch(url)).resolves.toEqual(Error('callFetch failed to fetch data'))
    });
  });

});