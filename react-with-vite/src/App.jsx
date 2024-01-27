import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(0)
  const incValue=()=>{
    count=count+1
    setCount(count)
  }
  const decValue=()=>{
    if(count>0){
    count=count-1;
    setCount(count)
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h3>Counter is : {count} </h3>
      <button onClick={incValue}>Increase Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
