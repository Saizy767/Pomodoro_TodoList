import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {React, useState, useEffect} from 'react';

import Header from '../../components/header/header'
import ToDoInput from '../../components/toDoInput/toDoInput';
import MiniButton from '../../components/miniButton/miniButton';
import SetTimeHeader from '../../components/SetTime/setTimeHeader';
import Button from '../../images/button.svg'
import WorkTimePlace from '../../components/SetTime/workTime/workTimePlace';
import BreakTimePlace from '../../components/SetTime/breakTime/breakTimePlace';
import Repeat from '../../components/SetTime/repeatTime/repeatTimePlace';

import classes from '../../styles/box.module.scss'
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
        }
      }
      const handleKeyPress = (event) => {
        if(event.key === 'Enter' & counter<=5){
          setAllTasks()
        }
      }
  
  return (
    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
              <Header to={'/menu'} onClick={()=>localStorage.clear()}/>
            <div className={classes.set_place} style={{flexDirection:'row'}}>
                <div style={{flex:'3'}}>
                  <SetTimeHeader paddingTop='10%'/>
                  {props.workTime && <WorkTimePlace/>}
                  {props.breakTime && <BreakTimePlace/>}
                  {props.repeat && <Repeat/>}
                </div>
                <div className='to_do_place'>
                    <label className='to_do_place__text'>TodoList</label>
                    <ul className='to_do_place__ul'>
                    <ToDoInput number={counter++} onKeyPress={handleKeyPress} onChange={(element)=>setTask(element.target.value)}/>
                        {tasks.length <=5 ? tasks.map(()=>{
                        return(
                    <ToDoInput number={counter++} onKeyPress={handleKeyPress} onChange={(element)=>setTask(element.target.value)} key={JSON.parse(counter)}/>
                        )}
                        ): ''}  
                    </ul>
                    { counter<=5? 
                    <input  type='image' src={Button} onClick={setAllTasks} alt='button' className='to_do_input'></input>
                    : ''}
                </div>
                <Link to='/worktime' onMouseUp={setAllTasks}>
                <MiniButton text='START' />
                </Link>
            </div>
        </div>
        <div className={classes.shadow}></div> 
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


export default connect(mapStateToProps, null)(TodoList)