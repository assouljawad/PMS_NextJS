import React from 'react'
import FoodandwellnessCard from './foodandwellnessCard'

function FoodAndWellness() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Food And Wellness</h1>
        <button className='rounded-2xl py-2 px-5 bg-gray-500 text-white'>View More</button>
      </div>
      <div className='flex justify-between'>
        <FoodandwellnessCard/>
        <FoodandwellnessCard/>
        <FoodandwellnessCard/>
      </div>
    </div>
  )
}

export default FoodAndWellness