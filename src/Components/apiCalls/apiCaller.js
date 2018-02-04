export const callFetch = async url => {
  try {
    const getData = await fetch(url);
    const jsonData = await getData.json();

    return await jsonData;
  } catch (er) {
    const error = new Error('callFetch failed to fetch data');
    return error;
  }
};

export const getHomeworld = async url => {
  const homeworld = await callFetch(url);

  return {
    homeworld: homeworld.name,
    population: homeworld.population
  };
};

export const getName = async url => {
  const unresolvedPromises = url.map(async url => {
    const eachName = await callFetch(url);

    return eachName.name;
  });
  return Promise.all(unresolvedPromises);
};

export const getFilms = async url => {
  try {
    const fetchFilmData = await callFetch(url);

    return {
      title: fetchFilmData.title,
      episodeId: fetchFilmData.episode_id,
      openingCrawl: fetchFilmData.opening_crawl,
      releaseDate: fetchFilmData.release_date
    };
  } catch (er) {
    const error = new Error('getFilms failed to fetch filmData');
    return error;
  }
};

export const getPeople = async url => {
  try {
    const fetchPeopleData = await callFetch(url);

    const peopleMap = fetchPeopleData.results.map(async person => {
      const homeworldData = await getHomeworld(person.homeworld);
      const speciesName = await getName(person.species);

      return { name: person.name, ...homeworldData, species: speciesName };
    });
    return Promise.all(peopleMap);
  } catch (er) {
    const error = new Error('getPeople failed to fetch peopleData');
    return error;
  }
};

export const getPlanets = async url => {
  try {
    const fetchPlanetData = await callFetch(url);

    const planetMap = fetchPlanetData.results.map(async planet => {
      const getResidents = await getName(planet.residents);

      const residentsReturn = await Promise.all(getResidents);
      const residents = residentsReturn.join(', ');

      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residents
      };
    });
    return Promise.all(planetMap);
  } catch (er) {
    const error = new Error('getPlanets failed to fetch planetData');
    return error;
  }
};

export const getVehicles = async url => {
  try {
    const fetchVehicleData = await callFetch(url);

    const vehicleMap = fetchVehicleData.results.map(vehicle => {

      return {
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicle_class,
        passengers: vehicle.passengers
      };
    });
    return Promise.all(vehicleMap);
  } catch (er) {
    const error = new Error('getVehicles failed to fetch vehicleData');
    return error;
  }
};

