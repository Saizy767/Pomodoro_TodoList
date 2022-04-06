import React from 'react';
import { Link } from 'react-router-dom';

import MiniButton from '../../components/UI/miniButton/miniButton'
import Header from '../../components/UI/header/header'

import './Complete.scss'
import classes from '../../box.module.scss'

const End = () => {
  return (
        <div className={classes.background}>
          <div className={classes.box}>
            <div className={classes.box__page}>
            <Link to='/'><Header/></Link>
              <div className={classes.set_place}>
                  <span className='title'>Complete</span>
                  <Link to='/menu' onClick={()=> localStorage.clear()}>
                  <MiniButton text='Create new'
                              heightButton='36px'
                              widthButton='220px'
                              topButton='80%'
                              topButtonShadow='calc(80% + 10px)'
                              transformButton='translate(-50%,-80%)'/>
                  </Link>
              </div>
            </div>
            <div className={classes.shadow}></div> 
          </div>
        </div>
      );
    }
    

export default End