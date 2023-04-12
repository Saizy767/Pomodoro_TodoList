import React from 'react'
import { Link } from 'react-router-dom'
import './buttonHome.scss'
import '../../styles/link.scss'

const Button = (props) =>{
  return (
    <div>
        <div className='button_home'>
          <Link to={props.to} className='link'>
              <span className='text_home'>START</span>
          </Link>
        </div>
        <div className='shadow_home'></div>
    </div>
      )
    }

export default Button