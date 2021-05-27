import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";

export default function Logout() {
    const { logout, currentUser } = useAuth();
    const {data} = useData();
    const [error, setError] = useState("");
    const history = useHistory();

     function handleLogout() {
        setError("");
        try {
           logout();
            data.logout();
          history.push("/login");
        } catch {
          setError("Failed to logout");
        }
      }

  return (
    <>
      <div className="text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
        {error ? error: ""}
      </div>
    </>
  );
}
