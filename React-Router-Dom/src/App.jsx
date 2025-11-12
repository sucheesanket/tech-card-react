import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Nav from './Components/Nav';

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
