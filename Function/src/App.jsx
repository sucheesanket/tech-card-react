import React from 'react'

const App = () => {
  
  return (
    <div>
 
      <input onChange={function change(elem){
        console.log (elem.target.value)
      }} type="text" placeholder='type something....' />
    </div>
  )
}

export default App
