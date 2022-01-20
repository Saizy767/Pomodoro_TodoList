import { VISIBLE_REPEAT, VISIBLE_WORK_TIME , VISIBLE_BREAK_TIME} from "../types/types"

export function switchWorkTime(){
    return {
        type: VISIBLE_WORK_TIME
    }
}
export function switchBreakTime(){
    return {
        type: VISIBLE_BREAK_TIME
    }
}
export function switchRepeat(){
    return {
        type: VISIBLE_REPEAT
    }
}