import classes from '../../box.module.scss'
import Header from '../../components/UI/header/header'
import React, { useState, useEffect } from 'react'
import MiniButton from '../../components/UI/miniButton/miniButton'
import { Link} from 'react-router-dom';
import ProgressBar from '../../components/UI/ProgressBar/ProgressBar';
import { connect } from 'react-redux';
import './Work.scss'





const Work = (props) => {
    const startHour= JSON.parse(localStorage.Hour).number
    const startMinute= JSON.parse(localStorage.Minute).number
    const startSecond= JSON.parse(localStorage.Second).number
    const [time, setTime]= useState(Number(startHour) * 3600 + Number(startMinute) * 60 + Number(startSecond))
    const startTime = Number(startHour) * 3600 + Number(startMinute) * 60 + Number(startSecond)
    let [isPaused, setIsPaused]=useState(false)
    let timeRef = React.useRef(time)
    let isPausedRef = React.useRef(isPaused)
    let intervalRef = React.useRef() 
    let road = (time * 100)/startTime
    let counter = 0

    const [currentRepeat, setCurrentRepeat] = useState(
      JSON.parse(localStorage.getItem('CurrentRepeat')) || 0
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
    
    useEffect(() => {
      if (isPausedRef.current){
        return stop()
      }
      else{
      intervalRef.current = setInterval(() =>
      {
        if (timeRef.current <= 0){
          stop()
        }
        else{
        return start()
        }
      },1000)}
},
[isPaused,counter])

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
    if(second < 10) second = '0'+ second
    if(minute < 10) minute = '0'+ minute
    if(hour < 10) hour = '0'+ hour
  return (
        <div className={classes.background}>
          <div className={classes.box}>
            <div className={classes.box__page}>
            <Link to='/menu' onClick={() => { stop(); localStorage.clear();}}><Header/></Link>
              <div className={classes.set_place} style={{display:'flex', flexDirection:'column'}}>
                    <span className='title' style={{flex:'0 1 -1px'}}>{JSON.parse(localStorage.Tasks).length !==0 ? JSON.parse(localStorage.Tasks)[currentTask].item: 'WORK'}</span>
                    <div className='time' style={{flex:'1 1 -1px'}}>{hour+ ':' + minute + ':' + second}</div>
                    <ProgressBar road={(100 - road) + '%'}/>
                    <div className='menu_buttons'>
                      {isPaused
                      ? <MiniButton function = {() =>falseChanger()} text='Start' position='relative' flex='1'/> :
                      <MiniButton function = {() =>trueChanger()} text='Pause' position='relative' flex='1'/>}
                      <Link to={JSON.parse(localStorage.Repeat).number <= JSON.parse(localStorage.CurrentRepeat) ? '/complete': '/breaktime'}
                            style={{position:'relative', flex:1}}
                            onMouseUp={()=>nextPage()}>
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

export default connect(null,null)(Work)