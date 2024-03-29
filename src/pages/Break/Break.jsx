import React, { useState, useMemo} from 'react'
import {Howl} from 'howler';

import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TimerSong from '../../song/Timer.mp3'

import './Break.scss'
import classes from '../../styles/box.module.scss'
import BoxContainer from '../../components/BoxContainer/BoxContainer';
import Timer from '../../components/Timer/Timer';
import BottomMenu from '../../components/BottonMenu/BottonMenu';


const Break = () => {
  const startHour= Number(JSON.parse(localStorage.HourR).number) || 0
  const startMinute= Number(JSON.parse(localStorage.MinuteR).number) || 0
  const startSecond= Number(JSON.parse(localStorage.SecondR).number) || 0

  const startTime = startHour * 3600 + startMinute * 60 + startSecond

  const [time, setTime]= useState(startTime)
  console.log(time)
  const road = time * 100 / startTime

  let intervalRef = React.useRef() 

  const sound = useMemo(()=>new Howl({
    src: [TimerSong],
    loop: true,
    volume: 1
  }),[])

  function stop(){
    return clearInterval(intervalRef.current)
  }

  const handlerClickToHead = () =>{
    stop();
    localStorage.clear()
    sound.stop()
  }
 
  return (
        <BoxContainer  to='/menu' onClick={() => handlerClickToHead()}>
            <div className={classes.set_place} style={{display:'flex', flexDirection:'column'}}>
              <span className='set_place__title'>BREAK</span>
              <Timer time={time}/>
              <ProgressBar road={(100 - road) + '%'}/>
              <BottomMenu time={time} sound={sound} 
                          stop={() => stop()} 
                          intervalRef={intervalRef} 
                          setTime={setTime}
                          to = {'/worktime'}/>
            </div>
        </BoxContainer>
      );
    }

export default Break