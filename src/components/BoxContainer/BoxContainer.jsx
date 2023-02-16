import React from "react"
import classes from '../../styles/box.module.scss'

const BoxContainer = (props) => {
    return(
        <div className={classes.background}>
            <div className={classes.box}>
                <div className={classes.box__page}>
                    {props.children}
                </div>
                <div className={classes.shadow}/>
             </div>
        </div>
    )
}

export default BoxContainer