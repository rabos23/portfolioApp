import React, {useState, useEffect} from "react";
import Dashboard from "../components/Dashboard"
import {useAuth} from "../contexts/AuthContext"
export default function Dashboardpage(props) {
  const { currentUser } = useAuth();
  console.log(currentUser)
  const [isActivation, setIsActivation] = useState(currentUser.emailVerified);
  console.log(currentUser.emailVerified)
  
  useEffect(() => {
           
    if(currentUser){
        if(currentUser.emailVerified == true)
        setIsActivation(true)
     
          } 
       
      

    }, [currentUser])
  return (
    <div>
      {isActivation ? <Dashboard /> : "U need to activate your account"}
    </div>
  );
}
