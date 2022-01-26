import React, { useState , useEffect, useMemo} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import {Howl} from 'howler';

import Header from '../../components/UI/header/header'
import MiniButton from '../../components/UI/miniButton/miniButton'
import ProgressBar from '../../components/UI/ProgressBar/ProgressBar';
import TimerSong from '../../song/Timer.mp3'

import './Break.scss'
import classes from '../../box.module.scss'


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

    const sound = useMemo(()=> new Howl({
        src: [TimerSong],
        loop: true,
        volume: 1,})
        ,[])

    if(timeRef.current === 0){
      sound.play()}
    
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
        return start()
        }
      },1000)}
},
[isPaused, history, sound])
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
                      ? <MiniButton function = {() =>falseChanger()} text='Start' position='relative' flex='1'/> :
                      <MiniButton function = {() =>trueChanger()} text='Pause' position='relative' flex='1'/>}
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