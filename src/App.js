import React, { Component } from 'react'
import { Header } from './components/Header'
import Navbar from './components/Navbar'
import Board from './components/Board'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'


class App extends Component {
  constructor(props) {
    super(props)
    // thx to this answer https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
    this.handleContinentChange = this.handleContinentChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      selectedContinent: "worldwide",
      search: ""
    }
  }

  handleContinentChange(event) {
    this.setState({
      selectedContinent: event.target.id,
      search: ""
    });
  }

  handleSearch(event) {
    this.setState({
      // worldwide because Board component shows all pins at every character submitted by user
      // it's like a live search
      selectedContinent: "worldwide",
      search: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header />

          <Row className="justify-content-md-center">

            <Col md={4} lg={4} className="sidebar sticky-top">
              <Navbar 
                selectedContinent={this.state.selectedContinent}
                handleContinentChange={this.handleContinentChange}
                handleSearch={this.handleSearch}
              />
            </Col>

            <Col md={8} lg={8} className="pl-5">
              <Board
                selectedContinent={this.state.selectedContinent}
                search={this.state.search}
              />
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}

export default App