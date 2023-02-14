import React, { useState , useEffect, useCallback} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import {Howl} from 'howler';

import Header from '../../components/header/header'
import MiniButton from '../../components/miniButton/miniButton'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TimerSong from '../../song/Timer.mp3'

import './Break.scss'
import classes from '../../styles/box.module.scss'


const Break = (props) => {
  let history = useNavigate()

  const startHour = parseInt(JSON.parse(localStorage.HourR).number)
  const startMinute = parseInt(JSON.parse(localStorage.MinuteR).number)
  const startSecond = parseInt(JSON.parse(localStorage.SecondR).number)

  const [time, setTime]= useState(startHour * 3600 + startMinute * 60 + startSecond)
  let [isPaused, setIsPaused]=useState(false)

  const startTime = startHour * 3600 + startMinute * 60 + startSecond

  let timeRef = React.useRef(time)
  let isPausedRef = React.useRef(isPaused)
  let intervalRef = React.useRef() 

  let road = time * 100 / startTime

  const sound = useCallback(()=> new Howl({
    src: [TimerSong],
    loop: true,
    volume: 1,})
    ,[])
  
  useEffect(()=>{
      if(timeRef.current <= 0){
        sound.play()
      }
    },[sound])

  function stop(){
    return clearInterval(intervalRef.current)
  }

  function pauseChanger(bool) {
    if(time > 0){
      setIsPaused(bool)
      isPausedRef.current = bool
    }
  }

  useEffect(() => {
    if (isPausedRef.current){
      return stop()
    }
    else{
      intervalRef.current = setInterval(() =>
      {
        if (timeRef.current <= 0){
          stop()
          sound.play()
          return history('/breaktime')
        }
        else{
          return setTime(timeRef.current -= 1)
        }
      },1000)
    }
  },
  [isPaused, history, sound])
  
  let hour = time / 3600
  let minute = (time - hour * 3600) / 60 
  let second = time % 60
  
  second = second < 10 ? '0' + second : second
  minute = minute < 10 ? '0' + minute : minute
  hour = hour < 10 ? '0' + hour : hour

  return (
        <div className={classes.background}>
          <div className={classes.box}>
            <div className={classes.box__page}>
            <Link to='/menu' onClick={() => { stop(); localStorage.clear(); sound.stop()}}><Header/></Link>
              <div className={classes.set_place} style={{display:'flex', flexDirection:'column'}}>
                    <span className='set_place__title'>BREAK</span>
                    <div className='set_place__timer'>{hour+ ':' + minute + ':' + second}</div>
                    <ProgressBar road={(100 - road) + '%'}/>
                    <div className='set_place__menu_buttons menu_buttons'>
                      {isPaused
                      ? <MiniButton function = {() =>pauseChanger(false)} text='Start' position='relative' flex='1'/> :
                        <MiniButton function = {() =>pauseChanger(true)} text='Pause' position='relative' flex='1'/>}
                      <Link to='/worktime' style={{position:'relative', flex:1}} onClick={() => {sound.stop(); stop()}}>
                        <MiniButton text='Next'/>
                      </Link>
                    </div>
                </div>
            </div>
            <div className={classes.shadow}></div> 
          </div>
        </div>
      );
    }

export default Break