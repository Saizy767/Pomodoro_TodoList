import React, {memo, useCallback, useState } from "react";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

import {timesOfPomodora} from '../../data/timesOfPomodoro'
import { switchWorkTime, switchBreakTime, switchRepeat} from "../../redux/actions/actionSwitchTimePlace";
import {useTimeDistribution} from "../../hooks/useTimeDistribution"

import './setTimeHeader.scss'

const SetTimeHeader = memo((props) => {
    let [time, setTime] = useState(0)
    
    const handleOperatorTime = useCallback((operator) =>{
        const counter = operator === '+' ? 1 : -1
        if (operator === '+' && (time >= timesOfPomodora.length - 1)){
            return setTime(0)
        }
        else if (operator === '-' && (time <= 0)){
            return setTime(timesOfPomodora.length - 1)
        }
        else{
            return setTime(time=>time+counter)
        }
    },[time])

    useTimeDistribution(time, 
                        switchWorkTime, 
                        switchBreakTime, 
                        switchRepeat, 
                        handleOperatorTime)
    
    return (
        <div className='set_time_header' style={{paddingTop:props.paddingTop}}>
            <MdKeyboardArrowLeft onClick={() => handleOperatorTime('-')} className='set_time_header__arrow'/>
                <label className='set_time_header__label'>
                    {timesOfPomodora[time].name}
                </label>
            <MdKeyboardArrowRight onClick={() => handleOperatorTime('+')} className='set_time_header__arrow'/>
        </div>
    )
})


export default SetTimeHeader