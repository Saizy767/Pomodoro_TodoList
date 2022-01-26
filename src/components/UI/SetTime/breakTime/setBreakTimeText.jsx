import {React, useCallback} from "react";
import { showWarning } from "../../../../redux/actions/actionsWarningMessage";
import {breakHourChanger, breakMinuteChanger, breakSecondChanger} from '../../../../redux/actions/actionChangeBreakTimer'
import { connect} from "react-redux";
import './setTimeText.scss'


const SetTimeText = (props) => {
    const handleChange = useCallback((elem) => {
        const value = elem.target.value.replace(/\D/g, '')
        if (Number(value) <= Number(props.maxValue) && props.textTime === 'MINUTES'){
            props.breakMinuteChanger(value)
        }
        if (Number(value) <= Number(props.maxValue) && props.textTime === 'HOURS' ){
            props.breakHourChanger(value)
        }
        if (Number(value) <= Number(props.maxValue) && props.textTime === 'SECONDS' ){
             props.breakSecondChanger(value)
        }
        if (Number(value) > Number(props.maxValue) && props.textTime === 'MINUTES' ){
            props.breakMinuteChanger(props.maxValue)
        }
        if (Number(value) > Number(props.maxValue) && props.textTime === 'HOURS' ){
            props.breakHourChanger(props.maxValue)
        }
        if (Number(value) > Number(props.maxValue) && props.textTime === 'SECONDS' ){
            props.breakSecondChanger(props.maxValue)
        }
        
        if (Number(value) <= Number(props.maxValue)){
        }
        else{
            props.showWarning(props.textTime, props.maxValue)
        }
        
  },[props])
    return(
        <>
        <li className='break_li li'>
            <input className='li__input_break' value={props.value}
                                                    onChange={handleChange}
                                                    placeholder= {props.placeholder ||  '--'}
                                                    maxLength='2'
                    style={{width:props.width, height:props.heightInput, transform:props.transformInput, left:props.leftInput}} 
        ></input>
            <div className='li__time_type' style={{display:props.display}}>{props.textTime}</div>
            <div className='li__time_place' style={{height:props.height}} ></div>
        </li>
        {console.log(JSON.parse(localStorage.MinuteR).number + ' child')}
        </>
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
