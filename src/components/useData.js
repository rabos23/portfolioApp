import React, { useState, useEffect, useCallback, createContext } from 'react';
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"


export const useData =  () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    
    const generateUserDocument = async (user) => {
      if (!user) return;
      const userRef = firestore.doc(`users/${user.uid}`);
      const snapshot = await userRef.get();
      if (!snapshot.exists) {
        const { email, displayName, photoURL, uid } = user;
        const crypto = [""];
        const fiat= [""]
        try {
          await userRef.set({
            displayName,
            email,
            photoURL,uid,crypto, fiat

          });
        } catch (error) {
          console.error("Error creating user document", error);
        }
      }
      return getUserDocument(user.uid);
    }


    const getUserDocument = useCallback(async uid => {
        if (!uid) return null;
        try {
          const userDocument = await firestore.doc(`users/${uid}`).get();
          setLoading(false);
          return {
            uid,
            ...userDocument.data()
          };
          
        } catch (error) {
          console.error("Error fetching user", error);
        }
      },[currentUser]);
    
      useEffect(() => {
        if (currentUser) {
            generateUserDocument(currentUser)
              .then(data => {
                
                setUserData(data)
              })
              .catch(() => setError('error fetch'));
          }
        }, [currentUser, getUserDocument]);
      return { loading, userData, currentUser };
      }