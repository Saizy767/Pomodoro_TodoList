import { Link } from 'react-router-dom';
import {React, useState, useEffect, useCallback} from 'react';

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
import { useSelector } from 'react-redux';
import { useSetTime } from '../../hooks/useSetTime';


const TodoList = () => {

    const {workTime, repeat, breakTime} = useSelector(state => state.switchTimer)
    let counter = 1

    const newMinute = useSetTime('Minute')
    const newHour = useSetTime('Hour')
    const newSecond = useSetTime('Second')

    const newMinuteRest = useSetTime('MinuteR')
    const newHourRest = useSetTime('HourR')
    const newSecondRest = useSetTime('SecondR')

    const newRepeat = useSetTime('Repeat')


useEffect(()=>{
    localStorage.setItem('CurrentRepeat', JSON.stringify(0))},
    [])
    const[task, setTask]=useState('')
    const [tasks, setTasks]=useState(
        JSON.parse(localStorage.getItem('Tasks'))  || []
    )

    useEffect(()=>{
        localStorage.setItem('Tasks', JSON.stringify(tasks))
    },[tasks])

    const newTask = useCallback((item,id) =>{
        if(task.trim() !== '' && tasks.length <=5){
            const newTask ={
                item,
                id
            }
        setTasks((tasks) => [...tasks, newTask])
        setTask('')
        }
    },[task, tasks.length])

      const setAllTasks = useCallback(() =>{
        newTask(task,tasks.length +1)

        const BreakElem = document.getElementsByClassName('li__input_break')
        const WorkElem = document.getElementsByClassName('li__input_work')
        const RepeatElem = document.getElementsByClassName('li__input_repeat')
        
        if(BreakElem.length){
          newMinuteRest(BreakElem[0].value,'minute','break')
          newSecondRest(BreakElem[1].value,'second','break')
          newHourRest(BreakElem[2].value,'hour','break')
        }
        if(RepeatElem.length){
          newRepeat(RepeatElem[0].value,'repeat')
        }
        if(WorkElem.length){
          newMinute(WorkElem[0].value, 'minute','work')
          newSecond(WorkElem[1].value, 'second','work')
          newHour(WorkElem[2].value, 'hour','work')
        }
      },[newHour, newHourRest, newMinute, 
        newMinuteRest, newRepeat, newSecond, 
        newSecondRest, newTask, task, tasks.length])

      const handleKeyPress = useCallback((event) => {
        if(event.key === 'Enter' & counter<=5){
          setAllTasks()
        }
      },[counter, setAllTasks])
  
  return (
    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
              <Header to={'/menu'} onClick={()=>localStorage.clear()}/>
            <div className={classes.set_place} style={{flexDirection:'row'}}>
                <div style={{flex:'3'}}>
                  <SetTimeHeader paddingTop='10%'/>
                  {workTime && <WorkTimePlace/>}
                  {breakTime && <BreakTimePlace/>}
                  {repeat && <Repeat/>}
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

export default TodoList