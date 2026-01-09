import { allNotes,Fav,NewNotes, Summarize } from "./action";

const savedNotes = JSON.parse(localStorage.getItem("newNotes")) || [];
// console.log(savedNotes,"no map")



const initialState = {
    allNote :"", 
       
     
    newNote : "",

    summarizeNote:"",
   fav:""
}

export const reducer = (state=initialState, action)=>{
    switch (action.type) {
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