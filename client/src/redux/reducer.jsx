import { allNotes, NewNotes } from "./action";

const initialState = {
    allNote : {
        id:"",
        newnote:""
    },
    newNote : ""
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
                    newnote:""
                }
            }

            break;
    
        default:
            return state
            break;
    }
}