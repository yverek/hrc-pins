import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
//import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Row className="justify-content-md-center">
            <Col md={4}>
              <Navbar />
            </Col>
            <Col md={8}>
              <div className="media">
                <img src="https://via.placeholder.com/150" className="align-self-center mr-3" alt="..." />
                <div className="media-body">
                  <h5 className="mt-0">Pin 1</h5>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
              </div><br />
              <div className="media">
                <img src="https://via.placeholder.com/150" className="align-self-center mr-3" alt="..." />
                <div className="media-body">
                  <h5 className="mt-0">Pin 2</h5>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
              </div><br />
              <div className="media">
                <img src="https://via.placeholder.com/150" className="align-self-center mr-3" alt="..." />
                <div className="media-body">
                  <h5 className="mt-0">Pin 3</h5>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
              </div><br />
              <div className="media">
                <img src="https://via.placeholder.com/150" className="align-self-center mr-3" alt="..." />
                <div className="media-body">
                  <h5 className="mt-0">Pin 4</h5>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
              </div><br />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App