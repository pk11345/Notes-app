export const allNotes = "allNotes"
export const NewNotes = "NewNotes"

export const Allnotes = (id,newnote)=>({
    type:allNotes,
    payload:{
        id,
        newnote   
     }
})

export const Newnotes = (id)=>({
    type:NewNotes,
    payload:id
})