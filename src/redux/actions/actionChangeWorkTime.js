import { SET_WORK_HOUR, SET_WORK_MINUTE, SET_WORK_SECOND } from "../types/types"

export function workHourChanger(hour){
    return{
        type: SET_WORK_HOUR,
        hour: hour
    }
}

export function workMinuteChanger(minute){
    return{
        type: SET_WORK_MINUTE,
        minute: minute
    }
}

export function workSecondChanger(second){
    return{
        type: SET_WORK_SECOND,
        second: second
    }
}