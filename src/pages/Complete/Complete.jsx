import React from 'react';
import { Link } from 'react-router-dom';

import MiniButton from '../../components/miniButton/miniButton'
import BoxContainer from '../../components/BoxContainer/BoxContainer';

import './Complete.scss'
import classes from '../../styles/box.module.scss'

const End = () => {
  return (
      <BoxContainer to='/'>
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
      </BoxContainer>
    );
  }
    

export default End