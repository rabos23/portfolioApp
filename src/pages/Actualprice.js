import React from "react";
import PriceHero from "../components/PriceHero";
import { useData } from "../components/useData"

function Actualprice(props) {
  const  {userData, setUserData} = useData();

  let itemsToRender;
  if (userData.crypto) {
    itemsToRender = userData.crypto.map(item => {
      return <PriceHero 
      title={props.title}
      subTitle={props.subTitle}
      text={props.text}
      key={item} 
      crypto={item}/>;
    });
  }

  return <div>{itemsToRender}</div>;
}
export default Actualprice;
{/* <PriceHero
title={props.title}
subTitle={props.subTitle}
text={props.text}
crypto={crypto}
/> */}