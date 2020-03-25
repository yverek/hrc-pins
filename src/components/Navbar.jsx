import React, { useState, useEffect } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { Continent } from './Continent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { PINS } from '../config/constants'


export const Navbar = (props) => {
  const [continentsList, setContinentsList] = useState([])

  useEffect(() => {
    let tmpContinentsList = []

    PINS.forEach((continent, i, arr) => {
      tmpContinentsList.push(
        <Continent
          key={continent.id}
          id={continent.id}
          name={continent.name}
          count={continent.count}
          firstContinent={(i === 0) ? true : false}
          lastContinent={(arr.length - 1 === i) ? true : false}
          checked={(props.selectedContinent === continent.id) ? true : false}
        />
      )
    })

    setContinentsList(tmpContinentsList)
  }, [props.selectedContinent])

  return(
    <div className="my-nav">
      <div className="text-center py-4 px-4 nav-top">
        <InputGroup>
          <InputGroup.Prepend>
            <Button className="my-btn"><FontAwesomeIcon icon={faSearch} /></Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="search" className="my-input" onChange={event => props.handleSearch(event)} placeholder="E.g. Italy, France, Rome, ecc" />
        </InputGroup>
      </div>
      <h2 className="pt-2 pl-2 text-center">Filter</h2>
      <ul className="list-group pb-2" onChange={event => props.handleContinentChange(event)}>
        {continentsList}
      </ul>
    </div>
  )
}
