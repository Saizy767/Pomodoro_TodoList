import { SET_WORK_HOUR, SET_WORK_MINUTE, SET_WORK_SECOND} from "../types/types";

const initialState = {
    hour: '',
    minute: '',
    second: '',
}

export const workChangeReducer = (state= initialState, action) =>{
    switch(action.type){
        case SET_WORK_HOUR:
            return {...state, hour: action.hour, boolHour:true}
        case SET_WORK_MINUTE:
            return {...state, minute: action.minute, boolMinute: true}
        case SET_WORK_SECOND:
            return {...state, second: action.second, boolSecond:true}
        default: 
            return state
    }
}