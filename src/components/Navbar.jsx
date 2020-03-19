import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Continent from './Continent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

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
          pinsQnt={arr.length}
        />
      )
    })

    return continentsList
  }

  render() {
    return (
      <div className="mynav">
        <div className="text-center py-4 nav-top">
          <Button variant="primary" className="myBtn"><FontAwesomeIcon icon={faPlusCircle} /> Add Pin</Button>
        </div>
        <h2 className="pt-2 pl-2">Filter</h2>
        <ul className="list-group pb-2" onChange={event => this.props.handleContinentChange(event)}>
          {this.populateContinentsList()}
        </ul>
      </div>
    )
  }
}

export default Navbar