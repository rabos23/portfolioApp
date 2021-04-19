import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UpdateCrypto from "../components/UpdateCrypto";
import UpdatePassword from "../components/UpdatePassword";
import Updateprofile from "../components/UpdateProfile";
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"


export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const [toggled, setToggle] = useState(false);
  const [toggled1, setToggle1] = useState(false);
  const [toggled2, setToggle2] = useState(false);
  const [userData, setUserData] = useState();
  const style = {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    textAlign: "left",
  };

/* 
Alert about informing user avbout processes
*/
 const generateUserDocument = async (user) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL, uid } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,uid
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
}
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get()
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

/*   const getProducts = useCallback(async () => {
    await fetch(url, {})
      .then((res) => res.json())
      .then((json) => setProducts(json));

    setLoading(false);

  }, [url]); */
 /*  const [restaurants, setRestaurants] = useState([])
useEffect(() => {
   let data = fetchData();
   setRestaurants(data)
   FETCH DATA TO ST
      }) */

useEffect(() => {
  const user = generateUserDocument(currentUser);
  setUserData(user)
  console.log(userData)
  
}, [currentUser]);
console.log(userData)

  

/*     export async function generateUserDocument(currentUser, additionalData) {
      if (!user) return;
      const userRef = firestore.doc(`users/${user.uid}`);
      const snapshot = await userRef.get();
      if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
          await userRef.set({ email });
        } catch (error) {
          console.error("Error creating user document", error);
        }
      }
      return getUserDocument(user.uid);
    }
    
    export async function getUserDocument(uid) {
      if (!uid) return null;
      try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
          uid,
          ...userDocument.data(),
        };
      } catch (error) {
        console.error("Error fetching user", error);
      }
    } */ 
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
    }
    const cardText = {
      marginLeft: "2.5rem"
    }
    const cardHeader = {
      width: '100%', backgroundColor:"white"
      
    }
  return (
    <div>
      <Card className="justify-content-center">
        <Card.Body className="justify-content-center">
        <Card.Header border="primary" style={cardHeader}>
          Profile
          </Card.Header>
          <Card.Text style={cardText}>
            Logged user: {currentUser.email} <br />
           
          
            FullName: "Full name" <br />
        
            Role: "Role" <br />
          </Card.Text>
        </Card.Body>
      
        
       <Card.Body className="justify-content-center">
        <Card.Header border="primary" style={cardHeader}>
          <Button
            style={style}
            onClick={() => setToggle((toggled) => !toggled)}
          >
            {toggled ? "-" : "+"} Edit Profile
            
          </Button>
          </Card.Header>
          <Card.Text style={cardText}>
          {toggled && <Updateprofile />} 
          </Card.Text>
         </Card.Body>
         <Card.Body className="justify-content-center">
        <Card.Header className="cardHeaderRem" border="primary" style={cardHeader}>
          <Button
            style={style}
            onClick={() => setToggle1((toggled1) => !toggled1)}
          >
            {toggled1 ? "-" : "+"} Edit Password
            
          </Button>
          </Card.Header>
          <Card.Text style={cardText}>
          {toggled1 && <UpdatePassword />} 
          </Card.Text >
         </Card.Body>
         <Card.Body className="justify-content-center">
        <Card.Header className="cardHeaderRem" border="primary " style={cardHeader}>
          <Button
            style={style}
            onClick={() => setToggle2((toggled2) => !toggled2)}
          >
            {toggled2 ? "-" : "+"} Edit Cryptolist
            
          </Button>
          </Card.Header>
          <Card.Text style={cardText} className="cardText" >
          {toggled2 && <UpdateCrypto/>} 
          </Card.Text>
         
         </Card.Body>
          
          </Card> 
          
         
      <div className="text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
  }
