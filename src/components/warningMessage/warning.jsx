import React from "react";
import warningIcon from '../../images/warningIcon.png'
import './warningMessage.scss'

const Warning = (props) => {
    return(
        <div className='warning_place'>
            <img src={warningIcon} alt='warningIcon' className='icon'></img>
            <span className='text'>You have exceeded the limit of: {props.value} {props.text}</span>
        </div>
    )
}
export default Warning