import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateCrypto(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    const promises = []
    setLoading(true)
    setError("")
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        setMsg("Profile updated")
        history.push("/dashboard")
      })
      .catch(error => {
        setError(""+error)
      })
      .finally(() => {
        setLoading(false)
      })
  }


  return (
    <>
   - Edit Crypto
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert> }
        {msg && <Alert variant="success">{msg}</Alert> }
        
        
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
            />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep the same"
            />
          </Form.Group>
          <Button disabled={loading} className="w-100" type="submit">
            Update
          </Button>
        </Form>
      </Card.Body>
   
    
  </>
  );
}
