import { combineReducers } from "redux";
import { warningMessageReduser } from "../reducers/warningMessageReducer";
import { workChangeReducer } from "../reducers/workTimeChangeReducer";
import { breakChangeReducer } from '../reducers/breakTimeChangeReducer'
import { switchTimeSetReducer } from "../reducers/switchTimeSetReducer";
import { repeatChangeReducer } from "../reducers/repeatTimeChangeReducer";


const rootReducer= combineReducers ({
    warning: warningMessageReduser,
    workTimer: workChangeReducer,
    breakTimer: breakChangeReducer,
    switchTimer: switchTimeSetReducer,
    repeatTimer: repeatChangeReducer,
    
})

export default rootReducer