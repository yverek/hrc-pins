import React, { Component } from 'react'

class Continent extends Component {
  render() {
    return (
      <li className={"list-group-item " + (!this.props.lastContinent ? 'continent' : '')}>
        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id={this.props.id} name="continents" defaultChecked={this.props.firstContinent} />
          <label className="custom-control-label" htmlFor={this.props.id}>{this.props.name}</label>
          <span className="badge">{this.props.count}</span>
        </div>
      </li>
    )
  }
}

export default Continent