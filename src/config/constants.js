const PINS = [
  {
    id: 'worldwide',
    name: 'Worldwide',
    count: 3
  },
  {
    id: 'usa-canada',
    name: 'USA / Canada',
    count: 1,
    countries: [
      // USA
      {
        id: 'united-states',
        name: 'United States',
        cities: [
          {
            id: 'washington-dc',
            name: 'Washington DC'
          }
        ]
      }
    ]
  },
  {
    id: 'mexico-centralamerica',
    name: 'Mexico / Central America',
    count: 0
  },
  {
    id: 'caribbean',
    name: 'Caribbean',
    count: 0
  },
  {
    id: 'south-america',
    name: 'South America',
    count: 0
  },
  {
    id: 'europe',
    name: 'Europe',
    count: 4,
    countries: [
      // Italy
      {
        id: 'italy',
        name: 'Italy',
        cities: [
          {
            id: 'florence',
            name: 'Florence'
          },
/*           {
            id: 'rome',
            name: 'Rome'
          }, */
          {
            id: 'venice',
            name: 'Venice'
          }
        ]
      },
      // France
      {
        id: 'france',
        name: 'France',
        cities: [
/*           {
            id: 'paris',
            name: 'Paris'
          } */
        ]
      }
    ]
  },
  {
    id: 'middleeast-africa',
    name: 'Middle East / Africa',
    count: 1,
    countries: [
      {
        id: 'egypt',
        name: 'Egypt',
        cities: [
          {
            id: 'sharm-el-sheikh',
            name: 'Sharm el Sheikh'
          }
        ]
      }
    ]
  },
  {
    id: 'pacific-rim',
    name: 'Pacific Rim',
    count: 0
  },
  {
    id: 'asia',
    name: 'Asia',
    count: 0
  },
  {
    id: 'india',
    name: 'India',
    count: 0
  },
]

/*
  1  - USA / Canada
  2  - Mexico / Central America
  3  - Caribbean
  4  - South America
  5  - Europe
  6  - Middle East / Africa
  7  - Pacific Rim
  8  - Asia
  9  - India
*/

/* const PINS = [
  {
    continent: CONTINENTS[5].id,
    country: 'France',
    city: 'Paris'
  },
  {
    continent: CONTINENTS[5].id,
    country: 'Italy',
    city: 'Rome'
  },
  {
    continent: CONTINENTS[5].id,
    country: 'Italy',
    city: 'Venice'
  },
  {
    continent: CONTINENTS[1].id,
    country: 'USA',
    city: 'Niagara Falls'
  }
] */

export { PINS }