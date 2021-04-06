import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMsg("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMsg("Password has been succesfully reseted");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <>
      <Content size={props.size}>
        <Form
          onSubmit={handleSubmit}
          style={{ alignItems: "center" }}
          className="mt-4"
        >
          {error && <Alert variant="danger">{error}</Alert>}
          {msg && <Alert variant="success">{msg}</Alert>}
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>

          <Button
            disabled={loading}
            style={{ alignItems: "center" }}
            className="d-inline-block center w-100 "
            variant="primary"
            type="submit"
          >
            Reset Password
          </Button>
          {msg && (
            <div className="text-center mt-2">
              <Link to="/login"> Log in</Link>
            </div>
          )}
        </Form>
      </Content>
    </>
  );
}
