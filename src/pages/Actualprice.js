import { includes } from "lodash-es";
import React, {useState, useEffect, useContext} from "react";

import PriceHero from "../components/PriceHero";
import { useFetch } from '../components/useFetch';
import { useAuth } from "../contexts/AuthContext"
import { useData } from "../contexts/DataContext"
import { Col, Container, Row, Jumbotron } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";

const Actualprice = (props) => {
  const { currentUser} = useAuth();
   const { loading,  userData } = useData();
   const [cryptoData, setCryptoData] = useState([]);
   const [error, setError] = useState();
   const [cryptoList, setCryptoList] = useState(userData.cryptoList);
   const [fiatList, setFiatList] = useState();

   const [defaultCrypto, setDefaultCrypto] = useState(["BTC","LTC","ETH","ADA"]);
   const [defaultFiat,setDefaultFiat] = useState(["USD","EUR"])
  

    
      console.log(cryptoList)
    

   const getData = async (crypto) => {
        
    const response = await fetch("https://api.pro.coinbase.com/currencies/");
    let data = await response.json();
    data = data.filter(item => crypto.includes(item.id))

    return data 
}


    

    
  

  

  return <div>
    {(defaultCrypto) ? 
    <Jumbotron className="jumbotron-fluid mt-3" 
               style={{textAlign:"center", padding:"20px"}}>You did not specify crypto currencies! Go to <Link to="/dashboard" > Dashboard</Link>
               </Jumbotron>: ""}
   
    {typeof (cryptoList) !== "undefined" ? "loading" : cryptoList.map(item => { return <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} key={item.id} crypto={crypto} /> })}
    </div>;
}
export default Actualprice;
{/* <PriceHero
title={props.title}
subTitle={props.subTitle}
text={props.text}
crypto={crypto}
/> */}