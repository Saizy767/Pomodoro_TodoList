import React, { useCallback } from "react";
import { connect } from "react-redux";

import SetTimeText from './setRepeatTime';
import Arrow from '../../../images/white_arrow.png'
import { repeatChanger } from "../../../redux/actions/actionChangeRepeat";
import './setTimeText.scss'


const WorkTimePlace = (props) => {

    const repeatOperator = useCallback((operator)=>{
        const countRepeat = parseInt(props.repeat)
        if (operator === '+' && countRepeat < 99){
            props.repeatChanger(countRepeat+1)
        }
        else if (operator === '-' && countRepeat < 99){
            props.repeatChanger(countRepeat-1)
        }
        else{
            props.repeatChanger(0)
        }
    },[props])
    
    return (
        <div className='repeat_ul'>
            <ul>
                <img src={Arrow} alt='Arrow' onClick={() => repeatOperator('+')}
                                                    className='repeat_ul__arrow'></img>
                <SetTimeText textTime='Repeat'
                             value={props.repeat}
                             placeholder = {props.repeat}
                            />
                <img src={Arrow} alt='Arrow' onClick={() => repeatOperator('-')}
                                                    className='repeat_ul__arrow'
                                                    style={{
                                                    left:'2%',
                                                    transform:'translate(-2%,70%)',
                                                    rotate:'180deg',
                                                    }}></img>
            </ul>
        </div>
    )
}
const mapStateToProps = state => ({
    repeat: state.repeatTimer.time
  })

const mapDispatchToProps = {
    repeatChanger,
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkTimePlace)