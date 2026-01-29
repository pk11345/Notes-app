import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Personal = () => {

  
  
    const notes = useSelector((state)=>state.addedNote)
    

      const loggedIn = useSelector((state)=>state.loggedIn)

      const notesFilter = notes.filter((t)=>{
        return t.userLoggedIn==loggedIn.id
        })
      
      const personal = notesFilter.filter(note => note.category=== "Personal");
                   

    
  return (
    <>
      <h1 className='text-white text-xl mb-4'>Personal</h1>

      {personal.length === 0 ? (
        <p className='text-white'>No Note With This Category</p>
      ) : (
        personal.map((t) => (
          <div
            key={t.id}
            className='flex flex-col gap-3 border-2 border-white p-3 mt-8'
          >
            <h1 className='text-white p-3 text-sm font-semibold'>
              {t.note}
            </h1>
          </div>
        ))
      )}
    </>
  )
}

export default Personal