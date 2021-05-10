import React, {useRef, useState} from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Updateprofile(props) {
  const { currentUser, updateDisplayName } = useAuth();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const username = useState(props.username)
  const usernameRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
 
      await updateDisplayName(usernameRef.current.value);

    } catch {
  
    }
    setLoading(false);
  }
  console.log(currentUser.displayName)

  return (
    /* 
    CHANGE NOT WORKING PROPERLY : Emain same not working, while changing credentials automatically logout and login -> redirect to login page
    Data store provider -> if !exists then create default -> also default prices
    */
   <div>
    <Form onChange={handleSubmit} style={{ alignItems: "center", marginTop: "10px" }}>
      
      <Form.Group id="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          required
          placeholder={currentUser.displayName ? currentUser.displayName : "Put username u want" }
          ref={usernameRef}
        />
      </Form.Group>
 {/*      
     <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder={props.email}
          ref={emailRef}
        />
      </Form.Group>
    */}

      
    </Form>
    </div>
  );
}
