import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";

const Favourites = () => {

  
  
  const notes = useSelector((state)=>state.addedNote)
  const noteId = notes.map((n)=>{
        return n.userLoggedIn
      })

      const loggedIn = useSelector((state)=>state.loggedIn)

       const notesFilter = notes.filter((t)=>{
        return t.userLoggedIn==loggedIn.id
        })

     
      const favouriteNotes= notesFilter.filter(note => note.isFavourite === true);
              
           

       

   return (
    <>
      <h1 className='text-white text-xl mb-4'>Favourites</h1>

      {favouriteNotes.length === 0 ? (
        <p className='text-white'>No Favourite Found</p>
      ) : (
        favouriteNotes.map((t) => (
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
  );
}

export default Favourites