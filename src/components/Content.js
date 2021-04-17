import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function Content(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={props.size}>{props.children}</Col>
      </Row>
    </Container>
  );
}
export default Content;
