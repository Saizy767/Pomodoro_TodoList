import {React, useCallback} from "react";
import { showWarning } from "../../../redux/actions/actionsWarningMessage";
import {breakHourChanger, breakMinuteChanger, breakSecondChanger} from '../../../redux/actions/actionChangeBreakTimer'
import { connect} from "react-redux";
import './setTimeText.scss'
import { TimeSharing } from "../../../hooks/TimeSharing";


const SetTimeText = (props) => {
    const handleChange = useCallback((elem) => {
        const value = parseInt(elem.target.value.replace(/\D/g, ''))
        TimeSharing(value, 
                    props.maxValue, 
                    props.textTime, 
                    props.breakSecondChanger, 
                    props.breakMinuteChanger, 
                    props.breakHourChanger,
                    props.showWarning)
       },[props.breakHourChanger, props.breakMinuteChanger, 
        props.breakSecondChanger, props.maxValue, 
        props.showWarning, props.textTime])
    return(
        <li className='break_li li'>
            <input className='li__input_break'  value={props.value}
                                                    onChange={handleChange}
                                                    placeholder= {props.placeholder ||  '--'}
                                                    maxLength='2'
                                                style={{width:props.width, height:props.heightInput,
                                                        transform:props.transformInput, left:props.leftInput}}>
            </input>
            <div className='li__time_type' style={{display:props.display}}>{props.textTime}</div>
            <div className='li__time_place' style={{height:props.height}} ></div>
        </li>
    )
}

const mapStateToProps = state =>({
    message: state.warning.message,
    hour: state.breakTimer.hour,
    minute: state.breakTimer.minute,
    second: state.breakTimer.second
  })

const mapDispatchToProps = {
    showWarning,
    breakHourChanger,
    breakMinuteChanger,
    breakSecondChanger
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTimeText)
