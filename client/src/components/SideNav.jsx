import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";

import {useDispatch, useSelector} from 'react-redux'

import { toggleBtns } from '../redux/action';


const SideNav = () => {
      const [user, setUser] = useState(null);
      const [toggleBtn, setToggleBtn] = useState(null)

      

   
    const dispatch = useDispatch()

     const loggedIn = useSelector((state)=>state.loggedIn)
    //   console.log(loggedIn.id)
       useEffect(()=>{
        setUser(loggedIn)
       },[loggedIn])

       useEffect(()=>{
        dispatch(toggleBtns(toggleBtn))
       },[toggleBtn,dispatch])

  return (
    <>
    <div className='w-[25%] border-[1px] border-white rounded-lg sticky top-3 
     flex flex-col justify-between p-3 gap-3 '>

        <div className='flex flex-col'>
            <h1 className='text-white text-xl font-bold'>
                {user?.name || "Guest"}
            </h1>
            <h2 className='text-white/30'>
                {user?.email || ""}
            </h2>
            </div>
            <button
                onClick={() => {
                    localStorage.removeItem("currentUser");
                    window.location.href = "/login";
                }}
                className='bg-red-500 text-white text-md p-2 rounded-lg w-[100%]'
                >
                Logout
                </button>

        
            <div className="searchbar flex bg-slate-800/40 w-[100%] p-2 items-center gap-2 rounded-lg">
                <IoMdSearch className='text-white text-xl'/>
                <input className='w-[90%] outline-none bg-transparent text-white'
                 type="text"  placeholder='Search all notes'/>
            </div>

       <div className='space-y-3 mt-2'>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <GrNotes className=' text-xl'/>
            <h1 className=' text-xl' onClick={()=>{
                setToggleBtn("allnote")
                
             }} > All Notes </h1>
        </div>


        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
        text-white hover:text-blue-400 '>
            <FaRegHeart className=' text-xl'
            />
            <h1 className=' text-xl'  onClick={()=>{
                setToggleBtn("fav")
                 
             }}
            >Favourites</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <FaRegTrashCan className='text-xl'/>
            <h1 className=' text-xl'
            onClick={()=>{
                setToggleBtn("trash")
            }}
            >Trash</h1>
        </div>
       </div>

       <div className="categories space-y-2">
        <h1 className='text-white text-xl'>CATEGORIES</h1>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <FaRegFolder className='text-xl'/>
            <h1 className=' text-xl'  onClick={()=>{
                setToggleBtn("work")
                
             }}>Work</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <FaRegFolder className='text-xl'/>
            <h1 className=' text-xl' onClick={()=>{
                setToggleBtn("personal")
                
             }}>Personal</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <FaRegFolder className='text-xl'/>
            <h1 className=' text-xl' onClick={()=>{
                setToggleBtn("ideas")
                
             }}>Ideas</h1>
        </div>
       </div>

       <div className=''>
        <button  onClick={()=>{
                setToggleBtn("newNote")
             }}
         className='bg-blue-400 text-white text-xl p-2 rounded-lg w-[100%] '>
            New Note</button>
       </div>
    </div>
    </>
  )
}

export default SideNav