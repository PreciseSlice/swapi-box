export const callFetch = async url => {
  const getData = await fetch(url);
  const jsonData = await getData.json();

  return await jsonData;
};

export const getFilms = async url => {
  try {
    const fetchFilmData = await callFetch(url);

    const title = await fetchFilmData.title;
    const episodeId = await fetchFilmData.episode_id;
    const openingCrawl = await fetchFilmData.opening_crawl;
    const releaseDate = await fetchFilmData.release_date;

    return await { title, episodeId, openingCrawl, releaseDate };
  } catch (er) {
    const error = new Error('getFilms failed to fetch filmData');
    return error;
  }
};

export const getPeople = async url => {
  try {
    const fetchPeopleData = await callFetch(url);

    const peopleMap = fetchPeopleData.results.map(async person => {
      const name = person.name;

      const fetchHomeworldData = await callFetch(person.homeworld);
      const homeworld = fetchHomeworldData.name;
      const population = fetchHomeworldData.population;

      const fetchSpeciesData = await callFetch(person.species);
      const speciesName = fetchSpeciesData.name;

      return { name, homeworld, population, speciesName };
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
      const name = planet.name;
      const terrain = planet.terrain;
      const population = planet.population;
      const climate = planet.climate;

      const residentMap = planet.residents.map(async resident => {
        const fetchResidentData = await callFetch(resident);

        return fetchResidentData.name;
      });

      const mapReturn = await Promise.all(residentMap);
      const residents = mapReturn.join(', ');

      return { name, terrain, population, climate, residents };
    });
    return Promise.all(planetMap);
  } catch (er) {
    const error = new Error('getPlaenets failed to fetch plaenetData');
    return error;
  }
};

export const getVehicles = async url => {
  try {
    const fetchVehicleData = await callFetch(url);

    const vehicleMap = fetchVehicleData.results.map(async vehicle => {
      const name = vehicle.name;
      const model = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const passengers = vehicle.passengers;

      return { name, model, vehicleClass, passengers };
    });
    return Promise.all(vehicleMap);
  } catch (er) {
    const error = new Error('getVehicles failed to fetch vehicleData');
    return error;
  }
};
