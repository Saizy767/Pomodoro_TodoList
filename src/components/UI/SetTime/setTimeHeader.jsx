import React, {useEffect, useState } from "react";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'
import { connect } from "react-redux";

import {timesOfPomodora} from '../../../data/data'
import { switchWorkTime } from "../../../redux/actions/actionSwitchTimePlace";
import { switchBreakTime } from "../../../redux/actions/actionSwitchTimePlace"
import { switchRepeat } from "../../../redux/actions/actionSwitchTimePlace"

import './setTimeHeader.scss'

const SetTimeHeader = (props) => {
    let [time, setTime] = useState(0)
    let timeRef = React.useRef(time)
    // work
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
    }
    ,[allMinutes,props])

    useEffect(()=>{
        localStorage.setItem('Second', JSON.stringify(allSeconds))
    }
    ,[allSeconds])

    useEffect(()=>{
        localStorage.setItem('Hour', JSON.stringify(allHours))
    }
    ,[allHours])

    function newMinute(number,time,type){
            let newMinute = {
                number,
                time,
                type
            }
        setAllMinutes((allMinutes) => newMinute)
        }
    
    function newHour(number,time,type){
            let newHour = {
                number,
                time,
                type
            }
        setAllHours((allHours) => newHour)
        }

    function newSecond(number,time,type){ 
            let newSecond = {
                number,
                time,
                type
            }
        setAllSeconds((allSeconds) => newSecond)
        }
    //break
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
    }
    ,[allMinutesRest])

    useEffect(()=>{
        localStorage.setItem('SecondR', JSON.stringify(allSecondsRest))
    }
    ,[allSecondsRest])

    useEffect(()=>{
        localStorage.setItem('HourR', JSON.stringify(allHoursRest))
    }
    ,[allHoursRest])

    function newMinuteRest(number,time,type){
            let newMinuteRest = {
                number,
                time,
                type
            }
        setAllMinutesRest((allMinutesRest) => newMinuteRest)
        }
    
    function newHourRest(number,time,type){
            let newHourRest = {
                number,
                time,
                type
            }
        setAllHoursRest((allHoursRest) => newHourRest)
        }

    function newSecondRest(number,time,type){ 
            let newSecondRest= {
                number,
                time,
                type
            }
        setAllSecondsRest((allSecondsRest) => newSecondRest)
        }
    //repeat
    const [repeat, setRepeat] = useState(
        JSON.parse(localStorage.getItem('Repeat')) || 0
    )
    useEffect(()=>{
        localStorage.setItem('CurrentRepeat', JSON.stringify(0))},[])
    useEffect(()=>{
        localStorage.setItem('Repeat', JSON.stringify(repeat))
    }
    ,[repeat])

    function newRepeat(number,type){
        let newRepeat = {
            number,
            type
        }
    setRepeat((repeat) => newRepeat)
    }

    //else
   useEffect(
        () => {
            if (timeRef.current === 0){
                if(document.getElementsByClassName('main_setTimeClockRepeat__6ktBY').length !== 0){
                    newRepeat(document.getElementsByClassName('main_setTimeClockRepeat__6ktBY')[0].value,'repeat')
                }
                if(document.getElementsByClassName('main_setTimeClockBreak__UIRp6').length !==0){
                    newMinuteRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[0].value,'minute','break')
                    newSecondRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[1].value,'second','break')
                    newHourRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[2].value,'hour','break')
                }
                return props.switchWorkTime()
            }
            else if (timeRef.current === 1){
                if (document.getElementsByClassName('main_setTimeClockWork__3tMXF').length !== 0){
                newMinute(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[0].value, 'minute','work')
                newSecond(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[1].value, 'second','work')
                newHour(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[2].value, 'hour','work')}
                if(document.getElementsByClassName('main_setTimeClockRepeat__6ktBY').length !==0){
                newRepeat(document.getElementsByClassName('main_setTimeClockRepeat__6ktBY')[0].value,'repeat')
                }
                return props.switchBreakTime()
            }
            else if (timeRef.current === 2){
                if (document.getElementsByClassName('main_setTimeClockWork__3tMXF').length !== 0){
                    newMinute(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[0].value, 'minute','work')
                    newSecond(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[1].value, 'second','work')
                    newHour(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[2].value, 'hour','work')}
            }
            if(document.getElementsByClassName('main_setTimeClockBreak__UIRp6').length !==0){
                newMinuteRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[0].value,'minute','break')
                newSecondRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[1].value,'second','break')
                newHourRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[2].value,'hour','break')
            }
                return props.switchRepeat()
        },
        [props,time])
    const handlePlusTime = () =>{

        if (time >= timesOfPomodora.length - 1){
            setTime(0)
            timeRef.current = 0
        }
        else{
            setTime(time+1)
            timeRef.current++
        }
    }
    const handleMinusTime = () =>{
        if (time <= 0){
            setTime(timesOfPomodora.length - 1)
            timeRef.current = timesOfPomodora.length - 1
        }
        else{
            setTime(time-1)
            timeRef.current--
        }
    }

    return (
        <header className='header' style={{paddingTop:props.paddingTop}}>
            <MdKeyboardArrowLeft onClick={()=>handleMinusTime()} className='arrow'/>
                <label className='label'>
               {timesOfPomodora[time].name}
                </label>
            <MdKeyboardArrowRight onClick={()=>handlePlusTime()} className='arrow'/>
        </header>
    )
}

const mapDispatchToProps = {
    switchWorkTime,
    switchBreakTime,
    switchRepeat,
}

export default connect(null,mapDispatchToProps)(SetTimeHeader)