import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Homep from './pages/Homep'
import Aboutp from './pages/Aboutp'
import Contactp from './pages/Contactp'
import { Route, Router, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Product from './pages/Product'
import Men from './pages/Men'
import Contactdets from './pages/Contactdets'


const App = () => {
  return (

    <div className='h-screen bg-black text-white'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Homep/>} />
        <Route path='/about' element={<Aboutp/>} />
        <Route path='/contact' element={<Contactp/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product/men' element={<Men/>} />
        <Route path='/contact/:id' element={<Contactdets/>}/>
        <Route path='*' element={<Notfound/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
