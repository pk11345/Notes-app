import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from 'react-redux';

const AllNotes = () => {

  const [editText, setEditText] = useState("")
  const [editId, setEditId] = useState(null)
  
  // const note = useSelector(state=>state.allNote.newnote)
    
    

    const handleEdit =(id,text)=>{
      setEditText(text)
      setEditId(id)
    }

    const savedNotes = JSON.parse(localStorage.getItem("newNotes")) || [];
    console.log(savedNotes)
    const handleSave = ()=>{
     
       
        const Edited = savedNotes.find((notes)=>notes.id===editId)
        console.log(Edited.id,"editeed")
    
       const updatenote = savedNotes.map((item)=>{
        return item.id===Edited.id ? {...item, note:editText} : item
       })
    
       localStorage.setItem("newNotes",JSON.stringify(updatenote))

       setEditId("")
      }

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

      
      {savedNotes.map((t,index)=>{
        return<> <div key={index} className='flex flex-col gap-3 border-2 border-white p-3 mt-8'>
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
          <button className='text-black bg-white p-1 rounded-lg text-sm'>Delete</button>

          <button onClick={()=>{
            handleSave()
          }} 
           className='text-black bg-white p-1 rounded-lg text-sm'>Save</button>
          </div> </>

          :<>
          <div className='flex  justify-end gap-2'>
          <button className='text-black bg-white p-1 rounded-lg text-sm'>Delete</button>

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