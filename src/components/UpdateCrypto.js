import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert, Dropdown } from "react-bootstrap";
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
  const [currency, setCurrency] = useState("")
  const [crypto, setCrypto] = useState("")
  const history = useHistory()
  const style = {
    background: "none",
    color: "inherit", 
    border:"none", 
    padding: 0, 
    textAlign: "left"
  
  }
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
   
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert> }
        {msg && <Alert variant="success">{msg}</Alert> }
        
        
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Update Crypto list</Form.Label>
            <Dropdown style={style}>
              <Dropdown.Toggle style={style} id="dropdown-basic">
                Select crypto currency
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1">BTC </Dropdown.Item>
                <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ADA</Dropdown.Item>
                <Dropdown.Item href="#/action-3">DOGE</Dropdown.Item>
                <Dropdown.Item href="#/action-3">XRP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown >
         </Form.Group>
         <Form.Group id="email">
            <Form.Label>Update Crypto list</Form.Label>
            <Dropdown style={style}>
              <Dropdown.Toggle style={style} id="dropdown-basic">
                Select FIAT currency
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">EUR </Dropdown.Item>
                <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
                <Dropdown.Item href="#/action-3">CZK</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         </Form.Group>
         <Button disabled={loading} className="primary" type="submit">
            +ADD
          </Button>
        </Form>
      </Card.Body>
   
    
  </>
  );
}
