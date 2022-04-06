import React from "react";
import './miniButton.scss'

const MiniButton= (props) => {
    return (
        <div onClick={props.function}
         style={{position: props.position,
                flex: props.flex}}>
            <div className='button_mini'
>                <span className='button_mini__text'>{props.text}</span>
            </div>
            <div className='button_mini_shadow'></div>
        </div>
    )
}

export default MiniButton