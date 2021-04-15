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
import UpdatePassword from "../components/UpdatePassword";
export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(false);
  const history = useHistory();
  const [showProf, setShowProf] = useState(false);
  const [showCrypt, setShowCrypt] = useState(false);
  const [toggled, setToggle] = useState(false);
  const [toggled1, setToggle1] = useState(false);
  const [toggled3, setToggle3] = useState(false);
  const style = {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    textAlign: "left",
  };
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
  return (
    <div>
      <Card className="justify-content-center">
        
        <Card.Body className="justify-content-center">
          <h2 className="text-center ">Profile</h2>
          <p>
            Logged user: {currentUser.email} <br />
           
          
            FullName: "Full name" <br />
        
            Role: "Role" <br />
          </p>
        </Card.Body>
        <Card.Body className="justify-content-center">
          <Button
            style={style}
            onClick={() => setToggle((toggled) => !toggled)}
          >
            {toggled ? "-" : "+"} Edit Profile
          </Button>
          {toggled && <Updateprofile />} <br />
          <Button
            style={style}
            onClick={() => setToggle3((toggled3) => !toggled3)}
          >
            {toggled3 ? "-" : "+"} Edit Password
          </Button>
          {toggled3 && <UpdatePassword />} <br />
          <Button
            style={style}
            onClick={() => setToggle1((toggled1) => !toggled1)}
          >
            {toggled1 ? "-" : "+"} Edit Crypto
          </Button>
          {toggled1 && <UpdateCrypto style={{ marginTop: "150px" }} />}
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
