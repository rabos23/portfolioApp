import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Cryptolist() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  return <></>;
}
