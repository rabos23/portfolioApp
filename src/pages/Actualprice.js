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
   const [fiatList, setFiatList] = useState(userData.fiatList);
   const [defaultCrypto, setDefaultCrypto] = useState(false);
   const [defaultFiat,setDefaultFiat] = useState(["USD","EUR"])
   
  
   const getData = async (crypto) => {
        
    const response = await fetch("https://api.pro.coinbase.com/currencies/");
    let data = await response.json();
    data = data.filter(item => crypto.includes(item.id))

    return data 
}


   if(loading){
  
console.log("loading")

}else {
  console.log("neni loading")}
 


   if (!loading) {

    let userData = cryptoData;
  
  let itemsToRender = userData.cryptoList.map(item => {
      return <PriceHero 
      title={props.title}
      subTitle={props.subTitle}
      text={props.text}
      key={item.id} 
      crypto={crypto}
      fiat={fiatList}
     />; 
    });
  } 
  /* useEffect(() => {
    setLoading(true)
    if (currentUser) {
        setLoading(true)
        if(typeof userData.cryptoList == 'undefined' || userData.cryptoList.length === 0){
            
          getData(["BTC","ETH","LTC","ADA"])
          .then(data => {
            setCryptoData(data)
            setDefaultCrypto(true)
          })
          .catch(() => setError('error fetch1'));
        }else {
            getData(data2.crypto)
          .then(data => {
            setCryptoData(data)
            setDefaultCrypto(false)
          })
          .catch(() => setError('error fetch1'));
        }
        setLoading(false)
      }else{
        setLoading(true)
        getData(["BTC","ETH","LTC","ADA"])
        .then(data => {
            
          setCryptoData(data)
          setDefaultCrypto(true)
        })
        .catch(() => setError('error fetch2'));
      }
      setLoading(false)
    }, [userData]); 
 */

  return <div>
    {(defaultCrypto) ? 
    <Jumbotron className="jumbotron-fluid mt-3" 
               style={{textAlign:"center", padding:"20px"}}
               >You did not specify crypto currencies! Go to <Link to="/dashboard" > Dashboard</Link>
               </Jumbotron>: ""}
    {loading ? "Loading" : userData.displayname}
    </div>;
}
export default Actualprice;
{/* <PriceHero
title={props.title}
subTitle={props.subTitle}
text={props.text}
crypto={crypto}
/> */}