import rating_starts from '../../Assets/rating_starts.webp';

import React from 'react'
import './FoodItem.css'
const FoodItem = ({id,name,time,description,image}) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
          <img className='food-item-image' src={image} alt=""/> 
      </div>
      <div className="food-item-info">
          <div className="food-item-name-rating">
              <p>{name}</p>
              <img className='stars-image' src={rating_starts} alt=""/>
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-time">{time}</p>
      </div>
    </div>
  )
}

export default FoodItem
