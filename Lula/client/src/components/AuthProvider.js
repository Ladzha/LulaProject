import { createContext, useContext, useState} from 'react';

import React from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAdmin, setIsAdmin] = useState(true);
    const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };
  return (
    <AuthContext.Provider value={{ isAdmin, toggleAdmin }}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider



