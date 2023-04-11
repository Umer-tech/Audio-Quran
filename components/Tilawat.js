import React from "react";
import {useState, useEffect} from 'react';
import Player from "./Player";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Container, ListGroup, Row, Col } from "react-bootstrap";
const Tilawat = (props) => {
  const [reciter, setRecitor] = useState(1);
  const [show, setShow] = useState(false);
  const[ayataudiolist, setAyataudiolist] = useState([]);

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
  const  getSurahAudio =async (surahId) => {
      const id = surahId + "-" + reciter;
      await fetch(`/api/surah_audio/${id}`).then((res) => res.json()).then((data)=> setAyataudiolist(data));
  }
  
  return (
    <Container className="container" fluid="md">
    
      <>
      <Row className="bayan_screen">
        <Col lg md sm xs xxs={2}>
          <img className="logo" src="Images/settings.png" alt="settings logo" onClick={handleShow}/>
        </Col>
        <Col lg md sm xs xxs={8}>
          <h1>{props.title}</h1>
        </Col>
        <Col lg md sm xs xxs={2}>
        </Col>
      </Row>
      <Row>
        <ListGroup className="list-group">
          {props.surahslist.map((surah, index) => (
            <Button variant="outline-secondary" onClick={() => {getSurahAudio(surah.Id)}} key={surah.Id}>
            <ListGroup.Item >
            
            <Row>
            <Col lg md sm xs xxs={2}>
              <span>{index + 1}</span>
            </Col>
            <Col lg md sm xs xxs={5}>
              <span>{surah.EnglishName}</span>
            </Col>
            <Col lg md sm xs xxs={5}>
              <span>{surah.ArabicName}</span>
            </Col>
            </Row>
              
              
            </ListGroup.Item>
            </Button>
          ))}
        </ListGroup>
        
      </Row>
      <Row>
        <Player audioList = {ayataudiolist} />
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

export default Tilawat;
