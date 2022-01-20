import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {React, useState, useEffect} from 'react';

import Header from '../../components/UI/header/header'
import ToDoInput from '../../components/UI/toDoInput/toDoInput';
import MiniButton from '../../components/UI/miniButton/miniButton';
import SetTimeHeader from '../../components/UI/SetTime/setTimeHeader';
import Button from '../../images/button.svg'
import WorkTimePlace from '../../components/UI/SetTime/workTime/workTimePlace';
import BreakTimePlace from '../../components/UI/SetTime/breakTime/breakTimePlace';
import Repeat from '../../components/UI/SetTime/repeatTime/repeatTimePlace';

import classes from '../../box.module.scss'
import './toDoList.scss'




const TodoList = (props) => {
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
      let counter = 1
      //todolist

      const[task, setTask]=useState('')
      const [tasks, setTasks]=useState(
          JSON.parse(localStorage.getItem('Tasks'))  || []
      )
  
      useEffect(()=>{
          localStorage.setItem('Tasks', JSON.stringify(tasks))
      },[tasks])
  
      const newTask = (item,id) =>{
          if(task.trim() !== '' && tasks.length <=5){
              const newTask ={
                  item,
                  id
              }
          setTasks((tasks) => [...tasks, newTask])
          setTask('')
          }
        }
      const setAllTasks = () =>{
        newTask(task,tasks.length +1)
        if(document.getElementsByClassName('main_setTimeClockBreak__UIRp6').length !==0){
          console.log('break set')
          newMinuteRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[0].value,'minute','break')
          newSecondRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[1].value,'second','break')
          newHourRest(document.getElementsByClassName('main_setTimeClockBreak__UIRp6')[2].value,'hour','break')
        }
        if(document.getElementsByClassName('main_setTimeClockRepeat__6ktBY').length !== 0){
          console.log('repeat set')
          newRepeat(document.getElementsByClassName('main_setTimeClockRepeat__6ktBY')[0].value,'repeat')
        }
        if(document.getElementsByClassName('main_setTimeClockWork__3tMXF').length !== 0){
          newMinute(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[0].value, 'minute','work')
          newSecond(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[1].value, 'second','work')
          newHour(document.getElementsByClassName('main_setTimeClockWork__3tMXF')[2].value, 'hour','work')
        }
      }
  
  return (
    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
            <Link to='/menu' onClick={()=>localStorage.clear()}>
              <Header/>
            </Link>
            <div className={classes.set_place} style={{flexDirection:'row'}}>
                <div style={{flex:'3'}}>
                  <SetTimeHeader paddingTop='10%'/>
                  {props.workTime && <WorkTimePlace/>}
                  {props.breakTime && <BreakTimePlace/>}
                  {props.repeat && <Repeat/>}
                </div>
                <div className='set_place__to_do_list'>
                <label style={{marginBottom:'10px', paddingLeft:'15%'}}>TodoList</label>
                <ul style={{padding:'0px', marginTop:'13%', marginLeft:'10%'}}>
                <ToDoInput number={counter++} onChange={(element)=>setTask(element.target.value)}/>
                  {tasks.length <=5 ? tasks.map(()=>{
                    return(
                    <ToDoInput number={counter++} onChange={(element)=>setTask(element.target.value)} key={JSON.parse(counter)}/>
                    )
                  }
                  ): ''}  
                </ul>
                { counter<=5? 
                  <input type='image' src={Button} onClick={setAllTasks} alt='button' style={{position:'relative', left:'50%', transform:'translate(-50%)'}}></input>
                  : ''}
                  </div>
                <Link to='/worktime' onMouseUp={setAllTasks}>
                <MiniButton text='START' />
                </Link>
            </div>
        </div>
        <div className={classes.box__shadow}></div> 
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)