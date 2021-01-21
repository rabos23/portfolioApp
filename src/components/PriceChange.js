import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useFetch } from './useFetch'
function PriceChange(props) {
 const url = 'https://www.binance.com/api/v3/ticker/24hr?symbol='+props.crypto+props.currency;
    
  const { loading, products } = useFetch(url) 
  console.log(products)
  let className = "ml-5 lead font-weight-light";
  let color="black";
if (parseFloat(products.priceChangePercent) > 1){
  color="green";
  }else {
  color="red";
};
return (<>
   
    <Row className={className} style={{color:color}} > {props.currency } {loading ? 'loading...' : parseFloat(products.priceChange).toFixed(2)} / {parseFloat(products.priceChangePercent).toFixed(2) } </Row>
    
    </>);
}
export default PriceChange;
