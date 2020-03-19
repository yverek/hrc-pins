const PINS = [
  {
    id: 'worldwide',
    name: 'Worldwide',
    count: 20
  },
  {
    id: 'usa-canada',
    name: 'USA / Canada',
    count: 3,
    countries: [
      // USA
      {
        id: 'united-states',
        name: 'United States',
        cities: [
          {
            id: 'niagara-falls-usa',
            name: 'Niagara Falls USA'
          },
          {
            id: 'new-york',
            name: 'New York'
          },
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
    count: 17,
    countries: [
      // Austria
      {
        id: 'austria',
        name: 'Austria',
        cities: [
          {
            id: 'vienna',
            name: 'Vienna'
          }
        ]
      },
      // England
      {
        id: 'england',
        name: 'England',
        cities: [
          {
            id: 'london',
            name: 'London'
          }
        ]
      },
      // France
      {
        id: 'france',
        name: 'France',
        cities: [
          {
            id: 'nice',
            name: 'Nice'
          },
          {
            id: 'paris',
            name: 'Paris'
          }
        ]
      },
      // Germany
      {
        id: 'germany',
        name: 'Germany',
        cities: [
          {
            id: 'berlin',
            name: 'Berlin'
          }
        ]
      },
      // Greece
      {
        id: 'greece',
        name: 'Greece',
        cities: [
          {
            id: 'athens',
            name: 'Athens'
          }
        ]
      },
      // Ireland
      {
        id: 'ireland',
        name: 'ireland',
        cities: [
          {
            id: 'dublin',
            name: 'Dublin'
          }
        ]
      },
      // Italy
      {
        id: 'italy',
        name: 'Italy',
        cities: [
          {
            id: 'florence',
            name: 'Florence'
          },
          {
            id: 'rome',
            name: 'Rome'
          },
          {
            id: 'venice',
            name: 'Venice'
          }
        ]
      },
      // Netherlands
      {
        id: 'netherlands',
        name: 'Netherlands',
        cities: [
          {
            id: 'amsterdam',
            name: 'Amsterdam'
          }
        ]
      },
      // Poland
      {
        id: 'poland',
        name: 'Poland',
        cities: [
          {
            id: 'warsaw',
            name: 'Warsaw'
          }
        ]
      },
      // Scotland
      {
        id: 'scotland',
        name: 'Scotland',
        cities: [
          {
            id: 'edinburgh',
            name: 'Edinburgh'
          },
          {
            id: 'glasgow',
            name: 'Glasgow'
          }
        ]
      },
      // Spain
      {
        id: 'spain',
        name: 'Spain',
        citien: [
          {
            id: 'madrid',
            name: 'Madrid'
          },
          {
            id: 'mallorca',
            name: 'Mallorca'
          },
          {
            id: 'marbella',
            name: 'Marbella'
          }
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

export { PINS }