import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Favourites = () => {
  
  const notes = useSelector((state)=>state.addedNote)

const favouriteNotes = notes.filter(note => note.isFavourite === true);

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