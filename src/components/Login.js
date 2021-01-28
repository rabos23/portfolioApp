import React, { Component,useState, useRef } from 'react'
import { Form, Button, Card, Container, Alert } from "react-bootstrap"
import Content from "../components/Content";
import {useAuth }from "../contexts/AuthContext";
import {Link, useHistory } from "react-router-dom"

export default function Login(props){
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error,setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
      e.preventDefault()

     
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to login")
    }
    setLoading(false)
  }
    
    return (<>
    <Content size={props.size}>
    {error && <Alert variant="danger" >{error}</Alert>}
          <Form onSubmit={handleSubmit} style={{ alignItems: "center" }} >
            <Form.Group id="email">
              <Form.Label >Login</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                           
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label >Password</Form.Label>
              <Form.Control
              type="password"
              ref={passwordRef}
              required
              
              />
            </Form.Group>
            
            <Button
            disabled={loading}
            style={{alignItems:"center"}}
              className="d-inline-block center w-100"
              variant="primary"
              type="submit"
            >
              LOG IN
            </Button>
          <div className="text-center mt-2">
            Need an account? <Link to="/signup"> Sign up</Link> 
          </div>
            
            
          </Form>
          </Content>
    </>)

}
