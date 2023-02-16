import {React,useCallback} from "react";

import { useDispatch} from "react-redux";
import { repeatChanger } from "../../../redux/actions/actionChangeRepeat";
import './setTimeText.scss'

const SetTimeText = (props) => {
    const dispatch = useDispatch()

    const handleChange = useCallback((elem) => {
        const value = elem.target.value.replace(/\D/g, '')
        dispatch(repeatChanger(value))
  },[dispatch])
  
    return(
        <li className='repeat_li li'>
            <input className='li__input_repeat' value={props.value}
                                                    onChange={handleChange}
                                                    placeholder={JSON.parse(localStorage.Repeat).number || '--'} 
                                                    maxLength='2'>
            </input>
            <div className='li__time_type_repeat'>{props.textTime}</div>
            <div className='li__time_repeat'></div>
        </li>
    )
}

export default SetTimeText