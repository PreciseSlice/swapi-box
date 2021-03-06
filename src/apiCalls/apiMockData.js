/* eslint-disable */
export const allFilms = {
  title: 'A New Hope',
  episode_id: 4,
  opening_crawl:
    "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1977-05-25',
  characters: [
    'https://swapi.co/api/people/1/',
    'https://swapi.co/api/people/2/',
    'https://swapi.co/api/people/3/',
    'https://swapi.co/api/people/4/',
    'https://swapi.co/api/people/5/',
    'https://swapi.co/api/people/6/',
    'https://swapi.co/api/people/7/',
    'https://swapi.co/api/people/8/',
    'https://swapi.co/api/people/9/',
    'https://swapi.co/api/people/10/',
    'https://swapi.co/api/people/12/',
    'https://swapi.co/api/people/13/',
    'https://swapi.co/api/people/14/',
    'https://swapi.co/api/people/15/',
    'https://swapi.co/api/people/16/',
    'https://swapi.co/api/people/18/',
    'https://swapi.co/api/people/19/',
    'https://swapi.co/api/people/81/'
  ],
  planets: [
    'https://swapi.co/api/planets/2/',
    'https://swapi.co/api/planets/3/',
    'https://swapi.co/api/planets/1/'
  ],
  starships: [
    'https://swapi.co/api/starships/2/',
    'https://swapi.co/api/starships/3/',
    'https://swapi.co/api/starships/5/',
    'https://swapi.co/api/starships/9/',
    'https://swapi.co/api/starships/10/',
    'https://swapi.co/api/starships/11/',
    'https://swapi.co/api/starships/12/',
    'https://swapi.co/api/starships/13/'
  ],
  vehicles: [
    'https://swapi.co/api/vehicles/4/',
    'https://swapi.co/api/vehicles/6/',
    'https://swapi.co/api/vehicles/7/',
    'https://swapi.co/api/vehicles/8/'
  ],
  species: [
    'https://swapi.co/api/species/5/',
    'https://swapi.co/api/species/3/',
    'https://swapi.co/api/species/2/',
    'https://swapi.co/api/species/1/',
    'https://swapi.co/api/species/4/'
  ],
  created: '2014-12-10T14:23:31.880000Z',
  edited: '2015-04-11T09:46:52.774897Z',
  url: 'https://swapi.co/api/films/1/'
};

export const cleanFilms = {
  title: 'A New Hope',
  episodeId: 4,
  openingCrawl:
    "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
  releaseDate: '1977-05-25'
};

export const allPeople = {
  count: 87,
  next: 'https://swapi.co/api/people/?page=2',
  previous: null,
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [
        'https://swapi.co/api/vehicles/14/',
        'https://swapi.co/api/vehicles/30/'
      ],
      starships: [
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/'
      ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.co/api/people/1/'
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      url: 'https://swapi.co/api/people/2/'
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, blue',
      eye_color: 'red',
      birth_year: '33BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/8/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:11:50.376000Z',
      edited: '2014-12-20T21:17:50.311000Z',
      url: 'https://swapi.co/api/people/3/'
    },
    {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [],
      starships: ['https://swapi.co/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'https://swapi.co/api/people/4/'
    },
    {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '19BBY',
      gender: 'female',
      homeworld: 'https://swapi.co/api/planets/2/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: ['https://swapi.co/api/vehicles/30/'],
      starships: [],
      created: '2014-12-10T15:20:09.791000Z',
      edited: '2014-12-20T21:17:50.315000Z',
      url: 'https://swapi.co/api/people/5/'
    },
    {
      name: 'Owen Lars',
      height: '178',
      mass: '120',
      hair_color: 'brown, grey',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '52BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:52:14.024000Z',
      edited: '2014-12-20T21:17:50.317000Z',
      url: 'https://swapi.co/api/people/6/'
    },
    {
      name: 'Beru Whitesun lars',
      height: '165',
      mass: '75',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '47BBY',
      gender: 'female',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:53:41.121000Z',
      edited: '2014-12-20T21:17:50.319000Z',
      url: 'https://swapi.co/api/people/7/'
    },
    {
      name: 'R5-D4',
      height: '97',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, red',
      eye_color: 'red',
      birth_year: 'unknown',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: ['https://swapi.co/api/films/1/'],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:57:50.959000Z',
      edited: '2014-12-20T21:17:50.321000Z',
      url: 'https://swapi.co/api/people/8/'
    },
    {
      name: 'Biggs Darklighter',
      height: '183',
      mass: '84',
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '24BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: ['https://swapi.co/api/films/1/'],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [],
      starships: ['https://swapi.co/api/starships/12/'],
      created: '2014-12-10T15:59:50.509000Z',
      edited: '2014-12-20T21:17:50.323000Z',
      url: 'https://swapi.co/api/people/9/'
    },
    {
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      eye_color: 'blue-gray',
      birth_year: '57BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/20/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: ['https://swapi.co/api/vehicles/38/'],
      starships: [
        'https://swapi.co/api/starships/48/',
        'https://swapi.co/api/starships/59/',
        'https://swapi.co/api/starships/64/',
        'https://swapi.co/api/starships/65/',
        'https://swapi.co/api/starships/74/'
      ],
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      url: 'https://swapi.co/api/people/10/'
    }
  ]
};

