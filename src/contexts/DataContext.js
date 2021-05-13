import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"

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
   
     function logout() {
      setUserData();
    }
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
       
   const setData =  async (data,type) => {
    const cityRef = firestore.collection('users').doc(currentUser.uid);

    // Set the 'capital' field of the city

    switch(type) {
      case "cryptoList":
         await cityRef.update({cryptoList: data});
        break;
      case "fiatList":
         await cityRef.update({fiatList: data});
        break;
        case "displayName":
         await cityRef.update({displayName: data});
        break;
      default:
        console.log("default")
    } }

          useEffect(() => {
           
          if(currentUser){
              setLoading(true)
            const unsubscribe = firestore.collection(`users`).doc(`${currentUser.uid}`)
              .onSnapshot(snapshot => {
                if (snapshot) {
                  // we have something
                  setUserData(snapshot.data())
                  
                  setLoading(false)
                } else {
                  // it's empty
                  
                  console.log("nič")
                  setLoading(false)
                }
             
              })}
          }, [firestore, currentUser])


        return (
          <UserContext.Provider
            value={{
              loading, userData, setData, logout
            }}
          >
            {!loading && children}
          </UserContext.Provider>
          );
};