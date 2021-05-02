import { includes } from "lodash-es";
import React, {useState, useEffect, useContext} from "react";
import { UserContext } from '../contexts/DataContext';
import PriceHero from "../components/PriceHero";
import { useFetch } from '../components/useFetch';
import { useAuth } from "../contexts/AuthContext"
import { Col, Container, Row, Jumbotron } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
const Actualprice = (props) => {
   const {cryptoData, loading, error, defaultCrypto, defaultFiat, currentUser} = useContext(UserContext);


/*  if(loading === true){
  console.log("loading");
}else {
  data.map((item) => console.log(item))
} */ 


   let itemsToRender = "hello";
   if (!loading) {
    let datac = cryptoData;
    
    itemsToRender = datac.map(item => {
      return <PriceHero 
      title={props.title}
      subTitle={props.subTitle}
      text={props.text}
      key={item.id} 
      crypto={item}
      fiat={defaultFiat}
     />;
    });
  }  
  return <div>
    {(defaultCrypto && currentUser) ? <Jumbotron className="jumbotron-fluid mt-3" style={{textAlign:"center", padding:"20px"}}>You did not specify crypto currencies! Go to <Link to="/dashboard" > Dashboard</Link></Jumbotron>: ""}
    {loading ? "Loading" : itemsToRender}
    </div>;
}
export default Actualprice;
{/* <PriceHero
title={props.title}
subTitle={props.subTitle}
text={props.text}
crypto={crypto}
/> */}