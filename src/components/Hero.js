import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
function Hero(props) {
  return (
    <Jumbotron className="jumbotron-fluid mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} sm={6} xs={9}>
            {props.title && <h1 className="display-1">{props.title}</h1>}
            {props.subTitle && (
              <h2 className="display-4 font-weight-light">{props.subTitle}</h2>
            )}
            {props.text && (
              <h3 className="lead font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Hero;
