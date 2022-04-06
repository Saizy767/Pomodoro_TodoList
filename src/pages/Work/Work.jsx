import React, { useState, useEffect, useMemo } from 'react'
import { Link} from 'react-router-dom';
import {Howl} from 'howler';

import Header from '../../components/UI/header/header'
import MiniButton from '../../components/UI/miniButton/miniButton'
import ProgressBar from '../../components/UI/ProgressBar/ProgressBar';
import TimerSong from '../../song/Timer.mp3'

import classes from '../../box.module.scss'
import './Work.scss'


const Work = (props) => {
    const startHour= JSON.parse(localStorage.Hour).number
    const startMinute= JSON.parse(localStorage.Minute).number
    const startSecond= JSON.parse(localStorage.Second).number

    const [time, setTime]= useState(Number(startHour) * 3600 + Number(startMinute) * 60 + Number(startSecond))
    const startTime = Number(startHour) * 3600 + Number(startMinute) * 60 + Number(startSecond)
    const [isPaused, setIsPaused]=useState(false)

    let timeRef = React.useRef(time)
    let isPausedRef = React.useRef(isPaused)
    let intervalRef = React.useRef()
    
    let road = (time * 100)/startTime
    let counter = 1

    const [currentRepeat, setCurrentRepeat] = useState(
      JSON.parse(localStorage.getItem('CurrentRepeat')) || 1
  )
    const [currentTask, setCurrentTask] = useState(
      JSON.parse(localStorage.getItem('CurrentTask')) || 0
    )
    useEffect(()=>{
      localStorage.setItem('CurrentRepeat', JSON.stringify(currentRepeat))
    }
    ,[currentRepeat])

    useEffect(()=>{
      localStorage.setItem('CurrentTask', JSON.stringify(currentTask))
    }
    ,[currentTask])

    const sound = useMemo(()=> new Howl({
        src: [TimerSong],
        loop: true,
        volume: 1,})
        ,[])
    
    useEffect(() => {
      if (isPausedRef.current){
        return stop()
      }
      else{
      intervalRef.current = setInterval(() =>
      {
        if (timeRef.current <= 0){
          sound.play()
          stop()
        }
        else{
        return start()
        }
      },1000)}
},
[isPaused,counter, sound])

      function start(){
        return setTime(timeRef.current-=1)
      }
      function stop(){
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

      function nextPage() {
        if (time >= 0 && Number(localStorage.getItem('CurrentTask')) >= JSON.parse(localStorage.Tasks).length - 1){
          setCurrentTask(0)
          setCurrentRepeat(currentRepeat=>currentRepeat+1)
          }
        else {
          stop()
          setCurrentTask(currentTask=>currentTask+1)
          }
        }
    
    let hour = Math.floor(time / 3600)
    let minute = Math.floor((time - (hour * 3600)) / 60 )
    let second = time % 60

    second = second < 10 ? '0' + second: second
    minute = minute < 10 ? '0' + minute: minute
    hour = hour < 10 ? '0' + hour: hour
  return (
        <div className={classes.background}>
          <div className={classes.box}>
            <div className={classes.box__page}>
              <Link to='/menu' onClick={() => { stop(); localStorage.clear(); sound.stop()}}><Header/></Link>
              <div className={classes.set_place} style={{display:'flex', flexDirection:'column'}}>
                <span className='set_place__title' style={{flex:'0 1 -1px'}}>{JSON.parse(localStorage.Tasks).length !==0 ? JSON.parse(localStorage.Tasks)[currentTask].item: 'WORK'}</span>
                <div className='set_place__timer' style={{flex:'1 1 -1px'}}>{hour+ ':' + minute + ':' + second}</div>
                <ProgressBar road={(100 - road) + '%'}/>
                <div className='set_place__menu_buttons menu_buttons'>
                  {isPaused
                    ? <MiniButton function = {() =>falseChanger()} text='Start' position='relative' flex='1'/> :
                      <MiniButton function = {() =>trueChanger()} text='Pause' position='relative' flex='1'/>}
                  <Link to={JSON.parse(localStorage.Repeat).number <= JSON.parse(localStorage.CurrentRepeat) 
                        ? '/complete': '/breaktime'}
                        style={{position:'relative', flex:1}}
                        onMouseUp={()=>nextPage()}
                        onClick={()=> sound.stop()}>
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

export default Work