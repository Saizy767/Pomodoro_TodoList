import {React,useCallback,useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { useSetTime } from '../../hooks/useSetTime';

import Header from '../../components/header/header'
import MiniButton from '../../components/miniButton/miniButton'
import Warning from '../../components/warningMessage/warning';
import SetTimeHeader from '../../components/SetTime/setTimeHeader'
import WorkTimePlace from '../../components/SetTime/workTime/workTimePlace';
import BreakTimePlace from '../../components/SetTime/breakTime/breakTimePlace';
import classes from '../../styles/box.module.scss'
import Repeat from '../../components/SetTime/repeatTime/repeatTimePlace'


const SetTime = (props) =>{
    const newMinute = useSetTime('Minute')
    const newHour = useSetTime('Hour')
    const newSecond = useSetTime('Second')

    const newMinuteRest = useSetTime('MinuteR')
    const newHourRest = useSetTime('HourR')
    const newSecondRest = useSetTime('SecondR')

    const newRepeat = useSetTime('Repeat')

    useEffect(()=>{
        localStorage.setItem('CurrentRepeat', JSON.stringify(0))},[])
    
    const setAllTime= useCallback(()=>{
        const WorkElem = document.getElementsByClassName('li__input_work')
        const BreakElem = document.getElementsByClassName('li__input_break')
        const RepeatElem = document.getElementsByClassName('li__input_repeat')

        if(BreakElem.length){
            newMinuteRest(BreakElem[0].value,'minute','break')
            newSecondRest(BreakElem[1].value,'second','break')
            newHourRest(BreakElem[2].value,'hour','break')
        }
        if(RepeatElem.length){
            newRepeat(RepeatElem[0].value,'repeat')
        }
        if(WorkElem.length){
            newMinute(WorkElem[0].value, 'minute','work')
            newSecond(WorkElem[1].value, 'second','work')
            newHour(WorkElem[2].value, 'hour','work')
          }
        },[newHour, newHourRest, newMinute, newMinuteRest, newRepeat, newSecond, newSecondRest])
    
  return(
    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
              <Header to={'/menu'} onClick={()=>localStorage.clear()}/>
          <div className={classes.set_place} style={{display:'block'}}>
            <SetTimeHeader paddingTop='10%' />
              {props.workTime && <WorkTimePlace/>}
              {props.breakTime && <BreakTimePlace/>}
              {props.repeat && <Repeat/>}
            <Link to='/worktime' onMouseUp={()=> setAllTime()}> 
              <MiniButton text='START'/>
            </Link>
            </div>
        </div>
        <div className={classes.shadow}></div>
      </div>
      {props.message && <Warning text={props.text} value={props.value}/>}
    </div>
  );
  }

  const mapStateToProps = state => ({
    message : state.warning.message,
    text: state.warning.text,
    value: state.warning.value,

    workTime: state.switchTimer.workTime,
    breakTime: state.switchTimer.breakTime,
    repeat: state.switchTimer.repeat,
  })
  

export default connect(mapStateToProps, null)(SetTime)