import React from "react";
import AudioPlayer from "../../../components/AudioPlayer";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
const index = () => {
  return (
    <Container className="container">
      <Row>
        <Col lg md sm={2}>
          <img className="logo" src="settings.png" alt="settings logo" />
        </Col>
        <Col lg md sm={8}>
          <h1>Bayan ul Quran</h1>
        </Col>
        <Col lg md sm={2}>
          <img
            className="logo"
            style={{ float: "right" }}
            src="bookmark.png"
            alt="bookmark logo"
          />
        </Col>
      </Row>
      <Row>
        <ListGroup className="list-group">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Row>
      <Row>
        <AudioPlayer />
      </Row>
    </Container>
  );
};

export default index;
