import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Hero from "../components/Hero";
import Cryptolist from "../components/Cryptolist";
import Updateprofile from "../components/UpdateProfile";
import Cryptoprofile from "../components/UpdateCrypto";
import UpdateCrypto from "../components/UpdateCrypto";


export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(false);
  const history = useHistory();
  const [showProf, setShowProf] = useState(false);
  const [showCrypt, setShowCrypt] = useState(false);
  const [toggled, setToggle] = useState(false)
  const [toggled1, setToggle1] = useState(false)
  
  const style = {
  background: "none",
  color: "inherit", 
  border:"none", 
  padding: 0, 
  textAlign: "left"

}


    async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }
  return (
    <div>
      <Hero title="Dashboard"  />
      <Card className="justify-content-center">
        <Card.Body className="justify-content-center">
          <h2 className="text-center ">Profile</h2>
        <p>
          Logged user: {currentUser.email} <br />
          Role: "Role"
        </p>
        
          </Card.Body>
          <Card.Body className="justify-content-center">
               
        <Button style={style} onClick={() => setToggle(toggled => !toggled)}>{toggled ? "-": "+"} Edit Profile</Button> 
        {toggled && <Updateprofile />} <br/>
        <Button style={style} onClick={() => setToggle1(toggled1 => !toggled1)}>{toggled1 ? "-": "+"} Edit Crypto</Button> 
        {toggled1 && <UpdateCrypto />}
          </Card.Body>
        
      </Card>
      
      <div className="text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}
