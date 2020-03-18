import React, { Component } from 'react'

import logoHRC from '../assets/logo72.png'

class Header extends Component {
  render() {
    return (
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src={logoHRC} alt="HRC Logo" width="72" height="72" />
        <h2>HRC Pins Collection</h2>
        <p class="lead">A simple app to handle my Hard Rock Café pins</p>
      </div>
    )
  }
}

export default Header