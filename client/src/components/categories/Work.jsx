import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Work = () => {

  

    const notes = useSelector((state)=>state.addedNote)
   

      const loggedIn = useSelector((state)=>state.loggedIn)

      const notesFilter = notes.filter((t)=>{
        return t.userLoggedIn==loggedIn.id
        })

      
       const work = notesFilter.filter(note => note.category=== "Work");
                   

    
  return (
   <>
      <h1 className='text-white text-xl mb-4'>Work</h1>

      {work.length === 0 ? (
        <p className='text-white'>No Note With This Category</p>
      ) : (
        work.map((t) => (
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

export default Work