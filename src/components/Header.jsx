import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

import logoHRC from '../assets/logo72.png'

class Header extends Component {
  render() {
    return (
      <div className="py-5 text-center">
        <Image className="d-block mx-auto mb-4" src={logoHRC} alt="HRC Logo" />
        <h2>HRC Pins Collection</h2>
        <p className="lead">A simple app to handle my Hard Rock Café pins</p>
      </div>
    )
  }
}

export default Header