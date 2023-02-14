import React from "react"
import './toDoInput.scss'

const ToDoInput = (props) =>{
    return (
        <li className='to_do_li'>
            <input className='to_do_li__input'onChange={props.onChange}></input>
            <span className='to_do_li__sequence'>{props.number}</span>
        </li>
    )
    }

export default ToDoInput