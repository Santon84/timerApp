import React from 'react'
import CountDown from './CountDown'
import TableCol from './Table/TableCol'
import './UserBlock.css'



function UserBlock({isReset, noTimer, colData, isCounting, setCurrentTimerId, currentTimerId, timeInterval, timerId, isLastOne}) {
  
  return (
    
    <div className='user-block-wrapper'>
        <div className='timer-title'>
        {noTimer ? 'Ход' : <CountDown 
                              isReset={isReset}
                              isCounting={isCounting} 
                              setCurrentTimerId={setCurrentTimerId} 
                              currentTimerId={currentTimerId} 
                              timeSec={timeInterval} 
                              timerId={timerId} 
                              isLastOne={isLastOne}
                            />} </div>
        <div className={ currentTimerId === timerId ? 'user-body' : 'user-body disabled'}  >
        <TableCol colData = {colData}/> 
        </div>
    </div>
  )
}

export default  UserBlock
