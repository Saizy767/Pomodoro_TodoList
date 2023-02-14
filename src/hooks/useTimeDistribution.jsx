import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

export const useTimeDistribution = (timeRef, switchWorkTime, switchBreakTime, switchRepeat, handleOperatorTime) => {
    const dispatch = useDispatch()
    
    let [allMinutes, setAllMinutes] = useState(
        JSON.parse(localStorage.getItem('Minute')) || ''
    )
    let [allHours, setAllHours] = useState(
        JSON.parse(localStorage.getItem('Hour')) || ''
    )
    let [allSeconds, setAllSeconds] = useState(
        JSON.parse(localStorage.getItem('Second')) || ''
    )

    useEffect(()=>{
        localStorage.setItem('Minute', JSON.stringify(allMinutes))
    },[allMinutes])

    useEffect(()=>{
        localStorage.setItem('Second', JSON.stringify(allSeconds))
    },[allSeconds])

    useEffect(()=>{
        localStorage.setItem('Hour', JSON.stringify(allHours))
    },[allHours])

    function newMinute(number,time,type){
            let newMinute = {
                number,
                time,
                type
            }
        setAllMinutes(() => newMinute)
        }
    
    function newHour(number,time,type){
            let newHour = {
                number,
                time,
                type
            }
        setAllHours(() => newHour)
        }

    function newSecond(number,time,type){ 
            let newSecond = {
                number,
                time,
                type
            }
        setAllSeconds(() => newSecond)
        }

    const [allMinutesRest, setAllMinutesRest] = useState(
        JSON.parse(localStorage.getItem('MinuteR')) || ''
    )
    const [allHoursRest, setAllHoursRest] = useState(
        JSON.parse(localStorage.getItem('HourR')) || ''
    )
    const [allSecondsRest, setAllSecondsRest] = useState(
        JSON.parse(localStorage.getItem('SecondR')) || ''
    )

    useEffect(()=>{
        localStorage.setItem('MinuteR', JSON.stringify(allMinutesRest))
    },[allMinutesRest])

    useEffect(()=>{
        localStorage.setItem('SecondR', JSON.stringify(allSecondsRest))
    },[allSecondsRest])

    useEffect(()=>{
        localStorage.setItem('HourR', JSON.stringify(allHoursRest))
    },[allHoursRest])

    function newMinuteRest(number,time,type){
            let newMinuteRest = {
                number,
                time,
                type
            }
        setAllMinutesRest(() => newMinuteRest)
        }
    
    function newHourRest(number,time,type){
            let newHourRest = {
                number,
                time,
                type
            }
        setAllHoursRest(() => newHourRest)
        }

    function newSecondRest(number,time,type){ 
            let newSecondRest= {
                number,
                time,
                type
            }
        setAllSecondsRest(() => newSecondRest)
        }
    
    const [repeat, setRepeat] = useState(
        JSON.parse(localStorage.getItem('Repeat')) || 0
    )
    useEffect(()=>{
        localStorage.setItem('CurrentRepeat', JSON.stringify(0))},[])
    useEffect(()=>{
        localStorage.setItem('Repeat', JSON.stringify(repeat))
    },[repeat])

    function newRepeat(number,type){
        let newRepeat = {
            number,
            type
        }
    setRepeat(() => newRepeat)
    }

   useEffect(
        () => {
            if (timeRef.current === 0){
                if(document.getElementsByClassName('li__input_repeat').length !== 0){
                    newRepeat(document.getElementsByClassName('li__input_repeat')[0].value,'repeat')
                }
                if(document.getElementsByClassName('li__input_break').length !==0){
                    newMinuteRest(document.getElementsByClassName('li__input_break')[0].value,'minute','break')
                    newSecondRest(document.getElementsByClassName('li__input_break')[1].value,'second','break')
                    newHourRest(document.getElementsByClassName('li__input_break')[2].value,'hour','break')
                }
                return dispatch(switchWorkTime())
            }
            else if (timeRef.current === 1){
                if (document.getElementsByClassName('li__input_work').length !== 0){
                newMinute(document.getElementsByClassName('li__input_work')[0].value, 'minute','work')
                newSecond(document.getElementsByClassName('li__input_work')[1].value, 'second','work')
                newHour(document.getElementsByClassName('li__input_work')[2].value, 'hour','work')}
                if(document.getElementsByClassName('li__input_repeat').length !==0){
                newRepeat(document.getElementsByClassName('li__input_repeat')[0].value,'repeat')
                }
                return dispatch(switchBreakTime())
            }
            else if (timeRef.current === 2){
                if (document.getElementsByClassName('li__input_work').length !== 0){
                    newMinute(document.getElementsByClassName('li__input_work')[0].value, 'minute','work')
                    newSecond(document.getElementsByClassName('li__input_work')[1].value, 'second','work')
                    newHour(document.getElementsByClassName('li__input_work')[2].value, 'hour','work')}
            }
            if(document.getElementsByClassName('li__input_break').length !==0){
                newMinuteRest(document.getElementsByClassName('li__input_break')[0].value,'minute','break')
                newSecondRest(document.getElementsByClassName('li__input_break')[1].value,'second','break')
                newHourRest(document.getElementsByClassName('li__input_break')[2].value,'hour','break')
            }
                return dispatch(switchRepeat())
        },
        [switchBreakTime,switchRepeat,switchWorkTime, dispatch, timeRef, handleOperatorTime])
}