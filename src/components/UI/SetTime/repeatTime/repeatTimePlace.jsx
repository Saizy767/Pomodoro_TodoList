import React from "react";
import { connect } from "react-redux";

import SetTimeText from './setRepeatTime';
import Arrow from '../../../../images/white_arrow.png'
import { repeatChanger } from "../../../../redux/actions/actionChangeRepeat";
import './setTimeText.scss'


const WorkTimePlace = (props) => {
    return (
        <div className='place_ul'>
            <ul>
                <img src={Arrow} alt='Arrow' onClick={()=>(Number(props.repeat)<99) ? props.repeatChanger(Number(props.repeat)+1): props.repeatChanger(0)}
                                                    style={{height:'25%',
                                                    position:'absolute',
                                                    left:'98%',
                                                    top:'50%',
                                                    transform:'translate(-98%,-50%)',
                                                    border:'solid white',
                                                    borderRadius:'10px',
                                                    backgroundColor:'white',
                                                    zIndex: '1'}}></img>
                <SetTimeText textTime='Repeat'
                             value={props.repeat}
                             display='none'
                             width = '50%'
                             height = '100px'
                             heightInput= '90%'
                             leftInput = '50%'
                             placeholder = {props.repeat}
                             transformInput = 'translate(-50%,-50%)'
                            />
                <img src={Arrow} alt='Arrow' onClick={()=>(Number(props.repeat)>0)? props.repeatChanger(Number(props.repeat)-1) : props.repeatChanger(0)}
                                                    style={{height:'25%',
                                                    position:'absolute',
                                                    left:'2%',
                                                    top:'50%',
                                                    transform:'translate(-2%,50%)',
                                                    border:'solid white',
                                                    borderRadius:'10px',
                                                    backgroundColor:'white',
                                                    zIndex: '1',
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