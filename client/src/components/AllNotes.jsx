import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch,useSelector } from 'react-redux';
import {dltNotesFunc, editNotesFunc, summarizeBtn } from '../redux/action';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const AllNotes = () => {

  const [notes, setNotes] = useState([]);
  const [editText, setEditText] = useState("")
  const [editId, setEditId] = useState(null)
  const [favourite, setFavourite] = useState(false)
  

  const dispatch = useDispatch()

    const savedNote = useSelector((state)=>state.addedNote)

    useEffect(() => {
   
    setNotes(savedNote);
    }, []);

    

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

            // const handleFavourite =(id)=>{
            
            //   const AddFav = notes.find((notes)=>notes.id===id)
            //   const updateFav = notes.map((item)=>{
            //     return item.id===AddFav.id?{...item,isFavourite:favourite}:item
            //   })
            //   setNotes(updateFav)
            //    localStorage.setItem("newNotes",JSON.stringify(updateFav))
            //   //  window.location.reload()
            // }

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

      
      {notes.map((t,index)=>{
        return<> <div key={index} className='flex flex-col gap-3 border-2 border-white p-3 mt-8'>
          <div >
            {t.isFavourite ? (
                <FaStar
                  onClick={() =>{ handleFavourite(t.id)
                    setFavourite(false)
                  }}
                  className="text-yellow-400 text-xl cursor-pointer"
                />
              ) : (
                <FaRegStar
                  onClick={() => {handleFavourite(t.id)
                    setFavourite(true)
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