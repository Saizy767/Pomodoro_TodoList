import React from "react"

const Timer = (props) => {
    let hour = Math.floor(props.time / 3600)
    let minute = Math.floor((props.time - hour * 3600) / 60 )
    let second = Math.floor(props.time % 60)
    
    second = second < 10 ? '0' + second : second
    minute = minute < 10 ? '0' + minute : minute
    hour = hour < 10 ? '0' + hour : hour

    return(
        <div className='set_place__timer'>
            {hour+ ':' + minute + ':' + second}
        </div>
    )
}

export default Timer