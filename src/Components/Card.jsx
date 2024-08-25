import React from 'react'
import '../styles/Card.css'

const Card = ({item, handleClick}) => {
  return (
        <div className='card'>
            <img className='img' src={item.image}/>
            <strong>{item.title}</strong>
            <p className='price'>₹ {item.price}</p>
            <button className='button' onClick={()=> handleClick(item)}>Add to cart</button>
        </div>
  )
}

export default Card