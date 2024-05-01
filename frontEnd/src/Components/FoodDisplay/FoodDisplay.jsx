import React from 'react'
import { useContext } from 'react'
import { RecipesContext } from '../../context/RecipesContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'


const FoodDisplay = ({category}) => {
const{food_list}=useContext(RecipesContext)

    return (
    <div className='food-display' id='food-display'>
        <h2> Top Recipes For You</h2>
      <div className="food-display-list">
          {food_list.map((item,index)=>{
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} time={item.time} image={item.image}/>
          } )}
      </div>
    </div>
  )
}

export default FoodDisplay

