import React from "react";
import { Button, Form } from "react-bootstrap";
import {useData} from "./useData"
export default function Updateprofile(props) {
  const  {userData, setUserData} = useData();
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
          placeholder={props.displayName ? props.displayName : "Put username u want" }
        />
      </Form.Group>
      
     <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder={props.email}
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
