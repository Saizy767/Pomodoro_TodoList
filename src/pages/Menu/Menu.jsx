import {React, useEffect} from 'react';

import MenuButton from '../../components/menuButton/menuButton';
import BoxContainer from '../../components/BoxContainer/BoxContainer';

import './Menu.scss'


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
    <BoxContainer to={'/'}>
      <div className='menu'>
        <MenuButton color='#FFE793'
                    text='Create to do list with timer'
                    backgroundcolor='#E5D084'
                    transformMain='translateY(10%)'
                    to={'/todo'}/>
        <MenuButton color='#FFB7A0'
                    text='Select timer'
                    backgroundcolor='#E0A18D'
                    to={'/settime'}/>
      </div>
    </BoxContainer>
  );
}

export default Menu