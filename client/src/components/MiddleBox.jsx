import React from 'react'
import { useSelector } from 'react-redux'
import AllNotes from './AllNotes'
import NewNote from './NewNote'
import Favourites from './Favourites'

const MiddleBox = () => {
  const allnote = useSelector(state=>state.allNote)
      console.log(allnote)
      
    const newnote = useSelector(state=>state.newNote)
    console.log(newnote)

    const FavNote = useSelector(state=>state.fav)
    console.log(FavNote)
    

  return (
   <>
       <div className='w-[40%] border-[1px] border-white rounded-lg p-3 overflow-y-auto scrollbar-hide ' >
         {newnote === "newnote" ? (
        <NewNote />
      ) : FavNote=== "Fav" ? (
        <Favourites />
      ) : (
        <AllNotes />
      )}
       </div>
       </>
  )
}

export default MiddleBox