import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AuthProvider from './components/AuthProvider';

import AppRouter from './AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
