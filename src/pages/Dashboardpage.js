import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import { useAuth } from "../contexts/AuthContext";
import Activation from "../components/Activation";
import { useHistory, Redirect } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
export default function Dashboardpage(props) {
  const { currentUser } = useAuth();
  /*   console.log(currentUser)

  */

  const [verified, setVerified] = useState(currentUser.emailVerified);

  return (
    <div>
      {(verified) ? (
        <Redirect to="/dashboard" />
      ) : (
        <Redirect to="/activation" />
      )}
    </div>
  );
}
