/* eslint-disable */
import React from 'react';

import {
  callFetch,
  getFilms,
  getPeople,
  getPlanets,
  getVehicles,
  getHomeworld,
  getName
} from './apiCaller';

import {
  allFilms,
  cleanFilms,
  allPeople,
  cleanPeople,
  allPlanets,
  cleanPlanets,
  allVehicles,
  cleanVehicles,
  urlArray,
  residentsArray,
  homeworldObject
} from './apiMockData';

describe('apiCaller', () => {
  it('has multiple functions', () => {
    expect(callFetch).toBeDefined();
    expect(getFilms).toBeDefined();
    expect(getPeople).toBeDefined();
    expect(getPlanets).toBeDefined();
    expect(getVehicles).toBeDefined();
    expect(getHomeworld).toBeDefined();
    expect(getName).toBeDefined();
  });

  describe('callFetch', () => {
    it('returns data after making a fetch call', async () => {
      const expectedParams = 'https://swapi.co/api/films/';

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () =>
          new Promise((resolve, reject) => {
            resolve(allFilms);
          })
      }));
      callFetch(expectedParams);
      expect(window.fetch).toHaveBeenCalledWith(expectedParams);
    });

    it('returns a data object if the server returns a status of ok', () => {
      const url = 'https://swapi.co/api/films/';

      expect(callFetch(url)).resolves.toEqual(allFilms);
    });

    it('throws an error if the data is not fetched ', async () => {
      const url = 'https://swapi.co/api/films/';

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      );

      expect(callFetch(url)).resolves.toEqual(
        Error('callFetch failed to fetch data')
      );
    });
  });

  describe('helper functions', () => {
    it('getHomeworld calls an endpoint and returns an object', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () =>
          new Promise((resolve, reject) => {
            resolve(urlArray);
          })
      }));

      const result = await getHomeworld(urlArray);

      expect(result).toEqual(homeworldObject);
    });

    it('getName calls an endpoint and returns an array of names', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () =>
          new Promise((resolve, reject) => {
            resolve(urlArray);
          })
      }));

      const result = await getName(urlArray);

      expect(result).toEqual(residentsArray);
    });
  });

  describe('Call and clean functions', () => {
    it('getFilms returns clean film data as an object', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () =>
          new Promise((resolve, reject) => {
            resolve(allFilms);
          })
      }));

      const url = 'https://swapi.co/api/films/';
      const result = await getFilms(url);

      expect(result).toEqual(cleanFilms);
    });

    it('GetPeople returns clean people data as an array of objects', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () =>
          new Promise((resolve, reject) => {
            resolve(allPeople);
          })
      }));

      const url = 'https://swapi.co/api/people/';
      const result = await getPeople(url);

      expect(result).toEqual(cleanPeople);
    });

    it.skip('getPlanets returns clean planet data as an array of objects', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () =>
          new Promise((resolve, reject) => {
            resolve(allPlanets);
          })
      }));

      const url = 'https://swapi.co/api/planets/';
      const result = await getPlanets(url);

      expect(result).toEqual(cleanPlanets);
    });

    it.skip('getVehicles returns clean vehicle data as an array of objects', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () =>
          new Promise((resolve, reject) => {
            resolve(allVehicles);
          })
      }));
      const url = 'https://swapi.co/api/vehicles/';
      const result = await getVehicles(url);

      expect(result).toEqual(cleanVehicles);
    });
  });
});
