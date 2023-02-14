import React from "react";
import './ProgressBar.scss'

const ProgressBar= (props) => {
    return(
        <div className='progress_bar'>
            <div className='progress_bar__road' style={{width:props.road}}></div>
        </div>
    )
}

export default ProgressBar