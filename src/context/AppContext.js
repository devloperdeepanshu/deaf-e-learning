import React, { createContext, useContext, useState } from 'react';

// Create a Context for app-wide state
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access context
export const useAppContext = () => useContext(AppContext);
