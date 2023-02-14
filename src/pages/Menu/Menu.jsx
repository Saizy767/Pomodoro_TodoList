import {React, useEffect} from 'react';

import Header from '../../components/header/header'
import MenuButton from '../../components/menuButton/menuButton';

import './Menu.scss'
import classes from '../../styles/box.module.scss'


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
            <Header to={'/'}/>
            <div className='menu'>
              <MenuButton color='#FFE793'
                          text='Create to do list with timer'
                          backgroundcolor='#E5D084'
                          transformMain='translateY(10%)'
                          to={'/todo'}
                          />
              <MenuButton color='#FFB7A0'
                          text='Select timer'
                          backgroundcolor='#E0A18D'
                          to={'/settime'}
                          />
            </div>
        </div>
        <div className={classes.shadow}></div> 
      </div>
    </div>
  );
}

export default Menu