import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

import {useDispatch, useSelector} from 'react-redux'

import { toggleBtns } from '../redux/action';


const SideNav = () => {
      const [user, setUser] = useState(null);
      const [toggleBtn, setToggleBtn] = useState(null)
      const [menu, setMenu] = useState(false)

      

   
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
    <div className='md:w-[25%] w-full border-[1px] border-white rounded-lg sticky top-3 
     flex md:flex-col items-center md:items-start justify-between p-3 md:gap-3 gap-5 mb-3 md:mb-0 '>

        <div className='flex flex-col  w-[30%] md:w-[full]'>
            <h1 className='text-white text-lg md:text-xl font-bold'>
                {user?.name || "Guest"}
            </h1>
            <h2 className='text-white/30 text-sm'>
                {user?.email || ""}
            </h2>
            </div>
            <button
                onClick={() => {
                    localStorage.removeItem("currentUser");
                    window.location.href = "/login";
                }}
                className='bg-red-500 text-white text-md p-2 rounded-lg hidden md:block w-[100%]'
                >
                Logout
                </button>

        
            <div className="searchbar flex bg-slate-800/40 w-[100%] p-2 items-center gap-2 rounded-lg">
                <IoMdSearch className='text-white text-xl'/>
                <input className='w-[90%] outline-none bg-transparent text-white'
                 type="text"  placeholder='Search all notes'/>
            </div>

       <div className='space-y-3 mt-2 hidden md:flex md:flex-col '>

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

       <div className="categories space-y-2 hidden md:flex md:flex-col">
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

       <div className='md:hidden '>
        <IoMdMenu className='text-white text-xl' 
        onClick={()=>{
            setMenu(prev=>!prev)
            // console.log(menu)
        }}
        />
        
        {menu? <>
        <div className='flex flex-col absolute left-0 top-0 z-50 gap-4 p-3 bg-gray-900
         w-[70%] min-h-screen'>
        <div className='space-y-3 mt-2 md:hidden flex flex-col  '>

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

       <div className="categories space-y-2 md:hidden flex flex-col">
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
       <div className='block md:hidden'>
        <button  onClick={()=>{
                setToggleBtn("newNote")
             }}
         className='bg-blue-400 text-white text-xl p-2 rounded-lg w-[90%] '>
            New Note</button>
       </div>
       <button
                onClick={() => {
                    localStorage.removeItem("currentUser");
                    window.location.href = "/login";
                }}
                className='bg-red-500 text-white text-xl p-2 rounded-lg md:hidden block w-[90%]'
                >
                Logout
                </button>
       </div>
        </>
            :<></>} 
       </div>

       <div className='md:block hidden'>
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