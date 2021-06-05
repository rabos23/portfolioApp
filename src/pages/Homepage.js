import React from "react"
import Hero from "../components/Hero";
import { Col, Container, Row, Image } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Divider } from "antd";

function Homepage(props) {

  return (
    <div>
     
      
    
  <Jumbotron className="mt-5">TASK PLANNER</Jumbotron>
     <Container className="justify-content mt-5">
        <Row>
          <Col >
          TODO
          </Col>
      
          <Col>
            ONGOING
          </Col>
          
          <Col>
            FINISHED
          </Col>
          </Row>
          
          <Row>
          <Divider  />
          <Col >
          Task#1
          </Col>
          
          <Col>
          Task#2
          </Col>
          
          <Col>
          Task#3
          </Col>
          </Row>
        </Container>

    </div>
  );
}

export default Homepage;
