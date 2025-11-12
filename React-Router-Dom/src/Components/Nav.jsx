import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <div className='nav'>
        <h2>Sheriyans</h2>
        <div>
          <Link to='/' >Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Nav
