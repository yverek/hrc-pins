import React, { Component } from 'react'
import { Media, Image, Modal, Button } from 'react-bootstrap'


class Pin extends Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this)
    this.state = {
      show: false
    }
  }

  handleShow() {
    this.setState(state => ({
      show: !state.show
    }))
  }

  render() {
    let imgSrc = '/pin_pics/' + this.props.continent_id + '/' + this.props.country_id + '/' + this.props.city_id + '.jpg'
    return(
      <>
        <Media className="py-2 align-items-center">
          <Image
            width={114}
            height={150}
            className="align-self-center mr-3"
            src={imgSrc}
            alt={this.props.city}
            onClick={this.handleShow} />
          <Media.Body>
            <h5 className="mt-0">Continent: {this.props.continent}</h5>
            <h5 className="mt-0">Country: {this.props.country}</h5>
            <h5 className="mt-0">City: {this.props.city}</h5>
            <p></p>
          </Media.Body>
        </Media>
        <Modal show={this.state.show} onHide={this.handleShow} centered>
          <Modal.Header>
            <Modal.Title>{this.props.country} - {this.props.city}</Modal.Title>
          </Modal.Header>
        
          <Modal.Body>
            <Image
              className="align-self-center mr-3"
              src={imgSrc}
              alt={this.props.city} />
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="btn my-btn" onClick={this.handleShow}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Pin