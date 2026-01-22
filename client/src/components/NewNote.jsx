import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { Allnotes} from '../redux/action'

const NewNote = () => {

  const [note, setNote] = useState("")
  const [category, setCategory] = useState(false)

  const notes={
    id:Math.random(),
    note:note,
    isFavourite:false
  }
  
 const savedNotes = JSON.parse(localStorage.getItem("newNotes")) || [];

  const dispatch = useDispatch()

  return (
    <>
       
          <div className='flex justify-between border-b-2 border-white p-3'>
            <h1 className='text-white font-bold text-2xl'>New Note</h1>
            
          </div>
          <div className='flex flex-col gap-3 border-2 border-white p-3 mt-8'>
             <textarea onChange={(e)=>{
              const n = e.target.value
              setNote(n)
             }}
             value={note}
             className='bg-transparent w-full text-white p-3 text-sm font-semibold outline-none'
              name="newnote" id="" placeholder='Enter new note'></textarea>

               <button onClick={()=>{setCategory(true)}}
                 className='text-black w-[40%] bg-white p-1 rounded-lg text-sm flex justify-between
                items-center gap-1'>
                          Categories
              
                          <IoMdArrowDropdown className={` text-xl text-black
                           ${category?" rotate-180 ":" rotate-0"}` }
                          
                           />
                          
              
                          </button>
                          <div className='w-full'>
                          {category?<>
                          <ul className='text-white  bg-black absolute'>
                            <li>Work</li>
                            <li>Ideas</li>
                            <li>Personal</li>
                          </ul>
                          </>:""}</div>
              <button onClick={(e)=>{
                e.preventDefault()
                // const updatedNote = [...note,]
                // console.log(updatedNote)
                // console.log("dispatched", dispatch(Allnotes("",notes)))
                setNote("")
                savedNotes.push(notes)
                localStorage.setItem("newNotes", JSON.stringify(savedNotes));
                
              }} 
               className='text-black bg-white p-2 rounded-lg text-md'>Add</button>
            </div>
            
        </>
  )
}

export default NewNote