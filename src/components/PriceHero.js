import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Graph from "../components/Graph";

function PriceHero(props) {
  /* const url =
  "https://www.binance.com/api/v3/ticker/24hr?symbol=" +
  props.crypto +
  props.currency; */

  return (
    <div className="mt-2"style={{display:"flex"}}>
      <Jumbotron
              
        style={{ width: "70%" }}
      >
        <Row className="ml-2 display-4">{props.crypto}/</Row>
        <Container className="justify-content">
        <Row md={8}>
           <Col>
            Prices
            
            
          </Col>
          <Col xs={4}>
            Change
           
            
           
          </Col> 
          
          
            {/* <Graph /> */}
        </Row>
      </Container>
      </Jumbotron>

      <Jumbotron
        className="ml-2"
        
        style={{ width: "29%"}}
      >
        
      </Jumbotron>
    </div>
  );
}
export default PriceHero;
