import React, { useState } from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Board } from './components/Board'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'


export const App = () => {
  const [selectedContinent, setSelectedContinent] = useState('worldwide')
  const [search, setSearch] = useState('')

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.id)
    setSearch('')
  }

  const handleSearch = (event) => {
    setSelectedContinent('worldwide')
    setSearch(event.target.value)
  }

  return (
    <div className="App">
      <Container>
        <Header />
        <Row className="justify-content-md-center">

          <Col md={4} lg={4} className="sidebar sticky-top">
            <Navbar
              selectedContinent={selectedContinent}
              handleContinentChange={handleContinentChange}
              handleSearch={handleSearch}
            />
          </Col>

          <Col md={8} lg={8} className="pl-5">
            <Board
              selectedContinent={selectedContinent}
              search={search}
            />
          </Col>

        </Row>
      </Container>
    </div>
  )
}
