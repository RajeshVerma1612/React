import React from 'react'

function BgChanger(props) {

  return (
      <button onClick={nextBg} className='p-4 bg-white text-black border-8 border-black rounded font-bold text-xl'>{props.colour}</button>      
  )
}

export default BgChanger
