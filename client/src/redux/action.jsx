export const allNotes = "allNotes"
export const NewNotes = "NewNotes"

export const Allnotes = (id)=>({
    type:allNotes,
    payload:id  
     
})

export const Newnotes = (id)=>({
    type:NewNotes,
    payload:id
})