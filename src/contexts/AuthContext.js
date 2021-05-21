import React, { useContext, useEffect, useState } from "react";
import { auth, firestore } from "../firebase";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

 

  function signup(email, password) {
    return [
      auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user.sendEmailVerification();
      })
    ]
  }

  
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return auth.currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return auth.currentUser.updatePassword(password);
  }
  
  


  function onAuthStateChange() {
    return auth.onAuthStateChanged(async user => {
      if (user) {
        setCurrentUser(user)
        generateUserDocument(user)
  
        
        console.log("AuthContext:The user is logged in");
      } else {
        setCurrentUser(null)
        
        console.log("AuthContext:The user is not logged in");
      }
      setLoading(false)
    });
  }
  const generateUserDocument = async (user) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot =  await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL, uid } = user;
      const cryptoList = [];
      const fiatList= [];
     
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,uid,cryptoList, fiatList
          
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
   
  }
 /*  const getUserDocument = useCallback(async uid => {
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
    },[currentUser]); */

    useEffect(() => {
      const unsubscribe = onAuthStateChange();
      return () => {
        unsubscribe();
      };
    }, [currentUser]);  

  const value = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    updatePassword,
    updateEmail,
    generateUserDocument
  
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
