import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutp = () => {

    const navi =useNavigate
    const btnclicked=()=>{
        
        navi('/')
    }
  return (
    <div>
        <button onClick={btnclicked} className='bg-cyan-200 p-4 m-4 text-black rounded-lg cursor-pointer'>Return to Home page</button>
      <h1>About page</h1>
    </div>
  )
}

export default Aboutp
