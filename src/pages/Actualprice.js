import React, { Component } from "react";
import { useAuth } from "../contexts/AuthContext";
import PriceHero from "../components/PriceHero";
import { auth, firestore } from "../firebase";

function Actualprice(props) {
  const { currentUser, logout } = useAuth();


  if (!snapshot.exists) {
    const userRef = firestore.collection(“users”).add({
      current
    });  
  }

  return (
    <div>
      {currentUser.uid}
      <PriceHero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        crypto={"BTC"}
      />
      <PriceHero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        crypto={"ETH"}
      />
      <PriceHero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        crypto={"ADA"}
      />
      <PriceHero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        crypto={"DOT"}
      />
    </div>
  );
}

export default Actualprice;
