import React from 'react'


export const Continent = (props) => {
  return (
    <li className={"list-group-item " + (!props.lastContinent ? 'continent' : '')}>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          className="custom-control-input"
          id={props.id}
          name="continents"
          defaultChecked={props.firstContinent}
          checked={props.checked} />
        <label className="custom-control-label" htmlFor={props.id}>{props.name}</label>
        <span className="badge">{props.count}</span>
      </div>
    </li>
  )
}

// This is the class based equivalent

/* 
class Continent extends Component {
  render() {
    return (
      <li className={"list-group-item " + (!this.props.lastContinent ? 'continent' : '')}>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id={this.props.id}
            name="continents"
            defaultChecked={this.props.firstContinent}
            checked={this.props.checked} />
          <label className="custom-control-label" htmlFor={this.props.id}>{this.props.name}</label>
          <span className="badge">{this.props.count}</span>
        </div>
      </li>
    )
  }
}

export default Continent*/