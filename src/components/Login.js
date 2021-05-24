import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser, generateUserDocument } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      setError("");
      
      await login(emailRef.current.value, passwordRef.current.value);
    
      history.push("/dashboard");
       
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <>
      {currentUser ? <Redirect to="/dashboard" />: ""}
      <Content size={props.size}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} style={{ alignItems: "center" }}>
          <Form.Group id="email">
            <Form.Label>Login</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>

          <Button
            disabled={loading}
            style={{ alignItems: "center" }}
            className="d-inline-block center w-100"
            variant="primary"
            type="submit"
          >
           {loading ? "Logging in...": "Log in"}
          </Button>
          <div className="text-center mt-2">
            Need an account? <Link to="/signup"> Sign up</Link>
          </div>
          <div className="text-center mt-2">
            Forgot password? <Link to="/ForgotPassword"> Reset password</Link>
          </div>
        </Form>
      </Content>
    </>
  );
}
