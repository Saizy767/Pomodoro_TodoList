
export function TimeSharing (value, maxValue, timeFormat, secondFunc, minuteFunc, hourFunc, showWarning){
        if(value <= parseInt(maxValue)){
            switch(timeFormat){
                case('MINUTES'):{
                    minuteFunc(value)
                    break
                }
                case('HOURS'):{
                    hourFunc(value)
                    break
                }
                case('SECONDS'):{
                    secondFunc(value)
                    break
                }
                default:{}
            }
        }
        else if( value > maxValue){
            switch(timeFormat){
                case('MINUTES'):{
                    minuteFunc(maxValue)
                    break
                }
                case('HOURS'):{
                    hourFunc(maxValue)
                    break
                }
                case('SECONDS'):{
                    secondFunc(maxValue)
                    break
                }
                default:{}
            }
        }
        else{
            showWarning(timeFormat, maxValue)
        }
  }