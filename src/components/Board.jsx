import React, { Component } from 'react'
import Pin from './Pin'
import { PINS } from '../config/constants'


class Board extends Component {
  populatePinsList = (selectedContinent) => {
    let pinsList = []

    PINS.map((continent, i) => {
      if(continent.countries !== undefined) {
        if(this.props.search === "" && (selectedContinent === 'worldwide' || selectedContinent === continent.id)) {
          continent.countries.map(country => {
            country.cities.map(city => {
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
            return pinsList
          })
          return pinsList
        } else if(this.props.search !== "") {
          continent.countries.map(country => {
            country.cities.map(city => {
              if(country.name.toLowerCase().includes(this.props.search.toLowerCase()) || city.name.toLowerCase().includes(this.props.search.toLowerCase())) {
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
              }
            })
            return pinsList
          })
        }
      }
    })

    return pinsList
  }

  render() {
    return (

      <div>
        {this.populatePinsList(this.props.selectedContinent, this.props.search)}
      </div>
    )
  }
}

export default Board