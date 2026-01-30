import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch,useSelector } from 'react-redux';
import {dltNotesFunc, editNotesFunc, favNotesFunc, summarizeBtn } from '../redux/action';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const AllNotes = () => {

//  const [notes, setNotes] = useState([])
  const [editText, setEditText] = useState("")
  const [editId, setEditId] = useState(null)

  

  const dispatch = useDispatch()

    const note = useSelector((state)=>state.addedNote)
   
    const loggedIn = useSelector((state)=>state.loggedIn)
    
    const notes = note.filter((t)=>{
      return t.userLoggedIn==loggedIn.id
    })

   

    const handleEdit =(id,text)=>{
      setEditText(text)
      setEditId(id)
    }

    
    
    const handleSave = ()=>{
      
      dispatch(editNotesFunc(editText,editId))
      
       window.location.reload()
      }

        const handleDelete = (id) => {
          dispatch(dltNotesFunc(id))
           window.location.reload()
            };

           

  return (
    <>
    
      <div className='flex justify-between border-b-2 border-white p-3'>
        <h1 className='text-white font-bold text-2xl'>All Notes</h1>
        <div className='flex gap-1'>
          <h2 className='text-white font-semibold text-lg '>Sort By:</h2>
          <button onClick={()=>{
            toast.error("currently this feautre not on work")
          }}
           className='text-black bg-white p-1 rounded-lg text-sm flex items-center gap-1'>
            Date Modified

            <IoMdArrowDropdown className='text-black text-xl' />

            </button>
          
        </div>
      </div>

      
      {notes.map((t)=>{
        return<> <div key={t.id} className='flex flex-col gap-3 border-2 border-white p-3 mt-8'>
          <div >
            {t.isFavourite ? (
                <FaStar
                  onClick={() =>{
                    dispatch(favNotesFunc(t.id))
                    toast.success("removed from favourite ")
                  }}
                  className="text-yellow-400 text-xl cursor-pointer"
                />
              ) : (
                <FaRegStar
                  onClick={() => {
                    dispatch(favNotesFunc(t.id))
                    toast.success("added to favourite")
                  }}
                  className="text-white text-xl cursor-pointer"
                />
              )}

          </div>
          {editId === t.id ? (
           <textarea
             value={editText}
             onChange={(e) => setEditText(e.target.value)}
             className='bg-transparent w-full text-white p-3'
             />
              ) : (
             <h1 className='text-white p-3 text-sm font-semibold'>
                 {t.note}
             </h1>
               )}

        {editId===t.id?<>
          <div className='flex  justify-end gap-2'>
          

          <button onClick={()=>{
            handleSave()
          }} 
           className='text-black bg-white p-1 rounded-lg text-sm'>Save</button>
          </div> </>

          :<>
          <div className='flex  justify-end gap-2'>
          <button onClick={()=>{
            dispatch(summarizeBtn(t.note))
          }}
           className='text-black bg-white p-1 rounded-lg text-sm'>Summarize</button>

          <button onClick={() => handleDelete(t.id)} 
           className='text-black bg-white p-1 rounded-lg text-sm'>Delete</button>
       
          <button onClick={()=>{
            handleEdit(t.id,t.note)
          }}
           className='text-black bg-white p-1 rounded-lg text-sm'>Edit</button>
          </div>  
          </>
          }


          </div>  </>
      })}
      
       
    
    </>
  )
}

export default AllNotes