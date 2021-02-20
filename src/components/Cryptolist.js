import React, { Component, useState, useRef } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Content from "./Content";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Cryptolist() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  return <></>;
}
