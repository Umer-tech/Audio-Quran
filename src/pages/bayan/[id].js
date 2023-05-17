import React from 'react'
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const SurahDeyails = () => {
  return (
    <div>
      <Container className="container" fluid="md">
    
    <>
    <Row className="bayan_screen">
      <Col lg md sm xs xxs={2}>
      </Col>
      <Col lg md sm xs xxs={8}>
        <h3>Bayan -ul- Quran</h3>
      </Col>
      <Col lg md sm xs xxs={2}>
        <img className="logo" src="Images/bookmark.png" style={{ float: "right" }} />
      </Col>
    </Row>
    <Row>
      <ListGroup className="list-group">
        <Button variant="outline-secondary">
          <ListGroup.Item >
          <Row>
          <Col>
            <span>Ayat 1</span>
          </Col>
          </Row>
            
            
          </ListGroup.Item>
          </Button>
          <Button variant="outline-secondary">
          <ListGroup.Item >
          <Row>
          <Col>
            <span>Ayat 2</span>
          </Col>
          </Row>
            
            
          </ListGroup.Item>
          </Button>
          <Button variant="outline-secondary">
          <ListGroup.Item >
          <Row>
          <Col>
            <span>Ayat 3</span>
          </Col>
          </Row>
            
            
          </ListGroup.Item>
          </Button>
          <Button variant="outline-secondary">
          <ListGroup.Item >
          <Row>
          <Col>
            <span>Ayat 4</span>
          </Col>

          </Row>
            
            
          </ListGroup.Item>
          </Button>
          <Button variant="outline-secondary">
          <ListGroup.Item >
          <Row>
          <Col>
            <span>Ayat 5</span>
          </Col>
          </Row>
            
            
          </ListGroup.Item>
          </Button> 
          
      </ListGroup>
      
    </Row>
    <Row className="bayan_screen">
    </Row>
    </>
    
  </Container>
    </div>
  )
}

export default SurahDeyails
