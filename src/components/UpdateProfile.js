import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Updateprofile() {
  const emailRef = useRef();
  const oPassRef = useRef();
  const nPassRef = useRef();
  const nrPassRef = useRef();

  const passwordRef = useRef();
  return (
    <Form style={{ alignItems: "center" }}>
      <Form.Group id="email">
        <Form.Label>New email</Form.Label>
        <Form.Control
          type="email"
          required
          ref={emailRef}
          placeholder="Leave blank for remain same"
        />
      </Form.Group>
      <Form.Group id="old_password">
        <Form.Label>Old Password</Form.Label>
        <Form.Control
          type="password"
          required
          ref={oPassRef}
          placeholder="Leave blank for remain same"
        />
      </Form.Group>

      <Form.Group id="password">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          required
          ref={nPassRef}
          placeholder="Leave blank for remain same"
        />
      </Form.Group>
      <Form.Group id="password">
        <Form.Label>Repeat new password</Form.Label>
        <Form.Control
          type="password"
          required
          ref={nrPassRef}
          placeholder="Leave blank for remain same"
        />
      
<br />
      <Button
        style={{ alignItems: "center" }}
        className="d-inline-block center w-100"
        variant="primary"
        type="submit"
      >
        Update profile
      </Button>
      <div style={{textAlign: "center"}}>
      <Link
     
        to="/login"
      >
        Hide
      </Link>
      </div>
      
      
      </Form.Group>
    </Form>
  );
}
