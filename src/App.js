import React, { useState, useRef } from 'react'

import UserBlock from './components/UserBlock';

import { tableRowTitles } from './data/tableTitles';
import { userData } from './data/userData';

import './App.css';

const INITIAL_TIME_SEC = 10;

function App() {
  const [currentTimerId, setCurrentTimerId] = useState(0);
  const [isCounting, setIsCounting] = useState(true);
  const [timeInterval, setTimeInterval] = useState(INITIAL_TIME_SEC);
  
  const isReset = useRef(false);
  

  const handleStopClick = () => {
    setIsCounting(false);
  }
  const handleStartClick = () => {
    setIsCounting(true);
  }
  const handleResetClick = () => {
    isReset.current = true;
  }
  const setNewInterval = (e) => {
    if (e.target.value >= 0) {
    setTimeInterval(e.target.value);
    }
  }
  



  return (
    <div className="App">
      <div className="users-block-wrapper">

      <UserBlock noTimer={true} colData={tableRowTitles}/>

        {userData.map((data, index) => {
          return <UserBlock key={index} isReset={isReset} colData={data} timerId={index} isCounting={isCounting} setCurrentTimerId={setCurrentTimerId} currentTimerId={currentTimerId} timeInterval={timeInterval} isLastOne={index === userData.length-1 ? true : false} />
        })}
        
      </div>
      <button className='button' disabled={isCounting ? true : false } onClick={handleStartClick}>Старт</button>
      <button className='button' disabled={!isCounting ? true : false } onClick={handleStopClick}>Остановить</button>
      <button className='button' onClick={handleResetClick}>Заново</button>
      <input type='number' value={timeInterval} onChange={e => setNewInterval(e)} />
    </div>
  );
}

export default App;