export const cleanPeople = [
  {
    homeworld: undefined,
    name: 'Luke Skywalker',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'C-3PO',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'R2-D2',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'Darth Vader',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'Leia Organa',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'Owen Lars',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'Beru Whitesun lars',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'R5-D4',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'Biggs Darklighter',
    population: undefined,
    species: [undefined]
  },
  {
    homeworld: undefined,
    name: 'Obi-Wan Kenobi',
    population: undefined,
    species: [undefined]
  }
];

export const allPlanets = {
  count: 61,
  next: 'https://swapi.co/api/planets/?page=2',
  previous: null,
  results: [
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      residents: [
        'https://swapi.co/api/people/5/',
        'https://swapi.co/api/people/68/',
        'https://swapi.co/api/people/81/'
      ],
      films: ['https://swapi.co/api/films/6/', 'https://swapi.co/api/films/1/'],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi.co/api/planets/2/'
    },
    {
      name: 'Yavin IV',
      rotation_period: '24',
      orbital_period: '4818',
      diameter: '10200',
      climate: 'temperate, tropical',
      gravity: '1 standard',
      terrain: 'jungle, rainforests',
      surface_water: '8',
      population: '1000',
      residents: [],
      films: ['https://swapi.co/api/films/1/'],
      created: '2014-12-10T11:37:19.144000Z',
      edited: '2014-12-20T20:58:18.421000Z',
      url: 'https://swapi.co/api/planets/3/'
    },
    {
      name: 'Hoth',
      rotation_period: '23',
      orbital_period: '549',
      diameter: '7200',
      climate: 'frozen',
      gravity: '1.1 standard',
      terrain: 'tundra, ice caves, mountain ranges',
      surface_water: '100',
      population: 'unknown',
      residents: [],
      films: ['https://swapi.co/api/films/2/'],
      created: '2014-12-10T11:39:13.934000Z',
      edited: '2014-12-20T20:58:18.423000Z',
      url: 'https://swapi.co/api/planets/4/'
    },
    {
      name: 'Dagobah',
      rotation_period: '23',
      orbital_period: '341',
      diameter: '8900',
      climate: 'murky',
      gravity: 'N/A',
      terrain: 'swamp, jungles',
      surface_water: '8',
      population: 'unknown',
      residents: [],
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/'
      ],
      created: '2014-12-10T11:42:22.590000Z',
      edited: '2014-12-20T20:58:18.425000Z',
      url: 'https://swapi.co/api/planets/5/'
    },
    {
      name: 'Bespin',
      rotation_period: '12',
      orbital_period: '5110',
      diameter: '118000',
      climate: 'temperate',
      gravity: '1.5 (surface), 1 standard (Cloud City)',
      terrain: 'gas giant',
      surface_water: '0',
      population: '6000000',
      residents: ['https://swapi.co/api/people/26/'],
      films: ['https://swapi.co/api/films/2/'],
      created: '2014-12-10T11:43:55.240000Z',
      edited: '2014-12-20T20:58:18.427000Z',
      url: 'https://swapi.co/api/planets/6/'
    },
    {
      name: 'Endor',
      rotation_period: '18',
      orbital_period: '402',
      diameter: '4900',
      climate: 'temperate',
      gravity: '0.85 standard',
      terrain: 'forests, mountains, lakes',
      surface_water: '8',
      population: '30000000',
      residents: ['https://swapi.co/api/people/30/'],
      films: ['https://swapi.co/api/films/3/'],
      created: '2014-12-10T11:50:29.349000Z',
      edited: '2014-12-20T20:58:18.429000Z',
      url: 'https://swapi.co/api/planets/7/'
    },
    {
      name: 'Naboo',
      rotation_period: '26',
      orbital_period: '312',
      diameter: '12120',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grassy hills, swamps, forests, mountains',
      surface_water: '12',
      population: '4500000000',
      residents: [
        'https://swapi.co/api/people/3/',
        'https://swapi.co/api/people/21/',
        'https://swapi.co/api/people/36/',
        'https://swapi.co/api/people/37/',
        'https://swapi.co/api/people/38/',
        'https://swapi.co/api/people/39/',
        'https://swapi.co/api/people/42/',
        'https://swapi.co/api/people/60/',
        'https://swapi.co/api/people/61/',
        'https://swapi.co/api/people/66/',
        'https://swapi.co/api/people/35/'
      ],
      films: [
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/'
      ],
      created: '2014-12-10T11:52:31.066000Z',
      edited: '2014-12-20T20:58:18.430000Z',
      url: 'https://swapi.co/api/planets/8/'
    },
    {
      name: 'Coruscant',
      rotation_period: '24',
      orbital_period: '368',
      diameter: '12240',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'cityscape, mountains',
      surface_water: 'unknown',
      population: '1000000000000',
      residents: [
        'https://swapi.co/api/people/34/',
        'https://swapi.co/api/people/55/',
        'https://swapi.co/api/people/74/'
      ],
      films: [
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/'
      ],
      created: '2014-12-10T11:54:13.921000Z',
      edited: '2014-12-20T20:58:18.432000Z',
      url: 'https://swapi.co/api/planets/9/'
    },
    {
      name: 'Kamino',
      rotation_period: '27',
      orbital_period: '463',
      diameter: '19720',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'ocean',
      surface_water: '100',
      population: '1000000000',
      residents: [
        'https://swapi.co/api/people/22/',
        'https://swapi.co/api/people/72/',
        'https://swapi.co/api/people/73/'
      ],
      films: ['https://swapi.co/api/films/5/'],
      created: '2014-12-10T12:45:06.577000Z',
      edited: '2014-12-20T20:58:18.434000Z',
      url: 'https://swapi.co/api/planets/10/'
    },
    {
      name: 'Geonosis',
      rotation_period: '30',
      orbital_period: '256',
      diameter: '11370',
      climate: 'temperate, arid',
      gravity: '0.9 standard',
      terrain: 'rock, desert, mountain, barren',
      surface_water: '5',
      population: '100000000000',
      residents: ['https://swapi.co/api/people/63/'],
      films: ['https://swapi.co/api/films/5/'],
      created: '2014-12-10T12:47:22.350000Z',
      edited: '2014-12-20T20:58:18.437000Z',
      url: 'https://swapi.co/api/planets/11/'
    }
  ]
};

export const cleanPlanets = [
  {
    climate: 'temperate',
    name: 'Alderaan',
    population: '2000000000',
    residents: ', , ',
    terrain: 'grasslands, mountains'
  },
  {
    climate: 'temperate, tropical',
    name: 'Yavin IV',
    population: '1000',
    residents: '',
    terrain: 'jungle, rainforests'
  },
  {
    climate: 'frozen',
    name: 'Hoth',
    population: 'unknown',
    residents: '',
    terrain: 'tundra, ice caves, mountain ranges'
  },
  {
    climate: 'murky',
    name: 'Dagobah',
    population: 'unknown',
    residents: '',
    terrain: 'swamp, jungles'
  },
  {
    climate: 'temperate',
    name: 'Bespin',
    population: '6000000',
    residents: '',
    terrain: 'gas giant'
  },
  {
    climate: 'temperate',
    name: 'Endor',
    population: '30000000',
    residents: '',
    terrain: 'forests, mountains, lakes'
  },
  {
    climate: 'temperate',
    name: 'Naboo',
    population: '4500000000',
    residents: ', , , , , , , , , , ',
    terrain: 'grassy hills, swamps, forests, mountains'
  },
  {
    climate: 'temperate',
    name: 'Coruscant',
    population: '1000000000000',
    residents: ', , ',
    terrain: 'cityscape, mountains'
  },
  {
    climate: 'temperate',
    name: 'Kamino',
    population: '1000000000',
    residents: ', , ',
    terrain: 'ocean'
  },
  {
    climate: 'temperate, arid',
    name: 'Geonosis',
    population: '100000000000',
    residents: '',
    terrain: 'rock, desert, mountain, barren'
  }
];

export const allVehicles = {
  count: 39,
  next: 'https://swapi.co/api/vehicles/?page=2',
  previous: null,
  results: [
    {
      name: 'Sand Crawler',
      model: 'Digger Crawler',
      manufacturer: 'Corellia Mining Corporation',
      cost_in_credits: '150000',
      length: '36.8',
      max_atmosphering_speed: '30',
      crew: '46',
      passengers: '30',
      cargo_capacity: '50000',
      consumables: '2 months',
      vehicle_class: 'wheeled',
      pilots: [],
      films: ['https://swapi.co/api/films/5/', 'https://swapi.co/api/films/1/'],
      created: '2014-12-10T15:36:25.724000Z',
      edited: '2014-12-22T18:21:15.523587Z',
      url: 'https://swapi.co/api/vehicles/4/'
    },
    {
      name: 'T-16 skyhopper',
      model: 'T-16 skyhopper',
      manufacturer: 'Incom Corporation',
      cost_in_credits: '14500',
      length: '10.4',
      max_atmosphering_speed: '1200',
      crew: '1',
      passengers: '1',
      cargo_capacity: '50',
      consumables: '0',
      vehicle_class: 'repulsorcraft',
      pilots: [],
      films: ['https://swapi.co/api/films/1/'],
      created: '2014-12-10T16:01:52.434000Z',
      edited: '2014-12-22T18:21:15.552614Z',
      url: 'https://swapi.co/api/vehicles/6/'
    },
    {
      name: 'X-34 landspeeder',
      model: 'X-34 landspeeder',
      manufacturer: 'SoroSuub Corporation',
      cost_in_credits: '10550',
      length: '3.4',
      max_atmosphering_speed: '250',
      crew: '1',
      passengers: '1',
      cargo_capacity: '5',
      consumables: 'unknown',
      vehicle_class: 'repulsorcraft',
      pilots: [],
      films: ['https://swapi.co/api/films/1/'],
      created: '2014-12-10T16:13:52.586000Z',
      edited: '2014-12-22T18:21:15.583700Z',
      url: 'https://swapi.co/api/vehicles/7/'
    },
    {
      name: 'TIE/LN starfighter',
      model: 'Twin Ion Engine/Ln Starfighter',
      manufacturer: 'Sienar Fleet Systems',
      cost_in_credits: 'unknown',
      length: '6.4',
      max_atmosphering_speed: '1200',
      crew: '1',
      passengers: '0',
      cargo_capacity: '65',
      consumables: '2 days',
      vehicle_class: 'starfighter',
      pilots: [],
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      created: '2014-12-10T16:33:52.860000Z',
      edited: '2014-12-22T18:21:15.606149Z',
      url: 'https://swapi.co/api/vehicles/8/'
    },
    {
      name: 'Snowspeeder',
      model: 't-47 airspeeder',
      manufacturer: 'Incom corporation',
      cost_in_credits: 'unknown',
      length: '4.5',
      max_atmosphering_speed: '650',
      crew: '2',
      passengers: '0',
      cargo_capacity: '10',
      consumables: 'none',
      vehicle_class: 'airspeeder',
      pilots: [
        'https://swapi.co/api/people/1/',
        'https://swapi.co/api/people/18/'
      ],
      films: ['https://swapi.co/api/films/2/'],
      created: '2014-12-15T12:22:12Z',
      edited: '2014-12-22T18:21:15.623033Z',
      url: 'https://swapi.co/api/vehicles/14/'
    },
    {
      name: 'TIE bomber',
      model: 'TIE/sa bomber',
      manufacturer: 'Sienar Fleet Systems',
      cost_in_credits: 'unknown',
      length: '7.8',
      max_atmosphering_speed: '850',
      crew: '1',
      passengers: '0',
      cargo_capacity: 'none',
      consumables: '2 days',
      vehicle_class: 'space/planetary bomber',
      pilots: [],
      films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
      created: '2014-12-15T12:33:15.838000Z',
      edited: '2014-12-22T18:21:15.667730Z',
      url: 'https://swapi.co/api/vehicles/16/'
    },
    {
      name: 'AT-AT',
      model: 'All Terrain Armored Transport',
      manufacturer:
        'Kuat Drive Yards, Imperial Department of Military Research',
      cost_in_credits: 'unknown',
      length: '20',
      max_atmosphering_speed: '60',
      crew: '5',
      passengers: '40',
      cargo_capacity: '1000',
      consumables: 'unknown',
      vehicle_class: 'assault walker',
      pilots: [],
      films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
      created: '2014-12-15T12:38:25.937000Z',
      edited: '2014-12-22T18:21:15.714673Z',
      url: 'https://swapi.co/api/vehicles/18/'
    },
    {
      name: 'AT-ST',
      model: 'All Terrain Scout Transport',
      manufacturer:
        'Kuat Drive Yards, Imperial Department of Military Research',
      cost_in_credits: 'unknown',
      length: '2',
      max_atmosphering_speed: '90',
      crew: '2',
      passengers: '0',
      cargo_capacity: '200',
      consumables: 'none',
      vehicle_class: 'walker',
      pilots: ['https://swapi.co/api/people/13/'],
      films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
      created: '2014-12-15T12:46:42.384000Z',
      edited: '2014-12-22T18:21:15.761584Z',
      url: 'https://swapi.co/api/vehicles/19/'
    },
    {
      name: 'Storm IV Twin-Pod cloud car',
      model: 'Storm IV Twin-Pod',
      manufacturer: 'Bespin Motors',
      cost_in_credits: '75000',
      length: '7',
      max_atmosphering_speed: '1500',
      crew: '2',
      passengers: '0',
      cargo_capacity: '10',
      consumables: '1 day',
      vehicle_class: 'repulsorcraft',
      pilots: [],
      films: ['https://swapi.co/api/films/2/'],
      created: '2014-12-15T12:58:50.530000Z',
      edited: '2014-12-22T18:21:15.783232Z',
      url: 'https://swapi.co/api/vehicles/20/'
    },
    {
      name: 'Sail barge',
      model: 'Modified Luxury Sail Barge',
      manufacturer: 'Ubrikkian Industries Custom Vehicle Division',
      cost_in_credits: '285000',
      length: '30',
      max_atmosphering_speed: '100',
      crew: '26',
      passengers: '500',
      cargo_capacity: '2000000',
      consumables: 'Live food tanks',
      vehicle_class: 'sail barge',
      pilots: [],
      films: ['https://swapi.co/api/films/3/'],
      created: '2014-12-18T10:44:14.217000Z',
      edited: '2014-12-22T18:21:15.807906Z',
      url: 'https://swapi.co/api/vehicles/24/'
    }
  ]
};

