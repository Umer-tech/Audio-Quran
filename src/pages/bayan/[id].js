// import React from "react";
// import { useRouter } from 'next/router';
// import { useState, useEffect } from "react";
// import AudioPlayer from "../../../components/AudioPlayer";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { Container, ListGroup, Row, Col } from "react-bootstrap";
// const SurahBayanAyats = () => {
  
//   const [reciter, setRecitor] = useState(0);
//   const [show, setShow] = useState(false);
//   const router = useRouter();
//   const { id } = router.query;
//   const[ayataudiolist, setAyataudiolist] = useState([]);
//   useEffect(()=> {

//     if(id !== undefined)
//     {
//     const response = fetch(`/api/surahs/${id}`).then((res) => res.json()).then((data)=> setAyataudiolist(data));
//     }
//   }, [id])

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
//   return (
//     <Container className="container" fluid="md">
    
//       <>
//       <Row className="bayan_screen">
//         <Col lg md sm xs xxs={2}>
//           <img className="logo" src="settings.png" alt="settings logo" onClick={handleShow}/>
//         </Col>
//         <Col lg md sm xs xxs={8}>
//           <h3>Bayan ul Quran</h3>
//         </Col>
//         <Col lg md sm xs xxs={2}>
//           <img className="logo" src="bookmark.png" style={{ float: "right" }} />
//         </Col>
//       </Row>
//       <Row>
//         <ListGroup className="list-group">
//           {ayataudiolist.map((ayataudio) => (
//             <ListGroup.Item key={ayataudio.AyatId}>
//               {ayataudio.AyatId}
//               <span></span>
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
        
//       </Row>
//       <Row className="bayan_screen">
//         <AudioPlayer />
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

// export default SurahBayanAyats;
