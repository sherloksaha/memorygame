import React, { useState } from 'react'
import { Cards } from './Cards'

const App = () => {
  const [go,setGO]=useState(false);
  const [win,setWin]=useState(false);
  const [attempts,setAttempts]=useState(48);
  return (
    <div className='maindiv'>  
      <h1 style={{textAlign:'center'}}>React Memory Game</h1>
      <p style={{textAlign:'center'}}>Attemp : {attempts}</p>
      <Cards go={go} setGO={setGO} setWin={setWin} win={win} setAttempts={setAttempts}/>
     
    </div >
  )
}

export default App