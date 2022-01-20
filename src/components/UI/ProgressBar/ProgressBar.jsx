import React from "react";
import './ProgressBar.scss'

const ProgressBar= (props) => {
    return(
        <div className='road_place'>
            <div className='road' style={{width:props.road}}></div>
        </div>
    )
}

export default ProgressBar