import React, { useState } from 'react'
import { GrNotes } from "react-icons/gr";
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const AuthLayout = () => {

    

    const location = useLocation()

  return (
    <>
    <div className=''>
       
    <div className="geometric-pattern relative w-full min-h-screen overflow-y-auto
     p-2 gap-7 md:gap-1 flex flex-col md:flex-row md:justify-center md:items-center 
     justify-start items-center">
        
        <div className="leftPanel md:w-[50%] w-[90%] flex flex-col items-center gap-3  ">
            <div className='flex flex-col items-center md:items-start  gap-4'>
                <div className='flex items-center gap-2 mb-3'>
                <GrNotes className=' text-5xl text-blue-500'/>
                <h1 className='text-white text-3xl font-bold'>Notes App</h1>
                </div>
                
                 <h1 className='text-white text-2xl md:text-4xl font-extrabold'>Organize Your Thoughts.</h1>
                <h2 className='text-white/30 text-md md:text-xl font-extralight'>
                The modern way to capture, organize, and retrieve your notes.</h2>
               
            </div>
        </div>

        <div className="rightPanel w-[90%] md:w-[50%] flex flex-col gap-3 items-center">
            <div className='space-y-2 text-center'>
                <h1 className='text-white font-extrabold text-3xl md:text-5xl'>Welcome Back</h1>
                <h1 className='text-white/30 text-xl font-extralight'>Sign in to continue to your notes</h1>
            </div>

            <div className="container w-[90%] p-4 rounded-xl border-2 border-white gap-4
             flex flex-col items-center">
                <div className='w-[85%] bg-slate-800/70 rounded-lg p-2 flex'>

                    
                       <Link to="/login" className={`w-[50%] text-center p-1 rounded-lg font-bold 
                        ${location.pathname ==="/login"? "bg-white": "bg-transparent"}`}>Login</Link> 
                    
                    
                    <Link to="/signup" 
                    className={`w-[50%] text-center p-1 rounded-lg font-bold 
                    
                    ${location.pathname ==="/signup"? "bg-white": "bg-transparent"}`}>SignUp</Link> 
                   

                </div>
                 <div className='w-[85%]'>
                    {location.pathname==="/login"? <Login/> : <Signup/>}
                </div>
            </div>
            
        </div>
    
    </div>
    </div>
    </>
  )
}

export default AuthLayout