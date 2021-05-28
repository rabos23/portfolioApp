import React, {useState, useEffect} from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase";
function Activation() {
    const { reSendEmailVerification, currentUser} = useAuth();
    const [verified, setVerified] = useState(currentUser.emailVerified);
    
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState()
    
  const history = useHistory();


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
/*       const interval = setInterval(() => {
        auth.currentUser.reload()
        .then(ok => {if(currentUser.emailVerified){
          setMsg("Email verified")
          clearInterval(interval)
        }})
        
      }, 1000);
 */
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(currentUser.emailVerified)
      if(currentUser){
        auth.currentUser.reload().then((ok) => {
          if(currentUser.emailVerified){
            setVerified(currentUser.emailVerified)
            clearInterval(interval)
            setMsg("Verified!")
            const timer = setTimeout(() => {
              history.push("/dashboard")
              clearTimeout(timer)
            }, 2000);
          }
        })
        }
      }
    , 1000);
    return () => clearInterval(interval);
  }, []);


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
        {loading ? <Spinner animation="border" style={{marginTop:"2%"}}/>: ""}
       
            {msg ? msg : ""}
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Activation;
