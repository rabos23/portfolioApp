import React, { useState, useEffect, useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import { firestore } from "../firebase";

const UserContext = React.createContext();

export function useData() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState();
  const [userData, setUserData] = useState([]);

  function logout() {
    setUserData();
  }

  /*  https://api.coingecko.com/api/v3/coins/bitcoin/ 
  https://github.com/miscavage/CoinGecko-API
  
  */
  

  const setData = async (data, type) => {
    const cityRef = firestore.collection("users").doc(currentUser.uid);
    console.log("Data write:" + type);
    // Set the 'capital' field of the city

    switch (type) {
      case "cryptoList":
        await cityRef.update({ cryptoList: data });
        console.log("Data:" + data + " was succesful");
        break;
      case "fiatList":
        await cityRef.update({ fiatList: data });
        console.log("Data:" + data + " was succesful");
        break;
      case "displayName":
        await cityRef.update({ displayName: data });
        console.log("Data:" + data + " was succesful");
        break;
      case "showMsg":
        await cityRef.update({ showMsg: data });
        console.log("Data:" + data + " was succesful");
        break;
        case "todo":
           const url = firestore.collection("users").doc(currentUser.uid).collection("tasks");
          const { details, duedate, slider, status, subject } = data;
       
            await url.add({
              details, duedate, slider, status, subject
            })
          console.log("Data:" + data + " was succesful");
          break;
      default:
        console.log("default");
    }
  };
   /* await cityRef.add({ 
            "tasks":{
              task: {
                id, details, duiedate, slider, status, subject
              }
            } }); */
  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      firestore
        .collection(`users`)
        .doc(`${currentUser.uid}`)
        .onSnapshot((snapshot) => {
          if (snapshot) {
            // we have something
            setUserData(snapshot.data());

            setLoading(false);
            console.log(userData)
          }
        });
    } else {
      setLoading(false);
    }
  }, [firestore, currentUser]);

  return (
    <UserContext.Provider
      value={{
        loading,
        userData,
        setData,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
