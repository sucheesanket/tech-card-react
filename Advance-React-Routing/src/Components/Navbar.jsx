import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='flex justify-between py-5 px-10 text-2xl bg-cyan-800'>
     <h2 className='font-bold text-2xl'>Sheriyans</h2>
     <div className='flex gap-7'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      
     </div>
    </div>
  )
}

export default Navbar
