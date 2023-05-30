// import React from "react";
// import { useRouter } from 'next/router'
// import {useState, useEffect} from 'react';
// import { useRef } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { Container, ListGroup, Row, Col } from "react-bootstrap";
// import PredictPage from "../components/PredictPage"
// const Bayan_and_Tafheem = (props) => {
//   const [reciter, setRecitor] = useState(0);
//   const [show, setShow] = useState(false);
//   const router = useRouter();
//   const buttonRef = useRef(null);
//   const pathname = router.pathname;
//   const [prediction, setPrediction] = useState('');
//   const [re_render, setRe_render] = useState(false)
//   const handleChildState = (dataFromChild) => {
//     setRe_render(true)
//     setPrediction(dataFromChild);


//   };
//   const handleClose = () => 
//   {
//     setShow(false);
//   }
//   const handleCloseOnSave = () => 
//   {
//     setShow(false);
//   }
//   const handleShow = () => setShow(true);

//   function changeRecitor(e) {
//     e.preventDefault();
//     setRecitor(e.target.value);
//   }
//   useEffect(() => {
//     console.log(buttonRef);
//     if (buttonRef.current !== null) {
//       buttonRef.current.click();
//     }
//   }, [prediction]);
//   return (
//     <Container className="container" fluid="md">
    
//       <>
//       <Row className="bayan_screen">
//         <Col lg md sm xs xxs={2}>
//         </Col>
//         <Col lg md sm xs xxs={8}>
//           <h3>{props.title}</h3>
//         </Col>
//         <Col lg md sm xs xxs={2}>
//         </Col>
//       </Row>
//       <Row>
//         {re_render ? ( <ListGroup className="list-group">
//           {props.surahslist.map((surah) => (
//             <Button variant="outline-secondary" onClick={() => {
//         router.push({
//           pathname: `/${pathname}/[id]`,
//           query: { id: surah.Id,
//                    surah: surah.EnglishName
//                   },
//         })
//       }}
//       key={surah.Id} 
//       ref={surah.EnglishName === prediction ? buttonRef : null}
//       >

//             <ListGroup.Item >
//             <Row>
//             <Col>
//               <span>{surah.EnglishName}</span>
//             </Col>
//             <Col>
//               <span>{surah.ArabicName}</span>
//             </Col>
//             </Row>
              
              
//             </ListGroup.Item>
//             </Button>
//           ))}
//         </ListGroup>): ( <ListGroup className="list-group">
//           {props.surahslist.map((surah) => (
//             <Button variant="outline-secondary" onClick={() => {
//         router.push({
//           pathname: `/${pathname}/[id]`,
//           query: { id: surah.Id,
//                    surah: surah.EnglishName
//                   },
//         })
//       }}
//       key={surah.Id} 
//       ref={surah.EnglishName === prediction ? buttonRef : null}
//       >

//             <ListGroup.Item >
//             <Row>
//             <Col>
//               <span>{surah.EnglishName}</span>
//             </Col>
//             <Col>
//               <span>{surah.ArabicName}</span>
//             </Col>
//             </Row>
              
              
//             </ListGroup.Item>
//             </Button>
//           ))}
//         </ListGroup>)}
       
        
//       </Row>
//       <Row className="bayan_screen">
//       <PredictPage sendDataToParent={handleChildState}/>
//       </Row>
//       </>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Set Recitor</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//       <Form.Check 
//         type="radio"
//         id="custom-radio"
//         label="Al-Afasy"
//         value= "1"
//         onChange={changeRecitor}
//       />
//       <Form.Check 
//         type="radio"
//         label="Abdul Basit"
//         id="disabled-custom-radio"
//         value= "2"
//         onChange={changeRecitor}
//       />
//       <Form.Check 
//         type="radio"
//         label="As-Sudais"
//         id="disabled-custom-radio"
//         value= "3"
//         onChange={changeRecitor}
//       />
//       <Form.Check 
//         type="radio"
//         label="Al-Shuraim"
//         id="disabled-custom-radio"
//         value= "4"
//         onChange={changeRecitor}
//       />
//      </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleCloseOnSave}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
        
//       </Modal>
      
//     </Container>
    
//   );
// };

// export default Bayan_and_Tafheem;
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import PredictPage from "../components/PredictPage"
import { Container, ListGroup, Row, Col } from "react-bootstrap";

const Bayan_and_Tafheem = (props) => {
  const [prediction, setPrediction] = useState('');
  const router = useRouter();
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

  const handleChildState = (dataFromChild) => {
    setPrediction(dataFromChild);
  };

  useEffect(() => {
    let index = -1
    if(prediction != '')
    {
      index = surahs.indexOf(prediction)
      if(index >= 0)
      {
      document.getElementById(index).click()
      }
    }
    }, [prediction]);

  const handleButtonClick = (surah) => {
    router.push({
      pathname: `/${router.pathname}/[id]`,
      query: {
        id: surah.Id,
        surah: surah.EnglishName
      },
    });
  };

  return (
    <Container className="container" fluid="md">
      <Row className="bayan_screen">
        <Col lg md sm xs xxs={2}></Col>
        <Col lg md sm xs xxs={8}>
          <h3>{props.title}</h3>
        </Col>
        <Col lg md sm xs xxs={2}></Col>
      </Row>
      <Row>
        <ListGroup className="list-group">
          {props.surahslist.map((surah, index) => (
            <Button
              variant="outline-secondary"
              onClick={() => handleButtonClick(surah)}
              key={surah.Id}
              id= {index}
            >
              <ListGroup.Item>
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
        <PredictPage sendDataToParent={handleChildState} state_up = {true}/>
      </Row>
      {/* Rest of your code */}
    </Container>
  );
};

export default Bayan_and_Tafheem;
