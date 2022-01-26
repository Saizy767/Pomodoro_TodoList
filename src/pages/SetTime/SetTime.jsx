import {React,useEffect,useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/UI/header/header'
import MiniButton from '../../components/UI/miniButton/miniButton'
import Warning from '../../components/UI/warningMessage/warning';
import SetTimeHeader from '../../components/UI/SetTime/setTimeHeader'
import WorkTimePlace from '../../components/UI/SetTime/workTime/workTimePlace';
import BreakTimePlace from '../../components/UI/SetTime/breakTime/breakTimePlace';
import classes from '../../box.module.scss'
import Repeat from '../../components/UI/SetTime/repeatTime/repeatTimePlace'


const SetTime = (props) =>{
    const [allMinutes, setAllMinutes] = useState(
        JSON.parse(localStorage.getItem('Minute')) || ''
    )
    const [allHours, setAllHours] = useState(
        JSON.parse(localStorage.getItem('Hour')) || ''
    )
    const [allSeconds, setAllSeconds] = useState(
        JSON.parse(localStorage.getItem('Second')) || ''
    )
    
    useEffect(()=>{
        localStorage.setItem('Minute', JSON.stringify(allMinutes))
    }
    ,[allMinutes])
    
    useEffect(()=>{
        localStorage.setItem('Second', JSON.stringify(allSeconds))
    }
    ,[allSeconds])
    
    useEffect(()=>{
        localStorage.setItem('Hour', JSON.stringify(allHours))
    }
    ,[allHours])
    
    function newMinute(number,time,type){
            let newMinute = {
                number,
                time,
                type
            }
        setAllMinutes((allMinutes) => newMinute)
        }
    
    function newHour(number,time,type){
            let newHour = {
                number,
                time,
                type
            }
        setAllHours((allHours) => newHour)
        }
    
    function newSecond(number,time,type){ 
            let newSecond = {
                number,
                time,
                type
            }
        setAllSeconds((allSeconds) => newSecond)
        }
    //break
    const [allMinutesRest, setAllMinutesRest] = useState(
        JSON.parse(localStorage.getItem('MinuteR')) || ''
    )
    const [allHoursRest, setAllHoursRest] = useState(
        JSON.parse(localStorage.getItem('HourR')) || ''
    )
    const [allSecondsRest, setAllSecondsRest] = useState(
        JSON.parse(localStorage.getItem('SecondR')) || ''
    )
    
    useEffect(()=>{
        localStorage.setItem('MinuteR', JSON.stringify(allMinutesRest))
    }
    ,[allMinutesRest])
    
    useEffect(()=>{
        localStorage.setItem('SecondR', JSON.stringify(allSecondsRest))
    }
    ,[allSecondsRest])
    
    useEffect(()=>{
        localStorage.setItem('HourR', JSON.stringify(allHoursRest))
    }
    ,[allHoursRest])
    
    function newMinuteRest(number,time,type){
            let newMinuteRest = {
                number,
                time,
                type
            }
        setAllMinutesRest((allMinutesRest) => newMinuteRest)
        }
    
    function newHourRest(number,time,type){
            let newHourRest = {
                number,
                time,
                type
            }
        setAllHoursRest((allHoursRest) => newHourRest)
        }
    
    function newSecondRest(number,time,type){ 
            let newSecondRest= {
                number,
                time,
                type
            }
        setAllSecondsRest((allSecondsRest) => newSecondRest)
        }
    //repeat
    const [repeat, setRepeat] = useState(
        JSON.parse(localStorage.getItem('Repeat')) || 0
    )
    useEffect(()=>{
        localStorage.setItem('CurrentRepeat', JSON.stringify(0))},[])
    useEffect(()=>{
        localStorage.setItem('Repeat', JSON.stringify(repeat))
    }
    ,[repeat])
    
    function newRepeat(number,type){
        let newRepeat = {
            number,
            type
        }
    setRepeat((repeat) => newRepeat)
      }
        function setAllTime(){
          if(document.getElementsByClassName('li__input_break').length !==0){
            console.log('break set')
            newMinuteRest(document.getElementsByClassName('li__input_break')[0].value,'minute','break')
            newSecondRest(document.getElementsByClassName('li__input_break')[1].value,'second','break')
            newHourRest(document.getElementsByClassName('li__input_break')[2].value,'hour','break')
          }
          if(document.getElementsByClassName('li__input_repeat').length !== 0){
            console.log('repeat set')
            newRepeat(document.getElementsByClassName('li__input_repeat')[0].value,'repeat')
          }
          if(document.getElementsByClassName('li__input_work').length !== 0){
            newMinute(document.getElementsByClassName('li__input_work')[0].value, 'minute','work')
            newSecond(document.getElementsByClassName('li__input_work')[1].value, 'second','work')
            newHour(document.getElementsByClassName('li__input_work')[2].value, 'hour','work')
            console.log()
          }
        }
    

  return(
    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
          <Link to='/menu' onClick={()=>localStorage.clear()}>
              <Header/>
          </Link>
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
  
  const mapDispatchToProps = {
  }

export default connect(mapStateToProps, mapDispatchToProps)(SetTime)