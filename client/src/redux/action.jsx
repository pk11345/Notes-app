export const allNotes = "allNotes"
export const NewNotes = "NewNotes"
export const Summarize = "Summarize"
export const Fav ="Fav"
export const createUser = "createUser"
export const checkLogin = "checkLogin"


export const createNewUser=(newUser)=>({
    type:createUser,
    payload:newUser
})

export const loginCheck = (loggedIn)=>({
    type:checkLogin,
    payload:loggedIn
})

export const Allnotes = (id)=>({
    type:allNotes,
    payload:id  
     
})

export const Newnotes = (id)=>({
    type:NewNotes,
    payload:id
})

export const summarizeBtn = (note)=>({
    type:Summarize,
    payload:note
})

export const Favourites= (id)=>({
    type:Fav,
    payload:id
})