import './Break.scss'
import classes from '../../box.module.scss'
import Header from '../../components/UI/header/header'
import React, { useState } from 'react'
import MiniButton from '../../components/UI/miniButton/miniButton'
import { Link, useNavigate} from 'react-router-dom';
import ProgressBar from '../../components/UI/ProgressBar/ProgressBar';
import { connect } from 'react-redux';
import { breakHourChanger,breakMinuteChanger,breakSecondChanger} from '../../redux/actions/actionChangeBreakTimer';





const Break = (props) => {
    let history = useNavigate()
    const startHour= JSON.parse(localStorage.HourR).number
    const startMinute= JSON.parse(localStorage.MinuteR).number
    const startSecond= JSON.parse(localStorage.SecondR).number
    const [time, setTime]= useState(Number(startHour) * 3600 + Number(startMinute) * 60 + Number(startSecond))
    const startTime = Number(startHour) * 3600 + Number(startMinute) * 60 + Number(startSecond)
    let [isPaused, setIsPaused]=useState(false)
    let timeRef = React.useRef(time)
    let isPausedRef = React.useRef(isPaused)
    let intervalRef = React.useRef() 
    let road = (time* 100)/startTime
    
    React.useEffect(() => {
      if (isPausedRef.current){
        return stop()
      }
      else{
      intervalRef.current = setInterval(() =>
      {
        if (timeRef.current <= 0){
          stop()
          return history('/breaktime')
        }
        else{
        console.log('start')
        return start()
        }
      },1000)}
},
[isPaused, history])
      function start(){
        console.log('start was called')
        return setTime(timeRef.current-=1)
      }
      function stop(){
        console.log('stop was called')
        return clearInterval(intervalRef.current)
      }
      function falseChanger() {
        if(time>0){
        setIsPaused(false)
        isPausedRef.current = false}
      }
      function trueChanger() {
        if (time>0){
        setIsPaused(true)
        isPausedRef.current = true}
      }

    let hour = Math.floor(time / 3600)
    let minute = Math.floor((time - (hour * 3600)) / 60 )
    let second = time % 60
    if(second < 10) second = '0'+ second
    if(minute < 10) minute = '0'+ minute
    if(hour < 10) hour = '0'+ hour
    console.log(road)
  return (
        <div className={classes.background}>
          <div className={classes.box}>
            <div className={classes.box__page}>
            <Link to='/menu' onClick={() => { stop(); localStorage.clear();}}><Header/></Link>
              <div className={classes.set_place} style={{display:'flex', flexDirection:'column'}}>
                    <span className='title'>BREAK</span>
                    <div className='time'>{hour+ ':' + minute + ':' + second}</div>
                    <ProgressBar road={(100 - road) + '%'}/>
                    <div className='menu_buttons'>
                      {isPaused
                      ? <MiniButton function = {() =>falseChanger()} text='Start' position='relative' flex='1'/> :
                      <MiniButton function = {() =>trueChanger()} text='Pause' position='relative' flex='1'/>}
                      <Link to='/worktime' onClick={() => stop()} style={{position:'relative', flex:1}}>
                        <MiniButton text='Next'/>
                      </Link>
                    </div>
                </div>
            </div>
            <div className={classes.box__shadow}></div> 
          </div>
        </div>
      );
    }
    
    const mapStateToProps = state =>({
      hour: state.breakTimer.breakHour,
      minute: state.breakTimer.breakMinute,
      second: state.breakTimer.breakSecond,

    })
    const mapDispatchToProps = {
      breakHourChanger,
      breakMinuteChanger,
      breakSecondChanger
    }

export default connect(mapStateToProps, mapDispatchToProps)(Break)