import { useState, useEffect, useCallback } from 'react';
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"

export const useData =  (uid) => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();

    const getUserDocument = useCallback(async uid => {
        if (!uid) return null;
        try {
          const userDocument = await firestore.doc(`users/${uid}`).get()
          return {
            uid,
            ...userDocument.data()
          };
          setLoading(false)
        } catch (error) {
          console.error("Error fetching user", error);
        }
      },[uid]);
    
      useEffect(() => {
        if (currentUser.uid) {
            getUserDocument(currentUser.uid)
              .then(data => {
                
                setUserData(data)
              })
              .catch(() => setError('error fetch'));
          }
        }, [currentUser.uid, getUserDocument]);
      return { loading, userData };
    };
    