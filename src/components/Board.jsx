import React, { Component } from 'react'
import { Pin } from './Pin'
import { PINS } from '../config/constants'


class Board extends Component {
  populatePinsList = (selectedContinent) => {
    let pinsList = []

    PINS.forEach(continent => {
      // if there are no pins in data structure, we have to skip this cycle otherwise app will give a runtime error
      if(continent.countries !== undefined) {
        if(this.props.search === "" && (selectedContinent === 'worldwide' || selectedContinent === continent.id)) { // if user is not searching
          continent.countries.forEach(country => {
            country.cities.forEach(city => {
              pinsList.push(
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
        } else if(this.props.search !== "") { // if user is searching
          continent.countries.forEach(country => {
            country.cities.forEach(city => {
              // first we "lowercase" the string and then we check if string that user is looking for is in the country name or in the city name
              if(country.name.toLowerCase().includes(this.props.search.toLowerCase()) || city.name.toLowerCase().includes(this.props.search.toLowerCase())) {
                pinsList.push(
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