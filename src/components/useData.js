import { useState, useEffect, useCallback } from 'react';
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"

export const useData =  (uid) => {
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

    const setData = async (what) => {
      firestore.collection("users").doc(currentUser.uid).set({
        crypto:  what
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
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
      },[uid]);
    
      useEffect(() => {
        if (currentUser.uid) {
            generateUserDocument(currentUser)
              .then(data => {
                
                setUserData(data)
              })
              .catch(() => setError('error fetch'));
          }
        }, [currentUser.uid, getUserDocument]);
      return { loading, userData };
    };
    