import React, { Component } from 'react'

import { Container } from 'react-bootstrap'

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />

        </Container>
      </div>
    )
  }
}

export default App