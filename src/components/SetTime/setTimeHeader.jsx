import React, {useCallback, useState } from "react";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'
import { connect } from "react-redux";

import {timesOfPomodora} from '../../data/timesOfPomodoro'
import { switchWorkTime, switchBreakTime, switchRepeat} from "../../redux/actions/actionSwitchTimePlace";
import {useTimeDistribution} from "../../hooks/useTimeDistribution"

import './setTimeHeader.scss'

const SetTimeHeader = (props) => {
    let [time, setTime] = useState(0)
    let timeRef = React.useRef(time)

    const handleOperatorTime = useCallback((operator) =>{
        const counter = operator === '+' ? 1 : -1
        if (operator === '+' && (time >= timesOfPomodora.length - 1)){
            setTime(0)
            timeRef.current = 0
        }
        else if (operator === '-' && (time <= 0)){
            setTime(timesOfPomodora.length - 1)
            timeRef.current = timesOfPomodora.length - 1
        }
        else{
            setTime(time=>time+counter)
            timeRef.current+=counter
        }
    },[time, timeRef])

    useTimeDistribution(timeRef, switchWorkTime, switchBreakTime, switchRepeat, handleOperatorTime)
    
    return (
        <div className='set_time_header' style={{paddingTop:props.paddingTop}}>
            <MdKeyboardArrowLeft onClick={()=>handleOperatorTime('-')} className='set_time_header__arrow'/>
                <label className='set_time_header__label'>
                    {timesOfPomodora[time].name}
                </label>
            <MdKeyboardArrowRight onClick={()=>handleOperatorTime('+')} className='set_time_header__arrow'/>
        </div>
    )
}

const mapDispatchToProps = {
    switchWorkTime,
    switchBreakTime,
    switchRepeat,
}

export default connect(null,mapDispatchToProps)(SetTimeHeader)