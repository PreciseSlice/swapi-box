// cleaners need to be seperated from call

export const getFilms = async () => {
  const fetchFilmData = await fetch('https://swapi.co/api/films/');
  const cleanFilms = await fetchFilmData.json();
  const filmMap = cleanFilms.results.map(async film => {
    const title = film.title;
    const episodeId = film.episode_id;
    const openingCrawl = film.opening_crawl;
    const releaseDate = film.release_date;

    return { title, episodeId, openingCrawl, releaseDate };
  });
  return Promise.all(filmMap);
};

export const getPeople = async () => {
  const fetchPeopleData = await fetch('https://swapi.co/api/people/');
  const cleanPeople = await fetchPeopleData.json();
  const peopleMap = cleanPeople.results.map(async person => {
    const name = person.name;

    const fetchHomeworld = await fetch(person.homeworld);
    const cleanHomeworld = await fetchHomeworld.json();

    const homeworld = cleanHomeworld.name;
    const population = cleanHomeworld.population;

    const fetchSpecies = await fetch(person.species);
    const cleanSpecies = await fetchSpecies.json();
    const speciesName = cleanSpecies.name;

    return { name, homeworld, population, speciesName };
  });
  return Promise.all(peopleMap);
};