import { useState, useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,SetLength]=useState(8)
  const [isnumber,SetNumber]=useState(false)
  const [ischaracter,SetCharacter]=useState(false)
  const [password,SetPassword]=useState("")

  const CreatePassword=useCallback(()=>{
    let pass=""
    let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers="0123456789"
    const characters="~!@#$_^&*"
    if(isnumber) letters+=numbers
    if(ischaracter) letters+=characters

    for(let i=0;i<length;i++){
      let num=Math.floor(Math.random()*letters.length+1)
      pass+=letters.charAt(num)
    }
    SetPassword(pass)
  },[length,isnumber,ischaracter,SetPassword]
  )
  const passRef=useRef(null)
  const CopyToClipboard=useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{CreatePassword()},[length,isnumber,ischaracter,SetPassword])

  return (
    <div className='w-full h-screen bg-gray-900 flex justify-center items-start'>
      <div className='p-8 mt-44 bg-gray-300 max-w-max  gap-4 rounded-md text-center'>
        <h1 className='text-4xl font-bold mb-4'>Password Generator</h1>
        <div className='w-full rounded-md overflow-hidden'>
          <input type="text" readOnly value={password} placeholder="Password" className='w-3/4 h-8 outline-none pl-2 text-orange-700' ref={passRef} />
          <button className='w-1/4 h-8 text-white font-bold bg-violet-950 hover:bg-violet-800' onClick={CopyToClipboard}>Copy</button>
        </div>
        <div className='flex gap-2 justify-center mt-2 font-medium text-fuchsia-800'>
          <input draggable="true" min={6} max={35} value={length} onChange={(e)=>{SetLength(e.target.value)}} type="range"/><label>Length({length})</label>
          <input type="checkbox" defaultValue={isnumber} id="incNumber" onChange={()=>{SetNumber((prev)=>!prev)}}/><label htmlFor='incNumber'>Numbers</label>
          <input type="checkbox" defaultValue={ischaracter} id="incCharacter" onChange={()=>{SetCharacter((prev)=>!prev)}}/><label htmlFor='incCharacter'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
