import { addedNotes, checkLogin,createUser,dltNotes,editNotes,favNotes,Summarize, toggleNavBtn } from "./action";





const initialState = {
    newUser:JSON.parse(localStorage.getItem("users")) || [],
    loggedInError:null,
    loggedIn:JSON.parse(localStorage.getItem("currentUser"))||[],
    passwordError:null,
    summarizeNote:"",
    addedNote: JSON.parse(localStorage.getItem("notes")) || [],
    toggleButton:null,
    
    editedNote:{
        editedId:null,
        editedText:null,
    },
    dltNoteId:null,
   
}

export const reducer = (state=initialState, action)=>{
    switch (action.type) {

        case createUser:
            const alreadyExist = state.newUser.find((user)=>{
                return user.id==action.payload.id
            })
            if (alreadyExist) {
                    return state;
                }

                const updatedUsers = [...state.newUser, action.payload];
                localStorage.setItem("users", JSON.stringify(updatedUsers));

                return {
                    ...state,
                    newUser: updatedUsers
                };
            
                  break;
            
        case checkLogin:
            const user = state.newUser.find((user)=>{
                return user.email==action.payload.email
            })
            
            if(!user){
                return {
                    ...state,
                    loggedInError:true,
                    loggedIn:[]
                }
            }
             if(user.password!==action.payload.password){
                return {
                    ...state,
                    passwordError:true
                }
             }
            localStorage.setItem("currentUser", JSON.stringify(user))

            return{
                ...state,
                loggedIn:user,
                loggedInError:false,
                passwordError:false
            }
            
            break;
          
            case toggleNavBtn:
                return {
                    ...state,
                    toggleButton:action.payload
                }
                break;

            case addedNotes:
                const updatedNote=[...state.addedNote,action.payload]
                localStorage.setItem("notes", JSON.stringify((updatedNote)))
                return {
                    ...state,
                    addedNote:updatedNote
                }
                break;

            case editNotes:
                const EditId = state.addedNote.find((id)=>{
                    return id.id==action.payload.editedId
                })
                console.log(EditId,"hello id")

                const updateNote = state.addedNote.map((id)=>{
                    return id.id==action.payload.editedId?{...id,note:action.payload.editedText}:id
                })
                // console.log(updateNote)
                localStorage.setItem("notes",JSON.stringify(updateNote))
                return{
                    ...state,
                    addedNote:updateNote
                }
                break;

            case dltNotes:
                const deleteNote= state.addedNote.filter((note)=>{
                    return note.id!== action.payload
                })
                console.log(deleteNote)
                localStorage.setItem("notes", JSON.stringify(deleteNote))
                return {
                    ...state,
                    addedNote:deleteNote
                }
                break;

            case favNotes:
                const addfav = state.addedNote.find((note)=>{
                    return note.id==action.payload
                })
                console.log(addfav)

                const updateNot =state.addedNote.map((note)=>{
                  return  note.id==action.payload?{...note,isFavourite:!note.isFavourite}
                  : note
                })
                console.log(updateNot)
                localStorage.setItem("notes", JSON.stringify(updateNot))
                return{
                    ...state,
                    addedNote:updateNot
                }
                break;

            case Summarize:

            return {
                ...state,
                summarizeNote:action.payload
            }

            
        default:
            return state
            break;
    }
}