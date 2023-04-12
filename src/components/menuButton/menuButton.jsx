import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/link.scss'

import './menuButton.scss'

const MenuButton = (props) =>{
    return (
        <div className='panel_menu' style={{margin:props.marginPanel}}>
                <div className='button_menu' style={{backgroundColor:props.color}}>
                <Link className='link' to={props.to}>
                    <span className='button_menu__text'>{props.text}</span>
                </Link>
                </div>
                <div className='shadow_menu' style={{backgroundColor:props.backgroundcolor,
                                                    transform:props.transformShadow}}>
                </div>
        </div>
    )
}

export default MenuButton