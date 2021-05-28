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
  const { userData, setData, cryptoData, getData } = useData();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [showMsg, setShowMsg] = useState();
  const [fewCrypto, setFewCrypto] = useState();
  const [defaultCrypto, setDefaultCrypto] = useState();
  const [cryptoList, setCryptoList] = useState(["BTC", "LTC", "ETH", "ADA"]);
  const [data, setCryptoData] = useState([]);

   function filterData(data, crypto) {
    let data2 = data.filter((item) => crypto.includes(item.id)); 
    return data2;
  };

  console.log(cryptoData);
  async function click(e) {
    e.preventDefault();

    try {
      setError("");
      await setData(false, "showMsg");
      setShowMsg(false);
      console.log("click");
    } catch {
      setError("Failed to login");
    }
  }
 /* 
 GET DATA -> FILTER DATA -> PUSH TO PROPS - > RENDER
 |
 Bude lepsi, kdyz se rto nacte komplet v data context a v actual rpúice jen vyfiltruje
 
 */
   
  
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
    }
 
    setLoading(false);
  }, [userData]);

  useEffect(() => {
    getData()
    console.log(cryptoData)
   
  },[])
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
