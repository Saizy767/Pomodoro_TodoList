import React from "react";
import { connect } from "react-redux";

import SetTimeText from './setBreakTimeText';
import './setTimeText.scss'


const BreakTimePlace = (props) => {
    return (
        <div className='break_ul'>
            <ul>
                <SetTimeText textTime='MINUTES'
                             maxValue='60'
                             placeholder = {JSON.parse(localStorage.MinuteR).number}
                             value={props.minute}/>
                <SetTimeText textTime='SECONDS'
                             maxValue='60'
                             placeholder = {JSON.parse(localStorage.SecondR).number}
                             value={props.second}/>
                <SetTimeText textTime='HOURS'
                             maxValue='24' 
                             placeholder = {JSON.parse(localStorage.HourR).number}
                             value={props.hour}/>
            </ul>
        </div>
    )
}
const mapStateToProps = state => ({
    hour:state.breakTimer.breakHour,
    minute:state.breakTimer.breakMinute,
    second:state.breakTimer.breakSecond,
  })


export default connect(mapStateToProps,null)(BreakTimePlace)