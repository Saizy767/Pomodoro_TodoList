import React, { useState} from 'react'
import {Howl} from 'howler';

import Header from '../../components/header/header'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TimerSong from '../../song/Timer.mp3'

import './Break.scss'
import classes from '../../styles/box.module.scss'
import BoxContainer from '../../components/BoxContainer/BoxContainer';
import Timer from '../../components/Timer/Timer';
import BottomMenu from '../../components/BottonMenu/BottonMenu';


const Break = () => {
  const startHour= parseInt(JSON.parse(localStorage.Hour).number) || 0
  const startMinute= parseInt(JSON.parse(localStorage.Minute).number) || 0
  const startSecond= parseInt(JSON.parse(localStorage.Second).number) || 0

  const startTime = startHour * 3600 + startMinute * 60 + startSecond

  const [time, setTime]= useState(startTime)
  console.log(time)
  const road = time * 100 / startTime

  let intervalRef = React.useRef() 

  const sound = new Howl({
    src: [TimerSong],
    loop: true,
    volume: 1
  })

  function stop(){
    return clearInterval(intervalRef.current)
  }

  const handlerClickToHead = () =>{
    stop();
    localStorage.clear()
    sound.stop()
  }
  debugger
  return (
        <BoxContainer>
            <Header to='/menu' onClick={() => handlerClickToHead()}/>
            <div className={classes.set_place} style={{display:'flex', flexDirection:'column'}}>
              <span className='set_place__title'>BREAK</span>
              <Timer time={time}/>
              <ProgressBar road={(100 - road) + '%'}/>
              <BottomMenu time={time} sound={sound} 
                          stop={() => stop()} 
                          intervalRef={intervalRef} 
                          setTime={setTime}/>
            </div>
        </BoxContainer>
      );
    }

export default Break