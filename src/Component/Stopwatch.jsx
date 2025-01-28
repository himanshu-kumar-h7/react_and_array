import React, { useEffect, useState } from "react";

const Stopwatch = () => {
    
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [timerID, setTimerId] = useState(null)

    useEffect(() => {
        // Cleanup the interval on component unmount or when timer is paused
        return () => {
          if (timerID) {
            clearInterval(timerID);
          }
        };
      }, [timerID]); 


    const handleStart = () => {
        if(!isRunning){
            const id = setInterval(() => {
                setTimer(prevState => prevState + 1)
            },1000)
            setIsRunning(true)
            setTimerId(id)
        }
    }
const handleStop = () =>{
    clearInterval(timerID)
    setIsRunning(false)
    setTimerId(0)
}

    
    return(
        <div>
<p style={{backgroundColor :'yellow'}}>StopWatch</p>

 <button style={{margin: 5}} onClick={handleStart}>Start</button>
 <button style={{margin: 5}} > Pause</button>
 <button style={{margin: 5}} onClick={handleStop}>Reset</button>
 <p>{timer}</p>


        </div>
    )
}

export default Stopwatch;