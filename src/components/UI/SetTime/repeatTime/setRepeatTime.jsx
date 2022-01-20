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
        <li className='place_li'>
            <input className='time_setter' value={props.value}
                                                    onChange={handleChange}
                                                    placeholder={JSON.parse(localStorage.Repeat).number || '--'} 
                                                    maxLength='2'
                    style={{width:props.width, height:props.heightInput, transform:props.transformInput, left:props.leftInput}} 
        ></input>
            <div className='time_type' style={{display:props.display}}>{props.textTime}</div>
            <div className='place_time' style={{height:props.height}}></div>
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