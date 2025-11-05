import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    
    <div className='hell'>
      
      <Card user="sanket" age={21} img="https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
      <Card user="prateek" age={28} img="https://images.unsplash.com/photo-1619198511074-680af0a21527?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" />
      <Card user="sanjeeb" age={25} img="https://images.unsplash.com/photo-1686401462218-f1dd5527d8ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600" />
      
      
    </div>
  )
}

export default App
