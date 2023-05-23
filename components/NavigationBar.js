import React from 'react'
import {
    Container,
    Row,
    Nav,
    Navbar,
  } from "react-bootstrap";

const NavigationBar = () => {

  return (
    <>
        <Container className="container" fluid="md">
        <Row>
          <Navbar className="navbar" expand="lg" fixed>
            <Navbar.Brand href="#home"> Audio Quran</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="ba sic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Settings</Nav.Link>
                <Nav.Link href="/bookmarks">Bookmarks</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        </Container>
    </>
  )
}

export default NavigationBar;
