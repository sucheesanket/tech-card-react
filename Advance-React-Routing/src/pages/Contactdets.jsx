import React from 'react'
import { useParams } from 'react-router-dom'

const Contactdets = () => {
   const params= useParams()
  return (
    <div>
      <h1>{params.id} Contact details very well</h1>
    </div>
  )
}

export default Contactdets
