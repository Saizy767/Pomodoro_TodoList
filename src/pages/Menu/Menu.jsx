import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/UI/header/header'
import MenuButton from '../../components/UI/menuButton/menuButton';

import './Menu.scss'
import classes from '../../box.module.scss'


const Menu = (props) => {
  useEffect(()=>{
    if(localStorage.length < 9){
    localStorage.setItem('Minute', JSON.stringify({number:''}))
    localStorage.setItem('Hour', JSON.stringify({number:''}))
    localStorage.setItem('Second', JSON.stringify({number:''}))
    localStorage.setItem('MinuteR', JSON.stringify({number:''}))
    localStorage.setItem('HourR', JSON.stringify({number:''}))
    localStorage.setItem('SecondR', JSON.stringify({number:''}))
    localStorage.setItem('Repeat', JSON.stringify({number:''}))
    localStorage.setItem('Tasks',JSON.stringify([]))
    }
}
,[props])
  return (
    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
            <Link to='/'><Header/>
            </Link>
              <div className='menu'>
                <Link to='/todo'>
                <MenuButton color='#FFE793'
                            text='Create to do list with timer'
                            backgroundcolor='#E5D084'
                            transformMain='translateY(10%)'
                            />
                </Link>
                <Link to='/settime'>
                <MenuButton color='#FFB7A0'
                            text='Select timer'
                            backgroundcolor='#E0A18D'
                            />
                    
                </Link>
            </div>
        </div>
        <div className={classes.shadow}></div> 
      </div>
    </div>
  );
}

export default Menu