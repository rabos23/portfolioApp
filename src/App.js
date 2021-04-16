import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Actualprice from "./pages/Actualprice";
import Contactpage from "./pages/Contactpage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";


export default function App(){
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
    }
    const home = {
      title: "Bla",
      subTitle: "Ble",
      text: "Bruh",
    };
    const actualprice = {
      title: "Price",
      subTitle: "Some kind of subtitle",
      text: "Some kind of text on Aboutscreen",
    };
    const contact = {
      title: "Let's talk",
      subTitle: "Some kind of subtitle",
      text: "Some kind of text on Contactscreen",
      size: 2,
    };
    const login = {
      title: "Login",
      subTitle: "Let's see",
      text: "<3",
      size: 4,
    };
    const { currentUser, logout } = useAuth();
    return (
      <Router>
        
          <Container className="p-5" fluid={false}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>World of Automatization</Navbar.Brand>
              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/actualprice">
                    Prices
                  </Link>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>

                  <Link className="nav-link" to="/login">
                    {currentUser ? "Dashboard":"Login"}
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route
              path="/"
              exact
              render={() => (
                <Homepage
                  title={home.title}
                  subTitle={home.subTitle}
                  text={home.text}
                />
              )}
            />
            <Route
              path="/actualprice"
              exact
              render={() => (
                <Actualprice
                  title={actualprice.title}
                  subTitle={actualprice.subTitle}
                  text={actualprice.text}
                />
              )}
            />
            <Route
              path="/contact"
              exact
              render={() => (
                <Contactpage
                  title={contact.title}
                  subTitle={contact.subTitle}
                  text={contact.text}
                  size={contact.size}
                />
              )}
            />
            <Switch>
              <Route path="/signup" component={Signup} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/update-profile"
                component={UpdateProfile}
              />
              <Route path="/login" component={Login} />
              <Route path="/forgotPassword" component={ForgotPassword} />
            </Switch>
            <Footer></Footer>
          </Container>
       
      </Router>
    );
  
}


