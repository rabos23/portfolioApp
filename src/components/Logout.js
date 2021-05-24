import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";

export default function Logout() {
    const { logout } = useAuth();
    const data = useData();
    const [error, setError] = useState("");
    const history = useHistory();

    async function handleLogout() {
        setError("");
        try {
          await logout();
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
      </div>
    </>
  );
}
