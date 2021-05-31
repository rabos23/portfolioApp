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
<<<<<<< HEAD
  const { userData, setData } = useData();
=======
  const { userData, setData, getData } = useData();
>>>>>>> e26fefeeb0e4136e133e776ae8f19a9989ecf9a4

  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [showMsg, setShowMsg] = useState();
  const [fewCrypto, setFewCrypto] = useState();
  const [defaultCrypto, setDefaultCrypto] = useState();
<<<<<<< HEAD
  const [cryptoList, setCryptoList] = useState(["BTC", "LTC", "ETH", "ADA"]);
  const [cryptoData, setCryptoData] = useState([]);

  async function getData(crypto) {
    const response = await fetch("https://api.pro.coinbase.com/currencies/");
    const data = await response.json().then((data) => {
      let data2 = data.filter((item) => crypto.includes(item.id));
      setCryptoData(data2)
    })
  }
    




  console.log(cryptoData);
=======
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
 
>>>>>>> e26fefeeb0e4136e133e776ae8f19a9989ecf9a4
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

<<<<<<< HEAD
  useEffect(() => {
    if(currentUser && userData)
   { getData(cryptoList)}
    
    
   
  },[cryptoList])
  

 
  
=======


>>>>>>> e26fefeeb0e4136e133e776ae8f19a9989ecf9a4
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
              crypto={[item.id, item.name]}

              
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
