import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Price from "../components/Price";
import PriceChange from "../components/PriceChange";
import Graph from "../components/Graph";
function PriceHero(props) {
  return (
    <Jumbotron className="jumbotron-fluid mt-5">
      <Row className="ml-5 display-2">{props.crypto}/</Row>
      <Container className="justify-content">
        <Row md={8}>
           <Col>
            Prices
            <Price currency={"EUR"} crypto={props.crypto} />
            <Price currency={"USDT"} crypto={props.crypto} />
          </Col>
          <Col xs={4}>
            Change
            <PriceChange currency={"EUR"} crypto={props.crypto} />
            <PriceChange currency={"USDT"} crypto={props.crypto} />
          </Col> 
          
          
            <Graph />
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default PriceHero;
