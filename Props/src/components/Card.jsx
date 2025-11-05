import React from 'react'

const Card = (Props) => {
  return (
    <div>
      <div className="parent">
        <div className="cardbuild">
            <img src={Props.img} alt="" />
        <h1>{Props.user},{Props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
      </div>
    </div>
  )
}

export default Card

