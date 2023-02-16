import React from "react";
import { useSelector } from "react-redux";

import SetTimeText from './setTimeText';
import './setTimeText.scss'


const WorkTimePlace = () => {
    const {minute, second, hour} = useSelector(state => state.workTimer)
    return (
        <div className='work_ul'>
            <ul>
                <SetTimeText    textTime='MINUTES'
                                maxValue='60'
                                placeholder = {JSON.parse(localStorage.Minute).number}
                                value={minute}/>
                <SetTimeText    textTime='SECONDS'
                                maxValue='60'
                                placeholder = {JSON.parse(localStorage.Second).number}
                                value={second}/>
                <SetTimeText    textTime='HOURS'
                                maxValue='24'
                                placeholder = {JSON.parse(localStorage.Hour).number}
                                value={hour}/>
            </ul>
        </div>
        
    )
}

export default WorkTimePlace