import React from "react";
import { connect } from "react-redux";

import SetTimeText from './setRepeatTime';
import Arrow from '../../../../images/white_arrow.png'
import { repeatChanger } from "../../../../redux/actions/actionChangeRepeat";
import './setTimeText.scss'


const WorkTimePlace = (props) => {

    const repeatPlus = () =>{
        if(Number(props.repeat)<99){
            props.repeatChanger(Number(props.repeat)+1)
        }
        else{
            props.repeatChanger(0)
        }
    }

    const repeatMinus = () =>{
        if(Number(props.repeat)>0){
            props.repeatChanger(Number(props.repeat)-1)
        }
        else{
            props.repeatChanger(0)
        }
    }
    return (
        <div className='repeat_ul'>
            <ul>
                <img src={Arrow} alt='Arrow' onClick={repeatPlus}
                                                    className='repeat_ul__arrow'></img>
                <SetTimeText textTime='Repeat'
                             value={props.repeat}
                             placeholder = {props.repeat}
                            />
                <img src={Arrow} alt='Arrow' onClick={repeatMinus}
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