import { VISIBLE_WORK_TIME, VISIBLE_BREAK_TIME, VISIBLE_REPEAT} from "../types/types";

const initialState ={
    workTime: false,
    breakTime: false,
    repeat: false
}

export const switchTimeSetReducer = (state = initialState, action) =>{
    switch(action.type){
        case VISIBLE_WORK_TIME:
            return {...state, workTime: true, breakTime: false,
                repeat: false}
        case VISIBLE_BREAK_TIME:
            return {...state, workTime: false, breakTime: true,  
                repeat: false}
        case VISIBLE_REPEAT:
            return {...state, workTime: false, breakTime: false,  
                repeat: true}
        default:
            return state
    }
}