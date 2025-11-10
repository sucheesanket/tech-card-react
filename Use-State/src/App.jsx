import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function Increasingnum(){
    setnum(num+1)
  }
  function Decreasingnum(){
    setnum(num-1)
  }
  function Jumpnum(){
    setnum(num+5)
  }
  
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increasingnum}>Increasing</button>
      <button onClick={Decreasingnum}>Decreasing</button>
      <button onClick={Jumpnum}>Increasing by 5</button>
    </div>
  )
}

export default App
