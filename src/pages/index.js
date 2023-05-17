import React from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Stack
} from "react-bootstrap";
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
      </Container>
    </>
  );
};

export default index;
