import React from "react";
import { useState } from "react";

import './header.scss'


const Header = (props) =>{
  const [textColor, setTextColor] = useState('#564D4D')
  const [isChanged, setIsChanged] = useState(true)

  const handleChangeColorText = () => {
    setIsChanged(!isChanged)
    setTextColor(isChanged ? '#564D4D' : 'rgb(213, 40, 40)')
  }
  const handleChangeColorTextOver = () =>{
    setIsChanged(false)
    setTextColor(isChanged ? 'rgb(213, 40, 40)' : '#564D4D')
  
  }

  return (
      <>
        <div className='head_place' style={{transform:props.transform}} onMouseDown={handleChangeColorText} onMouseUp={handleChangeColorText} onMouseOver={handleChangeColorTextOver}>
          <span className='head_place__text' style={{color: textColor}}>POMODORO TIMER</span>
        </div>
        <div className='head_place__shadow'></div>
      </>
    )
}

export default Header