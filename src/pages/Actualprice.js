import { includes } from "lodash-es";
import React, { useState, useEffect, useContext } from "react";

import PriceHero from "../components/PriceHero";
import { useFetch } from "../components/useFetch";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import { Col, Container, Row, Jumbotron, Button } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";

const Actualprice = (props) => {
  const { currentUser } = useAuth();
  const { userData, setData } = useData();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [showMsg, setShowMsg] = useState();
  const [fewCrypto, setFewCrypto] = useState();
  const [defaultCrypto, setDefaultCrypto] = useState();
  const [cryptoList, setCryptoList] = useState(["BTC", "LTC", "ETH", "ADA"]);
  const [cryptoData, setCryptoData] = useState([]);
  

  
  async function getData(crypto) {
    
  
     const response = await fetch("http://api.coingecko.com/api/v3/coins/");
    const data = await response.json();
  
    const data2 = data.filter((obj) => crypto.includes(obj.symbol))
    
    setCryptoData(data2)
    
    /* .then((data) => {
      
      let data2 = data.filter((item) => {
       sorted.includes(item.symbol)
      });
      console.log(data2)
      setCryptoData(data2)
    })  */
    
  }
/*     
  const fetch = useFetch("http://api.coingecko.com/api/v3/coins/");
  console.log(fetch.products) */
  
  async function click(e) {
    e.preventDefault();

    try {
      setError("");
      await setData(false, "showMsg");
      setShowMsg(false);
      console.log("click");
    } catch {
      setError("Failed");
    }
  }
 /* 
 GET DATA -> FILTER DATA -> PUSH TO PROPS - > RENDER
 |
 Bude lepsi, kdyz se rto nacte komplet v data context a v actual rpúice jen vyfiltruje
 
 */


  useEffect(() => {
    if (currentUser && userData) {
      if (userData.cryptoList.length === 0 || typeof userData.cryptoList == "undefined") {
        setCryptoList(["BTC", "LTC", "ETH", "ADA"]);
        setDefaultCrypto(true);
      } else {
        setCryptoList(userData.cryptoList);
        setShowMsg(userData.showMsg);
        setDefaultCrypto(false);
        if (userData.cryptoList.length < 3) setFewCrypto(true);
        
      }
      
      
    }else {
      setCryptoList(["BTC", "LTC", "ETH", "ADA"]);
    }
        
    setLoading(false);
  }, [userData]);

    useEffect(() => {
    if(currentUser && userData)
   { 
     getData(cryptoList)
  }
    
    
   
  },[cryptoList])

  return (
    <div>
      {defaultCrypto ? (
        <Jumbotron
          className="jumbotron-fluid mt-3"
          style={{ textAlign: "center", padding: "20px" }}
        >
          You did not specify crypto currencies! Go to
          <Link to="/dashboard"> Dashboard</Link>
        </Jumbotron>
      ) : (
        ""
      )}
      {fewCrypto && showMsg ? (
        <Jumbotron
          className="jumbotron-fluid mt-3"
          style={{ textAlign: "center", padding: "20px" }}
        >
          There is few crypto listed! Go to
          <Link to="/dashboard"> Dashboard</Link> or click{" "}
          <a href="#" onClick={click}>
            Click me
          </a>{" "}
          to dissapear this message
        </Jumbotron>
      ) : (
        ""
      )}

      {/* {loading ? "loading" : cryptoList.map(item => { return <PriceHero title={props.title} subTitle={props.subTitle} text={props.text} key={item.id} crypto={crypto} /> })} */}
      {loading
        ? "loading"
        : cryptoData.map((item) => (
            <PriceHero
              title={props.title}
              subTitle={props.subTitle}
              text={props.text}
              key={item.id}
              crypto={item}
              
              
            />
          ))}
          
      <br />
    </div>
  );
};
export default Actualprice;
{
  /* <PriceHero
title={props.title}
subTitle={props.subTitle}
text={props.text}
crypto={crypto}
/> */
}
