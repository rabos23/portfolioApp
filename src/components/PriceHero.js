import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Graph from "../components/Graph";

function PriceHero(props) {
  /* const url =
  "https://www.binance.com/api/v3/ticker/24hr?symbol=" +
  props.crypto +
  props.currency; */
const { crypto } = props;
console.log(crypto)
  return (
    <div className="mt-2" style={{display:"flex"}}>
      <Jumbotron
              
        style={{ width: "70%" }}
      >
        {/* <Row className="ml-2 display-4">{crypto.symbol.toUpperCase()}/</Row><Col style={{fontSize: 25, textAlign: "center"}}>{crypto.name}</Col> */}
        <Row> <p className="display-4">{crypto.symbol.toUpperCase()}</p><p style={{marginTop:35}}>/{crypto.name}</p></Row>
        <Container className="justify-content">
        <Row md={8}>
           <Col>
            Prices
            
            
          </Col>
          <Col xs={4}>
            Change
           
            
           
          </Col> 
          
          
          
        </Row>
      </Container>
      </Jumbotron>

      <Jumbotron
        className="ml-2"
        
        style={{ width: "30%"}}
      >
         <Graph crypto={crypto.id} />
      </Jumbotron>
    </div>
  );
}
export default PriceHero;
