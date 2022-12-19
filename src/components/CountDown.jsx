import React, { useEffect, useState } from 'react'
import './CountDown.css'

const CountDown = ({isCounting, 
                    isLastOne, 
                    setCurrentTimerId, 
                    currentTimerId, 
                    timerId, 
                    timeSec,
                    isReset
                    }) => {

    const [timeLeft, setTimeLeft] = useState(timeSec);
        
    const minutesLeft = Math.floor(timeLeft / 60);
    const secondsLeft = timeLeft - (minutesLeft * 60);

const updateTimer = () => {
    setTimeLeft(prev => prev - 1);
}

const resetTimer = () => {
    setTimeLeft(timeSec);
}

useEffect(() => {
    setTimeLeft(timeSec);
}, [timeSec])


useEffect(() => {
    if ((isReset.current) && (timerId === currentTimerId)) {
        resetTimer();
        console.log(timerId+' reseted');
        setCurrentTimerId(0);
        isReset.current = false;
    }
    if ((isCounting) && (timerId === currentTimerId)) {
        const interval = setInterval(() => {
            updateTimer();
            if(minutesLeft === 0) {
                if (secondsLeft === 0) {
                    if (isLastOne) {
                        setCurrentTimerId(0);
                    }else {
                    setCurrentTimerId(prev => prev + 1)}
                    resetTimer();
                    clearInterval(interval);
                }
            }
        }, 1000)
    return () => {
        clearInterval(interval);
        }
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[timeLeft, currentTimerId, isCounting, isReset])

  return (
    <div className={currentTimerId === timerId ? 'countdown-wrapper show' : 'countdown-wrapper hide'}>
    <span>Таймер {timerId}</span>
    <p>{minutesLeft.toString().padStart(2,0)}:{secondsLeft.toString().padStart(2,0)}</p>
    </div>
  )
}

export default CountDown
