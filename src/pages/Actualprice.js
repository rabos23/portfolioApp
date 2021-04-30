import { includes } from "lodash-es";
import React, {useState, useEffect, useContext} from "react";

import { useData } from "../components/useData"
import { useFetch } from '../components/useFetch';
import { DataContext } from '../contexts/DataContext';

function Actualprice(props) {
  const data = useContext(DataContext);
  
/* 
  const { userData } = useData();
let [selected, setSelected] = useState([])
let [crypto, setCrypto] = useState([])
const url = "https://api.pro.coinbase.com/currencies/";
const { loading, products } = useFetch(url);


useEffect(() => {
  if (loading === true) {
    console.log("loading");
  } else {
    setSelected(userData.crypto)
    setCrypto(products)
    let res = crypto.filter(item => !selected.includes(item));
    console.log(res)
  }
 
}, [userData.crypto, products]); 

console.log(selected)
console.log(crypto)



 */
  /* let itemsToRender;
  if (userData.crypto) {
    itemsToRender = userData.crypto.map(item => {
      return <PriceHero 
      title={props.title}
      subTitle={props.subTitle}
      text={props.text}
      key={item} 
      crypto={item}
      fiat={userData.fiat}/>;
    });
  } */

  return <div>{/* {itemsToRender} */}</div>;
}
export default Actualprice;
{/* <PriceHero
title={props.title}
subTitle={props.subTitle}
text={props.text}
crypto={crypto}
/> */}