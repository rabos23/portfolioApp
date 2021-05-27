import React, {useState} from "react";
import { Container, Row, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

import { useAuth } from "../contexts/AuthContext"
function Activation(props) {
    const { reSendEmailVerification} = useAuth();
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState()
    


    async function reSendEmail(e) {
        e.preventDefault();
        setLoading(true);
        try {
          setMsg("");
          await reSendEmailVerification();
        setMsg("Verification email was sended")
          
          
        } catch {
          setMsg("Too many requests. Try again later or check out the previous request!");
        }
        setLoading(false);
      }
   
    

  return (
    <Jumbotron className="jumbotron-fluid mt-5">
      <Container>
        <Row className="justify-content-center">
         
            Your account is not activated. Please check your email!
          
        </Row>
        <Row className="justify-content-center">     
            <Button variant="link" className="text-link" onClick={reSendEmail}>
            Click for resend email 
            </Button>
        </Row>
        <Row className="justify-content-center">
        {loading ? "...": ""}
        </Row>
        <Row className="justify-content-center">
            {msg ? msg : ""}
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Activation;
