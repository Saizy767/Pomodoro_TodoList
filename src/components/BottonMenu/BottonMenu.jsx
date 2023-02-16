import MiniButton from "../miniButton/miniButton";
import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";


const BottomMenu = (props) => {
    const history = useNavigate()
    let [isPaused, setIsPaused]=useState(false)
    let isPausedRef = React.useRef(isPaused)
    let timeRef = React.useRef(props.time)

    function pauseChanger(bool) {
        if(props.time > 0){
          setIsPaused(() => bool)
          isPausedRef.current = bool
        }
    }
      
    useEffect(()=>{
        if(timeRef.current <= 0){
            props.sound.play()
        }
    },[props.sound])

    useEffect(() => {
        if (isPausedRef.current){
          return props.stop()
        }
        else{
          props.intervalRef.current = setInterval(() =>
          {
            if (timeRef.current <= 0){
              props.stop()
              props.sound.play()
              return history('/breaktime')
            }
            else{
              return props.setTime(timeRef.current -= 1)
            }
          },1000)
        }
      },
      [isPaused, history, props.sound, props])

    const NextClick = () => {
        props.sound.stop() 
        props.stop()
    }

    debugger
    return (
        <div className='set_place__menu_buttons menu_buttons'>
            {isPaused ? 
              <MiniButton function = {() =>pauseChanger(false)} text='Start' position='relative' flex='1'/> :
              <MiniButton function = {() =>pauseChanger(true)} text='Pause' position='relative' flex='1'/>}
            <Link to='/worktime' style={{position:'relative', flex:1}} onClick={() => NextClick()}>
              <MiniButton text='Next'/>
            </Link>
        </div>
    )
}

export default BottomMenu