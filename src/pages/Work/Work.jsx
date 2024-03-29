import React, { useState, useEffect, useMemo } from 'react'
import { Link} from 'react-router-dom';
import {Howl} from 'howler';


import MiniButton from '../../components/miniButton/miniButton'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TimerSong from '../../song/Timer.mp3'
import Timer from '../../components/Timer/Timer'

import classes from '../../styles/box.module.scss'
import './Work.scss'
import BoxContainer from '../../components/BoxContainer/BoxContainer';


const Work = () => {

    const startHour= Number(JSON.parse(localStorage.Hour).number) || 0
    const startMinute= Number(JSON.parse(localStorage.Minute).number) || 0
    const startSecond= Number(JSON.parse(localStorage.Second).number) || 0

    const startTime = startHour * 3600 + startMinute * 60 + startSecond

    const [time, setTime]= useState(startTime)
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
        return setTime(timeRef.current-=1)
        }
      },1000)}
},
[isPaused,counter, sound])

      function stop(){
        return clearInterval(intervalRef.current)
      }
      
      function operatorChanger(bool) {
        if(time>0){
          setIsPaused(bool)
          isPausedRef.current = bool
        }
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
        
        const handlerClickToHead = () =>{
          stop();
          localStorage.clear()
          sound.stop()
        }

  return (
      <BoxContainer to='/menu' onClick={() => handlerClickToHead()}>
        <div className={classes.set_place} style={{display:'flex', flexDirection:'column'}}>
          <span className='set_place__title' style={{flex:'0 1 -1px'}}>{JSON.parse(localStorage.Tasks).length !==0 ? JSON.parse(localStorage.Tasks)[currentTask].item: 'WORK'}</span>
          <Timer time={time}/>
          <ProgressBar road={(100 - road) + '%'}/>
          <div className='set_place__menu_buttons menu_buttons'>
            {isPaused ? 
                <MiniButton function = {() =>operatorChanger(false)} text='Start' position='relative' flex='1'/> :
                <MiniButton function = {() =>operatorChanger(true)} text='Pause' position='relative' flex='1'/>}
            <Link to={JSON.parse(localStorage.Repeat).number <= JSON.parse(localStorage.CurrentRepeat) 
                  ? '/complete': '/breaktime'}
                  style={{position:'relative', flex:1}}
                  onMouseUp={()=>nextPage()}
                  onClick={()=> sound.stop()}>
                <MiniButton text='Next'/>
            </Link>
          </div>
        </div>
      </BoxContainer>
      );
    }

export default Work