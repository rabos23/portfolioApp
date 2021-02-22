import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Hero from "../components/Hero";
import Cryptolist from "../components/Cryptolist";
import Updateprofile from "../components/UpdateProfile";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(false);
  const history = useHistory();
  const [UpdateProfile, setUpdateProfile] = useState(0);

  function handleUpdate(e) {
    e.preventDefault();
    setError("");
    setUpdateProfile(true);
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
          
            {UpdateProfile ? (
              <Updateprofile />
            ) : (
              <Button
                variant="link"
                onClick={handleUpdate}
                disabled={button}
                style={{ alignItems: "center" }}
                className="center w-100"
                variant="primary"
                type="submit"
              >
                Edit profile
              </Button>
            )}
          
        
          </Card.Body>
        <Card.Body>
          <h2 className="text-center mt-4">Crypto </h2>
          
        </Card.Body>
        
      </Card>
      <div className="text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}
