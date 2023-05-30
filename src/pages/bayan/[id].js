import React, { useState } from 'react'
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Player_Tafheem_Bayan from '../../../components/Player_Tafheem_Bayan';
import PredictPage from '../../../components/PredictPage';

const SurahDeyails = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [audioData, setAudioData] = useState([])
  const numbers = ["1","2","3","4","5","6","7","8","9"]
  useEffect(() => {
    let index = -1
    if(prediction != '')
    {
      index = numbers.indexOf(prediction)
      if(index >= 0)
      {
      index += 1
      document.getElementById(index).click()
      }
      if(audioData.length > 0)
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
      default:
        break;
    }}
    }
    }, [prediction]);
  const updateData = (id) => {
    if(data != null)
    {
      const filtereddata = data.filter((d) =>  d.AyatFrom === id)
      setAudioData(filtereddata)
    }
    
  }
  const handleChildState = (dataFromChild) => {
    setPrediction(dataFromChild);
  };
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/bayan/${router.query.id}`).then((res) => res.json()).then((data) => setData(data));
        // Store the response data in the state

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Call the fetchData function
    fetchData();
  }, []);

  if(data == null)
  {
    return (
      <span>Loading.......!</span>
    )
  }
  else{
  return (
    <div>
      <Container className="container" fluid="md">
    
    <>
    <Row className="bayan_screen">
      <Col lg md sm xs xxs={3}>
      </Col>
      <Col lg md sm xs xxs={6}>
        <h3>{router.query.surah}</h3>
      </Col>
      <Col lg md sm xs xxs={3}>
      </Col>
    </Row>
    <Row>
      <ListGroup className="list-group">
      {data.map((rukuh, index) => (
        <Button id= {index + 1} key= {rukuh.Id} variant="outline-secondary" onClick={() => updateData(rukuh.AyatFrom)}>
          <ListGroup.Item >
          <Row>
          <Col lg md sm xs xxs={3}>
          </Col>
          <Col lg md sm xs xxs={6}>
            <span>{"..." +rukuh.AyahText.slice(-50) }</span><br/>
            <b><span>Ayah {rukuh.AyatFrom}-{rukuh.AyatTo}</span></b>
          </Col>
          <Col lg md sm xs xxs={3}>
          {index + 1}
          </Col>
          </Row>   
          </ListGroup.Item>
          </Button> 
          ))}
      </ListGroup>
      
    </Row>
    <Row className="bayan_screen">
        <Player_Tafheem_Bayan audioList = {audioData} tafheem={false} Display= {true}/>
    </Row>
    <Row>
    <PredictPage sendDataToParent={handleChildState} state_up = {true}/>
    </Row>
    </>
    
  </Container>
    </div>
  )
      }
}

export default SurahDeyails;
