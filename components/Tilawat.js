import React from "react";
import {useState, useEffect} from 'react';
import Player from "./Player";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import PredictPage from "./PredictPage";
const Tilawat = (props) => {
  const [reciter, setRecitor] = useState(1);
  const [show, setShow] = useState(false);
  const [prediction, setPrediction] = useState('');
  const[ayataudiolist, setAyataudiolist] = useState([]);
  const surahs = [
    "Al-Fatihah", 
"Al-Baqarah", 
"Al-'Imran" ,
"An-Nisa'" ,
"Al-Ma'idah", 
"Al-An'am" ,
"Al-A'raf" ,
"Al-Anfal" ,
"At-Taubah",
"Yunus" ,	
"Hud" ,
"Yusuf", 
"Ar-Ra'd", 
"Ibrahim" ,
"Al-Hijr" ,
"An-Nahl" ,
"Bani Isra'il", 
"Al-Kahf" ,
"Maryam" ,
"Ta Ha" ,
"Al-Anbiya'",
"Al-Hajj", 
"Al-Mu'minun" ,
"An-Nur" ,
"Al-Furqan", 
"Ash-Shu'ara'", 
"An-Naml", 
"Al-Qasas", 
"Al-'Ankabut", 
"Ar-Rum" ,
"Luqman" ,
"As-Sajdah", 
"Al-Ahzab" ,
"Al-Saba'" ,
"Al-Fatir" ,
"Ya Sin" ,
"As-Saffat", 
"Sad",
"Az-Zumar", 
"Al-Mu'min", 
"Ha Mim",
"Ash-Shura", 
"Az-Zukhruf", 
"Ad-Dukhan", 
"Al-Jathiyah", 
"Al-Ahqaf", 
"Muhammad", 
"Al-Fath", 
"Al-Hujurat", 
"Qaf", 
"Ad-Dhariyat", 
"At-Tur", 
"An-Najm", 
"Al-Qamar", 
"Ar-Rahman", 
"Al-Waqi'ah", 
"Al-Hadid", 
"Al-Mujadilah", 
"Al-Hashr", 
"Al-Mumtahanah", 
"As-Saff", 
"Al-Jumu'ah", 
"Al-Munafiqun", 
"At-Taghabun", 
"At-Talaq", 
"At-Tahrim", 
"Al-Mulk", 
"Al-Qalam", 
"Al-Haqqah", 
"Al-Ma'arij", 
"Nuh", 
"Al-Jinn", 
"Al-Muzzammil", 
"Al-Muddaththir", 
"Al-Qiyamah", 
"Al-Insan", 
"Al-Mursalat", 
"An-Naba'", 
"An-Nazi'at", 
"Abasa", 
"At-Takwir", 
"Al-Infitar", 
"At-Tatfif", 
"Al-Inshiqaq", 
"Al-Buruj", 
"At-Tariq", 
"Al-A'la", 
"Al-Ghashiyah", 
"Al-Fajr", 
"Al-Balad", 
"Ash-Shams", 
"Al-Lail", 
"Ad-Duha", 
"Al-Inshirah", 
"At-Tin", 
"Al-'Alaq", 
"Al-Qadr", 
"Al-Bayyinah", 
"Al-Zilzal", 
"Al-'Adiyat", 
"Al-Qari'ah", 
"At-Takathur", 
"Al-'Asr", 
"Al-Humazah", 
"Al-Fil", 
"Al-Quraish", 
"Al-Ma'un", 
"Al-Kauthar", 
"Al-Kafirun", 
"An-Nasr", 
"Al-Lahab", 
"Al-Ikhlas", 
"Al-Falaq", 
"An-Nas", 

  ]
  useEffect(() => {
    let index = -1
    if(prediction != '')
    {
      index = surahs.indexOf(prediction)
      if(index >= 0)
      {
      document.getElementById(index).click()
      }
      if(ayataudiolist.length > 0)
      {
      switch (prediction) {
        case "BookMark":
          document.getElementById("BookMark").click()
          break;
        case "next":
          document.getElementById("next").click()
          break;
        case "Pause":
          document.getElementById("Pause").click()
          break;
        case "play":
          document.getElementById("play").click()
          break;
        case "prevoius":
          document.getElementById("prevoius").click()
          break;
        case "repeat":
          document.getElementById("repeat").click()
          break;
        case "settings":
          document.getElementById("settings").click()
          break;     
      default:
        break;
    }
    }}
    }, [prediction]);
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
  const handleChildState = (dataFromChild) => {
    setPrediction(dataFromChild);
  };
  
  return (
    <Container className="container" fluid="md">
    
      <>
      <Row className="bayan_screen">
        <Col lg md sm xs xxs={2}>
          <img id= "settings" className="logo" src="Images/settings.png" alt="settings logo" onClick={handleShow}/>
        </Col>
        <Col lg md sm xs xxs={8}>
          <h1 className="heading">{props.title}</h1>
        </Col>
        <Col lg md sm xs xxs={2}>
        </Col>
      </Row>
      <Row>
        <ListGroup className="list-group">
          {props.surahslist.map((surah, index) => (
            <Button variant="outline-secondary" onClick={() => {getSurahAudio(surah.Id)}} key={surah.Id} id= {index} >
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
        <Player audioList = {ayataudiolist} Display= {true}/>
      </Row>
      <Row>
      <PredictPage sendDataToParent={handleChildState} state_up = {true}/>
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
