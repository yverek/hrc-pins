import React, { useState } from 'react'
import { Media, Image, Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAfrica, faFlag, faCity } from '@fortawesome/free-solid-svg-icons'


export const Pin = (props) => {
  const [show, handleShow] = useState(0)

  const imgSrc = '/pin_pics/' + props.continent_id + '/' + props.country_id + '/' + props.city_id + '.jpg'

  return(
    <div>
      <Media className="py-2 align-items-center">
        <Image
          width={114}
          height={150}
          className="align-self-center mr-3"
          src={imgSrc}
          alt={props.city}
          onClick={() => handleShow(!show)} />
        <Media.Body>
          <h5 className="mt-0">
            <FontAwesomeIcon icon={faGlobeAfrica} />
            <span className="font-weight-bold"> Continent</span>: 
            <span className="pin-attr"> {props.continent}</span>
          </h5>
          <h5 className="mt-0">
            <FontAwesomeIcon icon={faFlag} />
            <span className="font-weight-bold"> Country</span>: 
            <span className="pin-attr"> {props.country}</span>
          </h5>
          <h5 className="mt-0">
            <FontAwesomeIcon icon={faCity} />
            <span className="font-weight-bold"> City</span>: 
            <span className="pin-attr"> {props.city}</span>
          </h5>
          <p></p>
        </Media.Body>
      </Media>
      <Modal show={show} onHide={() => handleShow(!show)} centered>
        <Modal.Header>
          <Modal.Title>{props.country} - {props.city}</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <Image
            className="align-self-center mr-3"
            src={imgSrc}
            alt={props.city} />
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="btn my-btn" onClick={() => handleShow(!show)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

// This is the class based equivalent

/* 
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

export default Pin */