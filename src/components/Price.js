import React from "react";
import { Row } from "react-bootstrap";
import { useFetch } from "./useFetch";


function Price(props) {


  const url =
    "https://www.binance.com/api/v3/ticker/24hr?symbol=" +
    props.crypto +
    props.currency;

  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <>
      <Row className="lead font-weight-light">
        {" "}
        {props.currency}{" "}
        {loading ? "loading..." : parseFloat(products.lastPrice).toFixed(2)}
      </Row>
    </>
  );
}
export default Price;
