import React, {useState, useEffect} from "react";
import Dashboard from "../components/Dashboard"
import {useAuth} from "../contexts/AuthContext"
import Activation from "../components/Activation"
import { useHistory } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
export default function Dashboardpage(props) {
  const { currentUser } = useAuth();
/*   console.log(currentUser)

  */
  const [msg, setMsg] = useState("");
  const [verified, setVerified] = useState(currentUser.emailVerified)
  
  const history = useHistory();
   
 /*  var timerStart = setInterval(() => {
    console.log(currentUser.emailVerified)
    if(currentUser){
    if(!currentUser.emailVerified){
      console.log(currentUser)
      return currentUser.reload().then(() => {
        setVerified(currentUser.emailVerified)
        if(currentUser.emailVerified){
         
          setMsg('Email successfully verified.')
          timerStop(timerStart)
          setTimeout(function(){ 
            history.push("/dashboard")
            setMsg("") 
        }, 3000);
        timerStop(timerStart)
      }
    })}

     
    } 
  }, 2000);
  */


useEffect(() => {

  var timerStart = setInterval(() => {
    console.log(currentUser.emailVerified)
    console.log(currentUser.email)
    if(currentUser){
      if(!currentUser.emailVerified){
      
      return currentUser.reload().then(() => {
        setVerified(currentUser.emailVerified)
        if(currentUser.emailVerified){
         
          setMsg('Email successfully verified.')
          
          setTimeout(function(){ 
            
            setMsg("") 
        }, 3000);
        clearInterval(timerStart)
      }
    })}else {
      clearInterval(timerStart)
    }

     
    } else {clearInterval(timerStart)}
  }, 2000);
  }, [currentUser])
  return (
    <div>
     
      {msg ? <Jumbotron className="jumbotron-fluid mt-5">
      <Container>
        <Row className="justify-content-center">
         
            {msg}
          
        </Row>
        </Container>
        </Jumbotron> : ""}
      {verified ? <Dashboard /> : <Activation isVerified={currentUser.emailVerified} />}
    </div>
  );
}
