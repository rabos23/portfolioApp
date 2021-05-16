import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";
import Updateprofile from "../components/UpdateProfile";
import Logout from "../components/Logout";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import "../index.css";


export default function Dashboard() {
  /* HOTOVO CONTEXT -> TED IMPLEMENTACE 
  DO OSTATNICH KOMPONENT A NAHRAZENI useDATA hooku */
  const { currentUser, logout } = useAuth();
  const { userData, loading } = useData();
  const [error, setError] = useState("");
  const history = useHistory();
  const [toggled, setToggle] = useState(false);
  const [toggled1, setToggle1] = useState(false);
 

  const style = {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    textAlign: "left",
  };

  const cardText = {
    marginLeft: "2.5rem",
    
  };
  const cardHeader = {
    width: "100%",
    backgroundColor: "white",
  };


  return (
    <div>
      
      <Card className="justify-content-center">
        <Card.Body className="justify-content-center">
          <Card.Header border="primary" style={cardHeader}>
            Profile
          </Card.Header>
          <Card.Text style={cardText}>
            Logged user: {currentUser.email} <br />
            Username:  {!loading ? userData.displayName : "loading"}<br />
            Role: "Role" <br />
            {currentUser.emailVerified ? "": "Email is not verified"}
          </Card.Text>
        </Card.Body>

        <Card.Body className="justify-content-center">
          <Card.Header border="primary" style={cardHeader}>
            <Button
              style={style}
              onClick={() => setToggle((toggled) => !toggled)}
            >
              {toggled ? "-" : "+"} Edit Profile
            </Button>
          </Card.Header>
         
          <div style={cardText}>
          {toggled && (
            <Updateprofile
              displayName={currentUser.displayName}
              email={currentUser.email}
            />
          )}
          </div>
        </Card.Body>

        <Card.Body className="justify-content-center" >
          <Card.Header
            className="cardHeaderRem"
            border="primary"
            style={cardHeader}
          >
            <Button
              style={style}
              onClick={() => setToggle1((toggled1) => !toggled1)}
            >
              {toggled1 ? "-" : "+"} Edit Password
            </Button>
          </Card.Header>
          
          <div style={cardText}>
          {toggled1 && <UpdatePassword />}
          </div>
        </Card.Body>

       
      </Card>
<Logout/>
      
    </div>
  );
}
