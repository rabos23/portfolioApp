import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import { useAuth } from "./contexts/AuthContext";
import Actualprice from "./pages/Actualprice";
import Dashboardpage from "./pages/Dashboardpage";
import Contactpage from "./pages/Contactpage";
import Homepage from "./pages/Homepage";
import { UserProvider } from "./contexts/DataContext";



export default function App(){

  const { currentUser } = useAuth();

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
   
    return (
      <div>
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
                  {currentUser ? <Link className="nav-link" to="/dashboard">
                   Dashboard
                   </Link> :  <Link className="nav-link" to="/login">
                   Login
                   </Link>}
                 
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
              <PrivateRoute exact path="/dashboard" component={Dashboardpage} />
             
               <Route path="/login" component={Login} />
              <Route path="/forgotPassword" component={ForgotPassword} />
            </Switch>
           
            <Footer isLogged={currentUser}></Footer> 
            
          </Container>
    
      </Router>
      </div>
    );
  
}


