import React, { Component } from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Board from './components/Board'

import { Container, Row, Col } from 'react-bootstrap'
import './index.css'


class App extends Component {
  constructor(props) {
    super(props)
    // thx to this answer https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
    this.handleContinentChange = this.handleContinentChange.bind(this)
    this.state = {
      selectedContinent: "worldwide"
    }
  }

  handleContinentChange(event) {
    this.setState({
      selectedContinent: event.target.id
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Row className="justify-content-md-center">
            <Col md={4} lg={4}>
              <Navbar selectedContinent={this.state.selectedContinent} handleContinentChange={this.handleContinentChange} />
            </Col>
            <Col md={8} lg={8}>
              <Board selectedContinent={this.state.selectedContinent} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App