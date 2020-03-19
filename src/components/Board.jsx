import React, { Component } from 'react'

import Pin from './Pin'

import { PINS } from '../config/constants'


class Board extends Component {
  populatePinsList = (selectedContinent) => {
    let pinsList = []

    PINS.map((continent, i) => {
      if((selectedContinent === 'worldwide' || selectedContinent === continent.id) && continent.countries !== undefined) {
        continent.countries.map((country, c) => {
          country.cities.map((city, j) => {
            return pinsList.push(
              <Pin
                key={city.id}
                city={city.name}
                city_id={city.id}
                continent={continent.name}
                continent_id={continent.id}
                country={country.name}
                country_id={country.id}
              />
            )
          })
        })
      }
    })

    return pinsList
  }

  render() {
    return (

      <div>
        {this.populatePinsList(this.props.selectedContinent)}
      </div>
    )
  }
}

export default Board