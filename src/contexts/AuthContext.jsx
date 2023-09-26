import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const value = {};
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
