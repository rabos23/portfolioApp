import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Hero from "../components/Hero";
import Cryptolist from "../components/Cryptolist";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

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
      <Card className="">
        <Card.Body>
          <h2 className="text-center ">Profile</h2>
        </Card.Body>
        <Card.Body>
          <h2 className="text-center mt-4">Crypto </h2>

          <Link to="/update-profile" className="btn btn-primary">
            <Cryptolist />
            UPDATE
          </Link>
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
