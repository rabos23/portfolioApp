import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  state = {
    title: "Some title",
    headerLinks: [
      { title: "Home", path: "/" },
      { title: "Actualprice", path: "/actualprice" },
      { title: "Contact", path: "/contact" },
    ],
    home: {
      title: "Bla",
      subTitle: "Ble",
      text: "Bruh",
    },
    actualprice: {
      title: "Price",
      subTitle: "Some kind of subtitle",
      text: "Some kind of text on Aboutscreen",
    },
    contact: {
      title: "Let's talk",
      subTitle: "Some kind of subtitle",
      text: "Some kind of text on Contactscreen",
      size: 2,
    },
    login: {
      title: "Log in",
      subTitle: "Let's see",
      text: "<3",
      size: 4,
    },
  };

  render() {
    return (
      <Router>
        <AuthProvider>
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
                  <Link className="nav-link" to="/signup">
                    Log in
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route
              path="/"
              exact
              render={() => (
                <Homepage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/actualprice"
              exact
              render={() => (
                <Actualprice
                  title={this.state.actualprice.title}
                  subTitle={this.state.actualprice.subTitle}
                  text={this.state.actualprice.text}
                />
              )}
            />
            <Route
              path="/contact"
              exact
              render={() => (
                <Contactpage
                  title={this.state.contact.title}
                  subTitle={this.state.contact.subTitle}
                  text={this.state.contact.text}
                  size={this.state.contact.size}
                />
              )}
            />
            <Switch>
              <Route path="/signup" component={Signup} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
            </Switch>
            <Footer></Footer>
          </Container>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
