import React from "react"
import classes from '../../styles/box.module.scss'
import Header from "../header/header"

const BoxContainer = (props) => {
    return(
        <div className={classes.background}>
            <div className={classes.box}>
                <div className={classes.box__page}>
                    <Header to={props.to} onClick={props.onClick}/>
                    {props.children}
                </div>
                <div className={classes.shadow}/>
            </div>
        </div>
    )
}

export default BoxContainer