import React from 'react'

function BgChanger() {
    let [bg,setBg]=useState("Black")
    const bgColours=["red","green","blue","purple","yellow","orange","pink","gray"]
    let rand=(Math.random()*8+9)
    function change(){

    }
  return (
    <div>
      {/* <button onClick={change} className='p-4 border-2 bg-white'>Backgroung Changer</button> */}
      
    </div>
  )
}

export default BgChanger
