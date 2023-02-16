import {React,useCallback} from "react";
import { showWarning } from "../../../redux/actions/actionsWarningMessage";
import {workHourChanger, workMinuteChanger, workSecondChanger} from '../../../redux/actions/actionChangeWorkTime'
import { useDispatch} from "react-redux";
import './setTimeText.scss'
import { TimeSharing } from "../../../hooks/TimeSharing";

const SetTimeText = (props) => {
    const dispatch = useDispatch()
    const handleChange = useCallback((elem) => {
        const value = elem.target.value.replace(/\D/g, '')
        TimeSharing(value, 
            props.maxValue,
            props.textTime,
            dispatch(workSecondChanger),
            dispatch(workMinuteChanger),
            dispatch(workHourChanger),
            dispatch(showWarning))
    },[dispatch, props.maxValue, props.textTime])
   
    return(
        <li className='work_ul__li li'>
            <input className='li__input_work' value={props.value}
                                                onChange={handleChange}
                                                placeholder={props.placeholder || '--'} 
                                                maxLength='2'
                    style={{width:props.width, height:props.heightInput, 
                        transform:props.transformInput, left:props.leftInput}}>
            </input>
            <div className='li__time_type' style={{display:props.display}}>{props.textTime}</div>
            <div className='li__time_place' style={{height:props.height}}></div>
        </li>
    )
}

export default SetTimeText