import React from "react";
import { connect } from "react-redux";

import SetTimeText from './setTimeText';
import './setTimeText.scss'


const WorkTimePlace = (props) => {
    return (
        <div className='place_ul'>
            <ul>
                <SetTimeText    textTime='MINUTES'
                                maxValue='60'
                                placeholder = {JSON.parse(localStorage.Minute).number}
                                value={props.minute}/>
                <SetTimeText    textTime='SECONDS'
                                maxValue='60'
                                placeholder = {JSON.parse(localStorage.Second).number}
                                value={props.second}/>
                <SetTimeText    textTime='HOURS'
                                maxValue='24'
                                placeholder = {JSON.parse(localStorage.Hour).number}
                                value={props.hour}/>
            </ul>
        </div>
        
    )
}
const mapStateToProps = state => ({
    hour: state.workTimer.hour,
    minute:state.workTimer.minute,
    second:state.workTimer.second,

    workTime: state.switchTimer.workTime,
    breakTime: state.switchTimer.breakTime,
    repeat: state.switchTimer.repeat,
  })


export default connect(mapStateToProps,null)(WorkTimePlace)