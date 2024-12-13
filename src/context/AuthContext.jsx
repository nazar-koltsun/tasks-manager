import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook for easy access to the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false); // Tracks if the user is authenticated
  const [isAdmin, setIsAdmin] = useState(false); // Tracks if the user is an admin

  // Functions to update the state
  const login = (admin = false) => {
    setIsAuth(true);
    setIsAdmin(admin);
  };

  const logout = () => {
    setIsAuth(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
