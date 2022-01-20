import React from "react";
import fox from './image/fox.gif'
import './Fox.scss'

const Fox= (props) =>{
    return(
        <img src={fox} alt='fox' className='fox' style={{display:props.display}}></img>
    )
}

export default Fox