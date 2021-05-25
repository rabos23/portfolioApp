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
     const [loading, setLoading] = useState();
     const [userData, setUserData] = useState([]);

    
 
    function logout() {
      setUserData();
    }

   const setData =  async (data,type) => {
    const cityRef = firestore.collection('users').doc(currentUser.uid);
console.log("Data write:"+type)
    // Set the 'capital' field of the city

    switch(type) {
      case "cryptoList":
         await cityRef.update({cryptoList: data});
         console.log("Data:"+data+" was succesful")
        break;
      case "fiatList":
         await cityRef.update({fiatList: data});
         console.log("Data:"+data+" was succesful")
        break;
        case "displayName":
         await cityRef.update({displayName: data});
         console.log("Data:"+data+" was succesful")
        break;
        case "showMsg":
         await cityRef.update({showMsg: data});
         console.log("Data:"+data+" was succesful")
        break;
      default:
        console.log("default")
    } }

          useEffect(() => {
           
          if(currentUser){
              setLoading(true)
            firestore.collection(`users`).doc(`${currentUser.uid}`)
              .onSnapshot(snapshot => {
                if (snapshot) {
                  // we have something
                  setUserData(snapshot.data())
                  
                  setLoading(false)
                }
             })
            }else {
              setLoading(false)
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