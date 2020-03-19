import React, { Component } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import Continent from './Continent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { PINS } from '../config/constants'

class Navbar extends Component {
  populateContinentsList = () => {
    let continentsList = []

    PINS.map((continent, i, arr) => {
      return continentsList.push(
        <Continent
          key={continent.id}
          id={continent.id}
          name={continent.name}
          count={continent.count}
          firstContinent={(i === 0) ? true : false}
          lastContinent={(arr.length - 1 === i) ? true : false}
        />
      )
    })

    return continentsList
  }

  render() {
    return (
      <div className="my-nav">
        <div className="text-center py-4 px-5 nav-top">
          <InputGroup>
            <InputGroup.Prepend>
              <Button className="my-btn"><FontAwesomeIcon icon={faSearch} /></Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="search" className="my-input" onChange={event => this.props.handleSearch(event)} />
          </InputGroup>
        </div>
        <h2 className="pt-2 pl-2 text-center">Filter</h2>
        <ul className="list-group pb-2" onChange={event => this.props.handleContinentChange(event)}>
          {this.populateContinentsList()}
        </ul>
      </div>
    )
  }
}

export default Navbar