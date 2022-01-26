import {React,useCallback} from "react";
import { showWarning } from "../../../../redux/actions/actionsWarningMessage";
import {workHourChanger, workMinuteChanger, workSecondChanger} from '../../../../redux/actions/actionChangeWorkTime'
import { connect} from "react-redux";
import { switchBreakTime } from "../../../../redux/actions/actionSwitchTimePlace";
import { switchWorkTime } from "../../../../redux/actions/actionSwitchTimePlace";
import { switchRepeat } from "../../../../redux/actions/actionSwitchTimePlace";
import './setTimeText.scss'

const SetTimeText = (props) => {
    const handleChange = useCallback((elem) => {
        const value = elem.target.value.replace(/\D/g, '')
        if (Number(value) <= Number(props.maxValue) && props.textTime === 'MINUTES'){
            props.workMinuteChanger(value)
        }
        if (Number(value) <= Number(props.maxValue) && props.textTime === 'HOURS' ){
            props.workHourChanger(value)
        }
        if (Number(value) <= Number(props.maxValue) && props.textTime === 'SECONDS' ){
             props.workSecondChanger(value)
        }
        if (Number(value) > Number(props.maxValue) && props.textTime === 'MINUTES' ){
            props.workMinuteChanger(props.maxValue)
        }
        if (Number(value) > Number(props.maxValue) && props.textTime === 'HOURS' ){
            props.workHourChanger(props.maxValue)
        }
        if (Number(value) > Number(props.maxValue) && props.textTime === 'SECONDS' ){
            props.workSecondChanger(props.maxValue)
        }
        
        if (Number(value) <= Number(props.maxValue)){
        }
        else{
            props.showWarning(props.textTime, props.maxValue)
        }
        
  },[props])
    return(
        <>
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
        </>
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

    switchWorkTime,
    switchBreakTime,
    switchRepeat,
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTimeText)