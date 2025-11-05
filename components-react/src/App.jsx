import React from 'react'
import card from "./components/card.jsx"
import Navbar from './components/Navbar.jsx'

const App = () => {
  let age=22
  return (
    <div>
      {Navbar()}
      <div className="card">
        <h1>Suchee Sanket Behera</h1>
        <h5>my age is {age}</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit ex dignissimos dolorem?</p>
      </div>
      {card()}
    </div>
  )
}

export default App
