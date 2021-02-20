import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mt-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: {currentUser.email}</strong>
          <br />
          <strong>Cryptocurrencies list</strong>
          <br />
          <strong>{currentUser.email}</strong>
          <strong>{currentUser.email}</strong>
          <strong>{currentUser.email}</strong>
          <strong>{currentUser.email}</strong>

          <Link to="/update-profile" className="btn btn-primary w-100">
            update profile
          </Link>
        </Card.Body>
      </Card>

      <div className="text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
}
