import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSetTime } from "./useSetTime"

export const useTimeDistribution = (time, switchWorkTime, switchBreakTime, 
                                    switchRepeat, handleOperatorTime) => {
    const dispatch = useDispatch()
    
    
    const newMinute = useSetTime('Minute')
    const newHour = useSetTime('Hour')
    const newSecond = useSetTime('Second')

    const newMinuteRest = useSetTime('MinuteR')
    const newHourRest = useSetTime('HourR')
    const newSecondRest = useSetTime('SecondR')

    const newRepeat = useSetTime('Repeat')

    
    useEffect(()=>{
        localStorage.setItem('CurrentRepeat', JSON.stringify(0))},
        [])
        
   useEffect(() => {
        const WorkElem = document.getElementsByClassName('li__input_work')
        const BreakElem = document.getElementsByClassName('li__input_break')
        const RepeatElem = document.getElementsByClassName('li__input_repeat')
        switch(time){
            case(0):{
                if(RepeatElem.length){
                    newRepeat(RepeatElem[0].value,'repeat')
                }
                if(BreakElem.length){
                    newMinuteRest(BreakElem[0].value,'minute','break')
                    newSecondRest(BreakElem[1].value,'second','break')
                    newHourRest(BreakElem[2].value,'hour','break')
                }
                return dispatch(switchWorkTime())
            }
            case(1):{
                if (WorkElem.length){
                    newMinute(WorkElem[0].value, 'minute','work')
                    newSecond(WorkElem[1].value, 'second','work')
                    newHour(WorkElem[2].value, 'hour','work')}
                if(RepeatElem.length){
                    newRepeat(RepeatElem[0].value,'repeat')
                }
                return dispatch(switchBreakTime())
            }
            case(2):{
                if (WorkElem.length){
                    newMinute(WorkElem[0].value, 'minute','work')
                    newSecond(WorkElem[1].value, 'second','work')
                    newHour(WorkElem[2].value, 'hour','work')}
                else if(BreakElem.length){
                    newMinuteRest(BreakElem[0].value,'minute','break')
                    newSecondRest(BreakElem[1].value,'second','break')
                    newHourRest(BreakElem[2].value,'hour','break')
                }
                return dispatch(switchRepeat())
            }
            default:
            }
        },
        [dispatch, handleOperatorTime, newHour, 
            newHourRest, newMinute, newMinuteRest, 
            newRepeat, newSecond, newSecondRest, 
            switchBreakTime, switchRepeat, switchWorkTime, 
            time])
}