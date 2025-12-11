import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from 'react-redux';

const AllNotes = () => {
  
  const note = useSelector(state=>state.allNote.newnote)
    console.log(note)

  return (
    <>
    
      <div className='flex justify-between border-b-2 border-white p-3'>
        <h1 className='text-white font-bold text-2xl'>All Notes</h1>
        <div className='flex gap-1'>
          <h2 className='text-white font-semibold text-lg '>Sort By:</h2>
          <button className='text-black bg-white p-1 rounded-lg text-sm flex items-center gap-1'>
            Date Modified

            <IoMdArrowDropdown className='text-black text-xl' />

            </button>
          
        </div>
      </div>

        <div className='flex flex-col gap-3 border-2 border-white p-3 mt-8'>
          <h1 className='bg-transparent w-full text-white p-3 text-sm font-semibold'
          >{note}</h1>
          </div>
    
    </>
  )
}

export default AllNotes