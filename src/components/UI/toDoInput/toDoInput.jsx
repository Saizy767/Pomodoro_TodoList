import React from "react"
import './toDoInput.scss'

const ToDoInput = (props) =>{
    return (
        <>
        <li className='toDo_li'>
        <input className='toDo_place' onChange={props.onChange}></input>
        <span className='toDo_number'>{props.number}</span>
        </li>
        </>
    )
    }

export default ToDoInput