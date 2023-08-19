import './App.css';
import React from 'react';
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";

// import AuthProvider from './components/AuthProvider';

import AppRouter from './AppRouter';

// export const AppContext = createContext(null);
export const AppContext = createContext();

function App() {
  const [token, setToken] = useState(null);
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ token, setToken }}>
      
        <AppRouter/>

      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
