import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";


function Homepage(props) {



  return (
    <div>
     
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

      <Carousel />
    </div>
  );
}

export default Homepage;
