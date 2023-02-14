import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../styles/link.scss'

import './header.scss'


const Header = (props) =>{
  const [textColor, setTextColor] = useState('#564D4D')
  const [isChanged, setIsChanged] = useState(true)

  const handleChangeColorText = (bool) => {
    setIsChanged(bool)
    setTextColor(isChanged ? 'rgb(213, 40, 40)': '#564D4D')
  }
  
  return (
    <>
      <div className='head_place' style={{ transform: props.transform }}
                                  onClick={props.onClick !== undefined ? () => props.onClick() : (null)}
                                  onMouseDown={() => handleChangeColorText(false)}
                                  onMouseUp={() => handleChangeColorText(true)}>
        <Link to={props.to} className='link'>
          <span className='head_place__text' style={{ color: textColor }}>POMODORO TIMER</span>
        </Link>
      </div>
      <div className='head_place_shadow'></div>
    </>
  )
}

export default Header