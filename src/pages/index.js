import React from "react";
import Link from "next/link";
import UserAudioRecorder from "../../components/UserAudioRecorder";
import PredictPage from "../../components/PredictPage";
import VoiceRecorder from "../../components/VoiceRecorder";
import {
  Container,
  Row,
  Col,
  Stack
} from "react-bootstrap";
import { VoiceOverOff } from "@mui/icons-material";
const index = () => {
  return (
    <>
      <Container className="container" fluid="md">
        <Row>
          <Col></Col>
          <Col lg={4} md={8} sm={12}>
            <Stack className="stack" gap={5}>
              <div className="menu">
                <Link href="/tilawat" style={{ textDecoration: 'none' , color: "black"}}>
                  <span>Tilawat </span> <img src="Images/quran.png" alt="logo" />
                </Link>
              </div>
              <div className="menu">
                <Link href="/bayan" style={{ textDecoration: 'none' ,color: "black"}}>
                  <span>Bayan </span> <img src="Images/quran.png" alt="logo" />
                </Link>
              </div>
                <div className="menu">
              <Link href="/tafheem/" style={{ textDecoration: 'none', color: "black" }}>
                  <span>Tafheem</span> <img src="Images/quran.png" alt="logo" />
                  </Link>

                </div>
            </Stack>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          {/* <UserAudioRecorder/> */}
          <PredictPage state_up= {false}/>
          {/* <VoiceRecorder/> */}
        </Row>
      </Container>
    </>
  );
};

export default index;
