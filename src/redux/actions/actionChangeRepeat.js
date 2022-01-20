import { SET_REPEAT_TIME } from "../types/types";

export function repeatChanger(time){
    return{
        type: SET_REPEAT_TIME,
        time: time
    }
}