import React, {useState} from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Graph from "../components/Graph";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

function PriceHero(props) {
  /* const url =
  "https://www.binance.com/api/v3/ticker/24hr?symbol=" +
  props.crypto +
  props.currency; */
  

  const { crypto } = props;
  if (crypto.market_data.price_change_percentage_24h > 0) {
    let style = { color: "red" };
  }
  console.log(crypto);
  const [isShow, setIsShow] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  /* if(crypto.market_data.price_change_percentage_24h > 0){
    setIsGreen(true);
    console.log(isGreen)
  } */
  function handleClick(e) {
    e.preventDefault();
   setIsShow(!isShow)
  }
  return (
    <div className="mt-2" style={{ display: "flex" }}>
      <Jumbotron style={{ width: "70%" }}>
        {/* 
        zkusit udelat posuvny price hero, jakoby ze se vysuzeno zespoda lista s hodnotama?
        
        <Row className="ml-2 display-4">{crypto.symbol.toUpperCase()}/</Row><Col style={{fontSize: 25, textAlign: "center"}}>{crypto.name}</Col> */}
        <Row>
          {" "}
          <p className="display-4">{crypto.symbol.toUpperCase()}</p>
          <p style={{ marginTop: 35 }}>/{crypto.name}</p>
        </Row>
        <Container className="justify-content">
          <Row md={8}>
            <Col>
              Prices
              {}
            </Col>
            <Col xs={4}>
              <Row>Change</Row>

              <Row
                style={
                  crypto.market_data.price_change_percentage_24h > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                {crypto.market_data.price_change_24h}USD /{" "}
                {crypto.market_data.price_change_percentage_24h} % / 24 hod.
              </Row>
            </Col>
          </Row>
          <Row>
           {isShow ? <UpOutlined onClick={handleClick} /> : <DownOutlined onClick={handleClick}/> }
           
          </Row>
        </Container>
        {isShow ? <div> asd </div> : "" }
      </Jumbotron>
      
      <Jumbotron className="ml-2" style={{ width: "30%" }}>
        <Graph crypto={crypto.id} isGreen={isGreen}/>
      </Jumbotron>
    </div>
  );
}
export default PriceHero;
