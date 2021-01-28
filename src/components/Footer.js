import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer className="mt-5">
      <Container>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0 text-center" md={3} sm={12}>
            World of Automatization
          </Col>
          <Col className="p-0 d-flex justify-content-center " md={2}>
          © Radek Cihi
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
