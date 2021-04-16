import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Updateprofile() {
  return (
    /* 
    CHANGE NOT WORKING PROPERLY : Emain same not working, while changing credentials automatically logout and login -> redirect to login page
    Data store provider -> if !exists then create default -> also default prices
    */
    <Form style={{ alignItems: "center", marginTop: "10px" }}>
      
      <Form.Group id="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          required
          placeholder="Leave blank for remain same"
        />
      </Form.Group>
      <Form.Group id="fullname">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          type="text"
          required
          placeholder="Leave blank for remain same"
        />
      </Form.Group><Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder="Leave blank for remain same"
        />
      </Form.Group>
      <Form.Group id="picture_url">
        <Form.Label>Picture</Form.Label>
        <Form.Control
          type="text"
          required
          placeholder="Leave blank for remain same"
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
