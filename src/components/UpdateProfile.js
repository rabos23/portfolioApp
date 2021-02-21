import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "../components/Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Updateprofile() {
  return (
    <Form style={{ alignItems: "center" }}>
      <Form.Group id="email">
        <Form.Label>New email</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder="Leave blank for remain same"
        />
      </Form.Group>
      <Form.Group id="email">
        <Form.Label>Old Password</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder="Leave blank for remain same"
        />
      </Form.Group>

      <Form.Group id="password">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="Leave blank for remain same"
        />
      </Form.Group>
      <Form.Group id="password">
        <Form.Label>Repeat new password</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="Leave blank for remain same"
        />
      </Form.Group>

      <Button
        style={{ alignItems: "center" }}
        className="d-inline-block center"
        variant="primary"
        type="submit"
      >
        Update profile
      </Button>

      <Link
        className="ml-2 d-inline-block center"
        style={{ alignItems: "center" }}
        to="/login"
      >
        Hide
      </Link>
    </Form>
  );
}
