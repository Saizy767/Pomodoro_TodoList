import {SET_BREAK_HOUR, SET_BREAK_SECOND, SET_BREAK_MINUTE} from "../types/types"

export function breakHourChanger(breakHour){
    return{
        type: SET_BREAK_HOUR,
        breakHour: breakHour
    }
}

export function breakMinuteChanger(breakMinute){
    return{
        type: SET_BREAK_MINUTE,
        breakMinute: breakMinute
    }
}

export function breakSecondChanger(breakSecond){
    return{
        type: SET_BREAK_SECOND,
        breakSecond: breakSecond
    }
}