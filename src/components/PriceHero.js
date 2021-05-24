import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Graph from "../components/Graph";


function PriceHero(props) {
  /* const url =
  "https://www.binance.com/api/v3/ticker/24hr?symbol=" +
  props.crypto +
  props.currency; */


return (
    <Jumbotron className="jumbotron-fluid mt-5">
      <Row className="ml-5 display-2">{props.crypto.id}/</Row>
      <Container className="justify-content">
        <Row md={8}>
           <Col>
            Prices
            {/* {props.fiat.map(curr => 
              <Price currency={curr} crypto={props.crypto} />
              )} */}
            
          </Col>
          <Col xs={4}>
            Change
           {/*  {props.fiat.map(curr => 
               <PriceChange currency={curr} crypto={props.crypto} />
              )} */}
            
           
          </Col> 
          
          
            <Graph cryptoName={props.crypto.name}/>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default PriceHero;
