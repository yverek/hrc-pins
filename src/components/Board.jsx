import React, { useState, useEffect } from 'react'
import { Pin } from './Pin'
import { PINS } from '../config/constants'


export const Board = (props) => {
  const [pinsList, setPinsList] = useState([])

  useEffect(() => {
    let tmpPinsList = []

    PINS.forEach(continent => {
      // if there are no pins in data structure, we have to skip this cycle otherwise the app will give us a runtime error
      if(continent.countries !== undefined) {
        if(props.search === "" && (props.selectedContinent === 'worldwide' || props.selectedContinent === continent.id)) { // if user is not searching
          continent.countries.forEach(country => {
            country.cities.forEach(city => {
              tmpPinsList.push(
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
        } else if(props.search !== "") { // if user is searching
          continent.countries.forEach(country => {
            country.cities.forEach(city => {
              // first we "lowercase" the string and then we check if string that user is looking for is in the country name or in the city name
              if(country.name.toLowerCase().includes(props.search.toLowerCase()) || city.name.toLowerCase().includes(props.search.toLowerCase())) {
                tmpPinsList.push(
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

    setPinsList(tmpPinsList)
  }, [props.selectedContinent, props.search])

  return (
    <div>
      {pinsList}
    </div>
  )
}
