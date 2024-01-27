import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgChanger from './components/BgChanger'

function App() {
  let [bg, setBg] = useState("Black")
  const bgColours = ["red", "green", "blue", "purple", "yellow", "orange", "pink", "gray"]
  let rand = Math.floor(Math.random() * 8 + 1)
  function nextBg() {
      bg=bgColours[rand]
      setBg(bg)
  }
  return (
    <div className=>
      <button onClick={nextBg} className='p-4 bg-white text-black border-8 border-black rounded font-bold text-xl'>Hello World</button>
      {/* <BgChanger/> */}
    </div>
  )
}

export default App