export const cleanVehicles = [
  {
    model: 'Digger Crawler',
    name: 'Sand Crawler',
    passengers: '30',
    vehicleClass: 'wheeled'
  },
  {
    model: 'T-16 skyhopper',
    name: 'T-16 skyhopper',
    passengers: '1',
    vehicleClass: 'repulsorcraft'
  },
  {
    model: 'X-34 landspeeder',
    name: 'X-34 landspeeder',
    passengers: '1',
    vehicleClass: 'repulsorcraft'
  },
  {
    model: 'Twin Ion Engine/Ln Starfighter',
    name: 'TIE/LN starfighter',
    passengers: '0',
    vehicleClass: 'starfighter'
  },
  {
    model: 't-47 airspeeder',
    name: 'Snowspeeder',
    passengers: '0',
    vehicleClass: 'airspeeder'
  },
  {
    model: 'TIE/sa bomber',
    name: 'TIE bomber',
    passengers: '0',
    vehicleClass: 'space/planetary bomber'
  },
  {
    model: 'All Terrain Armored Transport',
    name: 'AT-AT',
    passengers: '40',
    vehicleClass: 'assault walker'
  },
  {
    model: 'All Terrain Scout Transport',
    name: 'AT-ST',
    passengers: '0',
    vehicleClass: 'walker'
  },
  {
    model: 'Storm IV Twin-Pod',
    name: 'Storm IV Twin-Pod cloud car',
    passengers: '0',
    vehicleClass: 'repulsorcraft'
  },
  {
    model: 'Modified Luxury Sail Barge',
    name: 'Sail barge',
    passengers: '500',
    vehicleClass: 'sail barge'
  }
];

export const urlArray = [
  'https://swapi.co/api/people/5/',
  'https://swapi.co/api/people/68/',
  'https://swapi.co/api/people/81/'
];

export const residentsArray = [undefined, undefined, undefined];

export const homeworldObject = { homeworld: undefined, population: undefined };

export const peopleData = [
  {
    homeworld: 'planet',
    name: 'Luke Skywalker',
    population: 100,
    speciesName: 'human'
  },
  {
    homeworld: 'planet',
    name: 'C-3PO',
    population: 12,
    speciesName: 'droid'
  }
]