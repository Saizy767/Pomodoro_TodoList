import {React, useCallback} from "react";
import { showWarning } from "../../../redux/actions/actionsWarningMessage";
import {breakHourChanger, breakMinuteChanger, breakSecondChanger} from '../../../redux/actions/actionChangeBreakTimer'
import { useDispatch} from "react-redux";
import './setTimeText.scss'
import { TimeSharing } from "../../../hooks/TimeSharing";


const SetTimeText = (props) => {
    const dispatch = useDispatch()
    const handleChange = useCallback((elem) => {
        const value = Number(elem.target.value.replace(/\D/g, '')) || 0
        TimeSharing(value, 
                    props.maxValue, 
                    props.textTime, 
                    dispatch(breakSecondChanger()), 
                    dispatch(breakMinuteChanger()), 
                    dispatch(breakHourChanger()),
                    dispatch(showWarning()))
       },[dispatch, props.maxValue, props.textTime])
       
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


export default SetTimeText
