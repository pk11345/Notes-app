import { allNotes, NewNotes } from "./action";

const savedNotes = JSON.parse(localStorage.getItem("newNotes")) || [];
// console.log(savedNotes,"no map")



const initialState = {
    allNote : {
        id:"",
        newnote:savedNotes
    },
    newNote : "",

    
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
    
        default:
            return state
            break;
    }
}