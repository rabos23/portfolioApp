import React, { Component, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Content from "../components/Content";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Loginpage = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
    
    return (
      <div>
        <Hero
          title={props.title}
          subTitle={props.subTitle}
          text={props.text}
        />
        <Content size={props.size}>
          <Form style={{ alignItems: "center" }} >
            <Form.Group>
              <Form.Label htmlFor="full-name">Login</Form.Label>
              <Form.Control
              autoFocus
                id="login"
                name="login"
                type="text"
                 onChange= {(e) => {setLogin(e.target.value);}}              
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Password</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                onChange= {(e) => {setPassword(e.target.value);}} 
              
              />
            </Form.Group>

            <Button
              className="d-inline-block center"
              variant="primary"
              type="submit"
            >
              Log in
            </Button>

            <Button
              style={{ alignItems: "" }}
              className="d-inline-block center ml-4"
              variant="secondary"
              type="submit"
              
            >
              Sign up
            </Button>
            
          </Form>
        </Content>
      </div>
    );
  }


export default Loginpage;
