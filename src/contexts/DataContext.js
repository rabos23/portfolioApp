import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"

const UserContext = React.createContext();

export function useData() {
  return useContext(UserContext);
}

export function UserProvider ({children}){
  const {currentUser, generateUserDocument} = useAuth();
     const [loading, setLoading] = useState(true);
     const [userData, setUserData] = useState([]);
     const [msg, setMsg] = useState();
   
    /* V APP ODDELIT PROVIDER AUTH A PROVIDER DATACONTEXT PRAVDEPODOBNE SE TLUCOU LOADING A PAK SE NANCTOU DATA TAK JAK MAJI*/
 
    function logout() {
      setUserData();
    }

   const setData =  async (data,type) => {
    const cityRef = firestore.collection('users').doc(currentUser.uid);
    console.log("Data write:"+type)
    switch(type) {
      case "cryptoList":
         await cityRef.update({cryptoList: data});
         console.log("succesful")
        break;
      case "fiatList":
         await cityRef.update({fiatList: data});
         console.log("succesful")
         break;
        case "displayName":
         await cityRef.update({displayName: data}).then(
           console.log("data")
           
         )
         
        break;
      default:
        console.log("default")
    } }
/*     db.collection("cities").doc("SF")
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
    }); */
          useEffect(() => {
            console.log("Loading1:"+loading)
            
          if(currentUser){
            
            const unsubscribe = firestore.collection(`users`).doc(`${currentUser.uid}`)
              .onSnapshot(snapshot => {
                console.log("Loading2:"+loading)
                console.log("Current data: ", snapshot.data());
                setUserData(snapshot.data())
                
                
             })
             
            
            }
            setLoading(false)
          }, [currentUser, firestore])

          
        return (
          <UserContext.Provider
            value={
        [loading, setData, logout, userData]
            }
          >
            {children}
          </UserContext.Provider>
          );
};