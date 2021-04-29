import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Graph from "../components/Graph";
import Price from "../components/Price";
import PriceChange from "../components/PriceChange";
function PriceHero(props) {
  
  return (
    <Jumbotron className="jumbotron-fluid mt-5">
      <Row className="ml-5 display-2">{props.crypto}/</Row>
      <Container className="justify-content">
        <Row md={8}>
           <Col>
            Prices
            {props.fiat.map(curr => 
              <Price currency={curr} crypto={props.crypto} />
              )}
            
          </Col>
          <Col xs={4}>
            Change
            {props.fiat.map(curr => 
               <PriceChange currency={curr} crypto={props.crypto} />
              )}
            
           
          </Col> 
          
          
            <Graph cryptoName={cryptoName}/>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default PriceHero;
