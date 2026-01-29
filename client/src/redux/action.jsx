export const createUser = "createUser"
export const checkLogin = "checkLogin"
export const toggleNavBtn = "toggleNavBtn"
export const Summarize = "Summarize"
export const addedNotes = "addedNotes"
export const dltNotes = "dltNotes"
export const editNotes = "editNotes"
export const favNotes ="favNotes"

export const toggleBtns = (value)=>({
    type:toggleNavBtn,
    payload:value
})

export const createNewUser=(newUser)=>({
    type:createUser,
    payload:newUser
})

export const loginCheck = (loggedIn)=>({
    type:checkLogin,
    payload:loggedIn
})

export const addNotes =(notes)=>({
    type:addedNotes,
    payload:notes
})

export const editNotesFunc = (editedText,editedId)=>({
    type:editNotes,
    payload:{
        editedId,
        editedText
    }
})

export const summarizeBtn = (note)=>({
    type:Summarize,
    payload:note
})


export const dltNotesFunc = (id)=>({
    type:dltNotes,
    payload:id
})

export const favNotesFunc =(id)=>({
    type:favNotes,
    payload:id
})