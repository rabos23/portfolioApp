import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import PriceHero from "../components/PriceHero";
import Content from "../components/Content";
function Actualprice(props) {
  return (
    <div>
      
      <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} crypto={"BTC"}/>
      <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} crypto={"ETH"}/>
      <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} crypto={"ADA"}/>
      <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} crypto={"DOT"}/>
      
    </div>
  );
};

export default Actualprice;
