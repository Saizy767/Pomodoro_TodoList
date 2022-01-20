import { SET_REPEAT_TIME } from "../types/types";

const initialState ={
    time: ''
}

export const repeatChangeReducer=(state = initialState, action)=>{
    switch(action.type){
        case SET_REPEAT_TIME:
            return {...state, time: action.time}
        default:
            return state
    }
}