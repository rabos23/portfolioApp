import React, { useState, useEffect, useCallback,useContext, createContext, useLayoutEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"
import {useFetch}
 from "../components/useFetch"

const UserContext = React.createContext();

export function useData() {
  return useContext(UserContext);
}

export function UserProvider ({children}){
  const {currentUser} = useAuth();
     const [loading, setLoading] = useState(false);
     const [userData, setUserData] = useState();
     const [msg, setMsg] = useState();
     const [defaultCrypto, setDefaultCrypto] = useState(false);
    /* import generovani doc */
   /* const [defaultFiat,setDefaultFiat] = useState(["USD","EUR"])
    const [cryptoData, setCryptoData] = useState([]);
    const [defaultCrypto, setDefaultCrypto] = useState(false);
    const [error, setError] = useState("");
    const { userData, currentUser } = useData();
    
        let data2 = userData;
       

  

    useEffect(() => {
        setLoading(true)
    
        if (currentUser) {
            setLoading(true)
            if(typeof data2.crypto == 'undefined' || data2.crypto.length === 0){
                
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
        }, [userData]); */
        const getCoinbaseData = async (crypto) => {
        
          const response = await fetch("https://api.pro.coinbase.com/currencies/");
          let data = await response.json();
          data = data.filter(item => crypto.includes(item.id))
  
          return data 
      }
       
   const setData =  (data,type) => {
       if(type == "cryptoList"){
     firestore.collection("users").doc(currentUser.uid).update(
       {
            cryptoList: data  
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        })}
        if(type == "fiatList"){
          firestore.collection("users").doc(currentUser.uid).update(
            {
                 fiatList: data  
             })
             .then(() => {
                 console.log("Document successfully written!");
             })
             .catch((error) => {
                 console.error("Error writing document: ", error);
             })}

      }

          useEffect(() => {
           
          if(currentUser){
              setLoading(true)
            const unsubscribe = firestore.collection(`users`).doc(`${currentUser.uid}`)
              .onSnapshot(snapshot => {
                if (snapshot) {
                  // we have something
                  setUserData(snapshot.data())
                  console.log("userdata")
                  setLoading(false)
                } else {
                  // it's empty
                  console.log("nič")
                  setLoading(false)
                }
             
              })}
          }, [firestore])


        return (
          <UserContext.Provider
            value={{
              loading, userData, setData
            }}
          >
            {!loading && children}
          </UserContext.Provider>
          );
};