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
     const [loading, setLoading] = useState(true);
     const [userData, setUserData] = useState();
     const [msg, setMsg] = useState();
   
    
 
    function logout() {
      setUserData();
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
                  console.log("neco")
                  setLoading(false)
                } else {
                  // it's empty
                  console.log("nič")
                  setLoading(false)
                }
             })
            }

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