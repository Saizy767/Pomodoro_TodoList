import {React,useCallback} from "react";
import { showWarning } from "../../../redux/actions/actionsWarningMessage";
import {workHourChanger, workMinuteChanger, workSecondChanger} from '../../../redux/actions/actionChangeWorkTime'
import { connect} from "react-redux";
import './setTimeText.scss'
import { TimeSharing } from "../../../hooks/TimeSharing";

const SetTimeText = (props) => {
    const handleChange = useCallback((elem) => {
        const value = elem.target.value.replace(/\D/g, '')
        TimeSharing(value, 
            props.maxValue,
            props.textTime,
            props.workSecondChanger,
            props.workMinuteChanger,
            props.workHourChanger,
            props.showWarning)
    },[props.maxValue, props.showWarning, props.textTime,
        props.workHourChanger, props.workMinuteChanger, props.workSecondChanger])
   
    return(
        <li className='work_ul__li li'>
            <input className='li__input_work' value={props.value}
                                                    onChange={handleChange}
                                                    placeholder={props.placeholder || '--'} 
                                                    maxLength='2'
                    style={{width:props.width, height:props.heightInput, transform:props.transformInput, left:props.leftInput}} 
        ></input>
            <div className='li__time_type' style={{display:props.display}}>{props.textTime}</div>
            <div className='li__time_place' style={{height:props.height}}></div>
        </li>
    )
}

const mapStateToProps = state =>({
    message: state.warning.message,

    hour: state.workTimer.hour,
    minute: state.workTimer.minute,
    second: state.workTimer.second,

  })

const mapDispatchToProps = {
    showWarning,
    workHourChanger,
    workMinuteChanger,
    workSecondChanger,
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTimeText)