import React, { useState } from 'react'
import { toast } from "react-toastify";

const Signup = () => {

  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [passerror, setPassError] = useState("")
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  
  
   const handleSubmit = (e) => {
  e.preventDefault();

  // stop if validation errors exist
  if (error || passerror) {
    toast.error("Fix errors before submitting");
    return;
  }

  const newUser = {
    name,
    email,
    password,
  };

  // get existing users
  const existingUsers =
    JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate email
  const emailExists = existingUsers.some(
    (user) => user.email === email
  );

  if (emailExists) {
    toast.error("Email already registered");
    return;
  }

  // save user
  const updatedUsers = [...existingUsers, newUser];
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  toast.success("Account created successfully 🎉");

  // clear form
  setName("");
  setEmail("");
  setPassword("");
};



  return (
    <>
     <div className='w-[100%]'>
      <form onSubmit={handleSubmit}
       className='flex flex-col  gap-4 w-[100%]'>

        <div className='flex flex-col gap-2 '>
          <h1 className='text-white text-xl font-semibold'>Name</h1>
          <input onChange={(e)=>{
            const val = e.target.value
            setName(val)
          }} value={name}
           className='p-2 bg-slate-800/70 rounded-lg placeholder:text-white
           placeholder:font-semibold outline-none text-white font-semibold border-[1px] border-blue-400'
           type="text" placeholder='Enter Your Name' required/>
        </div>

        <div className='flex flex-col gap-2 '>
          <h1 className='text-white text-xl font-semibold'>Email</h1>
          <input onChange={(e)=>{
            const val = e.target.value
            setEmail(val)

            if(val.trim()===""){
              setError("")
            }
            else if(emailRegex.test(val.trim())){
              
              setError("")
            }
            else{
              setError("Enter Correct Format")
            }
          }} value={email}
           className='p-2 bg-slate-800/70 rounded-lg placeholder:text-white
           placeholder:font-semibold outline-none text-white font-semibold border-[1px] border-blue-400'
           type="email" placeholder='Enter Your Email' required />
           <p className='text-red-500 text-md font-extralight'>{error}</p>
        </div>

        <div className='flex flex-col gap-2 '>
          <h1 className='text-white text-xl font-semibold'>Password</h1>
          <input onChange={(e)=>{
            const val = e.target.value
            setPassword(val)

            if(val.trim()===""){
              setPassError("")
            }
            else if(passwordRegex.test(val.trim())){
              
              setPassError("")
            }
            else{
              setPassError("Enter Correct Format")
            }
          }} value={password}
           className='p-2 bg-slate-800/70 rounded-lg placeholder:text-white
           placeholder:font-semibold outline-none text-white font-semibold border-[1px] border-blue-400'
           type="password" placeholder='Enter Your Password' required/>

           <p className='text-red-500 text-md font-extralight'>{passerror}</p>
        </div>
        
        <div>
          <button className='w-[100%] bg-blue-400 text-white text-xl font-semibold p-2 rounded-lg outline-none'>
            Create Account
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup