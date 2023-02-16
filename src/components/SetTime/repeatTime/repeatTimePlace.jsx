import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import SetTimeText from './setRepeatTime';
import Arrow from '../../../images/white_arrow.png'
import { repeatChanger } from "../../../redux/actions/actionChangeRepeat";
import './setTimeText.scss'


const WorkTimePlace = () => {
    const dispatch = useDispatch()
    const {repeat} = useSelector(state => state.repeatTimer)

    const repeatOperator = useCallback((operator)=>{
        const countRepeat = parseInt(repeat)
        if (operator === '+' && countRepeat < 99){
            dispatch(repeatChanger(countRepeat+1))
        }
        else if (operator === '-' && countRepeat < 99){
            dispatch(repeatChanger(countRepeat-1))
        }
        else{
            dispatch(repeatChanger(0))
        }
    },[dispatch, repeat])
    
    return (
        <div className='repeat_ul'>
            <ul>
                <img src={Arrow} alt='Arrow' onClick={() => repeatOperator('+')}
                                                    className='repeat_ul__arrow'></img>
                <SetTimeText textTime='Repeat'
                             value={repeat}
                             placeholder = {repeat}
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

export default WorkTimePlace