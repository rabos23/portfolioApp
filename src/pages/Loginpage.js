import React, { Component, useState } from "react";
import Hero from "../components/Hero";
import Signup from "../components/Signup"
import Login from "../components/Login"
import Dashboard from "../pages/Dashboardpage"
import Content from "../components/Content"
import { Container } from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

const Loginpage = (props) => {
     return (
       
      <div>
       
        
        <Router>
        <Hero
          title={props.title}
          subTitle={props.subTitle}
          text={props.text}
        />
        <AuthProvider>
          <Switch>
          <Route exact path="/dashboard" component={() => <Dashboard title="Bla"
      subTitle= "Ble"
      text= "Bruh"/>} />
            <Route path="/signup" component={() => <Signup size={props.size}/>} />
            <Route exact path="/login" component={() => <Login size={props.size}/>} />
          </Switch>
        </AuthProvider>


          
        
        
        </Router>
        
        
              </div>
    );
  }


export default Loginpage;
