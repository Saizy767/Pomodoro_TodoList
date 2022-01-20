import React from "react";
import './menuButton.scss'

const MenuButton = (props) =>{
    return (
        <div style={{transform:props.transformMain}}>
        <div className='button_menu' style={{backgroundColor:props.color}}>
            <span className='button_menu__text'>{props.text}</span>
        </div>
        <div className='button_menu__shadow' style={{backgroundColor:props.backgroundcolor, transform:props.transformShadow}}></div>
        </div>
    )
}

export default MenuButton