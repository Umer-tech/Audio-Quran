import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Stack,
} from "react-bootstrap";
const index = () => {
  return (
    <>
      <Container className="container" fluid="md">
        <Row>
          <Navbar className="navbar" expand="lg">
            <Navbar.Brand href="#home"> Audio Quran</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="ba sic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/bayan">Home</Nav.Link>
                <Nav.Link href="#link">Settings</Nav.Link>
                <Nav.Link href="#bookmarks">Bookmarks</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row>
          <Col></Col>
          <Col lg={4} md={8} sm={12}>
            <Stack className="stack" gap={5}>
              <div className="menu">
                <span>Tilawat </span> <img src="quran.png" alt="logo" />
              </div>
              <div className="menu">
                <span>Bayan </span> <img src="quran.png" alt="logo" />
              </div>
              <div className="menu">
                <span>Tafheef</span> <img src="quran.png" alt="logo" />
              </div>
            </Stack>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
