import { allNotes,checkLogin,createUser,Fav,NewNotes, Summarize, toggleNavBtn } from "./action";

// const savedNotes = JSON.parse(localStorage.getItem("newNotes")) || [];
// console.log(savedNotes,"no map")



const initialState = {
    newUser:JSON.parse(localStorage.getItem("users")) || [],
    
    summarizeNote:"",
    
    toggleButton:null,
    loggedInError:null,
    loggedIn:JSON.parse(localStorage.getItem("currentUser"))||[],
    passwordError:null
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