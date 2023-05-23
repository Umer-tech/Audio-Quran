import React, { useState } from 'react'
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Player_Tafheem_Bayan from '../../../components/Player_Tafheem_Bayan';

const SurahDeyails = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/tafheem/${router.query.id}`).then((res) => res.json()).then((data) => setData(data));
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
  return (
    <div>
      <Container className="container" fluid="md">
    
    <>
    <Row className="bayan_screen">
      <Col lg md sm xs xxs={3}>
      </Col>
      <Col lg md sm xs xxs={6}>
        <h3>Tafheem -ul- Quran</h3>
      </Col>
      <Col lg md sm xs xxs={3}>
      </Col>
    </Row>
    <Row>
      <ListGroup className="list-group">
      {data.map((rukuh) => (
        <Button key= {rukuh.Id} variant="outline-secondary">
          <ListGroup.Item >
          <Row>
          <Col>
            <span>{rukuh.ArabicText}</span>
          </Col>
          </Row>   
          </ListGroup.Item>
          </Button> 
          ))}
      </ListGroup>
      
    </Row>
    <Row className="bayan_screen">
        <Player_Tafheem_Bayan audioList = {data} tafheem={true}/>
    </Row>
    </>
    
  </Container>
    </div>
  )
}

export default SurahDeyails;
