import React from "react";
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Container, ListGroup, Row, Col } from "react-bootstrap";
const Bayan_and_Tafheem = (props) => {
  const [reciter, setRecitor] = useState(0);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;
  const handleClose = () => 
  {
    setShow(false);
  }
  const handleCloseOnSave = () => 
  {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  function changeRecitor(e) {
    e.preventDefault();
    setRecitor(e.target.value);
  }
  
  return (
    <Container className="container" fluid="md">
    
      <>
      <Row className="bayan_screen">
        <Col lg md sm xs xxs={2}>
        </Col>
        <Col lg md sm xs xxs={8}>
          <h3>{props.title}</h3>
        </Col>
        <Col lg md sm xs xxs={2}>
        </Col>
      </Row>
      <Row>
        <ListGroup className="list-group">
          {props.surahslist.map((surah) => (
            <Button variant="outline-secondary" onClick={() => {
        router.push({
          pathname: `/${pathname}/[id]`,
          query: { id: surah.Id,
                  },
        })
      }}
      key={surah.Id}>
            <ListGroup.Item >
            <Row>
            <Col>
              <span>{surah.EnglishName}</span>
            </Col>
            <Col>
              <span>{surah.ArabicName}</span>
            </Col>
            </Row>
              
              
            </ListGroup.Item>
            </Button>
          ))}
        </ListGroup>
        
      </Row>
      <Row className="bayan_screen">
      </Row>
      </>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Recitor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Check 
        type="radio"
        id="custom-radio"
        label="Al-Afasy"
        value= "1"
        onChange={changeRecitor}
      />
      <Form.Check 
        type="radio"
        label="Abdul Basit"
        id="disabled-custom-radio"
        value= "2"
        onChange={changeRecitor}
      />
      <Form.Check 
        type="radio"
        label="As-Sudais"
        id="disabled-custom-radio"
        value= "3"
        onChange={changeRecitor}
      />
      <Form.Check 
        type="radio"
        label="Al-Shuraim"
        id="disabled-custom-radio"
        value= "4"
        onChange={changeRecitor}
      />
     </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseOnSave}>
            Save Changes
          </Button>
        </Modal.Footer>
        
      </Modal>
      
    </Container>
    
  );
};

export default Bayan_and_Tafheem;
