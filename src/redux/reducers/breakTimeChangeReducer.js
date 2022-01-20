import { SET_BREAK_HOUR, SET_BREAK_MINUTE, SET_BREAK_SECOND} from "../types/types";

const initialState = {
    breakHour: '',
    breakMinute: '',
    breakSecond: ''
}

export const breakChangeReducer = (state =initialState, action) => {
    switch(action.type){
        case SET_BREAK_HOUR:
            return {...state, breakHour: action.breakHour}
        case SET_BREAK_MINUTE:
            return {...state, breakMinute: action.breakMinute}
        case SET_BREAK_SECOND:
            return {...state, breakSecond: action.breakSecond}
        default:
            return state
    }
}