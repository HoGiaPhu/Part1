import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sum, setSum] = useState(0)
  const [value , setValue] = useState('')
  const [a, setA]= useState(0);
  const [b, setB]= useState(0);

  function handleSetA(e){
    setA(e.target.value);
  }

  function handleSetB(e){
    setB(e.target.value);
  }

  function handleClick ()  {
    var c = parseInt(a) + parseInt(b);
    setSum(c);
  }

  return (
    <>
      <h1>Sum</h1>
      <input  onChange={handleSetA} type="number" />
      <input  onChange={handleSetB} type="number" />
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>Sum: </span>
      <span>{sum}</span>
      <br />
    </>
  )
}

export default App;