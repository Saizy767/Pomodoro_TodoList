import { useState, useEffect } from "react"

export const useSetTime = (localTime) => {

    let [allTime, setAllTime] = useState(
        JSON.parse(localStorage.getItem(localTime)) || ''
    )

    useEffect(()=>{
        localStorage.setItem(localTime, JSON.stringify(allTime))
    },[allTime, localTime])

    function newTime(number,time,type){
        let newTime = {
            number,
            time,
            type
        }
    setAllTime(() => newTime)
    }
    return newTime
}