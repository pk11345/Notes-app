import { allNotes,checkLogin,createUser,Fav,NewNotes, Summarize } from "./action";

// const savedNotes = JSON.parse(localStorage.getItem("newNotes")) || [];
// console.log(savedNotes,"no map")



const initialState = {
    newUser:JSON.parse(localStorage.getItem("users")) || [],
    allNote :"", 
    newNote : "",
    summarizeNote:"",
    fav:"",
    loggedInError:null,
    loggedIn:null
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
                    loggedIn:null
                }
            }

            return{
                ...state,
                loggedIn:user,
                loggedInError:false
            }
            break;
          

        
        case allNotes:
            return {
                ...state ,
                allNote:action.payload,
                newNote:"",
                fav:""
            }

            break;

            case NewNotes:

            return {
                ...state ,
                newNote:action.payload,
                allNote:"",
                fav:""
            }

            break;

            case Summarize:

            return {
                ...state,
                summarizeNote:action.payload
            }

            case Fav:
            return {
                ...state ,
                fav:action.payload,
                newNote:"",
                allNote:"",
            }

        default:
            return state
            break;
    }
}