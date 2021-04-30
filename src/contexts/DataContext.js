import React, { createContext, useState, useEffect, useCallback } from "react";

import { useAuth } from "../contexts/AuthContext";
import "../index.css";
import {firestore} from "../firebase"


export const DataContext = createContext();

// This context provider is passed to any component requiring the context
export const DataProvider = ({ children }) => {
 

  return (
    <DataContext.Provider
      value={{
        name,
        location,
        setName,
        setLocation
      }}
    >
      {children}
    </DataContext.Provider>
  );
};