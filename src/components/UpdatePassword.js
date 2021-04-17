import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function UpdatePassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const oldPasswordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  /* async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value); 
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  } */
  return (
    /* 
    CHANGE NOT WORKING PROPERLY : Emain same not working, while changing credentials automatically logout and login -> redirect to login page
    */
    <Form style={{ alignItems: "center", marginTop: "10px" }}>

      <Form.Group id="old_password">
        <Form.Label>Old Password</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="Leave blank for remain same"
          ref={oldPasswordRef}
        />
      </Form.Group>

      <Form.Group id="new_password">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="Leave blank for remain same"
          ref={passwordRef}
        />
      </Form.Group>
      <Form.Group id="new_password">
        <Form.Label>Repeat new password</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="Leave blank for remain same"
          ref={passwordConfirmRef}
        />
      </Form.Group>

      <Button
        style={{ alignItems: "center" }}
        className="d-inline-block center"
        variant="outline-secondary"
        type="submit"
      >
        Update profile
      </Button>
    </Form>
  );
}
