import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { addNotes } from '../redux/action'
import { toast } from 'react-toastify'


const NewNote = () => {

  const [note, setNote] = useState("")
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("Select Category");

  const userLoggedIn = useSelector((state)=>state.loggedIn.id)
  const dispatch = useDispatch()

  const not = useSelector((state)=>state.addedNote)
  console.log(not,"notes")
  

  const notes={
    userLoggedIn:userLoggedIn,
    id:Math.random(),
    note:note,
    category:category,
    isFavourite:false
  }

  
//  const savedNotes = JSON.parse(localStorage.getItem("newNotes")) || [];

  

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

               <div className="md:relative w-[40%]">
                  <button
                    onClick={() => setCategoryOpen(prev => !prev)}
                    className="text-black w-full bg-white p-1 rounded-lg text-sm flex justify-between items-center"
                  >
                    {category}
                    <IoMdArrowDropdown
                      className={`text-xl transition-transform ${
                        categoryOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                    {categoryOpen && (
                      <ul className="absolute mt-1 w-[40%] md:w-full hover:bg-gray-400
                       bg-black text-white rounded-lg shadow-lg z-10">
                       {["Work", "Ideas", "Personal"].map((item) => (
                        <li
                          key={item}
                          onClick={() => {
                          setCategory(item);
                          setCategoryOpen(false);
                            }}
                          className="p-2 hover:bg-white hover:text-black cursor-pointer"
                            >
                            {item}
                            </li>
                            ))}
                          </ul>
                        )}
                        </div>

              <button onClick={(e)=>{
                e.preventDefault()
                setNote("")
                dispatch(addNotes(notes))
                toast.success("notes added")
              }} 
               className='text-black bg-white p-2 rounded-lg text-md'>Add</button>
            </div>
            
        </>
  )
}

export default NewNote