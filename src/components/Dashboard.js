import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Hero from "../components/Hero";
import Cryptolist from "../components/Cryptolist";
import Updateprofile from "../components/UpdateProfile";
import Cryptoprofile from "../components/UpdateCrypto";


export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(false);
  const history = useHistory();
  const [showProf, setShowProf] = useState(false);
  const [showCrypt, setShowCrypt] = useState(false);

const style = {
  background: "none", color: "inherit", border:"none", padding: 0, textAlign: "left"

}

function handleShow(input){
switch (input) {
  case 1:
    return setShowProf(true)
    break;
    case 2:
      return setShowCrypt(true)
      break;
  default:
    setShowProf(false)
    setShowProf(false)
    break;
}
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
      <Hero title="Dashboard" text={currentUser.email} />
      <Card className="justify-content-center">
        <Card.Body className="justify-content-center">
          <h2 className="text-center ">Profile</h2>
        
        {showProf ? <Updateprofile show={show}/> : <Button style={style} onClick={() => handleShow(1)}>+ Edit Profile</Button> }
          </Card.Body>
        {/* <Card.Body>
          <h2 className="text-center mt-4">Crypto </h2>
         
          {showCrypt ? <Cryptoprofile /> : <Button style={style} onClick={() => handleShow(2)}>+ Edit Crypto</Button> }
        </Card.Body> */}
        
      </Card>
      <div className="text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}
