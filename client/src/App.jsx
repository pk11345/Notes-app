import React from 'react'
import AuthLayout from './components/auth/AuthLayout';
import {Routes, Route, Navigate } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/Dashboard';
import AllNotes from './components/AllNotes';
import NewNote from './components/NewNote';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  
  return (
   <>
  <div className="App w-full min-h-screen bg-slate-900">
     <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
      <Route path="/" element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      </Route>
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/AllNotes" element={<AllNotes/>} />
         <Route path="/NewNote" element={<NewNote/>} />
    </Routes>
  </div>
   </>
  )
}

export default App