import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UpdateCrypto from "../components/UpdateCrypto";
import UpdatePassword from "../components/UpdatePassword";
import Updateprofile from "../components/UpdateProfile";
import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"
import {useData} from "./useData"

export default function Dashboard() {
  /* HOTOVO CONTEXT -> TED IMPLEMENTACE 
  DO OSTATNICH KOMPONENT A NAHRAZENI useDATA hooku */
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const [toggled, setToggle] = useState(false);
  const [toggled1, setToggle1] = useState(false);
  const [toggled2, setToggle2] = useState(false);
  const  {userData, setData} = useData();
  const style = {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    textAlign: "left",
  };
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
          {toggled && <Updateprofile displayName={currentUser.displayName} email={currentUser.email} />} 
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
          {toggled2 && <UpdateCrypto crypto={userData.crypto} fiat={userData.fiat} />} 
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
