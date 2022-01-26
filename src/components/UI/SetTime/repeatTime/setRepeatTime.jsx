import {React,useCallback} from "react";

import { connect} from "react-redux";
import { repeatChanger } from "../../../../redux/actions/actionChangeRepeat";
import './setTimeText.scss'

const SetTimeText = (props) => {
    const handleChange = useCallback((elem) => {
        const value = elem.target.value.replace(/\D/g, '')
        props.repeatChanger(value)
  },[props])
    return(
        <>
        <li className='repeat_li li'>
            <input className='li__input_repeat' value={props.value}
                                                    onChange={handleChange}
                                                    placeholder={JSON.parse(localStorage.Repeat).number || '--'} 
                                                    maxLength='2'
        ></input>
            <div className='li__time_type_repeat'>{props.textTime}</div>
            <div className='li__time_repeat'></div>
        </li>
        </>
    )
}

const mapStateToProps = state =>({
    repeat: state.repeatTimer.time
  })

const mapDispatchToProps = {
    repeatChanger,
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTimeText)