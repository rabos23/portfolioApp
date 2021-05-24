import React, { useState, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Content from "../components/Content";
import {  useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, logout } = useAuth();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
      

      setMsg("Succesfuly registred!")
     
    } catch {
      setError("Failed to create an account");
    }
    logout();
    setLoading(false);
  }

  return (
    <>
      <Content size={props.size}>
        {error && <Alert variant="danger">{error}</Alert>}
        {msg && <Alert variant="success">{msg}<Link to="/login">Log in</Link></Alert>}
        <Form onSubmit={handleSubmit} style={{ alignItems: "center" }}>
          <Form.Group id="email">
            <Form.Label>Login</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>

          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required />
          </Form.Group>

          <Button
            disabled={loading}
            style={{ alignItems: "center" }}
            className="d-inline-block center w-100"
            variant="primary"
            type="submit"
          >
            SIGN UP
          </Button>
          <div className="text-center mt-2">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </Form>
      </Content>
    </>
  );
}
