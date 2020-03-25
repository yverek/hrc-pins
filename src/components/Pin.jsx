import React, { useState } from 'react'
import { Media, Image, Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAfrica, faFlag, faCity } from '@fortawesome/free-solid-svg-icons'


export const Pin = (props) => {
  const [show, handleShow] = useState(false)

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
