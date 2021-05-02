import React, { useState, useEffect, useCallback, createContext, useLayoutEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"
import {useFetch}
 from "../components/useFetch"
 import {useData}
 from "../components/useData"
export const UserContext = createContext();

export const UserProvider =  ({children}) => {
    const [loading, setLoading] = useState(true);
    const [defaultFiat,setDefaultFiat] = useState(["USD","EUR"])
    const [cryptoData, setCryptoData] = useState([]);
    const [defaultCrypto, setDefaultCrypto] = useState(false);
    const [error, setError] = useState("");
    const { userData, currentUser } = useData();
    
        let data2 = userData;
       

    const getData = async (crypto) => {
        
        const response = await fetch("https://api.pro.coinbase.com/currencies/");
        let data = await response.json();
        data = data.filter(item => crypto.includes(item.id))

        return data 
    }

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
        }, [userData]);
        return (
          <UserContext.Provider
            value={{
              loading, defaultCrypto, cryptoData, currentUser, defaultFiat
            }}
          >
            {!loading && children}
          </UserContext.Provider>
          );
};