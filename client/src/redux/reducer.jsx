import { allNotes, NewNotes, Summarize } from "./action";

const savedNotes = JSON.parse(localStorage.getItem("newNotes")) || [];
// console.log(savedNotes,"no map")



const initialState = {
    allNote : {
        id:"",
        newnote:savedNotes
    },
    newNote : "",

    summarizeNote:""
}

export const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case allNotes:
            return {
                ...state ,
                allNote:action.payload,
                newNote:""
            }

            break;

            case NewNotes:

            return {
                ...state ,
                newNote:action.payload,
                allNote:{
                    id:"",
                    newnote:savedNotes
                },
                
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