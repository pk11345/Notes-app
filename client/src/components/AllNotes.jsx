import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from 'react-redux';

const AllNotes = () => {

  const [notes, setNotes] = useState([]);
  const [editText, setEditText] = useState("")
  const [editId, setEditId] = useState(null)
  
  // const note = useSelector(state=>state.allNote.newnote)
    
    useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("newNotes")) || [];
    setNotes(saved);
    }, []);

    const handleEdit =(id,text)=>{
      setEditText(text)
      setEditId(id)
    }

    
    
    const handleSave = ()=>{
        const Edited = saved.find((notes)=>notes.id===editId)
        console.log(Edited.id,"editeed")
    
       const updatenote = saved.map((item)=>{
        return item.id===Edited.id ? {...item, note:editText} : item
       })
    
       localStorage.setItem("newNotes",JSON.stringify(updatenote))

       setEditId("")
      }

        const handleDelete = (id) => {
         const dltNotes = notes.filter((item)=>{
          return item.id!==id
         })
         localStorage.setItem("newNotes",JSON.stringify(dltNotes))
            window.location.reload()
            };

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
          <button className='text-black bg-white p-1 rounded-lg text-sm'>Summarize</button>

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