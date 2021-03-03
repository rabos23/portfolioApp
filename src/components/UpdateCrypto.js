import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert, Dropdown } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import DropdownList from 'react-widgets/lib/DropdownList'
import { useFetch } from './useFetch'

export default function UpdateCrypto(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [load, setLoad] = useState(false)
  const [msg, setMsg] = useState("")
  const [currency, setCurrency] = useState("")
  const [crypto, setCrypto] = useState("")
  const history = useHistory();
  
  const url = "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
  const { loading, products } = useFetch(url) 
  /* 
  if (loading == true){
    console.log("loading")
  }else{
   const data = Object.keys(products)
    console.log(data)
     data.datasets[0].data = Object.keys(products["prices"]).map(el => products["prices"][el]["1"]) 
    console.log(data.datasets[0].data)  
  } */ 
  const style = {
    background: "none",
    color: "inherit", 
    border:"none", 
    padding: 0, 
    textAlign: "left"
  
  }
  function handleSubmit(e) {
    e.preventDefault()

    const promises = []
    setLoad(true)
    setError("")
    

    Promise.all(promises)
      .then(() => {
        setMsg("Profile updated")
        history.push("/dashboard")
      })
      .catch(error => {
        setError(""+error)
      })
      .finally(() => {
        setLoad(false)
      })
  }


  return (
    <>
   
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert> }
        {msg && <Alert variant="success">{msg}</Alert> }
        
        
        <DropdownList busy 
      data = {
        "BTC","ETH","ADA","BNB","DOT","USDT","XRP","LTC","LINK","XLM","UNI","DOGE","EOS"
      }
     
     
    />
        
      </Card.Body>
   
    
  </>
  );
}
