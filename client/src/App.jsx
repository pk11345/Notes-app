import React from 'react'
import AuthLayout from './components/auth/AuthLayout';
import {Routes, Route, Navigate } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/Dashboard';

const App = () => {
  
  return (
   <>
  <div className="App">
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/" element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
</Route>
         <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  </div>
   </>
  )
}

export default App