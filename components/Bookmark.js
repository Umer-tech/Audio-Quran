import React from "react";
import {useState, useEffect} from 'react';
import Player from "./Player";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, ListGroup, Row, Col } from "react-bootstrap";
const Bookmark = (props) => {
  const [ayataudiolist, setAyataudiolist] = useState([]);
  const [showbookmark, setShowBookmark] = useState(false);
  const [bookmark, setBookmark] = useState({BookmarkId: 0, Title: "", SurahRef: 0, AyatRef: 0, RepeatCount: 0, EndAyatRef: 0, Rtype: 0, ReciterId: 0});

  const  getBookmarkAudio =async (bookmark) => {
    let dataa = [];
    let data2 = [];
    const id = bookmark.SurahRef + "-" + bookmark.ReciterId;
    await fetch(`/api/surah_audio/${id}`).then((res) => res.json()).then((data)=> dataa = data);
    data2 = dataa.filter((data) => {
      if (data.AyatId >= bookmark.AyatRef && data.AyatId <= bookmark.EndAyatRef)
          return data;
      })

    setAyataudiolist(data2);
    }
    const handleBookmarkClose = () => 
  {
    setShowBookmark(false);
  }
  const handleBookmarkCloseOnSave = async () => 
  {
    const id = bookmark.BookmarkId;
    setShowBookmark(false);
    try{
      const Options = {
          method : 'PUT',
          headers : { 'Content-Type': "application/json"},
          body: JSON.stringify(bookmark)
      }
      
      const response = await fetch(`/api/bookmark/${id}`, Options)
      if(response.status == 200)
        alert("Bookmark Updated")
      ;
  }catch(error){
      return error;
  }
  }
  const handleEdit = async (bookmark) => {
    const id = bookmark.BookmarkId;
    await fetch(`/api/bookmark/${id}`).then((res) => res.json()).then((data)=> setBookmark(...data));
    setShowBookmark(true);
  }

  function handelChange(e)  {
      e.preventDefault();
    setBookmark({...bookmark, [e.target.name]: e.target.value})
  }

  const handelDelete = async(bookmark) => {
    const id = bookmark.BookmarkId;
    try{
      const Options = {
          method : 'DELETE',
          headers : { 'Content-Type': "application/json"}
      }
      
      const response = await fetch(`/api/bookmark/${id}`, Options)
      if(response.status == 200)
        alert("Deleted!!!")
      ;
  }catch(error){
      return error;
  }
  }


  return (
    <Container className="container" fluid="md">
    
      <>
      <Row className="bayan_screen">
        <Col lg md sm xs xxs={2}>
        </Col>
        <Col lg md sm xs xxs={8}>
          <h1 className="heading">Bookmarks</h1>
        </Col>
        <Col lg md sm xs xxs={2}>
          <img  className = "chain_logo" src="Images/chain0.png" alt = "ChainLogo" onClick={() => alert("Code for creating chain")}/>
        </Col>
      </Row>
      <Row>
        <ListGroup className="list-group">
          {props.bookmarkslist.map((bookmark, index) => (
            <Button variant="outline-secondary" onClick={() => {getBookmarkAudio(bookmark)}} key={bookmark.BookmarkId}>
            <ListGroup.Item>
            
            <Row>
              <Col lg md sm xs xxs={11}>
              <img className="bookmark_logo" src="Images/star.png" alt = "BookmarkLogo"/>
              <span className="bookmark_title">{bookmark.Title}</span>
              </Col>
              <Col lg md sm xs xxs={1}>
                <span className="bookmark_icons">
                <img src = "Icons/pencil-square.svg" className="icons" alt = "Edit Icon" onClick={() => handleEdit(bookmark)}/>
                <img src = "Icons/trash3.svg" className="icons" alt = "Delete Icon" onClick={() => handelDelete(bookmark)}/>
                </span>
              </Col>
            </Row>

            </ListGroup.Item>
            </Button>
          ))}
        </ListGroup>
        
      </Row>
      <Row>
        {showbookmark ? ("") : ( 
        <Player audioList = {ayataudiolist} Display= {false}/>
        )}
      </Row>
      </>
      <Modal show={showbookmark} onHide={handleBookmarkClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Bookmark Name</Form.Label>
          <Form.Control type="text" name = "Title" onChange={handelChange}
           value={bookmark.Title} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Ayat From</Form.Label>
          <Form.Control type="text" name = "AyatRef" onChange={handelChange} value = {bookmark.AyatRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Ayat To</Form.Label>
          <Form.Control type="text" name = "EndAyatRef" onChange={handelChange} value = {bookmark.EndAyatRef}  />
        </Form.Group>

     </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBookmarkCloseOnSave}>
            Update
          </Button>
        </Modal.Footer>
        
      </Modal>
          </Container>
    
  );
};

export default Bookmark;
