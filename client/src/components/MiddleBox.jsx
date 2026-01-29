import React from 'react'
import { useSelector } from 'react-redux'
import AllNotes from './AllNotes'
import NewNote from './NewNote'
import Favourites from './Favourites'
import Work from './categories/Work'
import Personal from './categories/Personal'
import Ideas from './categories/Ideas'

  const MiddleBox = () => {
    
    const toggleButton = useSelector((state)=>state.toggleButton)
      

  return (
   <>
    <div className='w-[40%] border-[1px] border-white rounded-lg p-3 overflow-y-auto scrollbar-hide ' >
       {toggleButton=="newNote"? <>
       <NewNote/>
       </>
       : toggleButton=="fav"? <><Favourites/></>
       : toggleButton=="work"? <><Work/></>
       : toggleButton=="personal"? <><Personal/></>
       : toggleButton=="ideas"? <><Ideas/></>
       : <AllNotes/>
       }
    </div>
       </>
  )
}

export default MiddleBox