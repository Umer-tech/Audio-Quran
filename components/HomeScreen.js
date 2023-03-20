import React from "react";
import AudioPlayer from "./AudioPlayer";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
const HomeScreen = (props) => {
  return (
    <Container className="container" fluid="md">
      <Row className="bayan_screen">
        <Col lg md={2} sm={3}>
          <img className="logo" src="settings.png" alt="settings logo" />
        </Col>
        <Col lg md={8} sm={6}>
          <h3>{props.title}</h3>
        </Col>
        <Col lg md={2} sm={3}>
          <img className="logo" src="bookmark.png" style={{ float: "right" }} />
        </Col>
      </Row>
      <Row>
        <ListGroup className="list-group">
          {props.surahslist.map((surah) => (
            <ListGroup.Item key={surah}>
              {surah.EnglishName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
      <Row className="bayan_screen">
        <AudioPlayer />
      </Row>
    </Container>
  );
};

export default HomeScreen;
