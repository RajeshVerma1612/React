import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgChanger from './components/BgChanger'

function App() {
  let [colour, setColour] = useState("Black")
  const bgColours = ["red", "green", "blue", "purple", "yellow", "orange", "pink", "gray","levander"]
  function nextBg() {
    let rand = Math.floor(Math.random() * 10)
    colour=bgColours[rand]
    if(colour===undefined)
      colour="white"
    setColour(colour)
  }
  return (
    <div className='w-full h-screen flex justify-center items-center' style={{backgroundColor:colour}}>
      <button onClick={nextBg} className='p-4 bg-white text-black border-8 border-black rounded font-bold text-xl'
      style={{color:colour}}
      >{colour}</button>
      {/* <BgChanger/> */}
    </div>
  )
}

export default App
