import React from "react";
import { useSelector } from "react-redux";

import SetTimeText from './setBreakTimeText';
import './setTimeText.scss'


const BreakTimePlace = () => {
    const {minute, second, hour} = useSelector(state => state.breakTimer)
    return (
        <div className='break_ul'>
            <ul>
                <SetTimeText textTime='MINUTES'
                             maxValue='60'
                             placeholder = {JSON.parse(localStorage.MinuteR).number}
                             value={minute}/>
                <SetTimeText textTime='SECONDS'
                             maxValue='60'
                             placeholder = {JSON.parse(localStorage.SecondR).number}
                             value={second}/>
                <SetTimeText textTime='HOURS'
                             maxValue='24' 
                             placeholder = {JSON.parse(localStorage.HourR).number}
                             value={hour}/>
            </ul>
        </div>
    )
}


export default BreakTimePlace