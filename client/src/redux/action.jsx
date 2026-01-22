export const allNotes = "allNotes"
export const NewNotes = "NewNotes"
export const Summarize = "Summarize"
export const Fav ="Fav"
export const createUser = "createUser"
export const checkLogin = "checkLogin"
export const toggleNavBtn = "toggleNavBtn"


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



export const summarizeBtn = (note)=>({
    type:Summarize,
    payload:note
})

