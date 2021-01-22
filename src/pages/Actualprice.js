import React, { Component } from "react";

import PriceHero from "../components/PriceHero";

function Actualprice(props) {
  return (
    <div>
      
      <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} crypto={"BTC"}/>
     {/*  <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} crypto={"ETH"}/>
      <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} crypto={"ADA"}/>
      <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} crypto={"DOT"}/> */}
      
    </div>
  );
};

export default Actualprice;
