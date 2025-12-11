import React from 'react'
import { useSelector } from 'react-redux'
import AllNotes from './AllNotes'
import NewNote from './NewNote'

const MiddleBox = () => {
  const allnote = useSelector(state=>state.allNote)
      console.log(allnote)
      
    const newnote = useSelector(state=>state.newNote)
    console.log(newnote)
    

  return (
   <>
       <div className='w-[40%] border-[1px] border-white rounded-lg p-3'>
         {allnote.id==="allnote"?  <>
         <AllNotes/>
         </>:"" || newnote==="newnote"? <>
         <NewNote/>
         </> :<><AllNotes/></>}
       </div>
       </>
  )
}

export default MiddleBox