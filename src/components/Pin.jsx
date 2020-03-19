import React, { Component } from 'react'
import { Media, Image } from 'react-bootstrap'


class Pin extends Component {
  render() {
    return(
      <Media className="py-2 align-items-center">
        <Image
          width={114}
          height={150}
          className="align-self-center mr-3"
          src={'/pin_pics/' + this.props.continent_id + '/' + this.props.country_id + '/' + this.props.city_id + '.jpg'}
          alt={this.props.city} />
        <Media.Body>
          <h5 className="mt-0">Continent: {this.props.continent}</h5>
          <h5 className="mt-0">Country: {this.props.country}</h5>
          <h5 className="mt-0">City: {this.props.city}</h5>
          <p></p>
        </Media.Body>
      </Media>
    )
  }
}

export default Pin