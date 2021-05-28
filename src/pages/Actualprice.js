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
  const { userData, setData, getData } = useData();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [showMsg, setShowMsg] = useState();
  const [fewCrypto, setFewCrypto] = useState();
  const [defaultCrypto, setDefaultCrypto] = useState();
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
 
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

   
  if(currentUser && userData){
    
    getData(cryptoList).then((data) => console.log(data))
    
  }
  useEffect(() => {
    if (currentUser && userData) {
      if (userData.cryptoList.length === 0) {
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
    if(cryptoList){
      let crypto =  getData(cryptoList).then((data) => {setCryptoData(data)})
      console.log("data")
      console.log(cryptoData)

      console.log("data")
    }
    
    setLoading(false);
  }, [userData]);



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
        : cryptoList.map((item) => (
            <PriceHero
              title={props.title}
              subTitle={props.subTitle}
              text={props.text}
              key={item}
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
