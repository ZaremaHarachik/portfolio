import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import image from "../images/photo.jpg";

const Myfoto = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col xs={6} md={4}>
          {/* <Image /> */}
          <Image
            src="https://i.imgur.com/m8eTCyN.jpg"
            alt=""
            style={{
              minWidth: "10rem",
              minHeight: "10rem",
              maxWidth: "15rem",
              maxHeight: "15rem",
            }}
          />
        </Col>
        <Col>
          <p>
          “A key principle of any effective software engineering, not only reliability-oriented engineering,
           simplicity is a quality that, once lost, can be extraordinarily difficult to recapture.”!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Myfoto;