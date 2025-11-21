import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";

const SideNav = () => {
  return (
    <>
    <div className='w-[25%] border-[1px] border-white rounded-lg flex flex-col justify-between p-3 gap-4'>

        <div className='flex flex-col'>
            <h1 className='text-white text-xl text-bold'>username</h1>
            <h2 className='text-white/30 '>1234@exmple.com</h2>
        </div>
        
            <div className="searchbar flex bg-slate-800/40 w-[100%] p-2 items-center gap-2 rounded-lg">
                <IoMdSearch className='text-white text-xl'/>
                <input className='w-[90%] outline-none bg-transparent text-white'
                 type="text"  placeholder='Search all notes'/>
            </div>

       <div className='space-y-3 mt-2'>
        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <GrNotes className=' text-xl'/>
            <h1 className=' text-xl'>All Notes</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
        text-white hover:text-blue-400 '>
            <FaRegHeart className=' text-xl'/>
            <h1 className=' text-xl'>Favourites</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <FaRegTrashCan className='text-xl'/>
            <h1 className=' text-xl'>Trash</h1>
        </div>
       </div>

       <div className="categories space-y-2">
        <h1 className='text-white text-xl'>CATEGORIES</h1>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <FaRegFolder className='text-xl'/>
            <h1 className=' text-xl'>Work</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <FaRegFolder className='text-xl'/>
            <h1 className=' text-xl'>Personal</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer hover:bg-blue-500/40 p-2 rounded-md
         text-white hover:text-blue-400'>
            <FaRegFolder className='text-xl'/>
            <h1 className=' text-xl'>Ideas</h1>
        </div>
       </div>
       <div className=''>
        <button className='bg-blue-400 text-white text-xl p-2 rounded-lg w-[100%] '>
            New Note</button>
       </div>
    </div>
    </>
  )
}

export default SideNav